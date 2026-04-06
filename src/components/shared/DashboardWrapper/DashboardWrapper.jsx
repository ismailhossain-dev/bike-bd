"use client";
import React, { useState } from "react";

import { Menu, Bell } from "lucide-react";

import Image from "next/image";

import Sidebar from "../Sidebar/Sidebar";

const DashboardWrapper = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // console.log(user, 'dashboard wrapper');

  return (
    <div className="min-h-screen flex">
      {/* Sidebar - Client Logic handled inside */}

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b-2 border-primary/50 flex items-center justify-between px-6 sticky top-0 z-30">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden cursor-pointer p-2 text-gray-600"
          >
            <Menu size={24} />
          </button>

          <h2 className="hidden md:block text-lg font-bold text-gray-800">Admin Dashboard</h2>

          {/* <div className="flex items-center gap-4">
            <button
              className="p-2 text-gray-400 hover:text-primary cursor-pointer relative"
              onClick={() => setIsNotifOpen(true)}
            >
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div
              className="w-10 h-10 rounded-full border-2 border-primary/20 cursor-pointer p-0.5"
              title={user?.displayName || "Admin"}
            >
              <Image
                width={100}
                height={100}
                src={user?.photoURL || "/profile.png"}
                className="rounded-full w-full h-full"
                alt="profile"
              />
            </div>
          </div> */}
        </header>

        {/* Dynamic Page Content */}
        <main className="p-4 md:p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardWrapper;
