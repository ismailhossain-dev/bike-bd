"use client";
import { postUser } from "@/action/server/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image"; 
import GoogleLogin from "./GoogleLogin";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false); 
  const router = useRouter(); 
  const [showPassword, setShowPassword] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true); 

    const form = e.target; 
    const name = form.name.value; 
    const email = form.email.value; 
    const password = form.password.value; 

    const registerInfo = { name, email, password }; 
    try {
      /** * Trigger Server Action to securely process register payloads
       */
      const result = await postUser(registerInfo); 

      if (result?.success) {
        toast.success("Account created successfully! 🏍️"); 
        form.reset(); 
      }
      router.push("/login"); 
    } catch (error) {
      toast.error("Something went wrong!"); 
      console.error(error); 
    } finally {
      setLoading(false); 
    }
  };

  const inputStyle = `w-full px-4 py-3.5 rounded-xl border border-gray-200 
    bg-gray-50 text-gray-900 outline-none transition-all duration-300
    focus:border-orange-600 focus:ring-1 focus:ring-orange-600/50
    placeholder:text-gray-400 shadow-sm`; 

  const labelStyle = `block text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-2 ml-1`; 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4 lg:p-8 relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100 blur-[150px] rounded-full pointer-events-none opacity-50"></div>

      <div className="w-full max-w-5xl bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 relative z-10 min-h-[650px]">
        
        {/* --- LEFT SIDE: Brand Banner --- */}
        <div className="hidden lg:block relative overflow-hidden group h-full">
          <Image
            src="/assets/gsxr.jpeg" 
            fill 
            alt="Elite Superbike"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12">
            <span className="text-orange-500 font-extrabold text-xs uppercase tracking-[0.3em] mb-2">Join The Revolution</span>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight leading-none italic">PROBIKE <br/><span className="text-orange-500">COMMUNITY</span></h2>
          </div>
        </div>

        {/* --- RIGHT SIDE: Core Authentication Form --- */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          
          <div className="mb-8">
            <h1 className="text-3xl font-black text-gray-950 tracking-tighter uppercase italic">
              Create <span className="text-orange-600">Account</span>
            </h1>
            <p className="text-gray-500 mt-2 text-sm font-medium">
              Join the elite Probike community today.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
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

            {/* Password Input Wrapper with Show/Hide Controls */}
            <div>
              <label className={labelStyle}>Password Sequence</label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-200 focus:border-orange-600 rounded-xl pl-4 pr-12 py-3.5 focus:outline-none focus:bg-white transition-all text-sm font-semibold text-gray-900 placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-gray-400 hover:text-orange-600 transition-colors focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Dynamic Interactive Loading CTA Button */}
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

          <div className="mt-2">
            <GoogleLogin />
          </div>

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