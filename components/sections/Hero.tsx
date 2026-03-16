import Link from "next/link";
import { ZoomableImage } from "@/components/ui/ZoomableImage";

export function Hero() {
  return (
    <section id="home" className="px-6 py-12 lg:px-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

        {/* Left — Text Content */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              STATUS: READY_FOR_CHALLENGE
            </div>

            {/* Name */}
            <h1 className="text-slate-900 dark:text-slate-100 text-5xl lg:text-7xl font-black leading-tight tracking-tighter">
              Dhia Eddine <span className="text-primary">Barhoumi</span>
            </h1>

            {/* Role */}
            <p className="text-primary text-xl font-bold tracking-wide">
              Software Engineering Student @ ENIT
            </p>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg leading-relaxed">
              Focused on the synergy between AI and Infrastructure Automation. Passionate about
              Computer Vision (YOLO), Cloud Native technologies, and building scalable systems.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#projects"
              className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-background-dark text-base font-bold transition-all hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:scale-105"
            >
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              className="flex min-w-[140px] cursor-pointer items-center justify-center gap-2 rounded-lg h-12 px-6 border border-primary text-primary hover:bg-primary/10 text-base font-bold transition-all hover:scale-105"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
            <a
              href="https://github.com/dhieeddine"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 border border-primary/50 text-primary hover:bg-primary/5 text-base font-bold transition-all hover:scale-105"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right — Code terminal */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-navy-deep rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
          <div className="relative flex flex-col bg-slate-900 rounded-xl overflow-hidden border border-primary/20 shadow-2xl">
            {/* Window chrome */}
            <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-500/80" />
                <div className="size-3 rounded-full bg-yellow-500/80" />
                <div className="size-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-[10px] font-mono text-slate-400">profile.sh</div>
            </div>

            {/* Code body */}
            <div className="p-6 font-mono text-sm flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 space-y-1">
                <p className="text-slate-400"># Current Focus</p>
                <p className="text-pink-400">expertise = [<span className="text-primary">&quot;AI&quot;</span>, <span className="text-primary">&quot;DevOps&quot;</span>]</p>
                <p className="text-pink-400">location = <span className="text-green-400">&quot;Tunis, Tunisia&quot;</span></p>
                <p>&nbsp;</p>
                <p className="text-slate-100">def <span className="text-yellow-400">get_profile</span>():</p>
                <p className="pl-4 text-slate-300">return &#123;</p>
                <p className="pl-8 text-slate-300">&quot;name&quot;: <span className="text-green-400">&quot;Dhia Eddine Barhoumi&quot;</span>,</p>
                <p className="pl-8 text-slate-300">&quot;edu&quot;: <span className="text-green-400">&quot;ENIT Software Eng&quot;</span>,</p>
                <p className="pl-8 text-slate-300">&quot;pfa&quot;: <span className="text-green-400">&quot;Vision-to-Infra Pipeline&quot;</span></p>
                <p className="pl-4 text-slate-300">&#125;</p>
                <p className="text-primary mt-4 animate-pulse">_</p>
              </div>

              <div className="flex-1 border-t lg:border-t-0 lg:border-l border-slate-700 pt-6 lg:pt-0 lg:pl-6">
                <div className="w-full aspect-square bg-slate-800/50 rounded-lg overflow-hidden relative group/hero-img">
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
                  
                  <div className="relative w-full h-full">
                    <ZoomableImage
                      src="/profil.png"
                      alt="Dhia Eddine Barhoumi"
                      className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                      objectFit="contain"
                    />
                    {/* Background for gaps if image is not square */}
                    <div className="absolute inset-0 bg-slate-800/50 -z-10" />
                  </div>

                  <div className="absolute bottom-4 left-0 right-0 z-20 text-[10px] text-slate-100 bg-slate-900/60 backdrop-blur-sm py-1 px-2 rounded uppercase tracking-widest font-extrabold text-center mx-4">
                    System Architect v2.0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
