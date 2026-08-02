"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare, 
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic triggers here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["32-C Brand Court New York, NY 10004 USA"],
      actionText: "Get Directions",
      actionLink: "#map"
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+1 (800) 123-4567", "+1 (800) 987-6543"],
      actionText: "Call Us Now",
      actionLink: "tel:+18001234567"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@autobike.com", "support@autobike.com"],
      actionText: "Send Mail",
      actionLink: "mailto:info@autobike.com"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 8:00 PM", "Sat - Sun: 10:00 AM - 6:00 PM"],
      actionText: "Check Availability",
      actionLink: "#form"
    }
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
        
        {/* --- SECTION 1: BREADCRUMB / HERO HEADER --- */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden flex items-center justify-center min-h-[380px]">
  {/* Header Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/assets/about.jpg" // Apnar pocchonder image URL ekhane dityen paren
      alt="Contact Header Background"
      fill
      priority
      className="object-cover object-center brightness-40 scale-105"
    />
    {/* Dark Overlay Gradients for smooth UI blending */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-black/60 to-black/80" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0b0c10]/40 to-[#0b0c10]" />
  </div>

  <motion.div 
    className="max-w-7xl mx-auto text-center space-y-3 relative z-10"
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
  >
    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-300 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
      <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
      <span>/</span>
      <span className="text-red-500">Contact Us</span>
    </motion.div>
    
    <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight italic drop-shadow-md">
      Contact
    </motion.h1>

    <motion.p variants={fadeInUp} className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto font-medium">
      Have questions about our motorbikes, custom tuning, or services? Reach out to us anytime and our team will get back to you shortly.
    </motion.p>
  </motion.div>
</section>

        {/* --- SECTION 2: CONTACT CARDS --- */}
        <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {contactInfo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  whileHover={{ y: -6 }}
                  className="bg-[#141620] p-6 rounded-2xl border border-white/10 hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black uppercase italic tracking-tight mb-2">{item.title}</h3>
                    {item.details.map((detail, dIdx) => (
                      <p key={dIdx} className="text-xs text-gray-400 font-medium leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>

                  <a 
                    href={item.actionLink}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-500 hover:text-red-400 transition-colors"
                  >
                    <span>{item.actionText}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* --- SECTION 3: FORM & MAP SECTION --- */}
        <section id="form" className="py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact Form */}
            <motion.div 
              className="lg:col-span-7 bg-[#141620] p-8 sm:p-10 rounded-2xl border border-white/10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-8">
                <span className="px-3 py-1 bg-red-600/10 border border-red-500/20 text-red-500 text-[11px] font-black uppercase tracking-widest inline-block mb-3">
                  Let's Talk
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight italic">
                  Send Us A <span className="text-red-600">Message</span>
                </h2>
              </motion.div>

              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center gap-3 text-xs sm:text-sm font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Thank you! Your message has been sent successfully. We will reply soon.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-[#0b0c10] border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Your Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-[#0b0c10] border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#0b0c10] border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Inquiry about bikes"
                      className="w-full bg-[#0b0c10] border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Message *</label>
                  <textarea 
                    name="message" 
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full bg-[#0b0c10] border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition-colors resize-none"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <button 
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest transition-all rounded-xl shadow-lg shadow-red-600/20 active:scale-95 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </motion.div>
              </form>
            </motion.div>

            {/* Right Column: Google Maps Embed & Showroom Banner */}
            <motion.div 
              id="map"
              className="lg:col-span-5 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Google Map Box */}
              <div className="bg-[#141620] rounded-2xl border border-white/10 overflow-hidden shadow-2xl h-[340px] relative group">
                <iframe 
                  title="Showroom Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617540272902!2d-74.01358928459392!3d40.70563077933215!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bed0059%3A0xd64d4b29c9c8e87d!2sWall%20St%2C%20New%20York%2C%20NY%2010005%2C%20USA!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
                  className="w-full h-full border-0 grayscale invert contrast-125 opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
                  allowFullScreen="" 
                  loading="lazy" 
                />
              </div>

              {/* Visit Showroom Callout */}
              <div className="bg-gradient-to-br from-red-600/20 via-[#141620] to-[#141620] p-8 rounded-2xl border border-red-600/30 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-red-600/30">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase italic tracking-tight mb-1">Visit Our Main Showroom</h3>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">
                    Want to test ride or talk with our mechanics in person? Drop by our New York flagship store today.
                  </p>
                </div>
              </div>

            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;