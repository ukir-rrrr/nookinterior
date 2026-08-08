"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import {
  rankingTabs,
  type RankingCategorySlug,
} from "@/lib/data/ranking";
import { getRankingByCategory } from "@/lib/data/products";

export default function RankingSection() {
  const [active, setActive] = useState<RankingCategorySlug>("sofa");
  const items = getRankingByCategory(active, 4);

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="RANKING"
            title="ランキング"
            description="カテゴリ別の人気アイテムをチェック。"
          />
          <Link
            href="/ranking"
            className="inline-flex items-center justify-center rounded-sm border border-accent-1 px-5 py-2.5 text-sm text-accent-1 transition-colors hover:bg-accent-1 hover:text-white"
          >
            ランキング一覧
          </Link>
        </div>

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="ランキングカテゴリ">
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

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {items.map((product, index) => (
            <ProductCard key={product.id} product={product} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
