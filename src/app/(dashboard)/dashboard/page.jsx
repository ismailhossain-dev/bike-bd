"use client";
import React from "react";
import {
  TrendingUp,
  Bike,
  CheckCircle2,
  Clock,
  ChevronRight,
  Zap,
  ShieldCheck,
  Gauge,
  Wrench,
} from "lucide-react";
import OrdersChart from "@/components/UserDashboard/Chart/OrdersChart";

const DashboardPage = () => {
  // 1. Premium User Activity & Service Stats
  const statsData = [
    {
      label: "Orders)",
      value: "2 Bikes",
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      border: "border-emerald-500/30 hover:border-emerald-500/80",
    },
    {
      label: "WishList",
      value: "03 Bikes",
      icon: <Bike className="w-5 h-5 text-sky-400" />,
      border: "border-sky-500/30 hover:border-sky-500/80",
    },
    {
      label: "Cart",
      value: "2 Bikes",
      icon: <Zap className="w-5 h-5 text-indigo-400" />,
      border: "border-indigo-500/30 hover:border-indigo-500/80",
    },
    
  ];

  

  return (
    <main className="min-h-screen text-slate-200 bg-[#050505] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
      

        {/* --- Top Summary Stats Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`bg-[#0f0f0f] border-b-2 ${stat.border} p-6 rounded-2xl transition-all duration-300 hover:bg-[#151515] hover:-translate-y-1 shadow-xl shadow-black/40`}
            >
              <div className="flex justify-between items-start mb-4">
                <p className="text-[11px] text-slate-400 uppercase font-bold tracking-widest">
                  {stat.label}
                </p>
                <div className="p-2 bg-white/5 rounded-lg">{stat.icon}</div>
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight">{stat.value}</h2>
            </div>
          ))}
        </div>

        {/* User Orders / Riding Analytics Chart Section */}
        <div className="mb-12 bg-[#0f0f0f] p-6 rounded-[2rem] border border-white/5 shadow-2xl shadow-black/50">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white tracking-tight">Your Order & Maintenance Trends</h3>
            <p className="text-xs text-slate-500">Track your past retail orders and maintenance schedules over the last few weeks.</p>
          </div>
          <OrdersChart />
        </div>

        {/* --- My Garage Section --- */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
              My Fleet Status
            </h2>
            <button className="text-xs font-bold text-blue-500 hover:text-blue-400 flex items-center gap-1 transition-all">
              Manage Garage <ChevronRight className="w-3 h-3" />
            </button>
          </div>

    
        </div>

        {/* --- Recent Activity Section --- */}
        <div className="bg-[#0f0f0f] border border-white/5 rounded-[2rem] p-8 shadow-2xl shadow-black/50 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Live Service Status & Tracking</h3>
              <p className="text-xs text-slate-500">
                Track your active bike repairs or parts installations from our technicians live.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-600/10 text-blue-400 text-[10px] font-bold rounded-full border border-blue-500/20 animate-pulse">
                SYNCED WITH MECHANIC
              </span>
            </div>
          </div>

          {/* Chart/Timeline Placeholder Box */}
          <div className="h-64 w-full bg-gradient-to-b from-white/[0.02] to-transparent rounded-2xl border border-dashed border-white/10 flex items-center justify-center">
            <p className="text-slate-500 font-mono text-xs italic tracking-widest uppercase">
              Service Milestones & Progress Timeline Area
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default DashboardPage;