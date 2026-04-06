import Container from "@/components/Container";
import React from "react";
import { Trophy, Zap, Shield, Globe, ArrowUpRight } from "lucide-react"; // Icons
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const featuredBikes = [
  {
    id: 1,
    name: "Yamaha R15 V4",
    price: "$4,500",
    image: "/R15.avif",
    tag: "Racing DNA",
    description: "The R15 V4 is the latest evolution of the legendary entry-level supersport.",
    specs: { engine: "155cc", power: "18.4 HP", mileage: "45 kmpl", topSpeed: "150 km/h" },
  },
  {
    id: 2,
    name: "Kawasaki Ninja 400",
    price: "$5,200",
    image: "/kawasaki.avif",
    tag: "Supersport",
    description: "A perfect balance of performance and style for daily rides and track days.",
    specs: { engine: "399cc", power: "45 HP", mileage: "25 kmpl", topSpeed: "190 km/h" },
  },
  {
    id: 3,
    name: "Honda CBR 150R",
    price: "$4,100",
    image: "/honda.avif",
    tag: "Aggressive",
    description: "Unleash the racer within with the all-new aggressive CBR 150R styling.",
    specs: { engine: "149cc", power: "17.1 HP", mileage: "40 kmpl", topSpeed: "145 km/h" },
  },
];

export default function FeaturedSection() {
  return (
    <div>
      <Navbar />
      <div className="bg-zinc-50 dark:bg-[#020202]">
        {/* --- Section 1: Hero Header & Stats --- */}
        <section className="pt-24 pb-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -mr-72 -mt-32"></div>
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-[2px] w-12 bg-blue-600"></span>
                  <span className="text-blue-600 font-black tracking-[0.4em] uppercase text-[11px]">
                    Precision Engineering
                  </span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                  The New <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    Standard.
                  </span>
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-md leading-relaxed">
                  Explore our curated selection of high-performance motorcycles built for speed,
                  stability, and the ultimate riding experience.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Bikes Sold", val: "12K+", icon: <Globe className="w-5 h-5" /> },
                  { label: "Top Speed", val: "320km/h", icon: <Zap className="w-5 h-5" /> },
                  { label: "Awards Won", val: "45+", icon: <Trophy className="w-5 h-5" /> },
                  { label: "Safety Rating", val: "A Grade", icon: <Shield className="w-5 h-5" /> },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-8 bg-white dark:bg-zinc-900/50 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 shadow-sm"
                  >
                    <div className="text-blue-600 mb-4">{stat.icon}</div>
                    <div className="text-3xl font-black mb-1 tracking-tighter">{stat.val}</div>
                    <div className="text-xs uppercase text-zinc-400 font-bold tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* --- Section 2: Featured Grid --- */}
        <section className="py-24">
          <Container>
            <div className="flex justify-between items-center mb-16">
              <h3 className="text-3xl font-black uppercase tracking-tighter">Current Lineup</h3>
              <div className="h-[1px] flex-1 mx-10 bg-zinc-200 dark:bg-zinc-800 hidden md:block"></div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em]">
                Scroll to Explore
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {featuredBikes.map((bike) => (
                <div
                  key={bike.id}
                  className="group relative bg-white dark:bg-[#0a0a0a] rounded-[3.5rem] p-5 border border-zinc-200 dark:border-zinc-800/50 transition-all duration-700 hover:border-blue-500/30 shadow-xl shadow-transparent hover:shadow-blue-600/5"
                >
                  <div className="relative h-[380px] rounded-[3rem] overflow-hidden">
                    <div className="absolute top-6 right-6 z-20">
                      <div className="bg-white/90 dark:bg-zinc-900/80 backdrop-blur-md p-3 rounded-2xl shadow-xl">
                        <ArrowUpRight className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <img
                      src={bike.image}
                      alt={bike.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s]"
                    />
                  </div>

                  <div className="px-6 py-10">
                    <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest block mb-2">
                      {bike.tag}
                    </span>
                    <h4 className="text-3xl font-black uppercase tracking-tighter mb-4">
                      {bike.name}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8 line-clamp-2 leading-relaxed font-medium">
                      {bike.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-10">
                      {Object.entries(bike.specs).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex flex-col border-l-2 border-zinc-100 dark:border-zinc-800 pl-4"
                        >
                          <span className="text-[9px] uppercase text-zinc-400 font-bold tracking-widest">
                            {key}
                          </span>
                          <span className="text-sm font-black">{value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-zinc-100 dark:border-zinc-800">
                      <div>
                        <span className="text-[10px] text-zinc-400 font-bold block uppercase tracking-widest">
                          Base Price
                        </span>
                        <span className="text-2xl font-black text-blue-600">{bike.price}</span>
                      </div>
                      <button className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all active:scale-95">
                        Configure
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* --- Section 3: Technology/Banner --- */}
        <section className="py-24 bg-zinc-900 text-white overflow-hidden rounded-[4rem] mx-4 mb-24 relative">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <Container>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10">
                  Next-Gen <br />
                  <span className="text-blue-500">Intelligence.</span>
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Smart Connectivity",
                      desc: "Sync your bike with our app for real-time telemetry.",
                    },
                    {
                      title: "ABS Evolution",
                      desc: "Dual-channel braking for extreme emergency control.",
                    },
                    {
                      title: "Eco Performance",
                      desc: "Maximize fuel efficiency without losing the raw torque.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-blue-500 font-bold">
                        0{i + 1}
                      </div>
                      <div>
                        <h5 className="font-bold uppercase tracking-widest text-sm mb-1">
                          {item.title}
                        </h5>
                        <p className="text-zinc-400 text-sm max-w-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-blue-600 blur-[100px] opacity-20"></div>
                <img
                  src="/honda.avif"
                  alt="Tech"
                  className="relative z-10 w-full rotate-3 group-hover:rotate-0 transition-transform duration-700 shadow-2xl rounded-3xl"
                />
              </div>
            </div>
          </Container>
        </section>
      </div>
      <Footer />
    </div>
  );
}
