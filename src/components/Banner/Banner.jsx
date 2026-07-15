"use client";

import React from "react";
import Link from "next/link";
// Swiper React components এবং styles ইম্পোর্ট করা হচ্ছে
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Banner = () => {
  // ৩টি স্লাইডের ডেমো ডাটা (বাইকের ছবি ও টেক্সট সহ)
  const slidesData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1600",
      tagline: "10% OFF YOUR FIRST ORDER",
      title: "UNLEASH THE BEAST WITHIN",
      description: "Experience ultimate freedom and raw power on two wheels. Crafted for those who dare to stand out on every road.",
      buttonText: "SHOP ALL BIKES",
      buttonLink: "/allbikes",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=1600",
      tagline: "NEW ARRIVALS 2026",
      title: "VINTAGE SOUL, MODERN POWER",
      description: "Timeless classic designs blended with cutting-edge technology. Ride into the sunset with comfort and vintage style.",
      buttonText: "EXPLORE CLASSICS",
      buttonLink: "/allbikes",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&q=80&w=1600",
      tagline: "ADVENTURE AWAITS",
      title: "CONQUER EVERY TERRAIN",
      description: "Built to dominate dirt, rocks, and mountain paths. Your ultimate companion for rugged off-road exploration.",
      buttonText: "VIEW OFF-ROADERS",
      buttonLink: "/allbikes",
    },
  ];

  return (
    <div className="w-full relative bg-[#080808]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect={"fade"} 
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-[500px] md:h-[550px] lg:h-[600px] w-full"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
      
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[5000ms] scale-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
         
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 z-10">
              <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
                
             
                <span className="inline-block text-orange-500 font-extrabold text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase animate-fade-in">
                  {slide.tagline}
                </span>

            
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
                  {slide.title}
                </h2>

             
                <p className="text-gray-300 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                  {slide.description}
                </p>

                
                <div className="pt-4 md:pt-6">
                  <Link
                    href={slide.buttonLink}
                    className="inline-block bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-xs md:text-sm px-8 py-3.5 md:px-10 md:py-4 rounded-full shadow-lg shadow-orange-600/30 transition-all duration-300 hover:shadow-orange-600/50 hover:scale-105 active:scale-95 tracking-wider"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* ৩. কাস্টম নেভিগেশন অ্যারো বাটন (বাম ও ডান) */}
        <button className="swiper-button-prev-custom absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full border border-white/20 bg-black/30 text-white/70 hover:text-white hover:bg-orange-600 hover:border-orange-600 transition-all active:scale-90">
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="swiper-button-next-custom absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full border border-white/20 bg-black/30 text-white/70 hover:text-white hover:bg-orange-600 hover:border-orange-600 transition-all active:scale-90">
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* ৪. কাস্টম ডট পেজিনেশন (নিচে মাঝে) */}
        <div className="swiper-pagination-custom absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2" />
      </Swiper>

      {/* Tailwind-এ কাস্টম পেজিনেশন স্টাইল যোগ করার জন্য CSS ট্রিক */}
      <style jsx global>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4) !important;
          opacity: 1 !important;
          width: 24px !important;
          height: 4px !important;
          border-radius: 9999px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: #ea580c !important; /* orange-600 color */
          width: 48px !important;
        }
      `}</style>
    </div>
  );
};

export default Banner;