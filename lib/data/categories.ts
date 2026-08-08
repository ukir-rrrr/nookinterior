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
    image: "/images/products/sofa/01.jpg",
    description: "くつろぎの時間をつくる、座り心地にこだわったソファを集めました。",
  },
  {
    slug: "table",
    name: "テーブル・デスク",
    href: "/category/table",
    image: "/images/products/table/01.jpg",
    description: "ダイニングからワークスペースまで、暮らしに寄り添うテーブル・デスク。",
  },
  {
    slug: "chair",
    name: "チェア・ベンチ",
    href: "/category/chair",
    image: "/images/products/chair/01.jpg",
    description: "座り心地と佇まいを両立した、チェア・ベンチのセレクト。",
  },
  {
    slug: "tvboard",
    name: "テレビボード",
    href: "/category/tvboard",
    image: "/images/products/tvboard/01.jpg",
    description: "リビングの顔になる、すっきり美しいテレビボード。",
  },
  {
    slug: "storage",
    name: "リビング収納",
    href: "/category/storage",
    image: "/images/products/storage/01.jpg",
    description: "見せる収納と隠す収納。暮らしを整えるリビング収納。",
  },
  {
    slug: "bed",
    name: "ベッド",
    href: "/category/bed",
    image: "/images/products/bed/01.jpg",
    description: "やすらぎの夜のために。サイズと素材で選べるベッド。",
  },
  {
    slug: "mirror",
    name: "ミラー",
    href: "/category/mirror",
    image: "/images/products/mirror/01.jpg",
    description: "空間に光と奥行きを与える、佇まいのよいミラー。",
  },
  {
    slug: "lighting",
    name: "照明",
    href: "/category/lighting",
    image: "/images/products/lighting/01.jpg",
    description: "あかりで部屋の印象が変わる。やさしい光の照明たち。",
  },
  {
    slug: "rug",
    name: "ラグ・ファブリック",
    href: "/category/rug",
    image: "/images/products/rug/01.jpg",
    description: "足元から心地よさを。ラグとファブリックのコレクション。",
  },
  {
    slug: "goods",
    name: "インテリア雑貨",
    href: "/category/goods",
    image: "/images/products/goods/01.jpg",
    description: "部屋に小さな余白を添える、日常使いのインテリア雑貨。",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
