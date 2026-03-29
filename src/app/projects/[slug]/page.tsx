import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function ProjectDetail({
  params,
}: {
  params: { slug?: string };
}) {
  const slug = params?.slug;

  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Project Not Found
      </div>
    );
  }

  const project = projects.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase(),
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Project Coming Soon
      </div>
    );
  }

  return <div className="text-white">{/* UI */}</div>;
}
