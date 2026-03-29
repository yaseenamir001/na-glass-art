"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section className="relative w-full py-20 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/95 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg uppercase tracking-[0.35em] text-sky-400 mb-4">
            Our Projects
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
            Our Recent Work
            <span className="block mt-2 text-sky-400">
              Crafted with Precision
            </span>
          </h2>

          <p className="mt-5 text-slate-400 text-base md:text-lg">
            Explore our latest glass and aluminium installations designed with
            perfection, durability, and modern aesthetics.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <Link href={`/projects/${project.slug}`}>
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6 cursor-pointer">
                  <p className="text-xs text-sky-400 uppercase tracking-widest mb-2">
                    {project.category}
                  </p>

                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>

                  <span className="mt-3 inline-block text-sm text-sky-300">
                    View Details →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/projects"
            className="inline-block px-8 py-3 text-white font-semibold bg-linear-to-r from-sky-500 to-sky-600 rounded-xl shadow-md transition-opacity duration-300 hover:opacity-90 ease-in-out"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
