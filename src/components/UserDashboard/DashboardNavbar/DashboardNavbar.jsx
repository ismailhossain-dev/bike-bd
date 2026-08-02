"use client";

import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Menu, Bell, User as UserIcon, ShieldCheck } from "lucide-react";

function DashboardNavbar({ setIsSidebarOpen }) {
  const { data: session } = useSession();

  return (
    <header className="h-20 bg-[#141620]/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-30 font-sans text-white">
      {/* Left Section: Mobile Menu Toggle & Breadcrumbs */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors cursor-pointer"
          aria-label="Open sidebar"
        >
          <Menu size={22} />
        </button>

        <div className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
          <span>System</span>
          <span>/</span>
          <span className="text-red-500">Dashboard</span>
        </div>
      </div>

      {/* Right Section: Notifications & Dynamic User Profile */}
      <div className="flex items-center gap-4 sm:gap-6">
        
        {/* Notification Bell */}
        <button className="relative p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors cursor-pointer">
          <Bell size={20} />
          {/* Red Pulse Notification Ping */}
          <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
          </span>
        </button>

        {/* User Profile Card */}
        <div className="flex items-center gap-3 pl-4 border-l border-white/10">
          
          {/* User Text Info (Name & Role) */}
          <div className="text-right hidden sm:block">
            <div className="flex items-center justify-end gap-1.5">
              <p className="text-xs font-black uppercase tracking-tight text-white leading-none">
                {session?.user?.name || "Rider Member"}
              </p>
              <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
            </div>
            <p className="text-[10px] text-gray-400 font-medium truncate max-w-[150px] mt-0.5">
              {session?.user?.email || "rider@garage.com"}
            </p>
          </div>

          {/* User Avatar Image (Dynamic Next.js Image) */}
          <div className="relative w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-red-600 to-red-900 shadow-md">
            <div className="w-full h-full rounded-full bg-[#0b0c10] overflow-hidden relative flex items-center justify-center">
              {session?.user?.image ? (
                <Image
                  src={session.user.image}
                  alt={session?.user?.name || "User Profile"}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <UserIcon size={20} className="text-gray-400" />
              )}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default DashboardNavbar;