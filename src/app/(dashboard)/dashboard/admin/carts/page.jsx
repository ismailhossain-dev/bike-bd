import CartTable from "@/components/AdminDashboard/Tables/CartsTable/CartsTable";
import React from "react";

const Cartspage = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/cart`,
  );
  const data =await result.json();
  const cartData = data.data;

  return <div>
    <CartTable cartData={cartData}></CartTable>
  </div>;
};

export default Cartspage;
