'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AgencyBPaymentPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckout = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          agency: 'b',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '決済セッションの作成に失敗しました');
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('決済URLが取得できませんでした');
      }
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'エラーが発生しました');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">口コミアシスト</h1>
          <p className="text-gray-600">初期費用のお支払い</p>
        </div>

        <div className="bg-purple-50 rounded-xl p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-700 font-medium">初期費用</span>
            <span className="text-3xl font-bold text-purple-600">¥33,000</span>
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

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? '処理中...' : 'お支払いに進む'}
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Stripeの安全な決済システムを使用しています
        </p>
      </div>

      <footer className="mt-8 text-center">
        <div className="flex gap-6 justify-center text-sm text-gray-600">
          <Link href="/legal/tokusho" className="hover:text-purple-600 underline">
            特定商取引法に基づく表記
          </Link>
          <Link href="/legal/privacy" className="hover:text-purple-600 underline">
            プライバシーポリシー
          </Link>
        </div>
        <p className="text-xs text-gray-500 mt-2">© 2024 シンパートナーズ</p>
      </footer>
    </div>
  );
}
