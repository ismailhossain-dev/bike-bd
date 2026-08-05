"use client";

import React from "react";
import { MapPin, Zap, Gauge, Disc, ArrowRight, Sparkles } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      title: "GPS Tracking",
      desc: "Real-time bike tracking with pinpoint accuracy and smart anti-theft alerts.",
      icon: <MapPin className="w-6 h-6" />,
      count: "01",
      tag: "Live Security",
    },
    {
      title: "Super Charging",
      desc: "Next-gen flash charging technology to power your ride in less than 20 minutes.",
      icon: <Zap className="w-6 h-6" />,
      count: "02",
      tag: "Ultra Fast",
    },
    {
      title: "Increasing Speed",
      desc: "A custom fine-tuned powertrain engineered for raw and high-performance track agility.",
      icon: <Gauge className="w-6 h-6" />,
      count: "03",
      tag: "High Power",
    },
    {
      title: "Powerful Tire",
      desc: "All-weather hyper-grip compound tires for maximum traction and high-speed stability.",
      icon: <Disc className="w-6 h-6" />,
      count: "04",
      tag: "Maximum Grip",
    },
  ];

  return (
    <section className="bg-[#08090c] py-28 px-4 sm:px-8 lg:px-16 text-left relative overflow-hidden font-sans border-b border-white/10">
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="absolute inset-0 " />
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px]  blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px]  blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Content Section */}
        <div className="flex flex-col items-center justify-center text-center mb-20 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-xs font-black uppercase tracking-[0.25em] mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Premium Performance</span>
          </div>

          <h2 className="text-3xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
            Our Feature{" "}
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
              Services
            </span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-medium mt-4 max-w-lg">
            Engineered with cutting-edge technology to deliver the ultimate riding experience.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-[#13151f] to-[#0e1017] p-8 rounded-[2rem] border border-white/10 hover:border-red-500/50 shadow-2xl hover:shadow-red-600/10 transition-all duration-500 flex flex-col justify-between relative overflow-hidden min-h-[360px]"
            >
              {/* Top Highlight Edge Bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Background Numbering */}
              <div className="absolute -top-2 -right-2 text-8xl font-black text-white/[0.03] select-none tracking-tighter group-hover:text-red-500/10 transition-colors duration-500 font-mono">
                {item.count}
              </div>

              <div>
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 bg-[#1a1d2a] border border-white/10 text-red-500 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-orange-600 group-hover:border-red-500 group-hover:text-white shadow-xl group-hover:shadow-red-600/30 group-hover:scale-105">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-black text-xl mb-3 text-white tracking-tight uppercase italic group-hover:text-red-500 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-black uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors duration-300 cursor-pointer">
                <span className="group-hover:text-red-500 transition-colors">Explore Feature</span>
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;