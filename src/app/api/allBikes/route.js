"use server";
import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

//All bike get api
export async function GET(request) {
 try {
     const result = await dbConnect("bikeData").find().toArray();
      NextResponse.json({
        message: "allbikes api get successfully",
        result,
      },{status: 200})
  
 } catch (error) {
    console.log(error)
    NextResponse.json({
      message: "allbikes data get failed",
      error: error.message
    }, {status: 500})
 }
}

//add form post api

export const addFormServer = async (payload) => {
  // console.log(payload);
  try {
    const result = await dbConnect("bikeData").insertOne(payload);

    return {
      success: true,
      message: "Data sent to MongoDB!",
    };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, error: error.message };
  }
};
