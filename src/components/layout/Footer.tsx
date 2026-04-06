"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-black text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-white/10">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
        {/* BRAND */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            <span>NA</span>
            <span className="text-sky-600 dark:text-sky-400"> Glass Art</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed max-w-sm">
            Premium glass & aluminium solutions for modern residential and
            commercial spaces with precision and elegant design.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-[15px]">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-5">
            Services
          </h3>

          <ul className="space-y-3 text-[15px]">
            <li>Glass Doors</li>
            <li>Aluminium Windows</li>
            <li>Office Partitions</li>
            <li>Shower Cabins</li>
            <li>Custom Designs</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-5">
            Contact Info
          </h3>

          <ul className="space-y-4 text-[15px]">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 text-sky-600 dark:text-sky-400" />
              +92 321 4185111
            </li>

            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 text-sky-600 dark:text-sky-400" />
              Lahore, Pakistan
            </li>

            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-1 text-sky-600 dark:text-sky-400" />
              naglassart@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-slate-200 dark:border-white/10" />

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 py-7 flex flex-col md:flex-row justify-between items-center gap-4 text-[15px] text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} NA Glass Art. All rights reserved.</p>

        <div className="flex gap-6">
          <Link href="#" className="hover:text-sky-600 transition">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-sky-600 transition">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
