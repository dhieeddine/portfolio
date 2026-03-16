const HIGHLIGHTS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: "IT Asset Management",
    description:
      "Engineered a web-based platform for hardware and licenses, migrating backend from H2 to PostgreSQL.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "Spring Boot 3.5",
    description:
      "Built robust backend systems with JPA and implemented RBAC security for data integrity.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Angular 20 UI",
    description:
      "Crafted responsive interfaces using Material Design for a seamless user experience across devices.",
  },
];

const EDUCATION = [
  {
    degree: "Software Engineering",
    school: "ENIT — École Nationale d'Ingénieurs de Tunis",
    period: "2023 → 2026",
    note: null,
  },
  {
    degree: "Preparatory Cycle — Physics & Technology",
    school: "IPEIM — Institut Préparatoire aux Études d'Ingénieurs de Monastir",
    period: "2021 → 2023",
    note: "Mention Très Bien",
  },
];

const CERTS = [
  { name: "NVIDIA LLM Customization 2024", org: "NVIDIA", date: "March 2024" },
  { name: "CCNA Introduction to Networks", org: "Cisco", date: "January 2024" },
];

export function Experience() {
  return (
    <>
      {/* Live Lab / Experience Highlight section */}
      <section id="experience" className="px-6 py-20 lg:px-20 bg-slate-900 relative overflow-hidden">
        {/* Dot grid background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none dot-grid" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="text-primary font-mono text-xs mb-2 uppercase tracking-widest">
                Experience Highlight
              </div>
              <h2 className="text-slate-100 text-4xl font-black">Full-Stack Development</h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-black/40 rounded-lg border border-primary/30">
                <span className="size-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-mono text-primary uppercase">
                  Intern @ Tunisie Télécom
                </span>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="bg-black/40 border border-primary/20 rounded-xl p-8 flex flex-col gap-4 group hover:border-primary/60 transition-colors"
              >
                <span className="text-primary">{item.icon}</span>
                <h4 className="text-slate-100 font-bold">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="px-6 py-20 lg:px-20 bg-white/5 dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-xs font-mono text-primary uppercase tracking-widest mb-6">
                Education
              </h3>
              {EDUCATION.map((edu) => (
                <div key={edu.degree} className="relative pl-6 pb-7 border-l border-primary/20">
                  <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-background-dark" />
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">{edu.degree}</h4>
                    <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{edu.school}</p>
                  {edu.note && (
                    <span className="inline-block mt-1 px-2 py-0.5 text-xs font-mono rounded bg-primary/10 text-primary">
                      {edu.note}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xs font-mono text-primary uppercase tracking-widest mb-6">
                Certifications
              </h3>
              <div className="space-y-3">
                {CERTS.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center gap-4 p-4 rounded-xl border border-primary/10 bg-slate-900/40 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">
                        {cert.name}
                      </p>
                      <p className="text-xs text-primary">
                        {cert.org} · {cert.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
