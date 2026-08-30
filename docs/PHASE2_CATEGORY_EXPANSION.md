# Phase 2: カテゴリ追加 + 商品画像拡充（40商品 / 320枚）

クラウドエージェント向け。**新規3カテゴリのサイト追加**と、**既存照明の拡充**を行い、合計 **40商品 × 8枚 = 320枚** を kurashi-ec.jp から取得する。

> 前提: `docs/IMAGE_REFRESH_GUIDE.md` / `docs/sources/kurashi-ec.md` を読んでいること  
> 計画: `data/kurashi/batch-plan-phase2.json`

---

## ゴール

| カテゴリ | categorySlug | サイト状態 | 取得数 | kurashi URL |
|---------|--------------|-----------|--------|-------------|
| キッチン収納 | `kitchen` | **新規追加** | 10商品 | `/c/kitchen-cabinets/` |
| 衣類収納 | `clothing` | **新規追加** | 10商品 | `/c/clothing-storage/` |
| こたつ | `kotatsu` | **新規追加** | 10商品 | `/c/kotatu/` |
| 照明・ライト | `lighting` | 既存（8商品→**10商品に拡充**） | 10商品 | `/c/lights/` |

**合計: 40商品 / 320画像**

---

## ジョブ分割（推奨）

| ジョブ | 内容 | 単独実行 |
|--------|------|---------|
| **Job 1** | サイトにカテゴリ3件追加 + build-products 準備 | ✅ |
| **Job 2a〜2d** | Phase A-1 × 4（カテゴリ各1） | ✅ 並列可 |
| **Job 3** | manifest 全件マージ + Phase B + build | ✅ 1エージェントのみ |

**1プロンプトで全部やらない。**

---

## Job 1: サイトにカテゴリを追加

### 1-1. `lib/data/categories.ts`

既存配列に **3エントリを追加**（順序は任意、TOP の並びを考慮）:

```typescript
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
```

`lighting` は **既に存在**（変更不要。商品数だけ Phase A で増やす）。

### 1-2. `scripts/build-products.mjs`

`VALID_CATEGORY_SLUGS` に **`kitchen` / `clothing` / `kotatsu`** を追加。

```javascript
const VALID_CATEGORY_SLUGS = new Set([
  // ...既存...
  "kitchen",
  "clothing",
  "kotatsu",
]);
```

### 1-3. カテゴリ画像（ヘッダー用）

各 slug 用に `public/images/categories/{slug}.jpg` を用意。

- Phase A 完了後、各カテゴリ先頭商品の `01.jpg` をコピーしてよい
- 例: `public/images/products/{先頭id}/01.jpg` → `public/images/categories/kitchen.jpg`

### 1-4. 確認

- `app/category/[slug]/page.tsx` は `categories.ts` から `generateStaticParams` するため **ページ追加不要**
- TOP の「カテゴリから探す」グリッドに新カテゴリが出るか確認（`categories` 配列を map している）

### Job 1 完了条件

- [ ] `kitchen` / `clothing` / `kotatsu` が `categories.ts` にある
- [ ] `VALID_CATEGORY_SLUGS` に3 slug 追加済み
- [ ] `npm run build` が通る（商品0件でもカテゴリページは表示可）

---

## Job 2: Phase A-1（画像収集）

### 設定ファイル

| categorySlug | config |
|--------------|--------|
| `kitchen` | `data/kurashi/configs/kitchen.json` |
| `clothing` | `data/kurashi/configs/clothing.json` |
| `kotatsu` | `data/kurashi/configs/kotatsu.json` |
| `lighting` | `data/kurashi/configs/lighting.json`（`maxProducts: 10`） |

### 実行

```bash
pip install -r requirements-rakuten.txt
python scripts/kurashi_fetch.py --config data/kurashi/configs/kitchen.json
# clothing / kotatsu / lighting も同様
```

### 要件

- **10商品 / 各8枚 / EC と同じ並び**（`-01`〜`-08` → `01.jpg`〜`08.jpg`）
- 出力: `data/kurashi/manifests/{slug}.json`
- 画像: `public/images/products/{product_id}/`

### 商品名の【】除去

ソース例:

```
【設置無料】幅179cm キッチンカウンター ステンレス天板
```

期待結果:

```
幅179cm キッチンカウンター ステンレス天板
```

**実装:** `scripts/kurashi_fetch.py` の `shorten_product_name` および `scripts/build-products.mjs` の `cleanName` が `【...】` を除去済み。

Job 2 開始前に以下を **確認・不足なら修正**:

```python
# kurashi_fetch.py — 先頭・文中すべての【】を除去
cleaned = re.sub(r"【[^】]*】", " ", cleaned)
```

```javascript
// build-products.mjs
name = name.replace(/【[^】]*】/gu, " ");
```

修正後、1商品で manifest の `name` に `【` が残っていないことを確認してから全カテゴリ fetch。

### Job 2 完了報告（カテゴリごと）

```
Phase 2 / Phase A-1 完了: kitchen
- 商品数: 10 / 10
- 画像合計: 80 枚
- 【】残存: 0 件（name フィールド確認済み）
- manifest: data/kurashi/manifests/kitchen.json
```

---

## Job 3: マージ + Phase B

### 重要: 既存商品を消さない

`main` には Phase 1 で **約70商品** 既にある。  
`build-products.mjs` は manifest **全体**から `products.ts` を生成するため、**Phase 1 + Phase 2 の manifest をすべてマージ**すること。

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
  data/kurashi/manifests/goods.json \
  data/kurashi/manifests/kitchen.json \
  data/kurashi/manifests/clothing.json \
  data/kurashi/manifests/kotatsu.json

node scripts/build-products.mjs --manifest data/kurashi/manifest.json
npm run build
```

`manifests/` に存在するファイルは **すべて列挙**（漏れ = 商品消失）。

### カテゴリ画像の仕上げ

マージ後、各新カテゴリの代表画像を設定:

```bash
# 例: kitchen の先頭商品 id が ma-mirenia160kct の場合
cp public/images/products/ma-mirenia160kct/01.jpg public/images/categories/kitchen.jpg
```

### Job 3 完了条件

- [ ] 商品総数 ≧ 110（既存70 + 新規30 + lighting差し替え分）
- [ ] `kitchen` / `clothing` / `kotatsu` 各 **10商品**
- [ ] `lighting` **10商品**
- [ ] 全商品名に `【` `】` が含まれない
- [ ] TOP・カテゴリ・詳細で実画像表示
- [ ] `npm run build` 成功

---

## クラウドエージェント用プロンプト

### プロンプト A: Job 1（カテゴリ追加）

```
docs/PHASE2_CATEGORY_EXPANSION.md の Job 1 を実行してください。

- lib/data/categories.ts に kitchen / clothing / kotatsu を追加
- scripts/build-products.mjs の VALID_CATEGORY_SLUGS に同3 slug を追加
- npm run build で確認
- カテゴリ画像は Phase A 後でもよい（Job 3 で対応可）

【やらないこと】
- 既存カテゴリ slug の変更・削除
- ProductCard / ProductGallery の aspect-ratio 変更
```

### プロンプト B: Phase A-1（1カテゴリ・並列用）

`{slug}` を `kitchen` / `clothing` / `kotatsu` / `lighting` に差し替え。

```
docs/PHASE2_CATEGORY_EXPANSION.md と docs/IMAGE_REFRESH_GUIDE.md を読んで実行してください。

【ジョブ】Phase 2 / Phase A-1: {slug}
【設定】data/kurashi/configs/{slug}.json
【実行】python scripts/kurashi_fetch.py --config data/kurashi/configs/{slug}.json

【要件】
- 10商品 × 各8枚
- 画像並びは EC サイトと同じ（-01〜-08 順）
- 商品名から【...】をすべて除去（manifest の name に【が残らないこと）

【報告】
- 商品数 / 画像数 / 【】残存有無
- manifest パス
```

**並列例:** Agent1=kitchen, Agent2=clothing, Agent3=kotatsu, Agent4=lighting

### プロンプト C: Job 3（マージ + ビルド）

```
docs/PHASE2_CATEGORY_EXPANSION.md の Job 3 を実行してください。

1. data/kurashi/manifests/*.json をすべて merge（Phase 1 分を漏らさない）
2. build-products.mjs --manifest data/kurashi/manifest.json
3. 新カテゴリ3件の public/images/categories/{slug}.jpg を代表商品画像で作成
4. npm run build
5. カテゴリ別商品数と総商品数を報告
```

---

## やってはいけないこと

- Phase 2 だけの manifest で build-products（**既存70商品が消える**）
- `maxProducts: 8` のまま実行（**10商品必要**）
- 商品名に `【設置無料】` 等を残す
- カテゴリ追加なしで manifest だけ `categorySlug: "kitchen"` にする（TOP に出ない）

---

## 関連ファイル

```
docs/PHASE2_CATEGORY_EXPANSION.md     … 本ファイル
data/kurashi/batch-plan-phase2.json   … Phase 2 ジョブ一覧
data/kurashi/configs/kitchen.json
data/kurashi/configs/clothing.json
data/kurashi/configs/kotatsu.json
data/kurashi/configs/lighting.json    … maxProducts: 10
scripts/kurashi_fetch.py
scripts/merge-manifests.mjs
scripts/build-products.mjs
lib/data/categories.ts
```
