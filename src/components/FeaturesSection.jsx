"use client";
import React from "react";

export const FeaturesSection = () => {
  const features = [
    { title: "GPS Tracking", desc: "Real-time bike tracking with pinpoint accuracy and smart anti-theft alerts.", icon: "📍", count: "01" },
    { title: "Super Charging", desc: "Next-gen flash charging technology to power your ride in less than 20 minutes.", icon: "⚡", count: "02" },
    { title: "Increasing Speed", desc: "A custom fine-tuned powertrain engineered for raw and high-performance track agility.", icon: "🚀", count: "03" },
    { title: "Powerful Tire", desc: "All-weather hyper-grip compound tires for maximum traction and high-speed stability.", icon: "🛞", count: "04" },
  ];

  return (
    <section className="bg-[#fcfcfd] py-28 px-6 md:px-12 lg:px-20 text-left relative overflow-hidden antialiased font-sans">
      {/* Dynamic Background Premium Accents */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-orange-100/40 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-50/50 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Content Section */}
         <div className="flex flex-col items-center justify-center text-center mt-16 mb-12 px-4">
          {/* ছোট ট্যাগলাইন */}
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-600 mb-2">
            Most Popular
          </span>

          {/* মেইন টাইটেল (গ্রেডিয়েন্ট এবং বোল্ড ফন্ট সহ) */}
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 uppercase">
            Our Feature{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Service
            </span>
          </h2>
        </div>
        {/* Premium Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-[2.5rem] border border-gray-200/60 hover:border-orange-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_30px_60px_rgba(234,88,12,0.08)] transition-all duration-500 flex flex-col justify-between relative overflow-hidden min-h-[340px]"
            >
              {/* Subtle background card pattern */}
              <div className="absolute top-6 right-8 text-7xl font-black text-gray-50 select-none tracking-tighter group-hover:text-orange-50/40 transition-colors duration-500">
                {item.count}
              </div>

              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 mb-8 bg-gray-50 border border-gray-100 text-2xl rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-orange-600 group-hover:border-orange-600 group-hover:text-white shadow-sm shadow-gray-100">
                  <span className="transition-transform duration-500 group-hover:scale-110">
                    {item.icon}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="font-black text-xl mb-3 text-gray-900 tracking-tight group-hover:text-orange-600 transition-colors duration-300">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium pr-4">
                  {item.desc}
                </p>
              </div>

              {/* Action Button/Arrow Link */}
              <div className="mt-8 pt-4 border-t border-gray-50 flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-gray-400 group-hover:text-orange-600 transition-colors duration-300 cursor-pointer">
                <span>Discover Feature</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};