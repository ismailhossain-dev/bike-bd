"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Clock } from "lucide-react";

const OrderTable = ({ orderData }) => {
  const totalAmount =
    orderData?.reduce((acc, order) => {
      return acc + (typeof order.amount === "number" ? order.amount : 0);
    }, 0) || 0;

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#141620] border border-white/10 p-6 sm:p-8 rounded-3xl shadow-xl">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            My <span className="text-red-600">Orders</span>
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            View your order history, transaction IDs, and payment status.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-red-600/10 border border-red-500/30 text-red-500 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl">
            Total Orders: {orderData?.length || 0}
          </div>
        </div>
      </div>

      <div className="bg-[#141620] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        {orderData && orderData.length > 0 ? (
          <div>
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse min-w-[1100px]">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 text-xs font-black uppercase tracking-wider bg-[#0b0c10]">
                    <th className="py-4 px-6 w-28">Image</th>
                    <th className="py-4 px-6 w-[35]">Product Name & Email</th>
                    <th className="py-4 px-6 w-[30]">Transaction ID</th>
                    <th className="py-4 px-6 w-40">Amount</th>
                    <th className="py-4 px-6 w-40">Status</th>
                    <th className="py-4 px-6 w-40">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {orderData.map((order) => {
                    const {
                      _id,
                      transactionId,
                      email,
                      productNames,
                      images,
                      amount,
                      currency,
                      paymentStatus,
                      createdAt,
                    } = order;

                    const formattedDate = createdAt
                      ? new Date(createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })
                      : "N/A";

                    const productImage =
                      Array.isArray(images) && images.length > 0
                        ? images[0]
                        : "/assets/placeholder-bike.jpg";

                    return (
                      <tr
                        key={_id}
                        className="hover:bg-white/[0.02] transition-colors group"
                      >
                        <td className="py-4 px-6">
                          <div className="relative w-16 h-16 rounded-2xl bg-[#0b0c10] border border-white/10 overflow-hidden flex items-center justify-center p-2">
                            <Image
                              src={productImage}
                              alt={productNames || "Product"}
                              fill
                              className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        </td>

                        <td className="py-4 px-6">
                          <span className="text-white font-bold text-sm sm:text-base line-clamp-1 group-hover:text-red-500 transition-colors">
                            {productNames || "Unnamed Product"}
                          </span>
                          <span className="text-xs text-slate-500 block truncate max-w-[300px]">
                            {email}
                          </span>
                        </td>

                        <td className="py-4 px-6">
                          <span className="text-slate-300 font-mono text-xs bg-black/40 border border-white/5 px-2.5 py-1.5 rounded-lg block truncate max-w-[300px]">
                            {transactionId || "N/A"}
                          </span>
                        </td>

                        <td className="py-4 px-6">
                          <span className="text-red-500 font-black text-base uppercase">
                            ${amount?.toLocaleString()} {currency}
                          </span>
                        </td>

                        <td className="py-4 px-6">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                              paymentStatus === "paid"
                                ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                                : "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                            }`}
                          >
                            {paymentStatus === "paid" ? (
                              <CheckCircle size={12} />
                            ) : (
                              <Clock size={12} />
                            )}
                            {paymentStatus || "pending"}
                          </span>
                        </td>

                        <td className="py-4 px-6">
                          <span className="text-slate-400 text-xs font-medium whitespace-nowrap">
                            {formattedDate}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-[#0b0c10] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-slate-400 text-sm font-medium">
                Total Spent:{" "}
                <span className="text-white font-black text-lg ml-1">
                  ${totalAmount.toLocaleString()} USD
                </span>
              </div>
              <Link
                href="/all-bikes"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold uppercase text-xs tracking-widest py-3.5 px-8 rounded-xl shadow-lg shadow-red-600/20 text-center transition-all active:scale-95"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 space-y-3">
            <p className="text-slate-400 text-base font-medium">
              No orders found yet.
            </p>
            <Link
              href="/bikes"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold uppercase text-xs tracking-widest py-3 px-6 rounded-xl transition-all"
            >
              Explore Bikes
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTable;