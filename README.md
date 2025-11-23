# 口コミアシスト 決済サイト

口コミアシストツールの初期費用（33,000円税込）を決済するためのサイトです。
A代理店とB代理店それぞれに専用の決済ページがあり、決済完了後は各代理店の登録画面に自動的に遷移します。

## 機能

- A代理店専用決済ページ: `/payment/agency-a`
- B代理店専用決済ページ: `/payment/agency-b`
- Stripe Checkoutによる安全な決済処理
- 決済完了後に代理店ごとの登録URLへ自動遷移

## セットアップ

1. 依存パッケージのインストール

```bash
npm install
```

2. 環境変数の設定

`.env.local`ファイルを作成し、以下の環境変数を設定してください：

```env
# Stripe API Keys（StripeダッシュボードのAPI keysから取得）
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx

# 代理店登録URL（決済成功後の遷移先）
AGENCY_A_REGISTRATION_URL=https://your-domain.com/agency-a/register
AGENCY_B_REGISTRATION_URL=https://your-domain.com/agency-b/register

# アプリケーションURL
NEXT_PUBLIC_APP_URL=http://localhost:5648
```

3. 開発サーバーの起動

```bash
npm run dev
```

サーバーは http://localhost:5648 で起動します。

## ページURL

- A代理店: http://localhost:5648/payment/agency-a
- B代理店: http://localhost:5648/payment/agency-b

## デプロイ（Vercel）

1. GitHubにプッシュ

```bash
git add .
git commit -m "Initial commit"
git push
```

2. Vercelでプロジェクトをインポート

3. 環境変数を設定
   - Vercelのダッシュボードで以下の環境変数を設定してください
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `AGENCY_A_REGISTRATION_URL`
   - `AGENCY_B_REGISTRATION_URL`
   - `NEXT_PUBLIC_APP_URL`（本番URLに変更）

4. デプロイ

## Stripeのテスト

テストモードでは以下のカード番号が使用できます：

- カード番号: `4242 4242 4242 4242`
- 有効期限: 未来の任意の日付
- CVC: 任意の3桁の数字

## 技術スタック

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Stripe Checkout
