"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-gray-400 font-sans">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 font-normal">
              Experience the ultimate freedom on two wheels. We provide the best premium bikes for
              every terrain with uncompromised quality and performance.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaLinkedinIn />, link: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 text-gray-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-base font-extrabold text-white uppercase tracking-wider relative inline-block">
              Company
              <span className="absolute -bottom-1.5 left-0 w-6 h-0.5 bg-red-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Bikes", href: "/allbikes" },
                { name: "Featured Bike", href: "/feature" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-red-500 transition-colors flex items-center gap-2 group text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-base font-extrabold text-white uppercase tracking-wider relative inline-block">
              Support
              <span className="absolute -bottom-1.5 left-0 w-6 h-0.5 bg-red-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm font-medium text-gray-400">
              {[
                "Help Center",
                "Shipping Policy",
                "Refund Policy",
                "Privacy & Terms",
                "Track Order",
              ].map((text, idx) => (
                <li key={idx}>
                  <Link href="#" className="hover:text-red-500 transition-colors">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-base font-extrabold text-white uppercase tracking-wider relative inline-block">
              Get in Touch
              <span className="absolute -bottom-1.5 left-0 w-6 h-0.5 bg-red-600 rounded-full"></span>
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-white/5 rounded-lg text-red-500 border border-white/10 mt-0.5">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-white font-semibold">Our Office</p>
                  <p className="text-gray-400 text-xs">23 Revelation Street, Paris, France</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-400">
                <div className="p-2.5 bg-white/5 rounded-lg text-red-500 border border-white/10 mt-0.5">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-white font-semibold">Call Us</p>
                  <a href="tel:+01619408991" className="hover:text-red-500 text-xs">
                    +01619408991
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-400">
                <div className="p-2.5 bg-white/5 rounded-lg text-red-500 border border-white/10 mt-0.5">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-white font-semibold">Email Us</p>
                  <a
                    href="mailto:programmarsabbir@gmail.com"
                    className="hover:text-red-500 break-all text-xs"
                  >
                    programmarsabbir@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#050505] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
          <p>© 2026 AUTOBIKE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-red-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-red-500 transition-colors">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-red-500 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;