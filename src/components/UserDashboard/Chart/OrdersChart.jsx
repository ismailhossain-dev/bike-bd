"use client"
import React from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// 1-Year Fleet Performance & Logistics Telemetry (12 Months)
const data = [
  { month: 'Jan', orders: 420, revenue: 12500, target: 500 },
  { month: 'Feb', orders: 580, revenue: 16800, target: 600 },
  { month: 'Mar', orders: 750, revenue: 21400, target: 700 },
  { month: 'Apr', orders: 920, revenue: 25600, target: 850 },
  { month: 'May', orders: 1100, revenue: 31000, target: 1000 },
  { month: 'Jun', orders: 1350, revenue: 38500, target: 1200 },
  { month: 'Jul', orders: 1280, revenue: 36200, target: 1250 },
  { month: 'Aug', orders: 1450, revenue: 41000, target: 1300 },
  { month: 'Sep', orders: 1600, revenue: 45500, target: 1400 },
  { month: 'Oct', orders: 1520, revenue: 43200, target: 1450 },
  { month: 'Nov', orders: 1780, revenue: 51000, target: 1600 },
  { month: 'Dec', orders: 1950, revenue: 58000, target: 1800 },
];

const OrdersChart = () => {
  return (
    <div className="w-full bg-[#12151e] border border-white/[0.08] p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
      
      {/* Background Cyber Accents & Glow Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Chart Header Meta */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-rose-400 uppercase">
            Annual Telemetry Metrics
          </span>
          <h2 className="text-lg font-extrabold text-white tracking-tight">
            12-Month Performance Overview
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-white/[0.04] border border-white/10 text-slate-300">
            FY 2026
          </span>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="w-full h-[420px] relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              bottom: 5,
              left: -15,
            }}
          >
            {/* Subtle Grid Lines */}
            <CartesianGrid stroke="#1e2330" vertical={false} strokeDasharray="3 3" />
            
            <XAxis 
              dataKey="month" 
              tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'monospace' }} 
              axisLine={false}
              tickLine={false}
              dy={10}
            />
            
            <YAxis 
              tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'monospace' }} 
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value >= 1000 ? value / 1000 + 'k' : value}`}
            />
            
            {/* Custom Premium Glassmorphism Tooltip */}
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#0a0c10', 
                borderRadius: '14px', 
                color: '#f8fafc', 
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 25px 35px -5px rgba(0, 0, 0, 0.7)',
                fontSize: '12px',
                padding: '12px 16px'
              }}
              labelStyle={{ color: '#fb7185', fontWeight: 'bold', marginBottom: '8px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}
              formatter={(value, name) => {
                if (name === 'revenue') return [`$${value.toLocaleString()}`, 'Total Revenue'];
                if (name === 'orders') return [`${value.toLocaleString()} Units`, 'Fleet Orders'];
                if (name === 'target') return [`${value.toLocaleString()} Units`, 'Target Quota'];
                return [value, name];
              }}
            />
            
            {/* Elegant Motorsports Legend */}
            <Legend 
              verticalAlign="top" 
              height={45}
              formatter={(value) => {
                if (value === 'revenue') return <span className="text-slate-300 font-semibold text-xs tracking-wider uppercase mr-4">Revenue ($)</span>;
                if (value === 'orders') return <span className="text-slate-300 font-semibold text-xs tracking-wider uppercase mr-4">Orders (Units)</span>;
                if (value === 'target') return <span className="text-slate-300 font-semibold text-xs tracking-wider uppercase">Target Quota</span>;
                return value;
              }}
            />
            
            {/* Premium Gradients */}
            <defs>
              <linearGradient id="neonRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.0}/>
              </linearGradient>
              <linearGradient id="neonBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8"/>
                <stop offset="100%" stopColor="#0284c7"/>
              </linearGradient>
            </defs>

            {/* Area Chart: Revenue (Rose Neon Glow) */}
            <Area type="monotone" dataKey="revenue" fill="url(#neonRevenue)" stroke="#f43f5e" strokeWidth={3} />
            
            {/* Bar Chart: Orders (Sky Blue Racing Gradient) */}
            <Bar dataKey="orders" barSize={16} fill="url(#neonBar)" radius={[4, 4, 0, 0]} />
            
            {/* Line Chart: Target Trend (Amber Line) */}
            <Line type="monotone" dataKey="target" stroke="#fbbf24" strokeWidth={3} dot={{ r: 3, fill: '#12151e', stroke: '#fbbf24', strokeWidth: 2 }} activeDot={{ r: 6 }} />
            
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrdersChart;