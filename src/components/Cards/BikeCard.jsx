"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const BikeCard = ({ bike }) => {
  if (!bike) return null;

  const { brand, name, category, price, rating, image, weight, torque, color } = bike;

  return (
    <div className="group relative flex flex-col rounded-[2.5rem] bg-[#141414] border border-zinc-800/50 p-3 shadow-2xl transition-all duration-500 hover:border-zinc-700 hover:shadow-cyan-500/10 h-full">
      
      {/* Image Container with Dark Theme Adjustments */}
      <div className="relative aspect-[4/4] overflow-hidden rounded-[2rem] bg-zinc-900 shadow-inner">
        <Image
          width={400} // Bumped up resolution for sharper rendering
          height={400}
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Top Badges */}
        <div className="absolute inset-x-4 top-4 flex justify-between items-start">
          <span className="rounded-2xl bg-zinc-900/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-zinc-200 border border-zinc-800 backdrop-blur-md">
            {category}
          </span>
          <div className="flex items-center gap-1 rounded-2xl bg-black/60 px-3 py-1.5 text-white backdrop-blur-md border border-zinc-800/50">
            <span className="text-amber-400 text-xs">★</span>
            <span className="text-[11px] font-bold">{rating}</span>
          </div>
        </div>

        {/* Premium Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col px-4 py-5">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
            {brand}
          </span>
          <h3 className="text-xl font-black italic tracking-tight text-zinc-100 leading-tight">
            {name.toUpperCase()}
          </h3>
        </div>

        {/* Specs - Glassmorphism style for Dark Mode */}
        <div className=" grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center rounded-2xl bg-zinc-900/50 py-2.5 border border-zinc-800/60">
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">Weight</span>
            <span className="text-[11px] font-extrabold text-zinc-200 mt-0.5">{weight}</span>
          </div>
          <div className="flex flex-col items-center rounded-2xl bg-zinc-900/50 py-2.5 border border-zinc-800/60">
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">Torque</span>
            <span className="text-[11px] font-extrabold text-zinc-200 mt-0.5">{torque}</span>
          </div>
          <div className="flex flex-col items-center rounded-2xl bg-zinc-900/50 py-2.5 border border-zinc-800/60">
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">Color</span>
            <span className="text-[11px] font-extrabold text-zinc-200 mt-0.5">{color}</span>
          </div>
        </div>

        {/* Price & Action Section */}
        <div className="mt-auto flex flex-col  justify-between border-t border-zinc-800/80 pt-5">
          <div className="flex flex-col">
         
            <span className="text-xl  font-black tracking-tight text-white">
              {price.split(" ")[0]}
              <span className="ml-1 text-xs text-cyan-400 font-bold uppercase">
                {price.split(" ")[1]}
              </span>
            </span>
          </div>

          <Link
            href={`/allbikes/${bike._id}`}
            className="btn text-center"
          >
          
           View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;