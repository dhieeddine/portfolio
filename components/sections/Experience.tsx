const EXPERIENCE = [
  {
    role: "Full-Stack Web Development Intern",
    company: "Tunisie Télécom — District du Kef",
    period: "Summer 2025",
    description:
      "Developed a full-stack IT asset management application. Built the backend with Spring Boot 3.5.3 (Java 21, JPA, Lombok) and the frontend with Angular 20 + Angular Material.",
    tags: ["Spring Boot", "Angular 20", "Java 21", "MySQL", "Docker"],
  },
];

const EDUCATION = [
  {
    degree: "Master — Software Engineering",
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
    <section id="experience" className="py-24 px-6 bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <p className="text-teal-500 font-mono text-sm mb-2">// experience</p>
        <h2 className="text-4xl font-display font-semibold mb-12">Background</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work */}
          <div>
            <h3 className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">Work</h3>
            {EXPERIENCE.map((exp) => (
              <div key={exp.role} className="relative pl-6 pb-8 border-l border-gray-200 dark:border-white/10">
                <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-teal-500 ring-4 ring-white dark:ring-[#0c0c0c]" />
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h4 className="font-display font-semibold text-gray-900 dark:text-white">{exp.role}</h4>
                  <span className="text-xs font-mono text-gray-400">{exp.period}</span>
                </div>
                <p className="text-sm text-teal-600 dark:text-teal-400 font-medium mb-2">{exp.company}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs font-mono rounded bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education + Certs */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">Education</h3>
              {EDUCATION.map((edu) => (
                <div key={edu.degree} className="relative pl-6 pb-7 border-l border-gray-200 dark:border-white/10">
                  <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-[#0c0c0c]" />
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h4 className="font-display font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <span className="text-xs font-mono text-gray-400">{edu.period}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.school}</p>
                  {edu.note && (
                    <span className="inline-block mt-1 px-2 py-0.5 text-xs font-mono rounded bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400">
                      {edu.note}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">Certifications</h3>
              <div className="space-y-3">
                {CERTS.map((cert) => (
                  <div key={cert.name} className="flex items-center gap-4 p-3 rounded-xl border border-gray-100 dark:border-white/8 bg-white dark:bg-white/3">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a7c6e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{cert.name}</p>
                      <p className="text-xs text-teal-600 dark:text-teal-400">{cert.org} · {cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
