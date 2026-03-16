import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-[92vh] flex items-center px-6 py-20 max-w-6xl mx-auto">
      <div className="w-full">
        {/* Terminal badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-200 dark:border-teal-500/30 bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400 text-xs font-mono mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          Available for internships & collaborations
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold tracking-tight leading-[0.95] mb-6 animate-fade-up">
          Dhia Eddine
          <br />
          <span className="gradient-text">Barhoumi</span>
        </h1>

        {/* Role */}
        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-mono mb-4 animate-fade-up delay-100">
          <span className="text-teal-500">$</span>{" "}
          <span className="cursor">Software Engineering Student · ENIT</span>
        </p>

        {/* Description */}
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 animate-fade-up delay-200">
          Building intelligent systems at the intersection of{" "}
          <span className="text-teal-600 dark:text-teal-400 font-medium">Machine Learning</span>,{" "}
          <span className="text-teal-600 dark:text-teal-400 font-medium">Network Automation</span>, and{" "}
          <span className="text-teal-600 dark:text-teal-400 font-medium">Cloud Infrastructure</span>.
          Turning diagrams into deployments.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
          <Link
            href="/#projects"
            className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-medium transition-all hover:scale-105 active:scale-95"
          >
            View Projects
          </Link>
          <Link
            href="/#contact"
            className="px-6 py-3 rounded-xl border border-gray-200 dark:border-white/10 hover:border-teal-500 dark:hover:border-teal-500 text-gray-700 dark:text-gray-300 font-medium transition-all hover:scale-105 active:scale-95"
          >
            Get in Touch
          </Link>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-xl border border-gray-200 dark:border-white/10 hover:border-teal-500 dark:hover:border-teal-500 text-gray-700 dark:text-gray-300 font-medium transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 animate-fade-in delay-500">
          <span className="text-xs font-mono">scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-300 dark:from-gray-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}
