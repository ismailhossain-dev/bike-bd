import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { items, email } = body; // ফ্রন্টএন্ড থেকে items এবং email রিসিভ করা

    const lineItems = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          // চাইলে এখানে images ও যুক্ত করতে পারেন: images: [item.image]
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    // Stripe Checkout Session তৈরি করা
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      customer_email: email || undefined, // এখানে ডিফল্ট ইমেইল সেট হয়ে যাবে
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      // ডাটাবেজে পরবর্তীতে সেভ করার জন্য metadata তে কিছু তথ্য পাস করে রাখা যায়
      metadata: {
        productNames: items.map(i => i.name).join(", ")
      }
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}