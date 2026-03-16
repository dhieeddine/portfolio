"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ZoomableImage } from "@/components/ui/ZoomableImage";

const links = [
  { href: "/#home",       label: "Home" },
  { href: "/#projects",   label: "Projects" },
  { href: "/#skills",     label: "Stack" },
  { href: "/#experience", label: "Live Lab" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-primary/20 px-6 py-4 lg:px-20 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-primary/30 hover:ring-primary transition-all duration-300">
            <ZoomableImage
              src="/profil.png"
              alt="Dhia Eddine Barhoumi"
              className="w-full h-full"
            />
          </div>
          <Link href="/" className="group">
            <span className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight group-hover:text-primary transition-colors">
              Dhia<span className="text-primary">Eddine</span>
            </span>
          </Link>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <Link
          href="/#contact"
          className="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-background-dark text-sm font-bold transition-transform hover:scale-105"
        >
          Contact
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
