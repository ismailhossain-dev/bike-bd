"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Bike,
  PlusCircle,
  User,
  LogOut,
  X,
  ChevronRight,
} from "lucide-react";
import Logo from "@/components/Logo/Logo";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "My wishlist", path: "/dashboard/my-wishlist", icon: Bike },
  { name: "My Cart", path: "/dashboard/my-cart", icon: PlusCircle },
  { name: "My Order", path: "/dashboard/my-order", icon: PlusCircle },
  { name: "My Profile", path: "/dashboard/my-profile", icon: User },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 
          w-72 h-screen bg-[#141620] border-r border-white/10
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:sticky lg:top-0
          transition-transform duration-300 ease-in-out 
          flex flex-col justify-between font-sans text-white
        `}
      >
        {/* Top Header & Logo */}
        <div>
          <div className="p-6 flex items-center justify-between border-b border-white/5">
            <Logo />
            {/* Mobile Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close sidebar"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="p-4 space-y-1.5 mt-2">
            <p className="px-4 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">
              Control Center
            </p>

            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 group ${
                    isActive
                      ? "bg-red-600/10 text-red-500 border border-red-500/20 shadow-[0_0_20px_rgba(220,38,38,0.15)]"
                      : "text-gray-400 hover:bg-white/5 hover:text-white border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={18}
                      className={
                        isActive
                          ? "text-red-500"
                          : "text-gray-400 group-hover:text-white transition-colors"
                      }
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                    <span>{item.name}</span>
                  </div>

                  {isActive && (
                    <ChevronRight size={14} className="text-red-500" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-white/5 space-y-2">
          {/* Logout Button */}
          <button className="group flex items-center gap-3 px-4 py-3 w-full text-xs font-bold uppercase tracking-wider text-gray-400 hover:bg-red-600/10 hover:text-red-500 rounded-xl transition-all duration-300 border border-transparent hover:border-red-500/20 cursor-pointer">
            <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-red-600/20 transition-colors">
              <LogOut
                size={16}
                className="text-gray-400 group-hover:text-red-500"
              />
            </div>
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
