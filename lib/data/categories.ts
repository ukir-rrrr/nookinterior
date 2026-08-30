export type Category = {
  slug: string;
  name: string;
  href: string;
  image: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "sofa",
    name: "ソファ",
    href: "/category/sofa",
    image: "/images/categories/sofa.jpg",
    description: "くつろぎの時間をつくる、座り心地にこだわったソファを集めました。",
  },
  {
    slug: "table",
    name: "テーブル・デスク",
    href: "/category/table",
    image: "/images/categories/table.jpg",
    description: "ダイニングからワークスペースまで、暮らしに寄り添うテーブル・デスク。",
  },
  {
    slug: "chair",
    name: "チェア・ベンチ",
    href: "/category/chair",
    image: "/images/categories/chair.jpg",
    description: "座り心地と佇まいを両立した、チェア・ベンチのセレクト。",
  },
  {
    slug: "tvboard",
    name: "テレビボード",
    href: "/category/tvboard",
    image: "/images/categories/tvboard.jpg",
    description: "リビングの顔になる、すっきり美しいテレビボード。",
  },
  {
    slug: "storage",
    name: "リビング収納",
    href: "/category/storage",
    image: "/images/categories/storage.jpg",
    description: "見せる収納と隠す収納。暮らしを整えるリビング収納。",
  },
  {
    slug: "kitchen",
    name: "キッチン収納",
    href: "/category/kitchen",
    image: "/images/categories/kitchen.jpg",
    description: "食器から調理道具まで、キッチンをすっきり整える収納家具。",
  },
  {
    slug: "clothing",
    name: "衣類収納",
    href: "/category/clothing",
    image: "/images/categories/clothing.jpg",
    description: "クローゼットやチェストで、衣類を美しく収納。",
  },
  {
    slug: "kotatsu",
    name: "こたつ",
    href: "/category/kotatsu",
    image: "/images/categories/kotatsu.jpg",
    description: "冬のリビングに欠かせない、暖かく快適なこたつ。",
  },
  {
    slug: "bed",
    name: "ベッド",
    href: "/category/bed",
    image: "/images/categories/bed.jpg",
    description: "やすらぎの夜のために。サイズと素材で選べるベッド。",
  },
  {
    slug: "mirror",
    name: "ミラー",
    href: "/category/mirror",
    image: "/images/categories/mirror.jpg",
    description: "空間に光と奥行きを与える、佇まいのよいミラー。",
  },
  {
    slug: "lighting",
    name: "照明",
    href: "/category/lighting",
    image: "/images/categories/lighting.jpg",
    description: "あかりで部屋の印象が変わる。やさしい光の照明たち。",
  },
  {
    slug: "rug",
    name: "ラグ・ファブリック",
    href: "/category/rug",
    image: "/images/categories/rug.jpg",
    description: "足元から心地よさを。ラグとファブリックのコレクション。",
  },
  {
    slug: "goods",
    name: "インテリア雑貨",
    href: "/category/goods",
    image: "/images/categories/goods.jpg",
    description: "部屋に小さな余白を添える、日常使いのインテリア雑貨。",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
