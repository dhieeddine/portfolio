"use client";
import { useState } from "react";
import type { GithubRepo } from "@/lib/github";
import { FLAGSHIP_PROJECTS, Project } from "@/lib/constants";
import { LANGUAGE_COLORS } from "@/lib/utils";

interface ProjectsProps {
  repos: GithubRepo[];
}

export function Projects({ repos }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["All", "AI & Spatial", "AI & Cloud", "Fullstack & Cloud", "Enterprise & Systems", "DevOps & Networks"];

  const filteredProjects = selectedCategory === "All"
    ? FLAGSHIP_PROJECTS
    : FLAGSHIP_PROJECTS.filter((p) => p.category === selectedCategory);

  // Map GitHub repo metrics to flagship projects if available
  function getLiveMetrics(repoName: string) {
    const live = repos.find((r) => r.name.toLowerCase() === repoName.toLowerCase());
    return {
      stars: live?.stargazers_count ?? 1,
      forks: live?.forks_count ?? 0,
      url: live?.html_url ?? `https://github.com/dhieeddine/${repoName}`,
    };
  }

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono mb-3">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          // ENGINEERING_REPOSITORIES.git
        </div>
        <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-slate-100 tracking-tight">
          Flagship <span className="text-primary">Projects</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mt-3 text-base">
          Production systems, research implementations, and distributed architectures engineered with rigorous quality standards.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
              selectedCategory === cat
                ? "bg-primary text-slate-950 shadow-[0_0_15px_rgba(0,255,255,0.35)]"
                : "bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-primary hover:border-primary/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Flagship Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20">
        {filteredProjects.map((project) => {
          const metrics = getLiveMetrics(project.repoName);

          return (
            <div
              key={project.slug}
              className="flex flex-col rounded-2xl border border-primary/20 bg-slate-900/75 backdrop-blur-md overflow-hidden hover:border-primary/60 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/40 group"
            >
              {/* Card Header Top */}
              <div className="p-6 pb-4 flex items-start justify-between gap-3 border-b border-slate-800/80">
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-primary uppercase font-bold tracking-wider mb-1">
                    {project.org}
                  </span>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                {project.metrics?.statusBadge && (
                  <span className="shrink-0 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300">
                    {project.metrics.statusBadge}
                  </span>
                )}
              </div>

              {/* Subtitle & Description */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs font-mono text-cyan-300/80 mb-3 font-medium">
                  {project.subtitle}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Architecture Highlights */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/90 mb-4 text-xs font-mono text-slate-300 leading-normal">
                  <span className="text-primary font-bold">Arch:</span> {project.architecture}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 group-hover:border-primary/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer with GitHub Metrics & CTA */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      ★ {metrics.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      ⑂ {metrics.forks}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors cursor-pointer"
                    >
                      Details_
                    </button>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-mono px-3 py-1.5 rounded-lg bg-primary text-slate-950 font-bold hover:bg-primary/90 transition-colors"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* GitHub Synchronized Repositories Section */}
      {repos.length > 0 && (
        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub Live Sync Metrics
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Real-time synchronization with @dhieeddine public repositories (ISR Cache 3600s)
              </p>
            </div>

            <a
              href="https://github.com/dhieeddine?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-primary hover:underline"
            >
              View all on GitHub →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo) => {
              const langColor = repo.language ? LANGUAGE_COLORS[repo.language] ?? "#00ffff" : null;

              return (
                <a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-5 rounded-xl border border-primary/15 bg-slate-900/60 hover:border-primary/50 transition-all hover:-translate-y-1 shadow-lg shadow-black/20"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-100 group-hover:text-primary transition-colors text-sm font-mono truncate">
                      {repo.name}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 shrink-0">
                      <span>★ {repo.stargazers_count}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4 flex-1">
                    {repo.description ?? "Engineering repository by Dhia Eddine Barhoumi."}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-mono">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                        <span className="size-2 rounded-full" style={{ backgroundColor: langColor ?? "#00ffff" }} />
                        {repo.language}
                      </span>
                    )}
                    <span className="text-primary group-hover:translate-x-1 transition-transform ml-auto">
                      Explore →
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* Project Details Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="max-w-2xl w-full rounded-2xl border border-primary/40 bg-slate-900 p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-5 size-8 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-primary flex items-center justify-center font-mono cursor-pointer"
            >
              ✕
            </button>

            <span className="text-xs font-mono text-primary uppercase font-bold tracking-wider mb-2 block">
              {activeProject.org} • {activeProject.period}
            </span>
            <h3 className="text-2xl font-bold text-slate-100 mb-1">
              {activeProject.title}
            </h3>
            <p className="text-sm font-mono text-cyan-300/90 mb-4">
              {activeProject.subtitle}
            </p>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed mb-6">
              <p>{activeProject.description}</p>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-primary font-bold font-mono block mb-1">System Architecture &amp; Security:</span>
                <p className="text-xs font-mono text-slate-300">{activeProject.architecture}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {activeProject.tags.map((t) => (
                <span key={t} className="text-xs font-mono px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <a
                href={activeProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-primary text-slate-950 text-sm font-bold hover:bg-primary/90 transition-all font-mono"
              >
                Inspect Code on GitHub →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
