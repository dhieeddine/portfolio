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
              Computer Science Engineering Student @ ENIT
            </p>

            {/* Description */}
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              Specialized in <strong className="text-slate-100">AI Systems Engineering</strong> and <strong className="text-slate-100">Cloud Automation</strong>. Combining algorithmic intelligence (<span className="text-primary font-medium">Machine Learning, Biomedical Data Mining, Computer Vision, Autonomous Agents</span>) with software engineering and DevOps rigor.
            </p>
          </div>

          {/* CTAs with Resume and LinkedIn */}
          <div className="flex flex-wrap gap-3.5">
            <Link
              href="/#projects"
              className="flex min-w-[130px] cursor-pointer items-center justify-center rounded-xl h-11 px-5 bg-primary text-slate-950 text-sm font-bold transition-all hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:scale-105"
            >
              Explore Projects
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl h-11 px-5 border border-primary/50 bg-primary/10 text-primary hover:bg-primary/20 text-sm font-bold font-mono transition-all hover:scale-105 shadow-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              View CV
            </a>

            <a
              href="https://www.linkedin.com/in/dhia-eddine-barhoumi-511b5b360"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex items-center gap-2 rounded-xl h-11 px-4 border border-slate-700 bg-slate-900/60 text-slate-200 hover:text-primary hover:border-primary/50 text-sm font-bold font-mono transition-all hover:scale-105"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
              </svg>
              LinkedIn
            </a>

            <a
              href="https://github.com/dhieeddine"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl h-11 px-4 border border-slate-700 bg-slate-900/60 text-slate-300 hover:text-primary hover:border-primary/50 text-sm font-bold font-mono transition-all hover:scale-105"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
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
                <p className="text-pink-400">focus = [<span className="text-primary">&quot;AI Systems&quot;</span>, <span className="text-primary">&quot;Data Mining&quot;</span>, <span className="text-primary">&quot;Cloud &amp; DevOps&quot;</span>]</p>
                <p className="text-pink-400">location = <span className="text-green-400">&quot;Tunis, Tunisia&quot;</span></p>
                <p>&nbsp;</p>
                <p className="text-slate-100">def <span className="text-yellow-400">get_engineer_profile</span>():</p>
                <p className="pl-4 text-slate-300">return &#123;</p>
                <p className="pl-8 text-slate-300">&quot;name&quot;: <span className="text-green-400">&quot;Dhia Eddine Barhoumi&quot;</span>,</p>
                <p className="pl-8 text-slate-300">&quot;school&quot;: <span className="text-green-400">&quot;ENIT Computer Science Eng.&quot;</span>,</p>
                <p className="pl-8 text-slate-300">&quot;stage_dgre&quot;: <span className="text-cyan-300">&quot;CartaGen (Multi-Agent)&quot;</span>,</p>
                <p className="pl-8 text-slate-300">&quot;paper_ieee&quot;: <span className="text-emerald-400">&quot;AIDIST 2026 Accepted&quot;</span>,</p>
                <p className="pl-8 text-slate-300">&quot;data_mining&quot;: <span className="text-yellow-300">&quot;EEG Seizure Detection (91.7%)&quot;</span>,</p>
                <p className="pl-8 text-slate-300">&quot;pfa_research&quot;: <span className="text-green-400">&quot;Net2Terraform Pipeline&quot;</span></p>
                <p className="pl-4 text-slate-300">&#125;</p>
                <p className="text-primary mt-4 animate-pulse">_</p>
              </div>

              <div className="flex-1 border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-6">
                <div className="w-full aspect-square bg-slate-900 rounded-xl overflow-hidden relative group/hero-img border border-primary/20">
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
                  
                  <div className="relative w-full h-full">
                    <ZoomableImage
                      src="/profile.png"
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
