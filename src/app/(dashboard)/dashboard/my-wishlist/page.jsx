import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import WishListTable from '@/components/UserDashboard/Tables/WishlistTable/WishlistTable';
import { getServerSession } from 'next-auth';
import React from 'react';

async function MyWishlistPage() {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
        return <div className="text-white text-center py-10">Please login to view your wishlist.</div>;
    }

    // Wishlist variable-ti try-er baire declare kora holo
    let wishlist = [];

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist?email=${session.user.email}`,
            { cache: 'no-store' }
        );

        const data = await res.json();
        wishlist = data.result || []; // data assign kora holo
    } catch (error) {
        console.log("wishlist page error ", error);
    }

console.log(wishlist);
    return (
        <div className="max-w-7xl mx-auto ">
            <WishListTable wishlist={wishlist}></WishListTable>
        </div>
    );
}

export default MyWishlistPage;