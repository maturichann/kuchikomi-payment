import Link from 'next/link';

export default function TokushoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">特定商取引法に基づく表記</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">販売事業者</h2>
            <p className="text-gray-700">シンパートナーズ</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">運営統括責任者</h2>
            <p className="text-gray-700">代表者名</p>
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
            <p className="text-gray-700">070-8972-2988</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">メールアドレス</h2>
            <p className="text-gray-700">info@example.com</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">販売価格</h2>
            <p className="text-gray-700">
              口コミアシスト 初期費用: 33,000円（税込）<br />
              ※各商品ページに記載された金額が適用されます
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">商品代金以外の必要料金</h2>
            <p className="text-gray-700">
              インターネット接続料金、通信費等は、お客様のご負担となります。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">お支払い方法</h2>
            <p className="text-gray-700">
              クレジットカード決済（Stripe）
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">お支払い時期</h2>
            <p className="text-gray-700">
              クレジットカード決済：お申し込み時に決済が行われます
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">商品の引渡時期</h2>
            <p className="text-gray-700">
              決済完了後、直ちにサービスをご利用いただけます
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">返品・キャンセルについて</h2>
            <p className="text-gray-700">
              デジタルコンテンツの性質上、決済完了後の返品・返金には応じかねます。<br />
              ただし、サービスに不具合がある場合は、お問い合わせください。
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
