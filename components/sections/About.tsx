export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono mb-4">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            // ABOUT_ENGINEER.sh
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-slate-100 mb-6 tracking-tight">
            Engineering <span className="text-primary">AI Systems</span> &amp; Cloud Automation
          </h2>
          <div className="space-y-4 text-slate-300 text-base leading-relaxed">
            <p>
              Computer Science Engineering student at <span className="text-primary font-semibold">ENIT</span> (École Nationale d&apos;Ingénieurs de Tunis), specializing in <strong className="text-slate-100">AI Systems Engineering and Cloud Automation</strong>.
            </p>
            <p>
              My profile bridges algorithmic intelligence (<strong className="text-slate-100">Machine Learning, Biomedical Data Mining, Computer Vision, and Autonomous AI Agents</strong>) with modern software engineering and <strong className="text-slate-100">DevOps</strong> rigor.
            </p>
            <p>
              <strong className="text-slate-100 font-semibold">Areas of Expertise:</strong> Machine Learning, Biomedical Data Mining, EEG Signal Processing, Multi-Agent AI, Computer Vision, Geospatial Analysis, Hybrid RAG, and Cloud &amp; DevOps.
            </p>
            <p className="text-sm border-l-2 border-primary/40 pl-3 text-slate-400 font-mono">
              Key outcomes: CartaGen (DGRE 2026), EEG absence seizure detection pipeline (91.7% S-match clinical sensitivity), and IEEE AIDIST 2026 paper on Vision-to-Terraform automation.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/dhia-eddine-barhoumi-511b5b360"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary/30 bg-slate-900/60 text-sm font-semibold text-slate-200 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all shadow-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:dhiaeddine.barhoumi@etudiant-enit.utm.tn"
              aria-label="Send Email"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary/30 bg-slate-900/60 text-sm font-semibold text-slate-200 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all shadow-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              Email Contact
            </a>
          </div>
        </div>

        {/* Stats Grid - High contrast dark cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "7+", label: "Flagship Projects", sub: "CartaGen, EEG Mining, Net2Terraform" },
            { value: "98.4%", label: "YOLOv8 Accuracy", sub: "Network Topology Detection" },
            { value: "91.7%", label: "Clinical S-Match", sub: "Seizure Detection Sensitivity" },
            { value: "IEEE '26", label: "Accepted Paper", sub: "AIDIST 2026 Conference" },
          ].map(({ value, label, sub }) => (
            <div
              key={label}
              className="p-6 rounded-2xl border border-primary/20 bg-slate-900/70 backdrop-blur-md text-center hover:border-primary/60 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/40 group"
            >
              <div className="text-3xl lg:text-4xl font-display font-extrabold text-primary mb-1.5 group-hover:scale-105 transition-transform">
                {value}
              </div>
              <div className="text-sm font-bold text-slate-100">{label}</div>
              <div className="text-xs font-mono text-slate-400 mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
