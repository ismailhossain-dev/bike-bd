import OrderTable from '@/components/AdminDashboard/Tables/OrdesTable/OrdesTable';
import React from 'react';

const OrdersPage = async () => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/orders`, {
    cache: "no-store",
  });

  const data = await result.json(); 
  const orders = data.data || []; 

  return (
    <div className="py-6">
      <OrderTable orderData={orders} />
    </div>
  );
};

export default OrdersPage;