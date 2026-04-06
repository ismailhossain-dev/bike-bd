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

const DashboardPage = () => {
  // Bike Management Categories
  const bikeServices = [
    {
      id: 1,
      name: "Sport Bikes",
      count: "12 Models",
      icon: <Zap size={24} />,
      color: "from-orange-500 to-red-600",
    },
    {
      id: 2,
      name: "Cruiser Series",
      count: "08 Models",
      icon: <Bike size={24} />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 3,
      name: "Inventory Management",
      count: "45 Units",
      icon: <ShieldCheck size={24} />,
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: 4,
      name: "Maintenance Logs",
      count: "12 Pending",
      icon: <Wrench size={24} />,
      color: "from-pink-500 to-rose-600",
    },
    {
      id: 5,
      name: "Performance Tuning",
      count: "Active",
      icon: <Gauge size={24} />,
      color: "from-violet-500 to-purple-600",
    },
    {
      id: 6,
      name: "Customer Reviews",
      count: "4.8 Rating",
      icon: <TrendingUp size={24} />,
      color: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <main className="min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-black tracking-tight text-white italic">
            GARAGE{" "}
            <span className="text-blue-500 italic not-italic text-sm font-bold tracking-widest ml-2 uppercase opacity-70">
              Control Center
            </span>
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Welcome back, Chief. Here's what's happening with your fleet today.
          </p>
        </div>

        {/* --- Top Summary Stats --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              label: "Total Inventory",
              value: "142",
              icon: <Bike className="text-blue-500" />,
              border: "border-blue-500/50",
            },
            {
              label: "Revenue (MTD)",
              value: "৳ 8,45,200",
              icon: <TrendingUp className="text-emerald-500" />,
              border: "border-emerald-500/50",
            },
            {
              label: "Ready for Sale",
              value: "89",
              icon: <CheckCircle2 className="text-cyan-500" />,
              border: "border-cyan-500/50",
            },
            {
              label: "Service Pending",
              value: "14",
              icon: <Clock className="text-orange-500" />,
              border: "border-orange-500/50",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`bg-[#0f0f0f] border-b-2 ${stat.border} p-6 rounded-2xl transition-all duration-300 hover:bg-[#151515] hover:-translate-y-1 shadow-xl shadow-black/20`}
            >
              <div className="flex justify-between items-start mb-4">
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">
                  {stat.label}
                </p>
                <div className="p-2 bg-white/5 rounded-lg">{stat.icon}</div>
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight">{stat.value}</h2>
            </div>
          ))}
        </div>

        {/* --- Bike Categories Grid --- */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
            Fleet Categories
          </h2>
          <button className="text-xs font-bold text-blue-500 hover:underline">
            View All Details
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {bikeServices.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#0f0f0f] p-1 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] border border-white/5"
            >
              <div className="bg-[#0a0a0a] p-6 rounded-[1.9rem] flex items-center justify-between h-full border border-white/5">
                <div className="flex items-center space-x-5">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:rotate-12`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg leading-tight">{item.name}</h3>
                    <p className="text-xs text-slate-500 mt-1">{item.count}</p>
                  </div>
                </div>
                <div className="text-slate-700 group-hover:text-white transition-colors duration-300">
                  <ChevronRight size={20} />
                </div>
              </div>

              {/* Subtle hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          ))}
        </div>

        {/* --- Activity Section Placeholder --- */}
        <div className="bg-[#0f0f0f] border border-white/5 rounded-[2rem] p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Recent Stock Activity</h3>
              <p className="text-xs text-slate-500">
                Live monitoring of your bike inventory movements.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-600/10 text-blue-500 text-[10px] font-bold rounded-full border border-blue-500/20">
                LIVE UPDATE
              </span>
            </div>
          </div>

          {/* Chart Placeholder Box */}
          <div className="h-64 w-full bg-gradient-to-b from-white/[0.02] to-transparent rounded-2xl border border-dashed border-white/10 flex items-center justify-center">
            <p className="text-slate-600 font-mono text-xs italic tracking-widest uppercase">
              Inventory Analytics Chart Area
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
