# 商品画像刷新ガイド（kurashi-ec.jp）

クラウドエージェント向け。**暮らしのデザイン（kurashi-ec.jp）から商品画像を取得し、EC サイトの全カテゴリを実画像で埋める**手順書。

> 関連: `docs/PROJECT_GUIDE.md`（全体計画） / `docs/sources/kurashi-ec.md`（ソース詳細）

---

## ゴール

| 項目 | 目標 |
|------|------|
| 商品数 | **カテゴリ 10 × 各 8 商品 = 80 商品**（ミラー除く） |
| 画像数 | **各 8 枚 = 640 枚** |
| 画像の並び | **ソース EC と同じ順**（`-01` → `-08` を `01.jpg` → `08.jpg` に保存） |
| UI | カード・詳細ギャラリーは **`aspect-square` + `object-cover`**（実装済み） |

---

## 進捗（batch-plan）

`data/kurashi/batch-plan.json` を正とする。

| categorySlug | ラベル | 状態 | 設定ファイル |
|--------------|--------|------|-------------|
| `table` | ダイニングテーブルセット | ✅ done | `data/kurashi/configs/table.json` |
| `sofa` | ソファ | ⬜ pending | `data/kurashi/configs/sofa.json` |
| `chair` | チェア・ベンチ | ⬜ pending | `data/kurashi/configs/chair.json` |
| `tvboard` | テレビボード | ⬜ pending | `data/kurashi/configs/tvboard.json` |
| `storage` | リビング収納 | ⬜ pending | `data/kurashi/configs/storage.json` |
| `bed` | ベッド | ⬜ pending | `data/kurashi/configs/bed.json` |
| `lighting` | 照明 | ⬜ pending | `data/kurashi/configs/lighting.json` |
| `rug` | ラグ・ファブリック | ⬜ pending | `data/kurashi/configs/rug.json` |
| `goods` | インテリア雑貨 | ⬜ pending | `data/kurashi/configs/goods.json` |
| `mirror` | ミラー | 🚫 blocked | 暮らしのデザインに該当カテゴリなし |

---

## パイプライン概要

```
┌─────────────────────────────────────────────────────────────┐
│ Phase A-1  カテゴリ単位で画像収集（1ジョブ = 1カテゴリ）      │
│   python scripts/kurashi_fetch.py --config data/kurashi/configs/{slug}.json │
│   → data/kurashi/manifests/{slug}.json                      │
│   → public/images/products/{product_id}/01.jpg …            │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ Phase A-2  マニフェスト統合                                   │
│   node scripts/merge-manifests.mjs --out data/kurashi/manifest.json \ │
│     data/kurashi/manifests/*.json                           │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ Phase B    商品 TS 生成                                       │
│   node scripts/build-products.mjs --manifest data/kurashi/manifest.json │
│   → lib/data/products.ts                                    │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│ 確認       npm run build / ブラウザで TOP・詳細を目視          │
└─────────────────────────────────────────────────────────────┘
```

**1 プロンプトで全カテゴリを一気に実行しない。** カテゴリ 1 つ = クラウドエージェント 1 ジョブ。

---

## 前提

```bash
pip install -r requirements-rakuten.txt   # requests のみ
```

- API キー不要（HTML スクレイピング）
- `requestIntervalSec` は **1.0 以上**、`concurrency` は **3 以下** を推奨

---

## Phase A-1：カテゴリ別画像収集

### 実行

```bash
python scripts/kurashi_fetch.py --config data/kurashi/configs/sofa.json
```

### 出力

- `data/kurashi/manifests/{categorySlug}.json`
- `public/images/products/{product_id}/01.jpg` … `08.jpg`

### 完了条件（カテゴリ 1 件あたり）

- [ ] 商品 **8 件**（`maxProducts` 通り）
- [ ] 各商品 **8 枚**（6 枚未満の商品があればログに記載）
- [ ] `sourceUrls` の suffix が `-01` … `-08` の順
- [ ] 失敗 0 件（または失敗 ID を報告）

### 完了報告フォーマット

```
Phase A-1 完了: sofa
- 商品数: 8 / 8
- 画像合計: 64 枚
- 平均枚数/商品: 8.0 枚
- 失敗: 0 件
- manifest: data/kurashi/manifests/sofa.json
```

---

## Phase A-2：マニフェスト統合

全カテゴリの Phase A-1 完了後（または一部ずつ追加しながら）:

```bash
node scripts/merge-manifests.mjs --out data/kurashi/manifest.json \
  data/kurashi/manifests/table.json \
  data/kurashi/manifests/sofa.json \
  data/kurashi/manifests/chair.json \
  data/kurashi/manifests/tvboard.json \
  data/kurashi/manifests/storage.json \
  data/kurashi/manifests/bed.json \
  data/kurashi/manifests/lighting.json \
  data/kurashi/manifests/rug.json \
  data/kurashi/manifests/goods.json
```

Windows PowerShell ではバックスラッシュの代わりに 1 行で:

```powershell
node scripts/merge-manifests.mjs --out data/kurashi/manifest.json data/kurashi/manifests/table.json data/kurashi/manifests/sofa.json ...
```

---

## Phase B：products.ts 生成

```bash
node scripts/build-products.mjs --manifest data/kurashi/manifest.json
```

### 完了条件

- [ ] `npm run build` 成功
- [ ] 商品数 = マージ後 manifest の件数
- [ ] TOP / カテゴリ / 詳細で実画像が表示される
- [ ] カード・ギャラリーに左右余白がない（`aspect-square` + `object-cover`）

---

## UI ルール（画像サイズ合わせ）

**既に実装済み。変更しないこと。**

| コンポーネント | 設定 |
|---------------|------|
| `components/ProductCard.tsx` | `aspect-square` + `object-cover` |
| `components/ProductGallery.tsx`（メイン・サムネ） | `aspect-square` + `object-cover` |
| `components/ProductGallery.tsx`（拡大モーダル） | `object-contain`（全体表示） |

暮らしのデザインの商品画像は **正方形（1:1）** のため、旧来の `aspect-4/3` + `object-contain` だと左右に余白が出る。

---

## クラウドエージェントへの指示の出し方

### 基本方針

1. **1 カテゴリ = 1 ジョブ**（タイムアウト・デバッグ容易化）
2. 必ず **`docs/IMAGE_REFRESH_GUIDE.md` を読ませる**
3. 設定は **`data/kurashi/configs/{slug}.json` をそのまま使う**（勝手に URL を変えない）
4. Phase A-1 完了報告 → 人間が確認 → 次カテゴリ、が安全

### コピペ用プロンプト（カテゴリ 1 件）

```
docs/IMAGE_REFRESH_GUIDE.md と docs/sources/kurashi-ec.md を読んで実行してください。

【ジョブ】商品画像刷新 Phase A-1: {categorySlug}
【設定】data/kurashi/configs/{categorySlug}.json
【やること】
1. python scripts/kurashi_fetch.py --config data/kurashi/configs/{categorySlug}.json
2. 完了報告フォーマット（IMAGE_REFRESH_GUIDE 参照）で報告
3. 商品が 8 件未満 / 画像 8 枚未満があれば原因と対処を記載

【やらないこと】
- 他カテゴリの config を同時に変更しない
- ProductCard / ProductGallery の aspect-ratio を 4:3 に戻さない
- API キーをソースに直書きしない
```

**例（ソファ）:** `{categorySlug}` → `sofa`

### コピペ用プロンプト（統合 + Phase B）

全カテゴリの Phase A-1 が終わったあと:

```
docs/IMAGE_REFRESH_GUIDE.md に従い Phase A-2 と Phase B を実行してください。

1. node scripts/merge-manifests.mjs --out data/kurashi/manifest.json （manifests/*.json をすべて指定）
2. node scripts/build-products.mjs --manifest data/kurashi/manifest.json
3. npm run build
4. 商品数・画像数・ビルド結果を報告
```

### 並列運用（複数エージェント）

| エージェント | 担当 |
|-------------|------|
| Agent 1 | sofa |
| Agent 2 | chair |
| Agent 3 | tvboard |
| … | … |

- 各 agent は **別 manifest**（`manifests/{slug}.json`）に出力するため競合しない
- 画像フォルダ（`public/images/products/`）も product_id が異なれば競合しない
- **merge と build-products は 1 エージェントだけ**が実行

---

## ミラーカテゴリ（blocked）

暮らしのデザインにミラー専用カテゴリがない。

**代替案（別ジョブ）:**

1. `scripts/rakuten_fetch.py` + 楽天のミラー系カテゴリ（`.env.local` 要 API キー）
2. 手動で 8 商品分の画像を `public/images/products/` に配置し manifest に追記
3. MVP では `goods` に含めず後回し

---

## トラブルシュート

| 症状 | 対処 |
|------|------|
| 商品 0 件 | カテゴリ URL がサブカテゴリのみ。`batch-plan.json` の URL を確認。`scripts/kurashi_fetch.py` の商品 URL 抽出ロジックを調整 |
| 画像 8 枚未満 | ソース EC 側の枚数不足。ログに記載して次へ |
| 左右余白 | `ProductCard` / `ProductGallery` が `object-contain` になっていないか確認 |
| merge で件数が少ない | 指定 manifest パスの漏れ。`manifests/*.json` をすべて列挙 |

---

## ファイル一覧

```
scripts/
  kurashi_fetch.py       … Phase A-1
  merge-manifests.mjs    … Phase A-2
  build-products.mjs     … Phase B（--manifest 対応）
data/kurashi/
  batch-plan.json        … 全カテゴリ計画・進捗
  configs/{slug}.json    … カテゴリ別設定
  manifests/{slug}.json  … カテゴリ別 manifest（Phase A-1 出力）
  manifest.json          … 統合 manifest（Phase A-2 出力）
public/images/products/  … 商品画像
components/
  ProductCard.tsx        … 一覧カード
  ProductGallery.tsx     … 詳細ギャラリー
```
