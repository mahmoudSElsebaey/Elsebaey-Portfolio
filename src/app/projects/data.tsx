export interface Project {
  num: string;
  slug: string;
  title: string;
  category: string;
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
  {
    num: "02",
    slug: "fixer-repair-center",
    title: "Fixer — Repair Center SaaS",
    category: "MERN SaaS Platform",
    tools: [
      { name: "React 18" },
      { name: "TypeScript" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "Redux Toolkit" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "JWT" },
      { name: "Zod" },
      { name: "i18next" },
      { name: "Framer Motion" },
      { name: "Recharts" },
      { name: "Cloudinary" },
      { name: "Helmet" },
    ],
    description:
      "Full-stack MERN platform for repair centers — device intake to warranty. Customers, tickets, technicians, inventory, quotations, invoices, QR tracking, appointments, reports, and production hardening with full AR/EN + RTL support.",
    longDescription:
      "Fixer is a production-ready repair center operations SaaS that models the real workflow from device intake through warranty. It covers customers & devices, repair tickets with status workflow, technicians and role-based permissions, spare parts inventory, quotations with customer approval, invoices & payments, public QR live tracking, appointments, analytics & reports, notifications, and activity logs. Built as vertical slices (UI → API → model → DB) across 14 phases, with i18n/RTL, design system, security (Helmet, rate limits, Zod env validation), health probes, and deploy-ready hardening for Vercel + MongoDB Atlas + Cloudinary.",
    features: [
      "End-to-end repair workflow: intake → diagnosis → repair → delivery → warranty",
      "Customers, devices, tickets, technicians, inventory, quotations, invoices",
      "Public QR live customer tracking page",
      "Appointments, reports & analytics, notifications",
      "Full Arabic + English with RTL/LTR",
      "Role-based staff permissions (Admin, Manager, Technician, Receptionist, Inventory)",
      "Production hardening: Helmet, CORS, rate limits, health/ready, indexes",
      "Dashboard metrics, charts, activity feed",
    ],
    challenges: [
      "Modeling a complete operational repair workflow without incomplete vertical slices",
      "Supporting full RTL/LTR and bilingual UI across complex admin and public flows",
      "Building role-based permissions across many staff roles and modules",
      "Production hardening (env validation, security headers, rate limits, health probes)",
    ],
    problems: [
      "Phased vertical-slice architecture: each phase ships UI + API + model + DB",
      "Centralized i18n with i18next and direction-aware layouts",
      "JWT auth, middleware route protection, and granular role checks",
      "Zod env validation, Helmet + CSP, express-rate-limit, /health + /ready, ensureIndexes",
    ],
    image: "/assets/projects images multi devices/1.png",
    github: "https://github.com/mahmoudSElsebaey/repair-center-management-SaaS",
  },
  {
    num: "03",
    slug: "delta-news",
    title: "Delta News",
    category: "MERN Website",
    tools: [
      { name: "React 19" },
      { name: "TypeScript" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "i18next" },
      { name: "JWT" },
      { name: "Zod" },
      { name: "Cloudinary" },
      { name: "Helmet" },
    ],
    description:
      "Multilingual News & Sports media SaaS platform with full Arabic/English UI, editorial public site, SEO, and an admin dashboard for content and roles.",
    longDescription:
      "Delta News is a production-oriented News & Media platform built with the MERN stack. It delivers an editorial public experience (hero, breaking ticker, trending, categories) with complete Arabic RTL and English LTR support via /ar and /en routes, multilingual article content, JWT auth with httpOnly cookies, role-based access, bookmarks, Cloudinary uploads, rate limiting, Helmet, Zod validation, and SEO features including canonical, hreflang, Open Graph, JSON-LD, sitemap, and robots.",
    features: [
      "Editorial public site: hero, breaking ticker, trending, categories",
      "Full Arabic + English UI and content with /en and /ar URLs",
      "SEO: canonical, hreflang, Open Graph, JSON-LD, sitemap, robots",
      "Admin dashboard: articles, categories, analytics, roles",
      "Multilingual article editor",
      "JWT auth (httpOnly cookies) + role-based access",
      "Bookmarks API",
      "Rate limiting, Helmet, centralized Zod validation",
    ],
    challenges: [
      "Supporting full RTL/LTR layouts and bilingual content without duplicating components",
      "Building a flexible multilingual article model and editor",
      "Implementing strong SEO for dual-language media (canonical, hreflang, sitemap)",
      "Securing admin routes and APIs with roles, rate limits, and validation",
    ],
    problems: [
      "Centralized i18n with i18next and locale-aware routing (/en, /ar)",
      "Structured article schema with localized fields and slug handling",
      "Server-generated sitemap/robots plus meta tags and JSON-LD on the client",
      "JWT + httpOnly cookies, Helmet, express-rate-limit, and Zod middleware",
    ],
    image: "/assets/projects images multi devices/16.png",
    live: "https://deltanewsclient.vercel.app/ar",
    github: "https://github.com/mahmoudSElsebaey/delta-news-mern",
  },
  {
    num: "04",
    slug: "universal-booking-saas",
    title: "Universal Booking SaaS",
    category: "MERN Website",
    tools: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "Tailwind CSS" },
      { name: "i18next" },
      { name: "JWT" },
      { name: "Zod" },
      { name: "Cloudinary" },
      { name: "Recharts" },
    ],
    description:
      "A reusable and white-label booking management SaaS platform for businesses to manage services, staff, customers, schedules, and bookings. Built with MERN, TypeScript, Tailwind CSS, and React.",
    longDescription:
      "Bookora is a production-ready white-label booking platform designed for clinics, salons, gyms, consultants, and more. It includes role-based access, availability engine with conflict protection, bilingual UI (Arabic/English with RTL), admin dashboards, analytics, notifications, and reviews.",
    features: [
      "White-label design system",
      "Full Arabic + English with RTL/LTR",
      "Role-based access (Owner, Manager, Staff, Customer)",
      "Availability engine with conflict protection",
      "Booking flow (create, cancel, reschedule)",
      "Admin & Customer dashboards + analytics",
      "In-app notifications",
      "Reviews & ratings",
    ],
    challenges: [
      "Building a flexible multi-tenant availability engine that prevents double bookings",
      "Supporting full RTL layout and bilingual content without duplicating components",
      "Designing role-based permissions across Owner, Manager, Staff, and Customer",
      "Keeping the design system white-label ready for different business types",
    ],
    problems: [
      "Resolved booking conflicts using transactional checks and slot locking logic",
      "Centralized i18n with i18next and direction-aware layouts",
      "JWT + HTTP-only cookies with middleware-based route protection",
      "Reusable Tailwind tokens and theme variables for easy rebranding",
    ],
    image: "/assets/projects images multi devices/14.png",
    live: "https://universal-booking-saas-client.vercel.app/",
    github: "https://github.com/mahmoudSElsebaey/universal-booking-saas",
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}
