import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/ui/JsonLd";
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
    default: "Dhia Eddine Barhoumi — Software Engineering Student at ENIT",
    template: "%s | Dhia Eddine Barhoumi",
  },
  description:
    "Software engineering student at ENIT, Tunis. Passionate about Machine Learning, Computer Vision (YOLO), Network Automation, Terraform and Cloud/DevOps. Building intelligent systems that bridge ML and infrastructure.",
  keywords: [
    "Dhia Eddine Barhoumi", "ENIT", "Software Engineering Tunisia",
    "Machine Learning", "Computer Vision", "YOLO", "Network Automation",
    "Terraform", "DevOps", "Python", "Next.js", "Spring Boot", "Angular",
    "Containerlab", "Portfolio",
  ],
  authors: [{ name: "Dhia Eddine Barhoumi", url: BASE_URL }],
  creator: "Dhia Eddine Barhoumi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Dhia Eddine Barhoumi",
    title: "Dhia Eddine Barhoumi — Software Engineering Student",
    description: "Software engineering student at ENIT building ML pipelines, network automation tools and cloud infrastructure.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Dhia Eddine Barhoumi — Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhia Eddine Barhoumi",
    description: "Software engineering student · ML · Cloud · DevOps · ENIT",
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
  verification: {
    google: "PASTE_YOUR_GOOGLE_VERIFICATION_TOKEN_HERE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${jetbrains.variable} font-sans bg-white dark:bg-background-dark text-gray-900 dark:text-slate-100 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <PersonJsonLd />
          <WebsiteJsonLd />
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
