import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 5;

    const skip = (page - 1) * limit;

    const collection = await dbConnect("bikeData");

    const totalBikes = await collection.countDocuments({});

    const result = await collection
      .find(
        {},
        {
          projection: {
            name: 1,
            image: 1,
            price: 1,
            rating: 1,
            category: 1,

            brand: 1,
          },
        },
      )
      .skip(skip)
      .limit(limit)
      .toArray();

    return NextResponse.json(
      {
        message: "All bikes API get successfully",
        result,
        total: totalBikes,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "All bikes get failed", error: error.message },
      { status: 500 },
    );
  }
}
