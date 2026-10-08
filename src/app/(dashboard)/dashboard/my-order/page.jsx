"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import axios from "axios";

import Loading from "@/components/Loading/Loading";
import OrderTable from "@/components/UserDashboard/Tables/OrderTable/OrderTable";

const DashboardMyOrders = () => {
  const { data: session } = useSession();

  const email = session?.user?.email;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["orders", email],

    queryFn: async () => {
      const res = await axios.get(
        `/api/payment-success?email=${email}`
      );

      return res.data;
    },

    enabled: !!email,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Failed to load orders</div>;
  }

  return (
    <div>
      <OrderTable orderData={data?.data || []} />
    </div>
  );
};

export default DashboardMyOrders;