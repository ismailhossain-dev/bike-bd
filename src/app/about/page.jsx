"use client";
import Footer from "@/components/Footer/Footer";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Award, Gauge, Milestone, Eye } from "lucide-react";
import Navbar from "@/components/Navbar/Navbar";

const AboutPage = () => {
  const points = [
    {
      title: "Quality Selection",
      desc: "A curated collection of the world's best motorcycle brands, tested for peak performance.",
      icon: <Zap className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Expert Insight",
      desc: "Our specialists provide technical analysis to ensure you choose the bike that fits your soul.",
      icon: <Award className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Lifetime Support",
      desc: "Beyond the sale, we offer 24/7 technical assistance and professional maintenance advice.",
      icon: <ShieldCheck className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "High Performance",
      desc: "Every engine is fine-tuned to deliver maximum aerodynamics and extreme riding control.",
      icon: <Gauge className="w-6 h-6 text-orange-600" />,
    },
  ];

  const specs = [
    {
      title: "Aerodynamic Design",
      desc: "Wind-tunnel tested frame profiles that reduce drag coefficients to deliver maximum stability at high speeds.",
    },
    {
      title: "Intelligent ECU Tuning",
      desc: "Advanced engine mapping systems that adjust fuel-to-air ratios in real-time, giving you raw yet controlled power.",
    },
  ];

  // Framer Motion Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 overflow-x-hidden">
      <Navbar/>
      
      {/* --- Section 1: Split Hero (ইমেজ সাইড এবং মোশন অ্যানিমেশন) --- */}
      <section className="relative pt-32 pb-24 px-6 lg:px-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100 blur-[150px] rounded-full pointer-events-none opacity-40"></div>
        
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="text-left" variants={fadeInUp}>
            <span className="text-orange-600 font-extrabold tracking-[0.25em] uppercase text-xs mb-4 block">
              The Engineering of Freedom
            </span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6 leading-[1.05]">
              Ride the <br />
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent italic">Future.</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg mb-8">
              We define the intersection of human spirit and mechanical perfection. Elite machines for those who seek pure adrenaline, high-speed control, and unbridled freedom.
            </p>
            <div className="flex gap-4">
              <a href="/allbikes" className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transform hover:-translate-y-0.5">
                Explore Bikes
              </a>
            </div>
          </motion.div>

          <motion.div className="relative flex justify-center" variants={fadeInUp}>
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop"
                fill
                alt="Hero Bike"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- Section 2: Core Philosophy & Engine Performance (নতুন তথ্য যুক্ত করা হয়েছে) --- */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            className="relative flex justify-center order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop"
                fill
                alt="Philosophy Bike"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div 
            className="lg:pl-6 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight leading-tight">
              Legacy of <br />
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent italic">Speed & Precision</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-lg">
              Founded by enthusiasts for enthusiasts, we curate the bridge between world-class engineering and local riders. Every bike we offer is tested for premium throttle response, cornering balance, and braking efficiency.
            </p>
            
            {/* Tech Specs Block */}
            <div className="space-y-6 mb-8">
              {specs.map((spec, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="p-2 bg-orange-50 rounded-lg text-orange-600 mt-1">
                    <Milestone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{spec.title}</h4>
                    <p className="text-gray-500 text-xs mt-1 max-w-md leading-relaxed">{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5">
              {["Elite Engineering", "Safety Certified", "Peak Aero", "Traction Control"].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 border border-gray-150 bg-gray-50 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-gray-500 transition-colors hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- Section 3: Main Points (Framer Motion Integration) --- */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-orange-600 font-extrabold tracking-[0.2em] uppercase text-xs mb-3 block">Our Commitment</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">FACILITIES FOR YOU</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-orange-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(234,88,12,0.05)] transition-all duration-500 transform group"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {point.icon}
                </div>
                <h3 className="text-lg font-extrabold mb-3 uppercase tracking-tight text-gray-800">
                  {point.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Section 4: High-End Manifesto (আল্ট্রা-প্রিমিয়াম এবং আধুনিক ডিজাইন) --- */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* Background Decorative Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-100/30 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 flex flex-col items-center relative z-10">
          
          <motion.div 
            className="relative w-full max-w-[950px] aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl mb-24 group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=1200&auto=format&fit=crop"
              fill
              alt="Action superbike showcase"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>

          {/* Premium Layout for the Manifesto Quote */}
          <motion.div 
            className="max-w-4xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-[1px] w-8 bg-orange-500"></span>
              <span className="text-xs font-extrabold text-orange-600 uppercase tracking-[0.4em]">
                The Manifesto
              </span>
              <span className="h-[1px] w-8 bg-orange-500"></span>
            </div>

            <div className="relative px-6 md:px-12 py-4">
              {/* Huge Decorative Quotation Marks */}
              <span className="absolute top-0 left-0 text-7xl md:text-9xl text-orange-500/10 font-serif select-none pointer-events-none">“</span>
              <span className="absolute bottom-0 right-0 text-7xl md:text-9xl text-orange-500/10 font-serif select-none pointer-events-none">”</span>
              
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.25] text-gray-950 font-sans">
                Empowering every rider with technology, safety, and a community that turns every road into an{" "}
                <span className="relative inline-block whitespace-nowrap text-orange-600 italic">
                  adventure.
                  <span className="absolute left-0 bottom-1 w-full h-[3px] bg-gradient-to-r from-orange-600 to-amber-500 rounded-full"></span>
                </span>
              </h3>
            </div>

            <div className="mt-12 flex flex-col items-center">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-gray-400">
                MotorRevolution Team
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;