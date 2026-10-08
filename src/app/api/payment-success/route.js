// payment data save in mongodb

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

    // Find payment session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // console.log("Order information:", session);

    // Check payment status
    if (session.payment_status !== "paid") {
      return NextResponse.json(
        {
          success: false,
          message: "Payment not completed",
        },
        {
          status: 400,
        },
      );
    }

    // Get image and product information from metadata
    const productImages = session.metadata?.productImages || "";
    const productNames = session.metadata?.productNames || "";

    // Save payment data in MongoDB
    const ordersData = {
      transactionId: session.id,
      email: session.customer_email,
      productNames: productNames,
      images: productImages ? productImages.split(",") : [],
      amount: session.amount_total / 100,
      currency: session.currency,
      paymentStatus: session.payment_status,
      createdAt: new Date(),
    };

    const result = await dbConnect("orders").insertOne(ordersData);

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

//orders retrived

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    const result = await dbConnect("orders").find({ email }).toArray();

    return NextResponse.json(
      {
        message: "Orders retrived successfully",
        data: result,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Orders retrived failed..",
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
