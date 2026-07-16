"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingBag, Settings, LogOut, Gamepad2, X } from "lucide-react";
import { IoIosNotifications } from "react-icons/io";
import Logo from "@/components/Logo/Logo";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Manage Bikes", path: "/dashboard/manage-bikes", icon: ShoppingBag },
  { name: "Add Bike", path: "/dashboard/add-bike", icon: IoIosNotifications },
  { name: "Profile", path: "/dashboard/my-profile", icon: IoIosNotifications },
  { name: "Settings", path: "/dashboard/settings", icon: Settings },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
            fixed top-0 left-0 z-50 
            w-72 h-screen bg-[#0f0f0f] border-r border-white/5
            transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
            lg:translate-x-0 lg:sticky lg:top-0
            transition-transform duration-300 ease-in-out 
            flex flex-col
        `}
      >
        {/* Brand Logo */}
        <div className=" px-8 flex items-center justify-between">
         
            <Logo/>
          </div>
   
        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1.5 mt-4">
          <p className="px-4 text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] mb-4">
            Main Menu
          </p>
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600/10 text-blue-500 border border-blue-500/20 shadow-[0_0_15px_rgba(37,99,235,0.1)]"
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-100"
                }`}
              >
                <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="p-6 border-t border-white/5">
          <button className="group flex items-center gap-3 px-4 py-3.5 w-full text-slate-400 font-bold hover:bg-red-500/10 hover:text-red-500 rounded-xl transition-all duration-300">
            <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-red-500/20">
              <LogOut size={18} />
            </div>
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
