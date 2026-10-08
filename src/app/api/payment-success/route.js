//payment data save in mongodb
import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});
export async function POST(req) {
  try {
    const { sessionId } = await req.json();
    if (!sessionId) {
      return NextResponse.json(
        {
          success: false,
          message: "Session Id is required",
        },
        {
          status: 400,
        },
      );
    }

    //finding payment session or transaction id  from stripe

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // console.log("payment session", session)

    if (session.payment_status !== "paid") {
      return NextResponse.json(
        {
          success: false,
          message: "Payment not completed",
        },
        { status: 400 },
      );
    }
    //=========save data in db====
    const ordersData = {
      transactionId: session.id,
      email: session.customer_email,
      amount: session.amount_total / 100,
      currency: session.currency,
    };
    const result = await dbConnect("orders").insertOne(ordersData);

    // console.log("Payment successful!");
    // console.log("Customer:", session.customer_email);
    // console.log("Session ID:", session.id);
    // console.log("Amount:", session.amount_total / 100);

    return NextResponse.json({
      success: true,
      message: "Payment successful",
      data: result,
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Payment verification failed!",
      },
      {
        status: 500,
      },
    );
  }
}
