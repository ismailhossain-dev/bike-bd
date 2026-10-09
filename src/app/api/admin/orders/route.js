import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const collection = await dbConnect("orders");
    const result = await collection
      .find(
        {},
        {
          projection: {
            transactionId: 1,
            productNames: 1,
            email: 1,
            amount: 1,
            paymentStatus: 1, // Fixed syntax error here
            images: 1,
            createdAt: 1,
          },
        },
      )
      .toArray();
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
        message: "Orders retrived failed...",
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
