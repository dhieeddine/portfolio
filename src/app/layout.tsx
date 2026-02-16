import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhia Eddine Barhoumi | DevOps & Cloud Engineer",
  description:
    "Software Engineering Student @ ENIT specializing in Cloud Native technologies, DevOps practices, and Platform Engineering. Building scalable architectures and automating deployment pipelines.",
  keywords: [
    "DevOps",
    "Cloud Engineering",
    "Platform Engineering",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "Linux",
    "Infrastructure as Code",
    "ENIT",
    "Tunisia",
  ],
  authors: [{ name: "Dhia Eddine Barhoumi" }],
  openGraph: {
    title: "Dhia Eddine Barhoumi | DevOps & Cloud Engineer",
    description:
      "Software Engineering Student specializing in Cloud Native technologies and DevOps practices.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
