import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(request: NextRequest) {
  try {
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

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: '決済セッションの作成に失敗しました' },
      { status: 500 }
    );
  }
}
