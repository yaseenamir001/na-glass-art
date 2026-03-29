import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <section className="bg-black min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-4xl text-center mb-12">All Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block group"
            >
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition"
                />
              </div>

              <h3 className="text-white mt-4">{project.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
