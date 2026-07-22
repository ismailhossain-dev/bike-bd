"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart, ArrowLeftRight, Search } from "lucide-react";
import WishlistButton from "../buttons/WishlistButton/WishlistButton";
import AddtoCart from "../buttons/AddToCart/AddtoCart";

const BikeCard = ({ bike }) => {
  if (!bike) return null;

  const { _id, name, price, rating, image, category } = bike;

  const [isCompared, setIsCompared] = useState(false);



  const handleCompareToggle = (e) => {
    e.preventDefault();
    setIsCompared(!isCompared);
  };

 


  return (

    <div className="group relative flex flex-col bg-white border border-gray-100 rounded-3xl p-4 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-orange-200 h-full">
      
      {/* ১. ইমেজ কন্টেইনার (হোভার করলে জুম হবে) */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-50">
        <Image
          width={400}
          height={400}
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* ডানপাশের ফ্লোটিং বাটনগুলো */}
        <div className="absolute right-3 top-3 z-20 flex flex-col gap-2">
          
          {/* কার্ট বাটন */}
         <AddtoCart bike={bike}/>

          {/* উইশলিস্ট বাটন */}
         <WishlistButton bike={bike}/>

          {/* কম্পেয়ার বাটন */}
          <button
            onClick={handleCompareToggle}
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-white transition-all duration-300 shadow-md border border-gray-100 active:scale-90
            xl:opacity-0 xl:translate-x-4 xl:group-hover:opacity-100 xl:group-hover:translate-x-0 duration-500 delay-[190ms] ${
              isCompared ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
            }`}
            title="Compare Bike"
          >
            <ArrowLeftRight size={16} />
          </button>

          {/* ভিউ ডিটেইলস (সার্চ আইকন) */}
          <Link
            href={`/allbikes/${_id}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-md border border-gray-100 active:scale-90
            xl:opacity-0 xl:translate-x-4 xl:group-hover:opacity-100 xl:group-hover:translate-x-0 duration-500 delay-[260ms]"
            title="View Details"
          >
            <Search size={16} />
          </Link>
        </div>

        {/* ইমেজের উপর সফট লাইট শ্যাডো গ্রেডিয়েন্ট */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent pointer-events-none" />
      </div>

      {/* ২. টেক্সট কন্টেন্ট সেকশন (মাঝখানে বিন্যাস করা) */}
      <div className="flex flex-1 flex-col pt-5 px-1 text-center">
        
        {/* ক্যাটাগরি */}
        <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-orange-600 mb-1">
          {category || "Accessories"}
        </span>

        {/* বাইকের নাম */}
        <Link href={`/allbikes/${_id}`} className="hover:text-orange-600 transition-colors">
          <h3 className="text-base font-bold text-gray-800 tracking-tight leading-snug line-clamp-2">
            {name}
          </h3>
        </Link>

        {/* ৩. স্টাইলিশ ছোট ডিভাইডার লাইন (হোভার করলে প্রসারিত হবে) */}
        <div className="w-8 h-[1.5px] bg-gray-200 mx-auto my-3 transition-all duration-500 group-hover:w-16 group-hover:bg-orange-500" />

        {/* ৪. স্টার রেটিং এবং দাম */}
        <div className="mt-auto flex flex-col items-center gap-1">
          
          {/* রেটিং স্টার */}
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-sm ${
                  i < Math.floor(rating || 5) ? "text-amber-400" : "text-gray-200"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          {/* দাম */}
          <p className="text-lg font-black text-gray-900 tracking-tight mt-0.5">
            {price}
          </p>
        </div>

      </div>
    </div>
  );
};

export default BikeCard;