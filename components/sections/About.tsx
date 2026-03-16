export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-teal-500 font-mono text-sm mb-2">// about</p>
          <h2 className="text-4xl font-display font-semibold mb-6">
            Turning schemas into deployments
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              2nd year Software Engineering student at ENIT, Tunis. I build systems that sit at the crossroads of{" "}
              <span className="text-teal-600 dark:text-teal-400">computer vision</span>,{" "}
              <span className="text-teal-600 dark:text-teal-400">network automation</span>, and{" "}
              <span className="text-teal-600 dark:text-teal-400">cloud infrastructure</span>.
            </p>
            <p>
              My current focus is my PFA2 project — a Vision-to-Infrastructure pipeline that uses a
              YOLO model (~98% accuracy) to detect network diagrams and automatically generate
              Terraform configs deployed via Containerlab.
            </p>
            <p>
              I hold NVIDIA and Cisco certifications, and I love the challenge of bridging the gap between
              intelligent models and real-world infrastructure.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/dhia-eddine-barhoumi-511b5b360"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-white/10 text-sm hover:border-teal-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:dhiaeddine.barhoumi@etudiant-enit.utm.tn"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-white/10 text-sm hover:border-teal-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "5+", label: "GitHub Projects" },
            { value: "~98%", label: "YOLO model accuracy" },
            { value: "2", label: "Certifications" },
            { value: "2026", label: "Expected graduation" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="p-6 rounded-2xl border border-gray-100 dark:border-white/8 bg-white dark:bg-white/3 text-center"
            >
              <div className="text-3xl font-display font-bold text-teal-500 mb-1">{value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
