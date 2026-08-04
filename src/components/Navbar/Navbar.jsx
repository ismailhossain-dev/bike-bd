"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Logo from "../Logo/Logo";
import {
  LogOut,
  User,
  LayoutDashboard,
  Menu,
  X,
  ChevronRight,
  ShoppingCart,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

// Behance Custom Icon
const BehanceIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.001 3-3.003 0-5.725-1.745-5.725-6.28 0-4.305 2.502-6.72 5.568-6.72 3.864 0 5.432 2.822 4.99 6.28h-7.854c.05 2.128 1.408 3.86 3.52 3.86 1.488 0 2.536-.662 2.92-1.84h1.582zm-5.263-7.228c-1.468 0-2.348 1.055-2.52 2.588h4.945c-.068-1.503-.923-2.588-2.425-2.588zm-11.463 10.228h-7v-13h7.281c2.253 0 4.119 1.053 4.119 3.25 0 1.405-.783 2.378-1.83 2.88 1.463.435 2.43 1.625 2.43 3.395 0 2.485-2.025 3.475-5 3.475zm-4.281-10.428v2.793h2.868c1.077 0 1.832-.472 1.832-1.4 0-.895-.718-1.393-1.832-1.393h-2.868zm0 5.03v3.138h3.048c1.233 0 2.052-.511 2.052-1.56 0-1.076-.849-1.578-2.052-1.578h-3.048z" />
  </svg>
);

const Navbar = () => {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathName = usePathname();

  const navLinks = [
    { name: "HOME PAGE", path: "/" },
    { name: "SHOP", path: "/allbikes" },
    { name: "Accessories", path: "/our-all-accessories" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT", path: "/contact" },
    // { name: "INVENTORY", path: "/inventory" },
    // { name: "BLOG", path: "/blog" },

    // { name: "EVENTS", path: "/events" },
    // { name: "PAGES", path: "/pages" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-[#121212] text-white shadow-md border-b border-white/10 font-sans">
      {/* ------------------- ১. টপ বার (Top Bar) ------------------- */}
      <div className="hidden lg:block border-b border-white/10 bg-[#0e0e0e] py-2.5 text-xs text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* এড্রেস ও ইমেইল */}
          <div className="flex items-center space-x-6">
            <span className="tracking-wide">
              5617 Glassford Street New York, NY 10000, USA
            </span>
            <span className="text-gray-600">|</span>
            <a
              href="mailto:info@autobike.com"
              className="hover:text-orange-500 transition-colors font-medium"
            >
              ismil.dev69k@gmil.com
            </a>
          </div>

          {/* সোশ্যাল আইকনসমূহ */}
          <div className="flex items-center space-x-5 text-white/80">
            <a href="#" className="hover:text-orange-500 transition-colors">
              <Facebook size={15} />
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              <BehanceIcon />
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              <Linkedin size={15} />
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              <Twitter size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* ------------------- ২. মেইন নেভিগেশন বার ------------------- */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* লোগো সেকশন */}
        <div className="flex-shrink-0 px-4 sm:px-6 lg:px-8 py-3 lg:border-r border-white/10 flex items-center justify-center">
          <Logo />
        </div>

        {/* মাঝের মূল নেভিগেশন লিংকসমূহ (Desktop) */}
        <nav className="hidden xl:flex items-center space-x-7 px-6 py-4">
          {navLinks.map((link) => {
            const isActive = pathName === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`text-xs font-bold tracking-widest uppercase transition-all duration-200 ${
                  isActive ? "text-red-500" : "text-gray-200 hover:text-red-500"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* ডানপাশের আইকনসমূহ ও ইউজার প্রোফাইল */}
        <div className="flex items-center space-x-5 px-4 sm:px-6 lg:px-8">
          {/* সার্চ বাটন */}
          {/* <button className="text-gray-200 hover:text-red-500 transition-colors p-1">
            <Search size={19} />
          </button> */}

          {/* কার্ট আইকন (Badge সহ) */}
          <Link
            href="/dashboard/my-cart"
            className="relative text-gray-200 hover:text-red-500 transition-colors p-1"
          >
            <ShoppingCart size={20} />
            <span className="absolute -top-1.5 -right-2.5 bg-red-600 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>

          {/* ইউজার প্রোফাইল বা লগইন */}
          {session?.user ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center p-0.5 rounded-full ring-2 ring-red-500 transition-transform hover:scale-105"
              >
                <img
                  src={
                    session.user.image || "https://i.ibb.co/5GzXkwq/user.png"
                  }
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </button>

              {/* প্রফেশনাল ড্রপডাউন মেনু */}
              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-3 w-60 bg-[#1a1a1a] text-white rounded-xl shadow-2xl py-2 z-50 border border-white/10">
                    <div className="px-4 py-3 border-b border-white/10">
                      <p className="text-[10px] font-bold uppercase text-red-500 tracking-wider">
                        Signed in as
                      </p>
                      <p className="text-xs font-bold truncate mt-0.5">
                        {session.user.name}
                      </p>
                      <p className="text-[11px] text-gray-400 truncate">
                        {session.user.email}
                      </p>
                    </div>

                    <div className="p-1 space-y-1">
                      <Link
                        href="/dashboard/my-profile"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                      >
                        <User size={15} /> My Profile
                      </Link>
                      <Link
                        href="/dashboard"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                      >
                        <LayoutDashboard size={15} /> Dashboard
                      </Link>
                    </div>

                    <div className="p-1 border-t border-white/10">
                      <button
                        onClick={() => signOut()}
                        className="w-full flex items-center justify-center gap-2 py-2 text-xs font-bold text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                      >
                        <LogOut size={14} /> Logout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <Link
              href="/register"
              className="text-gray-200 hover:text-red-500 transition-colors p-1 uppercase btn"
            >
              {/* <User size={20} /> */}
              Register
            </Link>
          )}

          {/* মোবাইল মেনু টগল বাটন */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden text-white p-1 hover:text-red-500 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ------------------- ৩. মোবাইল নেভিগেশন সাইডবার ------------------- */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#121212] z-[70] shadow-2xl border-l border-white/10 transition-transform duration-300 ease-out xl:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 text-white">
          <div className="flex justify-between items-center pb-4 border-b border-white/10">
            <span className="text-red-500 font-extrabold text-xs uppercase tracking-widest">
              Navigation
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col space-y-3 mt-6">
            {navLinks.map((link) => {
              const isActive = pathName === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-red-600 text-white"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={15} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
