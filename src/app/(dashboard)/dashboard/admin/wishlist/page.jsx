import WishlistTable from "@/components/AdminDashboard/Tables/WishlistTable/WishlistTable";
import React from "react";

const WishlistPage = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/wishlist`,
  );

  const data = await result.json();
  const wishlist = data.data;
  console.log(wishlist, "wishlist");

  return (
    <div>
      <WishlistTable wishlist={wishlist}></WishlistTable>
    </div>
  );
};

export default WishlistPage;
