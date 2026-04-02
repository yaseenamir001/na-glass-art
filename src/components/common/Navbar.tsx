"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isDark = theme === "dark";

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  // Toggle Theme
  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  // Lock scroll when menu open
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const navBg = isDark
    ? "bg-black/95 backdrop-blur-md text-white"
    : "bg-white/95 backdrop-blur-md text-slate-900";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      } ${navBg} ${!isDark && "border-b border-slate-200"}`}
    >
      <nav className="mx-auto max-w-7xl px-6 py-3 lg:py-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold tracking-tight"
        >
          <span className={isDark ? "text-white" : "text-slate-900"}>NA</span>
          <span className={isDark ? "text-sky-400" : "text-sky-600"}>
            {" "}
            Glass Art
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${
                    active
                      ? isDark
                        ? "text-sky-400"
                        : "text-sky-600"
                      : isDark
                        ? "text-slate-300 hover:text-sky-400/90"
                        : "text-slate-700 hover:text-sky-600/90"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 w-full h-0.5 bg-linear-to-r from-sky-400 to-sky-600 transition-all duration-300 origin-left ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full transition-all cursor-pointer duration-300 ease-in-out transform hover:rotate-12 ${
              isDark
                ? "text-white hover:bg-white/10 hover:text-sky-400"
                : "text-slate-700 hover:bg-slate-200/70 hover:text-sky-600"
            }`}
            aria-label="Toggle dark mode"
          >
            <span className="transition-transform duration-500 ease-in-out transform hover:rotate-12">
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </span>
          </button>

          <Link
            href="/contact"
            className="px-4 py-3 text-sm font-semibold text-white bg-linear-to-r from-sky-500 to-sky-600 rounded-lg shadow-md transition-colors duration-300 ease-in-out hover:from-sky-600 hover:to-sky-700 hover:opacity-95"
          >
            Get Free Consultation
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-2 sm:gap-0">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all cursor-pointer ${
              isDark
                ? "text-white hover:bg-white/10 hover:text-sky-400"
                : "text-slate-700 hover:bg-slate-200/50 hover:text-sky-600"
            }`}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-full transition-all cursor-pointer ${
              isDark
                ? "text-white hover:bg-white/10 hover:text-sky-400"
                : "text-slate-700 hover:bg-slate-200/50 hover:text-sky-600"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`border-t ${navBg} ${
            isDark ? "border-white/5" : "border-slate-200"
          } rounded-b-2xl`}
        >
          <div className="px-5 py-8 space-y-2 max-w-7xl mx-auto">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-5 py-2 rounded-xl text-base font-medium transition-all duration-300 ${
                    active
                      ? isDark
                        ? "bg-sky-500/20 text-sky-400"
                        : "bg-sky-100 text-sky-600"
                      : isDark
                        ? "text-slate-300 hover:bg-white/10 hover:text-sky-400"
                        : "text-slate-700 hover:bg-slate-100 hover:text-sky-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-6 px-4 py-3 text-sm text-center font-semibold text-white bg-linear-to-r from-sky-500 to-sky-600 rounded-lg shadow-md transition-colors duration-300 ease-in-out hover:from-sky-600 hover:to-sky-700 hover:opacity-95"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
