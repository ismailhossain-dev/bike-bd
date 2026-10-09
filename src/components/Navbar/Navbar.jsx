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
import Container from "../Container/Container";

const Navbar = () => {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathName = usePathname();
  const role = session?.user?.role;
  console.log(role, "navbar role")

  const navLinks = [
    { name: "HOME PAGE", path: "/" },
    { name: "SHOP", path: "/all-bikes" },
    { name: "Accessories", path: "/all-accessories" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-[#121212] text-white shadow-md border-b border-white/10 font-sans">
      {/* =====Top Headers social==== */}
      <div className="hidden lg:block border-b border-white/10 bg-[#0e0e0e] py-2.5 text-xs text-gray-300">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* email address */}
          <div className="flex items-center space-x-6">
            <span className="tracking-wide">
              5617 Glassford Street New York, NY 10000, USA
            </span>
            <span className="text-gray-600">|</span>
            <a
              href="mailto:ismil.dev69k@gmil.com"
              className="hover:text-orange-500 transition-colors font-medium"
            >
              ismil.dev69k@gmil.com
            </a>
          </div>

          {/* social icons */}
          <div className="flex items-center space-x-5 text-white/80">
            <a href="#" className="hover:text-orange-500 transition-colors">
              <Facebook size={15} />
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

    {/* Main Navigation */}
      <Container>
        <div className="  flex items-center justify-between">
          {/* Logo section */}
          <div className="flex-shrink-0  py-3 lg:border-r border-white/10 flex items-center justify-center">
            <Logo />
          </div>

         {/* Navbar for dekstop */}
          <nav className="hidden xl:flex items-center space-x-7 px-6 py-4">
            {navLinks.map((link) => {
              const isActive = pathName === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-xs font-bold tracking-widest uppercase transition-all duration-200 ${
                    isActive
                      ? "text-red-500"
                      : "text-gray-200 hover:text-red-500"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* profile*/}
          <div className="flex items-center   ">
            {/* cart icon */}
            <Link
              href="/dashboard/my-cart"
              className="relative text-gray-200 hover:text-red-500 transition-colors p-1 mr-2"
            >
              <ShoppingCart size={20} />
            </Link>

            {/* user profile*/}
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
                        {/* admin dashboard */}
                        {role === "admin" ? (
                          <div>
                            <Link
                              href="/dashboard/admin"
                              onClick={() => setIsDropdownOpen(false)}
                              className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                            >
                              <LayoutDashboard size={15} /> Dashboard
                            </Link>

                            <Link
                              href="/dashboard/admin/profile"
                              onClick={() => setIsDropdownOpen(false)}
                              className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                            >
                              <User size={15} /> My Profile
                            </Link>
                          </div>
                        ) : (
                          // user dashboard
                          <div>
                            <Link
                              href="/dashboard"
                              onClick={() => setIsDropdownOpen(false)}
                              className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                            >
                              <LayoutDashboard size={15} /> Dashboard
                            </Link>

                            <Link
                              href="/dashboard/my-profile"
                              onClick={() => setIsDropdownOpen(false)}
                              className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
                            >
                              <User size={15} /> My Profile
                            </Link>
                          </div>
                        )}
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
                href="/login"
                className="text-gray-200 hover:text-red-500 transition-colors p-1 uppercase btn text-xs font-bold"
              >
                Login
              </Link>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden text-white p-1 hover:text-red-500 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

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
