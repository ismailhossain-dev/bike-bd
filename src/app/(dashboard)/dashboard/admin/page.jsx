
import Overview from '@/components/AdminDashboard/Overview/page';
import React from 'react';

const AdminOverview = async () => {
  let overviewData = { users: 0, orders: 0, carts: 0, wishlist: 0 };

  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/overview`, {
      cache: "no-store",
    });
    const data = await result.json();
    if (data?.data) {
      overviewData = data.data;
    }
  } catch (error) {
    console.error("Failed to fetch overview data:", error);
  }

  return (
    <div className="w-full">
      <Overview data={overviewData} />
    </div>
  );
};

export default AdminOverview;