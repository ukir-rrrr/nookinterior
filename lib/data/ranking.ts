export const rankingTabs = [
  { slug: "sofa", label: "ソファ" },
  { slug: "chair", label: "チェア" },
  { slug: "table", label: "テーブル" },
  { slug: "storage", label: "収納" },
  { slug: "bed", label: "ベッド" },
  { slug: "goods", label: "雑貨" },
] as const;

export type RankingCategorySlug = (typeof rankingTabs)[number]["slug"];
