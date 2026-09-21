export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  org: string;
  period: string;
  description: string;
  architecture: string;
  tags: string[];
  repoUrl: string;
  repoName: string;
  category: 'AI & Spatial' | 'AI & Cloud' | 'Fullstack & Cloud' | 'Enterprise & Systems' | 'DevOps & Networks';
  featured: boolean;
  demoType?: 'cartagen-pipeline' | 'vision-terraform' | 'microservices-graph';
  metrics?: { stars?: number; forks?: number; statusBadge?: string };
}

export interface ResearchPaper {
  title: string;
  authors: string[];
  conference: string;
  location: string;
  status: string;
  year: string;
  badge: string;
  abstract: string;
  highlights: string[];
  keywords: string[];
  metrics: { accuracy: string; speedup: string; components: string };
  links: {
    paperUrl?: string;
    repoUrl: string;
    bibtex: string;
  };
}

export interface SkillItem {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  badge?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  summary: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeCode: string;
  description: string;
  skillsAcquired: string[];
}

export const RESEARCH_PAPER: ResearchPaper = {
  title: "From Network Diagrams to Deployable Cloud Infrastructure: A Multimodal AI-Based Approach",
  authors: ["Dhia Eddine Barhoumi", "Wael Hammali", "Wafa Mefteh"],
  conference: "IEEE AIDIST 2026 / 5th FCIERI Forum",
  location: "Tunis, Tunisia",
  status: "ACCEPTED",
  year: "2026",
  badge: "ACCEPTED - IEEE AIDIST 2026",
  abstract: "Automating cloud infrastructure provisioning from conceptual network diagrams remains a significant engineering bottleneck in DevOps workflows. This research introduces Net2Terraform, a multimodal AI framework that converts hand-drawn and digital network diagrams into deployable, syntactically validated Terraform (HCL) configurations for AWS. The architecture couples custom-trained YOLOv8 for network topology component detection, morphological OpenCV and Tesseract OCR for metadata extraction, and a hybrid Retrieval-Augmented Generation (RAG) engine combining dense semantic retrieval (FAISS), sparse lexical search (BM25), and cross-encoder neural reranking. Evaluations confirm 98.4% component detection accuracy and compliant HCL generation in seconds.",
  highlights: [
    "Pipeline IA multimodal combinant Vision par Ordinateur (YOLOv8 + OpenCV + OCR) et LLM Code Generation",
    "RAG Hybride haute précision : FAISS (dense) + BM25 (lexical) + Reranking Cross-Encoder pour l'alignement Terraform HCL",
    "Validation et déploiement d'architectures réseaux automatisés avec Containerlab et AWS Provider",
    "Réduction du délai de spécification d'infrastructure de plusieurs heures à moins de 15 secondes"
  ],
  keywords: [
    "Multimodal AI",
    "Computer Vision",
    "YOLOv8",
    "Hybrid RAG",
    "Cross-Encoder Reranking",
    "Terraform HCL",
    "Infrastructure as Code (IaC)",
    "Cloud Automation"
  ],
  metrics: {
    accuracy: "98.4%",
    speedup: "95%",
    components: "15+ types réseau"
  },
  links: {
    repoUrl: "https://github.com/dhieeddine/Net2Terraform-WebInterface",
    bibtex: `@inproceedings{barhoumi2026net2terraform,
  author    = {Barhoumi, Dhia Eddine and Hammali, Wael and Mefteh, Wafa},
  title     = {From Network Diagrams to Deployable Cloud Infrastructure: A Multimodal AI-Based Approach},
  booktitle = {Proceedings of the IEEE International Conference on Artificial Intelligence and Digital Smart Technologies (AIDIST 2026)},
  year      = {2026},
  address   = {Tunis, Tunisia},
  publisher = {IEEE}
}`
  }
};

export const FLAGSHIP_PROJECTS: Project[] = [
  {
    slug: "cartagen",
    title: "CartaGen",
    subtitle: "Plateforme Multi-Agents Hydrologique & Cartographie Automatisée",
    org: "DGRE (Direction Générale des Ressources en Eau) - Ministère de l'Agriculture",
    period: "2026",
    description: "Plateforme d'intelligence artificielle multi-agents conçue pour la Direction Générale des Ressources en Eau. Elle permet l'interrogation en langage naturel des données pluviométriques nationales, la génération automatisée de cartes isohyètes/pluviométriques et la compilation dynamique de bulletins décisionnels LaTeX/PDF.",
    architecture: "Architecture Hexagonale découplée, Supervisor Multi-Agents, Text-to-SQL sécurisé vers PostGIS, interpolation spatiale (IDW, polygones de Thiessen), bac à sable sécurisé avec validation syntaxique AST du code Python généré avant exécution.",
    tags: ["FastAPI", "Multi-Agents", "Text-to-SQL", "PostGIS", "AST Validation", "Docker Compose", "LaTeX/PDF", "Hexagonal"],
    repoUrl: "https://github.com/dhieeddine/carta_gen",
    repoName: "carta_gen",
    category: "AI & Spatial",
    featured: true,
    demoType: "cartagen-pipeline",
    metrics: { statusBadge: "DGRE Production 2026" }
  },
  {
    slug: "net2terraform",
    title: "Net2Terraform / Vision-to-Infrastructure",
    subtitle: "Conversion Multimodale de Topologies Réseaux en Code Terraform AWS",
    org: "ENIT PFA / Recherche Scientifique (IEEE AIDIST 2026)",
    period: "2025 – 2026",
    description: "Système d'IA de bout en bout traduisant des schémas d'architectures réseaux (manuscrits ou diagrammes numériques) et des descriptions textuelles en configurations d'infrastructure cloud Terraform/HCL pour AWS.",
    architecture: "YOLOv8 fine-tuné sur 15 classes d'équipements réseaux (98.4% précision), traitement d'images OpenCV, OCR Tesseract, pipeline RAG hybride couplant FAISS, BM25 et Reranking Cross-Encoder avec validation Containerlab.",
    tags: ["YOLOv8", "Computer Vision", "Terraform", "Hybrid RAG", "FAISS", "Cross-Encoder", "AWS", "FastAPI"],
    repoUrl: "https://github.com/dhieeddine/Net2Terraform-WebInterface",
    repoName: "Net2Terraform-WebInterface",
    category: "AI & Cloud",
    featured: true,
    demoType: "vision-terraform",
    metrics: { statusBadge: "IEEE AIDIST 2026" }
  },
  {
    slug: "socialmedia-microservices",
    title: "SocialMedia Distributed Microservices",
    subtitle: "Architecture Événementielle & Domain-Driven Design (DDD)",
    org: "ENIT Distributed Systems",
    period: "2025",
    description: "Architecture distribuée à haute résilience composée de 7 microservices indépendants (Auth, User, Post, Media, Notification, Feed, Gateway). Conçue selon les principes du Domain-Driven Design.",
    architecture: "7 microservices découplés avec communication REST/Events, API Gateway centralisée, MongoDB Atlas multi-clusters, sécurisation RBAC JWT, déploiement orchestré par Docker Compose.",
    tags: ["Node.js", "TypeScript", "Microservices", "MongoDB Atlas", "API Gateway", "DDD", "Docker Compose"],
    repoUrl: "https://github.com/dhieeddine/SociaMedia-microservices",
    repoName: "SociaMedia-microservices",
    category: "Fullstack & Cloud",
    featured: true,
    demoType: "microservices-graph"
  },
  {
    slug: "it-asset-management",
    title: "IT Asset Management Platform",
    subtitle: "Gestion de Parc Informatique & Sécurité RBAC",
    org: "Tunisie Télécom",
    period: "2025",
    description: "Plateforme complète de supervision du cycle de vie du parc matériel, licences logicielles et équipements télécoms. Migration complète du socle de données vers PostgreSQL avec politique d'accès RBAC stricte.",
    architecture: "Spring Boot 3.5, Java 21, architecture n-tiers, Spring Security avec RBAC, Spring Data JPA / Hibernate, PostgreSQL, interface frontend réactive avec Angular 20 et Material Design.",
    tags: ["Java 21", "Spring Boot 3.5", "Angular 20", "PostgreSQL", "RBAC", "Material Design", "REST API"],
    repoUrl: "https://github.com/dhieeddine/gestion-de-parc_informatique",
    repoName: "gestion-de-parc_informatique",
    category: "Enterprise & Systems",
    featured: true
  },
  {
    slug: "network-automation",
    title: "Network Automation & Monitoring",
    subtitle: "Orchestration & Déploiement d'Infrastructures Réseaux",
    org: "ENIT Infrastructures & Télécoms",
    period: "2024 – 2025",
    description: "Framework d'automatisation pour le provisionnement, la configuration cohérente et la télémétrie de topologies réseaux virtualisées et physiques à large échelle.",
    architecture: "Playbooks Ansible, génération dynamique de configurations multi-constructeurs via Jinja2, scripts Python Netmiko/NAPALM, émulation sous Containerlab et intégration CI/CD.",
    tags: ["Ansible", "Jinja2", "Python", "Network Automation", "Containerlab", "CI/CD", "Linux"],
    repoUrl: "https://github.com/dhieeddine",
    repoName: "network-automation",
    category: "DevOps & Networks",
    featured: true
  },
  {
    slug: "rendezvous-jee",
    title: "RendezvousJEE – Clinical System",
    subtitle: "Système d'Information Hospitalier Distribué",
    org: "Systèmes d'Information d'Entreprise",
    period: "2024",
    description: "Plateforme hospitalière multi-tiers de gestion des consultations médicales, dossiers patients et plannings hospitaliers garantissant l'intégrité transactionnelle ACID sur serveurs d'applications.",
    architecture: "Jakarta EE 10, Enterprise JavaBeans (EJB 3 session & message-driven), déploiement sur serveur d'application WildFly, persistance JPA/Hibernate, base relationnelle MySQL.",
    tags: ["Jakarta EE 10", "EJB 3", "WildFly", "JPA/Hibernate", "MySQL", "Enterprise Java"],
    repoUrl: "https://github.com/dhieeddine/RendezvousJEE",
    repoName: "RendezvousJEE",
    category: "Enterprise & Systems",
    featured: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai-rag",
    title: "AI, Multi-Agent & RAG",
    icon: "brain",
    summary: "Orchestration multi-agents, raisonnement LLM, pipelines RAG haute précision et modèles locaux.",
    skills: [
      { name: "Multi-Agent Orchestration (Supervisor)", level: "Expert", badge: "Core" },
      { name: "Text-to-SQL & Schema Grounding", level: "Expert", badge: "Production" },
      { name: "LLM Code Generation & AST Validation", level: "Expert", badge: "Security" },
      { name: "Hybrid RAG (FAISS + BM25)", level: "Expert", badge: "IEEE Paper" },
      { name: "Cross-Encoder Neural Reranking", level: "Advanced" },
      { name: "Sentence Transformers & Embeddings", level: "Advanced" },
      { name: "Ollama & Local LLM Serving", level: "Advanced" }
    ]
  },
  {
    id: "vision-spatial",
    title: "Computer Vision & Spatial",
    icon: "camera",
    summary: "Détection d'objets spécialisée, vision par ordinateur et calcul géospatial avancé.",
    skills: [
      { name: "YOLOv8 (Custom Training & Tuning)", level: "Expert", badge: "98.4% Acc" },
      { name: "OpenCV (Morphology, Filtering, Contour)", level: "Advanced" },
      { name: "Tesseract OCR Pipeline", level: "Advanced" },
      { name: "PostGIS Spatial Queries", level: "Expert", badge: "DGRE" },
      { name: "IDW (Inverse Distance Weighting)", level: "Advanced" },
      { name: "Thiessen Polygons Spatial Interpolation", level: "Advanced" }
    ]
  },
  {
    id: "backend-arch",
    title: "Backend & Architecture",
    icon: "server",
    summary: "Architectures robustes et modulaires, patrons hexagonaux, microservices et DDD.",
    skills: [
      { name: "FastAPI & Pydantic", level: "Expert", badge: "Core" },
      { name: "Spring Boot 3.5 & Java 21", level: "Advanced", badge: "TT 2025" },
      { name: "Node.js & TypeScript", level: "Advanced" },
      { name: "Hexagonal / Clean Architecture", level: "Expert", badge: "Pattern" },
      { name: "Domain-Driven Design (DDD)", level: "Advanced" },
      { name: "REST APIs & OpenAPI Specs", level: "Expert" },
      { name: "Jakarta EE 10 / EJB / WildFly", level: "Proficient" }
    ]
  },
  {
    id: "frontend-ui",
    title: "Frontend & Modern Web",
    icon: "layout",
    summary: "Interfaces réactives, typage strict, performances web et esthétique soignée.",
    skills: [
      { name: "React & Next.js (App Router)", level: "Expert", badge: "Portfolio" },
      { name: "Angular 20 & Material Design", level: "Advanced", badge: "TT 2025" },
      { name: "TypeScript (Strict Mode)", level: "Expert" },
      { name: "Tailwind CSS & Design Tokens", level: "Expert" },
      { name: "Framer Motion Animations", level: "Advanced" },
      { name: "HTML5 / Modern CSS / Semantic Web", level: "Expert" }
    ]
  },
  {
    id: "devops-cloud",
    title: "DevOps, Cloud & Code Security",
    icon: "shield",
    summary: "Infrastructures déclaratives, conteneurisation, automatisation réseau et sécurité.",
    skills: [
      { name: "Docker & Docker Compose", level: "Expert", badge: "Daily" },
      { name: "Terraform & IaC (AWS Provider)", level: "Advanced", badge: "IEEE Paper" },
      { name: "Ansible & Jinja2 Templates", level: "Advanced" },
      { name: "AST-Based Code Validation Sandbox", level: "Expert", badge: "CartaGen" },
      { name: "AWS Cloud (VPC, EC2, S3)", level: "Advanced" },
      { name: "Containerlab Network Emulation", level: "Advanced" },
      { name: "CI/CD Pipelines (GitHub Actions)", level: "Advanced" },
      { name: "Git & Distributed Workflows", level: "Expert" }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "nvidia-llm",
    name: "Efficient Large Language Model (LLM) Customization",
    issuer: "NVIDIA Deep Learning Institute",
    date: "March 2024",
    badgeCode: "NVIDIA DLI",
    description: "Spécialisation sur les techniques avancées d'adaptation, quantification, LoRA/PEFT et inférence efficiente des Large Language Models sur matériel accéléré.",
    skillsAcquired: ["PEFT / LoRA Fine-Tuning", "Model Quantization", "NVIDIA GPUs Optimization", "Prompt Engineering"]
  },
  {
    id: "cisco-ccna",
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "January 2024",
    badgeCode: "CISCO CCNA",
    description: "Fondations réseaux, modèles OSI & TCP/IP, adressage IPv4/IPv6, commutation Ethernet, routage IP et protocoles d'infrastructure réseau d'entreprise.",
    skillsAcquired: ["Routing & Switching", "IPv4 / IPv6 Subnetting", "Network Protocols (DNS, DHCP, SSH)", "Network Security"]
  },
  {
    id: "hedera-hashgraph",
    name: "Hashgraph Developer Course",
    issuer: "The Hashgraph Association",
    date: "2024",
    badgeCode: "HEDERA DLT",
    description: "Développement d'applications décentralisées sécurisées sur le réseau Hedera Hashgraph (Consensus Service, Token Service et Smart Contracts).",
    skillsAcquired: ["Hedera Consensus Service", "Decentralized Systems", "Smart Contracts", "Distributed Ledger Technology"]
  }
];

export const PIPELINE_DEMO_STEPS = [
  {
    step: 1,
    agent: "User / Natural Language Query",
    status: "Input Received",
    message: "'Génère la carte des précipitations mensuelles du bassin de Medjerda pour l\\'année 2024.'",
    color: "text-cyan-400"
  },
  {
    step: 2,
    agent: "Supervisor Agent",
    status: "Intent Classification & Plan Dispatch",
    message: "Analyse d'intention : Calcul spatial + Requête stationnaire. Dispatch vers SQL Agent & Spatial Agent.",
    color: "text-amber-400"
  },
  {
    step: 3,
    agent: "SQL & PostGIS Agent",
    status: "Text-to-SQL Grounding",
    message: "SELECT station_id, rainfall, ST_AsText(geom) FROM stations WHERE basin='Medjerda' AND date BETWEEN '2024-01-01' AND '2024-12-31'; [18 stations trouvées]",
    color: "text-emerald-400"
  },
  {
    step: 4,
    agent: "Spatial Interpolation Agent",
    status: "IDW & Isohyet Calculation",
    message: "Calcul du maillage régulier par pondération inverse de distance (IDW p=2). Génération des contours isohyètes.",
    color: "text-indigo-400"
  },
  {
    step: 5,
    agent: "Python Sandbox & AST Validator",
    status: "AST Syntax & Safety Verification",
    message: "Inspection du code Python généré via l'AST : imports autorisés (matplotlib, geopandas), aucun appel système dangereux détecté. Code validé.",
    color: "text-green-400"
  },
  {
    step: 6,
    agent: "Document & Map Renderer",
    status: "Artifacts Ready",
    message: "Carte isohyète générée avec légende hydrologique. Bulletin synthétique compilé en LaTeX/PDF prêt à télécharger.",
    color: "text-primary"
  }
];
