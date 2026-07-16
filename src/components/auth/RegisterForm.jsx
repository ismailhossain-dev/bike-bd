"use client";
import { postUser } from "@/action/server/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Next.js Image component import kora hoyeche left side image er jonno
import GoogleLogin from "./GoogleLogin";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false); // Loading state track korar jonno
  const router = useRouter(); // Navigation/Redirect korar jonno Next.js router

  const handleSubmit = async (e) => {
    e.preventDefault(); // Form submithole page jeno reload na hoy
    setLoading(true); // Loading animation start korar jonno true kora hoyeche

    const form = e.target; // Current form element niyo hoche
    const name = form.name.value; // Name input field er value
    const email = form.email.value; // Email input field er value
    const password = form.password.value; // Password input field er value

    const registerInfo = { name, email, password }; // Sob data eksathe object banano holo
    try {
      const result = await postUser(registerInfo); // Server action a data pathano hocche

      if (result?.success) {
        toast.success("Account created successfully! 🏍️"); // Success message dekhano hocche
        form.reset(); // Form input field gulo khali korar jonno
      }
      router.push("/login"); // Account tori hole login page a redirect kora hobe
    } catch (error) {
      toast.error("Something went wrong!"); // Kono error hole notification dekhabe
      console.error(error); // Debugging er jonno console e error print kora holo
    } finally {
      setLoading(false); // Kaj sesh hole loading animation stop kora holo
    }
  };

  // Modern Professional White Theme Styling
  const inputStyle = `w-full px-4 py-3.5 rounded-xl border border-gray-200 
    bg-gray-50 text-gray-900 outline-none transition-all duration-300
    focus:border-orange-600 focus:ring-1 focus:ring-orange-600/50
    placeholder:text-gray-400 shadow-sm`; // Light input field er premium design class

  const labelStyle = `block text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-2 ml-1`; // Input label er bold modern class

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4 lg:p-8 relative overflow-hidden font-sans">
      {/* Background soft decorative blur for high-end look */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100 blur-[150px] rounded-full pointer-events-none opacity-50"></div>

      {/* Main Split Layout Container */}
      <div className="w-full max-w-5xl bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 relative z-10 min-h-[650px]">
        
        {/* --- LEFT SIDE: Image Section (Responsive: Mobile e hide thakbe, LG te dekhabe) --- */}
        <div className="hidden lg:block relative bg-gray-900">
          <Image
            src="/assets/gsxr.jpeg" // Premium superbike image URL
            fill // Pura container ta cover korar jonno layout fill
            alt="Elite Superbike"
            className="object-cover opacity-90 transition-transform duration-700 hover:scale-105" // Hover e scale animation hobe
            priority // Image jeno fast load hoy seijonno priority deya holo
          />
          {/* Subtle dark overlay with brand text on the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12">
            <span className="text-orange-500 font-extrabold text-xs uppercase tracking-[0.3em] mb-2">Join The Revolution</span>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight leading-none italic">PROBIKE <br/><span className="text-orange-500">COMMUNITY</span></h2>
          </div>
        </div>

        {/* --- RIGHT SIDE: Form Section (Sob screen e dekhabe) --- */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-black text-gray-950 tracking-tighter uppercase italic">
              Create <span className="text-orange-600">Account</span>
            </h1>
            <p className="text-gray-500 mt-2 text-sm font-medium">
              Join the elite Probike community today.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className={labelStyle}>Full Name</label>
              <input
                type="text"
                name="name"
                required
                className={inputStyle}
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className={labelStyle}>Email Address</label>
              <input
                type="email"
                name="email"
                required
                className={inputStyle}
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label className={labelStyle}>Password</label>
              <input
                type="password"
                name="password"
                required
                className={inputStyle}
                placeholder="••••••••"
              />
            </div>

            {/* Submit Button */}
            <button
              disabled={loading}
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-200 text-white font-black uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-orange-600/20 transition-all transform active:scale-[0.97] mt-6 flex items-center justify-center group"
            >
              {loading ? (
                <span className="flex items-center gap-3 text-gray-500">
                  <svg className="animate-spin h-5 w-5 text-gray-500" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  SignUP
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              )}
            </button>
          </form>

          {/* Google Login Component */}
          <div className="mt-2">
            <GoogleLogin />
          </div>

          {/* Bottom Navigation Link */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500 font-medium">
              Already a member?
              <Link
                href="/login"
                className="ml-2 text-orange-600 font-black uppercase tracking-tighter hover:text-orange-700 transition-all underline-offset-4 hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegisterForm;