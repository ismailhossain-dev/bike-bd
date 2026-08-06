import Link from "next/link";
import React from "react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-black text-green-500 mb-4">Payment Successful! 🎉</h1>
      <p className="text-gray-400 mb-6">Thank you for your purchase. Your order is confirmed.</p>
      <Link href="/all-bikes" className="px-6 py-3 bg-red-600 rounded-xl text-xs font-bold uppercase">
        Back to Shop
      </Link>
    </div>
  );
}