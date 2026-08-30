# kurashi-ec.jp（暮らしのデザイン）画像ソース

`scripts/kurashi_fetch.py` が対象とする EC サイトの技術メモ。

- サイト: https://www.kurashi-ec.jp/
- プラットフォーム: **FutureShop**（CSS クラス `fs-c-*`）
- CDN: `kurashiec202009.itembox.cloud`

---

## カテゴリ URL マッピング

本プロジェクトの `categorySlug`（`lib/data/categories.ts`）と、暮らしのデザイン側 URL の対応。

| categorySlug | サイト内ラベル | kurashi-ec.jp URL |
|--------------|---------------|-------------------|
| `table` | ダイニングテーブルセット | `/c/dining/dining-table-chair-set/` |
| `sofa` | ソファ | `/c/sofa/` |
| `chair` | チェア・ベンチ | `/c/chair/` |
| `tvboard` | テレビボード | `/c/tv-stand-board/` |
| `storage` | リビング収納 | `/c/storage-furniture/` |
| `bed` | ベッド | `/c/bed/` |
| `lighting` | 照明 | `/c/lights/` |
| `rug` | ラグ・カーペット | `/c/rug-carpet/` |
| `goods` | インテリア雑貨 | `/c/interior-supplies/` |
| `mirror` | ミラー | **なし** |

> `/c/table/` `/c/tvboard/` 等の短いパスは **404**。上表の URL を使うこと。

---

## 商品 URL の形式

例:

```
/c/dining/dining-table-chair-set/4p-dining-table-chair-set/kim-orv15vid5set/
/c/sofa/living-room-sofa/ab-s-30592p/
/c/tv-stand-board/tv-board-low/he-olfe120sb/
/c/bed/double-bed/double-bedframe03/fbd-bgdrd/
```

- 末尾 slug = 本プロジェクトの `product.id`
- サブカテゴリ（`tv-board-low`, `double-bed` 等）は商品ではない → 除外

---

## 画像 URL の形式

```
https://kurashiec202009.itembox.cloud/product/208/000000020823/000000020823-01.jpg?size=m&w=NDAw
```

| 部分 | 意味 |
|------|------|
| `000000020823` | 商品画像 ID（12 桁） |
| `-01.jpg` | ギャラリー順序（01=サムネ） |
| `?size=...` | リサイズパラメータ → **保存時は除去** |

### 並び順の維持

1. 商品ページの `og:image` から 12 桁 ID を取得
2. 同一 ID の `-NN.jpg` をすべて収集
3. `NN` の数値順にソート
4. 先頭 8 枚を `01.jpg` … `08.jpg` として保存

---

## ページネーション

カテゴリ一覧:

```
https://www.kurashi-ec.jp/c/sofa/
https://www.kurashi-ec.jp/c/sofa/?page=2&sort=priority
```

---

## HTML 抽出の要点

商品リンクは FutureShop の商品リスト DOM から取得するのが確実:

```html
<div class="fs-c-productListItem__imageContainer">
  <a href="/c/sofa/living-room-sofa/ab-s-30592p">
```

`scripts/kurashi_fetch.py` はこのパターンを優先し、フォールバックで href 全体を解析する。

---

## config.json スキーマ

```json
{
  "baseUrl": "https://www.kurashi-ec.jp",
  "categoryUrls": ["https://www.kurashi-ec.jp/c/sofa/"],
  "maxProducts": 8,
  "maxImagesPerProduct": 8,
  "requestIntervalSec": 1.0,
  "concurrency": 3,
  "defaultCategorySlug": "sofa",
  "manifestPath": "data/kurashi/manifests/sofa.json",
  "imagesDir": "public/images/products",
  "imagesWebPath": "/images/products",
  "imageCdnHost": "kurashiec202009.itembox.cloud"
}
```

---

## 注意（法的・運用）

- 他社 EC の画像を自サイトに載せる場合、**著作権・利用規約**を確認すること
- MVP / デモ用途でも、可能なら参考元を明記
- 本番販売時は自社撮影・正規素材への差し替えを推奨
- 短時間の大量アクセスは避ける（`requestIntervalSec` 遵守）

---

## 関連ファイル

- `docs/IMAGE_REFRESH_GUIDE.md` … 運用手順・エージェント指示
- `data/kurashi/batch-plan.json` … カテゴリ別ジョブ一覧
- `data/kurashi/configs/*.json` … カテゴリ別設定
