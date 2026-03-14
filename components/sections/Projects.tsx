import Link from "next/link";
import type { GithubRepo } from "@/lib/github";
import { LANGUAGE_COLORS } from "@/lib/utils";

interface ProjectsProps {
  repos: GithubRepo[];
}

export function Projects({ repos }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-teal-500 font-mono text-sm mb-2">// projects</p>
          <h2 className="text-4xl font-display font-semibold">What I&apos;ve built</h2>
        </div>
        <a
          href="https://github.com/dhieeddine"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
        >
          View all on GitHub
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/>
          </svg>
        </a>
      </div>

      {repos.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          Projects loading... check{" "}
          <a href="https://github.com/dhieeddine" className="text-teal-500 underline" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{" "}
          directly.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.map((repo, i) => (
            <RepoCard key={repo.id} repo={repo} index={i} />
          ))}
        </div>
      )}
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
      className="group flex flex-col p-5 rounded-2xl border border-gray-100 dark:border-white/8 bg-white dark:bg-white/3 hover:border-teal-300 dark:hover:border-teal-500/40 hover:bg-teal-50/30 dark:hover:bg-teal-500/5 transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <svg className="text-teal-500 mt-0.5 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
        </svg>
        <div className="flex items-center gap-3 text-gray-400 dark:text-gray-500 text-xs font-mono">
          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
              </svg>
              {repo.stargazers_count}
            </span>
          )}
          {repo.forks_count > 0 && (
            <span className="flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M18 9a9 9 0 01-9 9"/>
              </svg>
              {repo.forks_count}
            </span>
          )}
        </div>
      </div>

      {/* Repo name */}
      <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
        {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 line-clamp-3 mb-4">
        {repo.description ?? "No description provided."}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-white/5">
        {langColor && (
          <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: langColor }} />
            {repo.language}
          </span>
        )}
        <span className="ml-auto text-xs font-mono text-teal-500 group-hover:underline">
          View →
        </span>
      </div>
    </a>
  );
}
