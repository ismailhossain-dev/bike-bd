
import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET () {
    try {
        const result = await dbConnect("ourProducts").find().toArray();
        return NextResponse.json({
              data: result, 
            meessage: "our products get successfully"
        }, {status: 200})
    } catch (error) {
        console.log(error);
        NextResponse.json({
          
            message: "our products get failed",
            error: error.message
        }, {status: 500})
    }
}