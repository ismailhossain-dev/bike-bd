import React from "react";

const BikeCardSkeleton = () => {
  return (
    <div className="flex flex-col bg-white border border-gray-100 rounded-3xl p-4 h-full animate-pulse shadow-[0_20px_50px_rgba(0,0,0,0.01)]">
      
      {/* ১. ইমেজ কন্টেইনার স্কেলেটন */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-200" />

      {/* ২. টেক্সট কন্টেন্ট সেকশন স্কেলেটন */}
      <div className="flex flex-1 flex-col pt-5 px-1 items-center text-center">
        
        {/* ক্যাটাগরি */}
        <div className="h-3 w-16 bg-gray-200 rounded-md mb-2" />

        {/* বাইকের নাম (২ লাইনের জন্য ২টা বার) */}
        <div className="h-4 w-5/6 bg-gray-200 rounded-md mb-2" />
        <div className="h-4 w-2/3 bg-gray-200 rounded-md" />

        {/* ছোট ডিভাইডার লাইন */}
        <div className="w-8 h-[1.5px] bg-gray-200 my-4" />

        {/* ৪. স্টার রেটিং এবং দাম */}
        <div className="mt-auto flex flex-col items-center gap-2 w-full">
          
          {/* রেটিং স্টার বার */}
          <div className="h-3 w-20 bg-gray-200 rounded-md" />

          {/* দাম */}
          <div className="h-5 w-24 bg-gray-300 rounded-md mt-1" />
        </div>

      </div>
    </div>
  );
};

export default BikeCardSkeleton;