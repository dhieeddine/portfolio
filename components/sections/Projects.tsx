import Link from "next/link";
import type { GithubRepo } from "@/lib/github";
import { LANGUAGE_COLORS } from "@/lib/utils";

// Hardcoded featured projects matching the design
const FEATURED = [
  {
    name: "Vision-to-Infrastructure Pipeline (PFA 2)",
    description:
      "End-to-end AI system translating network drawings into Terraform configurations using YOLOv8 for 98% accuracy.",
    tags: ["Python", "YOLOv8", "Terraform"],
    visual: "pipeline",
  },
  {
    name: "Network Automation & Monitoring",
    description:
      "Automating lifecycle management for virtualized network infrastructures using Jinja2-based scripts and Ansible.",
    tags: ["Ansible", "Jinja2", "Network Automation"],
    visual: "router",
  },
  {
    name: "SocialMedia Microservices Architecture",
    description:
      "Distributed system using 7 independent services and MongoDB Atlas with a centralized API Gateway and domain-driven design.",
    tags: ["Node.js", "TypeScript", "MongoDB"],
    visual: "hub",
  },
];

interface ProjectsProps {
  repos: GithubRepo[];
}

export function Projects({ repos }: ProjectsProps) {
  return (
    <section id="projects" className="px-6 py-20 bg-white/5 dark:bg-background-darker">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-bold tracking-tight">
            Key Projects
          </h2>
          <div className="h-1 w-20 bg-primary" />
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {FEATURED.map((project) => (
            <div
              key={project.name}
              className="flex flex-col gap-4 group cursor-pointer bg-slate-900/40 rounded-xl p-4 border border-primary/10 hover:border-primary/40 transition-all"
            >
              {/* Visual thumbnail */}
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-slate-700 bg-slate-800 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent" />
                {project.visual === "pipeline" && (
                  <div className="absolute inset-0 grid grid-cols-2">
                    <div className="bg-slate-800 flex items-center justify-center border-r border-primary/20">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                      </svg>
                    </div>
                    <div className="bg-slate-900 p-2 font-mono text-[8px] text-green-400 overflow-hidden">
                      <p>optimized_yolov8(accuracy=0.98)</p>
                      <p>generate_topology_data()</p>
                      <p>terraform_deploy(containerlab)</p>
                    </div>
                  </div>
                )}
                {project.visual === "router" && (
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 group-hover:scale-110 transition-transform">
                    <rect x="2" y="9" width="20" height="6" rx="2"/><path d="M8 9V5M16 9V5M12 9V5M8 15v4M16 15v4M12 15v4"/>
                  </svg>
                )}
                {project.visual === "hub" && (
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#00ffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 group-hover:rotate-12 transition-transform">
                    <circle cx="12" cy="12" r="3"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="6" r="2"/><circle cx="4" cy="18" r="2"/><circle cx="20" cy="18" r="2"/><path d="M6 6.5l4 4M18 6.5l-4 4M6 17.5l4-4M18 17.5l-4-4"/>
                  </svg>
                )}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-slate-100 text-lg font-bold group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repos */}
        {repos.length > 0 && (
          <>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">
                GitHub Repositories
              </h3>
              <a
                href="https://github.com/dhieeddine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-primary transition-colors font-mono"
              >
                View all →
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {repos.map((repo, i) => (
                <RepoCard key={repo.id} repo={repo} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function RepoCard({ repo, index }: { repo: GithubRepo; index: number }) {
  const langColor = repo.language ? LANGUAGE_COLORS[repo.language] ?? "#8b8b8b" : null;

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col p-5 rounded-xl border border-primary/10 bg-slate-900/40 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <svg className="text-primary mt-0.5 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
        </svg>
        <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1">⭐ {repo.stargazers_count}</span>
          )}
        </div>
      </div>

      <h3 className="font-bold text-slate-100 mb-2 leading-tight group-hover:text-primary transition-colors line-clamp-2">
        {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
      </h3>

      <p className="text-sm text-slate-400 leading-relaxed flex-1 line-clamp-3 mb-4">
        {repo.description ?? "No description provided."}
      </p>

      <div className="flex items-center justify-between pt-3 border-t border-slate-700">
        {langColor && (
          <span className="flex items-center gap-1.5 text-xs text-slate-400">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: langColor }} />
            {repo.language}
          </span>
        )}
        <span className="ml-auto text-xs font-mono text-primary group-hover:underline">
          View →
        </span>
      </div>
    </a>
  );
}
