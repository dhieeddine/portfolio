const STACK = [
  { icon: "{ }", label: "Python" },
  { icon: "☕", label: "Java/Spring" },
  { icon: "JS", label: "TypeScript" },
  { icon: "🐳", label: "Docker" },
  { icon: "⬡", label: "Terraform" },
  { icon: "👁", label: "YOLO/OpenCV" },
  { icon: "⚙", label: "Ansible" },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-bold tracking-tight">
            Technical Stack
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-mono text-sm">
            ENVIRONMENT_CAPABILITIES.json
          </p>
        </div>

        {/* Stack grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
          {STACK.map(({ icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-slate-900/30 border border-primary/5 hover:bg-primary/5 hover:border-primary/20 transition-all cursor-default"
            >
              <span className="text-3xl text-primary font-mono font-bold select-none">
                {icon}
              </span>
              <span className="font-mono text-xs font-bold text-slate-300 text-center">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
