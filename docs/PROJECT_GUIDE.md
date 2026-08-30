# PROJECT_GUIDE.md

インテリア・家具 EC サイト（Next.js App Router + Tailwind CSS）の実装ガイド。

- **DESIGN.md**（または `DESIGN_*.txt`）… 何を作るか（仕様）
- **本ファイル** … どの順番で・どう作るか（実装計画）

クラウドエージェント（Cursor Cloud Agent / Claude 等）向けに、**フェーズ分割**と**完了条件**を明記しています。

---

## このガイドの目的

1. 外部 EC（**kurashi-ec.jp** または楽天）から商品画像を収集する（目標: **80〜100商品 × 8枚**）
2. 収集した画像を EC サイトの `public/images/products/` に配置する
3. `lib/data/products.ts` を生成し、EC サイトに商品画像を当てはめる
4. DESIGN 仕様に従い EC サイトを実装・完成させる

> **商品画像刷新（kurashi-ec.jp）**  
> 現在の推奨ワークフローは **`docs/IMAGE_REFRESH_GUIDE.md`** を参照。  
> カテゴリ別に Phase A → マージ → Phase B を繰り返す。

> **旧ワークフロー（楽天のみ）**  
> DESIGN 内の「共通画像リスト生成ルール」（CSV / Flow / Genspark による AI 画像生成）は**使用しない**。  
> 楽天向けは **STEP 2.5〜2.6**、kurashi 向けは **IMAGE_REFRESH_GUIDE** を実行する。

---

## フェーズ一覧（クラウドエージェントへの投げ方）

| フェーズ | 内容 | 主な成果物 | 単独ジョブ推奨 |
|---------|------|-----------|--------------|
| **Phase A (kurashi)** | kurashi-ec.jp 画像収集 | `data/kurashi/manifests/*.json` + 画像 | ✅ **カテゴリ 1 件ずつ** |
| **Phase A-2** | manifest 統合 | `data/kurashi/manifest.json` | ✅ 全カテゴリ完了後 |
| **Phase A (rakuten)** | 楽天画像収集 | `data/rakuten/manifest.json` + 画像 | ✅ 推奨 |
| **Phase B** | 商品データ生成 | `lib/data/products.ts` | ✅ 推奨 |
| **Phase C** | EC サイト実装 | 各ページ・コンポーネント | ✅ 優先度ごとに分割可 |

**1 プロンプトですべフェーズを一気に実行しないこと。** タイムアウト・レート制限・デバッグ困難を避けるため。

---

## 前提ファイル・ディレクトリ

```
プロジェクトルート/
├── docs/
│   ├── DESIGN.md              # または DESIGN_nook.txt
│   └── PROJECT_GUIDE.md       # 本ファイル
├── scripts/
│   ├── kurashi_fetch.py       # Phase A: kurashi-ec.jp 画像収集
│   ├── rakuten_fetch.py       # Phase A: 楽天画像収集
│   ├── merge-manifests.mjs    # Phase A-2: manifest 統合
│   └── build-products.mjs     # Phase B: manifest → products.ts
├── data/kurashi/
│   ├── batch-plan.json        # カテゴリ別ジョブ計画
│   ├── configs/{slug}.json    # カテゴリ別収集設定
│   ├── manifests/{slug}.json  # カテゴリ別 manifest
│   └── manifest.json          # 統合 manifest
├── data/rakuten/
│   ├── config.json            # 収集設定（ショップ・カテゴリ等）
│   └── manifest.json          # Phase A 出力
├── public/images/
│   ├── common/                # ヒーロー・シーン等（プレースホルダー可）
│   └── products/              # Phase A で楽天画像を配置
│       └── {product_id}/
│           ├── 01.jpg
│           ├── 02.jpg
│           └── ...
├── lib/data/
│   └── products.ts            # Phase B 出力
└── .env.local                 # 楽天 API キー（Git にコミットしない）
```

---

## 環境変数

`.env.local` に以下を設定する（値はリポジトリにコミットしない）。

```env
RAKUTEN_APPLICATION_ID=your_application_id
RAKUTEN_ACCESS_KEY=your_access_key
RAKUTEN_REFERER_URL=https://your-registered-url.example.com
```

楽天 Developers でアプリ作成・「アプリケーション ID」「アクセスキー」を取得すること。  
`REFERER_URL` はアプリ登録時の「許可された Web サイト / IP アドレス」と一致させる。

---

## data/rakuten/config.json（収集設定テンプレート）

Phase A 実行前に作成または更新する。

```json
{
  "shopCode": "gachinko",
  "mode": "category_list",
  "categoryUrls": [
    "https://item.rakuten.co.jp/gachinko/c/0000000927/"
  ],
  "maxProducts": 100,
  "maxImagesPerProduct": 8,
  "requestIntervalSec": 1.0,
  "concurrency": 5
}
```

### mode の種類

| mode | 説明 | 用途 |
|------|------|------|
| `category_list` | カテゴリページから商品 URL を列挙 | 100 商品規模向け |
| `category_ranking` | カテゴリ上部 No.1〜No.N バッジから取得 | 少数・厳選 |
| `keyword_search` | 楽天 API + shopCode + keyword | キーワード絞り込み |

---

## STEP 0：前提確認

- [ ] `docs/DESIGN.md`（または `DESIGN_nook.txt`）を読み込んだ
- [ ] Next.js（App Router）+ Tailwind CSS のプロジェクトが存在する
- [ ] `.env.local` に楽天 API キーが設定されている
- [ ] `data/rakuten/config.json` が存在する
- [ ] 本サイトは**単一ブランドのセレクトショップ（MVP）**（ブランド一覧・ブランド別ページは作らない）
- [ ] 搬入シミュレーター・開梱設置・バーチャルショールーム等は **MVP では実装しない**

実装中に迷ったら DESIGN の該当セクションを優先する。DESIGN にない細部は Next.js / Tailwind の一般的なベストプラクティスで補ってよい。

---

## STEP 1：現状確認・作業計画提示

着手前に以下を一覧化し、ユーザーに提示してから次へ進む。

1. TOP ページ内リンク・ボタンの遷移先 URL 一覧（404 / 未実装をマーク）
2. DESIGN「ページ構成」の全ページと、実装済み / 未実装の対応表
3. 未実装ページの優先度順作業計画
4. **画像パイプラインの状態**
   - `manifest.json` の有無・商品件数
   - `public/images/products/` の画像枚数
   - `lib/data/products.ts` が manifest と整合しているか

---

## STEP 2：ルーティング設計

DESIGN のページ構成を App Router にマッピングする。

```
app/
  page.tsx                          … TOP
  category/[slug]/page.tsx          … カテゴリ一覧
  products/[id]/page.tsx            … 商品詳細
  search/page.tsx                   … 検索結果
  cart/page.tsx                     … カート
  checkout/page.tsx                 … お支払い
  checkout/complete/page.tsx        … ご注文完了
  login/page.tsx                    … ログイン
  register/page.tsx                 … 新規会員登録
  mypage/page.tsx                   … マイページ
  mypage/orders/page.tsx            … 注文履歴
  mypage/favorite/page.tsx          … お気に入り
  ranking/page.tsx                  … ランキング
  newarrival/page.tsx               … 新着
  feature/page.tsx                  … 特集一覧
  feature/[slug]/page.tsx           … 特集詳細
  scene/page.tsx                    … 利用シーン一覧
  scene/[slug]/page.tsx             … 利用シーン別一覧
  news/page.tsx                     … お知らせ一覧
  news/[id]/page.tsx                … お知らせ詳細
  guide/page.tsx                    … ご利用ガイド
  guide/faq/page.tsx                … FAQ
  contact/page.tsx                  … お問い合わせ
  company/page.tsx                    … 運営会社
  privacy/page.tsx                  … プライバシーポリシー
  terms/page.tsx                    … ご利用規約
  legal/page.tsx                    … 特定商取引法
```

ルーティング設計後、STEP 1 のリンク一覧と照合し TOP の href / Link を修正する。

---

## STEP 2.5：楽天画像収集（Phase A）

> **旧「共通画像リスト生成」の代替ステップ。**  
> AI 画像生成・外部撮影発注の代わりに、楽天から商品画像を取得する。

### 目的

- 約 **100 商品**、各 **約 8 枚**（詳細説明画像含む）、合計 **800 枚前後**
- 画像を EC サイトの所定パスに配置する

### 実装要件（`scripts/rakuten_fetch.py`）

既存の `rakuten_image_check.py`（あればリポジトリ外の `personal/` 配下）をベースに、以下を満たすスクリプトを作成する。

1. **入力**: `data/rakuten/config.json` + `.env.local`
2. **商品 URL 収集**
   - `category_list`: カテゴリページ HTML から商品 URL を列挙（ページネーション対応）
   - `category_ranking`: No.1〜No.N バッジから URL 取得
   - `keyword_search`: 楽天 Ichiba Item Search API（`shopCode` + `keyword`）
3. **画像取得**
   - 楽天 API の `mediumImageUrls` は最大 3 枚のため、**商品ページ HTML からギャラリー画像を抽出**する
   - 同一商品フォルダ内で最も枚数の多い画像群を商品ギャラリーとみなす（gachinko 等で検証済みの方式）
   - 1 商品あたり最大 `maxImagesPerProduct` 枚（デフォルト 8）に制限
4. **並列処理**
   - 商品単位で並列 fetch（`concurrency` 設定、デフォルト 5）
   - 429 時は指数バックオフでリトライ
5. **再開可能**
   - 既に DL 済みの画像はスキップ
6. **出力先**
   - 画像: `public/images/products/{product_id}/01.jpg` …
   - マニフェスト: `data/rakuten/manifest.json`

### manifest.json スキーマ

```json
{
  "generatedAt": "2026-08-30T12:00:00+09:00",
  "source": {
    "shopCode": "gachinko",
    "mode": "category_list"
  },
  "products": [
    {
      "id": "abr920153",
      "name": "商品名（楽天 itemName）",
      "price": 14980,
      "categorySlug": "storage",
      "itemUrl": "https://item.rakuten.co.jp/gachinko/abr920153/",
      "itemCode": "gachinko:12345678",
      "images": [
        "/images/products/abr920153/01.jpg",
        "/images/products/abr920153/02.jpg"
      ],
      "sourceUrls": [
        "https://tshop.r10s.jp/gachinko/cabinet/..."
      ]
    }
  ]
}
```

### 実行コマンド

```bash
python scripts/rakuten_fetch.py
# または
python scripts/rakuten_fetch.py --config data/rakuten/config.json
```

### Phase A 完了条件

- [ ] `manifest.json` に **90 件以上**の商品（目標 100 件）
- [ ] 各商品に **6 枚以上**の画像（目標 8 枚）
- [ ] 合計 **700 枚以上**の画像ファイルが `public/images/products/` に存在
- [ ] API キーがソースコード・manifest に含まれていない
- [ ] 実行ログに失敗商品一覧が出力されている

### Phase A 完了報告フォーマット

```
Phase A 完了
- 商品数: XX / 100
- 画像合計: XXX 枚
- 平均枚数/商品: X.X 枚
- 失敗: X 件（itemCode 一覧）
- manifest: data/rakuten/manifest.json
```

---

## STEP 2.6：商品データ生成（Phase B）

### 目的

`manifest.json` から `lib/data/products.ts` を自動生成し、EC サイトが実画像を参照できるようにする。

### 実装要件（`scripts/build-products.mjs`）

1. **入力**: `data/rakuten/manifest.json`
2. **出力**: `lib/data/products.ts`
3. **既存型に合わせる**（`lib/data/products.ts` の `Product` 型）

```typescript
export type Product = {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  categorySlug: string;
  sceneSlugs: string[];
  image: string;        // 一覧用 = images[0]
  images: string[];     // 詳細用（最大8枚程度）
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
```

4. **カテゴリマッピング**
   - 楽天商品名・カテゴリから `categorySlug` を推定（`lib/data/categories.ts` の slug と一致させる）
   - 推定不能な場合は `interior-goods` 等のデフォルト
5. **説明文・素材・サイズ**
   - 初回はプレースホルダー文言でよい（後から手動修正可）
   - `description` には「参考: 楽天商品名」を含めてもよい
6. **価格**
   - manifest の `price` を使用（税込想定）

### 実行コマンド

```bash
node scripts/build-products.mjs
```

### Phase B 完了条件

- [ ] `lib/data/products.ts` が TypeScript としてコンパイルエラーなし
- [ ] 商品数 = manifest の商品数と一致
- [ ] 全商品の `image` / `images[0]` が実在するファイルパスを指す
- [ ] `npm run build` が通る

---

## STEP 3：ページ実装（Phase C）

以下の優先度で **1 ページずつ** 実装する。複数ページを一気に生成しない。

### 優先度 1（購入導線）

1. `category/[slug]/page.tsx`
2. `products/[id]/page.tsx`
3. `cart/page.tsx`
4. `checkout/page.tsx`, `checkout/complete/page.tsx`

### 優先度 2（回遊導線）

5. `scene/page.tsx`, `scene/[slug]/page.tsx`
6. `ranking/page.tsx`
7. `newarrival/page.tsx`
8. `search/page.tsx`

### 優先度 3（コンテンツ・会員）

9. `feature/page.tsx`, `feature/[slug]/page.tsx`
10. `news/page.tsx`, `news/[id]/page.tsx`
11. `login/page.tsx`, `register/page.tsx`
12. `mypage/*`（ダミー認証で表示のみ可）

### 優先度 4（静的・規約）

13. `guide/*`, `contact/page.tsx`, `company/page.tsx`
14. `privacy/page.tsx`, `terms/page.tsx`, `legal/page.tsx`

### ページ実装時の共通ルール

- 商品データは **ハードコードせず** `lib/data/` から import
- **商品画像は `public/images/products/` の楽天由来画像を使う**
  - `scripts/generate-placeholders.mjs` による商品プレースホルダーは**使わない**
  - ヒーロー・シーン・ロゴ等の **common 画像** のみプレースホルダー可
- コンポーネントは `components/` に切り出し（ProductCard, ProductGallery 等）
- 商品カードの画像アスペクト比は **1:1（aspect-square）+ object-cover**（`ProductCard` / `ProductGallery` 参照）

---

## STEP 4：動作確認

各優先度グループ完了ごとに確認する。

1. TOP から各ページへ 404 なく遷移できる
2. DESIGN の配色（`#c97c5d` / `#8a9a7e`）、角丸 4px、フォントが反映されている
3. 商品一覧・詳細で**実画像**が表示される（プレースホルダーではない）
4. 商品詳細で `images` 配列の複数枚がギャラリー表示される
5. PC / SP でレイアウトが崩れない
6. コンソールエラーなし
7. `npm run build` 成功

---

## クラウドエージェント用プロンプト例

### 商品画像刷新（kurashi・推奨）

**詳細は `docs/IMAGE_REFRESH_GUIDE.md` を参照。** カテゴリ 1 件ずつ投げる。

```
docs/IMAGE_REFRESH_GUIDE.md と docs/sources/kurashi-ec.md を読んで実行してください。

【ジョブ】商品画像刷新 Phase A-1: sofa
【設定】data/kurashi/configs/sofa.json
【実行】python scripts/kurashi_fetch.py --config data/kurashi/configs/sofa.json
【報告】IMAGE_REFRESH_GUIDE の完了報告フォーマット
```

### Phase A を投げるとき（楽天）

```
docs/PROJECT_GUIDE.md の STEP 2.5（Phase A）を実行してください。

- scripts/rakuten_fetch.py を新規作成
- data/rakuten/config.json を読み込む
- 100商品・各8枚前後・並列ダウンロード・再開可能
- 出力: data/rakuten/manifest.json, public/images/products/
- 完了後、Phase A 完了報告フォーマットで報告
- APIキーは .env.local のみ。ソースに直書きしない
```

### Phase B を投げるとき

```
docs/PROJECT_GUIDE.md の STEP 2.6（Phase B）を実行してください。

- scripts/build-products.mjs を作成
- data/rakuten/manifest.json → lib/data/products.ts
- 既存 Product 型に合わせる
- npm run build で確認
```

### Phase C を投げるとき

```
docs/PROJECT_GUIDE.md の STEP 3 優先度1を実行してください。

- lib/data/products.ts の実画像を使用（プレースホルダー商品画像禁止）
- DESIGN.md の仕様に従う
- 1ページずつ実装し、都度動作確認
```

---

## 他 EC サイト（楽天以外）への展開

本ガイドの **Phase C（EC 実装）** は共通。  
**Phase A のソース部分だけ** `docs/sources/` に差し替え定義を置く。

```
docs/sources/
  kurashi-ec.md   … kurashi-ec.jp 画像収集（docs/IMAGE_REFRESH_GUIDE.md とセット）
  rakuten.md      … 本ガイド STEP 2.5 の詳細（将来）
```

新規 EC プロジェクトでは `data/rakuten/config.json` の `shopCode` / `categoryUrls` だけ変更し、Phase A〜C を繰り返す。

---

## 禁止事項・注意

### 技術

- Amazon 等の **無許可スクレイピング** を本パイプラインに組み込まない
- API キー・accessKey を Git コミットしない
- レート制限（429）を無視した大量リクエストをしない

### 法的・運用

- 楽天の商品画像を **本番 EC で商用利用** する場合、著作権・楽天 API 利用規約・出典表示を確認すること
- MVP / デモ / ポートフォリオ用途でも、可能なら出典（参考: 楽天市場）を明記する
- 本番販売時は自社撮影・正規仕入画像への差し替えを推奨

---

## 旧ワークフローとの対応表

| 旧（PROJECT_GUIDE_1.txt） | 新（本ガイド） |
|--------------------------|---------------|
| 共通画像リスト生成（CSV / Flow / Genspark） | **STEP 2.5 楽天画像収集** |
| `generate-placeholders.mjs` で商品画像 | **楽天 DL 画像を `public/images/products/` に配置** |
| 本番画像納品後に差し替え | manifest 再生成 → build-products 再実行 |
| プレースホルダーで EC 実装 | **実画像で EC 実装**（common のみ PL 可） |

---

## 備考

- 商品数 100・画像 800 枚規模は **Phase A 単独ジョブ** として 15〜40 分かかる場合がある
- gachinko ショップは `category_list` / `category_ranking` / 商品ページギャラリー抽出で動作確認済み
- ショップによって HTML 構造が異なる場合、`scripts/rakuten_fetch.py` の抽出ロジックを `shopCode` 別に調整する
