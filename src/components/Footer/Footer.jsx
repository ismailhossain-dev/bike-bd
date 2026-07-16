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
    <footer className="bg-[#0a0a0a] text-gray-400 font-sans">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center">
             <Logo/>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 italic font-medium">
              "Experience the ultimate freedom on two wheels. We provide the best premium bikes for
              every terrain."
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaLinkedinIn />, link: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-900 border border-gray-800 hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 text-gray-400 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Company
              <span className="absolute -bottom-1 left-0 w-8 h-1 bg-orange-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Bikes", href: "/allbikes" },
                { name: "Featured Bike", href: "/feature" },

                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-orange-500 transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-700 rounded-full group-hover:bg-orange-500 group-hover:w-3 transition-all"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories/Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Support
              <span className="absolute -bottom-1 left-0 w-8 h-1 bg-orange-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy & Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              Get in Touch
              <span className="absolute -bottom-1 left-0 w-8 h-1 bg-orange-500 rounded-full"></span>
            </h3>
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-900 rounded-xl text-orange-500 border border-gray-800">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-white font-semibold">Our Office</p>
                  <p className="text-gray-500">23 Revelation Street, Paris, France</p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-gray-500">
                <div className="p-3 bg-gray-900 rounded-xl text-orange-500 border border-gray-800">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-white font-semibold">Call Us</p>
                  <a href="tel:+01619408991" className="hover:text-orange-500">
                    +01619408991
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 text-gray-500">
                <div className="p-3 bg-gray-900 rounded-xl text-orange-500 border border-gray-800">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-white font-semibold">Email Us</p>
                  <a
                    href="mailto:programmarsabbir@gmail.com"
                    className="hover:text-orange-500 break-all"
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
      <div className="border-t border-gray-900 bg-black py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-gray-600">
          <p>© 2026 BIKE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 italic">
            <Link href="#" className="hover:text-orange-500">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-orange-500">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-orange-500">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
