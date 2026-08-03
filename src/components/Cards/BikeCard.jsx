"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, RefreshCw, Plus, X } from "lucide-react";
import WishlistButton from "../buttons/WishlistButton/WishlistButton";
import AddtoCart from "../buttons/AddToCart/AddtoCart";

const BikeCard = ({ bike }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!bike) return null;

  const {
    _id,
    name,
    price,
    image,
    brand,
    category,
    weight,
    torque,
    details,
    features,
    engine,
    topSpeed
  } = bike;

  const handleActionClick = (e) => {
    e.stopPropagation();
  };

  const openModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-[#121212] border border-white/10 hover:border-white/20 transition-all duration-300 rounded-lg overflow-hidden flex flex-col group relative">
        
        {/* ১. টপ টাইটেল ও অ্যাকশন আইকন */}
        <div className="flex items-center justify-between p-4 border-b border-white/5 bg-[#161616]">
          <h3 className="text-lg font-black text-white uppercase tracking-tight line-clamp-1">
            {name}
          </h3>
          
          {/* সাইড মিনিমাল অ্যাকশন বাটনস */}
          <div onClick={handleActionClick} className="flex items-center gap-1">
            <button 
              onClick={openModal}
              title="Quick View"
              className="w-7 h-7 flex items-center justify-center bg-white/5 hover:bg-red-600 text-gray-400 hover:text-white transition-colors rounded border border-white/10"
            >
              <Eye size={13} />
            </button>
            <button className="w-7 h-7 flex items-center justify-center bg-white/5 hover:bg-red-600 text-gray-400 hover:text-white transition-colors rounded border border-white/10">
              <RefreshCw size={13} />
            </button>
            <button className="w-7 h-7 flex items-center justify-center bg-white/5 hover:bg-red-600 text-gray-400 hover:text-white transition-colors rounded border border-white/10">
              <Plus size={13} />
            </button>
          </div>
        </div>

        {/* ২. ইমেজ ও রেড রিবোন সেকশন */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
          <Image
            width={500}
            height={320}
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />

          {/* লাল 'FOR SALE' রিবন */}
          <div className="absolute top-4 -right-10 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest py-1 px-10 rotate-45 shadow-lg pointer-events-none">
            FOR SALE
          </div>

          {/* ইন্টার‍্যাক্টিভ কার্ট ও উইশলিস্ট ওভারলে (মোবাইলে সবসময় দেখাবে, বড় স্ক্রিনে হোভারে দেখাবে) */}
          <div 
            onClick={handleActionClick} 
            className="absolute bottom-3 left-3 z-10 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
          >
            <AddtoCart bike={bike} />
            <WishlistButton bike={bike} />
          </div>
        </div>

        {/* ৩. স্পেসিফিকেশন গ্রিড */}
        <div className="p-4 grid grid-cols-2 gap-y-4 gap-x-2 border-t border-white/5 bg-[#121212] text-xs">
          
          {/* Brand/Make */}
          <div className="flex items-center gap-2">
            <span className="text-red-600">🏍️</span>
            <div>
              <p className="font-extrabold text-white uppercase">{brand || "Yamaha"}</p>
              <p className="text-[10px] font-medium text-gray-500 uppercase">Make</p>
            </div>
          </div>

          {/* Category */}
          <div className="flex items-center gap-2">
            <span className="text-red-600">⚙️</span>
            <div>
              <p className="font-extrabold text-white uppercase">{category || "Sport"}</p>
              <p className="text-[10px] font-medium text-gray-500 uppercase">Category</p>
            </div>
          </div>

          {/* Weight */}
          <div className="flex items-center gap-2">
            <span className="text-red-600">⚖️</span>
            <div>
              <p className="font-extrabold text-white uppercase">{weight || "142 kg"}</p>
              <p className="text-[10px] font-medium text-gray-500 uppercase">Weight</p>
            </div>
          </div>

          {/* Torque */}
          <div className="flex items-center gap-2">
            <span className="text-red-600">⚡</span>
            <div>
              <p className="font-extrabold text-white uppercase">{torque || "14.2 Nm"}</p>
              <p className="text-[10px] font-medium text-gray-500 uppercase">Torque</p>
            </div>
          </div>

        </div>

        {/* ৪. প্রাইস এবং 'VIEW MORE' বাটন */}
        <div className="mt-auto p-4 border-t border-white/5 bg-[#161616] flex items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">TOTAL PRICE</p>
            <p className="text-lg font-black text-white tracking-tight">
              {price}
            </p>
          </div>

          <Link
            href={`/allbikes/${_id}`}
            className="btn"
          >
            VIEW MORE
          </Link>
        </div>

      </div>

      {/* 👁️ QUICK VIEW MODAL */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="bg-[#181818] border border-white/10 rounded-xl overflow-hidden max-w-2xl w-full text-white shadow-2xl relative flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ক্লোজ বাটন */}
            <button 
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors"
            >
              <X size={18} />
            </button>

            {/* মডাল ইমেজ */}
            <div className="md:w-1/2 relative bg-black aspect-square md:aspect-auto">
              <Image 
                src={image} 
                alt={name} 
                fill 
                className="object-cover" 
              />
            </div>

            {/* মডাল কন্টেন্ট */}
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest">{brand}</span>
                <h2 className="text-2xl font-black uppercase tracking-tight mt-1 mb-2">{name}</h2>
                <p className="text-xl font-black text-red-600 mb-4">{price}</p>
                
                <p className="text-xs text-gray-300 leading-relaxed mb-4 line-clamp-4">
                  {details || "High performance vehicle designed for maximum efficiency and superior speed."}
                </p>

                {/* বিশেষ ফিচার লিস্ট */}
                {features && features.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xs font-extrabold uppercase text-gray-400 mb-2">Key Features:</h4>
                    <ul className="text-xs space-y-1 text-gray-300">
                      {features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="text-red-500">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* মডাল অ্যাকশনস */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  <AddtoCart bike={bike} />
                  <WishlistButton bike={bike} />
                </div>
                <Link
                  href={`/allbikes/${_id}`}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase transition-colors"
                >
                  Full Specs
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default BikeCard;