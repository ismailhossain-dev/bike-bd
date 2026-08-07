"use client";

import React from "react";
import Link from "next/link";

const Banner = () => {
  const bannerData = {
    // আপনার পছন্দ অনুযায়ী ভিডিও লিংক পরিবর্তন করতে পারেন
    videoUrl: "/videos/bike-bd-video.mp4",
    tagline: "WELCOME TO AUTOBIKE",
    title: "GREAT PERFORMANCE THAT MATTERS IN FUTURE",
    description:
      "Feel and enjoy the torque delivered by this boxer with every twist of your wrist. With Core Screen Sport, you now have this sportiness – in the truest sense of the word – at your fingertips.",
    buttonText: "LEARN MORE",
    buttonLink: "/all-bikes",
  };

  return (
    <div className="w-full relative h-[550px] sm:h-[650px] lg:h-[750px] bg-[#050505] overflow-hidden font-sans select-none">
      
      {/* ১. ব্যাকগ্রাউন্ড ভিডিও */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src={bannerData.videoUrl} type="video/mp4" />
      </video>


      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* ৩. টেক্সট কন্টেন্ট (ছবি অনুযায়ী বাম-ঘেঁষা লেআউট) */}
      <div className="absolute inset-0 flex items-center justify-start px-6 sm:px-12 md:px-20 lg:px-28 z-10 w-full max-w-[1420px] mx-auto">
        <div className="max-w-2xl space-y-4 sm:space-y-6 text-left">
          
          {/* লাল রঙের ছোট ট্যাগলাইন */}
          <p className="text-red-600 font-extrabold text-xs sm:text-sm tracking-widest uppercase">
            {bannerData.tagline}
          </p>

          {/* মেইন টাইটেল (বোল্ড ও সবক্যাপস) */}
          <h1 className="text-2xl sm:text-5xl md:text-5xl font-black tracking-tight leading-[1.05] uppercase text-white drop-shadow-md">
            {bannerData.title}
          </h1>

          {/* ডেসক্রিপশন */}
          <p className="text-gray-200 text-xs sm:text-sm md:text-base font-normal  leading-relaxed drop-shadow-sm">
            {bannerData.description}
          </p>

          {/* লাল ব্যাকগ্রাউন্ড বাটন */}
          <div className="pt-2 sm:pt-4">
            <Link
              href={bannerData.buttonLink}
              className="inline-block px-7 py-3 sm:px-8 sm:py-3.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg active:scale-95"
            >
              {bannerData.buttonText}
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Banner;