"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingBag, User, Settings, LogOut, Gamepad2, X } from "lucide-react";
import { IoIosNotifications } from "react-icons/io";
const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Orders", path: "/dashboard/orders", icon: ShoppingBag },
  { name: "Notifications", path: "/dashboard/notifications", icon: IoIosNotifications },
  // { name: "Profile", path: "/dashboard/profile", icon: User },
  { name: "Settings", path: "/dashboard/settings", icon: Settings },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  return (
    <aside
      className={`
            fixed top-0 left-0 z-50 
            w-72 h-screen bg-white/80 backdrop-blur-md  /* h-screen দিয়ে হাইট ফিক্স করা হয়েছে */
            border-r-2 border-primary/50 
            transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
            lg:translate-x-0 lg:sticky lg:top-0 /* ডেক্সটপে স্ক্রল করলে যাতে আটকে থাকে */
            transition-transform duration-300 ease-in-out 
            flex flex-col
        `}
    >
      <div className="p-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/80 rounded-md flex items-center justify-center text-white shadow-lg shadow-primary/30">
            <Gamepad2 size={24} />
          </div>
          <span className="text-xl font-bold text-gray-800 tracking-tight">Expert Shop</span>
        </Link>
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden p-1 cursor-pointer text-gray-400"
        >
          <X size={24} />
        </button>
      </div>

      {/* divider */}
      <div className="w-full h-0.5 bg-primary/50"></div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-md font-semibold transition-all ${
              pathname === item.path
                ? "bg-primary text-white shadow-lg"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            <item.icon size={20} />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-50">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-red-500 font-bold hover:bg-red-50 rounded-xl transition-all">
          <LogOut size={20} /> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
