"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { useCart } from "@/components/CartProvider";
import {
  ORDER_STORAGE_KEY,
  paymentMethodLabels,
  type OrderSummary,
} from "@/lib/cart/order";
import { formatPrice } from "@/lib/data/products";

type VerifyResponse =
  | { ok: true; order: OrderSummary; mode: "demo" | "komoju" }
  | { ok: false; error: string };

type VerifyState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ok"; order: OrderSummary };

export default function CheckoutComplete() {
  const searchParams = useSearchParams();
  const { clearCart } = useCart();

  const token = searchParams.get("token");
  const komojuSessionId =
    searchParams.get("session_id") || searchParams.get("sessionId");

  const [verify, setVerify] = useState<VerifyState>({ status: "loading" });

  useEffect(() => {
    if (!token) return;

    let cancelled = false;

    (async () => {
      try {
        const res = await fetch("/api/checkout/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token,
            ...(komojuSessionId ? { komojuSessionId } : {}),
          }),
        });
        const data = (await res.json()) as VerifyResponse;
        if (cancelled) return;

        if (!data.ok) {
          setVerify({
            status: "error",
            message: data.error || "注文の確認に失敗しました",
          });
          return;
        }

        window.sessionStorage.setItem(
          ORDER_STORAGE_KEY,
          JSON.stringify(data.order),
        );
        clearCart();
        setVerify({ status: "ok", order: data.order });
      } catch {
        if (!cancelled) {
          setVerify({
            status: "error",
            message: "通信エラーが発生しました",
          });
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [token, komojuSessionId, clearCart]);

  if (!token) {
    return (
      <ErrorView message="注文トークンが見つかりません" />
    );
  }

  if (verify.status === "loading") {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <p className="text-sm text-[#6b6b6b]">注文内容を確認しています...</p>
      </div>
    );
  }

  if (verify.status === "error") {
    return <ErrorView message={verify.message} />;
  }

  const { order } = verify;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb
        items={[
          { label: "TOP", href: "/" },
          { label: "ご注文完了" },
        ]}
      />

      <div className="mt-12 text-center">
        <p className="text-xs tracking-[0.2em] text-accent-2">THANK YOU</p>
        <h1 className="mt-3 font-serif text-3xl text-text md:text-4xl">
          ご注文ありがとうございました
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#6b6b6b]">
          注文確認メールを送信しました。
          <br />
          発送準備が整い次第、改めてご案内いたします。
        </p>
      </div>

      <div className="mt-10 rounded-sm border border-[#e8e2d9] bg-main p-6 md:p-8">
        <dl className="space-y-4 text-sm">
          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
            <dt className="text-[#6b6b6b]">注文番号</dt>
            <dd className="font-medium text-text">{order.orderId}</dd>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
            <dt className="text-[#6b6b6b]">お支払い方法</dt>
            <dd>{paymentMethodLabels[order.customer.paymentMethod]}</dd>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6">
            <dt className="shrink-0 text-[#6b6b6b]">お届け先</dt>
            <dd className="min-w-0 break-words text-left sm:text-right">
              {order.customer.name} 様
              <br />
              〒{order.customer.postalCode}
              <br />
              {order.customer.prefecture}
              {order.customer.address}
            </dd>
          </div>
          <div className="flex justify-between border-t border-[#e8e2d9] pt-4 text-base">
            <dt className="font-medium">お支払い合計（税込）</dt>
            <dd className="font-medium text-accent-1">
              {formatPrice(order.total)}
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/"
          className="inline-flex min-w-44 items-center justify-center rounded-sm bg-accent-1 px-6 py-3 text-sm text-white transition-colors hover:bg-accent-1-hover"
        >
          TOPへ戻る
        </Link>
        <Link
          href="/mypage/orders"
          className="inline-flex min-w-44 items-center justify-center rounded-sm border border-accent-1 px-6 py-3 text-sm text-accent-1 transition-colors hover:bg-accent-1 hover:text-white"
        >
          注文履歴を見る
        </Link>
      </div>
    </div>
  );
}

function ErrorView({ message }: { message: string }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center md:px-6">
      <h1 className="font-serif text-2xl text-text">注文を確認できません</h1>
      <p className="mt-3 text-sm text-[#6b6b6b]">{message}</p>
      <Link
        href="/cart"
        className="mt-8 inline-flex items-center justify-center rounded-sm bg-accent-1 px-6 py-3 text-sm text-white transition-colors hover:bg-accent-1-hover"
      >
        カートへ戻る
      </Link>
    </div>
  );
}
