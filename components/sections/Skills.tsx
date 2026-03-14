const SKILLS = {
  "ML & Vision": ["Python", "PyTorch", "Ultralytics YOLO", "OpenCV", "Jupyter", "NVIDIA CUDA"],
  "Cloud & DevOps": ["Terraform", "Docker", "Containerlab", "GitHub Actions", "Ansible", "Jinja2"],
  "Backend": ["Java", "Jakarta EE", "Spring Boot", "Node.js", "REST APIs", "JPA / Hibernate"],
  "Frontend": ["TypeScript", "React", "Next.js", "Angular", "Tailwind CSS"],
  "Data & DB": ["SQL", "PostgreSQL", "MongoDB", "H2"],
  "Networking": ["CCNA", "Routing Protocols", "Jinja2 Templates", "Network Automation"],
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <p className="text-teal-500 font-mono text-sm mb-2">// skills</p>
        <h2 className="text-4xl font-display font-semibold mb-12">Tech stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <div
              key={category}
              className="p-5 rounded-2xl border border-gray-100 dark:border-white/8 bg-white dark:bg-white/3"
            >
              <h3 className="text-sm font-mono text-teal-600 dark:text-teal-400 mb-4 font-medium">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded-lg bg-gray-100 dark:bg-white/6 text-gray-700 dark:text-gray-300 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
