"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, ShoppingCart, Star } from "lucide-react";
import { toast } from "react-toastify";
import WishlistButton from "../buttons/WishlistButton/WishlistButton";
import AddtoCart from "../buttons/AddToCart/AddtoCart";

const AccessoriesCard = ({ bike }) => {
  // console.log("bikeCard", bike);

  // Destructure properties safely from the bike prop
  const {
    _id,
    name,
    price,
    rating,
    category,
    image,
    reviewCount,
  } = bike || {};

  // Action handlers
  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevents parent link navigation
    toast.success(`${name || "Item"} added to cart!`);
  };



  return (
    <Link
      href={`/all-accessories/${_id || ""}`}
      className="group relative bg-[#121212] border border-white/10 rounded-lg overflow-hidden shadow-2xl hover:shadow-red-500/10 transition-all duration-300 flex flex-col justify-between block w-full"
    >
      {/* ================= IMAGE & FLOATING ICONS SECTION ================= */}
      <div className="relative w-full h-56 sm:h-64 bg-[#161616] overflow-hidden flex items-center justify-center p-4">
        {/* Bike Image - Fixed layout & width sizing */}
        <div className="relative w-full h-full">
          <Image
            src={image || "/assets/placeholder-bike.jpg"}
            alt={name || "Bike Image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
          
          {/* Wishlist Button */}
        <WishlistButton bike={bike}/>

        <AddtoCart bike={bike}/>
          {/* Quick View Details Button */}
          <span
            className="w-10 h-10 bg-white text-black hover:bg-red-600  rounded-full flex items-center justify-center border border-white/10 backdrop-blur-md shadow-lg transition-transform hover:scale-110 cursor-pointer"
            aria-label="Quick View Details"
          >
            <Eye size={16} />
          </span>
        </div>

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-red-600/20 border border-red-500/30 text-red-500 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md">
          {category || "Bike"}
        </span>

        {/* ================= ADD TO CART BUTTON OVERLAY: 
            - Mobile/SM: Always visible 
            - Desktop/MD+: Slide up / Fade in on hover (md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0) ================= */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-300 opacity-100 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0">
          <button
            type="button"
            onClick={handleAddToCart}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold uppercase text-xs tracking-widest py-3 px-4  flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <ShoppingCart size={16} />
            Add To Cart
          </button>
        </div>
      </div>

      {/* ================= DETAILS & PRICING SECTION ================= */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-3 w-full">
        
        <div className="space-y-1.5 text-center w-full">
          {/* Rating */}
          <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold text-center justify-center">
            <div className="flex items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={`${
                    i < Math.floor(rating || 0)
                      ? "fill-current text-amber-400"
                      : "text-gray-600"
                  }`}
                />
              ))}
            </div>
           
          </div>

          {/* Bike Name */}
          <h3 className="text-base font-black text-white uppercase tracking-tight line-clamp-1 transition-colors">
            {name || "Unnamed Bike"}
          </h3>

          {/* Price */}
          <p className="text-lg font-black text-red-500 tracking-tight">
            {price || "$0.00"}
          </p>
        </div>

      </div>
    </Link>
  );
};

export default AccessoriesCard;