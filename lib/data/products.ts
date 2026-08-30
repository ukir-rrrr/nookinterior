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
    "id": "abr920125",
    "name": "ワゴン キャスター付き 3段 クローゼット収納ワゴン ブックラック 多目的ラック サイドラック オフィスラック 本棚 a4 雑誌 文庫 コミック CD DVD 大容量 扉付 約 奥行き30 奥深タイプ 木目調 ウォールナット/オーク/ホワイト 【組立品/完成品が選べる】 ABR920125",
    "price": 8479,
    "categorySlug": "storage",
    "sceneSlugs": [],
    "image": "/images/products/abr920125/01.jpg",
    "images": [
      "/images/products/abr920125/01.jpg",
      "/images/products/abr920125/02.jpg",
      "/images/products/abr920125/03.jpg",
      "/images/products/abr920125/04.jpg",
      "/images/products/abr920125/05.jpg",
      "/images/products/abr920125/06.jpg",
      "/images/products/abr920125/07.jpg",
      "/images/products/abr920125/08.jpg"
    ],
    "description": "ワゴン キャスター付き 3段 クローゼット収納ワゴン ブックラック 多目的ラック サイドラック オフィスラック 本棚 a4 雑誌 文庫 コミック CD DVD 大容量 扉付 約 奥行き30 奥深タイプ 木目調 ウォールナット/オーク/ホワイト 【組立品/完成品が選べる】 ABR920125（参考：楽天市場の商品情報を基にしています）",
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
    ]
  },
  {
    "id": "abr920153",
    "name": "本棚 ガラス扉キャビネット コミックシェルフ ブックシェルフ コレクション 棚 整理棚 リビングボード カップボード コミック収納 PUTUPUTU 2扉/3扉/4扉/グレージュ/グレー 【組立品/完成品が選べる】",
    "price": 13380,
    "categorySlug": "storage",
    "sceneSlugs": [],
    "image": "/images/products/abr920153/01.jpg",
    "images": [
      "/images/products/abr920153/01.jpg",
      "/images/products/abr920153/02.jpg",
      "/images/products/abr920153/03.jpg",
      "/images/products/abr920153/04.jpg",
      "/images/products/abr920153/05.jpg",
      "/images/products/abr920153/06.jpg",
      "/images/products/abr920153/07.jpg",
      "/images/products/abr920153/08.jpg"
    ],
    "description": "本棚 ガラス扉キャビネット コミックシェルフ ブックシェルフ コレクション 棚 整理棚 リビングボード カップボード コミック収納 PUTUPUTU 2扉/3扉/4扉/グレージュ/グレー 【組立品/完成品が選べる】（参考：楽天市場の商品情報を基にしています）",
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
    ]
  },
  {
    "id": "lcb642266",
    "name": "本棚 木製 約 幅90 奥行30 高さ90cm　オープンラック スリム コンパクト 大容量 ラック ロータイプ ランドセルラック 棚 可動棚 オープンシェルフ リビング 子ども部屋 収納 ウォールナット/オーク/ホワイト 【組立品/完成品が選べる】 LCB642266",
    "price": 9680,
    "categorySlug": "storage",
    "sceneSlugs": [],
    "image": "/images/products/lcb642266/01.jpg",
    "images": [
      "/images/products/lcb642266/01.jpg",
      "/images/products/lcb642266/02.jpg",
      "/images/products/lcb642266/03.jpg",
      "/images/products/lcb642266/04.jpg",
      "/images/products/lcb642266/05.jpg",
      "/images/products/lcb642266/06.jpg",
      "/images/products/lcb642266/07.jpg",
      "/images/products/lcb642266/08.jpg"
    ],
    "description": "本棚 木製 約 幅90 奥行30 高さ90cm　オープンラック スリム コンパクト 大容量 ラック ロータイプ ランドセルラック 棚 可動棚 オープンシェルフ リビング 子ども部屋 収納 ウォールナット/オーク/ホワイト 【組立品/完成品が選べる】 LCB642266（参考：楽天市場の商品情報を基にしています）",
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
    ]
  },
  {
    "id": "push_cabinet03",
    "name": "本棚 壁面収納 約 幅 30/45/60/75 cm 国産 本 マンガ cd dvd 収納 書棚 木製 シェルフ リビング オフィス 書斎 ラック ブックシェルフ キャビネット 食器棚 整理棚 壁面 おしゃれ ナチュラル/ホワイト/ブラウン 【組立品/完成品が選べる】",
    "price": 54000,
    "categorySlug": "storage",
    "sceneSlugs": [],
    "image": "/images/products/push_cabinet03/01.jpg",
    "images": [
      "/images/products/push_cabinet03/01.jpg",
      "/images/products/push_cabinet03/02.jpg",
      "/images/products/push_cabinet03/03.jpg",
      "/images/products/push_cabinet03/04.jpg",
      "/images/products/push_cabinet03/05.jpg",
      "/images/products/push_cabinet03/06.jpg",
      "/images/products/push_cabinet03/07.jpg",
      "/images/products/push_cabinet03/08.jpg"
    ],
    "description": "本棚 壁面収納 約 幅 30/45/60/75 cm 国産 本 マンガ cd dvd 収納 書棚 木製 シェルフ リビング オフィス 書斎 ラック ブックシェルフ キャビネット 食器棚 整理棚 壁面 おしゃれ ナチュラル/ホワイト/ブラウン 【組立品/完成品が選べる】（参考：楽天市場の商品情報を基にしています）",
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
    ]
  },
  {
    "id": "simple_woodrack999",
    "name": "オープンラック 木製 北欧 ブックシェルフ スリム おしゃれ ラック 棚 収納棚 大容量 本棚 6段 カラーボックス ブックラック CD収納 DVD収納 a4 雑誌 シェルフ オフィス 約 幅 30cm/44cm/60cm/90cm 全4色 【組立品/完成品が選べる】",
    "price": 54000,
    "categorySlug": "storage",
    "sceneSlugs": [],
    "image": "/images/products/simple_woodrack999/01.jpg",
    "images": [
      "/images/products/simple_woodrack999/01.jpg",
      "/images/products/simple_woodrack999/02.jpg",
      "/images/products/simple_woodrack999/03.jpg",
      "/images/products/simple_woodrack999/04.jpg",
      "/images/products/simple_woodrack999/05.jpg",
      "/images/products/simple_woodrack999/06.jpg",
      "/images/products/simple_woodrack999/07.jpg",
      "/images/products/simple_woodrack999/08.jpg"
    ],
    "description": "オープンラック 木製 北欧 ブックシェルフ スリム おしゃれ ラック 棚 収納棚 大容量 本棚 6段 カラーボックス ブックラック CD収納 DVD収納 a4 雑誌 シェルフ オフィス 約 幅 30cm/44cm/60cm/90cm 全4色 【組立品/完成品が選べる】（参考：楽天市場の商品情報を基にしています）",
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
    ]
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
