"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { useCart } from "@/components/CartProvider";
import { getCartTotal, getUnitPrice } from "@/lib/cart/pricing";
import {
  ORDER_STORAGE_KEY,
  paymentMethodLabels,
  type CheckoutFormData,
  type OrderSummary,
  type PaymentMethod,
} from "@/lib/cart/order";
import { SHIPPING_FLAT, SHIPPING_FREE_THRESHOLD } from "@/lib/cart/types";
import { formatPrice, getProductById } from "@/lib/data/products";

const paymentOptions: PaymentMethod[] = ["credit", "applepay", "cod"];

const initialForm: CheckoutFormData = {
  name: "",
  email: "",
  phone: "",
  postalCode: "",
  prefecture: "",
  address: "",
  paymentMethod: "credit",
};

type CreateCheckoutResponse =
  | {
      ok: true;
      mode: "demo";
      token: string;
      order: OrderSummary;
    }
  | {
      ok: true;
      mode: "komoju";
      token: string;
      sessionUrl: string;
      sessionId: string;
      order: OrderSummary;
    }
  | { ok: false; error: string };

export default function CheckoutForm() {
  const router = useRouter();
  const { items, ready, clearCart } = useCart();
  const [form, setForm] = useState<CheckoutFormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { subtotal, shipping, total, itemCount } = getCartTotal(items);

  if (!ready) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <p className="text-sm text-[#6b6b6b]">読み込み中...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
        <Breadcrumb
          items={[
            { label: "TOP", href: "/" },
            { label: "カート", href: "/cart" },
            { label: "お支払い・ご購入手続き" },
          ]}
        />
        <div className="mt-16 text-center">
          <h1 className="font-serif text-2xl text-text md:text-3xl">
            カートに商品がありません
          </h1>
          <p className="mt-3 text-sm text-[#6b6b6b]">
            商品をカートに追加してから、ご購入手続きへお進みください。
          </p>
          <Link
            href="/cart"
            className="mt-8 inline-flex items-center justify-center rounded-sm bg-accent-1 px-6 py-3 text-sm text-white transition-colors hover:bg-accent-1-hover"
          >
            カートへ戻る
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      // 価格は送らない。商品ID・オプション・数量と顧客情報のみ
      const res = await fetch("/api/checkout/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: form,
          items: items.map((item) => ({
            productId: item.productId,
            colorId: item.colorId,
            colorLabel: item.colorLabel,
            sizeId: item.sizeId,
            sizeLabel: item.sizeLabel,
            quantity: item.quantity,
          })),
        }),
      });

      const data = (await res.json()) as CreateCheckoutResponse;
      if (!data.ok) {
        setError(data.error || "注文の作成に失敗しました");
        setSubmitting(false);
        return;
      }

      if (data.mode === "komoju") {
        // 決済前にカートは残す（キャンセル戻りで再購入できるようにする）
        window.location.assign(data.sessionUrl);
        return;
      }

      // デモ完了: サーバー再計算済みの注文のみ保存し、トークン付きで完了ページへ
      window.sessionStorage.setItem(
        ORDER_STORAGE_KEY,
        JSON.stringify(data.order),
      );
      clearCart();
      router.push(
        `/checkout/complete?token=${encodeURIComponent(data.token)}`,
      );
    } catch {
      setError("通信エラーが発生しました。再度お試しください。");
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb
        items={[
          { label: "TOP", href: "/" },
          { label: "カート", href: "/cart" },
          { label: "お支払い・ご購入手続き" },
        ]}
      />

      <div className="mt-8 mb-10">
        <p className="text-xs tracking-[0.2em] text-accent-2">CHECKOUT</p>
        <h1 className="mt-2 font-serif text-3xl text-text">お支払い・ご購入手続き</h1>
        <p className="mt-2 text-sm text-[#6b6b6b]">
          配送先情報とお支払い方法をご入力ください。金額はサーバー側で再計算されます。
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-12"
      >
        <div className="space-y-10">
          <section>
            <h2 className="mb-4 font-serif text-xl text-text">お客様情報</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1.5 block text-[#6b6b6b]">お名前</span>
                <input
                  required
                  name="name"
                  maxLength={80}
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none focus:border-accent-1"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block text-[#6b6b6b]">メールアドレス</span>
                <input
                  required
                  type="email"
                  name="email"
                  maxLength={254}
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none focus:border-accent-1"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block text-[#6b6b6b]">電話番号</span>
                <input
                  required
                  type="tel"
                  name="phone"
                  maxLength={20}
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none focus:border-accent-1"
                />
              </label>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-text">お届け先</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block text-[#6b6b6b]">郵便番号</span>
                <input
                  required
                  name="postalCode"
                  placeholder="1000001"
                  maxLength={8}
                  autoComplete="postal-code"
                  value={form.postalCode}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, postalCode: e.target.value }))
                  }
                  className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none focus:border-accent-1"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block text-[#6b6b6b]">都道府県</span>
                <input
                  required
                  name="prefecture"
                  maxLength={20}
                  autoComplete="address-level1"
                  value={form.prefecture}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, prefecture: e.target.value }))
                  }
                  className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none focus:border-accent-1"
                />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1.5 block text-[#6b6b6b]">住所</span>
                <input
                  required
                  name="address"
                  maxLength={200}
                  autoComplete="street-address"
                  value={form.address}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, address: e.target.value }))
                  }
                  className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none focus:border-accent-1"
                />
              </label>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl text-text">お支払い方法</h2>
            <ul className="space-y-2">
              {paymentOptions.map((method) => {
                const isActive = form.paymentMethod === method;
                return (
                  <li key={method}>
                    <label
                      className={`flex cursor-pointer items-center gap-3 rounded-sm border px-4 py-3 text-sm transition-colors ${
                        isActive
                          ? "border-accent-1 bg-[#fdf3ee]"
                          : "border-[#d9d2c8] hover:border-accent-1"
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method}
                        checked={isActive}
                        onChange={() =>
                          setForm((prev) => ({ ...prev, paymentMethod: method }))
                        }
                        className="accent-[#c97c5d]"
                      />
                      {paymentMethodLabels[method]}
                    </label>
                  </li>
                );
              })}
            </ul>
            <p className="mt-3 text-xs text-[#6b6b6b]">
              KOMOJU の Secret Key が設定されている場合は決済ページへ遷移します。未設定時はサーバー検証付きデモ注文になります。
            </p>
          </section>

          {error ? (
            <p
              role="alert"
              className="rounded-sm border border-[#d9a39a] bg-[#fdf3f1] px-4 py-3 text-sm text-[#8a3b2e]"
            >
              {error}
            </p>
          ) : null}
        </div>

        <aside className="h-fit rounded-sm bg-[#f1ede7] p-6">
          <h2 className="font-serif text-lg text-text">ご注文内容</h2>
          <p className="mt-1 text-xs text-[#6b6b6b]">{itemCount} 点</p>
          <ul className="mt-4 max-h-64 space-y-3 overflow-y-auto border-b border-[#d9d2c8] pb-4">
            {items.map((item) => {
              const product = getProductById(item.productId);
              if (!product) return null;
              return (
                <li key={item.key} className="flex gap-3 text-sm">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-sm">
                    <Image
                      src={product.image}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-text">{product.name}</p>
                    <p className="text-xs text-[#6b6b6b]">
                      {item.colorLabel} / {item.sizeLabel} × {item.quantity}
                    </p>
                    <p className="text-accent-1">
                      {formatPrice(getUnitPrice(item.productId) * item.quantity)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-[#6b6b6b]">小計</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-[#6b6b6b]">送料</dt>
              <dd>{shipping === 0 ? "無料" : formatPrice(shipping)}</dd>
            </div>
            <div className="flex justify-between border-t border-[#d9d2c8] pt-2 text-base font-medium">
              <dt>合計（税込）</dt>
              <dd className="text-accent-1">{formatPrice(total)}</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-[#6b6b6b]">
            送料は全国一律 {formatPrice(SHIPPING_FLAT)}。
            {formatPrice(SHIPPING_FREE_THRESHOLD)} 以上で送料無料。
          </p>
          <button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full rounded-sm bg-accent-1 px-6 py-3.5 text-sm text-white transition-colors hover:bg-accent-1-hover disabled:opacity-60"
          >
            {submitting ? "処理中..." : "注文を確定する"}
          </button>
          <Link
            href="/cart"
            className="mt-3 flex w-full items-center justify-center rounded-sm border border-[#d9d2c8] px-6 py-3 text-sm text-text transition-colors hover:bg-main"
          >
            カートへ戻る
          </Link>
        </aside>
      </form>
    </div>
  );
}
