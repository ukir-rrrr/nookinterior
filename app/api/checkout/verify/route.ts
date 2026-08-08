import { NextResponse } from "next/server";
import {
  toPublicOrder,
  type SignedOrderPayload,
} from "@/lib/checkout/build-order";
import {
  getKomojuSession,
  isKomojuPaymentSuccessful,
} from "@/lib/komoju/client";
import { verifySignedPayload } from "@/lib/security/sign";
import { verifyCheckoutSchema } from "@/lib/validation/checkout";

export const runtime = "nodejs";

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

  const parsed = verifyCheckoutSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "検証トークンが不正です" },
      { status: 400 },
    );
  }

  const payload = verifySignedPayload<SignedOrderPayload>(parsed.data.token);
  if (!payload) {
    return NextResponse.json(
      { ok: false, error: "注文トークンの署名が不正です" },
      { status: 401 },
    );
  }

  if (typeof payload.exp !== "number" || Date.now() > payload.exp) {
    return NextResponse.json(
      { ok: false, error: "注文セッションの有効期限が切れています" },
      { status: 401 },
    );
  }

  if (
    !payload.orderId ||
    typeof payload.total !== "number" ||
    !Array.isArray(payload.items) ||
    !payload.customer
  ) {
    return NextResponse.json(
      { ok: false, error: "注文データの形式が不正です" },
      { status: 400 },
    );
  }

  if (payload.mode === "komoju") {
    const sessionId = parsed.data.komojuSessionId?.trim();
    if (!sessionId) {
      return NextResponse.json(
        {
          ok: false,
          error: "決済セッションIDがありません。決済画面から再度お進みください。",
        },
        { status: 400 },
      );
    }

    try {
      const session = await getKomojuSession(sessionId);
      if (
        !isKomojuPaymentSuccessful(session, payload.total, payload.orderId)
      ) {
        return NextResponse.json(
          {
            ok: false,
            error: "決済が完了していません。支払い状況をご確認ください。",
            status: session.status,
          },
          { status: 402 },
        );
      }
    } catch (error) {
      console.error("[checkout/verify] KOMOJU error:", error);
      return NextResponse.json(
        { ok: false, error: "決済状況の確認に失敗しました" },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({
    ok: true,
    order: toPublicOrder(payload),
    mode: payload.mode,
  });
}
