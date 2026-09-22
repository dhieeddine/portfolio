import Link from "next/link";
import { ZoomableImage } from "@/components/ui/ZoomableImage";

export function Hero() {
  return (
    <section id="home" className="px-6 py-12 lg:px-20 lg:py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left – Text Content */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            {/* Status badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                STATUS: READY_FOR_CHALLENGE
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                IEEE AIDIST 2026
              </div>
            </div>

            {/* Name */}
            <h1 className="text-slate-100 text-5xl lg:text-7xl font-black leading-tight tracking-tighter">
              Dhia Eddine <span className="text-primary">Barhoumi</span>
            </h1>

            {/* Role */}
            <p className="text-primary text-xl font-bold tracking-wide font-mono">
              Software Engineering Student @ ENIT
            </p>

            {/* Description */}
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              Specialized in <strong className="text-slate-100">Multi-Agent AI Systems</strong>, <strong className="text-slate-100">Computer Vision (YOLOv8)</strong>, and <strong className="text-slate-100">Cloud Infrastructure Automation</strong>.
              Architect of <span className="text-primary font-semibold">CartaGen</span> (Stage Ingénieur DGRE 2026) and researcher on Vision-to-Terraform (IEEE AIDIST 2026).
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#projects"
              className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-slate-950 text-base font-bold transition-all hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:scale-105"
            >
              Explore Projects
            </Link>
            <Link
              href="/#livelab"
              className="flex min-w-[140px] cursor-pointer items-center justify-center gap-2 rounded-lg h-12 px-6 border border-primary/40 text-slate-200 hover:text-primary hover:bg-primary/10 text-base font-bold transition-all hover:scale-105"
            >
              Live Lab CLI
            </Link>
            <a
              href="https://github.com/dhieeddine"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 border border-slate-700 bg-slate-900/60 text-slate-300 hover:text-primary hover:border-primary/40 text-base font-bold transition-all hover:scale-105"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right – Code terminal */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-navy-deep rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
          <div className="relative flex flex-col bg-slate-950 rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-black/80">
            {/* Window chrome */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-500/80" />
                <div className="size-3 rounded-full bg-yellow-500/80" />
                <div className="size-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs font-mono text-slate-400">profile.sh</div>
            </div>

            {/* Code body */}
            <div className="p-6 font-mono text-xs lg:text-sm flex flex-col gap-6 lg:flex-row">
              <div className="flex-1 space-y-1">
                <p className="text-slate-500"># Engineering Profile</p>
                <p className="text-pink-400">focus = [<span className="text-primary">&quot;Multi-Agent AI&quot;</span>, <span className="text-primary">&quot;RAG&quot;</span>, <span className="text-primary">&quot;DevOps&quot;</span>]</p>
                <p className="text-pink-400">location = <span className="text-green-400">&quot;Tunis, Tunisia&quot;</span></p>
                <p>&nbsp;</p>
                <p className="text-slate-100">def <span className="text-yellow-400">get_engineer_profile</span>():</p>
                <p className="pl-4 text-slate-300">return &#123;</p>
                <p className="pl-8 text-slate-300">&quot;name&quot;: <span className="text-green-400">&quot;Dhia Eddine Barhoumi&quot;</span>,</p>
                <p className="pl-8 text-slate-300">&quot;school&quot;: <span className="text-green-400">&quot;ENIT Software Eng.&quot;</span>,</p>
                <p className="pl-8 text-slate-300">&quot;stage_dgre&quot;: <span className="text-cyan-300">&quot;CartaGen (Multi-Agent)&quot;</span>,</p>
                <p className="pl-8 text-slate-300">&quot;paper_ieee&quot;: <span className="text-emerald-400">&quot;AIDIST 2026 Accepted&quot;</span>,</p>
                <p className="pl-8 text-slate-300">&quot;pfa_research&quot;: <span className="text-green-400">&quot;Net2Terraform Pipeline&quot;</span></p>
                <p className="pl-4 text-slate-300">&#125;</p>
                <p className="text-primary mt-4 animate-pulse">_</p>
              </div>

              <div className="flex-1 border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-6">
                <div className="w-full aspect-square bg-slate-900 rounded-xl overflow-hidden relative group/hero-img border border-primary/20">
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
                  
                  <div className="relative w-full h-full">
                    <ZoomableImage
                      src="/profil.png"
                      alt="Dhia Eddine Barhoumi"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 z-20 text-[10px] text-slate-100 bg-slate-950/80 backdrop-blur-sm py-1.5 px-2 rounded-lg uppercase tracking-wider font-mono font-bold text-center border border-primary/30">
                    AI Systems Architect
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
