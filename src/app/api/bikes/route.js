import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
  const result = await dbConnect("bikeData").find().limit(8).toArray();
  return NextResponse.json({message: "Homes bike data successfully", result, status: 200})
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: "home bikes data filed", error: error.message ,status: 200})
  }
}

//single data for home page
