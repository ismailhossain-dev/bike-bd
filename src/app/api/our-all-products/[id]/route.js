import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        // 1. params theke 'id' destructing kore niye asha
        const { id } = await params;
        console.log("product id server", id);

        // 2. Query object toiri kora
        const query = { _id: new ObjectId(id) };

        const result = await dbConnect("ourProducts").findOne(query);

        if (!result) {
            return NextResponse.json({
                message: "accessories product details data not found"
            }, { status: 404 });
        }

        // 4. Response-er sathe result-o pathiye dewa
        return NextResponse.json({
            message: "accessories product details data get successfully",
             result
        }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "accessories product details data get failed",
            error: error.message
        }, { status: 500 });
    }
}