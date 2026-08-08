import { NextResponse } from "next/server";
import {
  buildOrderFromCatalog,
  toSignedPayload,
} from "@/lib/checkout/build-order";
import {
  createKomojuSession,
  isKomojuConfigured,
  paymentTypesForMethod,
} from "@/lib/komoju/client";
import { signPayload } from "@/lib/security/sign";
import { createCheckoutSchema } from "@/lib/validation/checkout";

export const runtime = "nodejs";

function siteOrigin(request: Request): string {
  const env = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (env) return env;
  const url = new URL(request.url);
  return url.origin;
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "不正なリクエストです" },
      { status: 400 },
    );
  }

  const parsed = createCheckoutSchema.safeParse(json);
  if (!parsed.success) {
    const message =
      parsed.error.issues[0]?.message || "入力内容を確認してください";
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }

  const built = buildOrderFromCatalog(
    parsed.data.customer,
    parsed.data.items,
  );
  if ("error" in built) {
    return NextResponse.json(
      { ok: false, error: built.error },
      { status: 400 },
    );
  }

  const { order } = built;
  const method = order.customer.paymentMethod;
  const useKomoju = isKomojuConfigured() && method !== "cod";

  if (!useKomoju) {
    const payload = toSignedPayload(order, "demo");
    const token = signPayload(payload);
    return NextResponse.json({
      ok: true,
      mode: "demo" as const,
      token,
      order,
    });
  }

  try {
    const payload = toSignedPayload(order, "komoju");
    const token = signPayload(payload);
    const origin = siteOrigin(request);
    const returnUrl = `${origin}/checkout/complete?token=${encodeURIComponent(token)}`;

    const session = await createKomojuSession({
      amount: order.total,
      orderId: order.orderId,
      email: order.customer.email,
      returnUrl,
      paymentTypes: paymentTypesForMethod(method),
    });

    return NextResponse.json({
      ok: true,
      mode: "komoju" as const,
      token,
      sessionUrl: session.sessionUrl,
      sessionId: session.sessionId,
      order,
    });
  } catch (error) {
    console.error("[checkout/create] KOMOJU error:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "決済の開始に失敗しました。時間をおいて再度お試しください。",
      },
      { status: 502 },
    );
  }
}
