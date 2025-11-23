export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          お支払いが完了しました
        </h1>

        <p className="text-gray-600 mb-6">
          ありがとうございます。決済が正常に処理されました。
          <br />
          登録手続きを続けてください。
        </p>

        <div className="bg-blue-50 rounded-lg p-4 text-sm text-gray-700">
          まもなく登録画面に自動的に遷移します...
        </div>
      </div>
    </div>
  );
}
