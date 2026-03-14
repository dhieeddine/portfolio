import type { Metadata } from "next";
import { getAllRepos } from "@/lib/github";
import { LANGUAGE_COLORS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description: "All my GitHub projects — ML, DevOps, Cloud, Full-Stack.",
};

export default async function ProjectsPage() {
  const repos = await getAllRepos();

  const languages = [...new Set(repos.map((r) => r.language).filter(Boolean) as string[])].sort();

  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-teal-500 font-mono text-sm mb-2">// all projects</p>
        <h1 className="text-5xl font-display font-semibold mb-4">Everything I&apos;ve built</h1>
        <p className="text-gray-500 dark:text-gray-400">
          {repos.length} public repositories — auto-updated via GitHub API
        </p>
      </div>

      {/* Language filter chips */}
      <div className="flex flex-wrap gap-2 mb-10" id="lang-filter">
        <span className="px-3 py-1 rounded-full text-xs font-mono bg-teal-500 text-white cursor-pointer">
          All ({repos.length})
        </span>
        {languages.map((lang) => (
          <span key={lang} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 cursor-pointer hover:border-teal-400 transition-colors">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: LANGUAGE_COLORS[lang] ?? "#888" }} />
            {lang}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {repos.map((repo) => {
          const langColor = repo.language ? LANGUAGE_COLORS[repo.language] ?? "#888" : null;
          return (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-5 rounded-2xl border border-gray-100 dark:border-white/8 bg-white dark:bg-white/3 hover:border-teal-300 dark:hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <svg className="text-teal-500 mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
                </svg>
                <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
                      </svg>
                      {repo.stargazers_count}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 line-clamp-3 mb-4">
                {repo.description ?? "No description provided."}
              </p>

              {repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {repo.topics.slice(0, 3).map((t) => (
                    <span key={t} className="px-1.5 py-0.5 text-xs rounded bg-gray-100 dark:bg-white/6 text-gray-500 dark:text-gray-400 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-white/5">
                {langColor && (
                  <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: langColor }} />
                    {repo.language}
                  </span>
                )}
                <span className="ml-auto text-xs font-mono text-teal-500 group-hover:underline">View →</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
