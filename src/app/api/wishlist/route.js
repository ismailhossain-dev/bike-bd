import { NextResponse } from "next/server"

export async function POST (req) {
    try {
        const wishlistData = await req.json()
        console.log("wishlist post data backend", wishlistData)
        return NextResponse.json({
            message: "wishlist insert successfully"
        }, {status : 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "wishlist insert failed",
            error: error.message
        }, {status: 500})
    }
}