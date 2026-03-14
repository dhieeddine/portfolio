const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dhiaeddinebarhoumi.me";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dhia Eddine Barhoumi",
    url: BASE_URL,
    image: `${BASE_URL}/og-image.png`,
    jobTitle: "Software Engineering Student",
    affiliation: {
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
      "https://linkedin.com/in/dhiaeddine-barhoumi",
    ],
    knowsAbout: [
      "Machine Learning",
      "Computer Vision",
      "Network Automation",
      "Cloud Computing",
      "DevOps",
      "Terraform",
      "Python",
      "Java",
      "Spring Boot",
      "Next.js",
    ],
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
    name: "Dhia Eddine Barhoumi — Portfolio",
    url: BASE_URL,
    description:
      "Portfolio of Dhia Eddine Barhoumi, software engineering student at ENIT specializing in ML, Computer Vision and Cloud/DevOps.",
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
