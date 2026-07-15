"use client";
import React from "react";

export const FeaturesSection = () => {
  // ফিচার ডাটা লিস্ট (খুবই সহজ উপায়ে সাজানো)
  const features = [
    { title: "GPS Tracking", desc: "Real time bike tracking system", icon: "📍" },
    { title: "Super Charging", desc: "Fast and reliable charging", icon: "⚡" },
    { title: "Increasing Speed", desc: "Optimized performance engine", icon: "🚀" },
    { title: "Powerful Tire", desc: "Durable and strong grip tire", icon: "🛞" },
  ];

  return (
    /* মূল সেকশন কন্টেইনার (সম্পূর্ণ লাইট/হোয়াইট ব্যাকগ্রাউন্ড) */
    <section className="bg-gray-50/50 py-24 px-6 md:px-20 text-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* ছোট সাব-হেডিং */}
        <p className="text-orange-600 font-extrabold tracking-[0.2em] uppercase text-xs mb-3">
          Why Choose Us
        </p>
        
        {/* মেইন হেডিং */}
        <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4 text-gray-900 tracking-tight">
          OUR FEATURES & <span className="text-orange-600">FACILITIES</span>
        </h2>
        
        {/* হেডিংয়ের নিচের সুন্দর ছোট ডিভাইডার */}
        <div className="w-16 h-[3px] bg-orange-600 mx-auto mb-16 rounded-full" />

        {/* ফিচার কার্ড গ্রিড লেআউট */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              /* হোয়াইট কার্ড ডিজাইন (সফট শ্যাডো ও হোভার ট্রানজিশন সহ) */
              className="group bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-orange-200 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(234,88,12,0.08)] transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* আইকন কন্টেইনার (হোভার করলে কালার চেইঞ্জ হবে) */}
              <div className="w-16 h-16 mx-auto mb-6 bg-orange-50 text-3xl rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-orange-600 group-hover:scale-110 group-hover:rotate-6">
                {/* হোভার করলে ইমোজি জুম করার ইফেক্ট */}
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
              </div>
              
              {/* ফিচার টাইটেল */}
              <h3 className="font-extrabold text-xl mb-3 text-gray-800 tracking-tight group-hover:text-orange-600 transition-colors duration-300">
                {item.title}
              </h3>
              
              {/* ফিচার ডেসক্রিপশন */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};