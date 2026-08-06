"use client"
import React from 'react';
import Image from 'next/image';
import { Star, CheckCircle2, Shield, Zap, Sparkles, ShoppingCart } from 'lucide-react';
import OrderButton from '@/components/OrderButton';

function DetailsCard({ bike }) {
    console.log("hello", bike)
  if (!bike) return null;

  const { details, features, price, image, rating, reviewCount, brand, category, name } = bike;

  // Placeholder function for handling order - replace with your actual logic
  const handleOrder = () => {
    console.log(`Ordering ${name || 'bike'}...`);
    // Implement your checkout or cart addition logic here
  };

  return (
    <div className="sm:px-6 lg:px-12 max-w-7xl mx-auto my-6 text-gray-100 ">
      <div className="bg-[#14161d] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Background Glow Effect */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Image Section */}
        <div className="relative group overflow-hidden rounded-2xl border border-white/5 bg-black/20 flex items-center justify-center p-4">
            {image ? (
                <Image 
                    src={image} 
                    alt={name || brand || 'Product Image'} 
                    width={500} 
                    height={500}
                    className="object-contain max-h-[400px] w-auto transition-transform duration-500 group-hover:scale-105"
                    priority
                />
            ) : (
                <div className="text-gray-600 italic text-sm">No image available</div>
            )}
        </div>

        {/* Content Section */}
        <div className="relative z-10 space-y-6 flex flex-col justify-between">
          <div>
            {/* Top Info: Brand, Category & Rating */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex flex-col gap-1.5">
                    <h1 className="text-2xl font-black text-white uppercase tracking-tighter">
                        {name || `${brand} ${category}`}
                    </h1>
                    <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-red-600/20 text-red-500 border border-red-500/30 text-[10px] font-black uppercase tracking-widest rounded-full">
                            {brand}
                        </span>
                        <span className="px-3 py-1 bg-white/5 text-gray-300 border border-white/10 text-[10px] font-bold uppercase tracking-widest rounded-full">
                            {category}
                        </span>
                    </div>
                </div>

                {/* Rating Section */}
                {rating && (
                <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-xl border border-white/5">
                    <div className="flex text-amber-400 gap-0.5">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </div>
                    <span className="text-xs font-black text-white">{rating}</span>
                    <span className="text-[10px] text-gray-400 font-medium">({reviewCount || 0} reviews)</span>
                </div>
                )}
            </div>

            {/* Price & Overview */}
            <div className="space-y-3 pt-6">
                <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-red-500 tracking-tight">{price}</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Inclusive of all taxes</span>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
                {details || "High-performance gear engineered for ultimate convenience and durability."}
                </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Key Features List */}
            {features && features.length > 0 && (
                <div className="space-y-3 pt-2">
                <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-red-500" />
                    Key Highlights & Features
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {features.map((feature, idx) => (
                    <div 
                        key={idx}
                        className="bg-[#1a1d26] border border-white/5 hover:border-red-600/40 p-3 rounded-xl flex items-center gap-2.5 transition-all duration-200 group"
                    >
                        <div className="p-1.5 bg-red-600/10 text-red-500 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-white uppercase tracking-tight">
                        {feature}
                        </span>
                    </div>
                    ))}
                </div>
                </div>
            )}

            {/* Order Button */}
           <OrderButton/>
          </div>

          {/* Extra Guarantee/Badge Footer inside card */}
          <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between text-[10px] text-gray-500 font-medium gap-3">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-red-500" />
              <span>100% Authentic Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-500" />
              <span>Fast & Secure Shipping</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DetailsCard;