"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/components/AuthProvider";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import { getProductById } from "@/lib/data/products";

export default function FavoritePage() {
  const router = useRouter();
  const { user, ready, favoriteIds, toggleFavorite } = useAuth();

  useEffect(() => {
    if (ready && !user) router.replace("/login");
  }, [ready, user, router]);

  if (!ready || !user) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <p className="text-sm text-[#6b6b6b]">読み込み中...</p>
      </div>
    );
  }

  const favorites = favoriteIds
    .map((id) => getProductById(id))
    .filter((product) => product != null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb
        items={[
          { label: "TOP", href: "/" },
          { label: "マイページ", href: "/mypage" },
          { label: "お気に入り" },
        ]}
      />

      <div className="mt-8 mb-10">
        <p className="text-xs tracking-[0.2em] text-accent-2">FAVORITE</p>
        <h1 className="mt-2 font-serif text-3xl text-text">お気に入り</h1>
        <p className="mt-3 text-sm text-[#6b6b6b]">
          {favorites.length} 件の商品を保存しています。
        </p>
      </div>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {favorites.map((product) => (
            <div key={product.id} className="space-y-2">
              <ProductCard product={product} />
              <button
                type="button"
                onClick={() => toggleFavorite(product.id)}
                className="text-xs text-[#6b6b6b] underline-offset-2 hover:text-accent-1 hover:underline"
              >
                お気に入り解除
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="font-serif text-xl text-text">お気に入りはまだありません</p>
          <p className="mt-3 text-sm text-[#6b6b6b]">
            商品詳細ページからお気に入り登録できます。
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-sm bg-accent-1 px-6 py-3 text-sm text-white transition-colors hover:bg-accent-1-hover"
          >
            商品を探す
          </Link>
        </div>
      )}
    </div>
  );
}
