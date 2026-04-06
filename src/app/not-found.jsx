"use client";
import React from "react";
import Link from "next/link";

const Error404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4">
      <div className="max-w-lg w-full text-center p-10 bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl border border-white/20">
        {/* Decorative Element */}
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
            <svg
              className="w-12 h-12 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="Open m-12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Status Code */}
        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tighter">
          404
        </h1>

        {/* Main Text */}
        <h2 className="mt-6 text-3xl font-bold text-gray-900">Page Not Found</h2>

        <p className="mt-4 text-gray-500 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-200"
          >
            Back to Homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-200"
          >
            Go Back
          </button>
        </div>

        {/* Subtle Footer */}
        <p className="mt-12 text-sm text-gray-400">
          Error Code: <span className="font-mono">ERR_PAGE_NOT_FOUND</span>
        </p>
      </div>
    </div>
  );
};

export default Error404;
