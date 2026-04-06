"use client";
import React from "react";
import Link from "next/link";
import { MoveLeft, Home, TriangleAlert } from "lucide-react";

const Error404 = () => {
  return (
    <div className=" flex items-center justify-center bg-[#0a0a0a] px-6 py-5 relative overflow-hidden">
      {/* Background Decorative Circles - Premium Vibe */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="max-w-2xl w-full text-center z-10">
        {/* Icon Section */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse" />
            <div className="relative h-28 w-28 md:h-36 md:w-36 bg-[#111] border border-white/10 rounded-full flex items-center justify-center shadow-2xl">
              <TriangleAlert size={48} className="text-blue-500 md:w-16 md:h-16" />
            </div>
          </div>
        </div>

        {/* Status Code with Gradient */}
        <div className="relative">
          <h1 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 select-none">
            404
          </h1>
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-blue-500 font-mono text-sm md:text-lg tracking-[0.5em] font-bold uppercase opacity-80">
            Lost in Space
          </p>
        </div>

        {/* Text Content */}
        <div className="mt-8 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Oops! Page not found.
          </h2>
          <p className="max-w-md mx-auto text-slate-400 text-sm md:text-base leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Don't worry, even the best
            riders take a wrong turn sometimes.
          </p>
        </div>

        {/* Action Buttons - Fully Responsive */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-[0_10px_20px_rgba(37,99,235,0.2)] transition-all duration-300 hover:-translate-y-1"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 backdrop-blur-md transition-all duration-300"
          >
            <MoveLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
