"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { useCart } from "@/components/CartProvider";
import { formatPrice, type Product } from "@/lib/data/products";

type ProductPurchasePanelProps = {
  product: Product;
};

function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
      aria-hidden
    >
      <path
        d="M3 3h2l1.6 9.6a2 2 0 002 1.7h8.7a2 2 0 001.98-1.7L21 7H7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="19.5" r="1.5" />
      <circle cx="17.5" cy="19.5" r="1.5" />
    </svg>
  );
}

export default function ProductPurchasePanel({ product }: ProductPurchasePanelProps) {
  const { addItem } = useCart();
  const { isFavorite, toggleFavorite } = useAuth();
  const availableColors = product.colors.filter((c) => c.inStock);
  const availableSizes = product.sizes.filter((s) => s.inStock);
  const [colorId, setColorId] = useState(availableColors[0]?.id ?? "");
  const [sizeId, setSizeId] = useState(availableSizes[0]?.id ?? "");
  const favorite = isFavorite(product.id);
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const displayPrice = product.salePrice ?? product.price;
  const hasSale = product.salePrice != null;
  const canAdd = Boolean(colorId && sizeId);

  const selectedLabel = useMemo(() => {
    const color = product.colors.find((c) => c.id === colorId)?.label;
    const size = product.sizes.find((s) => s.id === sizeId)?.label;
    return [color, size].filter(Boolean).join(" / ");
  }, [colorId, product.colors, product.sizes, sizeId]);

  const handleAddToCart = () => {
    const color = product.colors.find((c) => c.id === colorId);
    const size = product.sizes.find((s) => s.id === sizeId);
    if (!color || !size) return;

    addItem({
      productId: product.id,
      colorId: color.id,
      colorLabel: color.label,
      sizeId: size.id,
      sizeLabel: size.label,
      quantity,
    });
    setAdded(true);
  };

  return (
    <div className="space-y-8">
      <div>
        {product.isNew ? (
          <span className="mb-3 inline-block rounded-sm bg-accent-2 px-2 py-1 text-[10px] tracking-wider text-white">
            NEW
          </span>
        ) : null}
        <h1 className="font-serif text-2xl leading-snug text-text md:text-3xl">
          {product.name}
        </h1>
        <p className="mt-4 text-xl text-accent-1 md:text-2xl">
          {hasSale ? (
            <>
              <span className="mr-3 text-base text-[#9a9a9a] line-through">
                {formatPrice(product.price)}
              </span>
              {formatPrice(displayPrice)}
            </>
          ) : (
            formatPrice(displayPrice)
          )}
          <span className="ml-2 text-sm text-[#6b6b6b]">（税込）</span>
        </p>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-text">カラー</p>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((color) => {
            const isActive = color.id === colorId;
            return (
              <button
                key={color.id}
                type="button"
                disabled={!color.inStock}
                onClick={() => setColorId(color.id)}
                className={`rounded-sm border px-3 py-2 text-sm transition-colors ${
                  !color.inStock
                    ? "cursor-not-allowed border-[#e8e2d9] text-[#b0b0b0] line-through"
                    : isActive
                      ? "border-accent-1 bg-accent-1 text-white"
                      : "border-[#d9d2c8] text-text hover:border-accent-1"
                }`}
              >
                {color.label}
                {!color.inStock ? "（在庫切れ）" : ""}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-text">サイズ</p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => {
            const isActive = size.id === sizeId;
            return (
              <button
                key={size.id}
                type="button"
                disabled={!size.inStock}
                onClick={() => setSizeId(size.id)}
                className={`rounded-sm border px-3 py-2 text-sm transition-colors ${
                  !size.inStock
                    ? "cursor-not-allowed border-[#e8e2d9] text-[#b0b0b0] line-through"
                    : isActive
                      ? "border-accent-1 bg-accent-1 text-white"
                      : "border-[#d9d2c8] text-text hover:border-accent-1"
                }`}
              >
                {size.label}
                {!size.inStock ? "（在庫切れ）" : ""}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-text">数量</p>
        <div className="inline-flex items-center rounded-sm border border-[#d9d2c8]">
          <button
            type="button"
            className="px-3 py-2 text-sm hover:bg-[#f1ede7]"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="数量を減らす"
          >
            −
          </button>
          <span className="min-w-10 px-2 text-center text-sm">{quantity}</span>
          <button
            type="button"
            className="px-3 py-2 text-sm hover:bg-[#f1ede7]"
            onClick={() => setQuantity((q) => Math.min(10, q + 1))}
            aria-label="数量を増やす"
          >
            ＋
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          disabled={!canAdd}
          onClick={handleAddToCart}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-accent-1 px-6 py-3.5 text-sm text-white transition-colors hover:bg-accent-1-hover disabled:cursor-not-allowed disabled:opacity-50"
        >
          <CartIcon />
          カートに入れる
        </button>
        <button
          type="button"
          onClick={() => toggleFavorite(product.id)}
          className={`inline-flex items-center justify-center rounded-sm border px-6 py-3.5 text-sm transition-colors ${
            favorite
              ? "border-accent-1 bg-[#fdf3ee] text-accent-1"
              : "border-accent-1 text-accent-1 hover:bg-[#fdf3ee]"
          }`}
        >
          {favorite ? "お気に入り済み" : "お気に入り"}
        </button>
      </div>

      {added ? (
        <div className="rounded-sm border border-accent-2 bg-[#f3f6f1] px-4 py-3 text-sm text-text">
          <p>
            カートに追加しました（{selectedLabel} / {quantity}点）
          </p>
          <Link href="/cart" className="mt-2 inline-block text-accent-1 underline-offset-2 hover:underline">
            カートを見る
          </Link>
        </div>
      ) : null}

      <div className="rounded-sm bg-[#f1ede7] px-4 py-3 text-sm leading-relaxed text-[#6b6b6b]">
        <p className="font-medium text-text">配送目安</p>
        <p className="mt-1">{product.deliveryNote}</p>
      </div>
    </div>
  );
}
