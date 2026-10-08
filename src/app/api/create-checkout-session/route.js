import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { items, email } = body;

    // Validate items
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 });
    }

    // Create Stripe line items
    const lineItems = items.map((item) => ({
      price_data: {
        currency: "usd",

        product_data: {
          name: item.name,

          // Stripe expects an array of image URLs
          images: item.image ? [item.image] : [],
        },

        // Stripe uses the smallest currency unit
        unit_amount: Math.round(Number(item.price) * 100),
      },

      quantity: Number(item.quantity) || 1,
    }));

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      line_items: lineItems,

      mode: "payment",

      customer_email: email || undefined,

      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,

      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,

      metadata: {
        productNames: items.map((item) => item.name).join(", "),
        productImages: items.map((item) => item.image).join(", "),
      },
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error("Stripe Error:", error);

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Payment failed",
      },
      {
        status: 500,
      },
    );
  }
}
