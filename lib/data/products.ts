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
    "id": "grt-2wolte2-2-d",
    "name": "ダブル ウォルテ ベッド 木製 寝室",
    "price": 89800,
    "categorySlug": "bed",
    "sceneSlugs": [
      "bedroom"
    ],
    "image": "/images/products/grt-2wolte2-2-d/01.jpg",
    "images": [
      "/images/products/grt-2wolte2-2-d/01.jpg",
      "/images/products/grt-2wolte2-2-d/02.jpg",
      "/images/products/grt-2wolte2-2-d/03.jpg",
      "/images/products/grt-2wolte2-2-d/04.jpg",
      "/images/products/grt-2wolte2-2-d/05.jpg",
      "/images/products/grt-2wolte2-2-d/06.jpg",
      "/images/products/grt-2wolte2-2-d/07.jpg",
      "/images/products/grt-2wolte2-2-d/08.jpg"
    ],
    "description": "ダブル ウォルテ ベッド 木製 寝室（参考：楽天市場の商品情報を基にしています）",
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
    "id": "kd-moduliast",
    "name": "幅70cm オットマン MODULIA 撥水 脚付き",
    "price": 25900,
    "categorySlug": "sofa",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/kd-moduliast/01.jpg",
    "images": [
      "/images/products/kd-moduliast/01.jpg",
      "/images/products/kd-moduliast/02.jpg",
      "/images/products/kd-moduliast/03.jpg",
      "/images/products/kd-moduliast/04.jpg",
      "/images/products/kd-moduliast/05.jpg",
      "/images/products/kd-moduliast/06.jpg",
      "/images/products/kd-moduliast/07.jpg",
      "/images/products/kd-moduliast/08.jpg"
    ],
    "description": "幅70cm オットマン MODULIA 撥水 脚付き（参考：楽天市場の商品情報を基にしています）",
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
    "id": "kim-brm65clt",
    "name": "幅65cm コレクションケース ガラス 収納 棚",
    "price": 56900,
    "categorySlug": "storage",
    "sceneSlugs": [
      "living",
      "study"
    ],
    "image": "/images/products/kim-brm65clt/01.jpg",
    "images": [
      "/images/products/kim-brm65clt/01.jpg",
      "/images/products/kim-brm65clt/02.jpg",
      "/images/products/kim-brm65clt/03.jpg",
      "/images/products/kim-brm65clt/04.jpg",
      "/images/products/kim-brm65clt/05.jpg",
      "/images/products/kim-brm65clt/06.jpg",
      "/images/products/kim-brm65clt/07.jpg",
      "/images/products/kim-brm65clt/08.jpg"
    ],
    "description": "幅65cm コレクションケース ガラス 収納 棚（参考：楽天市場の商品情報を基にしています）",
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
    "id": "kim-glm180lowbm",
    "name": "幅180cm テレビ台 LUGA 木製 テレビボード",
    "price": 63900,
    "categorySlug": "tvboard",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/kim-glm180lowbm/01.jpg",
    "images": [
      "/images/products/kim-glm180lowbm/01.jpg",
      "/images/products/kim-glm180lowbm/02.jpg",
      "/images/products/kim-glm180lowbm/03.jpg",
      "/images/products/kim-glm180lowbm/04.jpg",
      "/images/products/kim-glm180lowbm/05.jpg",
      "/images/products/kim-glm180lowbm/06.jpg",
      "/images/products/kim-glm180lowbm/07.jpg",
      "/images/products/kim-glm180lowbm/08.jpg"
    ],
    "description": "幅180cm テレビ台 LUGA 木製 テレビボード（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 1
  },
  {
    "id": "oc-ch-ym15",
    "name": "オフィスチェア LF",
    "price": 5990,
    "categorySlug": "chair",
    "sceneSlugs": [
      "dining",
      "study"
    ],
    "image": "/images/products/oc-ch-ym15/01.jpg",
    "images": [
      "/images/products/oc-ch-ym15/01.jpg",
      "/images/products/oc-ch-ym15/02.jpg",
      "/images/products/oc-ch-ym15/03.jpg",
      "/images/products/oc-ch-ym15/04.jpg",
      "/images/products/oc-ch-ym15/05.jpg",
      "/images/products/oc-ch-ym15/06.jpg",
      "/images/products/oc-ch-ym15/07.jpg",
      "/images/products/oc-ch-ym15/08.jpg"
    ],
    "description": "オフィスチェア LF（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 1
  },
  {
    "id": "pr-jioni1919",
    "name": "プレーベル 190×190cm カーペット 日本製 約2.3畳",
    "price": 22800,
    "categorySlug": "rug",
    "sceneSlugs": [
      "living",
      "bedroom"
    ],
    "image": "/images/products/pr-jioni1919/01.jpg",
    "images": [
      "/images/products/pr-jioni1919/01.jpg",
      "/images/products/pr-jioni1919/02.jpg",
      "/images/products/pr-jioni1919/03.jpg",
      "/images/products/pr-jioni1919/04.jpg",
      "/images/products/pr-jioni1919/05.jpg",
      "/images/products/pr-jioni1919/06.jpg",
      "/images/products/pr-jioni1919/07.jpg",
      "/images/products/pr-jioni1919/08.jpg"
    ],
    "description": "プレーベル 190×190cm カーペット 日本製 約2.3畳（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 1
  },
  {
    "id": "sgt-wav957802",
    "name": "幅12cm フラワーベース White Alabastar Vase",
    "price": 5690,
    "categorySlug": "goods",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/sgt-wav957802/01.jpg",
    "images": [
      "/images/products/sgt-wav957802/01.jpg",
      "/images/products/sgt-wav957802/02.jpg",
      "/images/products/sgt-wav957802/03.jpg",
      "/images/products/sgt-wav957802/04.jpg",
      "/images/products/sgt-wav957802/05.jpg",
      "/images/products/sgt-wav957802/06.jpg",
      "/images/products/sgt-wav957802/07.jpg",
      "/images/products/sgt-wav957802/08.jpg"
    ],
    "description": "幅12cm フラワーベース White Alabastar Vase（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 1
  },
  {
    "id": "spi-salp-0004",
    "name": "1灯 ペンダントライト 日本製 フェリア3 ライト",
    "price": 25850,
    "categorySlug": "lighting",
    "sceneSlugs": [
      "living",
      "bedroom",
      "study"
    ],
    "image": "/images/products/spi-salp-0004/01.jpg",
    "images": [
      "/images/products/spi-salp-0004/01.jpg",
      "/images/products/spi-salp-0004/02.jpg",
      "/images/products/spi-salp-0004/03.jpg",
      "/images/products/spi-salp-0004/04.jpg",
      "/images/products/spi-salp-0004/05.jpg",
      "/images/products/spi-salp-0004/06.jpg",
      "/images/products/spi-salp-0004/07.jpg",
      "/images/products/spi-salp-0004/08.jpg"
    ],
    "description": "1灯 ペンダントライト 日本製 フェリア3 ライト（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 1
  },
  {
    "id": "az-guy920a",
    "name": "幅16cm 木製 ジュエリーボックス 5段 ジュエリーケース",
    "price": 5790,
    "categorySlug": "goods",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/az-guy920a/01.jpg",
    "images": [
      "/images/products/az-guy920a/01.jpg",
      "/images/products/az-guy920a/02.jpg",
      "/images/products/az-guy920a/03.jpg",
      "/images/products/az-guy920a/04.jpg",
      "/images/products/az-guy920a/05.jpg",
      "/images/products/az-guy920a/06.jpg",
      "/images/products/az-guy920a/07.jpg",
      "/images/products/az-guy920a/08.jpg"
    ],
    "description": "幅16cm 木製 ジュエリーボックス 5段 ジュエリーケース（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 2
  },
  {
    "id": "ha-wb-7721s",
    "name": "シングル ベッドフレーム 国産 ひのき ベッド",
    "price": 16900,
    "categorySlug": "bed",
    "sceneSlugs": [
      "bedroom"
    ],
    "image": "/images/products/ha-wb-7721s/01.jpg",
    "images": [
      "/images/products/ha-wb-7721s/01.jpg",
      "/images/products/ha-wb-7721s/02.jpg",
      "/images/products/ha-wb-7721s/03.jpg",
      "/images/products/ha-wb-7721s/04.jpg",
      "/images/products/ha-wb-7721s/05.jpg",
      "/images/products/ha-wb-7721s/06.jpg",
      "/images/products/ha-wb-7721s/07.jpg",
      "/images/products/ha-wb-7721s/08.jpg"
    ],
    "description": "シングル ベッドフレーム 国産 ひのき ベッド（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 2
  },
  {
    "id": "kd-modulia1as",
    "name": "幅111cm 1人掛け ソファ 肘掛けテーブル付き MODULIA",
    "price": 25900,
    "categorySlug": "sofa",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/kd-modulia1as/01.jpg",
    "images": [
      "/images/products/kd-modulia1as/01.jpg",
      "/images/products/kd-modulia1as/02.jpg",
      "/images/products/kd-modulia1as/03.jpg",
      "/images/products/kd-modulia1as/04.jpg",
      "/images/products/kd-modulia1as/05.jpg",
      "/images/products/kd-modulia1as/06.jpg",
      "/images/products/kd-modulia1as/07.jpg",
      "/images/products/kd-modulia1as/08.jpg"
    ],
    "description": "幅111cm 1人掛け ソファ 肘掛けテーブル付き MODULIA（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 2
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
    "rank": 2
  },
  {
    "id": "kim-vagi65clt",
    "name": "幅65cm ハイタイプ コレクションケース VAGIO ガラス",
    "price": 42900,
    "categorySlug": "storage",
    "sceneSlugs": [
      "living",
      "study"
    ],
    "image": "/images/products/kim-vagi65clt/01.jpg",
    "images": [
      "/images/products/kim-vagi65clt/01.jpg",
      "/images/products/kim-vagi65clt/02.jpg",
      "/images/products/kim-vagi65clt/03.jpg",
      "/images/products/kim-vagi65clt/04.jpg",
      "/images/products/kim-vagi65clt/05.jpg",
      "/images/products/kim-vagi65clt/06.jpg",
      "/images/products/kim-vagi65clt/07.jpg",
      "/images/products/kim-vagi65clt/08.jpg"
    ],
    "description": "幅65cm ハイタイプ コレクションケース VAGIO ガラス（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 2
  },
  {
    "id": "oc-ch-ym02",
    "name": "パソコンチェア RBチェア 肘掛け 布張り チェア",
    "price": 15990,
    "categorySlug": "chair",
    "sceneSlugs": [
      "dining",
      "study"
    ],
    "image": "/images/products/oc-ch-ym02/01.jpg",
    "images": [
      "/images/products/oc-ch-ym02/01.jpg",
      "/images/products/oc-ch-ym02/02.jpg",
      "/images/products/oc-ch-ym02/03.jpg",
      "/images/products/oc-ch-ym02/04.jpg",
      "/images/products/oc-ch-ym02/05.jpg",
      "/images/products/oc-ch-ym02/06.jpg",
      "/images/products/oc-ch-ym02/07.jpg",
      "/images/products/oc-ch-ym02/08.jpg"
    ],
    "description": "パソコンチェア RBチェア 肘掛け 布張り チェア（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 2
  },
  {
    "id": "pr-jioni1924",
    "name": "プレーベル 190×240cm カーペット 日本製 約3畳",
    "price": 22800,
    "categorySlug": "rug",
    "sceneSlugs": [
      "living",
      "bedroom"
    ],
    "image": "/images/products/pr-jioni1924/01.jpg",
    "images": [
      "/images/products/pr-jioni1924/01.jpg",
      "/images/products/pr-jioni1924/02.jpg",
      "/images/products/pr-jioni1924/03.jpg",
      "/images/products/pr-jioni1924/04.jpg",
      "/images/products/pr-jioni1924/05.jpg",
      "/images/products/pr-jioni1924/06.jpg",
      "/images/products/pr-jioni1924/07.jpg",
      "/images/products/pr-jioni1924/08.jpg"
    ],
    "description": "プレーベル 190×240cm カーペット 日本製 約3畳（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 2
  },
  {
    "id": "snk-safuran180",
    "name": "幅180cm テレビボード 木製 テレビ台 収納",
    "price": 72900,
    "categorySlug": "tvboard",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/snk-safuran180/01.jpg",
    "images": [
      "/images/products/snk-safuran180/01.jpg",
      "/images/products/snk-safuran180/02.jpg",
      "/images/products/snk-safuran180/03.jpg",
      "/images/products/snk-safuran180/04.jpg",
      "/images/products/snk-safuran180/05.jpg",
      "/images/products/snk-safuran180/06.jpg",
      "/images/products/snk-safuran180/07.jpg",
      "/images/products/snk-safuran180/08.jpg"
    ],
    "description": "幅180cm テレビボード 木製 テレビ台 収納（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 2
  },
  {
    "id": "spi-lt-7444",
    "name": "1灯 ペンダントライト メルチェロ ライト 吊り下げ",
    "price": 25300,
    "categorySlug": "lighting",
    "sceneSlugs": [
      "living",
      "bedroom",
      "study"
    ],
    "image": "/images/products/spi-lt-7444/01.jpg",
    "images": [
      "/images/products/spi-lt-7444/01.jpg",
      "/images/products/spi-lt-7444/02.jpg",
      "/images/products/spi-lt-7444/03.jpg",
      "/images/products/spi-lt-7444/04.jpg",
      "/images/products/spi-lt-7444/05.jpg",
      "/images/products/spi-lt-7444/06.jpg",
      "/images/products/spi-lt-7444/07.jpg",
      "/images/products/spi-lt-7444/08.jpg"
    ],
    "description": "1灯 ペンダントライト メルチェロ ライト 吊り下げ（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 2
  },
  {
    "id": "grt-berio-sd",
    "name": "セミダブル ベッドフレーム ベリオ LED 照明付き",
    "price": 48900,
    "categorySlug": "bed",
    "sceneSlugs": [
      "bedroom"
    ],
    "image": "/images/products/grt-berio-sd/01.jpg",
    "images": [
      "/images/products/grt-berio-sd/01.jpg",
      "/images/products/grt-berio-sd/02.jpg",
      "/images/products/grt-berio-sd/03.jpg",
      "/images/products/grt-berio-sd/04.jpg",
      "/images/products/grt-berio-sd/05.jpg",
      "/images/products/grt-berio-sd/06.jpg",
      "/images/products/grt-berio-sd/07.jpg",
      "/images/products/grt-berio-sd/08.jpg"
    ],
    "description": "セミダブル ベッドフレーム ベリオ LED 照明付き（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 3
  },
  {
    "id": "he-olfe120sb",
    "name": "幅120cm OLFE サイドボード 木目 キャビネット",
    "price": 52900,
    "categorySlug": "storage",
    "sceneSlugs": [
      "living",
      "study"
    ],
    "image": "/images/products/he-olfe120sb/01.jpg",
    "images": [
      "/images/products/he-olfe120sb/01.jpg",
      "/images/products/he-olfe120sb/02.jpg",
      "/images/products/he-olfe120sb/03.jpg",
      "/images/products/he-olfe120sb/04.jpg",
      "/images/products/he-olfe120sb/05.jpg",
      "/images/products/he-olfe120sb/06.jpg",
      "/images/products/he-olfe120sb/07.jpg",
      "/images/products/he-olfe120sb/08.jpg"
    ],
    "description": "幅120cm OLFE サイドボード 木目 キャビネット（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 3
  },
  {
    "id": "kd-moduliacuset",
    "name": "幅257cm 3人掛け カウチソファ セット 組み合わせ自由",
    "price": 25900,
    "categorySlug": "sofa",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/kd-moduliacuset/01.jpg",
    "images": [
      "/images/products/kd-moduliacuset/01.jpg",
      "/images/products/kd-moduliacuset/02.jpg",
      "/images/products/kd-moduliacuset/03.jpg",
      "/images/products/kd-moduliacuset/04.jpg",
      "/images/products/kd-moduliacuset/05.jpg",
      "/images/products/kd-moduliacuset/06.jpg",
      "/images/products/kd-moduliacuset/07.jpg",
      "/images/products/kd-moduliacuset/08.jpg"
    ],
    "description": "幅257cm 3人掛け カウチソファ セット 組み合わせ自由（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 3
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
    "rank": 3
  },
  {
    "id": "oc-chfb-ny03-ahh",
    "name": "オフィスチェア YS",
    "price": 31980,
    "categorySlug": "chair",
    "sceneSlugs": [
      "dining",
      "study"
    ],
    "image": "/images/products/oc-chfb-ny03-ahh/01.jpg",
    "images": [
      "/images/products/oc-chfb-ny03-ahh/01.jpg",
      "/images/products/oc-chfb-ny03-ahh/02.jpg",
      "/images/products/oc-chfb-ny03-ahh/03.jpg",
      "/images/products/oc-chfb-ny03-ahh/04.jpg",
      "/images/products/oc-chfb-ny03-ahh/05.jpg",
      "/images/products/oc-chfb-ny03-ahh/06.jpg",
      "/images/products/oc-chfb-ny03-ahh/07.jpg",
      "/images/products/oc-chfb-ny03-ahh/08.jpg"
    ],
    "description": "オフィスチェア YS（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 3
  },
  {
    "id": "pr-jioni1319",
    "name": "プレーベル 130×190cm カーペット 日本製 約1.5畳",
    "price": 32800,
    "categorySlug": "rug",
    "sceneSlugs": [
      "living",
      "bedroom"
    ],
    "image": "/images/products/pr-jioni1319/01.jpg",
    "images": [
      "/images/products/pr-jioni1319/01.jpg",
      "/images/products/pr-jioni1319/02.jpg",
      "/images/products/pr-jioni1319/03.jpg",
      "/images/products/pr-jioni1319/04.jpg",
      "/images/products/pr-jioni1319/05.jpg",
      "/images/products/pr-jioni1319/06.jpg",
      "/images/products/pr-jioni1319/07.jpg",
      "/images/products/pr-jioni1319/08.jpg"
    ],
    "description": "プレーベル 130×190cm カーペット 日本製 約1.5畳（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 3
  },
  {
    "id": "sgt-bkem-957",
    "name": "幅15cm ブックエンドマーブル Bookends 大理石",
    "price": 5690,
    "categorySlug": "goods",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/sgt-bkem-957/01.jpg",
    "images": [
      "/images/products/sgt-bkem-957/01.jpg",
      "/images/products/sgt-bkem-957/02.jpg",
      "/images/products/sgt-bkem-957/03.jpg",
      "/images/products/sgt-bkem-957/04.jpg",
      "/images/products/sgt-bkem-957/05.jpg",
      "/images/products/sgt-bkem-957/06.jpg",
      "/images/products/sgt-bkem-957/07.jpg",
      "/images/products/sgt-bkem-957/08.jpg"
    ],
    "description": "幅15cm ブックエンドマーブル Bookends 大理石（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 3
  },
  {
    "id": "spi-lt-4452",
    "name": "フロアランプ トゥロー フロアライト 床置き 照明",
    "price": 38500,
    "categorySlug": "lighting",
    "sceneSlugs": [
      "living",
      "bedroom",
      "study"
    ],
    "image": "/images/products/spi-lt-4452/01.jpg",
    "images": [
      "/images/products/spi-lt-4452/01.jpg",
      "/images/products/spi-lt-4452/02.jpg",
      "/images/products/spi-lt-4452/03.jpg",
      "/images/products/spi-lt-4452/04.jpg",
      "/images/products/spi-lt-4452/05.jpg",
      "/images/products/spi-lt-4452/06.jpg",
      "/images/products/spi-lt-4452/07.jpg",
      "/images/products/spi-lt-4452/08.jpg"
    ],
    "description": "フロアランプ トゥロー フロアライト 床置き 照明（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 3
  },
  {
    "id": "grt-2wolte-s",
    "name": "シングル ウォルテ ベッド 木製 寝室",
    "price": 69800,
    "categorySlug": "bed",
    "sceneSlugs": [
      "bedroom"
    ],
    "image": "/images/products/grt-2wolte-s/01.jpg",
    "images": [
      "/images/products/grt-2wolte-s/01.jpg",
      "/images/products/grt-2wolte-s/02.jpg",
      "/images/products/grt-2wolte-s/03.jpg",
      "/images/products/grt-2wolte-s/04.jpg",
      "/images/products/grt-2wolte-s/05.jpg",
      "/images/products/grt-2wolte-s/06.jpg",
      "/images/products/grt-2wolte-s/07.jpg",
      "/images/products/grt-2wolte-s/08.jpg"
    ],
    "description": "シングル ウォルテ ベッド 木製 寝室（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 4
  },
  {
    "id": "hbdk-workchair",
    "name": "パソコンチェア メティオ 回転 チェア キャスター付き",
    "price": 23980,
    "categorySlug": "chair",
    "sceneSlugs": [
      "dining",
      "study"
    ],
    "image": "/images/products/hbdk-workchair/01.jpg",
    "images": [
      "/images/products/hbdk-workchair/01.jpg",
      "/images/products/hbdk-workchair/02.jpg",
      "/images/products/hbdk-workchair/03.jpg",
      "/images/products/hbdk-workchair/04.jpg",
      "/images/products/hbdk-workchair/05.jpg",
      "/images/products/hbdk-workchair/06.jpg",
      "/images/products/hbdk-workchair/07.jpg",
      "/images/products/hbdk-workchair/08.jpg"
    ],
    "description": "パソコンチェア メティオ 回転 チェア キャスター付き（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 4
  },
  {
    "id": "kd-modulia25sset",
    "name": "幅184cm 2.5人掛け カウチソファ セット 組み合わせ自由",
    "price": 25900,
    "categorySlug": "sofa",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/kd-modulia25sset/01.jpg",
    "images": [
      "/images/products/kd-modulia25sset/01.jpg",
      "/images/products/kd-modulia25sset/02.jpg",
      "/images/products/kd-modulia25sset/03.jpg",
      "/images/products/kd-modulia25sset/04.jpg",
      "/images/products/kd-modulia25sset/05.jpg",
      "/images/products/kd-modulia25sset/06.jpg",
      "/images/products/kd-modulia25sset/07.jpg",
      "/images/products/kd-modulia25sset/08.jpg"
    ],
    "description": "幅184cm 2.5人掛け カウチソファ セット 組み合わせ自由（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 4
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
    "rank": 4
  },
  {
    "id": "kim-vagi140clt",
    "name": "幅140cm ロータイプ コレクションケース VAGIO ガラス",
    "price": 42900,
    "categorySlug": "storage",
    "sceneSlugs": [
      "living",
      "study"
    ],
    "image": "/images/products/kim-vagi140clt/01.jpg",
    "images": [
      "/images/products/kim-vagi140clt/01.jpg",
      "/images/products/kim-vagi140clt/02.jpg",
      "/images/products/kim-vagi140clt/03.jpg",
      "/images/products/kim-vagi140clt/04.jpg",
      "/images/products/kim-vagi140clt/05.jpg",
      "/images/products/kim-vagi140clt/06.jpg",
      "/images/products/kim-vagi140clt/07.jpg",
      "/images/products/kim-vagi140clt/08.jpg"
    ],
    "description": "幅140cm ロータイプ コレクションケース VAGIO ガラス（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 4
  },
  {
    "id": "pr-jeido1924",
    "name": "プレーベル 190×240cm カーペット 日本製 約3畳",
    "price": 27800,
    "categorySlug": "rug",
    "sceneSlugs": [
      "living",
      "bedroom"
    ],
    "image": "/images/products/pr-jeido1924/01.jpg",
    "images": [
      "/images/products/pr-jeido1924/01.jpg",
      "/images/products/pr-jeido1924/02.jpg",
      "/images/products/pr-jeido1924/03.jpg",
      "/images/products/pr-jeido1924/04.jpg",
      "/images/products/pr-jeido1924/05.jpg",
      "/images/products/pr-jeido1924/06.jpg",
      "/images/products/pr-jeido1924/07.jpg",
      "/images/products/pr-jeido1924/08.jpg"
    ],
    "description": "プレーベル 190×240cm カーペット 日本製 約3畳（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 4
  },
  {
    "id": "sgt-mdv957",
    "name": "幅10.5cm フラワーベース 大理石 花瓶",
    "price": 5690,
    "categorySlug": "goods",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/sgt-mdv957/01.jpg",
    "images": [
      "/images/products/sgt-mdv957/01.jpg",
      "/images/products/sgt-mdv957/02.jpg",
      "/images/products/sgt-mdv957/03.jpg",
      "/images/products/sgt-mdv957/04.jpg",
      "/images/products/sgt-mdv957/05.jpg",
      "/images/products/sgt-mdv957/06.jpg",
      "/images/products/sgt-mdv957/07.jpg",
      "/images/products/sgt-mdv957/08.jpg"
    ],
    "description": "幅10.5cm フラワーベース 大理石 花瓶（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 4
  },
  {
    "id": "snk-safuran200",
    "name": "幅200cm テレビボード 木製 テレビ台 収納",
    "price": 74900,
    "categorySlug": "tvboard",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/snk-safuran200/01.jpg",
    "images": [
      "/images/products/snk-safuran200/01.jpg",
      "/images/products/snk-safuran200/02.jpg",
      "/images/products/snk-safuran200/03.jpg",
      "/images/products/snk-safuran200/04.jpg",
      "/images/products/snk-safuran200/05.jpg",
      "/images/products/snk-safuran200/06.jpg",
      "/images/products/snk-safuran200/07.jpg",
      "/images/products/snk-safuran200/08.jpg"
    ],
    "description": "幅200cm テレビボード 木製 テレビ台 収納（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 4
  },
  {
    "id": "spi-lt-4054",
    "name": "フロアランプ ドナ フロアライト 床置き 照明",
    "price": 24200,
    "categorySlug": "lighting",
    "sceneSlugs": [
      "living",
      "bedroom",
      "study"
    ],
    "image": "/images/products/spi-lt-4054/01.jpg",
    "images": [
      "/images/products/spi-lt-4054/01.jpg",
      "/images/products/spi-lt-4054/02.jpg",
      "/images/products/spi-lt-4054/03.jpg",
      "/images/products/spi-lt-4054/04.jpg",
      "/images/products/spi-lt-4054/05.jpg",
      "/images/products/spi-lt-4054/06.jpg",
      "/images/products/spi-lt-4054/07.jpg",
      "/images/products/spi-lt-4054/08.jpg"
    ],
    "description": "フロアランプ ドナ フロアライト 床置き 照明（参考：楽天市場の商品情報を基にしています）",
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
    "rank": 4
  },
  {
    "id": "grt-gm-01sdm",
    "name": "セミダブル 電動ベッド マットレス付き マイルドタイプ LED",
    "price": 99000,
    "categorySlug": "bed",
    "sceneSlugs": [
      "bedroom"
    ],
    "image": "/images/products/grt-gm-01sdm/01.jpg",
    "images": [
      "/images/products/grt-gm-01sdm/01.jpg",
      "/images/products/grt-gm-01sdm/02.jpg",
      "/images/products/grt-gm-01sdm/03.jpg",
      "/images/products/grt-gm-01sdm/04.jpg",
      "/images/products/grt-gm-01sdm/05.jpg",
      "/images/products/grt-gm-01sdm/06.jpg",
      "/images/products/grt-gm-01sdm/07.jpg",
      "/images/products/grt-gm-01sdm/08.jpg"
    ],
    "description": "セミダブル 電動ベッド マットレス付き マイルドタイプ LED（参考：楽天市場の商品情報を基にしています）",
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
    "id": "hbdk-workchair-c",
    "name": "パソコンチェア メティオ2.0 チェック柄 高さ調節 椅子",
    "price": 27990,
    "categorySlug": "chair",
    "sceneSlugs": [
      "dining",
      "study"
    ],
    "image": "/images/products/hbdk-workchair-c/01.jpg",
    "images": [
      "/images/products/hbdk-workchair-c/01.jpg",
      "/images/products/hbdk-workchair-c/02.jpg",
      "/images/products/hbdk-workchair-c/03.jpg",
      "/images/products/hbdk-workchair-c/04.jpg",
      "/images/products/hbdk-workchair-c/05.jpg",
      "/images/products/hbdk-workchair-c/06.jpg",
      "/images/products/hbdk-workchair-c/07.jpg",
      "/images/products/hbdk-workchair-c/08.jpg"
    ],
    "description": "パソコンチェア メティオ2.0 チェック柄 高さ調節 椅子（参考：楽天市場の商品情報を基にしています）",
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
    "id": "iw-046-2",
    "name": "幅80cm 木製 チェスト メリッサ 天然木",
    "price": 69800,
    "categorySlug": "storage",
    "sceneSlugs": [
      "living",
      "study"
    ],
    "image": "/images/products/iw-046-2/01.jpg",
    "images": [
      "/images/products/iw-046-2/01.jpg",
      "/images/products/iw-046-2/02.jpg",
      "/images/products/iw-046-2/03.jpg",
      "/images/products/iw-046-2/04.jpg",
      "/images/products/iw-046-2/05.jpg",
      "/images/products/iw-046-2/06.jpg",
      "/images/products/iw-046-2/07.jpg",
      "/images/products/iw-046-2/08.jpg"
    ],
    "description": "幅80cm 木製 チェスト メリッサ 天然木（参考：楽天市場の商品情報を基にしています）",
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
    "id": "ma-mocha180tv",
    "name": "幅180cm ローボード 日本製 セラミック調 アイアン脚",
    "price": 30900,
    "categorySlug": "tvboard",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/ma-mocha180tv/01.jpg",
    "images": [
      "/images/products/ma-mocha180tv/01.jpg",
      "/images/products/ma-mocha180tv/02.jpg",
      "/images/products/ma-mocha180tv/03.jpg",
      "/images/products/ma-mocha180tv/04.jpg",
      "/images/products/ma-mocha180tv/05.jpg",
      "/images/products/ma-mocha180tv/06.jpg",
      "/images/products/ma-mocha180tv/07.jpg",
      "/images/products/ma-mocha180tv/08.jpg"
    ],
    "description": "幅180cm ローボード 日本製 セラミック調 アイアン脚（参考：楽天市場の商品情報を基にしています）",
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
    "id": "pr-porin1319",
    "name": "133×195cm ラグ ポーリン ウィルトン カーペット",
    "price": 28800,
    "categorySlug": "rug",
    "sceneSlugs": [
      "living",
      "bedroom"
    ],
    "image": "/images/products/pr-porin1319/01.jpg",
    "images": [
      "/images/products/pr-porin1319/01.jpg",
      "/images/products/pr-porin1319/02.jpg",
      "/images/products/pr-porin1319/03.jpg",
      "/images/products/pr-porin1319/04.jpg",
      "/images/products/pr-porin1319/05.jpg",
      "/images/products/pr-porin1319/06.jpg"
    ],
    "description": "133×195cm ラグ ポーリン ウィルトン カーペット（参考：楽天市場の商品情報を基にしています）",
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
    "id": "rok-mshower",
    "name": "幅40cm 壁掛け時計 アナログ メテオシャワー インテリア",
    "price": 8690,
    "categorySlug": "goods",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/rok-mshower/01.jpg",
    "images": [
      "/images/products/rok-mshower/01.jpg",
      "/images/products/rok-mshower/02.jpg",
      "/images/products/rok-mshower/03.jpg",
      "/images/products/rok-mshower/04.jpg",
      "/images/products/rok-mshower/05.jpg"
    ],
    "description": "幅40cm 壁掛け時計 アナログ メテオシャワー インテリア（参考：楽天市場の商品情報を基にしています）",
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
    "id": "spi-lt-3407",
    "name": "5灯 ペンダントライト リンデンハースト ライト 吊り下げ",
    "price": 31350,
    "categorySlug": "lighting",
    "sceneSlugs": [
      "living",
      "bedroom",
      "study"
    ],
    "image": "/images/products/spi-lt-3407/01.jpg",
    "images": [
      "/images/products/spi-lt-3407/01.jpg",
      "/images/products/spi-lt-3407/02.jpg",
      "/images/products/spi-lt-3407/03.jpg",
      "/images/products/spi-lt-3407/04.jpg",
      "/images/products/spi-lt-3407/05.jpg",
      "/images/products/spi-lt-3407/06.jpg",
      "/images/products/spi-lt-3407/07.jpg",
      "/images/products/spi-lt-3407/08.jpg"
    ],
    "description": "5灯 ペンダントライト リンデンハースト ライト 吊り下げ（参考：楽天市場の商品情報を基にしています）",
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
    "id": "tl-sbbta4",
    "name": "幅100cm 折り畳み式ソファベッド コンパクト リクライニング",
    "price": 31900,
    "categorySlug": "sofa",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/tl-sbbta4/01.jpg",
    "images": [
      "/images/products/tl-sbbta4/01.jpg",
      "/images/products/tl-sbbta4/02.jpg",
      "/images/products/tl-sbbta4/03.jpg",
      "/images/products/tl-sbbta4/04.jpg",
      "/images/products/tl-sbbta4/05.jpg",
      "/images/products/tl-sbbta4/06.jpg",
      "/images/products/tl-sbbta4/07.jpg",
      "/images/products/tl-sbbta4/08.jpg"
    ],
    "description": "幅100cm 折り畳み式ソファベッド コンパクト リクライニング（参考：楽天市場の商品情報を基にしています）",
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
    "id": "ask-bubble",
    "name": "6灯 ペンダントランプ バブル シャンデリア ライト",
    "price": 48380,
    "categorySlug": "lighting",
    "sceneSlugs": [
      "living",
      "bedroom",
      "study"
    ],
    "image": "/images/products/ask-bubble/01.jpg",
    "images": [
      "/images/products/ask-bubble/01.jpg",
      "/images/products/ask-bubble/02.jpg",
      "/images/products/ask-bubble/03.jpg",
      "/images/products/ask-bubble/04.jpg",
      "/images/products/ask-bubble/05.jpg",
      "/images/products/ask-bubble/06.jpg",
      "/images/products/ask-bubble/07.jpg",
      "/images/products/ask-bubble/08.jpg"
    ],
    "description": "6灯 ペンダントランプ バブル シャンデリア ライト（参考：楽天市場の商品情報を基にしています）",
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
    "id": "asw-nas-2020",
    "name": "200×200cm",
    "price": 40500,
    "categorySlug": "rug",
    "sceneSlugs": [
      "living",
      "bedroom"
    ],
    "image": "/images/products/asw-nas-2020/01.jpg",
    "images": [
      "/images/products/asw-nas-2020/01.jpg",
      "/images/products/asw-nas-2020/02.jpg",
      "/images/products/asw-nas-2020/03.jpg",
      "/images/products/asw-nas-2020/04.jpg",
      "/images/products/asw-nas-2020/05.jpg",
      "/images/products/asw-nas-2020/06.jpg",
      "/images/products/asw-nas-2020/07.jpg",
      "/images/products/asw-nas-2020/08.jpg"
    ],
    "description": "200×200cm（参考：楽天市場の商品情報を基にしています）",
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
    "id": "grt-gm-01sm",
    "name": "シングル 電動ベッド マットレス付き マイルドタイプ LED",
    "price": 99000,
    "categorySlug": "bed",
    "sceneSlugs": [
      "bedroom"
    ],
    "image": "/images/products/grt-gm-01sm/01.jpg",
    "images": [
      "/images/products/grt-gm-01sm/01.jpg",
      "/images/products/grt-gm-01sm/02.jpg",
      "/images/products/grt-gm-01sm/03.jpg",
      "/images/products/grt-gm-01sm/04.jpg",
      "/images/products/grt-gm-01sm/05.jpg",
      "/images/products/grt-gm-01sm/06.jpg",
      "/images/products/grt-gm-01sm/07.jpg",
      "/images/products/grt-gm-01sm/08.jpg"
    ],
    "description": "シングル 電動ベッド マットレス付き マイルドタイプ LED（参考：楽天市場の商品情報を基にしています）",
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
    "id": "kd-modulia25s",
    "name": "幅184cm 2.5人掛け ソファ 組み合わせ自由 MODULIA",
    "price": 25900,
    "categorySlug": "sofa",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/kd-modulia25s/01.jpg",
    "images": [
      "/images/products/kd-modulia25s/01.jpg",
      "/images/products/kd-modulia25s/02.jpg",
      "/images/products/kd-modulia25s/03.jpg",
      "/images/products/kd-modulia25s/04.jpg",
      "/images/products/kd-modulia25s/05.jpg",
      "/images/products/kd-modulia25s/06.jpg",
      "/images/products/kd-modulia25s/07.jpg",
      "/images/products/kd-modulia25s/08.jpg"
    ],
    "description": "幅184cm 2.5人掛け ソファ 組み合わせ自由 MODULIA（参考：楽天市場の商品情報を基にしています）",
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
    "id": "kim-nibel120cab",
    "name": "幅120cm サイドボード 大理石調 収納 引き出し",
    "price": 50900,
    "categorySlug": "storage",
    "sceneSlugs": [
      "living",
      "study"
    ],
    "image": "/images/products/kim-nibel120cab/01.jpg",
    "images": [
      "/images/products/kim-nibel120cab/01.jpg",
      "/images/products/kim-nibel120cab/02.jpg",
      "/images/products/kim-nibel120cab/03.jpg",
      "/images/products/kim-nibel120cab/04.jpg",
      "/images/products/kim-nibel120cab/05.jpg",
      "/images/products/kim-nibel120cab/06.jpg",
      "/images/products/kim-nibel120cab/07.jpg",
      "/images/products/kim-nibel120cab/08.jpg"
    ],
    "description": "幅120cm サイドボード 大理石調 収納 引き出し（参考：楽天市場の商品情報を基にしています）",
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
    "id": "kim-orvdc2set",
    "name": "ダイニングチェア 肘付き PUレザー ORV ゴールド",
    "price": 39600,
    "categorySlug": "chair",
    "sceneSlugs": [
      "dining",
      "study"
    ],
    "image": "/images/products/kim-orvdc2set/01.jpg",
    "images": [
      "/images/products/kim-orvdc2set/01.jpg",
      "/images/products/kim-orvdc2set/02.jpg",
      "/images/products/kim-orvdc2set/03.jpg",
      "/images/products/kim-orvdc2set/04.jpg",
      "/images/products/kim-orvdc2set/05.jpg",
      "/images/products/kim-orvdc2set/06.jpg",
      "/images/products/kim-orvdc2set/07.jpg",
      "/images/products/kim-orvdc2set/08.jpg"
    ],
    "description": "ダイニングチェア 肘付き PUレザー ORV ゴールド（参考：楽天市場の商品情報を基にしています）",
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
    "id": "sgt-wav957801",
    "name": "幅10cm フラワーベース White Alabastar Vase",
    "price": 5690,
    "categorySlug": "goods",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/sgt-wav957801/01.jpg",
    "images": [
      "/images/products/sgt-wav957801/01.jpg",
      "/images/products/sgt-wav957801/02.jpg",
      "/images/products/sgt-wav957801/03.jpg",
      "/images/products/sgt-wav957801/04.jpg",
      "/images/products/sgt-wav957801/05.jpg",
      "/images/products/sgt-wav957801/06.jpg",
      "/images/products/sgt-wav957801/07.jpg",
      "/images/products/sgt-wav957801/08.jpg"
    ],
    "description": "幅10cm フラワーベース White Alabastar Vase（参考：楽天市場の商品情報を基にしています）",
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
    "id": "sig-calvi180tvb",
    "name": "幅180cm テレビボード 木目調 セラミック調 ウォールナット柄",
    "price": 44900,
    "categorySlug": "tvboard",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/sig-calvi180tvb/01.jpg",
    "images": [
      "/images/products/sig-calvi180tvb/01.jpg",
      "/images/products/sig-calvi180tvb/02.jpg",
      "/images/products/sig-calvi180tvb/03.jpg",
      "/images/products/sig-calvi180tvb/04.jpg",
      "/images/products/sig-calvi180tvb/05.jpg",
      "/images/products/sig-calvi180tvb/06.jpg",
      "/images/products/sig-calvi180tvb/07.jpg",
      "/images/products/sig-calvi180tvb/08.jpg"
    ],
    "description": "幅180cm テレビボード 木目調 セラミック調 ウォールナット柄（参考：楽天市場の商品情報を基にしています）",
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
    "id": "az-pm-306",
    "name": "幅150cm 木製 ローボード アンティーク風 ～55型対応",
    "price": 26900,
    "categorySlug": "tvboard",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/az-pm-306/01.jpg",
    "images": [
      "/images/products/az-pm-306/01.jpg",
      "/images/products/az-pm-306/02.jpg",
      "/images/products/az-pm-306/03.jpg",
      "/images/products/az-pm-306/04.jpg",
      "/images/products/az-pm-306/05.jpg",
      "/images/products/az-pm-306/06.jpg",
      "/images/products/az-pm-306/07.jpg",
      "/images/products/az-pm-306/08.jpg"
    ],
    "description": "幅150cm 木製 ローボード アンティーク風 ～55型対応（参考：楽天市場の商品情報を基にしています）",
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
    "id": "grt-4wolte-sd",
    "name": "セミダブル ウォルテ ベッド 木製 寝室",
    "price": 59800,
    "categorySlug": "bed",
    "sceneSlugs": [
      "bedroom"
    ],
    "image": "/images/products/grt-4wolte-sd/01.jpg",
    "images": [
      "/images/products/grt-4wolte-sd/01.jpg",
      "/images/products/grt-4wolte-sd/02.jpg",
      "/images/products/grt-4wolte-sd/03.jpg",
      "/images/products/grt-4wolte-sd/04.jpg",
      "/images/products/grt-4wolte-sd/05.jpg",
      "/images/products/grt-4wolte-sd/06.jpg",
      "/images/products/grt-4wolte-sd/07.jpg",
      "/images/products/grt-4wolte-sd/08.jpg"
    ],
    "description": "セミダブル ウォルテ ベッド 木製 寝室（参考：楽天市場の商品情報を基にしています）",
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
    "id": "kd-modulia1asset",
    "name": "幅111cm 1人掛け ソファ セット MODULIA",
    "price": 25900,
    "categorySlug": "sofa",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/kd-modulia1asset/01.jpg",
    "images": [
      "/images/products/kd-modulia1asset/01.jpg",
      "/images/products/kd-modulia1asset/02.jpg",
      "/images/products/kd-modulia1asset/03.jpg",
      "/images/products/kd-modulia1asset/04.jpg",
      "/images/products/kd-modulia1asset/05.jpg",
      "/images/products/kd-modulia1asset/06.jpg",
      "/images/products/kd-modulia1asset/07.jpg",
      "/images/products/kd-modulia1asset/08.jpg"
    ],
    "description": "幅111cm 1人掛け ソファ セット MODULIA（参考：楽天市場の商品情報を基にしています）",
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
    "id": "pr-jina1919",
    "name": "190×190cm ラグ ジーナ 日本製 リビング",
    "price": 39800,
    "categorySlug": "rug",
    "sceneSlugs": [
      "living",
      "bedroom"
    ],
    "image": "/images/products/pr-jina1919/01.jpg",
    "images": [
      "/images/products/pr-jina1919/01.jpg",
      "/images/products/pr-jina1919/02.jpg",
      "/images/products/pr-jina1919/03.jpg",
      "/images/products/pr-jina1919/04.jpg",
      "/images/products/pr-jina1919/05.jpg",
      "/images/products/pr-jina1919/06.jpg",
      "/images/products/pr-jina1919/07.jpg",
      "/images/products/pr-jina1919/08.jpg"
    ],
    "description": "190×190cm ラグ ジーナ 日本製 リビング（参考：楽天市場の商品情報を基にしています）",
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
    "id": "rok-mdimension",
    "name": "幅50cm 壁掛け時計 アナログ マルチディメンション インテリア",
    "price": 8690,
    "categorySlug": "goods",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/rok-mdimension/01.jpg",
    "images": [
      "/images/products/rok-mdimension/01.jpg",
      "/images/products/rok-mdimension/02.jpg",
      "/images/products/rok-mdimension/03.jpg",
      "/images/products/rok-mdimension/04.jpg",
      "/images/products/rok-mdimension/05.jpg",
      "/images/products/rok-mdimension/06.jpg",
      "/images/products/rok-mdimension/07.jpg",
      "/images/products/rok-mdimension/08.jpg"
    ],
    "description": "幅50cm 壁掛け時計 アナログ マルチディメンション インテリア（参考：楽天市場の商品情報を基にしています）",
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
    "id": "sn-44050",
    "name": "幅138cm サイドボード セラミック天板 木目 引き出し",
    "price": 117000,
    "categorySlug": "storage",
    "sceneSlugs": [
      "living",
      "study"
    ],
    "image": "/images/products/sn-44050/01.jpg",
    "images": [
      "/images/products/sn-44050/01.jpg",
      "/images/products/sn-44050/02.jpg",
      "/images/products/sn-44050/03.jpg",
      "/images/products/sn-44050/04.jpg",
      "/images/products/sn-44050/05.jpg",
      "/images/products/sn-44050/06.jpg",
      "/images/products/sn-44050/07.jpg",
      "/images/products/sn-44050/08.jpg"
    ],
    "description": "幅138cm サイドボード セラミック天板 木目 引き出し（参考：楽天市場の商品情報を基にしています）",
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
    "id": "spi-lt-4269",
    "name": "4灯 シーリングライト エルー ガラス 照明",
    "price": 41800,
    "categorySlug": "lighting",
    "sceneSlugs": [
      "living",
      "bedroom",
      "study"
    ],
    "image": "/images/products/spi-lt-4269/01.jpg",
    "images": [
      "/images/products/spi-lt-4269/01.jpg",
      "/images/products/spi-lt-4269/02.jpg",
      "/images/products/spi-lt-4269/03.jpg",
      "/images/products/spi-lt-4269/04.jpg",
      "/images/products/spi-lt-4269/05.jpg",
      "/images/products/spi-lt-4269/06.jpg",
      "/images/products/spi-lt-4269/07.jpg",
      "/images/products/spi-lt-4269/08.jpg"
    ],
    "description": "4灯 シーリングライト エルー ガラス 照明（参考：楽天市場の商品情報を基にしています）",
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
    "id": "ask-fslorion",
    "name": "フロアスタンド FSLオリオン フロアライト 床置き 照明",
    "price": 50580,
    "categorySlug": "lighting",
    "sceneSlugs": [
      "living",
      "bedroom",
      "study"
    ],
    "image": "/images/products/ask-fslorion/01.jpg",
    "images": [
      "/images/products/ask-fslorion/01.jpg",
      "/images/products/ask-fslorion/02.jpg",
      "/images/products/ask-fslorion/03.jpg",
      "/images/products/ask-fslorion/04.jpg",
      "/images/products/ask-fslorion/05.jpg",
      "/images/products/ask-fslorion/06.jpg",
      "/images/products/ask-fslorion/07.jpg",
      "/images/products/ask-fslorion/08.jpg"
    ],
    "description": "フロアスタンド FSLオリオン フロアライト 床置き 照明（参考：楽天市場の商品情報を基にしています）",
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
  },
  {
    "id": "doi-0040",
    "name": "幅79.8cm 木製 サイドボード 日本製 黒スチール脚",
    "price": 52900,
    "categorySlug": "storage",
    "sceneSlugs": [
      "living",
      "study"
    ],
    "image": "/images/products/doi-0040/01.jpg",
    "images": [
      "/images/products/doi-0040/01.jpg",
      "/images/products/doi-0040/02.jpg",
      "/images/products/doi-0040/03.jpg",
      "/images/products/doi-0040/04.jpg",
      "/images/products/doi-0040/05.jpg",
      "/images/products/doi-0040/06.jpg",
      "/images/products/doi-0040/07.jpg",
      "/images/products/doi-0040/08.jpg"
    ],
    "description": "幅79.8cm 木製 サイドボード 日本製 黒スチール脚（参考：楽天市場の商品情報を基にしています）",
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
  },
  {
    "id": "gfc-moboa21801",
    "name": "幅8cm オブジェ 丸形 レジン 円形",
    "price": 5890,
    "categorySlug": "goods",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/gfc-moboa21801/01.jpg",
    "images": [
      "/images/products/gfc-moboa21801/01.jpg",
      "/images/products/gfc-moboa21801/02.jpg",
      "/images/products/gfc-moboa21801/03.jpg",
      "/images/products/gfc-moboa21801/04.jpg",
      "/images/products/gfc-moboa21801/05.jpg",
      "/images/products/gfc-moboa21801/06.jpg",
      "/images/products/gfc-moboa21801/07.jpg",
      "/images/products/gfc-moboa21801/08.jpg"
    ],
    "description": "幅8cm オブジェ 丸形 レジン 円形（参考：楽天市場の商品情報を基にしています）",
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
  },
  {
    "id": "grt-1wolte2-1-sd",
    "name": "セミダブル ウォルテ ベッド 木製 寝室",
    "price": 55000,
    "categorySlug": "bed",
    "sceneSlugs": [
      "bedroom"
    ],
    "image": "/images/products/grt-1wolte2-1-sd/01.jpg",
    "images": [
      "/images/products/grt-1wolte2-1-sd/01.jpg",
      "/images/products/grt-1wolte2-1-sd/02.jpg",
      "/images/products/grt-1wolte2-1-sd/03.jpg",
      "/images/products/grt-1wolte2-1-sd/04.jpg",
      "/images/products/grt-1wolte2-1-sd/05.jpg",
      "/images/products/grt-1wolte2-1-sd/06.jpg",
      "/images/products/grt-1wolte2-1-sd/07.jpg",
      "/images/products/grt-1wolte2-1-sd/08.jpg"
    ],
    "description": "セミダブル ウォルテ ベッド 木製 寝室（参考：楽天市場の商品情報を基にしています）",
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
  },
  {
    "id": "ka-ltvbqd6107",
    "name": "カリモク 幅182cm 木製 テレビボード 日本製",
    "price": 185900,
    "categorySlug": "tvboard",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/ka-ltvbqd6107/01.jpg",
    "images": [
      "/images/products/ka-ltvbqd6107/01.jpg",
      "/images/products/ka-ltvbqd6107/02.jpg",
      "/images/products/ka-ltvbqd6107/03.jpg",
      "/images/products/ka-ltvbqd6107/04.jpg",
      "/images/products/ka-ltvbqd6107/05.jpg",
      "/images/products/ka-ltvbqd6107/06.jpg",
      "/images/products/ka-ltvbqd6107/07.jpg",
      "/images/products/ka-ltvbqd6107/08.jpg"
    ],
    "description": "カリモク 幅182cm 木製 テレビボード 日本製（参考：楽天市場の商品情報を基にしています）",
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
  },
  {
    "id": "ka-stoolzw7306",
    "name": "カリモク 幅68.5cm オットマン 日本製 本革張り",
    "price": 249700,
    "categorySlug": "sofa",
    "sceneSlugs": [
      "living"
    ],
    "image": "/images/products/ka-stoolzw7306/01.jpg",
    "images": [
      "/images/products/ka-stoolzw7306/01.jpg",
      "/images/products/ka-stoolzw7306/02.jpg",
      "/images/products/ka-stoolzw7306/03.jpg",
      "/images/products/ka-stoolzw7306/04.jpg",
      "/images/products/ka-stoolzw7306/05.jpg",
      "/images/products/ka-stoolzw7306/06.jpg",
      "/images/products/ka-stoolzw7306/07.jpg",
      "/images/products/ka-stoolzw7306/08.jpg"
    ],
    "description": "カリモク 幅68.5cm オットマン 日本製 本革張り（参考：楽天市場の商品情報を基にしています）",
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
  },
  {
    "id": "oc-ch-ym20",
    "name": "レザーチェア 肘付き オフィスチェア リクライニング",
    "price": 29990,
    "categorySlug": "chair",
    "sceneSlugs": [
      "dining",
      "study"
    ],
    "image": "/images/products/oc-ch-ym20/01.jpg",
    "images": [
      "/images/products/oc-ch-ym20/01.jpg",
      "/images/products/oc-ch-ym20/02.jpg",
      "/images/products/oc-ch-ym20/03.jpg",
      "/images/products/oc-ch-ym20/04.jpg",
      "/images/products/oc-ch-ym20/05.jpg",
      "/images/products/oc-ch-ym20/06.jpg",
      "/images/products/oc-ch-ym20/07.jpg",
      "/images/products/oc-ch-ym20/08.jpg"
    ],
    "description": "レザーチェア 肘付き オフィスチェア リクライニング（参考：楽天市場の商品情報を基にしています）",
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
  },
  {
    "id": "smi-calm2020",
    "name": "200X200cm ラグ カーム 防炎 防音 完成品",
    "price": 46200,
    "categorySlug": "rug",
    "sceneSlugs": [
      "living",
      "bedroom"
    ],
    "image": "/images/products/smi-calm2020/01.jpg",
    "images": [
      "/images/products/smi-calm2020/01.jpg",
      "/images/products/smi-calm2020/02.jpg",
      "/images/products/smi-calm2020/03.jpg",
      "/images/products/smi-calm2020/04.jpg",
      "/images/products/smi-calm2020/05.jpg",
      "/images/products/smi-calm2020/06.jpg",
      "/images/products/smi-calm2020/07.jpg",
      "/images/products/smi-calm2020/08.jpg"
    ],
    "description": "200X200cm ラグ カーム 防炎 防音 完成品（参考：楽天市場の商品情報を基にしています）",
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
