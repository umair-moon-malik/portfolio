import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import DotGrid from "@/components/ui/DotGrid";
import { Dancing_Script, Syne, Inter } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-syne",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-dancing",
});

export const metadata = {
  title: "Umair Malik | Full Stack Developer",
  description:
    "Full Stack Developer focused on secure scalable systems, modern web applications, Linux, and cybersecurity.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${dancing.variable} ${syne.variable} ${inter.variable} `}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-[#0a0a0a] text-white">
        <div className="fixed inset-0 z-0">
          <DotGrid
            dotSize={4}
            gap={15}
            baseColor="#1a1a1a"
            activeColor="#2dd4bf"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        <div className="relative z-10 flex flex-col flex-1">
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
