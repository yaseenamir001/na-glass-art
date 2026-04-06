"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  //  FORM STATE (EMAIL BASED)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(
          "Thank you! Your message has been sent. We’ll get back to you shortly.",
        );
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Oops! Failed to send your message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-28 bg-white dark:bg-black text-slate-900 dark:text-white overflow-hidden">
      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center px-6 py-12 mb-16">
        <p className="text-sm md:text-lg uppercase tracking-[0.35em] text-sky-600 dark:text-sky-400 mb-4">
          Contact Us
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Let’s Build Something
          <span className="block mt-2 text-sky-600 dark:text-sky-400">
            Exceptional Together
          </span>
        </h2>
        <p className="mt-5 text-slate-700 dark:text-slate-400">
          Contact us to explore tailored glass and aluminium solutions for your
          space.
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div className="max-w-7xl mx-auto px-4 mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { icon: Phone, title: "Call Us", value: "+92 321 4185111" },
          { icon: Mail, title: "Email", value: "naglassart@gmail.com" },
          { icon: MapPin, title: "Location", value: "Lahore, Pakistan" },
        ].map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="p-5 md:p-7 rounded-2xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
            >
              <div className="flex items-center gap-5">
                <div className="p-3 rounded-xl bg-sky-500/10 shrink-0">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-sky-600 dark:text-sky-400" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold">{item.title}</h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 whitespace-normal">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        {/* EMAIL FORM */}
        <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
          <h3 className="text-xl md:text-2xl font-semibold mb-5">
            Send us a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-sky-500"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={5}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/10 bg-transparent focus:outline-none focus:ring-2 focus:ring-sky-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 font-semibold text-white bg-linear-to-r from-sky-500 to-sky-600 rounded-xl cursor-pointer shadow-md transition-colors duration-300 ease-in-out hover:from-sky-600 hover:to-sky-700 hover:opacity-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">
          {/* WHATSAPP */}
          <div className="p-6 md:p-8 rounded-2xl bg-green-500/10 border border-green-500/20">
            <h3 className="text-xl font-semibold mb-3">Need Instant Help?</h3>

            <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">
              Chat directly on WhatsApp for quick response & consultation.
            </p>

            <a
              href={`https://wa.me/923214185111?text=${encodeURIComponent(
                `Hello there,

I would like to inquire about your services.`,
              )}`}
              target="_blank"
              className="inline-block px-5 py-3 font-semibold text-white bg-green-500 rounded-xl transition-colors duration-300 ease-in-out hover:bg-green-600 hover:opacity-95"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* TRUST */}
          <div className="p-6 md:p-8 rounded-2xl bg-sky-500/10 border border-sky-500/20">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Why Clients Trust Us
            </h3>

            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>✓ 25+ Years Experience</li>
              <li>✓ 500+ Projects Completed</li>
              <li>✓ Fast & Reliable Service</li>
            </ul>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition duration-300">
          <iframe
            src="https://maps.google.com/maps?q=Ghazi%20Road%20Millat%20Road%20Lahore%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-80 md:h-96 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
