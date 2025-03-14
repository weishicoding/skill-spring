import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeProvider from "../components/ThemeProvider";
import ProgressProvider from "../components/ProgressProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TailwindIndicator from "../components/TailwindIndicator";
import { cn } from "@/utils/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const biotif = localFont({
  src: [
    {
      path: "../styles/fonts/Biotif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/Biotif-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../styles/fonts/Biotif-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it-IT">
      <body className={cn(inter.className, biotif.className)}>
        <SpeedInsights />
        <ThemeProvider attribute="class" enableSystem={false}>
          <ProgressProvider>
            <Header />
            <main className="static mx-auto max-w-5xl px-8 py-24 md:mb-16">
              {children}
            </main>
            <Footer />
            <TailwindIndicator />
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
