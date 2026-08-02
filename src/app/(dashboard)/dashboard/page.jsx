"use client";
import React from "react";
import {
  TrendingUp,
  Bike,
  Zap,
  ChevronRight,
  ShieldCheck,
  Wrench,
  Clock,
  Compass,
} from "lucide-react";
import OrdersChart from "@/components/UserDashboard/Chart/OrdersChart";
import Link from "next/link";

const DashboardPage = () => {
  // 1. Premium Bike Fleet & Order Stats Data
  const statsData = [
    {
      label: "Total Orders",
      value: "02 Bikes",
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      border: "border-emerald-500/30 hover:border-emerald-500/80",
    },
    {
      label: "Wishlist Bikes",
      value: "03 Bikes",
      icon: <Bike className="w-5 h-5 text-sky-400" />,
      border: "border-sky-500/30 hover:border-sky-500/80",
    },
    {
      label: "Cart Items",
      value: "02 Items",
      icon: <Zap className="w-5 h-5 text-indigo-400" />,
      border: "border-indigo-500/30 hover:border-indigo-500/80",
    },
  ];

  // Mock Fleet Data for My Garage Section
  const myFleet = [
    {
      id: 1,
      model: "Yamaha R15 V4",
      type: "Sports Bike",
      mileage: "4,200 km",
      status: "Service Due",
      statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    },
    {
      id: 2,
      model: "Honda CBR 150R",
      type: "Street Sports",
      mileage: "1,850 km",
      status: "Ready to Ride",
      statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    },
  ];

  return (
    <main className="min-h-screen text-slate-200 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* --- Top Summary Stats Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`bg-[#141620] border border-white/5 border-b-2 ${stat.border} p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/40`}
            >
              <div className="flex justify-between items-start mb-4">
                <p className="text-[11px] text-slate-400 uppercase font-bold tracking-widest">
                  {stat.label}
                </p>
                <div className="p-2.5 bg-white/5 rounded-xl border border-white/5">{stat.icon}</div>
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight">{stat.value}</h2>
            </div>
          ))}
        </div>

        {/* --- User Orders & Riding Analytics Chart Section --- */}
        <div className="bg-[#141620] p-6 sm:p-8 rounded-[2rem] border border-white/10 shadow-2xl shadow-black/50">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">Your Order & Maintenance Trends</h3>
              <p className="text-xs text-slate-400">Track your past retail orders and bike service schedules over recent weeks.</p>
            </div>
            <span className="px-3 py-1.5 bg-red-600/10 text-red-500 text-[10px] font-black uppercase tracking-wider rounded-xl border border-red-500/20 self-start sm:self-auto">
              Live Analysis
            </span>
          </div>
          <OrdersChart />
        </div>

        {/* --- My Garage Section (Bike Fleet) --- */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              My Fleet Status (Garage)
            </h2>
            <Link
              href="/dashboard/garage"
              className="text-xs font-bold text-red-500 hover:text-red-400 flex items-center gap-1 transition-all"
            >
              Manage Garage <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myFleet.map((bike) => (
              <div
                key={bike.id}
                className="bg-[#141620] border border-white/10 p-6 rounded-3xl flex items-center justify-between shadow-xl group hover:border-red-500/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-105 transition-transform">
                    <Bike className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-500">
                      {bike.type}
                    </span>
                    <h4 className="text-base font-black text-white">{bike.model}</h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                      <Compass className="w-3.5 h-3.5 text-slate-500" /> Mileage: {bike.mileage}
                    </p>
                  </div>
                </div>

                <div className="text-right space-y-2">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${bike.statusColor} inline-block`}>
                    {bike.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Live Service Status & Tracking Section --- */}
        <div className="bg-[#141620] border border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-2xl shadow-black/50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Live Service Status & Tracking</h3>
              <p className="text-xs text-slate-400">
                Track your active bike repairs, tuning, or spare parts installations from our expert technicians live.
              </p>
            </div>
            <div>
              <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-wider rounded-xl border border-emerald-500/20 flex items-center gap-1.5 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                SYNCED WITH MECHANIC
              </span>
            </div>
          </div>

          {/* Service Milestones Content Placeholder */}
          <div className="h-64 w-full bg-[#0b0c10] rounded-2xl border border-dashed border-white/10 flex flex-col items-center justify-center text-center p-6 space-y-2">
            <Wrench className="w-8 h-8 text-slate-600 animate-bounce" />
            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">
              No Active Maintenance Running Right Now
            </p>
            <p className="text-slate-500 text-[11px]">
              Drop your bike at our service center or book a slot to track real-time progress here.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default DashboardPage;