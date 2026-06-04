import DashboardWrapper from "@/components/UserDashboard/DashboardWrapper/DashboardWrapper";
import React from "react";

export const metadata = {
  title: "User Dashboard | Bike Shop",
  description: "  orders by user",
};

const DashboardLayout = ({ children }) => {
  return <DashboardWrapper>{children}</DashboardWrapper>;
};

export default DashboardLayout;
