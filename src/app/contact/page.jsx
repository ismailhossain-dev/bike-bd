"use client";
import React from "react";
import { ContactUser } from "../api/contact/route";
import { toast } from "react-toastify";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const ContactPage = () => {
  const handleContact = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const contactInfo = {
      name,
      email,
      subject,
      message,
    };

    const result = await ContactUser(contactInfo);
    console.log(result);

    if (result.success === true) {
      toast.success("Send message to owner");
    }
    form.reset();
  };

  return (
    /* --- Main Background: Pure White in Light, Deep Charcoal in Dark --- */
    <div>
      <Navbar />
      <div className="bg-white dark:bg-[#050505] min-h-screen text-zinc-900 dark:text-white py-24 px-6 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          {/* --- Header Section --- */}
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
              Get In <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 mt-6 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Have a question or want to book a test ride? Drop us a message!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* --- Left Side: Contact Info --- */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black mb-6 border-l-4 border-blue-600 pl-5 uppercase italic tracking-tight">
                  Contact <span className="text-blue-600">Info</span>
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed font-medium">
                  Have questions about a specific bike model or want to schedule a showroom visit?
                  Amader team apnake shohojogita korar jonno prostut.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone Card */}
                <div className="flex items-center p-6 bg-zinc-50 dark:bg-[#0c0c0c] rounded-[2rem] border border-zinc-200 dark:border-zinc-800 hover:border-blue-600/50 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center text-2xl mr-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    📞
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-400 dark:text-zinc-500 uppercase text-[10px] tracking-[0.2em] mb-1">
                      Call Us Directly
                    </h4>
                    <p className="text-zinc-900 dark:text-blue-500 font-black text-xl">
                      +880 1619-408991
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex items-center p-6 bg-zinc-50 dark:bg-[#0c0c0c] rounded-[2rem] border border-zinc-200 dark:border-zinc-800 hover:border-blue-600/50 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center text-2xl mr-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-400 dark:text-zinc-500 uppercase text-[10px] tracking-[0.2em] mb-1">
                      Email Support
                    </h4>
                    <p className="text-zinc-900 dark:text-blue-500 font-black text-lg break-all">
                      programmarsabbir@gmail.com
                    </p>
                  </div>
                </div>

                {/* Location Card */}
                <div className="flex items-center p-6 bg-zinc-50 dark:bg-[#0c0c0c] rounded-[2rem] border border-zinc-200 dark:border-zinc-800 hover:border-blue-600/50 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center text-2xl mr-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-400 dark:text-zinc-500 uppercase text-[10px] tracking-[0.2em] mb-1">
                      Our Showroom
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 font-bold">
                      Plot 12, Road 5, Banani, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Right Side: Contact Form --- */}
            <div className="bg-zinc-50 dark:bg-[#0c0c0c] p-10 md:p-14 rounded-[3rem] border border-zinc-200 dark:border-zinc-900 shadow-2xl relative overflow-hidden">
              {/* Subtle Gradient Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/5 blur-[80px] -mr-20 -mt-20"></div>

              <form onSubmit={handleContact} className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 ml-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-white dark:bg-[#050505] border border-zinc-200 dark:border-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-zinc-900 dark:text-white font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white dark:bg-[#050505] border border-zinc-200 dark:border-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-zinc-900 dark:text-white font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Inquiry about Yamaha R15"
                    className="w-full bg-white dark:bg-[#050505] border border-zinc-200 dark:border-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-zinc-900 dark:text-white font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 ml-1">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    required
                    placeholder="How can we help you?"
                    className="w-full bg-white dark:bg-[#050505] border border-zinc-200 dark:border-zinc-800 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-zinc-900 dark:text-white font-medium resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black uppercase tracking-widest py-5 rounded-2xl transition-all shadow-xl shadow-blue-600/20 active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
