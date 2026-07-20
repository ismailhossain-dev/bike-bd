import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function  GET(){
    try {
        const result = await dbConnect("bikeData").find({}, {
            projection: {
                name: 1, 
                image: 1, 
                category: 1, 
                rating: 1, 
                price: 1

            }
        }).limit(10).toArray()
        return NextResponse.json(
            {
                "message": "home product get successfully",
                result
            },
            {status : 200}
        )
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "product api get failed", error: error.message}, {status: 500})
    }
}