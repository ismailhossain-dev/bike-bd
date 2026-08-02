"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveLeft, Home, Flame, AlertOctagon } from "lucide-react";

const Error404 = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0b0c10] px-4 py-12 relative overflow-hidden font-sans text-white">
      
      {/* Background Radial Glow & Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <motion.div 
        className="max-w-xl w-full text-center z-10 my-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        
        {/* Animated Badge / Icon Section */}
        <motion.div variants={fadeInUp} className="flex justify-center mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-red-600/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
            
            <div className="relative h-20 w-20 md:h-24 md:w-24 bg-[#141620] border border-red-600/30 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-105">
              <AlertOctagon className="w-9 h-9 md:w-11 md:h-11 text-red-500" strokeWidth={1.75} />
              <div className="absolute top-2 right-2 h-3 w-3 bg-red-600 rounded-full animate-ping" />
            </div>
          </div>
        </motion.div>

        {/* 404 Header with Neon Outline & Gradient Overlay */}
        <motion.div variants={fadeInUp} className="relative mb-6 select-none">
          <h1 className="text-[100px] sm:text-[140px] md:text-[160px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 italic">
            404
          </h1>
          
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-red-500 font-mono text-xs sm:text-sm md:text-base tracking-[0.4em] sm:tracking-[0.5em] font-extrabold uppercase whitespace-nowrap drop-shadow-[0_0_12px_rgba(220,38,38,0.8)]">
            // Route Off Track
          </p>
        </motion.div>

        {/* Text Content */}
        <motion.div variants={fadeInUp} className="space-y-3 px-2">
          <div className="inline-block px-3 py-1 bg-red-600/10 border border-red-500/20 text-red-500 text-[11px] font-black uppercase tracking-widest rounded-sm mb-1">
            Lost in the dust
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase italic tracking-tight leading-tight">
            You’ve Reached A <span className="text-red-600">Dead End</span>
          </h2>
          <p className="max-w-md mx-auto text-gray-400 text-xs sm:text-sm leading-relaxed font-medium">
            The track you are looking for has been removed, renamed, or never existed in our garage. Let's get you back on course.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={fadeInUp} className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-lg shadow-red-600/25 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group"
          >
            <Home size={16} className="group-hover:scale-110 transition-transform" />
            <span>Return Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#141620] hover:bg-white/10 text-gray-200 hover:text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl border border-white/10 transition-all duration-300 hover:border-white/20 active:scale-95 cursor-pointer"
          >
            <MoveLeft size={16} />
            <span>Go Back</span>
          </button>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div variants={fadeInUp} className="mt-12 flex items-center justify-center gap-2 text-gray-600">
          <div className="w-12 h-[1px] bg-white/10" />
          <Flame className="w-4 h-4 text-red-600/60" />
          <div className="w-12 h-[1px] bg-white/10" />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Error404;