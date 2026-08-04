import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import CartTable from '@/components/UserDashboard/Tables/CartTable/CartTable';
import { getServerSession } from 'next-auth';
import React from 'react';

const myCartPage = async() => {
    // http://localhost:3000/api/cart?email=programmarsabbir@gmail.com

    const session =await getServerSession(authOptions)
    console.log("cart user", session)
    let cartData = []
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart?email=${session?.user?.email}`,
             { cache: 'no-store' }
        )
        const data = await res.json();
        cartData = data.result || [];
    } catch (error) {
        console.log("cart page error client", error)
    }

    // console.log("hello cart data ", cartData)
    return (
        <div>
            <CartTable cartData={cartData}></CartTable>
        </div>
    );
};

export default myCartPage;