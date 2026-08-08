"use client";

import { useMemo, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import {
  rankingTabs,
  type RankingCategorySlug,
} from "@/lib/data/ranking";
import { getRankingByCategory } from "@/lib/data/products";

type RankingPageClientProps = {
  initialCategory?: RankingCategorySlug;
};

export default function RankingPageClient({
  initialCategory = "sofa",
}: RankingPageClientProps) {
  const [active, setActive] = useState<RankingCategorySlug>(initialCategory);
  const items = useMemo(() => getRankingByCategory(active, 8), [active]);
  const activeLabel =
    rankingTabs.find((tab) => tab.slug === active)?.label ?? "ソファ";

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "ランキング" }]} />

      <div className="mt-8 mb-10">
        <p className="text-xs tracking-[0.2em] text-accent-2">RANKING</p>
        <h1 className="mt-2 font-serif text-3xl text-text md:text-4xl">
          売れ筋ランキング
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#6b6b6b] md:text-base">
          カテゴリ別の人気アイテムをチェック。部屋づくりの参考にどうぞ。
        </p>
      </div>

      <div
        className="mb-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="ランキングカテゴリ"
      >
        {rankingTabs.map((tab) => {
          const isActive = tab.slug === active;
          return (
            <button
              key={tab.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.slug)}
              className={`rounded-sm px-4 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-accent-1 text-white"
                  : "bg-[#f1ede7] text-text hover:bg-[#e8e2d9]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <p className="mb-6 text-sm text-[#6b6b6b]">
        <span className="font-medium text-text">{activeLabel}</span> のランキング
      </p>

      {items.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {items.map((product, index) => (
            <ProductCard key={product.id} product={product} rank={index + 1} />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-sm text-[#6b6b6b]">
          該当する商品がありません。
        </p>
      )}
    </div>
  );
}
