"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import Breadcrumb from "@/components/Breadcrumb";
import {
  getCartTotal,
  getUnitPrice,
} from "@/lib/cart/pricing";
import {
  SHIPPING_FLAT,
  SHIPPING_FREE_THRESHOLD,
} from "@/lib/cart/types";
import { formatPrice, getProductById } from "@/lib/data/products";

export default function CartView() {
  const { items, ready, updateQuantity, removeItem } = useCart();
  const { subtotal, shipping, total, itemCount } = getCartTotal(items);
  const remainingForFreeShipping = Math.max(0, SHIPPING_FREE_THRESHOLD - subtotal);

  if (!ready) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <p className="text-sm text-[#6b6b6b]">カートを読み込み中...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
        <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "カート" }]} />
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="relative mb-8 h-40 w-40 overflow-hidden rounded-sm">
            <Image
              src="/images/common/empty-cart.jpg"
              alt=""
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>
          <h1 className="font-serif text-2xl text-text md:text-3xl">カートは空です</h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#6b6b6b]">
            気になる家具や雑貨を見つけて、カートに追加してみましょう。
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-sm bg-accent-1 px-6 py-3 text-sm text-white transition-colors hover:bg-accent-1-hover"
          >
            ショッピングを続ける
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "カート" }]} />

      <div className="mt-8 mb-10">
        <p className="text-xs tracking-[0.2em] text-accent-2">CART</p>
        <h1 className="mt-2 font-serif text-3xl text-text">カート</h1>
        <p className="mt-2 text-sm text-[#6b6b6b]">{itemCount} 点の商品</p>
      </div>

      {remainingForFreeShipping > 0 ? (
        <div className="mb-8 rounded-sm border border-accent-2 bg-[#f3f6f1] px-4 py-3 text-sm text-text">
          あと{" "}
          <span className="font-medium text-accent-1">
            {formatPrice(remainingForFreeShipping)}
          </span>{" "}
          で送料無料（税込 {formatPrice(SHIPPING_FREE_THRESHOLD)} 以上）
        </div>
      ) : (
        <div className="mb-8 rounded-sm border border-accent-2 bg-[#f3f6f1] px-4 py-3 text-sm text-text">
          送料無料の条件を達成しています
        </div>
      )}

      <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-12">
        <ul className="divide-y divide-[#e8e2d9] border-y border-[#e8e2d9]">
          {items.map((item) => {
            const product = getProductById(item.productId);
            if (!product) return null;
            const unitPrice = getUnitPrice(item.productId);
            const lineTotal = unitPrice * item.quantity;

            return (
              <li key={item.key} className="flex flex-col gap-4 py-6 sm:flex-row sm:gap-6">
                <Link
                  href={`/products/${product.id}`}
                  className="relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-sm sm:w-36"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </Link>

                <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:justify-between">
                  <div className="space-y-2">
                    <Link
                      href={`/products/${product.id}`}
                      className="font-serif text-lg text-text hover:text-accent-1"
                    >
                      {product.name}
                    </Link>
                    <p className="text-sm text-[#6b6b6b]">
                      {item.colorLabel} / {item.sizeLabel}
                    </p>
                    <p className="text-sm text-accent-1">
                      {formatPrice(unitPrice)}
                      <span className="ml-1 text-xs text-[#6b6b6b]">（税込）</span>
                    </p>
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="text-xs text-[#6b6b6b] underline-offset-2 hover:text-accent-1 hover:underline"
                    >
                      削除
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end sm:justify-start">
                    <div className="inline-flex items-center rounded-sm border border-[#d9d2c8]">
                      <button
                        type="button"
                        className="px-3 py-2 text-sm hover:bg-[#f1ede7]"
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        aria-label="数量を減らす"
                      >
                        −
                      </button>
                      <span className="min-w-10 px-2 text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="px-3 py-2 text-sm hover:bg-[#f1ede7]"
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        aria-label="数量を増やす"
                      >
                        ＋
                      </button>
                    </div>
                    <p className="text-sm font-medium text-text">
                      {formatPrice(lineTotal)}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <aside className="h-fit rounded-sm bg-[#f1ede7] p-6">
          <h2 className="font-serif text-lg text-text">ご注文内容</h2>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-[#6b6b6b]">小計（税込）</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-[#6b6b6b]">送料</dt>
              <dd>
                {shipping === 0 ? (
                  <span className="text-accent-2">無料</span>
                ) : (
                  formatPrice(shipping)
                )}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-[#d9d2c8] pt-3 text-base font-medium">
              <dt>合計（税込）</dt>
              <dd className="text-accent-1">{formatPrice(total)}</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs leading-relaxed text-[#6b6b6b]">
            送料は全国一律 {formatPrice(SHIPPING_FLAT)}。
            {formatPrice(SHIPPING_FREE_THRESHOLD)} 以上で送料無料です。
          </p>
          <Link
            href="/checkout"
            className="mt-6 flex w-full items-center justify-center rounded-sm bg-accent-1 px-6 py-3.5 text-sm text-white transition-colors hover:bg-accent-1-hover"
          >
            ご購入手続きへ
          </Link>
          <Link
            href="/"
            className="mt-3 flex w-full items-center justify-center rounded-sm border border-[#d9d2c8] px-6 py-3 text-sm text-text transition-colors hover:bg-main"
          >
            買い物を続ける
          </Link>
        </aside>
      </div>
    </div>
  );
}
