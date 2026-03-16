export function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-primary/10 py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex items-center gap-3 text-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
            </svg>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold">
              Dhia Eddine Barhoumi
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
            Software Engineering Student specializing in AI, DevOps, and Scalable Systems.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8">
          <a
            href="/resume.pdf"
            download
            className="text-slate-400 hover:text-primary transition-colors flex items-center gap-1 text-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </a>
          <a href="https://github.com/dhieeddine" target="_blank" rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary transition-colors text-sm">
            GitHub
          </a>
          <a href="https://linkedin.com/in/dhiaeddine-barhoumi" target="_blank" rel="noopener noreferrer"
            className="text-slate-400 hover:text-primary transition-colors text-sm">
            LinkedIn
          </a>
          <a href="mailto:dhiaeddine.barhoumi@etudiant-enit.utm.tn"
            className="text-slate-400 hover:text-primary transition-colors text-sm">
            Tunis, TN
          </a>
        </div>

        {/* Copyright */}
        <div className="text-slate-500 text-sm font-mono">
          © {new Date().getFullYear()} DEB_SYSTEMS_v2.0
        </div>
      </div>
    </footer>
  );
}
