# セキュリティ方針・運用ガイド（roomy）

最終更新: 2026-08-12 / 対象: Next.js 16 App Router + KOMOJU 決済 / 公開先: Netlify

このドキュメントは、公開後に悪意ある第三者から攻撃を受けた場合を想定した
「現状の防御」「残っているリスク」「デプロイ前後にやること」をまとめたものです。

---

## 1. このサイトの攻撃対象領域

| 領域 | 内容 | 状態 |
| --- | --- | --- |
| `POST /api/checkout/create` | 注文内容の検証・決済セッション作成 | 認証なしの公開エンドポイント |
| `POST /api/checkout/verify` | 決済結果の照会・注文確定表示 | 認証なしの公開エンドポイント |
| `POST /api/contact` | お問い合わせ受付 | 認証なしの公開エンドポイント |
| 静的ページ全般 | 商品・特集・法務ページ | 読み取り専用 |
| ログイン / マイページ | **デモ実装（サーバー認証なし）** | 本番の会員機能としては未実装 |

サーバー側でのデータ永続化（DB）とメール送信は未実装です。
そのため現時点では「情報漏洩」より **「未決済のまま注文完了と表示させる」** リスクが最重要でした。

---

## 2. 実装済みの防御

### 2.1 価格・注文内容の改ざん対策

クライアントから価格を受け取りません。`lib/validation/checkout.ts` のスキーマには
価格フィールドが存在せず、`lib/checkout/build-order.ts` がカタログから再計算します。

- 商品ID・カラー・サイズはカタログ実在チェック
- 在庫のないオプションは拒否
- カラー／サイズの表示ラベルもサーバー側の正式値と一致必須（表示だけ書き換える攻撃を拒否）
- 数量は 1〜10、明細は最大 50 行
- 送料もサーバーで再計算

つまり「1円の椅子を買う」「送料無料に書き換える」は成立しません。

### 2.2 注文トークン（HMAC 署名）

`lib/security/sign.ts`

- HMAC-SHA256、`base64url(body).base64url(署名)` 形式
- 検証は `timingSafeEqual`（タイミング攻撃対策）
- 有効期限 2 時間（`CHECKOUT_TOKEN_TTL_MS`）
- **本番では `CHECKOUT_SIGNING_SECRET` を必須・32文字以上**（未設定なら起動時にエラー）
- 決済APIキー（`KOMOJU_SECRET_KEY`）の署名への流用は本番では不可

### 2.3 決済完了判定（今回強化）

`lib/komoju/client.ts` の `isKomojuPaymentSuccessful()` は次の全条件を満たす場合のみ成功とします。

1. KOMOJU セッションの金額が注文合計と一致
2. 通貨が JPY
3. **セッションの `external_order_num` / `metadata.order_id` が当該注文番号と一致**
4. `status === "completed"`、または payment が `captured` / `authorized`

以前は 3 が「値が取得できたときのみ確認」だったため、**同額の別セッションIDを送りつけて
未払い注文を完了扱いにできる余地**がありました。現在は不一致・取得不可はすべて拒否します。
また `pending`（決済未確定）を成功扱いしていた挙動も除外しました。

### 2.4 未決済での完了表示の封鎖（今回強化）

- `POST /api/checkout/create`: 本番で `KOMOJU_SECRET_KEY` 未設定のまま前払い決済（クレカ / Apple Pay）を
  要求された場合は 503 で拒否（デモモードへのフォールバックを禁止）
- `POST /api/checkout/verify`: トークンが `mode: "komoju"` 以外なのに支払い方法が代金引換でない場合は拒否

代金引換（`cod`）のみ、オンライン決済照会なしで注文成立します（仕様どおり）。

### 2.5 セキュリティヘッダー / CSP（今回追加）

`next.config.ts` の `headers()` で全ページに付与します。

| ヘッダー | 値 | 目的 |
| --- | --- | --- |
| `Content-Security-Policy` | `default-src 'self'` ほか | 外部スクリプト注入・データ持ち出しの抑止 |
| `X-Frame-Options` / `frame-ancestors` | `DENY` / `'none'` | クリックジャッキング対策 |
| `X-Content-Type-Options` | `nosniff` | MIME スニッフィング対策 |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | URL 経由の情報漏洩抑止 |
| `Permissions-Policy` | カメラ・マイク・位置情報を無効 | 不要権限の遮断 |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains`（本番のみ） | HTTPS 強制 |
| `Cross-Origin-Opener-Policy` | `same-origin` | タブナビング対策 |
| `poweredByHeader: false` | — | `X-Powered-By` を隠す |

`/api/*` には `Cache-Control: no-store` と `X-Robots-Tag: noindex` を付与し、
決済・問い合わせのレスポンスが CDN やクローラに残らないようにしています。

> CSP の `script-src` に `'unsafe-inline'` が残っているのは、Next.js のハイドレーション用
> インラインスクリプトのためです。外部ドメインのスクリプト読込は禁止されているため、
> 反射型 XSS で外部へデータを送るような典型パターンは阻止できます。
> nonce 方式にするには `middleware.ts` の追加が必要です（将来の改善項目）。

### 2.6 XSS / インジェクション

- `dangerouslySetInnerHTML` / `eval` / `new Function` / `innerHTML` の使用は **0 件**
- 表示は全て React のエスケープ経由（検索クエリの再表示も含む）
- SQL は未使用（DB なし）
- `child_process`・ファイルアップロード・ファイル書き込みは **なし**
- ユーザー入力を URL にした `fetch` は **なし**（送信先は自サイト `/api/*` と KOMOJU API のみ）
- サーバーアクション（`"use server"`）は未使用

### 2.7 シークレット管理

- `.gitignore` で `.env*` と `*.pem` を除外済み。`git ls-files` に秘密情報ファイルは含まれない
- KOMOJU 秘密鍵・署名シークレットはサーバー専用（`NEXT_PUBLIC_` を付けていない）
- エラーレスポンスにスタックトレースや内部パスを含めない

### 2.8 依存パッケージ

依存は `next` / `react` / `react-dom` / `swiper` / `zod` のみ。
`npm audit` は脆弱性 0 件（2026-08-12 時点）。

---

## 3. 残存リスクと対応方針

| # | リスク | 影響 | 優先度 | 対応方針 |
| --- | --- | --- | --- | --- |
| R1 | **レート制限なし** | 問い合わせスパム、決済APIの大量呼び出し、KOMOJU 側コスト増 | 高 | Netlify は関数がステートレスなためメモリ内カウンタは不十分。`@upstash/ratelimit` + Upstash Redis で IP 単位（contact: 5回/分、checkout: 10回/分）を推奨 |
| R2 | **KOMOJU Webhook 未実装** | ユーザーが決済後にブラウザを閉じると、サーバー側に注文が残らない | 高 | `POST /api/komoju/webhook` を追加し、署名検証のうえ注文を永続化。`verify` は表示専用に降格 |
| R3 | **注文トークンが再利用可能**（2時間・使い切りでない） | 現状は「完了画面の再表示」のみで副作用なし。DB/メール実装後は二重登録・二重送信の恐れ | 中（DB導入時に高） | `jti` を付与し使用済みを記録、または注文番号を一意キーにして冪等化 |
| R4 | **認証がデモ実装** | ログイン・マイページは誰でも状態を偽装可能（`sessionStorage` 書き換え） | 中 | 個人情報を扱う会員機能を出す前に NextAuth 等でサーバーセッション化。それまでは UI 上「デモ」であることを明示 |
| R5 | `create` のレスポンスに決済前の注文情報（氏名・住所）を含む | 自分の入力内容が返るだけで第三者に漏れる経路はないが、返す情報は最小化が望ましい | 低 | KOMOJU モードでは `token` / `sessionUrl` / `sessionId` のみ返す |
| R6 | `/api/contact` が氏名・メールをサーバーログに出力 | Netlify のログ閲覧権限者に個人情報が見える | 低 | 本番はマスキング、またはログ出力自体を停止 |
| R7 | CSP の `script-src 'unsafe-inline'` | インラインスクリプト実行を許容 | 低 | `middleware.ts` で nonce を発行し `'unsafe-inline'` を削除 |
| R8 | 在庫・価格がコード内の静的カタログ | 在庫と実在庫がずれる | 低（運用課題） | 在庫管理を外部化する際に整合性チェックを追加 |

---

## 4. デプロイ前チェックリスト

### 4.1 Netlify 環境変数

| 変数 | 値 | 必須 |
| --- | --- | --- |
| `CHECKOUT_SIGNING_SECRET` | ランダム 32 文字以上。**KOMOJU キーとは別の値** | 必須（未設定だと本番で例外） |
| `KOMOJU_SECRET_KEY` | `sk_test_...`（検証中） → `sk_live_...`（本番課金開始後） | 前払い決済に必須 |
| `NEXT_PUBLIC_KOMOJU_PUBLISHABLE_KEY` | 公開可のキー | 任意（Hosted Page のみなら不要） |
| `NEXT_PUBLIC_SITE_URL` | `https://<本番ドメイン>`（末尾スラッシュなし・localhost 不可） | 必須 |

署名シークレットの生成例:

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))"
```

### 4.2 確認項目

- [ ] `NEXT_PUBLIC_SITE_URL` が本番URL（localhost や `*.netlify.app` の残骸がない）
- [ ] `CHECKOUT_SIGNING_SECRET` が設定済みかつ KOMOJU キーと別値
- [ ] デプロイ後、`curl -I https://<ドメイン>/` で CSP / HSTS / `X-Frame-Options` が返る
- [ ] `X-Powered-By` が返らない
- [ ] KOMOJU テストキーで一連の決済（成功・キャンセル・3DS失敗）を通す
- [ ] 決済完了ページの URL の `token` を書き換えると「署名が不正」で拒否される
- [ ] 別注文の `session_id` を付けて `/checkout/complete` を開くと拒否される
- [ ] 代金引換の注文が正常に完了する
- [ ] `git ls-files` に `.env*` が含まれない
- [ ] Netlify の Deploy log に秘密鍵が出力されていない

### 4.3 KOMOJU 本番切替時

1. KOMOJU で Activate Payments（本番審査）を完了
2. `KOMOJU_SECRET_KEY` を `sk_live_...` に差し替え
3. 少額の実決済で疎通確認し、必要なら返金
4. 本番切替と同時に R2（Webhook）の実装を推奨

---

## 5. 運用中の定期チェック

| 頻度 | 作業 |
| --- | --- |
| 週次 | KOMOJU ダッシュボードで不審な決済（同額連続・海外カード連続失敗）を確認 |
| 週次 | Netlify Functions のログでエラー急増・特定IPからの連打を確認 |
| 月次 | `npm audit` と `npm outdated`、Next.js のセキュリティリリース確認 |
| 四半期 | `CHECKOUT_SIGNING_SECRET` をローテーション（下記手順） |
| 随時 | 商品カタログの価格・在庫と実運用の突き合わせ |

### シークレットのローテーション手順

トークンの有効期限は 2 時間です。切替直後は決済中のユーザーのトークンが無効になるため、
**注文の少ない時間帯**に実施してください。

1. Netlify で `CHECKOUT_SIGNING_SECRET` を新しい値に更新
2. 再デプロイ（環境変数の反映にはビルドが必要）
3. 直後に 1 件テスト注文で疎通確認

---

## 6. インシデント対応

### 不正な決済・改ざんが疑われる場合

1. KOMOJU ダッシュボードで該当決済を停止／返金
2. Netlify で `KOMOJU_SECRET_KEY` と `CHECKOUT_SIGNING_SECRET` を再発行し再デプロイ
   （既存の注文トークンは全て無効化される）
3. Netlify Functions のログから該当時刻のリクエストを保全
4. 影響範囲を確認し、必要なら該当ユーザーへ連絡

### サイト停止が必要な場合

Netlify の該当デプロイを Lock / 直前の正常デプロイに Rollback。
決済だけ止める場合は `KOMOJU_SECRET_KEY` を空にすれば前払い決済は 503 になります
（代金引換は継続します）。

---

## 7. 脆弱性の報告

外部の方が問題を発見した場合は、公開の場に投稿せず下記へご連絡ください。

- お問い合わせフォーム: `/contact`
- 運営: フォースペース合同会社

再現手順・影響範囲・確認日時をご記載ください。実在庫や他ユーザーのデータを操作する検証、
サービス停止を伴う負荷試験はお控えください。

---

## 8. 実装時に守るルール

新しいコードを追加するときは以下を守ってください。

1. **金額・在庫・割引をクライアントから受け取らない。** 必ずサーバーでカタログから再計算する
2. すべての API 入口で Zod による検証を行う（`lib/validation/` に集約）
3. 秘密情報に `NEXT_PUBLIC_` を付けない
4. エラーレスポンスに内部情報（スタックトレース、SQL、ファイルパス）を含めない
5. `dangerouslySetInnerHTML` を使わない。必要な場合は必ずサニタイズを挟む
6. 外部スクリプト（解析タグ等）を追加するときは `next.config.ts` の CSP も更新する
7. 個人情報をログに出力しない
8. 決済の成否は必ず KOMOJU への照会または Webhook で判定し、クライアントの申告を信用しない
