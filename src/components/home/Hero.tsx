"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Building2, BadgeCheck, Smile } from "lucide-react";

const images = [
  "/images/hero/glass1.jpg",
  "/images/hero/glass2.jpg",
  "/images/hero/glass3.webp",
  "/images/hero/glass5.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center lg:justify-center overflow-hidden">
      {/* Background */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      {/* Content */}
      <div className="relative z-10 w-full px-6 text-center mt-12 pt-24 pb-32 lg:py-0">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-sky-400 mb-5">
            Architectural Glass & Aluminium Specialists
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white leading-tight">
            Where Glass Meets
            <span className="block mt-3 text-sky-400">
              Precision Engineering
            </span>
          </h1>

          <p className="mt-6 text-base md:text-xl text-slate-300 max-w-2xl mx-auto">
            We design and install premium glass and aluminium systems for
            residential and commercial spaces.
          </p>

          {/* Stats */}
          <div className="mt-10 md:mt-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
              <div className="flex flex-col items-center space-y-3">
                <Building2 className="w-8 h-8 text-sky-400" />
                <p className="text-3xl md:text-4xl font-bold text-white">
                  500+
                </p>
                <p className="text-xs text-slate-400 uppercase">
                  Projects Completed
                </p>
              </div>

              <div className="flex flex-col items-center space-y-3">
                <BadgeCheck className="w-8 h-8 text-sky-400" />
                <p className="text-3xl md:text-4xl font-bold text-white">25+</p>
                <p className="text-xs text-slate-400 uppercase">
                  Years Experience
                </p>
              </div>

              <div className="flex flex-col items-center space-y-3">
                <Smile className="w-8 h-8 text-sky-400" />
                <p className="text-3xl md:text-4xl font-bold text-white">98%</p>
                <p className="text-xs text-slate-400 uppercase">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 mb-15 flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 font-semibold text-white bg-linear-to-r from-sky-500 to-sky-600 rounded-xl shadow-md transition-colors duration-300 ease-in-out hover:from-sky-600 hover:to-sky-700 hover:opacity-95"
            >
              Get Free Consultation
            </Link>

            <Link
              href="/projects"
              className="px-8 py-3 border border-sky-500 text-sky-500 rounded-xl font-semibold transition-colors duration-300 ease-in-out hover:bg-sky-600 hover:text-white hover:border-sky-600"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 md:bottom-14 left-0 w-full px-4 md:px-8 py-2 flex flex-col gap-8 z-10">
        {/* Scroll Indicator (Center) */}
        <div className="flex justify-center">
          <div className="animate-bounce flex flex-col items-center">
            <div className="w-3 h-3 border-b-2 border-r-2 border-white rotate-45 mb-1"></div>
            <div className="w-3 h-3 border-b-2 border-r-2 border-white rotate-45"></div>
          </div>
        </div>

        {/* Image Indicators (Right) */}
        <div className="flex justify-end gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === current ? "w-10 bg-sky-400" : "w-3 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
