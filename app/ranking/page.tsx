import type { Metadata } from "next";
import RankingPageClient from "@/components/RankingPageClient";
import {
  rankingTabs,
  type RankingCategorySlug,
} from "@/lib/data/ranking";

export const metadata: Metadata = {
  title: "ランキング",
  description: "カテゴリ別の売れ筋ランキング。ソファ、チェア、テーブルなど人気アイテムをチェック。",
};

function parseCategory(
  value: string | string[] | undefined,
): RankingCategorySlug {
  const category = Array.isArray(value) ? value[0] : value;
  const matched = rankingTabs.find((tab) => tab.slug === category);
  return matched?.slug ?? "sofa";
}

export default async function RankingPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string | string[] }>;
}) {
  const { category } = await searchParams;
  return <RankingPageClient initialCategory={parseCategory(category)} />;
}
