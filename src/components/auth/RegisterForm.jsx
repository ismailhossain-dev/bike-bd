"use client";
import { postUser } from "@/action/server/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GoogleLogin from "./GoogleLogin";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
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
      // console.log(result);

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

  // Modern Professional Styling
  const inputStyle = `w-full px-4 py-3.5 rounded-xl border border-gray-800 
    bg-[#0a0a0a] text-white outline-none transition-all duration-300
    focus:border-blue-600 focus:ring-1 focus:ring-blue-600/50
    placeholder:text-gray-600 shadow-inner`;

  const labelStyle = `block text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-2 ml-1`;

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050505] p-4 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-blue-600/10 blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md bg-[#111111] p-8 md:p-10 rounded-3xl border border-gray-900 shadow-2xl relative">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-black text-white tracking-tighter uppercase italic">
            Create <span className="text-blue-600">Account</span>
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
            className="w-full disabled:bg-white btn text-white font-black uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-blue-900/20 transition-all transform active:scale-[0.97] mt-4 flex items-center justify-center group"
          >
            {loading ? (
              <span className="flex items-center gap-3">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Creating...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            )}
          </button>
        </form>

        {/* Google Login */}
        <GoogleLogin/>

        <div className="mt-8 pt-6 border-t border-gray-900 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Already a member?
            <Link
              href="/login"
              className="ml-2 text-blue-500 font-black uppercase tracking-tighter hover:text-blue-400 transition-all underline-offset-4 hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
