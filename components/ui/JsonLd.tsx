import { RESEARCH_PAPER } from "@/lib/constants";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dhiaeddinebarhoumi.me";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dhia Eddine Barhoumi",
    url: BASE_URL,
    image: `${BASE_URL}/profil.png`,
    jobTitle: "Software Engineering Student & AI Systems Architect",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "École Nationale d'Ingénieurs de Tunis (ENIT)",
      url: "https://www.enit.utm.tn",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tunis",
      addressCountry: "TN",
    },
    email: "dhiaeddine.barhoumi@etudiant-enit.utm.tn",
    sameAs: [
      "https://github.com/dhieeddine",
      "https://www.linkedin.com/in/dhia-eddine-barhoumi-511b5b360",
    ],
    knowsAbout: [
      "Multi-Agent AI Systems",
      "Retrieval-Augmented Generation (RAG)",
      "Computer Vision (YOLOv8)",
      "PostGIS Spatial Querying",
      "Terraform & Infrastructure as Code",
      "FastAPI & Hexagonal Architecture",
      "Spring Boot 3.5 & Java 21",
      "Angular 20 & Material Design",
      "Next.js & TypeScript",
      "Docker Compose & Linux",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ScholarlyArticleJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: RESEARCH_PAPER.title,
    author: RESEARCH_PAPER.authors.map((name) => ({
      "@type": "Person",
      name,
    })),
    datePublished: RESEARCH_PAPER.year,
    publication: {
      "@type": "PublicationEvent",
      name: RESEARCH_PAPER.conference,
      location: RESEARCH_PAPER.location,
    },
    description: RESEARCH_PAPER.abstract,
    keywords: RESEARCH_PAPER.keywords.join(", "),
    url: RESEARCH_PAPER.links.repoUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dhia Eddine Barhoumi | Portfolio",
    url: BASE_URL,
    description:
      "Portfolio of Dhia Eddine Barhoumi, Software Engineering student at ENIT specializing in Multi-Agent AI, RAG, Computer Vision, and Cloud Automation.",
    author: {
      "@type": "Person",
      name: "Dhia Eddine Barhoumi",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
