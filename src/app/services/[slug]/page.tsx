import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";

export default async function ServiceDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const service = services.find(
    (s) => s.slug.toLowerCase() === slug.toLowerCase(),
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Service Not Found
      </div>
    );
  }

  return (
    <section className="bg-white dark:bg-black text-slate-900 dark:text-white">
      {/*  HERO */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-b from-white/50 via-white/10 to-white/10 dark:bg-none dark:bg-black/70 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl text-slate-900 dark:text-white font-bold">
            {service.title}
          </h1>

          <p className="mt-4 text-lg text-slate-200 dark:text-slate-300 max-w-2xl">
            {service.desc}
          </p>
        </div>
      </div>

      {/*  CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {/* 🔹 DETAILS */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            About This Service
          </h2>
          <p className="text-slate-600 dark:text-slate-300 lg:text-lg leading-relaxed max-w-3xl">
            {service.details}
          </p>
        </div>

        {/* 🔹 FEATURES */}
        {service.features && (
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">
              Key Features
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm dark:shadow-none hover:shadow-md dark:hover:bg-white/10 transition"
                >
                  <p className="text-slate-600 dark:text-slate-300 font-medium">
                    ✓ {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 🔹 PROCESS */}
        {service.process && (
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">Our Process</h2>

            <div className="grid md:grid-cols-4 gap-10 lg:gap-6">
              {service.process.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 mx-auto mt-2 mb-4 flex items-center justify-center rounded-full bg-sky-600 dark:bg-sky-400 text-white">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 🔹 GALLERY */}
        {service.gallery && (
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">
              Project Gallery
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {service.gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative h-60 rounded-xl overflow-hidden group"
                >
                  <Image
                    src={img}
                    alt="gallery"
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/*  CTA */}
        <div className="text-center bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-10 shadow-md dark:shadow-none">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h3>

          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Contact us today and get a free consultation for your project.
          </p>

          <Link
            href="/contact"
            className="px-4 py-3 text-sm font-semibold text-white bg-linear-to-r from-sky-500 to-sky-600 rounded-lg shadow-md transition-colors duration-300 ease-in-out hover:from-sky-600 hover:to-sky-700 hover:opacity-95"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
