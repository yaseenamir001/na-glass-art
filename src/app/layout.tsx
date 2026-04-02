import Navbar from "@/components/common/Navbar";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
