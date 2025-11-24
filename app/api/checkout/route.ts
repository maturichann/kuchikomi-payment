import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  return new Stripe(secretKey, {
    apiVersion: '2025-11-17.clover',
  });
}

export async function POST(request: NextRequest) {
  try {
    // 環境変数のチェック
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('STRIPE_SECRET_KEY is not configured');
      return NextResponse.json(
        { error: 'サーバー設定エラー: Stripe APIキーが設定されていません' },
        { status: 500 }
      );
    }

    if (!process.env.AGENCY_A_REGISTRATION_URL || !process.env.AGENCY_B_REGISTRATION_URL) {
      console.error('Agency registration URLs are not configured');
      return NextResponse.json(
        { error: 'サーバー設定エラー: 代理店URLが設定されていません' },
        { status: 500 }
      );
    }

    const stripe = getStripe();
    const { agency } = await request.json();

    if (!agency || !['a', 'b'].includes(agency)) {
      return NextResponse.json(
        { error: '無効な代理店が指定されました' },
        { status: 400 }
      );
    }

    const successUrl = agency === 'a'
      ? process.env.AGENCY_A_REGISTRATION_URL
      : process.env.AGENCY_B_REGISTRATION_URL;

    const cancelUrl = `${process.env.NEXT_PUBLIC_APP_URL}/payment/agency-${agency}`;

    console.log('Creating Stripe session with:', {
      agency,
      successUrl,
      cancelUrl,
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'jpy',
            product_data: {
              name: '口コミアシスト 初期費用',
              description: '口コミアシストツールの初期費用（税込）',
            },
            unit_amount: 33000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        agency: agency,
      },
    });

    console.log('Stripe session created successfully:', session.id);
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe error details:', error);

    // Stripeエラーの詳細を返す
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: `Stripeエラー: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: error instanceof Error ? error.message : '決済セッションの作成に失敗しました' },
      { status: 500 }
    );
  }
}
