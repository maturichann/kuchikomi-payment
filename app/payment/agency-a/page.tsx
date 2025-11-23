'use client';

import { useState } from 'react';

export default function AgencyAPaymentPage() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          agency: 'a',
        }),
      });

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">口コミアシスト</h1>
          <p className="text-gray-600">A代理店様専用</p>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-700 font-medium">初期費用</span>
            <span className="text-3xl font-bold text-blue-600">¥33,000</span>
          </div>
          <p className="text-sm text-gray-600">（税込）</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">口コミ管理機能</span>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">自動分析レポート</span>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">24時間サポート</span>
          </div>
        </div>

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? '処理中...' : 'お支払いに進む'}
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Stripeの安全な決済システムを使用しています
        </p>
      </div>
    </div>
  );
}
