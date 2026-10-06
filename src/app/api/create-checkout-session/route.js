import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export async function POST(req) {
  try {
    const body = await req.json();

    const { items, email } = body;

    const lineItems = items.map((item) => ({
      price_data: {
        currency: "usd",

        product_data: {
          name: item.name,
        },

        unit_amount: Math.round(item.price * 100),
      },

      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      line_items: lineItems,

      mode: "payment",

      customer_email: email || undefined,

      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,


      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,

      metadata: {
        productNames: items.map((item) => item.name).join(", "),
      },
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error("Stripe Error:", error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}