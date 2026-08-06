import React from "react";

const BikeCardSkeleton = () => {
  return (
    <div className="bg-[#121212] border border-white/10 rounded-lg overflow-hidden flex flex-col relative animate-pulse">
      
      {/* ১. টপ টাইটেল ও অ্যাকশন আইকন স্কেলিটন */}
      <div className="flex items-center justify-between p-4 border-b border-white/5 bg-[#161616]">
        {/* টাইটেল বার */}
        <div className="h-5 bg-white/10 rounded w-3/5"></div>
        {/* মিনিমাল আইকন */}
        <div className="w-7 h-7 bg-white/10 rounded border border-white/10"></div>
      </div>

      {/* ২. ইমেজ সেকশন স্কেলিটন */}
      <div className="relative aspect-[16/10] w-full bg-black/40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>

      {/* ৩. স্পেসিফিকেশন গ্রিড স্কেলিটন */}
      <div className="p-4 grid grid-cols-2 gap-y-4 gap-x-2 border-t border-white/5 bg-[#121212]">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/10 rounded-full flex-shrink-0"></div>
            <div className="space-y-1.5 w-full">
              <div className="h-3.5 bg-white/10 rounded w-4/5"></div>
              <div className="h-2.5 bg-white/5 rounded w-2/5"></div>
            </div>
          </div>
        ))}
      </div>

      {/* ৪. প্রাইস এবং বাটন স্কেলিটন */}
      <div className="mt-auto p-4 border-t border-white/5 bg-[#161616] flex items-center justify-between gap-2">
        <div className="space-y-1.5 w-1/3">
          <div className="h-2 bg-white/5 rounded w-full"></div>
          <div className="h-5 bg-white/10 rounded w-4/5"></div>
        </div>

        {/* 'VIEW MORE' বাটনের জন্য */}
        <div className="h-9 bg-white/10 rounded w-24"></div>
      </div>

    </div>
  );
};

export default BikeCardSkeleton;