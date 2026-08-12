type KomojuSession = {
  id: string;
  status: string;
  amount: number;
  currency: string;
  session_url?: string;
  external_order_num?: string;
  payment_data?: {
    external_order_num?: string;
  };
  payment?: {
    status?: string;
    amount?: number;
    external_order_num?: string;
  } | null;
};

function getSecretKey(): string | null {
  return process.env.KOMOJU_SECRET_KEY?.trim() || null;
}

function authHeader(secret: string): string {
  return `Basic ${Buffer.from(`${secret}:`).toString("base64")}`;
}

function apiBase(): string {
  return (
    process.env.KOMOJU_API_BASE?.replace(/\/$/, "") ||
    "https://komoju.com/api/v1"
  );
}

export function isKomojuConfigured(): boolean {
  return Boolean(getSecretKey());
}

/** KOMOJU Hosted Page 向けに決済セッションを作成 */
export async function createKomojuSession(input: {
  amount: number;
  orderId: string;
  email: string;
  returnUrl: string;
  paymentTypes?: string[];
}): Promise<{ sessionId: string; sessionUrl: string }> {
  const secret = getSecretKey();
  if (!secret) {
    throw new Error("KOMOJU_SECRET_KEY is not configured");
  }

  const body: Record<string, unknown> = {
    amount: input.amount,
    currency: "JPY",
    return_url: input.returnUrl,
    email: input.email,
    payment_data: {
      external_order_num: input.orderId,
    },
    metadata: {
      order_id: input.orderId,
    },
  };

  if (input.paymentTypes?.length) {
    body.payment_types = input.paymentTypes;
  }

  const res = await fetch(`${apiBase()}/sessions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authHeader(secret),
      Accept: "application/json",
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  const data = (await res.json()) as KomojuSession & {
    error?: { message?: string };
  };

  if (!res.ok || !data.id || !data.session_url) {
    const message =
      data.error?.message || `KOMOJU session create failed (${res.status})`;
    throw new Error(message);
  }

  return { sessionId: data.id, sessionUrl: data.session_url };
}

export async function getKomojuSession(
  sessionId: string,
): Promise<KomojuSession> {
  const secret = getSecretKey();
  if (!secret) {
    throw new Error("KOMOJU_SECRET_KEY is not configured");
  }

  const res = await fetch(
    `${apiBase()}/sessions/${encodeURIComponent(sessionId)}`,
    {
      method: "GET",
      headers: {
        Authorization: authHeader(secret),
        Accept: "application/json",
      },
      cache: "no-store",
    },
  );

  const data = (await res.json()) as KomojuSession & {
    error?: { message?: string };
  };

  if (!res.ok || !data.id) {
    const message =
      data.error?.message || `KOMOJU session fetch failed (${res.status})`;
    throw new Error(message);
  }

  return data;
}

/** セッション完了かつ金額・注文番号の一致を確認 */
export function isKomojuPaymentSuccessful(
  session: KomojuSession,
  expectedAmount: number,
  expectedOrderId?: string,
): boolean {
  if (session.amount !== expectedAmount) return false;
  if (session.currency && session.currency.toUpperCase() !== "JPY") {
    return false;
  }

  if (expectedOrderId) {
    const external =
      session.external_order_num ||
      session.payment_data?.external_order_num ||
      session.payment?.external_order_num;
    if (external && external !== expectedOrderId) return false;
  }

  if (session.status === "completed") return true;
  const paymentStatus = session.payment?.status;
  return (
    paymentStatus === "captured" ||
    paymentStatus === "authorized" ||
    paymentStatus === "pending"
  );
}

export function paymentTypesForMethod(
  method: "credit" | "applepay" | "cod",
): string[] | undefined {
  switch (method) {
    case "credit":
      return ["credit_card"];
    case "applepay":
      return ["apple_pay"];
    default:
      return undefined;
  }
}
