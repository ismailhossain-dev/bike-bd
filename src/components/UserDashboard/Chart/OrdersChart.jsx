"use client"
import React from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Weekly Bike Orders Data (Bangla)
const data = [
  { week: 'সপ্তাহ ১', orders: 590, revenue: 1400, target: 800 },
  { week: 'সপ্তাহ ২', orders: 868, revenue: 1506, target: 967 },
  { week: 'সপ্তাহ ৩', orders: 1397, revenue: 989, target: 1098 },
  { week: 'সপ্তাহ ৪', orders: 1480, revenue: 1228, target: 1200 },
  { week: 'সপ্তাহ ৫', orders: 1520, revenue: 1100, target: 1108 },
  { week: 'সপ্তাহ ৬', orders: 1400, revenue: 1700, target: 680 },
];

const PremiumWeeklyOrdersChartDark = () => {
  return (
    <div 
      style={{ 
        width: '100%', 
        maxWidth: '800px', 
        height: '400px', 
        // Dark background with a slight subtle border to pop on pure black websites
        background: '#0F172A', 
        padding: '24px', 
        borderRadius: '16px', 
        border: '1px solid #1E293B',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' 
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 15,
            right: 15,
            bottom: 10,
            left: -15,
          }}
        >
          {/* Subtle dark-mode grid lines */}
          <CartesianGrid stroke="#1E293B" vertical={false} strokeDasharray="3 3" />
          
          <XAxis 
            dataKey="week" 
            scale="band" 
            tick={{ fill: '#94A3B8', fontSize: 13 }} 
            axisLine={false}
            tickLine={false}
          />
          
          <YAxis 
            tick={{ fill: '#94A3B8', fontSize: 13 }} 
            axisLine={false}
            tickLine={false}
          />
          
          {/* Premium Glass-style Dark Tooltip */}
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1E293B', 
              borderRadius: '12px', 
              color: '#F8FAFC', 
              border: '1px solid #334155',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
            }}
            labelStyle={{ color: '#38BDF8', fontWeight: 'bold', marginBottom: '4px' }}
            formatter={(value, name) => {
              if (name === 'revenue') return [`৳${value}`, 'মোট রাজস্ব'];
              if (name === 'orders') return [value, 'অর্ডার সংখ্যা'];
              if (name === 'target') return [value, 'লক্ষ্যমাত্রা'];
              return [value, name];
            }}
          />
          
          {/* Legend customized for Dark Mode */}
          <Legend 
            verticalAlign="top" 
            height={40}
            formatter={(value) => {
              if (value === 'revenue') return <span style={{ color: '#E2E8F0', fontWeight: 500, fontSize: '14px' }}>মোট রাজস্ব</span>;
              if (value === 'orders') return <span style={{ color: '#E2E8F0', fontWeight: 500, fontSize: '14px' }}>অর্ডার সংখ্যা</span>;
              if (value === 'target') return <span style={{ color: '#E2E8F0', fontWeight: 500, fontSize: '14px' }}>লক্ষ্যমাত্রা</span>;
              return value;
            }}
          />
          
          {/* Glow / Gradient effects for a vibrant look on dark backgrounds */}
          <defs>
            <linearGradient id="darkColorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#38BDF8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="darkColorBar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1"/>
              <stop offset="100%" stopColor="#4F46E5"/>
            </linearGradient>
          </defs>

          {/* Area Chart: Revenue (Cyan Glow) */}
          <Area type="monotone" dataKey="revenue" fill="url(#darkColorRevenue)" stroke="#38BDF8" strokeWidth={2.5} />
          
          {/* Bar Chart: Orders (Vibrant Violet/Indigo Gradient) */}
          <Bar dataKey="orders" barSize={24} fill="url(#darkColorBar)" radius={[6, 6, 0, 0]} />
          
          {/* Line Chart: Target Trend (Neon Orange/Amber) */}
          <Line type="monotone" dataKey="target" stroke="#F59E0B" strokeWidth={3} dot={{ r: 4, fill: '#0F172A', stroke: '#F59E0B', strokeWidth: 2 }} activeDot={{ r: 6 }} />
          
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PremiumWeeklyOrdersChartDark;