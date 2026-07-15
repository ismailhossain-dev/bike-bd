"use client";
import GoogleLogin from "@/components/auth/GoogleLogin";
import Footer from "@/components/Footer/Footer";
// import Navbar from "@/components/Navbar/Navbar";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    // NextAuth signIn function কল করা হচ্ছে
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.error) {
      setError("Invalid Email or Password!");
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="bg-[#0a0a0a] min-h-screen flex items-center justify-center px-6">
        <div className="bg-[#141414] p-8 md:p-10 rounded-3xl border border-gray-800 shadow-2xl w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black uppercase tracking-tighter italic text-white">
              Welcome <span className="text-blue-600">Back</span>
            </h1>
            <p className="text-gray-400 mt-2 text-sm">
              Login to manage your bikes and profile
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 text-sm p-3 rounded-lg mb-6 text-center">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="rider@example.com"
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 transition-all text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 transition-all text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full btn text-white font-black uppercase tracking-widest py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Login Now
            </button>
          </form>

          {/* Google login button */}
          <GoogleLogin />
          {/* Footer Link */}
          <p className="text-center text-gray-500 mt-8 text-sm">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-blue-500 hover:underline font-bold"
            >
              Register here
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
