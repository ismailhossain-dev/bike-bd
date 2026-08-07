"use client";
import React from "react";
import {
  TrendingUp,
  Bike,
  Zap,

  Wrench,
  Clock,
  Compass,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Activity
} from "lucide-react";
import OrdersChart from "@/components/UserDashboard/Chart/OrdersChart";
import Link from "next/link";

const DashboardPage = () => {
  // 1. Interactive Stats Cards with Specific Routes
  const statsData = [
    {
      label: "Total Fleet Orders",
      value: "02",
      unit: "Bikes",
      subText: "View order history",
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      path: "/dashboard/my-order",
    },
    {
      label: "Wishlist Garage",
      value: "03",
      unit: "Models",
      subText: "View saved models",
      icon: <Bike className="w-5 h-5 text-sky-400" />,
      badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
      path: "/dashboard/my-wishlist",
    },
    {
      label: "Active Cart Items",
      value: "02",
      unit: "Units",
      subText: "Review your cart",
      icon: <Zap className="w-5 h-5 text-indigo-400" />,
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      path: "/dashboard/my-cart",
    },
  ];

  // Professional Order Pipeline Breakdown
  const orderBreakdown = [
    {
      title: "Pending Dispatches",
      count: "01",
      status: "In Queue",
      desc: "Verification and logistics preparation underway",
      icon: <Clock className="w-5 h-5 text-amber-400" />,
      badgeBg: "bg-amber-400/10 text-amber-400 border-amber-400/20",
      path: "/dashboard/my-order?status=pending",
    },
    {
      title: "Fulfilled Deliveries",
      count: "01",
      status: "Archived",
      desc: "Successfully deployed to user garage",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
      badgeBg: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
      path: "/dashboard/my-order?status=delivered",
    },
  ];

 

  return (
    <main className="min-h-screen bg-[#0a0c10] text-slate-100  font-sans selection:bg-rose-600 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* --- Minimalist Header Control Center --- */}
        <div className="bg-[#12151e] border border-white/[0.06] p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-semibold tracking-wider uppercase">
              <Sparkles className="w-3 h-3" />
              <span>Telemetry Active</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Rider Operations Hub
            </h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Manage vehicle logistics, track hardware procurement, and monitor active service lifecycles.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/my-cart"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold uppercase tracking-wider text-slate-200 transition-all"
            >
              <Zap className="w-4 h-4 text-indigo-400" />
              <span>Cart (02)</span>
            </Link>
            <Link
              href="/dashboard/my-wishlist"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md shadow-rose-600/20"
            >
              <Bike className="w-4 h-4" />
              <span>Wishlist</span>
            </Link>
          </div>
        </div>

        {/* --- Clickable Metric Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {statsData.map((stat, idx) => (
            <Link
              key={idx}
              href={stat.path}
              className="group bg-[#12151e] border border-white/[0.06] hover:border-rose-500/40 p-5 rounded-2xl transition-all duration-200 hover:-translate-y-1 shadow-lg flex flex-col justify-between cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {stat.label}
                </span>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:scale-105 transition-transform">
                  {stat.icon}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black tracking-tight text-white">{stat.value}</span>
                  <span className="text-xs font-medium text-slate-400 uppercase">{stat.unit}</span>
                </div>
                <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between text-xs">
                  <span className="text-slate-400">{stat.subText}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-rose-400 transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* --- Order Pipeline Split View (Clickable) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {orderBreakdown.map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              className="group bg-[#12151e] border border-white/[0.06] hover:border-rose-500/40 p-5 rounded-2xl transition-all duration-200 hover:-translate-y-1 shadow-lg flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-[10px] text-slate-500 font-mono">[{item.status}]</span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-1">{item.desc}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 pl-3">
                <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border ${item.badgeBg}`}>
                  {item.count}
                </span>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </div>
            </Link>
          ))}
        </div>

        {/* --- Analytics Section --- */}
        <div className="bg-[#12151e] p-6 rounded-2xl border border-white/[0.06] shadow-xl">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.04] pb-4">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-rose-500" />
                <h3 className="text-sm font-bold text-white tracking-tight">Performance & Maintenance Telemetry</h3>
              </div>
              <p className="text-xs text-slate-400">Longitudinal analytics tracking vehicle operations.</p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-600/10 border border-rose-500/20 text-rose-400 rounded-lg text-[10px] font-mono font-bold uppercase w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              <span>Real-Time Sync</span>
            </div>
          </div>
          <OrdersChart />
        </div>

       
      

      </div>
    </main>
  );
};

export default DashboardPage;