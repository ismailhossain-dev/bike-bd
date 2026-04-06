import DashboardWrapper from "@/components/shared/DashboardWrapper/DashboardWrapper";
import React from "react";

export const metadata = {
  title: "Admin Dashboard | Expert Gaming Shop",
  description: "Manage your game top-ups and orders by admin",
};

const DashboardLayout = ({ children }) => {
  return <DashboardWrapper>{children}</DashboardWrapper>;
};

export default DashboardLayout;
