"use client";

import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

const Services = () => {
  return (
    <section className="relative w-full py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/95 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg uppercase tracking-[0.35em] text-sky-400 mb-4">
            Our Services
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Premium Glass & Aluminium
            <span className="block mt-2 text-sky-400">
              Solutions for Every Space
            </span>
          </h2>
          <p className="mt-5 text-slate-400 text-base md:text-lg">
            We provide high-end glass and aluminium services tailored for
            residential and commercial environments with precision and quality.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.slug}
                className="group relative h-80 rounded-2xl overflow-hidden border border-white/10 hover:scale-[1.03] transition"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-800 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60" />

                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-500/20 mb-4">
                    <Icon className="w-6 h-6 text-sky-400" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300">{service.desc}</p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-4 text-sm text-sky-400 opacity-0 group-hover:opacity-100 transition"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
