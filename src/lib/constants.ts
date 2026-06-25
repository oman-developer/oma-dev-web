export const SITE_CONFIG = {
  name: "oma dev",
  tagline: "Technology & Digital Solutions",
  description:
    "Premium IT services for Omani businesses — custom web development, SEO, AEO, GEO, DevOps, AI automation, and digital marketing at affordable rates.",
  url: "https://oma-dev.com",
  locale: "en_OM",
  email: "omadev02026@gmail.com",
  phone: "+92 331 5382111",
  whatsapp: "923315382111",
  address: {
    street: "Muscat",
    city: "Muscat",
    region: "Muscat Governorate",
    country: "Oman",
    postalCode: "100",
  },
  social: {
    github: "https://github.com/oman-developer",
    instagram:
      "https://www.instagram.com/omadev02026?igsh=M3c2NnVpZGM0emR5&utm_source=qr",
    facebook:
      "https://www.facebook.com/share/194PW1f4Pc/?mibextid=wwXIfr",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    id: "web-development",
    title: "Custom Web Development",
    shortDescription:
      "Bespoke, high-performance websites built with modern frameworks tailored to your Omani business goals.",
    description:
      "We craft pixel-perfect, lightning-fast websites using Next.js, React, and cutting-edge technologies. From corporate portals to interactive web apps, every solution is optimized for the Omani market — bilingual-ready, mobile-first, and built to convert visitors into customers.",
    icon: "Code2",
    features: [
      "Responsive & mobile-first design",
      "Next.js & React expertise",
      "Arabic/English bilingual support",
      "Performance & Core Web Vitals optimized",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce Websites",
    shortDescription:
      "Full-featured online stores with secure payments, inventory management, and Oman-ready checkout flows.",
    description:
      "Launch your online store with confidence. We build scalable e-commerce platforms with integrated payment gateways (including local Omani options), product catalogs, order management, and analytics — everything you need to sell online in Oman and beyond.",
    icon: "ShoppingCart",
    features: [
      "Secure payment integration",
      "Inventory & order management",
      "Product catalog & search",
      "Analytics & conversion tracking",
    ],
  },
  {
    id: "automation-ai",
    title: "Automation & AI Agents",
    shortDescription:
      "Intelligent workflows and AI-powered agents that automate repetitive tasks and boost productivity.",
    description:
      "Harness the power of AI to transform your business operations. We design custom automation pipelines, chatbots, and AI agents that handle customer inquiries, data processing, and internal workflows — saving you time and reducing operational costs.",
    icon: "Bot",
    features: [
      "Custom AI chatbots & agents",
      "Workflow automation",
      "Data processing pipelines",
      "CRM & tool integrations",
    ],
  },
  {
    id: "seo-aeo-geo",
    title: "AEO, SEO & GEO",
    shortDescription:
      "Dominate search engines and AI answer platforms with cutting-edge optimization strategies.",
    description:
      "Stay ahead in the digital landscape with our triple-threat optimization approach. Traditional SEO for Google rankings, AEO (Answer Engine Optimization) for voice and featured snippets, and GEO (Generative Engine Optimization) to ensure your brand appears in AI-generated responses from ChatGPT, Gemini, and more.",
    icon: "Search",
    features: [
      "Technical SEO audits",
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
      "Local Oman search visibility",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortDescription:
      "Data-driven campaigns across social media, PPC, and content marketing to grow your Omani audience.",
    description:
      "Reach your target customers across Oman with strategic digital marketing. From social media management and paid advertising to content strategy and email campaigns, we deliver measurable results that grow your brand and drive qualified leads.",
    icon: "Megaphone",
    features: [
      "Social media management",
      "PPC & paid advertising",
      "Content strategy & creation",
      "Email marketing campaigns",
    ],
  },
  {
    id: "web-scraping",
    title: "Web Scraping",
    shortDescription:
      "Automated data extraction and intelligence gathering to power your business decisions.",
    description:
      "Turn the web into your data source. We build robust, ethical web scraping solutions that extract market intelligence, competitor pricing, lead data, and industry insights — delivered in clean, structured formats ready for analysis.",
    icon: "Database",
    features: [
      "Custom scraper development",
      "Scheduled data pipelines",
      "API integration & delivery",
      "Data cleaning & structuring",
    ],
  },
  {
    id: "django-flask",
    title: "Django & Flask Backend",
    shortDescription:
      "Scalable Python backend solutions with REST APIs, databases, and enterprise-grade architecture.",
    description:
      "Power your applications with battle-tested Python backends. Our Django and Flask expertise covers RESTful APIs, database design, authentication systems, admin panels, and microservices — built for reliability and scale.",
    icon: "Server",
    features: [
      "RESTful API development",
      "Database design & optimization",
      "Authentication & security",
      "Admin dashboards & CMS",
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    shortDescription:
      "CI/CD pipelines, cloud infrastructure, containerization, and 24/7 monitoring for rock-solid deployments.",
    description:
      "Ship faster and sleep better. We implement DevOps best practices including CI/CD pipelines, Docker containerization, cloud infrastructure on AWS/GCP/Azure, infrastructure as code, and proactive monitoring — ensuring your systems are always available and secure.",
    icon: "CloudCog",
    features: [
      "CI/CD pipeline setup",
      "Docker & Kubernetes",
      "Cloud infrastructure (AWS/GCP)",
      "Monitoring & alerting",
    ],
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Affordable for SMEs",
    description:
      "Enterprise-grade technology at prices designed for Omani small businesses — up to 60% below local market averages.",
    icon: "Wallet",
  },
  {
    title: "Cutting-Edge Tech",
    description:
      "We leverage AI, modern frameworks, and the latest DevOps practices to deliver solutions that future-proof your business.",
    icon: "Zap",
  },
  {
    title: "Oman-Focused",
    description:
      "Deep understanding of the local market, bilingual support, and solutions tailored for Omani business culture.",
    icon: "MapPin",
  },
  {
    title: "Proven Results",
    description:
      "Track record of delivering on time with measurable ROI — backed by 5-star client reviews on Clutch.",
    icon: "Award",
  },
] as const;

export const REVIEWS = [
  {
    id: 1,
    name: "Ahmed Al-Balushi",
    company: "Muscat Trading Co.",
    role: "CEO",
    rating: 5,
    text: "oma dev transformed our outdated website into a modern, fast platform. Their team understood our local market needs perfectly. Highly recommended for any Omani business.",
    date: "March 2026",
  },
  {
    id: 2,
    name: "Fatima Al-Hinai",
    company: "Salalah Retail Group",
    role: "Marketing Director",
    rating: 5,
    text: "The SEO and digital marketing results exceeded our expectations. We saw a 3x increase in organic traffic within 4 months. Professional, affordable, and responsive.",
    date: "February 2026",
  },
  {
    id: 3,
    name: "Khalid Al-Rashdi",
    company: "Sohar Industrial LLC",
    role: "Operations Manager",
    rating: 5,
    text: "Their DevOps and automation solutions saved us countless hours. The AI chatbot they built handles 80% of our customer inquiries automatically. Outstanding value.",
    date: "January 2026",
  },
] as const;

export const PRICING_TIERS = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small businesses and startups launching their digital presence.",
    webDev: {
      price: 79,
      features: ["5-page responsive website", "Mobile optimized", "Contact form", "Basic SEO setup", "1 month support"],
    },
    seo: {
      price: 25,
      features: ["Keyword research", "On-page SEO", "Google Business setup", "Monthly report", "Local Oman optimization"],
    },
    automation: {
      price: 35,
      features: ["Basic AI chatbot", "Email auto-replies", "Simple workflow setup", "WhatsApp integration", "Monthly tweaks"],
    },
    devops: {
      price: 29,
      features: ["CI/CD pipeline setup", "Git repository config", "Basic deployment", "SSL certificate setup", "1 server setup"],
    },
    popular: false,
  },
  {
    id: "growth",
    name: "Growth",
    description: "Ideal for growing SMEs ready to scale their online presence and reach.",
    webDev: {
      price: 149,
      features: ["10-page custom website", "CMS integration", "E-commerce ready", "Advanced SEO", "Analytics dashboard", "3 months support"],
    },
    seo: {
      price: 49,
      features: ["Full SEO audit", "AEO optimization", "Content strategy", "Link building", "Bi-weekly reports", "GEO readiness"],
    },
    automation: {
      price: 79,
      features: ["Custom AI agent", "Multi-channel chatbot", "CRM integration", "Data automation", "Workflow pipelines", "Bi-weekly optimization"],
    },
    devops: {
      price: 59,
      features: ["Docker containerization", "Cloud deployment (AWS/GCP)", "Monitoring & alerts", "Backup automation", "2 environments setup"],
    },
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Comprehensive solutions for established businesses with complex requirements.",
    webDev: {
      price: 349,
      features: ["Unlimited pages", "Custom web application", "API integrations", "Multi-language support", "Priority support", "6 months maintenance"],
    },
    seo: {
      price: 99,
      features: ["Full SEO + AEO + GEO", "Competitor analysis", "AI visibility optimization", "Dedicated strategist", "Weekly reports", "Priority support"],
    },
    automation: {
      price: 149,
      features: ["Enterprise AI agents", "Custom ML integrations", "Full process automation", "Multi-system orchestration", "Dedicated AI engineer", "24/7 monitoring"],
    },
    devops: {
      price: 119,
      features: ["Kubernetes setup", "Multi-cloud infrastructure", "Infrastructure as Code", "24/7 monitoring & SLA", "Disaster recovery", "Dedicated DevOps engineer"],
    },
    popular: false,
  },
] as const;

export type PricingCategory = "webDev" | "seo" | "automation" | "devops";

export const PRICING_SECTIONS: {
  key: PricingCategory;
  title: string;
  subtitle: string;
  billing: "one-time" | "monthly";
}[] = [
  {
    key: "webDev",
    title: "Web Development Packages",
    subtitle: "Professional websites built for Omani businesses of every size.",
    billing: "one-time",
  },
  {
    key: "seo",
    title: "SEO, AEO & GEO Packages",
    subtitle: "Dominate search engines and AI platforms with monthly optimization.",
    billing: "monthly",
  },
  {
    key: "automation",
    title: "Automation & AI Agent Packages",
    subtitle: "Smart workflows and AI-powered agents to automate your business.",
    billing: "monthly",
  },
  {
    key: "devops",
    title: "DevOps Packages",
    subtitle: "Reliable CI/CD, cloud infrastructure, and monitoring for your apps.",
    billing: "monthly",
  },
];
