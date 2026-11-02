export interface Project {
  num: string;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  tools: { name: string }[];
  description: string;
  longDescription?: string;
  challenges?: string[];
  problems?: string[];
  features?: string[];
  image: string;
  live?: string;
  github?: string;
}

export const projectsData: Project[] = [
  {
    num: "01",
    slug: "five-fashion",
    title: "FIVE Fashion 3D",
    category: "MERN Website",
    tags: ["MERN", "Full Stack", "Dashboard", "E-Commerce", "React", "3D", "RTL/LTR"],
    tools: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "i18next" },
      { name: "JWT" },
      { name: "Zod" },
      { name: "Redux Toolkit" },
      { name: "Three.js" },
      { name: "React Three Fiber" },
    ],
    description:
      "Luxury 3D Fashion E-Commerce Platform. Premium bilingual (AR/EN) fashion marketplace with immersive 3D experiences, dark/light themes, and modern MERN architecture.",
    longDescription:
      "FIVE Fashion (Auralis) is a production-ready luxury fashion e-commerce platform featuring immersive 3D product previews, full Arabic/English with RTL/LTR support, dark and light themes via design tokens, customer accounts, cart & wishlist, checkout, order management, admin dashboard for catalog and orders, product reviews, SEO (JSON-LD, sitemap, robots), and a polished design system with metallic identity.",
    features: [
      "Immersive 3D product previews (React Three Fiber)",
      "Full Arabic + English with RTL/LTR",
      "Dark & light themes via design tokens",
      "Auth + customer account & orders",
      "Cart, wishlist, and checkout flow",
      "Admin dashboard: catalog CRUD & order moderation",
      "Product reviews, SEO, and JSON-LD",
      "Rate limiting, JWT, Zod validation, Helmet",
    ],
    challenges: [
      "Integrating 3D experiences without hurting performance or accessibility",
      "Supporting full RTL layout and bilingual content across shop and admin",
      "Building a secure auth, cart, and order pipeline with JWT and validation",
      "Designing a consistent luxury design system with dark/light tokens",
    ],
    problems: [
      "Isolated 3D canvases and optimized Three.js usage for production",
      "Centralized i18n with i18next and direction-aware layouts",
      "JWT access/refresh, rate limits, Helmet, and Zod on the API",
      "Token-based theming and reusable UI primitives",
    ],
    image: "/assets/projects images multi devices/17.png",
    live: "https://five-fashion-client.vercel.app/",
    github: "https://github.com/mahmoudSElsebaey/five-fashion",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}

export const ALL_TAGS = [
  "SaaS",
  "MVP",
  "Full Stack",
  "Frontend",
  "Landing",
  "MERN",
  "React",
  "Next.js",
  "E-Commerce",
  "Dashboard",
  "News",
  "Portfolio",
  "Backend",
  "Gaming",
  "Real Estate",
  "Legal",
  "Supabase",
  "RTL/LTR",
  "HTML/CSS/JS",
  "3D",
] as const;

export type ProjectTag = (typeof ALL_TAGS)[number];
