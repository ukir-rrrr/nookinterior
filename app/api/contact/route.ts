import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/checkout";

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

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    const message =
      parsed.error.issues[0]?.message || "入力内容を確認してください";
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }

  // DBなし運用: サーバー側で検証済みであることのみ保証。
  // 本番ではここでメール送信やチケット連携を行う。
  console.info("[contact]", {
    name: parsed.data.name,
    email: parsed.data.email,
    subject: parsed.data.subject,
    messageLength: parsed.data.message.length,
  });

  return NextResponse.json({ ok: true });
}
