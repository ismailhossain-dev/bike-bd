"use client";
import React from "react";
import Link from "next/link";
import { MoveLeft, Home, FileQuestion } from "lucide-react";

const Error404 = () => {
  return (
    // min-h-screen এর সাথে h-auto এবং ম্যাক্সিমাম হাইট সেট করে স্ক্রিন ফিট নিশ্চিত করা হয়েছে
    <div className="min-h-screen w-full flex items-center justify-center bg-[#ffffff] px-4 py-8 relative overflow-hidden font-sans">
      
      {/* ব্যাকগ্রাউন্ড ব্লার গ্লো - সাইজ কিছুটা কমানো হয়েছে */}
      <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-blue-50/80 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-indigo-50/80 rounded-full blur-[100px]" />

      {/* কন্টেইনার ম্যাক্স-উইডথ (max-w-xl) করে ল্যাপটপ ভিউ পারফেক্ট সাইজে আনা হয়েছে */}
      <div className="max-w-xl w-full text-center z-10 my-auto">
        
        {/* আইকন সেকশন - রেসপন্সিভ সাইজিং */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            
            {/* মোবাইল: 24 (96px), ল্যাপটপ: 28 (112px) */}
            <div className="relative h-24 w-24 md:h-28 md:w-28 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-[0_15px_35px_-10px_rgba(37,99,235,0.12)] transition-transform duration-500 group-hover:scale-105">
              <FileQuestion className="w-10 h-10 md:w-12 md:h-12 text-blue-600" strokeWidth={1.5} />
              <div className="absolute top-3 right-3 h-2.5 w-2.5 bg-blue-500 rounded-full animate-ping" />
            </div>
          </div>
        </div>

        {/* ৪০৪ স্ট্যাটাস কোড - সাইজ নিয়ন্ত্রণে আনা হয়েছে (মোবাইল: 90px, ল্যাপটপ: 140px) */}
        <div className="relative mb-4 md:mb-6 select-none">
          <h1 className="text-[90px] sm:text-[120px] md:text-[140px] font-black leading-none tracking-tighter text-white font-sans [text-shadow:_-1px_-1px_0_#e2e8f0,_1px_-1px_0_#e2e8f0,_-1px_1px_0_#e2e8f0,_1px_1px_0_#e2e8f0]">
            404
          </h1>
          
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-mono text-xs sm:text-sm md:text-base tracking-[0.4em] sm:tracking-[0.5em] font-extrabold uppercase whitespace-nowrap">
            Route Not Found
          </p>
        </div>

        {/* টেক্সট কন্টেন্ট */}
        <div className="space-y-2 md:space-y-3 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight">
            Well, this is <span className="text-blue-600">unexpected</span>.
          </h2>
          <p className="max-w-md mx-auto text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed">
            The page you're trying to access seems to have evaporated. Double-check the URL or let us guide you back home.
          </p>
        </div>

        {/* অ্যাকশন বাটন - মোবাইলে ফুল উইডথ, ল্যাপটপে পাশাপাশি ও প্রোপার প্যাডিং */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-[0_10px_20px_-3px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group text-xs sm:text-sm md:text-base"
          >
            <Home size={16} className="group-hover:animate-pulse" />
            Return Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-3.5 bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold rounded-full border border-gray-200 shadow-sm transition-all duration-300 hover:border-gray-300 active:scale-95 text-xs sm:text-sm md:text-base"
          >
            <MoveLeft size={16} />
            Go Back
          </button>
        </div>

        {/* বটম ডিভাইডার */}
        <div className="mt-10 md:mt-12 w-16 h-1 bg-gray-100 mx-auto rounded-full" />
      </div>
    </div>
  );
};

export default Error404;