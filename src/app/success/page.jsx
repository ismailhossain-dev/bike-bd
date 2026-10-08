"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function SuccessPageContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const verifyPayment = async () => {
      const sessionId = searchParams.get("session_id");

      if (!sessionId) {
        console.log("Session ID not found");
        return;
      }

      //payment data save in mongodb
      try {
        const response = await fetch("/api/payment-success", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionId,
          }),
        });

        const data = await response.json();

        console.log("Payment Response:", data);
      } catch (error) {
        console.error("Payment verification error:", error);
      }
    };

    verifyPayment();
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 sm:p-10 text-center border border-slate-100">
        {/* Success Icon */}
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-emerald-50 mb-6 animate-bounce">
          <svg
            className="h-10 w-10 text-emerald-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
          Payment Successful!
        </h2>
        <p className="text-slate-500 text-sm sm:text-base mb-8">
          Your transaction has been completed successfully. A receipt has been
          sent to your email.
        </p>

        {/* Details Box */}
        <div className="bg-slate-50 rounded-xl p-4 mb-8 text-left space-y-2 text-sm">
          <div className="flex justify-between text-slate-600">
            <span>Transaction ID:</span>
            <span className="font-medium text-slate-800">#TRX-982345</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Amount:</span>
            <span className="font-medium text-slate-800">$150.00</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Date:</span>
            <span className="font-medium text-slate-800">October 8, 2026</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => (window.location.href = "/dashboard")}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-xl transition duration-200 shadow-md shadow-emerald-600/20"
          >
            Back to Dashboard
          </button>

          <button
            onClick={() => window.print()}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 px-4 rounded-xl transition duration-200"
          >
            Download Receipt
          </button>
        </div>
      </div>
    </div>
  );
}

//suspense user for development
export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPageContent />
    </Suspense>
  );
}
