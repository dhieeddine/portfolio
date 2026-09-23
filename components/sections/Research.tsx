import { RESEARCH_PAPER } from "@/lib/constants";

export function Research() {
  return (
    <section id="research" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
          <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
          // SCIENTIFIC_PUBLICATION.tex
        </div>
        <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-100 tracking-tight">
          Research &amp; <span className="text-primary">Publications</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mt-3 text-base">
          Peer-reviewed contribution to multimodal artificial intelligence applied to automated cloud infrastructure provisioning.
        </p>
      </div>

      {/* Main Research Card */}
      <div className="p-8 lg:p-10 rounded-3xl border border-primary/30 bg-slate-900/80 backdrop-blur-md shadow-2xl shadow-black/50 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 size-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        {/* Status Badge & Conference */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 font-mono text-xs font-bold uppercase tracking-wider">
            <span className="size-2 rounded-full bg-emerald-400" />
            {RESEARCH_PAPER.badge}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {RESEARCH_PAPER.conference} • {RESEARCH_PAPER.location}
          </span>
        </div>

        {/* Paper Title */}
        <h3 className="text-2xl lg:text-3xl font-bold text-slate-100 mb-4 leading-snug">
          {RESEARCH_PAPER.title}
        </h3>

        {/* Authors */}
        <p className="text-slate-300 text-sm font-mono mb-6">
          <span className="text-slate-500">Authors:</span>{" "}
          <strong className="text-primary">{RESEARCH_PAPER.authors[0]}</strong>,{" "}
          <span>{RESEARCH_PAPER.authors[1]}</span>,{" "}
          <span>{RESEARCH_PAPER.authors[2]}</span>
        </p>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {RESEARCH_PAPER.highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3.5 rounded-xl border border-primary/10 bg-slate-800/60 text-xs text-slate-300 leading-relaxed font-sans"
            >
              <span className="text-primary font-bold">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8 py-4 border-y border-slate-800">
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold font-display text-primary">{RESEARCH_PAPER.metrics.accuracy}</div>
            <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">YOLOv8 Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold font-display text-emerald-400">{RESEARCH_PAPER.metrics.speedup}</div>
            <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">Provisioning Speedup</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold font-display text-cyan-300">{RESEARCH_PAPER.metrics.components}</div>
            <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">Network Node Classes</div>
          </div>
        </div>

        {/* Abstract Box */}
        <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950/60 mb-6">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>
            Abstract
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            {RESEARCH_PAPER.abstract}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {RESEARCH_PAPER.keywords.map((kw) => (
              <span key={kw} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary">
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={RESEARCH_PAPER.links.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-slate-950 text-sm font-bold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:scale-105"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Net2Terraform Repository
          </a>

          <a
            href="mailto:dhiaeddine.barhoumi@etudiant-enit.utm.tn?subject=Preprint%20Inquiry%20-%20IEEE%20AIDIST%202026"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/30 text-primary hover:bg-primary/10 text-sm font-bold font-mono transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            Request Preprint / Contact Authors →
          </a>
        </div>
      </div>
    </section>
  );
}
