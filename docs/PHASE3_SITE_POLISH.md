# Phase 3: サイト仕上げ（画像差し替え・商品データ・UI改善）

クラウドエージェント向け。**Phase 2（商品画像拡充）完了後**に実行する。

> 前提: `git pull origin main` / `lib/data/products.ts` に kurashi 商品が入っていること  
> 関連: `docs/DESIGN_nook.txt` / `docs/IMAGE_REFRESH_GUIDE.md`

---

## ゴール一覧

| # | 改善 | 方針 | 難易度 |
|---|------|------|--------|
| 1 | TOP ヒーロー画像 | 実商品画像から選んで差し替え | 低 |
| 2 | カテゴリ画像（7種） | 各カテゴリ代表商品の `01.jpg` を使用 | 低 |
| 3 | ミラー削除 | カテゴリ・ナビ・データから除去 | 低 |
| 4 | 利用シーン画像 | シーンに紐づく商品画像で差し替え | 低 |
| 5 | 特集画像 | 実商品画像に差し替え | 低 |
| 6 | 特集詳細に商品表示 | `relatedProductIds` を実 ID に修正 | 低 |
| 7 | 新着とおすすめの重複排除 | `build-products.mjs` のフラグ付け修正 | 低 |
| 8 | 価格を約2段階下げ | `build-products.mjs` で price 調整 | 低 |
| 9 | カラー選択 | 画像と合わないため **削除**（空配列 + UI 非表示） | 低 |
| 10 | 説明・素材・サイズ | 商品名・画像から推定して生成 | 中 |
| 11 | レビュー削除 | データ空 + 詳細ページから UI 削除 | 低 |

**AI 画像生成は不要。** 既存の `public/images/products/` をコピーして使う（品質・整合性が高い）。

---

## Job 1: ビジュアル差し替え（画像コピー）

### 原則

- **新規 AI 生成は使わない**（依頼外・品質ブレ）
- `lib/data/products.ts` からカテゴリ・シーン別に代表商品を選び、`01.jpg` をコピー
- コピー先は既存パスを維持（コード変更を最小化）

### 1-1. TOP ヒーロー（`components/HeroCarousel.tsx`）

`slides` の `image` を実商品画像に変更。例:

| スライド | 内容 | 画像ソース例 |
|---------|------|-------------|
| 1 | ブランド TOP | ソファ or ダイニング代表商品 `01.jpg` |
| 2 | キャンペーン | 別カテゴリ代表 |
| 3 | リビング | `sceneSlugs` に `living` を含む商品 |
| 4 | ダイニング | `sceneSlugs` に `dining` を含む商品 |

ファイルを `public/images/common/` にコピーしてパスを更新してもよい。

### 1-2. カテゴリ画像（`lib/data/categories.ts`）

**対象 slug:** `sofa`, `table`, `chair`, `tvboard`, `storage`, `bed`, `rug`  
（`mirror` は Job 2 で削除）

各 slug の `getProductsByCategory(slug)` 先頭商品の `image` を:

1. `public/images/categories/{slug}.jpg` にコピー
2. `categories.ts` の `image` パスが `/images/categories/{slug}.jpg` ならそのまま

### 1-3. 利用シーン（`lib/data/scenes.ts`）

| scene slug | 画像ソース |
|------------|-----------|
| `living` | sceneSlugs に living の商品（ソファ等） |
| `dining` | dining の商品（テーブルセット等） |
| `bedroom` | bedroom の商品（ベッド等） |
| `study` | study の商品（デスク・チェア等） |

`public/images/common/scene_*.jpg` にコピーし `scenes.ts` の `image` を更新。

### 1-4. 特集（`lib/data/features.ts`）

- 各 feature の `image` を関連カテゴリの代表商品に差し替え
- `public/images/features/*.jpg` にコピー

---

## Job 2: ミラーカテゴリ削除

### 変更ファイル

- [ ] `lib/data/categories.ts` … `mirror` エントリ削除
- [ ] `components/Header.tsx` … ミラーナビ削除
- [ ] `components/Footer.tsx` … ミラーリンク削除
- [ ] `scripts/build-products.mjs` … `VALID_CATEGORY_SLUGS` / `SCENE_BY_CATEGORY` / `getDefaultRankingCategory` から `mirror` 削除
- [ ] `lib/data/features.ts` … `relatedProductIds` から存在しない ID（`mirror-01` 等）を除去

`app/category/mirror` は `generateStaticParams` から自動的に消える。

---

## Job 3: 特集詳細に商品を表示

### 原因

`lib/data/features.ts` の `relatedProductIds` が旧プレースホルダ ID（`sofa-01`, `bed-01` 等）。  
`getProductById` が null → 商品グリッドが空。

### 修正

各 feature の `relatedProductIds` を **`lib/data/products.ts` に存在する実 ID** に更新（3〜4件）。

例:

```typescript
// sofa-guide
relatedProductIds: ["kd-modulia1as", "kd-moduliast", "kd-modulia3as"], // 実在する sofa 系 ID

// one-room-layout
relatedProductIds: ["...", "...", "..."], // chair / table / lighting 系

// bed-size
relatedProductIds: ["...", "..."], // bed 系（mirror 系 ID は使わない）
```

`app/feature/[slug]/page.tsx` は既に ProductCard を表示する実装済み。**データ修正のみで OK**。

---

## Job 4: `build-products.mjs` 改善

### 4-1. 新着 vs おすすめ（重複排除）

**現状:** manifest 先頭4件が `isNew` と `isRecommended` **両方** true → TOP で同じ商品。

**修正例:**

```javascript
// index は manifest 内の順序
if (index < 4) product.isNew = true;
if (index >= 4 && index < 8) product.isRecommended = true;
// または rank / categorySlug ベースで分散
```

`getNewArrivals` / `getRecommended` が **ID の重複なし** になることを確認。

### 4-2. 価格調整（約2段階安く）

manifest の `price`（高めの EC 価格）を EC サイト向けに調整。

**方針（エージェント裁量・目安）:**

```javascript
function adjustPrice(raw) {
  const p = Number(raw);
  if (!Number.isFinite(p) || p <= 0) return p;
  // おおよそ 40〜55% に（2段階下げのイメージ）
  return Math.round(p * 0.45 / 100) * 100;
}
```

- 100円未満切り捨て or 100円単位丸め
- 極端に安くなりすぎないよう **最低 3,000円** 程度の下限を設けてもよい
- 調整後 `npm run build` で全商品価格を spot check（3〜5件）

### 4-3. カラー削除

```javascript
colors: [],  // DEFAULT_COLORS を使わない
sizes: [{ id: "free", label: "フリーサイズ", inStock: true }], // サイズは1つのみで可
reviews: [],
```

### 4-4. 説明・素材・サイズの生成

プレースホルダー（「参考：楽天市場…」「詳細は商品ページ…」）をやめる。

**商品名から抽出（regex ベース）:**

| フィールド | 抽出例 |
|-----------|--------|
| `sizeInfo` | `幅179cm`, `W120×D60×H75cm`, `\d+cm` パターン |
| `material` | ステンレス / ファブリック / ウォールナット / セラミック / 木製 / スチール 等キーワード |
| `description` | 商品名 + カテゴリ名から1〜2文の自然な説明文（テンプレで可） |

```javascript
function buildDescription(name, categorySlug) {
  return `${name}。${categoryLabel(categorySlug)}として、デイリーの暮らしに取り入れやすいアイテムです。`;
}
```

**任意（精度向上）:** 代表商品画像（`01.jpg`）をエージェントが目視し、素材・色・雰囲気を description に反映。

### 4-5. 再生成

```bash
node scripts/build-products.mjs --manifest data/kurashi/manifest.json
```

---

## Job 5: 商品詳細 UI

### 5-1. レビュー削除

- [ ] `app/products/[id]/page.tsx` … レビューセクション（`<section>` 全体）削除
- [ ] `getAverageRating` / `StarRating` が他で未使用なら削除
- [ ] `ProductPurchasePanel` にレビュー表示があれば削除

### 5-2. カラー UI 非表示

`components/ProductPurchasePanel.tsx`:

```tsx
{product.colors.length > 0 ? (
  /* 既存のカラー選択 UI */
) : null}
```

`colors` が空のときサイズ選択のみ、またはサイズも1つなら非表示。

---

## 完了条件

- [ ] TOP / カテゴリ / シーン / 特集が **実商品画像**（プレースホルダーではない）
- [ ] ミラーが TOP・ヘッダー・フッター・カテゴリ一覧に **表示されない**
- [ ] 特集詳細に **ProductCard が3件以上** 表示される
- [ ] TOP 新着4件とおすすめ4件に **同一 ID がない**
- [ ] 商品詳細に **レビューがない**
- [ ] 商品詳細に **カラー選択がない**（または空）
- [ ] 説明・素材・サイズがプレースホルダー文言ではない
- [ ] 価格が Phase 2 より **おおむね半減前後**
- [ ] `npm run build` 成功

---

## 完了報告フォーマット

```
Phase 3 完了
- ヒーロー/カテゴリ/シーン/特集: 実商品画像に差し替え済み
- ミラー: 削除済み
- 特集 relatedProductIds: 修正（各N件表示）
- 新着∩おすすめ: 0件
- 価格調整: 例）平均 ¥XX,XXX → ¥XX,XXX
- レビュー/カラー: UI 削除済み
- npm run build: 成功
```

---

## クラウドエージェント用プロンプト（一括）

```
git pull origin main

docs/PHASE3_SITE_POLISH.md を読み、Phase 3 を最初から最後まで一気に完了してください。途中確認不要。

【Job 1】ビジュアル
- TOP ヒーロー / カテゴリ7種 / 利用シーン4種 / 特集3種を lib/data/products.ts の実商品画像（01.jpg）で差し替え
- AI 画像生成は使わない（コピーのみ）

【Job 2】ミラー削除
- categories.ts, Header, Footer, build-products.mjs, features.ts から mirror 関連を除去

【Job 3】特集
- features.ts の relatedProductIds を実在 product.id に修正（特集詳細に商品グリッド表示）

【Job 4】build-products.mjs
- 新着(先頭4)とおすすめ(別4)の重複排除
- 価格を約45%程度に調整（100円単位、下限3000円程度）
- colors: [], reviews: []
- description / material / sizeInfo を商品名から生成（プレースホルダー禁止）
- node scripts/build-products.mjs --manifest data/kurashi/manifest.json

【Job 5】商品詳細 UI
- レビューセクション削除
- カラー選択を colors.length===0 で非表示

【エラー時】サブエージェントで調査。解決不能なら「要対応」+ 停止フェーズ + git status を報告。

【完了報告】PHASE3_SITE_POLISH.md のフォーマット
```

---

## やってはいけないこと

- プレースホルダー画像（`generate-placeholders`）を商品画像として使う
- `products.ts` を手編集（必ず `build-products.mjs` 経由）
- ProductCard / ProductGallery の aspect-ratio 変更
- 存在しない product ID を features に残す

---

## 関連ファイル

```
components/HeroCarousel.tsx
components/Header.tsx
components/Footer.tsx
components/ProductPurchasePanel.tsx
app/products/[id]/page.tsx
lib/data/categories.ts
lib/data/scenes.ts
lib/data/features.ts
scripts/build-products.mjs
public/images/common/
public/images/categories/
public/images/features/
```
