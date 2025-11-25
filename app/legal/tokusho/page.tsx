import Link from 'next/link';

export default function TokushoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">特定商取引法に基づく表記</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">事業者名</h2>
            <p className="text-gray-700">
              北山　伸<br />
              シンパートナーズ
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">運営責任者</h2>
            <p className="text-gray-700">北山　伸</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">所在地</h2>
            <p className="text-gray-700">
              〒543-0072<br />
              大阪府大阪市天王寺区生玉前町5-19<br />
              JPレジデンス大阪上町台 601号室
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">電話番号</h2>
            <p className="text-gray-700">
              070-8972-2988<br />
              <span className="text-sm text-gray-600">※お問い合わせはメールでも承っております</span>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">メールアドレス</h2>
            <p className="text-gray-700">shinpartners.group@shin-partners.com</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">販売価格</h2>
            <p className="text-gray-700">
              33,000円（税込）<br />
              <span className="text-sm text-gray-600">※各商品ページに記載された金額</span>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">商品代金以外の必要料金</h2>
            <p className="text-gray-700">
              インターネット接続料金、通信費等は、お客様のご負担となります。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">利用可能な決済手段</h2>
            <p className="text-gray-700">
              クレジットカード決済（Stripe）
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">決済期間</h2>
            <p className="text-gray-700">
              クレジットカード決済はただちに処理されます
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">商品の引渡時期</h2>
            <p className="text-gray-700">
              初期費用の決済完了後、代理店の登録画面に遷移します。<br />
              サービスのご利用には、別途月額プランの決済が必要となります。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">返品・キャンセル・交換について</h2>
            <p className="text-gray-700">
              <strong>＜通常の返品・キャンセル＞</strong><br />
              デジタルコンテンツの性質上、決済完了後の返品・返金・キャンセルには応じかねます。<br />
              <br />
              <strong>＜不良品・サービス不具合の場合＞</strong><br />
              サービスに不具合がある場合は、メールアドレス（shinpartners.group@shin-partners.com）までお問い合わせください。<br />
              状況を確認の上、返金または適切な対応をさせていただきます。
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-700 underline">
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
