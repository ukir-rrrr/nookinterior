export type ProductOption = {
  id: string;
  label: string;
  inStock: boolean;
};

export type ProductReview = {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  categorySlug: string;
  sceneSlugs: string[];
  image: string;
  images: string[];
  description: string;
  material: string;
  sizeInfo: string;
  deliveryNote: string;
  colors: ProductOption[];
  sizes: ProductOption[];
  reviews: ProductReview[];
  isNew?: boolean;
  isRecommended?: boolean;
  rank?: number;
};

const defaultReviews: ProductReview[] = [
  {
    id: "r1",
    author: "M.K さん",
    rating: 5,
    date: "2026.06.12",
    comment: "質感がよく、写真どおりの落ち着いた印象でした。組み立てもしやすく満足です。",
  },
  {
    id: "r2",
    author: "Y.S さん",
    rating: 4,
    date: "2026.06.08",
    comment: "サイズ感がちょうどよく、部屋になじみました。配送も丁寧でした。",
  },
];

function baseDetail(categorySlug: string, image: string, mainImage: string) {
  return {
    images: [image, mainImage],
    deliveryNote: "ご注文確定後、通常5〜10営業日以内に発送（大型家具は別途納期をご案内）",
    colors: [
      { id: "natural", label: "ナチュラル", inStock: true },
      { id: "walnut", label: "ウォールナット", inStock: true },
      { id: "gray", label: "グレー", inStock: false },
    ],
    sizes: [
      { id: "s", label: "S", inStock: true },
      { id: "m", label: "M", inStock: true },
      { id: "l", label: "L", inStock: false },
    ],
    reviews: defaultReviews,
    categorySlug,
  };
}

export const products: Product[] = [
  {
    id: "sofa-01",
    name: "ヌック ファブリックソファ 2.5P",
    price: 89800,
    salePrice: 79800,
    sceneSlugs: ["living"],
    image: "/images/products/sofa/01.jpg",
    ...baseDetail("sofa", "/images/products/sofa/01.jpg", "/images/products/sofa/main.jpg"),
    description:
      "ゆったり座れる2.5人掛けソファ。柔らかなファブリックと落ち着いたフォルムで、リビングの中心になる一脚です。",
    material: "本体：木材（パイン）／張地：ポリエステル100%",
    sizeInfo: "W180 × D85 × H78 cm（座面高 42 cm）",
    isNew: true,
    isRecommended: true,
    rank: 1,
    sizes: [
      { id: "2p", label: "2人掛け", inStock: true },
      { id: "2.5p", label: "2.5人掛け", inStock: true },
      { id: "3p", label: "3人掛け", inStock: false },
    ],
  },
  {
    id: "sofa-02",
    name: "コンパクトソファ グレー",
    price: 59800,
    sceneSlugs: ["living"],
    image: "/images/products/sofa/main.jpg",
    ...baseDetail("sofa", "/images/products/sofa/main.jpg", "/images/products/sofa/01.jpg"),
    description: "一人暮らしや小さめのリビングに合うコンパクトソファ。すっきりとした脚部で空間を広く見せます。",
    material: "本体：木材／張地：ポリエステル・レーヨン混",
    sizeInfo: "W140 × D78 × H75 cm",
    rank: 2,
  },
  {
    id: "sofa-03",
    name: "コーナーソファ ライトグレー",
    price: 128000,
    sceneSlugs: ["living"],
    image: "/images/products/sofa/01.jpg",
    ...baseDetail("sofa", "/images/products/sofa/01.jpg", "/images/products/sofa/main.jpg"),
    description: "ゆとりのあるリビング向けのコーナーソファ。家族団らんの時間をゆったり支えます。",
    material: "本体：木材／張地：ポリエステル100%",
    sizeInfo: "W240 × D160 × H78 cm",
    rank: 3,
  },
  {
    id: "sofa-04",
    name: "カバーリングソファ アイボリー",
    price: 72000,
    sceneSlugs: ["living"],
    image: "/images/products/sofa/main.jpg",
    ...baseDetail("sofa", "/images/products/sofa/main.jpg", "/images/products/sofa/01.jpg"),
    description: "カバーを外して洗える、暮らしやすさ重視のソファ。",
    material: "本体：木材／張地：コットン混",
    sizeInfo: "W170 × D82 × H76 cm",
    rank: 4,
  },
  {
    id: "table-01",
    name: "オーク ダイニングテーブル 150",
    price: 64800,
    sceneSlugs: ["dining"],
    image: "/images/products/table/01.jpg",
    ...baseDetail("table", "/images/products/table/01.jpg", "/images/products/table/main.jpg"),
    description: "オーク無垢材の温もりを感じるダイニングテーブル。4人での食事にぴったりなサイズ感です。",
    material: "オーク無垢材（オイル仕上げ）",
    sizeInfo: "W150 × D80 × H72 cm",
    isRecommended: true,
    rank: 1,
    sizes: [
      { id: "135", label: "135cm", inStock: true },
      { id: "150", label: "150cm", inStock: true },
      { id: "180", label: "180cm", inStock: false },
    ],
  },
  {
    id: "table-02",
    name: "ラウンドサイドテーブル",
    price: 19800,
    sceneSlugs: ["living", "bedroom"],
    image: "/images/products/table/main.jpg",
    ...baseDetail("table", "/images/products/table/main.jpg", "/images/products/table/01.jpg"),
    description: "ソファ横やベッドサイドに置きやすい丸型サイドテーブル。軽やかな印象のデザインです。",
    material: "オーク突板／スチール",
    sizeInfo: "φ45 × H50 cm",
    isNew: true,
    rank: 2,
    sizes: [{ id: "free", label: "フリーサイズ", inStock: true }],
  },
  {
    id: "table-03",
    name: "ローテーブル ウォールナット",
    price: 34800,
    sceneSlugs: ["living"],
    image: "/images/products/table/01.jpg",
    ...baseDetail("table", "/images/products/table/01.jpg", "/images/products/table/main.jpg"),
    description: "ソファ前に合う低めのローテーブル。落ち着いた色合いが空間を引き締めます。",
    material: "ウォールナット突板",
    sizeInfo: "W110 × D50 × H38 cm",
    rank: 3,
  },
  {
    id: "table-04",
    name: "コンパクトデスク オーク",
    price: 29800,
    sceneSlugs: ["study", "bedroom"],
    image: "/images/products/table/main.jpg",
    ...baseDetail("table", "/images/products/table/main.jpg", "/images/products/table/01.jpg"),
    description: "在宅ワークや学習に使いやすいコンパクトデスク。",
    material: "オーク突板／スチール",
    sizeInfo: "W100 × D50 × H72 cm",
    rank: 4,
  },
  {
    id: "chair-01",
    name: "ラウンジチェア ベージュ",
    price: 32800,
    sceneSlugs: ["living", "study"],
    image: "/images/products/chair/01.jpg",
    ...baseDetail("chair", "/images/products/chair/01.jpg", "/images/products/chair/main.jpg"),
    description: "読書やくつろぎの時間に寄り添うラウンジチェア。程よい傾斜で長時間座っても疲れにくい設計です。",
    material: "フレーム：アッシュ材／張地：ファブリック",
    sizeInfo: "W68 × D78 × H82 cm",
    isNew: true,
    isRecommended: true,
    rank: 1,
    sizes: [{ id: "free", label: "フリーサイズ", inStock: true }],
  },
  {
    id: "chair-02",
    name: "ダイニングチェア 2脚セット",
    price: 24800,
    sceneSlugs: ["dining"],
    image: "/images/products/chair/main.jpg",
    ...baseDetail("chair", "/images/products/chair/main.jpg", "/images/products/chair/01.jpg"),
    description: "テーブルを選ばないシンプルなダイニングチェア。2脚セットで揃えやすい価格です。",
    material: "オーク材／座面：ファブリック",
    sizeInfo: "W45 × D52 × H78 cm（1脚）",
    rank: 2,
  },
  {
    id: "chair-03",
    name: "アームチェア ダークブラウン",
    price: 27800,
    sceneSlugs: ["living", "study"],
    image: "/images/products/chair/01.jpg",
    ...baseDetail("chair", "/images/products/chair/01.jpg", "/images/products/chair/main.jpg"),
    description: "肘付きで座りやすいアームチェア。ダイニングにもワークスペースにも。",
    material: "オーク材／座面：ファブリック",
    sizeInfo: "W55 × D54 × H78 cm",
    rank: 3,
  },
  {
    id: "chair-04",
    name: "ベンチシート ナチュラル",
    price: 22800,
    sceneSlugs: ["dining", "living"],
    image: "/images/products/chair/main.jpg",
    ...baseDetail("chair", "/images/products/chair/main.jpg", "/images/products/chair/01.jpg"),
    description: "ダイニングに合わせやすい木製ベンチ。人数に応じて柔軟に使えます。",
    material: "オーク材",
    sizeInfo: "W120 × D35 × H45 cm",
    rank: 4,
  },
  {
    id: "tvboard-01",
    name: "ローボード ウォールナット 180",
    price: 54800,
    sceneSlugs: ["living"],
    image: "/images/products/tvboard/01.jpg",
    ...baseDetail("tvboard", "/images/products/tvboard/01.jpg", "/images/products/tvboard/main.jpg"),
    description: "配線すっきりのローボード。ウォールナットの落ち着いた色合いがリビングを引き締めます。",
    material: "ウォールナット突板／MDF",
    sizeInfo: "W180 × D40 × H40 cm",
    rank: 1,
    sizes: [
      { id: "150", label: "150cm", inStock: true },
      { id: "180", label: "180cm", inStock: true },
      { id: "200", label: "200cm", inStock: false },
    ],
  },
  {
    id: "storage-01",
    name: "オープンシェルフ ナチュラル",
    price: 27800,
    sceneSlugs: ["living", "study"],
    image: "/images/products/storage/01.jpg",
    ...baseDetail("storage", "/images/products/storage/01.jpg", "/images/products/storage/main.jpg"),
    description: "見せる収納にぴったりのオープンシェルフ。本棚やディスプレイラックとして使えます。",
    material: "パイン材（クリア塗装）",
    sizeInfo: "W90 × D30 × H150 cm",
    isRecommended: true,
    rank: 1,
  },
  {
    id: "storage-02",
    name: "キャビネット オーク",
    price: 42800,
    sceneSlugs: ["living"],
    image: "/images/products/storage/main.jpg",
    ...baseDetail("storage", "/images/products/storage/main.jpg", "/images/products/storage/01.jpg"),
    description: "扉付きで生活感を隠せるキャビネット。リビングやダイニングの収納として活躍します。",
    material: "オーク突板／MDF",
    sizeInfo: "W80 × D40 × H100 cm",
    rank: 2,
  },
  {
    id: "storage-03",
    name: "サイドボード ウォールナット",
    price: 49800,
    sceneSlugs: ["living", "dining"],
    image: "/images/products/storage/01.jpg",
    ...baseDetail("storage", "/images/products/storage/01.jpg", "/images/products/storage/main.jpg"),
    description: "リビングやダイニングに置きやすいサイドボード。収納力と見た目のバランスがよい一台です。",
    material: "ウォールナット突板／MDF",
    sizeInfo: "W120 × D40 × H75 cm",
    rank: 3,
  },
  {
    id: "storage-04",
    name: "ブックシェルフ スリム",
    price: 19800,
    sceneSlugs: ["study", "living"],
    image: "/images/products/storage/main.jpg",
    ...baseDetail("storage", "/images/products/storage/main.jpg", "/images/products/storage/01.jpg"),
    description: "狭小スペースにも置きやすいスリムな本棚。",
    material: "パイン材",
    sizeInfo: "W45 × D28 × H180 cm",
    rank: 4,
  },
  {
    id: "bed-01",
    name: "ベッドフレーム ダブル オーク",
    price: 79800,
    sceneSlugs: ["bedroom"],
    image: "/images/products/bed/01.jpg",
    ...baseDetail("bed", "/images/products/bed/01.jpg", "/images/products/bed/main.jpg"),
    description: "シンプルなオークのベッドフレーム。ヘッドボードのやさしい曲線が寝室をやわらかく演出します。",
    material: "オーク突板／パイン材",
    sizeInfo: "W146 × D200 × H85 cm（マットレス別売）",
    isNew: true,
    rank: 1,
    sizes: [
      { id: "single", label: "シングル", inStock: true },
      { id: "semi", label: "セミダブル", inStock: true },
      { id: "double", label: "ダブル", inStock: true },
    ],
  },
  {
    id: "bed-02",
    name: "ヘッドボード付きベッド シングル",
    price: 54800,
    sceneSlugs: ["bedroom"],
    image: "/images/products/bed/main.jpg",
    ...baseDetail("bed", "/images/products/bed/main.jpg", "/images/products/bed/01.jpg"),
    description: "一人暮らしにぴったりなシングルベッド。ヘッドボードにクッション性があり、読書にも便利です。",
    material: "木材／ファブリック",
    sizeInfo: "W100 × D205 × H90 cm",
    rank: 2,
    sizes: [
      { id: "single", label: "シングル", inStock: true },
      { id: "semi", label: "セミダブル", inStock: false },
    ],
  },
  {
    id: "bed-03",
    name: "ローベッド セミダブル",
    price: 62800,
    sceneSlugs: ["bedroom"],
    image: "/images/products/bed/01.jpg",
    ...baseDetail("bed", "/images/products/bed/01.jpg", "/images/products/bed/main.jpg"),
    description: "低い重心で部屋を広く見せるローベッド。",
    material: "オーク突板",
    sizeInfo: "W124 × D200 × H40 cm",
    rank: 3,
  },
  {
    id: "bed-04",
    name: "収納付きベッド ダブル",
    price: 98000,
    sceneSlugs: ["bedroom"],
    image: "/images/products/bed/main.jpg",
    ...baseDetail("bed", "/images/products/bed/main.jpg", "/images/products/bed/01.jpg"),
    description: "引き出し収納付きで、寝室の収納をまとめて確保できます。",
    material: "オーク突板／MDF",
    sizeInfo: "W146 × D200 × H85 cm",
    rank: 4,
  },
  {
    id: "mirror-01",
    name: "スタンドミラー ウッドフレーム",
    price: 19800,
    sceneSlugs: ["bedroom", "living"],
    image: "/images/products/mirror/01.jpg",
    ...baseDetail("mirror", "/images/products/mirror/01.jpg", "/images/products/mirror/main.jpg"),
    description: "木枠のあたたかみがあるスタンドミラー。姿見として寝室や玄関に置けます。",
    material: "アッシュ材／ガラス",
    sizeInfo: "W50 × D40 × H160 cm",
    rank: 1,
    sizes: [{ id: "free", label: "フリーサイズ", inStock: true }],
  },
  {
    id: "lighting-01",
    name: "ペンダントライト リネンシェード",
    price: 14800,
    sceneSlugs: ["dining", "living"],
    image: "/images/products/lighting/01.jpg",
    ...baseDetail("lighting", "/images/products/lighting/01.jpg", "/images/products/lighting/main.jpg"),
    description: "リネンシェードがやわらかな光を広げるペンダントライト。ダイニングテーブルの上に最適です。",
    material: "シェード：リネン／金具：スチール",
    sizeInfo: "φ40 × H28 cm（コード長 100 cm）",
    isNew: true,
    isRecommended: true,
    rank: 1,
    colors: [
      { id: "ivory", label: "アイボリー", inStock: true },
      { id: "beige", label: "ベージュ", inStock: true },
      { id: "gray", label: "グレー", inStock: false },
    ],
    sizes: [{ id: "free", label: "フリーサイズ", inStock: true }],
  },
  {
    id: "rug-01",
    name: "ウールラグ 140×200",
    price: 24800,
    salePrice: 19800,
    sceneSlugs: ["living", "bedroom"],
    image: "/images/products/rug/01.jpg",
    ...baseDetail("rug", "/images/products/rug/01.jpg", "/images/products/rug/main.jpg"),
    description: "肌触りのよいウールラグ。足元から季節感と心地よさをプラスします。",
    material: "ウール80%・コットン20%",
    sizeInfo: "140 × 200 cm（厚さ 約12 mm）",
    isRecommended: true,
    rank: 1,
    sizes: [
      { id: "140", label: "140×200", inStock: true },
      { id: "160", label: "160×230", inStock: true },
      { id: "200", label: "200×250", inStock: false },
    ],
  },
  {
    id: "goods-01",
    name: "セラミックベース セット",
    price: 6800,
    sceneSlugs: ["living", "dining"],
    image: "/images/products/goods/01.jpg",
    ...baseDetail("goods", "/images/products/goods/01.jpg", "/images/products/goods/main.jpg"),
    description: "表情のある釉薬が魅力のセラミックベース。大小2点セットで飾り方の幅が広がります。",
    material: "陶器",
    sizeInfo: "大：H22 cm／小：H14 cm",
    isNew: true,
    rank: 1,
    sizes: [{ id: "set", label: "2点セット", inStock: true }],
  },
  {
    id: "goods-02",
    name: "ウッドトレイ＆キャンドルホルダー",
    price: 4800,
    sceneSlugs: ["living"],
    image: "/images/products/goods/main.jpg",
    ...baseDetail("goods", "/images/products/goods/main.jpg", "/images/products/goods/01.jpg"),
    description: "テーブルコーディネートに使えるウッドトレイとキャンドルホルダーのセット。",
    material: "アカシア材／ガラス",
    sizeInfo: "トレイ：W30 × D20 cm",
    isRecommended: true,
    rank: 2,
    sizes: [{ id: "set", label: "セット", inStock: true }],
  },
  {
    id: "goods-03",
    name: "リネンクッションカバー 2枚組",
    price: 5800,
    sceneSlugs: ["living", "bedroom"],
    image: "/images/products/goods/01.jpg",
    ...baseDetail("goods", "/images/products/goods/01.jpg", "/images/products/goods/main.jpg"),
    description: "ソファやベッドに合わせやすいリネンのクッションカバー。",
    material: "リネン100%",
    sizeInfo: "45 × 45 cm",
    rank: 3,
  },
  {
    id: "goods-04",
    name: "アロマディフューザー ウッド",
    price: 7800,
    sceneSlugs: ["living", "bedroom"],
    image: "/images/products/goods/main.jpg",
    ...baseDetail("goods", "/images/products/goods/main.jpg", "/images/products/goods/01.jpg"),
    description: "木目が美しい卓上ディフューザー。空間にやさしい香りを。",
    material: "アッシュ材／ガラス",
    sizeInfo: "φ8 × H18 cm",
    rank: 4,
  },
];

export function formatPrice(price: number): string {
  return `¥${price.toLocaleString("ja-JP")}`;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, limit);
}

export function getAverageRating(product: Product): number {
  if (product.reviews.length === 0) return 0;
  const total = product.reviews.reduce((sum, review) => sum + review.rating, 0);
  return Math.round((total / product.reviews.length) * 10) / 10;
}

export function getNewArrivals(limit = 4): Product[] {
  return products.filter((p) => p.isNew).slice(0, limit);
}

export function getAllNewArrivals(): Product[] {
  return products.filter((p) => p.isNew);
}

export type SearchFilters = {
  q?: string;
  category?: string;
  scene?: string;
  minPrice?: number;
  maxPrice?: number;
};

export function searchProducts(filters: SearchFilters): Product[] {
  const q = filters.q?.trim().toLowerCase() ?? "";

  return products.filter((product) => {
    if (filters.category && product.categorySlug !== filters.category) {
      return false;
    }
    if (filters.scene && !product.sceneSlugs.includes(filters.scene)) {
      return false;
    }
    const price = displayPrice(product);
    if (filters.minPrice != null && price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice != null && price > filters.maxPrice) {
      return false;
    }
    if (!q) return true;
    return (
      product.name.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q) ||
      product.material.toLowerCase().includes(q)
    );
  });
}

export function getRecommended(limit = 4): Product[] {
  return products.filter((p) => p.isRecommended).slice(0, limit);
}

export function getRankingByCategory(categorySlug: string, limit = 4): Product[] {
  return products
    .filter((p) => p.categorySlug === categorySlug)
    .sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99))
    .slice(0, limit);
}

export type ProductSort = "recommended" | "price-asc" | "price-desc" | "new";

function displayPrice(product: Product): number {
  return product.salePrice ?? product.price;
}

export function getProductsByCategory(
  categorySlug: string,
  sort: ProductSort = "recommended",
): Product[] {
  const items = products.filter((p) => p.categorySlug === categorySlug);
  return sortProducts(items, sort);
}

export function getProductsByScene(
  sceneSlug: string,
  sort: ProductSort = "recommended",
): Product[] {
  const items = products.filter((p) => p.sceneSlugs.includes(sceneSlug));
  return sortProducts(items, sort);
}

function sortProducts(items: Product[], sort: ProductSort): Product[] {
  switch (sort) {
    case "price-asc":
      return [...items].sort((a, b) => displayPrice(a) - displayPrice(b));
    case "price-desc":
      return [...items].sort((a, b) => displayPrice(b) - displayPrice(a));
    case "new":
      return [...items].sort((a, b) => Number(b.isNew) - Number(a.isNew));
    case "recommended":
    default:
      return [...items].sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99));
  }
}
