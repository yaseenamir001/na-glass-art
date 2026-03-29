import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-xl">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-sky-400 mb-4">Working on it</h1>

        {/* Description */}
        <p className="text-slate-300 text-lg mb-6">
          This page is currently in progress. We’re working on it and it will be
          live soon.
        </p>

        {/* Small text */}
        <p className="text-slate-500 text-sm mb-8">
          Thank you for your patience ❤️
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-linear-to-r from-sky-500 to-sky-600 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
