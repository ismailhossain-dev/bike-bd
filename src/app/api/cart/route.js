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

//cart get with query parameters 

export async function GET (req) {
    try {
        const {searchParams} = new URL(req.url);
        const email = searchParams.get("email")
        const result = await dbConnect("cart").find({email}).toArray()
        return NextResponse.json({
            result, 
            message: "cart get successfully"
        }, {status: 200})
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "cart get successfully",
            error: error.message
        }, {status: 500})
    }
}