import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main className="pt-10">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 10000,
            style: {
              fontSize: "14px",
              padding: "16px",
              borderRadius: "12px",
              background: "#1E293B",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
