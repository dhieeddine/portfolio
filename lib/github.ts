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

export const FEATURED_REPOS = [
  "carta_gen",
  "Net2Terraform-WebInterface",
  "SociaMedia-microservices",
  "gestion-de-parc_informatique",
  "RendezvousJEE",
  "portfolio",
];

// Fallback repositories for high-availability offline rendering or rate limiting
const FALLBACK_REPOS: GithubRepo[] = [
  {
    id: 101,
    name: "carta_gen",
    full_name: "dhieeddine/carta_gen",
    description: "Multi-agent hydrological platform & automated rainfall isohyet cartography with AST Python sandbox (FastAPI, PostGIS, Hexagonal).",
    html_url: "https://github.com/dhieeddine/carta_gen",
    homepage: null,
    stargazers_count: 1,
    forks_count: 0,
    language: "Python",
    topics: ["multi-agent", "postgis", "text-to-sql", "ast-validation", "hydrology", "fastapi"],
    updated_at: "2026-09-18T00:00:00Z",
    fork: false,
  },
  {
    id: 102,
    name: "Net2Terraform-WebInterface",
    full_name: "dhieeddine/Net2Terraform-WebInterface",
    description: "End-to-end Multimodal AI pipeline translating network diagrams into Terraform/AWS code (YOLOv8, OpenCV, Hybrid RAG, FAISS). IEEE AIDIST 2026.",
    html_url: "https://github.com/dhieeddine/Net2Terraform-WebInterface",
    homepage: null,
    stargazers_count: 2,
    forks_count: 0,
    language: "Python",
    topics: ["computer-vision", "yolov8", "terraform", "rag", "faiss", "aws", "ieee"],
    updated_at: "2026-08-10T00:00:00Z",
    fork: false,
  },
  {
    id: 103,
    name: "SociaMedia-microservices",
    full_name: "dhieeddine/SociaMedia-microservices",
    description: "Distributed system composed of 7 decoupled microservices, MongoDB Atlas multi-cluster, API Gateway and Domain-Driven Design (DDD).",
    html_url: "https://github.com/dhieeddine/SociaMedia-microservices",
    homepage: null,
    stargazers_count: 2,
    forks_count: 0,
    language: "TypeScript",
    topics: ["microservices", "nodejs", "typescript", "mongodb", "api-gateway", "ddd"],
    updated_at: "2025-11-20T00:00:00Z",
    fork: false,
  },
  {
    id: 104,
    name: "gestion-de-parc_informatique",
    full_name: "dhieeddine/gestion-de-parc_informatique",
    description: "Enterprise IT asset and license management platform built for Tunisie Télécom (Java 21, Spring Boot 3.5, Angular 20, PostgreSQL, RBAC).",
    html_url: "https://github.com/dhieeddine/gestion-de-parc_informatique",
    homepage: null,
    stargazers_count: 1,
    forks_count: 0,
    language: "Java",
    topics: ["spring-boot", "java-21", "angular-20", "postgresql", "rbac", "material-design"],
    updated_at: "2025-08-30T00:00:00Z",
    fork: false,
  },
  {
    id: 105,
    name: "RendezvousJEE",
    full_name: "dhieeddine/RendezvousJEE",
    description: "Multi-tier clinical appointment management platform with distributed transactional consistency (Jakarta EE 10, EJB 3, WildFly, JPA).",
    html_url: "https://github.com/dhieeddine/RendezvousJEE",
    homepage: null,
    stargazers_count: 1,
    forks_count: 0,
    language: "Java",
    topics: ["jakarta-ee", "ejb", "wildfly", "jpa", "mysql", "enterprise-java"],
    updated_at: "2024-06-15T00:00:00Z",
    fork: false,
  },
  {
    id: 106,
    name: "portfolio",
    full_name: "dhieeddine/portfolio",
    description: "Personal engineering portfolio with terminal aesthetic, live lab CLI, multi-agent simulator, and IEEE AIDIST 2026 showcase.",
    html_url: "https://github.com/dhieeddine/portfolio",
    homepage: "https://dhiaeddinebarhoumi.me",
    stargazers_count: 1,
    forks_count: 0,
    language: "TypeScript",
    topics: ["nextjs", "react", "tailwind", "typescript", "framer-motion", "seo"],
    updated_at: "2026-09-21T00:00:00Z",
    fork: false,
  },
];

export async function getPinnedRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/dhieeddine/repos?per_page=100&sort=updated",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "dhiaeddine-portfolio",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 }, // ISR - revalidate every hour
      }
    );

    if (!res.ok) {
      console.warn(`GitHub API returned ${res.status}, falling back to static metadata.`);
      return FALLBACK_REPOS;
    }

    const allRepos: GithubRepo[] = await res.json();

    // Match featured repos in predefined order and inject rich fallback descriptions if empty
    const featured = FEATURED_REPOS.map((name) => {
      const live = allRepos.find((r) => r.name.toLowerCase() === name.toLowerCase());
      const fallback = FALLBACK_REPOS.find((r) => r.name.toLowerCase() === name.toLowerCase());
      if (live) {
        return {
          ...live,
          description: live.description || fallback?.description || null,
          topics: live.topics && live.topics.length > 0 ? live.topics : (fallback?.topics ?? []),
          language: live.language || fallback?.language || null,
        };
      }
      return fallback;
    }).filter(Boolean) as GithubRepo[];

    if (featured.length === 0) {
      return FALLBACK_REPOS;
    }

    return featured;
  } catch (err) {
    console.error("Failed to fetch GitHub repos, using fallback:", err);
    return FALLBACK_REPOS;
  }
}

export async function getAllRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/dhieeddine/repos?per_page=100&sort=updated",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "dhiaeddine-portfolio",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return FALLBACK_REPOS;
    const repos: GithubRepo[] = await res.json();
    return repos.filter((r) => !r.fork);
  } catch {
    return FALLBACK_REPOS;
  }
}
