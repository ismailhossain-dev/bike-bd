import { dbConnect } from "@/lib/dbConnect"
import { NextResponse } from "next/server"

export async function POST (req) {
    try {

        const wishlistData = await req.json()

        const isExistWishlist = await dbConnect("wishlist").findOne({
            email: wishlistData.email,
            productId: wishlistData.productId
        })

        if(isExistWishlist){
            return NextResponse.json({
                message: "This item already exists in your wishlist"
            }, {status: 400})
        }

        const result = await dbConnect("wishlist").insertOne(wishlistData)
        // console.log("wishlist post data backend", wishlistData)
        return NextResponse.json({
            message: "wishlist insert successfully",
            result
        }, {status : 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "wishlist insert failed",
            error: error.message
        }, {status: 500})
    }
}