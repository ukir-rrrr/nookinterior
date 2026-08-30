// このファイルは scripts/build-products.mjs により自動生成されています。
// 手動で編集せず、data/rakuten/manifest.json を更新してから
//   node scripts/build-products.mjs
// を再実行してください。

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

export const products: Product[] = [
  {
    "id": "kim-orv15vid5set",
    "name": "4人用 ダイニングテーブルセット 5点 ORV コンセント付き",
    "price": 19900,
    "categorySlug": "table",
    "sceneSlugs": [
      "dining",
      "study"
    ],
    "image": "/images/products/kim-orv15vid5set/01.jpg",
    "images": [
      "/images/products/kim-orv15vid5set/01.jpg",
      "/images/products/kim-orv15vid5set/02.jpg",
      "/images/products/kim-orv15vid5set/03.jpg",
      "/images/products/kim-orv15vid5set/04.jpg",
      "/images/products/kim-orv15vid5set/05.jpg",
      "/images/products/kim-orv15vid5set/06.jpg",
      "/images/products/kim-orv15vid5set/07.jpg",
      "/images/products/kim-orv15vid5set/08.jpg"
    ],
    "description": "4人用 ダイニングテーブルセット 5点 ORV コンセント付き（参考：楽天市場の商品情報を基にしています）",
    "material": "詳細は商品ページ・メーカー情報をご確認ください。",
    "sizeInfo": "サイズ・仕様の詳細は商品ページをご確認ください。",
    "deliveryNote": "ご注文確定後、通常5〜10営業日以内に発送（大型家具は別途納期をご案内）",
    "colors": [
      {
        "id": "natural",
        "label": "ナチュラル",
        "inStock": true
      },
      {
        "id": "walnut",
        "label": "ウォールナット",
        "inStock": true
      },
      {
        "id": "white",
        "label": "ホワイト",
        "inStock": true
      }
    ],
    "sizes": [
      {
        "id": "free",
        "label": "フリーサイズ",
        "inStock": true
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "author": "M.K さん",
        "rating": 5,
        "date": "2026.06.12",
        "comment": "質感がよく、写真どおりの落ち着いた印象でした。組み立てもしやすく満足です。"
      },
      {
        "id": "r2",
        "author": "Y.S さん",
        "rating": 4,
        "date": "2026.06.08",
        "comment": "サイズ感がちょうどよく、部屋になじみました。配送も丁寧でした。"
      }
    ],
    "rank": 1,
    "isNew": true,
    "isRecommended": true
  },
  {
    "id": "kim-orv90d3set",
    "name": "2人用 セラミック ダイニングテーブルセット 3点 ORV",
    "price": 29900,
    "categorySlug": "table",
    "sceneSlugs": [
      "dining",
      "study"
    ],
    "image": "/images/products/kim-orv90d3set/01.jpg",
    "images": [
      "/images/products/kim-orv90d3set/01.jpg",
      "/images/products/kim-orv90d3set/02.jpg",
      "/images/products/kim-orv90d3set/03.jpg",
      "/images/products/kim-orv90d3set/04.jpg",
      "/images/products/kim-orv90d3set/05.jpg",
      "/images/products/kim-orv90d3set/06.jpg",
      "/images/products/kim-orv90d3set/07.jpg",
      "/images/products/kim-orv90d3set/08.jpg"
    ],
    "description": "2人用 セラミック ダイニングテーブルセット 3点 ORV（参考：楽天市場の商品情報を基にしています）",
    "material": "詳細は商品ページ・メーカー情報をご確認ください。",
    "sizeInfo": "サイズ・仕様の詳細は商品ページをご確認ください。",
    "deliveryNote": "ご注文確定後、通常5〜10営業日以内に発送（大型家具は別途納期をご案内）",
    "colors": [
      {
        "id": "natural",
        "label": "ナチュラル",
        "inStock": true
      },
      {
        "id": "walnut",
        "label": "ウォールナット",
        "inStock": true
      },
      {
        "id": "white",
        "label": "ホワイト",
        "inStock": true
      }
    ],
    "sizes": [
      {
        "id": "free",
        "label": "フリーサイズ",
        "inStock": true
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "author": "M.K さん",
        "rating": 5,
        "date": "2026.06.12",
        "comment": "質感がよく、写真どおりの落ち着いた印象でした。組み立てもしやすく満足です。"
      },
      {
        "id": "r2",
        "author": "Y.S さん",
        "rating": 4,
        "date": "2026.06.08",
        "comment": "サイズ感がちょうどよく、部屋になじみました。配送も丁寧でした。"
      }
    ],
    "rank": 2,
    "isNew": true,
    "isRecommended": true
  },
  {
    "id": "kim-celetud5set",
    "name": "4人用 ダイニングテーブルセット 5点 LUGA セラミックテーブル",
    "price": 59900,
    "categorySlug": "table",
    "sceneSlugs": [
      "dining",
      "study"
    ],
    "image": "/images/products/kim-celetud5set/01.jpg",
    "images": [
      "/images/products/kim-celetud5set/01.jpg",
      "/images/products/kim-celetud5set/02.jpg",
      "/images/products/kim-celetud5set/03.jpg",
      "/images/products/kim-celetud5set/04.jpg",
      "/images/products/kim-celetud5set/05.jpg",
      "/images/products/kim-celetud5set/06.jpg",
      "/images/products/kim-celetud5set/07.jpg",
      "/images/products/kim-celetud5set/08.jpg"
    ],
    "description": "4人用 ダイニングテーブルセット 5点 LUGA セラミックテーブル（参考：楽天市場の商品情報を基にしています）",
    "material": "詳細は商品ページ・メーカー情報をご確認ください。",
    "sizeInfo": "サイズ・仕様の詳細は商品ページをご確認ください。",
    "deliveryNote": "ご注文確定後、通常5〜10営業日以内に発送（大型家具は別途納期をご案内）",
    "colors": [
      {
        "id": "natural",
        "label": "ナチュラル",
        "inStock": true
      },
      {
        "id": "walnut",
        "label": "ウォールナット",
        "inStock": true
      },
      {
        "id": "white",
        "label": "ホワイト",
        "inStock": true
      }
    ],
    "sizes": [
      {
        "id": "free",
        "label": "フリーサイズ",
        "inStock": true
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "author": "M.K さん",
        "rating": 5,
        "date": "2026.06.12",
        "comment": "質感がよく、写真どおりの落ち着いた印象でした。組み立てもしやすく満足です。"
      },
      {
        "id": "r2",
        "author": "Y.S さん",
        "rating": 4,
        "date": "2026.06.08",
        "comment": "サイズ感がちょうどよく、部屋になじみました。配送も丁寧でした。"
      }
    ],
    "rank": 3,
    "isNew": true,
    "isRecommended": true
  },
  {
    "id": "kim-arcustud5set",
    "name": "4人用 ダイニングテーブルセット 5点 LUGA 楕円",
    "price": 152000,
    "categorySlug": "table",
    "sceneSlugs": [
      "dining",
      "study"
    ],
    "image": "/images/products/kim-arcustud5set/01.jpg",
    "images": [
      "/images/products/kim-arcustud5set/01.jpg",
      "/images/products/kim-arcustud5set/02.jpg",
      "/images/products/kim-arcustud5set/03.jpg",
      "/images/products/kim-arcustud5set/04.jpg",
      "/images/products/kim-arcustud5set/05.jpg",
      "/images/products/kim-arcustud5set/06.jpg",
      "/images/products/kim-arcustud5set/07.jpg",
      "/images/products/kim-arcustud5set/08.jpg"
    ],
    "description": "4人用 ダイニングテーブルセット 5点 LUGA 楕円（参考：楽天市場の商品情報を基にしています）",
    "material": "詳細は商品ページ・メーカー情報をご確認ください。",
    "sizeInfo": "サイズ・仕様の詳細は商品ページをご確認ください。",
    "deliveryNote": "ご注文確定後、通常5〜10営業日以内に発送（大型家具は別途納期をご案内）",
    "colors": [
      {
        "id": "natural",
        "label": "ナチュラル",
        "inStock": true
      },
      {
        "id": "walnut",
        "label": "ウォールナット",
        "inStock": true
      },
      {
        "id": "white",
        "label": "ホワイト",
        "inStock": true
      }
    ],
    "sizes": [
      {
        "id": "free",
        "label": "フリーサイズ",
        "inStock": true
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "author": "M.K さん",
        "rating": 5,
        "date": "2026.06.12",
        "comment": "質感がよく、写真どおりの落ち着いた印象でした。組み立てもしやすく満足です。"
      },
      {
        "id": "r2",
        "author": "Y.S さん",
        "rating": 4,
        "date": "2026.06.08",
        "comment": "サイズ感がちょうどよく、部屋になじみました。配送も丁寧でした。"
      }
    ],
    "rank": 4,
    "isNew": true,
    "isRecommended": true
  },
  {
    "id": "kim-orv15rod5set",
    "name": "4人用 ダイニングテーブルセット 5点 ORV セラミックテーブル",
    "price": 29900,
    "categorySlug": "table",
    "sceneSlugs": [
      "dining",
      "study"
    ],
    "image": "/images/products/kim-orv15rod5set/01.jpg",
    "images": [
      "/images/products/kim-orv15rod5set/01.jpg",
      "/images/products/kim-orv15rod5set/02.jpg",
      "/images/products/kim-orv15rod5set/03.jpg",
      "/images/products/kim-orv15rod5set/04.jpg",
      "/images/products/kim-orv15rod5set/05.jpg",
      "/images/products/kim-orv15rod5set/06.jpg",
      "/images/products/kim-orv15rod5set/07.jpg",
      "/images/products/kim-orv15rod5set/08.jpg"
    ],
    "description": "4人用 ダイニングテーブルセット 5点 ORV セラミックテーブル（参考：楽天市場の商品情報を基にしています）",
    "material": "詳細は商品ページ・メーカー情報をご確認ください。",
    "sizeInfo": "サイズ・仕様の詳細は商品ページをご確認ください。",
    "deliveryNote": "ご注文確定後、通常5〜10営業日以内に発送（大型家具は別途納期をご案内）",
    "colors": [
      {
        "id": "natural",
        "label": "ナチュラル",
        "inStock": true
      },
      {
        "id": "walnut",
        "label": "ウォールナット",
        "inStock": true
      },
      {
        "id": "white",
        "label": "ホワイト",
        "inStock": true
      }
    ],
    "sizes": [
      {
        "id": "free",
        "label": "フリーサイズ",
        "inStock": true
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "author": "M.K さん",
        "rating": 5,
        "date": "2026.06.12",
        "comment": "質感がよく、写真どおりの落ち着いた印象でした。組み立てもしやすく満足です。"
      },
      {
        "id": "r2",
        "author": "Y.S さん",
        "rating": 4,
        "date": "2026.06.08",
        "comment": "サイズ感がちょうどよく、部屋になじみました。配送も丁寧でした。"
      }
    ],
    "rank": 5
  },
  {
    "id": "kd-vaisd5set",
    "name": "4人用 ダイニングテーブルセット 5点 Vais メラミン",
    "price": 41900,
    "categorySlug": "table",
    "sceneSlugs": [
      "dining",
      "study"
    ],
    "image": "/images/products/kd-vaisd5set/01.jpg",
    "images": [
      "/images/products/kd-vaisd5set/01.jpg",
      "/images/products/kd-vaisd5set/02.jpg",
      "/images/products/kd-vaisd5set/03.jpg",
      "/images/products/kd-vaisd5set/04.jpg",
      "/images/products/kd-vaisd5set/05.jpg",
      "/images/products/kd-vaisd5set/06.jpg",
      "/images/products/kd-vaisd5set/07.jpg",
      "/images/products/kd-vaisd5set/08.jpg"
    ],
    "description": "4人用 ダイニングテーブルセット 5点 Vais メラミン（参考：楽天市場の商品情報を基にしています）",
    "material": "詳細は商品ページ・メーカー情報をご確認ください。",
    "sizeInfo": "サイズ・仕様の詳細は商品ページをご確認ください。",
    "deliveryNote": "ご注文確定後、通常5〜10営業日以内に発送（大型家具は別途納期をご案内）",
    "colors": [
      {
        "id": "natural",
        "label": "ナチュラル",
        "inStock": true
      },
      {
        "id": "walnut",
        "label": "ウォールナット",
        "inStock": true
      },
      {
        "id": "white",
        "label": "ホワイト",
        "inStock": true
      }
    ],
    "sizes": [
      {
        "id": "free",
        "label": "フリーサイズ",
        "inStock": true
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "author": "M.K さん",
        "rating": 5,
        "date": "2026.06.12",
        "comment": "質感がよく、写真どおりの落ち着いた印象でした。組み立てもしやすく満足です。"
      },
      {
        "id": "r2",
        "author": "Y.S さん",
        "rating": 4,
        "date": "2026.06.08",
        "comment": "サイズ感がちょうどよく、部屋になじみました。配送も丁寧でした。"
      }
    ],
    "rank": 6
  },
  {
    "id": "kd-vaisd4set",
    "name": "4人用 ダイニングテーブルセット 4点 Vais メラミン",
    "price": 41900,
    "categorySlug": "table",
    "sceneSlugs": [
      "dining",
      "study"
    ],
    "image": "/images/products/kd-vaisd4set/01.jpg",
    "images": [
      "/images/products/kd-vaisd4set/01.jpg",
      "/images/products/kd-vaisd4set/02.jpg",
      "/images/products/kd-vaisd4set/03.jpg",
      "/images/products/kd-vaisd4set/04.jpg",
      "/images/products/kd-vaisd4set/05.jpg",
      "/images/products/kd-vaisd4set/06.jpg",
      "/images/products/kd-vaisd4set/07.jpg",
      "/images/products/kd-vaisd4set/08.jpg"
    ],
    "description": "4人用 ダイニングテーブルセット 4点 Vais メラミン（参考：楽天市場の商品情報を基にしています）",
    "material": "詳細は商品ページ・メーカー情報をご確認ください。",
    "sizeInfo": "サイズ・仕様の詳細は商品ページをご確認ください。",
    "deliveryNote": "ご注文確定後、通常5〜10営業日以内に発送（大型家具は別途納期をご案内）",
    "colors": [
      {
        "id": "natural",
        "label": "ナチュラル",
        "inStock": true
      },
      {
        "id": "walnut",
        "label": "ウォールナット",
        "inStock": true
      },
      {
        "id": "white",
        "label": "ホワイト",
        "inStock": true
      }
    ],
    "sizes": [
      {
        "id": "free",
        "label": "フリーサイズ",
        "inStock": true
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "author": "M.K さん",
        "rating": 5,
        "date": "2026.06.12",
        "comment": "質感がよく、写真どおりの落ち着いた印象でした。組み立てもしやすく満足です。"
      },
      {
        "id": "r2",
        "author": "Y.S さん",
        "rating": 4,
        "date": "2026.06.08",
        "comment": "サイズ感がちょうどよく、部屋になじみました。配送も丁寧でした。"
      }
    ],
    "rank": 7
  },
  {
    "id": "kim-rectatud5set",
    "name": "4人用 ダイニングテーブルセット 5点 LUGA 長方形",
    "price": 159000,
    "categorySlug": "table",
    "sceneSlugs": [
      "dining",
      "study"
    ],
    "image": "/images/products/kim-rectatud5set/01.jpg",
    "images": [
      "/images/products/kim-rectatud5set/01.jpg",
      "/images/products/kim-rectatud5set/02.jpg",
      "/images/products/kim-rectatud5set/03.jpg",
      "/images/products/kim-rectatud5set/04.jpg",
      "/images/products/kim-rectatud5set/05.jpg",
      "/images/products/kim-rectatud5set/06.jpg",
      "/images/products/kim-rectatud5set/07.jpg",
      "/images/products/kim-rectatud5set/08.jpg"
    ],
    "description": "4人用 ダイニングテーブルセット 5点 LUGA 長方形（参考：楽天市場の商品情報を基にしています）",
    "material": "詳細は商品ページ・メーカー情報をご確認ください。",
    "sizeInfo": "サイズ・仕様の詳細は商品ページをご確認ください。",
    "deliveryNote": "ご注文確定後、通常5〜10営業日以内に発送（大型家具は別途納期をご案内）",
    "colors": [
      {
        "id": "natural",
        "label": "ナチュラル",
        "inStock": true
      },
      {
        "id": "walnut",
        "label": "ウォールナット",
        "inStock": true
      },
      {
        "id": "white",
        "label": "ホワイト",
        "inStock": true
      }
    ],
    "sizes": [
      {
        "id": "free",
        "label": "フリーサイズ",
        "inStock": true
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "author": "M.K さん",
        "rating": 5,
        "date": "2026.06.12",
        "comment": "質感がよく、写真どおりの落ち着いた印象でした。組み立てもしやすく満足です。"
      },
      {
        "id": "r2",
        "author": "Y.S さん",
        "rating": 4,
        "date": "2026.06.08",
        "comment": "サイズ感がちょうどよく、部屋になじみました。配送も丁寧でした。"
      }
    ],
    "rank": 8
  }
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
  const flagged = products.filter((p) => p.isNew);
  const source = flagged.length > 0 ? flagged : products;
  return source.slice(0, limit);
}

export function getAllNewArrivals(): Product[] {
  const flagged = products.filter((p) => p.isNew);
  return flagged.length > 0 ? flagged : products;
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
  const flagged = products.filter((p) => p.isRecommended);
  const source = flagged.length > 0 ? flagged : products;
  return source.slice(0, limit);
}

export function getDefaultRankingCategory(): string {
  const slugs = [
    "storage",
    "sofa",
    "table",
    "chair",
    "tvboard",
    "bed",
    "mirror",
    "lighting",
    "rug",
    "goods",
  ];
  for (const slug of slugs) {
    if (products.some((product) => product.categorySlug === slug)) {
      return slug;
    }
  }
  return products[0]?.categorySlug ?? "storage";
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
