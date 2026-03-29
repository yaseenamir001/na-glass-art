import Navbar from "@/components/common/Navbar";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {" "}
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
