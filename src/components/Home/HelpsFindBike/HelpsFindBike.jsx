import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const HelpsFindBike = () => {
    return (
        <section className="w-full py-12">
            {/* Top Header Section (Restricted max-width for alignment) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-10">
                    {/* Left Side */}
                    <div className="flex-1 space-y-4">
                        <span className="inline-block bg-red-600/10 border border-red-500/30 text-red-500 text-[11px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                            Welcome to BikeBD
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                            Helps you to find your next motorbike <span className="text-red-600">easily</span>
                        </h1>
                    </div>

                    {/* Right Side / Description & CTA */}
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                            Whether offering organized motorcycling trips to the most beautiful places in the world, or training on world championship circuits: BMW is your starting point for unique motorcycling experiences. Get ready to explore endless possibilities.
                        </p>
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-red-500 transition-colors group"
                        >
                            <span>Explore About Us</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Banner & Video Trigger Section (Full Width with optional container padding for large screens) */}
            <div className="w-full ">
                <div className="relative w-full  overflow-hidden border-y sm:border border-white/10 shadow-2xl group">
                    {/* Image */}
                    <Image
                        src="/assets/helps-bike.avif"
                        alt="help-find-bike-image"
                        width={1420}
                        height={600}
                        className="w-full h-[380px] sm:h-[480px] lg:h-[560px] object-cover transition-transform duration-700"
                        priority
                    />

                    {/* Dark Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Clickable Video Button Container */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                        <Link
                            href="https://youtu.be/HWTgHqjCQH4?si=kp0iMOpy6eOyJpRL"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group/btn flex items-center justify-center"
                            aria-label="Play promotional video"
                        >
                            {/* Outer Pulse Ring */}
                            <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-600/30 animate-ping" />
                            
                            {/* Play Button Icon Circle */}
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20 group-hover/btn:scale-110 transition-all duration-300">
                                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                            </div>
                        </Link>
                        
                        <span className="mt-4 text-xs font-bold tracking-widest uppercase text-white/90 bg-black/40 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                            Watch Story Video
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpsFindBike;