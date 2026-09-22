const HIGHLIGHTS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: "IT Asset Management Platform",
    subtitle: "Tunisie Télécom (2025)",
    description:
      "Engineered an enterprise asset and telecommunication inventory system. Migrated backend database to PostgreSQL and implemented strict RBAC security policies.",
    tags: ["Java 21", "Spring Boot 3.5", "PostgreSQL", "RBAC"]
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "CartaGen Hydrological System",
    subtitle: "DGRE (2026)",
    description:
      "Autonomous Multi-Agent architecture for natural language precipitation queries, PostGIS geospatial interpolation, and LaTeX/PDF bulletin generation with AST code validation.",
    tags: ["FastAPI", "Multi-Agents", "PostGIS", "AST Sandbox"]
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Angular 20 & Material Design",
    subtitle: "Enterprise Frontend",
    description:
      "Crafted responsive enterprise user interfaces with Angular 20, Angular Material components, and reactive RxJS state management.",
    tags: ["Angular 20", "TypeScript", "Material Design", "RxJS"]
  },
];

const EDUCATION = [
  {
    degree: "Software Engineering Diploma (Diplôme d'Ingénieur en Génie Logiciel)",
    school: "ENIT – École Nationale d'Ingénieurs de Tunis",
    period: "2023 – 2026",
    note: "Specialization: AI, Distributed Systems & Cloud",
  },
  {
    degree: "Preparatory Cycle – Physics & Technology (Classes Préparatoires PT)",
    school: "IPEIM – Institut Préparatoire aux Études d'Ingénieurs de Monastir",
    period: "2021 – 2023",
    note: "National Exam Ranking: Mention Très Bien",
  },
];

export function Experience() {
  return (
    <>
      {/* Experience Highlights */}
      <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono mb-3">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              // INDUSTRY_EXPERIENCE &amp; INTERNSHIPS
            </div>
            <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-100 tracking-tight">
              Engineering <span className="text-primary">Highlights</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5 px-4 py-2 bg-slate-900/80 rounded-xl border border-primary/30">
              <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono text-primary font-bold uppercase">
                ENIT Senior Student (Promotion 2026)
              </span>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="bg-slate-900/70 border border-primary/20 rounded-2xl p-7 flex flex-col gap-4 group hover:border-primary/60 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/40"
            >
              <div className="size-12 rounded-xl bg-primary/10 border border-primary/30 text-primary flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-300 font-semibold">{item.subtitle}</span>
                <h3 className="text-lg font-bold text-slate-100 mt-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed flex-1">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Timeline */}
        <div className="p-8 lg:p-10 rounded-3xl border border-primary/20 bg-slate-900/60 backdrop-blur-md shadow-2xl">
          <div className="text-xs font-mono text-primary uppercase tracking-widest font-bold mb-8 flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary" />
            ACADEMIC_BACKGROUND.log
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {EDUCATION.map((edu) => (
              <div key={edu.degree} className="relative pl-6 border-l-2 border-primary/40 space-y-2">
                <div className="absolute -left-[9px] top-1.5 size-4 rounded-full bg-primary ring-4 ring-slate-950" />
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-slate-100 text-base leading-snug">{edu.degree}</h4>
                </div>
                <div className="text-xs font-mono text-primary font-semibold">{edu.period}</div>
                <p className="text-xs text-slate-400">{edu.school}</p>
                {edu.note && (
                  <span className="inline-block px-2.5 py-1 text-xs font-mono rounded bg-primary/10 text-primary border border-primary/20">
                    {edu.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
