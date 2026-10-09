"use client";

import React from "react";
import Link from "next/link";
import {
  Users,
  ShoppingBag,
  ShoppingCart,
  Heart,
  TrendingUp,
} from "lucide-react";
import OrdersChart from "@/components/UserDashboard/Chart/OrdersChart";

const Overview = ({ data }) => {
  const { users = 0, orders = 0, carts = 0, wishlist = 0 } = data || {};

  // Dashboard Stats Card Array with exact routes from sidebar
  const statsCards = [
    {
      title: "Total Users",
      value: users,
      icon: <Users size={24} className="text-red-500" />,
      bgIcon: "bg-red-500/10 border-red-500/20",
      description: "Registered platform users",
      path: "/dashboard/admin/users",
    },
    {
      title: "Total Orders",
      value: orders,
      icon: <ShoppingBag size={24} className="text-emerald-500" />,
      bgIcon: "bg-emerald-500/10 border-emerald-500/20",
      description: "Successful checkouts",
      path: "/dashboard/admin/orders",
    },
    {
      title: "Active Carts",
      value: carts,
      icon: <ShoppingCart size={24} className="text-sky-500" />,
      bgIcon: "bg-sky-500/10 border-sky-500/20",
      description: "Items waiting in carts",
      path: "/dashboard/admin/carts",
    },
    {
      title: "Wishlist Items",
      value: wishlist,
      icon: <Heart size={24} className="text-amber-500" />,
      bgIcon: "bg-amber-500/10 border-amber-500/20",
      description: "Saved favorite items",
      path: "/dashboard/admin/wishlist",
    },
  ];

  return (
    <div className="w-full max-w-[1600px] mx-auto space-y-8">
      {/* ================= HEADER SECTION ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#141620] border border-white/10 p-6 sm:p-8 rounded-3xl shadow-xl">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Dashboard <span className="text-red-600">Overview</span>
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Welcome back, Admin! Here is the live summary of your platform
            activity.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          System Online
        </div>
      </div>

      {/* ================= STATS GRID WITH LINKS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, index) => (
          <Link
            key={index}
            href={card.path}
            className="bg-[#141620] border border-white/10 rounded-3xl p-6 shadow-xl hover:border-red-600/50 hover:bg-[#181b26] transition-all duration-300 group block cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${card.bgIcon} group-hover:scale-110 transition-transform`}
              >
                {card.icon}
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider group-hover:text-red-500 transition-colors">
                View All &rarr;
              </span>
            </div>

            <div>
              <h3 className="text-slate-400 text-sm font-medium">
                {card.title}
              </h3>
              <p className="text-3xl sm:text-4xl font-black text-white mt-1 tracking-tight group-hover:text-red-500 transition-colors">
                {card.value.toLocaleString()}
              </p>
              <p className="text-xs text-slate-500 mt-2">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* ================= QUICK INSIGHTS / BANNER ================= */}
      <div className="bg-gradient-to-r from-[#141620] to-[#0b0c10] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
            <TrendingUp size={20} className="text-red-500" />
            Platform Performance is Steady
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Monitor your users engagement, track incoming orders, and manage
            your inventory smoothly from the sidebar navigation.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/admin/orders"
            className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase text-xs tracking-widest py-3.5 px-6 rounded-xl shadow-lg shadow-red-600/20 transition-all active:scale-95 text-center"
          >
            Manage Orders
          </Link>
        </div>

        
      </div>
      {/* Order chat */}
        <OrdersChart />
    </div>
  );
};

export default Overview;
