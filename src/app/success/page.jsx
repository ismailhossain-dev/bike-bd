"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const verifyPayment = async () => {
      const sessionId = searchParams.get("session_id");

      if (!sessionId) {
        console.log("Session ID not found");
        return;
      }

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
    <div>
      <h1>Payment Successful 🎉</h1>

      <p>Thank you for your payment.</p>
    </div>
  );
}