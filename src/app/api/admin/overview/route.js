import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const users = await dbConnect("users").countDocuments();
    const orders = await dbConnect("orders").countDocuments();
    const carts = await dbConnect("cart").countDocuments();
    const wishlist = await dbConnect("wishlist").countDocuments();

    return NextResponse.json({
      message: "Admin dashbord overview retrived successfully",
      data: {
        users,
        orders,
        carts,
        wishlist,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Admin dashbord overview retrived failed",
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
