import Link from "next/link";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white py-12 md:py-24 lg:py-32 px-6 lg:px-20 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* --- Text Content Section --- */}
        {/* Mobile-e text center-e thakbe, MD device theke left-aligned hobe */}
        <div className="text-center md:text-left order-2 md:order-1 flex flex-col items-center md:items-start">
          <p className="text-xs md:text-sm font-bold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-[0.3em] animate-fade-in">
            New Arrival 2026
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
            The Motorcycle <br className="hidden sm:block" />
            <span className="text-blue-600 dark:text-blue-500 inline-block mt-2">Revolution</span>
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 mb-10 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed">
            Discover the latest trend of high-performance motorcycles with next-level speed,
            cutting-edge design, and unmatched durability. Built for those who dare to ride.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/allbikes"
              className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/10 dark:shadow-none text-center"
            >
              Shop Now
            </Link>

            <Link
              href="/feature"
              className="px-8 py-4 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl font-bold hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-all text-center"
            >
              Explore Features
            </Link>
          </div>
        </div>

        {/* --- Image Section --- */}
        {/* Mobile-e image upore thakbe (order-1) */}
        <div className="relative flex items-center justify-center order-1 md:order-2 group">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-600/10 blur-[60px] md:blur-[100px] rounded-full scale-90 group-hover:scale-110 transition duration-1000"></div>

          <div className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-lg xl:max-w-xl">
            <img
              src="/R15.avif"
              alt="Yamaha R15 2026 Model"
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_50px_rgba(59,130,246,0.15)] transform rounded-2xl ease-out"
            />
          </div>

          {/* Floating Badge (Only Desktop) */}
          <div className="absolute -bottom-6 -right-4 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-2xl border border-zinc-100 dark:border-zinc-800 hidden lg:block animate-bounce-slow">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                ⚡
              </span>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">
                  Top Speed
                </p>
                <p className="text-lg font-black text-zinc-800 dark:text-white">180 KM/H</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
