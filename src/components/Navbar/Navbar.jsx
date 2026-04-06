"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LoginButton from "../LoginButton";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathName = usePathname();

  // Screen resize hole mobile menu bondho korar jonno (Best Practice)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/allbikes" },
    { name: "About", path: "/about" },
    { name: "Featured", path: "/feature" },
    { name: "Add Bike", path: "/add-bike" },
    { name: "Manage Bike", path: "/manage-bike" },
    { name: "Contact Us", path: "/contact" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="bg-[#111111] text-white sticky top-0 z-50 border-b border-gray-800 mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* 1. Logo - Always Visible */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <h1 className="text-xl md:text-2xl font-bold flex items-center tracking-tighter transition-colors group-hover:text-orange-500">
                B
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-orange-600 rounded-full mt-2 mx-0.5"></span>
                ike
              </h1>
            </Link>
          </div>

          {/* 2. Desktop Navigation (Hidden on Mobile/Tablet Portrait) */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`py-2 px-3 lg:px-4 rounded-full font-medium transition-all duration-300 text-sm lg:text-base ${
                  pathName === link.path
                    ? "bg-orange-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 3. User Actions & Hamburger */}
          <div className="flex items-center gap-3">
            {/* Desktop Auth Links */}
            <div className="hidden sm:flex items-center gap-3">
              {!session?.user ? (
                <>
                  <LoginButton />
                  <Link
                    href="/register"
                    className="bg-orange-600 px-5 py-2 rounded-full text-sm font-bold hover:bg-orange-700 transition shadow-md"
                  >
                    Register
                  </Link>
                </>
              ) : null}
            </div>

            {/* User Profile Dropdown */}
            {session?.user && (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 focus:outline-none ring-offset-2 focus:ring-2 focus:ring-orange-500 rounded-full transition"
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-orange-600 p-0.5 overflow-hidden">
                    <img
                      src={session.user.image || "https://i.ibb.co/5GzXkwq/user.png"}
                      alt="User"
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
                    <div className="absolute right-0 mt-3 w-56 bg-white text-gray-800 rounded-xl shadow-2xl py-3 z-50 border border-gray-100 animate-in fade-in zoom-in duration-200">
                      <div className="px-4 pb-2 mb-2 border-b border-gray-100">
                        <p className="text-sm font-bold truncate">{session.user.name}</p>
                        <p className="text-xs text-gray-500 truncate">{session.user.email}</p>
                      </div>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition"
                      >
                        My Profile
                      </Link>
                      <div className="px-3 mt-2">
                        <button
                          onClick={() => signOut()}
                          className="w-full py-2 text-xs font-bold text-white bg-red-500 hover:bg-red-600 rounded-lg transition"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE SIDEBAR --- */}
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Sidebar Content */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[350px] bg-[#0A0A0A] z-[70] shadow-2xl transition-transform duration-300 ease-in-out transform xl:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-10">
            <span className="text-orange-500 font-bold tracking-widest text-sm">NAVIGATION</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                  pathName === link.path
                    ? "bg-orange-600/10 text-orange-500 border border-orange-600/20"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Auth (If not logged in) */}
          {!session?.user && (
            <div className="mt-auto pt-6 border-t border-gray-800 space-y-3">
              <div className="flex flex-col gap-3">
                <LoginButton />
                <Link
                  href="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 bg-orange-600 text-center rounded-xl font-bold text-white hover:bg-orange-700 transition"
                >
                  Create Account
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
