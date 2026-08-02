"use client";
import React from "react";
import { toast } from "react-toastify";

const OrderButton = () => {
  return (
    <button
      onClick={() => toast.success("Bike order successfully")}
      className="btn w-full"
    >
      Order Now
    </button>
  );
};

export default OrderButton;
