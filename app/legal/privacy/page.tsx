import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">プライバシーポリシー</h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <p className="mb-4">
              シンパートナーズ（以下「当社」といいます）は、お客様の個人情報の保護に最大限の注意を払い、以下のプライバシーポリシーに従って適切に取り扱います。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. 個人情報の収集について</h2>
            <p>
              当社は、以下の目的のために必要な範囲で個人情報を収集します。
            </p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>サービスの提供</li>
              <li>お客様からのお問い合わせへの対応</li>
              <li>サービスの改善</li>
              <li>決済処理（Stripeを通じて）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. 個人情報の利用目的</h2>
            <p>
              当社は、収集した個人情報を以下の目的で利用します。
            </p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>サービスの提供・運営</li>
              <li>お客様へのご連絡</li>
              <li>サービスに関する情報のご案内</li>
              <li>本人確認</li>
              <li>利用規約違反への対応</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. 個人情報の第三者提供</h2>
            <p>
              当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。
            </p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>お客様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>決済サービス（Stripe）を通じた決済処理のため</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. 個人情報の安全管理</h2>
            <p>
              当社は、個人情報の紛失、破壊、改ざん、漏洩などのリスクに対して、合理的な安全対策を実施します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Cookieの使用について</h2>
            <p>
              当社のウェブサイトでは、サービスの向上のためにCookieを使用する場合があります。Cookieの使用を希望されない場合は、ブラウザの設定で無効にすることができます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. 決済情報について</h2>
            <p>
              クレジットカード情報等の決済情報は、当社では保持せず、決済代行会社であるStripe Inc.が管理します。Stripeのプライバシーポリシーについては、
              <a href="https://stripe.com/jp/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                こちら
              </a>
              をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. 個人情報の開示・訂正・削除</h2>
            <p>
              お客様は、ご自身の個人情報について、開示、訂正、削除を求めることができます。お問い合わせ窓口までご連絡ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. プライバシーポリシーの変更</h2>
            <p>
              当社は、法令の変更等に伴い、本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、本ウェブサイトに掲載した時点で効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. お問い合わせ</h2>
            <p>
              個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。<br />
              <br />
              事業者名: シンパートナーズ<br />
              所在地: 〒543-0072 大阪府大阪市天王寺区生玉前町5-19 JPレジデンス大阪上町台 601号室<br />
              電話番号: 070-8972-2988<br />
              メールアドレス: shinpartners.group@shin-partners.com
            </p>
          </section>

          <section className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              制定日: 2024年1月1日
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
