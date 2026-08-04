"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Eye } from "lucide-react";
import { toast } from "react-toastify";

const CartTable = ({ cartData }) => {
    console.log("cartData in table:", cartData);

    // Delete handler
    const handleDelete = async (id) => {
        try {
            // Ekhane apnar delete API request hobe (e.g., axios.delete(`/api/cart/${id}`))
            toast.success("Item removed from cart!");
            console.log("Delete cart item id:", id);
        } catch (error) {
            console.error(error);
            toast.error("Failed to remove item");
        }
    };

    // Total price calculation
    const totalPrice = cartData?.reduce((acc, item) => {
        const itemPrice = typeof item.price === 'number' ? item.price : parseFloat(item.price?.replace(/[^0-9.-]+/g, "") || 0);
        return acc + itemPrice;
    }, 0) || 0;

    return (
        <div className="w-full space-y-6">
            {/* ================= HEADER SECTION ================= */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#141620] border border-white/10 p-6 rounded-3xl shadow-xl">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                        My Shopping <span className="text-red-600">Cart</span>
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">
                        Review your selected bikes and accessories before checkout.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-red-600/10 border border-red-500/30 text-red-500 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl">
                        Total Items: {cartData?.length || 0}
                    </div>
                </div>
            </div>

            {/* ================= TABLE SECTION ================= */}
            <div className="bg-[#141620] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                {cartData && cartData.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 text-slate-400 text-xs font-black uppercase tracking-wider bg-[#0b0c10]">
                                    <th className="py-4 px-6">Product</th>
                                    <th className="py-4 px-6">Title</th>
                                    <th className="py-4 px-6">Price</th>
                                    <th className="py-4 px-6">Added Date</th>
                                    <th className="py-4 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {cartData.map((item) => {
                                    const { _id, productId, title, price, image, createdAt } = item;
                                    
                                    // Date formatting
                                    const formattedDate = createdAt 
                                        ? new Date(createdAt).toLocaleDateString("en-US", {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                          }) 
                                        : "N/A";

                                    return (
                                        <tr 
                                            key={_id} 
                                            className="hover:bg-white/[0.02] transition-colors group"
                                        >
                                            {/* Product Image */}
                                            <td className="py-4 px-6">
                                                <div className="relative w-16 h-16 rounded-2xl bg-[#0b0c10] border border-white/10 overflow-hidden flex items-center justify-center p-2">
                                                    <Image
                                                        src={image || "/assets/placeholder-bike.jpg"}
                                                        alt={title || "Product"}
                                                        fill
                                                        className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                            </td>

                                            {/* Title */}
                                            <td className="py-4 px-6">
                                                <span className="text-white font-bold text-sm sm:text-base line-clamp-1 group-hover:text-red-500 transition-colors">
                                                    {title || "Unnamed Product"}
                                                </span>
                                            </td>

                                            {/* Price */}
                                            <td className="py-4 px-6">
                                                <span className="text-red-500 font-black text-base">
                                                    {typeof price === 'number' ? `$${price.toLocaleString()}` : price}
                                                </span>
                                            </td>

                                            {/* Created Date */}
                                            <td className="py-4 px-6">
                                                <span className="text-slate-400 text-xs font-medium">
                                                    {formattedDate}
                                                </span>
                                            </td>

                                            {/* Action Buttons (View & Delete) */}
                                            <td className="py-4 px-6">
                                                <div className="flex items-center justify-center gap-2">
                                                    
                                                    {/* View Details Button */}
                                                    <Link
                                                        href={`/bikes/${productId}`}
                                                        className="w-9 h-9 bg-white/5 hover:bg-white/10 text-white rounded-xl flex items-center justify-center border border-white/10 transition-all hover:scale-105"
                                                        title="View Details"
                                                    >
                                                        <Eye size={16} />
                                                    </Link>

                                                    {/* Delete Button */}
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDelete(_id)}
                                                        className="w-9 h-9 bg-red-500/10 hover:bg-red-600 text-red-500 hover:text-white rounded-xl flex items-center justify-center border border-red-500/20 transition-all hover:scale-105"
                                                        title="Remove from Cart"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>

                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                        {/* ================= TABLE FOOTER / CHECKOUT SUMMARY ================= */}
                        <div className="p-6 bg-[#0b0c10] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="text-slate-400 text-sm font-medium">
                                Subtotal Amount: <span className="text-white font-black text-lg ml-1">${totalPrice.toLocaleString()}</span>
                            </div>
                            <button
                                type="button"
                                onClick={() => toast.info("Proceeding to checkout...")}
                                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold uppercase text-xs tracking-widest py-3.5 px-8 rounded-xl shadow-lg shadow-red-600/20 transition-all active:scale-95 cursor-pointer"
                            >
                                Proceed To Checkout
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Empty State */
                    <div className="text-center py-16 space-y-3">
                        <p className="text-slate-400 text-base font-medium">Your shopping cart is empty.</p>
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

export default CartTable;