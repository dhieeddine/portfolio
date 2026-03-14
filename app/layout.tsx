import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
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

export const metadata: Metadata = {
  title: {
    default: "Dhia Eddine Barhoumi — Software Engineering Student",
    template: "%s | Dhia Eddine Barhoumi",
  },
  description:
    "Software engineering student at ENIT passionate about ML, Computer Vision, Network Automation and Cloud/DevOps. Building intelligent systems.",
  keywords: ["ENIT", "Software Engineering", "Machine Learning", "Computer Vision", "DevOps", "Terraform", "Python", "Next.js"],
  authors: [{ name: "Dhia Eddine Barhoumi", url: "https://dhieeddine.github.io" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhiaeddine.me",
    title: "Dhia Eddine Barhoumi",
    description: "Software engineering student · ML · Cloud · DevOps",
    siteName: "Dhia Eddine Barhoumi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhia Eddine Barhoumi",
    description: "Software engineering student · ML · Cloud · DevOps",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${jetbrains.variable} font-sans bg-white dark:bg-[#0c0c0c] text-gray-900 dark:text-gray-100 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
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
