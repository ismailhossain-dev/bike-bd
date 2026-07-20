"use client";
import React, { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";

const DashboardWrapper = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    // Full screen height and dark background
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 relative h-screen overflow-hidden">
        <DashboardNavbar setIsSidebarOpen={setIsSidebarOpen}></DashboardNavbar>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar bg-[#031637]">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardWrapper;
