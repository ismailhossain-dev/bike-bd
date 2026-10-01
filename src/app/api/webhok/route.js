import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req) {
  const sig = req.headers.get("stripe-signature");
  const rawBody = await req.text();

  let event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err) {
    console.error(`Webhook signature verification failed.`, err.message);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }


  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    try {
    
      const ordersCollection = await dbConnect("orders");

      await ordersCollection.insertOne({
        customerEmail: session.customer_email,
        amountTotal: session.amount_total / 100,
        paymentIntentId: session.payment_intent,
        paymentStatus: session.payment_status,
        productDetails: session.metadata?.productNames || "N/A",
        createdAt: new Date(),
      });

      console.log("Order saved to MongoDB successfully using custom dbConnect!");
    } catch (dbError) {
      console.error("Database save error:", dbError);
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
}