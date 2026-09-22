import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PersonJsonLd, WebsiteJsonLd, ScholarlyArticleJsonLd } from "@/components/ui/JsonLd";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dhiaeddinebarhoumi.me";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Dhia Eddine Barhoumi | AI Systems & Cloud Automation Engineer",
    template: "%s | Dhia Eddine Barhoumi",
  },
  description:
    "Portfolio of Dhia Eddine Barhoumi, Software Engineering student at ENIT specializing in Multi-Agent AI, RAG, Computer Vision (YOLOv8), PostGIS, Terraform and Cloud Automation. Author of IEEE AIDIST 2026 paper.",
  keywords: [
    "Dhia Eddine Barhoumi", "ENIT", "CartaGen", "Net2Terraform", "IEEE AIDIST 2026",
    "Multi-Agent AI", "RAG", "PostGIS", "FastAPI", "Computer Vision", "YOLOv8",
    "Terraform", "DevOps", "Python", "Next.js", "Spring Boot", "Angular 20",
    "Hexagonal Architecture", "Containerlab", "Portfolio",
  ],
  authors: [{ name: "Dhia Eddine Barhoumi", url: BASE_URL }],
  creator: "Dhia Eddine Barhoumi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Dhia Eddine Barhoumi",
    title: "Dhia Eddine Barhoumi | AI Systems & Cloud Automation Engineer",
    description: "Software Engineering student at ENIT building Multi-Agent AI platforms, Vision-to-Infrastructure pipelines, and high-performance cloud architectures.",
    images: [{ url: "/screen.png", width: 1200, height: 630, alt: "Dhia Eddine Barhoumi Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhia Eddine Barhoumi | AI Systems & Cloud Automation Engineer",
    description: "Software Engineering @ ENIT | Multi-Agent AI | Computer Vision | IEEE AIDIST 2026 | Cloud DevOps",
    images: ["/screen.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${syne.variable} ${jetbrains.variable} font-sans bg-background-darker text-slate-100 antialiased overflow-x-hidden min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <PersonJsonLd />
          <WebsiteJsonLd />
          <ScholarlyArticleJsonLd />
          <div className="relative min-h-screen flex flex-col bg-[#0a1a1a]">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
