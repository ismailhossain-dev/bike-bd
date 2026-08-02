"use client";

import React, { useState } from "react";
import { postUser } from "@/action/server/auth";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, EyeOff, UserPlus, ArrowRight, ShieldCheck } from "lucide-react";
import GoogleLogin from "./GoogleLogin";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const registerInfo = { name, email, password };
    try {
      const result = await postUser(registerInfo);

      if (result?.success) {
        toast.success("Account created successfully! 🏍️");
        form.reset();
        router.push("/login");
      } else {
        toast.error(result?.message || "Registration failed!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = `w-full bg-[#0b0c10] border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors font-medium`;
  const labelStyle = `block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2`;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0b0c10] p-4 lg:p-8 relative overflow-hidden font-sans text-white">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl bg-[#141620] rounded-3xl border border-white/10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative z-10 min-h-[650px]"
      >
        {/* --- LEFT SIDE: Brand Banner --- */}
        <div className="hidden lg:block lg:col-span-5 relative overflow-hidden group">
          <Image
            src="/assets/gsxr.jpeg"
            fill
            alt="Elite Superbike"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-75"
            priority
          />
          {/* Dark Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141620] via-black/40 to-transparent flex flex-col justify-between p-10 z-10">
            <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-red-500 bg-black/60 backdrop-blur-md border border-red-500/20 px-3 py-1.5 rounded-full w-fit">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Rider Zone</span>
            </div>

            <div>
              <span className="text-red-500 font-extrabold text-xs uppercase tracking-[0.3em] mb-2 block">
                Join The Revolution
              </span>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight leading-tight italic">
                PROBIKE <br />
                <span className="text-red-600">COMMUNITY</span>
              </h2>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: Core Authentication Form --- */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="w-full max-w-md mx-auto"
          >
            {/* Header */}
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="px-3 py-1 bg-red-600/10 border border-red-500/20 text-red-500 text-[11px] font-black uppercase tracking-widest inline-block mb-3">
                Get Started
              </span>
              <h1 className="text-3xl sm:text-4xl font-black uppercase italic tracking-tight">
                Create <span className="text-red-600">Account</span>
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm font-medium mt-2">
                Become a member of the elite Probike community today.
              </p>
            </motion.div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <motion.div variants={fadeInUp}>
                <label className={labelStyle}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className={inputStyle}
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label className={labelStyle}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className={inputStyle}
                  placeholder="rider@autobike.com"
                />
              </motion.div>

              {/* Password Field */}
              <motion.div variants={fadeInUp}>
                <label className={labelStyle}>Password Sequence *</label>
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    placeholder="••••••••"
                    className={`${inputStyle} pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-gray-500 hover:text-red-500 transition-colors focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </motion.div>

              {/* CTA Submit Button */}
              <motion.div variants={fadeInUp} className="pt-2">
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-800 disabled:text-gray-500 text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-red-600/20 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <>
                      <UserPlus className="w-4 h-4" />
                      <span>Sign Up</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </motion.div>
            </form>

            {/* Social Login Divider & Component */}
            <motion.div variants={fadeInUp} className="mt-6">
              <div className="relative flex items-center justify-center mb-6">
                <div className="border-t border-white/10 w-full" />
                <span className="bg-[#141620] px-3 text-[10px] font-black uppercase tracking-widest text-gray-500 absolute">
                  OR
                </span>
              </div>
              <GoogleLogin />
            </motion.div>

            {/* Redirect to Login */}
            <motion.div variants={fadeInUp} className="mt-8 text-center pt-6 border-t border-white/10">
              <p className="text-xs text-gray-400 font-medium">
                Already a member?
                <Link
                  href="/login"
                  className="ml-2 text-red-500 font-extrabold uppercase tracking-wider hover:text-red-400 transition-colors underline underline-offset-4"
                >
                  Log In Here
                </Link>
              </p>
            </motion.div>

          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default RegisterForm;