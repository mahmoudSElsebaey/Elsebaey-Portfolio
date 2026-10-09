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
    tags: ["MERN", "Full Stack", "E-Commerce", "React", "3D", "i18n"],
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
    tags: ["SaaS", "MERN", "Full Stack", "React", "Dashboard", "i18n"],
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
    image: "/assets/projects images multi devices/18.png",
    live: "https://fixer-client.vercel.app/",
    github: "https://github.com/mahmoudSElsebaey/repair-center-management-SaaS",
  },
  {
    num: "03",
    slug: "aqarco",
    title: "Aqarco — عقاركو",
    category: "Real Estate Platform",
    tags: ["Full Stack", "Next.js", "React", "Real Estate", "i18n"],
    tools: [
      { name: "Next.js 16" },
      { name: "React 19" },
      { name: "TypeScript" },
      { name: "Tailwind CSS v4" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "next-intl" },
      { name: "jose (JWT)" },
      { name: "Zod" },
      { name: "bcryptjs" },
      { name: "Cloudinary" },
    ],
    description:
      "Premium bilingual (AR/EN) real estate platform for property sales, rentals, investments, hotels, resorts, and apartment booking — with role-based dashboards for buyers, owners, agents, and operators.",
    longDescription:
      "Aqarco (عقاركو) is a premium full-stack real estate platform built with Next.js 16 App Router and MongoDB. It covers property listings, discovery and comparison, bookings, investment opportunities, inquiries, favorites, and multi-role experiences for buyers, renters, investors, owners, agents, hotel operators, and admins. Full Arabic/English with RTL/LTR via next-intl, JWT sessions (jose), Zod validation, admin moderation for users and properties, and a polished brand system for exceptional living and investment.",
    features: [
      "Property listings: sale, rent, investment, hotel & resort stays",
      "Multi-role access: buyer, renter, investor, owner, agent, hotel operator, admin",
      "Full Arabic + English with RTL/LTR (next-intl)",
      "Discover, compare, favorites, and property detail pages",
      "Bookings inbox and investment workflows",
      "Owner/agent listing management (create & edit)",
      "Admin: users and properties moderation",
      "JWT auth (jose), Zod validation, Cloudinary-ready uploads",
    ],
    challenges: [
      "Supporting many user roles with different dashboards and permissions",
      "Building a unified product for sale, rent, investment, and hospitality booking",
      "Full RTL/LTR and bilingual content across marketing and app flows",
      "Keeping listing, booking, and investment flows consistent in one platform",
    ],
    problems: [
      "Role-based route protection and dashboard views per persona",
      "Locale-aware App Router with next-intl and direction-aware layouts",
      "Structured property model covering multiple listing types",
      "JWT sessions with jose + Zod on auth and listing APIs",
    ],
    image: "/assets/projects images multi devices/19.png",
    live: "https://aqarco.vercel.app/",
    github: "https://github.com/mahmoudSElsebaey/real-estate-platform",
  },
  {
    num: "04",
    slug: "delta-news",
    title: "Delta News",
    category: "MERN Website",
    tags: ["MERN", "Full Stack", "SaaS", "React", "i18n"],
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
    num: "05",
    slug: "universal-booking-saas",
    title: "Universal Booking SaaS",
    category: "MERN Website",
    tags: ["SaaS", "MERN", "Full Stack", "React", "Booking", "i18n"],
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
  },
  {
    num: "06",
    slug: "e-commerce-full-stack",
    title: "E-Commerce Full Stack",
    category: "MERN Website",
    tags: ["MERN", "Full Stack", "E-Commerce", "React"],
    tools: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Bootstrap" },
      { name: "Swiper" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "i18next" },
      { name: "Stripe" },
      { name: "PayPal" },
      { name: "Google Auth" },
      { name: "Zod" },
      { name: "Cloudinary" },
    ],
    description:
      "A full-stack MERN e-commerce application with authentication, payments, multi-language support, and product management.",
    longDescription:
      "A complete electronics e-commerce platform with product catalog, cart, checkout, payment gateways, admin dashboard, and multi-language support.",
    features: [
      "Full authentication & authorization",
      "Stripe & PayPal payments",
      "Multi-language support",
      "Admin product management",
      "Cloudinary image uploads",
    ],
    challenges: [
      "Integrating multiple payment providers securely",
      "Handling cart state and order consistency",
      "Building an admin flow for catalog management",
    ],
    problems: [
      "Separated payment adapters and webhook handling",
      "Validated orders with Zod and server-side checks",
      "Structured admin APIs for CRUD operations",
    ],
    image: "/assets/projects images multi devices/1.png",
    live: "https://electric-store-mern.vercel.app/",
    github: "https://github.com/mahmoudSElsebaey/electric-store-mern",
  },
  {
    num: "07",
    slug: "examflow",
    title: "ExamFlow — SaaS MVP",
    category: "SaaS / EdTech MVP",
    tags: ["SaaS", "MVP", "MERN", "Full Stack", "EdTech", "React", "i18n"],
    tools: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "Tailwind CSS" },
      { name: "i18next" },
      { name: "JWT" },
      { name: "Stripe" },
      { name: "Resend" },
      { name: "Zod" },
    ],
    description:
      "Multi-tenant assessment SaaS MVP for modern education — question banks, timed exams, analytics, certificates, billing, and full Arabic/English RTL support.",
    longDescription:
      "ExamFlow is a multi-tenant EdTech SaaS MVP for institutions and educators. It covers the full assessment lifecycle: content hierarchy (subjects/topics/lessons), question banks, exam builder & engine, student learning portal, analytics, certificates, manual grading, organizations with roles, Stripe billing, email notifications, and a complete English/Arabic RTL experience.",
    features: [
      "Multi-tenant organizations with role-based access",
      "Content hierarchy: Subjects → Topics → Lessons",
      "Question banks + Exam builder & timed exam engine",
      "Student Learn portal with lesson content",
      "Analytics dashboards & certificates",
      "Manual grading + autosave short answers",
      "Full EN/AR + RTL support",
      "Stripe billing (Checkout, Portal, Webhooks) + plan limits",
      "Email notifications (publish, grade, cert, invite)",
      "White-label ready design system",
    ],
    challenges: [
      "Building a scalable multi-tenant architecture with organization isolation",
      "Supporting full RTL layout and bilingual content across complex flows",
      "Designing a reliable exam engine with timing, autosave, and grading",
      "Integrating billing, email, and role permissions without coupling",
    ],
    problems: [
      "Membership role as tenant source of truth + permissions module",
      "Centralized i18n with direction-aware layouts and design tokens",
      "Exam session state, autosave, and server-side validation",
      "Stripe webhook handling + mock billing fallback for development",
    ],
    image: "/assets/projects images multi devices/15.png",
    live: "https://client-indol-beta-85.vercel.app/",
    github: "https://github.com/mahmoudSElsebaey/examflow-saas-platform",
  },
  {
    num: "08",
    slug: "gym-website",
    title: "Gym Website",
    category: "Fitness Website",
    tags: ["Frontend", "Landing", "React"],
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Swiper" },
      { name: "React" },
    ],
    description:
      "A modern gym website featuring class schedules, trainer profiles, and membership options.",
    longDescription:
      "A responsive fitness brand website focused on showcasing classes, trainers, and membership plans with smooth interactions.",
    features: [
      "Responsive landing pages",
      "Trainer profiles",
      "Class schedules",
      "Membership sections",
    ],
    challenges: [
      "Creating an energetic visual identity",
      "Keeping animations smooth on mobile",
    ],
    problems: [
      "Used modular sections and Swiper for carousels",
      "Optimized assets and interactions for smaller screens",
    ],
    image: "/assets/projects images multi devices/2.png",
    live: "https://mahmoudselsebaey.github.io/Gym-Website/",
    github: "https://github.com/mahmoudselsebaey/Gym-Website",
  },
  {
    num: "09",
    slug: "portfolio-app",
    title: "Portfolio App",
    category: "Personal Portfolio",
    tags: ["Frontend", "React", "Landing"],
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "React" },
      { name: "TypeScript" },
    ],
    description:
      "A personal portfolio website showcasing projects, skills, and contact information with smooth animations.",
    longDescription:
      "A modern personal portfolio built with React and Tailwind CSS, featuring project showcases, skill sections, and contact forms with Framer Motion animations.",
    features: [
      "Project showcase",
      "Skills section",
      "Smooth animations",
      "Responsive design",
    ],
    challenges: [
      "Creating a distinctive personal brand",
      "Balancing animation performance",
    ],
    problems: [
      "Used Framer Motion for performant animations",
      "Modular component structure",
    ],
    image: "/assets/projects images multi devices/3.png",
    live: "https://mahmoudselsebaey.github.io/Portfolio-ReactJS/",
    github: "https://github.com/mahmoudSElsebaey/Portfolio-ReactJS",
  },
  {
    num: "10",
    slug: "authentication-app",
    title: "Authentication App",
    category: "Full Stack Website",
    tags: ["Full Stack", "MERN", "React"],
    tools: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "JWT" },
    ],
    description:
      "A full-stack authentication application with user registration, login, and protected routes.",
    longDescription:
      "Complete auth flow with JWT, password hashing, and protected dashboard routes.",
    features: [
      "User registration & login",
      "JWT authentication",
      "Protected routes",
      "Password hashing",
    ],
    challenges: [
      "Secure token handling",
      "Session management",
    ],
    problems: [
      "HTTP-only cookies for tokens",
      "Middleware-based route protection",
    ],
    image: "/assets/projects images multi devices/4.png",
    live: "#",
    github: "https://github.com/mahmoudSElsebaey/auth-app",
  },
  {
    num: "11",
    slug: "sakney",
    title: "Sakney",
    category: "Rental Platform",
    tags: ["Frontend", "React", "Landing"],
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Material UI" },
    ],
    description:
      "A rental property platform frontend for browsing and filtering available properties.",
    longDescription:
      "Property rental UI focused on discovery and listing presentation.",
    features: [
      "Property listings",
      "Filter & search",
      "Responsive cards",
    ],
    challenges: [
      "Clean listing layout",
    ],
    problems: [
      "Material UI components for consistency",
    ],
    image: "/assets/projects images multi devices/5.png",
    live: "https://mahmoudselsebaey.github.io/Sakney/",
    github: "https://github.com/mahmoudselsebaey/Sakney",
  },
  {
    num: "12",
    slug: "electronics-store",
    title: "Electronics Store",
    category: "E-commerce Website",
    tags: ["Frontend", "E-Commerce", "React", "Landing"],
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Bootstrap" },
      { name: "Swiper" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    description:
      "An electronics e-commerce storefront with product catalog and promotional sections.",
    longDescription:
      "Frontend electronics store with product grids and carousel promotions.",
    features: [
      "Product catalog",
      "Promotional carousels",
      "Responsive layout",
    ],
    challenges: [
      "Product presentation",
    ],
    problems: [
      "Bootstrap grid and Swiper carousels",
    ],
    image: "/assets/projects images multi devices/6.png",
    live: "https://mahmoudselsebaey.github.io/Electronics-Store/",
    github: "https://github.com/mahmoudselsebaey/Electronics-Store",
  },
  {
    num: "13",
    slug: "social-feed",
    title: "Social Feed",
    category: "Social Media SPA",
    tags: ["Frontend", "React", "Next.js"],
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "React" },
      { name: "Next.js" },
    ],
    description:
      "A social media feed SPA with posts, likes, and user interactions.",
    longDescription:
      "Social feed interface built with React and Next.js.",
    features: [
      "Post feed",
      "Like interactions",
      "Responsive UI",
    ],
    challenges: [
      "Feed layout and interactions",
    ],
    problems: [
      "Component-based feed structure",
    ],
    image: "/assets/projects images multi devices/7.png",
    live: "#",
    github: "#",
  },
  {
    num: "14",
    slug: "sakney-dashboard",
    title: "Sakney Dashboard",
    category: "Admin Dashboard",
    tags: ["Dashboard", "Frontend"],
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Bootstrap" },
      { name: "JavaScript" },
      { name: "Chart.js" },
    ],
    description:
      "An admin dashboard for managing rental properties with charts and data tables.",
    longDescription:
      "Admin panel with analytics charts for property management.",
    features: [
      "Analytics charts",
      "Data tables",
      "Admin layout",
    ],
    challenges: [
      "Dashboard information hierarchy",
    ],
    problems: [
      "Chart.js for visualizations",
    ],
    image: "/assets/projects images multi devices/8.png",
    live: "#",
    github: "#",
  },
  {
    num: "15",
    slug: "game-warrior",
    title: "Game Warrior",
    category: "Gaming Website",
    tags: ["Frontend", "Landing"],
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
    ],
    description:
      "A gaming website landing page highlighting featured games and community.",
    longDescription:
      "Gaming brand landing page with hero and featured titles.",
    features: [
      "Hero section",
      "Featured games",
      "Responsive design",
    ],
    challenges: [
      "Energetic gaming aesthetic",
    ],
    problems: [
      "Bootstrap-based responsive layout",
    ],
    image: "/assets/projects images multi devices/9.png",
    live: "https://mahmoudselsebaey.github.io/Game-Warrior/",
    github: "https://github.com/mahmoudselsebaey/Game-Warrior",
  },
  {
    num: "16",
    slug: "directory-ads",
    title: "Directory Ads",
    category: "Directory Website",
    tags: ["Frontend", "Landing"],
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
    ],
    description:
      "A directory and classified ads landing page for browsing listings.",
    longDescription:
      "Directory-style landing page for ads and listings.",
    features: [
      "Listing grid",
      "Category sections",
    ],
    challenges: [
      "Clear directory hierarchy",
    ],
    problems: [
      "Semantic HTML structure",
    ],
    image: "/assets/projects images multi devices/10.png",
    live: "https://mahmoudselsebaey.github.io/DirectoryAds/",
    github: "https://github.com/mahmoudselsebaey/DirectoryAds",
  },
  {
    num: "17",
    slug: "barber-shop",
    title: "Barber Shop",
    category: "Business Website",
    tags: ["Frontend", "Landing"],
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
    ],
    description:
      "A barber shop business website with services, team, and booking call-to-action.",
    longDescription:
      "Local business landing page for a barber shop.",
    features: [
      "Services section",
      "Team profiles",
      "Contact CTA",
    ],
    challenges: [
      "Matching brand tone",
    ],
    problems: [
      "Clean section-based layout",
    ],
    image: "/assets/projects images multi devices/11.png",
    live: "https://mahmoudselsebaey.github.io/Barber-Shop/",
    github: "https://github.com/mahmoudselsebaey/Barber-Shop",
  },
  {
    num: "18",
    slug: "amin-games",
    title: "Amin Games",
    category: "Gaming Portal",
    tags: ["Frontend", "Landing"],
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
    ],
    description:
      "A gaming portal landing page for a gaming platform highlighting featured games and releases.",
    longDescription:
      "A gaming platform landing page highlighting featured titles and upcoming releases.",
    features: ["Featured games", "Release highlights", "Responsive UI"],
    challenges: ["Showcasing multiple games clearly"],
    problems: ["Used structured grids and visual hierarchy"],
    image: "/assets/projects images multi devices/11.png",
    live: "https://mahmoudselsebaey.github.io/Amin-Games/",
    github: "https://github.com/mahmoudselsebaey/Amin-Games",
  },
  {
    num: "19",
    slug: "chairs-shop",
    title: "Chairs Shop",
    category: "Furniture Store",
    tags: ["Frontend", "Landing"],
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
    ],
    description:
      "An online furniture store showcasing different chair designs and products.",
    longDescription:
      "A simple furniture store frontend focused on product presentation and clean layout.",
    features: ["Product showcase", "Clean product cards"],
    challenges: ["Presenting products with minimal code and strong visuals"],
    problems: ["Relied on semantic HTML and careful CSS composition"],
    image: "/assets/projects images multi devices/12.png",
    live: "https://mahmoudselsebaey.github.io/chairs-shops/",
    github: "https://github.com/mahmoudselsebaey/chairs-shops",
  },
  {
    num: "20",
    slug: "wave-cafe",
    title: "Wave Cafe",
    category: "Coffee Shop Website",
    tags: ["Frontend", "Landing"],
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
    ],
    description:
      "A modern coffee shop website showcasing menu, services, and opening hours.",
    longDescription:
      "A modern cafe website with menu, services, and business information presented in a warm visual style.",
    features: ["Menu section", "Services", "Opening hours"],
    challenges: ["Matching cafe brand aesthetics"],
    problems: ["Used a calm layout with clear content sections"],
    image: "/assets/projects images multi devices/13.png",
    live: "https://mahmoudselsebaey.github.io/wave_cafe/",
    github: "https://github.com/mahmoudselsebaey/wave_cafe",
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
  "Real Estate",
  "EdTech",
  "Booking",
  "i18n",
  "3D",
] as const;

export type ProjectTag = (typeof ALL_TAGS)[number];
