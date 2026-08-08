import { createHmac, timingSafeEqual } from "crypto";

function getSigningSecret(): string {
  const secret =
    process.env.CHECKOUT_SIGNING_SECRET ||
    process.env.KOMOJU_SECRET_KEY ||
    "";
  if (!secret) {
    // 開発時のみ。本番では必ず環境変数を設定すること
    if (process.env.NODE_ENV === "production") {
      throw new Error("CHECKOUT_SIGNING_SECRET or KOMOJU_SECRET_KEY is required");
    }
    return "nook-dev-signing-secret-change-me";
  }
  return secret;
}

export function signPayload(payload: object): string {
  const body = Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
  const sig = createHmac("sha256", getSigningSecret())
    .update(body)
    .digest("base64url");
  return `${body}.${sig}`;
}

export function verifySignedPayload<T>(token: string): T | null {
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;

  const expected = createHmac("sha256", getSigningSecret())
    .update(body)
    .digest("base64url");

  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return null;
  }

  try {
    const json = Buffer.from(body, "base64url").toString("utf8");
    return JSON.parse(json) as T;
  } catch {
    return null;
  }
}
