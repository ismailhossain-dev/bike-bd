import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const collection = await dbConnect("cart");
    const result = await collection.find().toArray();
    return NextResponse.json(
      {
        message: "Cart retrived successfully...",
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
        message: "Cart retrived failed..",
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
