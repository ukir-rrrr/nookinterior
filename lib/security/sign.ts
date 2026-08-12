import { createHmac, timingSafeEqual } from "crypto";

const MIN_SECRET_LENGTH = 32;

function getSigningSecret(): string {
  const secret = process.env.CHECKOUT_SIGNING_SECRET?.trim() || "";

  // 決済APIキーの流用は漏洩時の影響範囲が広がるため、本番は専用シークレットを必須にする
  if (process.env.NODE_ENV === "production") {
    if (!secret) {
      throw new Error("CHECKOUT_SIGNING_SECRET is required in production");
    }
    if (secret.length < MIN_SECRET_LENGTH) {
      throw new Error(
        `CHECKOUT_SIGNING_SECRET must be at least ${MIN_SECRET_LENGTH} characters`,
      );
    }
    return secret;
  }

  // 開発時のみフォールバック。共有環境では .env.local に必ず設定すること
  return secret || process.env.KOMOJU_SECRET_KEY?.trim() || "roomy-dev-signing-secret-change-me";
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
