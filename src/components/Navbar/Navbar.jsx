"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathName = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/allbikes" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-[#080808]/90 backdrop-blur-md border-b border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* ১. লোগো */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight transition-all duration-300">
                <span className="text-white group-hover:text-orange-500 transition-colors">B</span>
                <span className="inline-block w-2.5 h-2.5 bg-orange-600 rounded-full mx-0.5 animate-pulse"></span>
                <span className="text-white group-hover:text-orange-500 transition-colors">ike</span>
              </h1>
            </Link>
          </div>

          {/* ২. ডেস্কটপ নেভিগেশন (হোভার ও অ্যাক্টিভ অ্যানিমেটেড বর্ডার সহ) */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathName === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative py-2 text-sm font-semibold tracking-wide transition-colors duration-300 group ${
                    isActive ? "text-orange-500" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {/* মেনুর টেক্সট */}
                  <span>{link.name}</span>
                  
                  {/* নিচে ফুল-উইথ অ্যানিমেটেড বর্ডার */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-orange-600 to-amber-500 transition-all duration-300 ease-out ${
                      isActive 
                        ? "w-full opacity-100" 
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ৩. ইউজার অ্যাকশন ও মোবাইল মেনু বাটন */}
          <div className="flex items-center gap-4">
            {/* Create Account Button (Logged Out) */}
            {!session?.user && (
              <div className="hidden sm:flex items-center">
                <Link
                  href="/register"
                  className="relative group overflow-hidden bg-gradient-to-r from-orange-600 to-amber-500 px-6 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/20 active:scale-95"
                >
                  <span className="relative z-10">Create Account</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </div>
            )}

            {/* প্রোফাইল ড্রপডাউন (Logged In) */}
            {session?.user && (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded-full transition duration-300"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-orange-500 p-0.5 overflow-hidden hover:scale-105 transition duration-300">
                    <img
                      src={session.user.image || "https://i.ibb.co/5GzXkwq/user.png"}
                      alt="User Avatar"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </button>

                {isDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsDropdownOpen(false)}
                    ></div>
                    <div className="absolute right-0 mt-3 w-60 bg-[#121212] text-white rounded-2xl shadow-2xl py-3 z-50 border border-gray-800/80 animate-in fade-in zoom-in-95 duration-200">
                      <div className="px-4 pb-3 mb-2 border-b border-gray-800">
                        <p className="text-sm font-bold truncate text-gray-100">{session.user.name}</p>
                        <p className="text-xs text-gray-400 truncate mt-0.5">{session.user.email}</p>
                      </div>
                      <Link
                        href="/dashboard/my-profile"
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-orange-500 transition"
                      >
                        My Profile
                      </Link>
                      <div className="px-3 mt-3">
                        <button
                          onClick={() => signOut()}
                          className="w-full py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors duration-300"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* মোবাইল মেনু বাটন */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all active:scale-95"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- মোবাইল সাইডবার --- */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-[60] transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-[#0c0c0c] z-[70] border-l border-gray-800/50 shadow-2xl transition-transform duration-300 ease-out transform xl:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-orange-500 font-bold tracking-widest text-xs">MENU</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* মোবাইল মেনু লিংক */}
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathName === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-orange-600/10 text-orange-500 border border-orange-600/20"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {!session?.user && (
            <div className="mt-auto pt-6 border-t border-gray-800">
              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-center rounded-xl font-bold text-white transition hover:opacity-95"
              >
                Create Account
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;