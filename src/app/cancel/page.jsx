import Link from "next/link";
import React from "react";

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-black text-red-500 mb-4">Payment Cancelled</h1>
      <p className="text-gray-400 mb-6">Your payment was cancelled. You can try again anytime.</p>
      <Link href="/allbikes" className="px-6 py-3 bg-red-600 rounded-xl text-xs font-bold uppercase">
        Try Again
      </Link>
    </div>
  );
}