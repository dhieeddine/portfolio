import { SKILL_CATEGORIES } from "@/lib/constants";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono mb-3">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          // TECH_STACK &amp; CAPABILITIES.json
        </div>
        <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-100 tracking-tight">
          Core <span className="text-primary">Engineering Stack</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mt-3 text-base leading-relaxed">
          Specialized in Multi-Agent AI systems, Computer Vision pipelines, resilient distributed backends, and cloud automation.
        </p>
      </div>

      {/* 5 Specialized Clusters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={cat.id}
            className={`flex flex-col p-6 rounded-2xl border border-primary/20 bg-slate-900/75 backdrop-blur-md hover:border-primary/50 transition-all duration-300 shadow-xl shadow-black/30 group ${
              idx === 0 || idx === 1 ? "md:col-span-1 lg:col-span-1" : ""
            }`}
          >
            {/* Category Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-sm font-mono font-bold group-hover:bg-primary group-hover:text-slate-950 transition-colors">
                  0{idx + 1}
                </div>
                <h3 className="text-slate-100 font-bold text-lg group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed mb-5">
              {cat.summary}
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700/80 hover:border-primary/40 hover:bg-slate-800 text-xs font-mono transition-colors"
                >
                  <span className="text-slate-200 font-medium">{skill.name}</span>
                  {skill.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/20 text-primary border border-primary/30">
                      {skill.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
