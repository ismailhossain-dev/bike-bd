import WishlistTable from "@/components/AdminDashboard/Tables/WishlistTable/WishlistTable";
import React from "react";

//used for render build eror in vercel
export const dynamic = 'force-dynamic';

const WishlistPage = async () => {
  let wishlist = [];

  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/wishlist`,
      { cache: "no-store" }
    );

    const data = await result.json();
    wishlist = data.data || [];
  } catch (error) {
    console.error("Failed to fetch wishlist data:", error);
  }

  return (
    <div className="w-full">
      <WishlistTable wishlist={wishlist} />
    </div>
  );
};

export default WishlistPage;