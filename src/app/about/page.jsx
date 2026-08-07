"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  ChevronRight, 
  ChevronLeft, 
  Quote,
  ShieldCheck,
  Zap,
  Award,
  Users,
  X,
  Plus,
  Minus
} from "lucide-react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/Container/Container";

const AboutPage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const stats = [
    { value: "98%", label: "CLIENT SATISFACTION" },
    { value: "500+", label: "MOTORCYCLES SOLD" },
    { value: "28+", label: "GLOBAL BRANCHES" },
    { value: "15+", label: "RACING TROPHIES" },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Certified Quality",
      desc: "Every motorcycle undergoes a 120-point rigorous safety inspection before hitting the showroom."
    },
    {
      icon: Zap,
      title: "Peak Performance",
      desc: "Engineered with cutting-edge aerodynamics and high-torque motors for ultimate speed."
    },
    {
      icon: Award,
      title: "Championship Lineage",
      desc: "Our designs draw directly from decades of track-tested motorsport engineering victory."
    },
    {
      icon: Users,
      title: "Rider Community",
      desc: "Join an exclusive global network of passionate riders, track days, and organized tours."
    }
  ];

  const teamMembers = [
    {
      name: "Mike Haney",
      role: "Chief Executive Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Maggie Lincoln",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Daisy Coleman",
      role: "Mechanical Engineer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const testimonials = [
    {
      quote: "A business naturally generates demand for its products if its engineering exceeds expectations. Their bikes deliver pure adrenaline without compromising stability.",
      author: "Vira Rix",
      title: "Co-Founder, MotoX",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    {
      quote: "The after-sales service and custom tuning support are unmatched. Excellent craftsmanship and customer support keep me hooked to their brand.",
      author: "Robert Allen",
      title: "Pro Track Rider",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
  ];

  const faqs = [
    {
      q: "Do you offer international shipping for custom motorcycles?",
      a: "Yes, we ship worldwide through secure air freight and specialized ocean transport with real-time GPS tracking."
    },
    {
      q: "What warranty comes with a new motorbike?",
      a: "All new purchases include a standard 3-year unlimited mileage manufacturer warranty covering engine and electrical components."
    },
    {
      q: "Can I test ride a motorcycle before buying?",
      a: "Absolutely. You can schedule a private track or road test ride at any of our 28+ global branch locations."
    }
  ];

  const brandLogos = [
    "MOTO SPORT",
    "SUPERBIKE",
    "MOTORCYCLE",
    "SPEED COMPANY",
    "RACER CLUB",
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <div className="bg-[#0b0c10] min-h-screen font-sans text-white overflow-x-hidden flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow">
        
        {/* --- SECTION 1: HERO HEADER WITH BACKGROUND IMAGE --- */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden flex items-center justify-center min-h-[420px]">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/about.jpg"
              alt="About Header Background"
              fill
              priority
              className="object-cover object-center brightness-40 scale-105"
            />
            {/* Gradient Overlays for Dark Theme Blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-black/60 to-black/80" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0b0c10]/40 to-[#0b0c10]" />
          </div>

         <Container>
           <motion.div 
            className=" text-center relative z-10 space-y-4"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-300 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
              <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-red-500">About Us</span>
            </motion.div>
            
            <h1 className=" text-3xl md:text-5xl font-bold">ABOUT US</h1>
          </motion.div>
         </Container>
        </section>

        {/* --- SECTION 2: ABOUT DETAILS & STATS --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Overlay Box */}
            <motion.div 
              className="lg:col-span-6 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop"
                  alt="Rider Experience"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Badge */}
              <motion.div 
                className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 bg-[#161822] border border-red-600/30 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-center max-w-[200px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="text-5xl font-black text-red-600 leading-none">30+</span>
                <span className="text-xs font-black uppercase tracking-wider text-gray-300 mt-2">
                  Years Experience
                </span>
              </motion.div>
            </motion.div>

            {/* Right Text Content */}
            <motion.div 
              className="lg:col-span-6 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-red-600/10 border border-red-500/20 text-red-500 text-[11px] font-black uppercase tracking-widest rounded-sm">
                All About Motor
              </motion.div>

              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight italic leading-tight">
                Helps You To Find Your Next <br />
                <span className="text-red-600">Motorbike Easily</span>
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-gray-400 text-xs sm:text-sm leading-relaxed font-medium">
                The primary aim of our team is to deliver top-tier motorbikes designed for ultimate performance. Navigating the motorcycling world can feel overwhelming; with over three decades of engineering expertise, we make selecting your dream ride simple, precise, and completely tailored to your personal driving style.
              </motion.p>

              <motion.div variants={fadeInUp} className="pt-2">
                <Link
                  href="/all-bikes"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest transition-all rounded-md shadow-lg shadow-red-600/20 active:scale-95"
                >
                  <span>Explore Collection</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

          </div>

          {/* Key Metrics / Stats Bar */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-white/10 mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white italic tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- NEW SECTION: OUR CORE VALUES / WHY CHOOSE US --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#0e0f14] border-t border-white/10">
          <div className="max-w-7xl mx-auto space-y-12">
            <motion.div 
              className="text-center max-w-2xl mx-auto space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="px-3 py-1 bg-red-600/10 border border-red-500/20 text-red-500 text-[11px] font-black uppercase tracking-widest inline-block">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight italic">
                Driven By Perfection
              </h2>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={idx} 
                    variants={fadeInUp}
                    whileHover={{ y: -6 }}
                    className="p-6 bg-[#141620] rounded-2xl border border-white/10 hover:border-red-600/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-500 mb-6">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-black uppercase italic tracking-tight mb-2">{item.title}</h3>
                      <p className="text-xs text-gray-400 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 4: VIDEO BANNER HERO --- */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-y border-white/10 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1600&auto=format&fit=crop"
              alt="Rider Road"
              fill
              className="object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          </div>

          <motion.div 
            className="max-w-7xl mx-auto relative z-10 flex flex-col items-start space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight italic max-w-2xl leading-tight">
              A Step Above With Rider-Friendly Engineering
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-gray-300 text-xs sm:text-sm max-w-xl leading-relaxed">
              Designed for high-speed stability and everyday adaptability, our bikes are tuned to deliver unyielding confidence on every turn.
            </motion.p>

            <motion.button 
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center gap-3 px-6 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-black text-xs uppercase tracking-widest rounded-full transition-all group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-white ml-0.5" />
              </div>
              <span>Play Showreel</span>
            </motion.button>
          </motion.div>
        </section>

        {/* --- SECTION 5: MEET OUR TEAM --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div 
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="px-3 py-1 bg-red-600/10 border border-red-500/20 text-red-500 text-[11px] font-black uppercase tracking-widest inline-block mb-3">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight italic">
              Meet Our Leadership
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {teamMembers.map((member, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-[#14161f] rounded-2xl overflow-hidden border border-white/10 group hover:border-red-600/50 transition-all duration-300"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-black uppercase italic tracking-tight">{member.name}</h3>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- NEW SECTION: FREQUENTLY ASKED QUESTIONS --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#0e0f14] border-t border-white/10">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div 
              className="text-center space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="px-3 py-1 bg-red-600/10 border border-red-500/20 text-red-500 text-[11px] font-black uppercase tracking-widest inline-block">
                Help & Info
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight italic">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div 
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {faqs.map((faq, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  className="bg-[#141620] border border-white/10 rounded-xl overflow-hidden transition-colors"
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold uppercase italic tracking-tight">{faq.q}</span>
                    <div className="p-1 rounded-full bg-white/5 text-gray-300">
                      {openFaq === idx ? <Minus className="w-4 h-4 text-red-500" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-xs sm:text-sm text-gray-400 font-medium leading-relaxed"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 6: TESTIMONIALS & BRANDS --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            
            <motion.div 
              className="flex items-center justify-between mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div>
                <span className="px-3 py-1 bg-red-600/10 border border-red-500/20 text-red-500 text-[11px] font-black uppercase tracking-widest inline-block mb-3">
                  Testimonials
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight italic">
                  What Clients Say
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-3 bg-[#181a24] border border-white/10 rounded-full hover:bg-red-600 hover:border-red-600 transition-colors active:scale-90">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-3 bg-[#181a24] border border-white/10 rounded-full hover:bg-red-600 hover:border-red-600 transition-colors active:scale-90">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {testimonials.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-[#141620] p-8 rounded-2xl border border-white/10 relative flex flex-col justify-between hover:border-white/20 transition-all duration-300"
                >
                  <div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                        <Image src={item.avatar} alt={item.author} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black uppercase italic tracking-tight">{item.author}</h4>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">{item.title}</p>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-red-600/40" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Brand Logos Bar */}
            <motion.div 
              className="flex flex-wrap items-center justify-between gap-6 pt-16 mt-16 border-t border-white/5 opacity-60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {brandLogos.map((brand, idx) => (
                <span key={idx} className="text-sm font-black tracking-widest text-gray-400 uppercase italic hover:text-white transition-colors">
                  {brand}
                </span>
              ))}
            </motion.div>

          </div>
        </section>

      </main>

      {/* --- VIDEO POPUP MODAL --- */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-red-600 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Motorbike Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default AboutPage;