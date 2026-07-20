import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
//ekane amra pagination er kaj ta korechi
export async function GET(request) {
  try {
    // ১. URL থেকে query string (page এবং limit) বের করা হচ্ছে
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 5;

    // কতগুলো ডেটা স্কিপ করতে হবে তার হিসাব
    const skip = (page - 1) * limit;

    // ২. ডাটাবেজ/কালেকশন কানেক্ট করা হচ্ছে
    const collection = await dbConnect("bikeData");

    // ৩. টোটাল কতগুলো বাইক আছে তা কাউন্ট করা (ফ্রন্টএন্ডে মোট পেজ দেখানোর জন্য)
    const totalBikes = await collection.countDocuments({});

    // ৪. নেটিভ ড্রাইভারের নিয়মে প্রজেকশন, স্কিপ ও লিমিট সহ ডেটা আনা হচ্ছে
    const result = await collection
      .find({}, {
        projection: {
          name: 1, 
          image: 1, 
          price: 1, 
          rating: 1, 
          category: 1
        }
      })
      .skip(skip)   // নির্দিষ্ট সংখ্যক ডেটা বাদ দেবে
      .limit(limit) // নির্দিষ্ট সংখ্যক ডেটা তুলে আনবে
      .toArray();

    // ৫. ফ্রন্টএন্ডে ডেটা, টোটাল কাউন্ট এবং সাকসেস মেসেজ রিটার্ন করা
    return NextResponse.json(
      { 
        message: "All bikes API get successfully", 
        result, 
        total: totalBikes 
      }, 
      { status: 200 }
    );
    
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "All bikes get failed", error: error.message }, 
      { status: 500 }
    );
  }
}