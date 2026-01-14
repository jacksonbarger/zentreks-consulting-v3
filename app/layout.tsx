import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Zentreks Consulting | AI-First Strategic Consulting",
  description: "Transform your business with AI-powered strategic consulting. Expert guidance in AI integration, workflow optimization, and digital transformation.",
  keywords: ["consulting", "AI", "strategy", "digital transformation", "business consulting"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-[#0D0D0D] text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
