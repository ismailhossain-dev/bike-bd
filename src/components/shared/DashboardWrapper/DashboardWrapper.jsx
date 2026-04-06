"use client";
import React, { useState } from "react";
import { Menu, Bell, UserCircle } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar";

const DashboardWrapper = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    // Full screen height and dark background
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 relative h-screen overflow-hidden">
        {/* Modern Glassmorphic Header */}
        <header className="h-20 bg-[#0f0f0f]/60 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-400 hover:bg-white/5 rounded-xl transition-colors"
            >
              <Menu size={24} />
            </button>
            <h2 className="hidden md:block text-sm font-medium tracking-widest uppercase text-slate-500">
              System / <span className="text-white">Dashboard</span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            {/* Notification */}
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-[#0f0f0f]"></span>
            </button>

            {/* Profile */}
            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-white">Sabbir Ahmed</p>
                <p className="text-[10px] text-slate-500">Pro Member</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-[2px]">
                <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                  <UserCircle size={24} className="text-slate-400" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardWrapper;
