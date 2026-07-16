"use client";
import GoogleLogin from "@/components/auth/GoogleLogin";
import Footer from "@/components/Footer/Footer";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // পাসওয়ার্ড স্টেটের জন্য

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

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
    <div className="min-h-screen bg-gray-50/50 text-gray-900 flex flex-col justify-between antialiased">
      <div className="flex-grow flex items-center justify-center p-4 md:p-8 lg:p-12">
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden w-full max-w-5xl grid lg:grid-cols-2 min-h-[600px] lg:min-h-[650px]">
          
          {/* Left Side: Premium Image Overlay Gallery Showcase (50% Width) */}
          <div className="hidden lg:block relative overflow-hidden group h-full">
            <img 
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="/assets/gpx.jpeg" 
              alt="login-bike" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-8 z-10">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-400 bg-white/10 border border-white/20 px-3 py-1.5 rounded-md self-start backdrop-blur-md">
                Rider Core v2.0
              </span>
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight italic text-white mb-2">
                  Unleash The <br/> <span className="text-blue-400">Power Within</span>
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-medium">
                  Log in to access your customized motorcycle configuration portfolio dashboard panel.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Informative Typography & Form Section (50% Width) */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100">
            
            {/* Header Typography */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic text-gray-950">
                Welcome <span className="text-blue-600">Back</span>
              </h1>
              <p className="text-gray-500 mt-2 text-xs font-semibold tracking-wide">
                Securely authenticate credential parameters to manage your assets
              </p>
            </div>

            {/* Error Message Layout Alert */}
            {error && (
              <div className="bg-red-5 border border-red-200 text-red-600 text-xs font-bold p-3 rounded-xl mb-6 text-center tracking-wide uppercase shadow-sm">
                {error}
              </div>
            )}

            {/* Login Credential Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="rider@example.com"
                  className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3.5 focus:outline-none focus:bg-white transition-all text-sm font-semibold text-gray-900 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                  Password Sequence
                </label>
                {/* ইনপুট এবং বাটন একসাথে রাখার জন্য পজিশন রিলেটিভ করা হয়েছে */}
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    placeholder="••••••••"
                    className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 rounded-xl pl-4 pr-12 py-3.5 focus:outline-none focus:bg-white transition-all text-sm font-semibold text-gray-900 placeholder-gray-400"
                  />
                  {/* Eye Icon Button */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-gray-400 hover:text-blue-500 transition-colors focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      // বন্ধ চোখের আইকন (Eye Off)
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    ) : (
                      // খোলা চোখের আইকন (Eye Open)
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn text-white font-black uppercase tracking-widest py-4 rounded-xl transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-blue-600/10"
              >
                Login Now
              </button>
            </form>

            {/* Third Party OAuth Separator */}
            <div className="relative my-6 flex items-center justify-center">
              <div className="absolute w-full border-t border-gray-200"></div>
              <span className="relative bg-white px-4 text-[9px] font-black uppercase tracking-widest text-gray-400">
                Or Framework Identity
              </span>
            </div>

            <div className="w-full">
              <GoogleLogin />
            </div>

            {/* Register Redirect Navigation Footer Link */}
            <p className="text-center text-gray-400 mt-8 text-xs font-semibold tracking-wide">
              Don't have an active account profile?{" "}
              <Link
                href="/register"
                className="text-blue-600 hover:text-blue-500 font-black transition-colors underline underline-offset-4 ml-1"
              >
                Register Here
              </Link>
            </p>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;