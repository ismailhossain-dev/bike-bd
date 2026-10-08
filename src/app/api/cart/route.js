import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { toast } from "react-toastify";

export async function POST(req) {
  try {
    const cartData = await req.json();
    const isExistCart = await dbConnect("cart").findOne({
      email: cartData.email,
      productId: cartData.productId,
    });

    if (isExistCart) {
      return NextResponse.json(
        toast.warning("This item already exists in your Cart"),
        {
          message: "This item already exists in your Cart",
        },
        { status: 400 },
      );
    }

    const result = await dbConnect("cart").insertOne(cartData);

    return NextResponse.json(
      {
        message: "Successfully added to Cart",
        result,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Already Cart Exist",
        error: error.message,
      },
      { status: 500 },
    );
  }
}

//cart get with query parameters

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const result = await dbConnect("cart").find({ email }).toArray();
    return NextResponse.json(
      {
        result,
        message: "Cart retrived successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Cart retrived failed...",
        error: error.message,
      },
      { status: 500 },
    );
  }
}
