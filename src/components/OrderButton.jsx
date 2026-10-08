"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const OrderButton = ({ bike }) => {
  console.log("bike information", bike);
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading....</p>;
  }

  const handlePayment = async () => {
    setLoading(true);
    if (!session) {
      setLoading(false);
      return toast.warn("Plase login first");
    }
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: [
            {
              image: bike?.image,
              name: bike?.name || "City Hunter Backpack",
              price: bike?.price,
              quantity: 1,
            },
          ],
          email: session.user?.email || "user.customer@example.com",
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error(data.error || "Something went wrong!");
        setLoading(false);
      }
    } catch (error) {
      console.error("Payment Error:", error);
      toast.error("Failed to connect to payment server.");
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="btn w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition"
    >
      {loading ? "Processing..." : "Proceed to Checkout"}
    </button>
  );
};

export default OrderButton;
