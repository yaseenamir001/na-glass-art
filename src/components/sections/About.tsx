"use client";

import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full py-8 bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-300">
      {/* HERO */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/about/glass-door.jpg"
          alt="About NA Glass Art"
          fill
          priority
          className="object-cover scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-white/50 via-white/10 to-white dark:from-black/80 dark:via-black/60 dark:to-black flex items-center justify-center text-center px-6">
          <div>
            <p className="text-sm md:text-lg uppercase tracking-[0.35em] text-sky-600 dark:text-sky-400 mb-4">
              About Us
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Crafting Glass with
              <span className="block text-sky-600 dark:text-sky-400 mt-2">
                Precision & Passion
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* STORY */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        {/* IMAGE */}
        <div className="relative h-90 md:h-130 rounded-2xl overflow-hidden group">
          <Image
            src="/images/about/Door.avif"
            alt="Our Story"
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
        </div>

        {/* TEXT */}
        <div>
          <p className="text-sky-600 dark:text-sky-400 uppercase tracking-widest text-xs mb-3">
            Our Journey
          </p>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            Our Story
          </h2>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[16px] mb-5">
            NA Glass Art provides premium glass and aluminium solutions for both
            residential and commercial spaces. With years of experience, we
            specialize in modern designs, durable materials, and precision
            installation.
          </p>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[16px]">
            Our mission is to transform spaces with elegant glass systems that
            combine functionality with aesthetics while ensuring long-term
            client satisfaction.
          </p>

          {/* FEATURES */}
          <div className="mt-8 space-y-4">
            {[
              "High-quality glass installations",
              "Custom designs for every project",
              "Professional and timely delivery",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-sky-500/10 text-sky-500 text-sm">
                  ✓
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-sky-500 transition">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-block mt-8 px-6 py-3 font-semibold text-white bg-linear-to-r from-sky-500 to-sky-600 rounded-xl shadow-md transition-colors duration-300 ease-in-out hover:from-sky-600 hover:to-sky-700 hover:opacity-95"
          >
            Get Free Quote
          </Link>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Premium Quality",
              desc: "We use top-grade materials ensuring durability and long life.",
            },
            {
              title: "Expert Team",
              desc: "Skilled professionals with years of industry experience.",
            },
            {
              title: "Custom Solutions",
              desc: "Tailored designs according to your space and needs.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-sky-400/40 transition-all duration-300 hover:translate-y-1"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-sky-500/10 blur-xl transition" />

              <h3 className="relative z-10 text-xl font-semibold mb-3 text-sky-600 dark:text-sky-400">
                {item.title}
              </h3>

              <p className="relative z-10 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
