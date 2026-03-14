export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

const FEATURED_REPOS = [
  "pipeline-for-converting-imageTopo-to-terraformFormat",
  "training-for-networkDevices-detection",
  "SocialMedia-microservices",
  "gestion-de-parc_informatique",
  "RendezvousJEE",
  "MiniProjetJava",
];

export async function getPinnedRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/dhieeddine/repos?per_page=100&sort=updated",
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 }, // ISR — revalidate every hour
      }
    );

    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

    const allRepos: GithubRepo[] = await res.json();

    // Return featured repos in defined order
    const featured = FEATURED_REPOS.map((name) =>
      allRepos.find((r) => r.name === name)
    ).filter(Boolean) as GithubRepo[];

    // If featured not found (e.g. API rate limit), fall back to most starred
    if (featured.length === 0) {
      return allRepos
        .filter((r) => !r.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6);
    }

    return featured;
  } catch (err) {
    console.error("Failed to fetch GitHub repos:", err);
    return [];
  }
}

export async function getAllRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/dhieeddine/repos?per_page=100&sort=updated",
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
    const repos: GithubRepo[] = await res.json();
    return repos.filter((r) => !r.fork);
  } catch {
    return [];
  }
}
