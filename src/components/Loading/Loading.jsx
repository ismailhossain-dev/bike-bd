import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-4">
      {/* Spinner Container */}
      <div className="relative flex items-center justify-center">
        {/* Main Spinning Border */}
        <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>

        {/* Optional Inner Dot or Icon */}
        <div className="absolute w-3 h-3 bg-emerald-600 rounded-full"></div>
      </div>

      {/* Loading Text */}
      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold text-slate-500 tracking-wide">
          Loading...
        </h3>
        <p className="text-sm text-slate-400 mt-1">
          Please wait while we prepare everything for you.
        </p>
      </div>
    </div>
  );
};

export default Loading;
