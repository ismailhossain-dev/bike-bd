import { dbConnect } from "@/lib/dbConnect"
import { NextResponse } from "next/server"
import { toast } from "react-toastify"

export async function POST (req) {
    try {
        const cartData = await req.json()
        const isExistCart = await dbConnect("cart").findOne({
            email: cartData.email,
            productId: cartData.productId
        })

        if(isExistCart){
            
            return NextResponse.json(
                toast.warning("This item already exists in your Cart"),{
                
                message: "This item already exists in your Cart",
            },{status: 400})
        }

        const result = await dbConnect("cart").insertOne(cartData)

        return NextResponse.json({
            // response gola amr toast mordome data cart button e 
            message: "Successfully added to Cart",
            result
        }, {status: 200})
    } catch (error) {
        console.log(error)

        return NextResponse.json({
            message: "Already Cart Exist",
            error: error.message
        },
    {status: 500})
    }
}