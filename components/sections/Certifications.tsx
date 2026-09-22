import { CERTIFICATIONS } from "@/lib/constants";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono mb-3">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          // ACCREDITATIONS &amp; CERTIFICATIONS
        </div>
        <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-100 tracking-tight">
          Professional <span className="text-primary">Certifications</span>
        </h2>
        <p className="text-slate-400 max-w-xl mt-3 text-base">
          Industry accreditations from NVIDIA, Cisco, and The Hashgraph Association validating deep technical expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col p-7 rounded-2xl border border-primary/20 bg-slate-900/70 backdrop-blur-md hover:border-primary/60 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/40 group"
          >
            {/* Card Top */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-primary/10 border border-primary/30 text-primary">
                {cert.badgeCode}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {cert.date}
              </span>
            </div>

            {/* Certification Name */}
            <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-primary transition-colors leading-snug">
              {cert.name}
            </h3>

            {/* Issuer */}
            <div className="text-xs font-mono text-slate-400 mb-4">
              Issuer: <span className="text-slate-200 font-semibold">{cert.issuer}</span>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-xs leading-relaxed mb-6 flex-1">
              {cert.description}
            </p>

            {/* Acquired Skills */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
              {cert.skillsAcquired.map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
