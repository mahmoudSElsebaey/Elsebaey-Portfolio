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
  },
  {
    num: "02",
    slug: "e-commerce-full-stack",
    title: "E-Commerce Full Stack",
    category: "MERN Website",
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
    num: "03",
    slug: "gym-website",
    title: "Gym Website",
    category: "Fitness Website",
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
    live: "https://mahmoudselsebaey.github.io/GYM/",
    github: "https://github.com/mahmoudSElsebaey/GYM",
  },
  {
    num: "04",
    slug: "portfolio-app",
    title: "Portfolio App",
    category: "Personal Portfolio",
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "EmailJS" },
    ],
    description:
      "A personal portfolio website to showcase projects, skills, and experience with smooth animations.",
    longDescription:
      "My personal portfolio built with Next.js and TypeScript, featuring dark mode, page transitions, draggable navigation, and project showcases.",
    features: [
      "Dark / Light theme",
      "Draggable navigation",
      "Page transitions",
      "Projects showcase",
      "Contact form with EmailJS",
    ],
    challenges: [
      "Balancing animations with performance",
      "Designing a consistent design system",
    ],
    problems: [
      "Used Framer Motion selectively and optimized images",
      "Centralized UI components and theme tokens",
    ],
    image: "/assets/projects images multi devices/3.png",
    live: "https://mahmoud-elsebaey-portfolio.vercel.app/",
    github: "https://github.com/mahmoudSElsebaey/Elsebaey-Portfolio",
  },
  {
    num: "05",
    slug: "authentication-app",
    title: "Authentication App",
    category: "Full Stack Website",
    tools: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "JWT" },
    ],
    description:
      "A full-stack authentication system with secure login, registration, and protected routes.",
    longDescription:
      "A dedicated authentication system covering register, login, password reset flows, and protected routes using JWT.",
    features: [
      "Secure registration & login",
      "JWT-based sessions",
      "Protected routes",
      "Password recovery flow",
    ],
    challenges: [
      "Implementing secure token handling",
      "Protecting routes on both client and server",
    ],
    problems: [
      "Used JWT with proper expiration and hashing",
      "Applied middleware and guarded frontend routes",
    ],
    image: "/assets/projects images multi devices/4.png",
    live: "https://authentication-app-frontend-seven.vercel.app/",
    github: "https://github.com/mahmoudSElsebaey/Authentication_app_Backend",
  },
  {
    num: "06",
    slug: "sakney",
    title: "Sakney",
    category: "Rental Platform",
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Material UI" },
    ],
    description:
      "A rental platform helping expatriate students find suitable accommodation with search and filtering features.",
    longDescription:
      "Sakney helps students search and filter rental listings with a clean UI focused on discovery and usability.",
    features: [
      "Property search & filters",
      "Responsive UI",
      "Listing cards",
    ],
    challenges: [
      "Designing useful filters for housing search",
      "Keeping UI clear for non-technical users",
    ],
    problems: [
      "Structured filter state and reusable listing components",
      "Focused on clarity and mobile-first layout",
    ],
    image: "/assets/projects images multi devices/5.png",
    live: "https://mahmoudselsebaey.github.io/Sakney/",
    github: "https://github.com/mahmoudSElsebaey/Sakney",
  },
  {
    num: "07",
    slug: "electronics-store",
    title: "Electronics Store",
    category: "E-commerce Website",
    tools: [
      { name: "React" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Bootstrap" },
      { name: "Swiper" },
      { name: "JavaScript" },
    ],
    description:
      "A simple e-commerce website showcasing electronic products with cart functionality.",
    longDescription:
      "A frontend e-commerce experience with product listing, cart, and responsive layout for electronic products.",
    features: ["Product catalog", "Cart functionality", "Responsive design"],
    challenges: ["Managing cart state cleanly", "Building a polished product grid"],
    problems: [
      "Used component-based cart logic",
      "Focused on consistent card UI and spacing",
    ],
    image: "/assets/projects images multi devices/6.png",
    live: "https://mahmoudselsebaey.github.io/Ecommerce_ReactJS/",
    github: "https://github.com/mahmoudselsebaey/Ecommerce_ReactJS",
  },
  {
    num: "08",
    slug: "social-feed",
    title: "Social Feed",
    category: "Social Media SPA",
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "React" },
      { name: "Next.js" },
    ],
    description:
      "A social media single-page application allowing users to create posts and interact with others.",
    longDescription:
      "A social feed SPA focused on posts, interactions, and a clean modern interface built with Next.js.",
    features: ["Post creation", "Feed UI", "Interactive components"],
    challenges: ["Designing a scalable feed UI", "Handling client-side interactions smoothly"],
    problems: [
      "Broke the UI into reusable feed components",
      "Kept interactions lightweight and responsive",
    ],
    image: "/assets/projects-images/social-site.png",
    live: "#",
    github: "https://github.com/mahmoudSElsebaey/Social-Feed",
  },
  {
    num: "09",
    slug: "sakney-dashboard",
    title: "Sakney Dashboard",
    category: "Admin Dashboard",
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Bootstrap" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Material UI" },
      { name: "Chart.js" },
    ],
    description:
      "An admin dashboard for managing users, properties, and analytics efficiently.",
    longDescription:
      "An admin panel for Sakney with charts, tables, and management views for properties and users.",
    features: ["Analytics charts", "Management tables", "Admin layout"],
    challenges: ["Organizing dense admin data clearly", "Building reusable dashboard widgets"],
    problems: [
      "Used Chart.js for visual analytics",
      "Structured layout into sidebar + content panels",
    ],
    image: "/assets/projects images multi devices/7.png",
    live: "https://mahmoudselsebaey.github.io/SakneyDashboard/",
    github: "https://github.com/mahmoudSElsebaey/SakneyDashboard",
  },
  {
    num: "10",
    slug: "game-warrior",
    title: "Game Warrior",
    category: "Gaming Brand",
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Bootstrap" },
      { name: "JavaScript" },
    ],
    description:
      "A bold landing page for a gaming brand showcasing news, team, and community.",
    longDescription:
      "A high-energy gaming landing page designed to highlight brand identity, news, and community.",
    features: ["Bold visual style", "Sections for news & team", "Responsive layout"],
    challenges: ["Matching gaming aesthetics without clutter", "Keeping performance acceptable with heavy visuals"],
    problems: [
      "Balanced strong visuals with clean hierarchy",
      "Optimized section structure and assets",
    ],
    image: "/assets/projects images multi devices/8.png",
    live: "https://mahmoudselsebaey.github.io/Game-Warrior/",
    github: "https://github.com/mahmoudselsebaey/Game-Warrior",
  },
  {
    num: "11",
    slug: "directory-ads",
    title: "Directory Ads",
    category: "Business Directory",
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Bootstrap" },
      { name: "JavaScript" },
    ],
    description:
      "A business directory website for showcasing services and advertisements.",
    longDescription:
      "A directory-style website for listing businesses and promotional ads with a clean Bootstrap-based layout.",
    features: ["Business listings", "Ad sections", "Responsive pages"],
    challenges: ["Presenting many listings without clutter"],
    problems: ["Used card-based layouts and clear section separation"],
    image: "/assets/projects images multi devices/9.png",
    live: "https://mahmoudselsebaey.github.io/DirectoryAds/",
    github: "https://github.com/mahmoudselsebaey/DirectoryAds",
  },
  {
    num: "12",
    slug: "barber-shop",
    title: "Barber Shop",
    category: "Landing Page",
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Bootstrap" },
      { name: "JavaScript" },
    ],
    description:
      "A landing page for a barber shop showcasing services and booking options.",
    longDescription:
      "A stylish barber shop landing page focused on services, atmosphere, and conversion.",
    features: ["Services showcase", "Booking CTA", "Responsive design"],
    challenges: ["Creating a premium local-business look"],
    problems: ["Focused on strong hero, services grid, and clear CTAs"],
    image: "/assets/projects images multi devices/10.png",
    live: "https://mahmoudselsebaey.github.io/Barber-Shop/",
    github: "https://github.com/mahmoudselsebaey/Barber-Shop",
  },
  {
    num: "13",
    slug: "amin-games",
    title: "Amin Games",
    category: "Gaming Platform",
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Bootstrap" },
      { name: "JavaScript" },
    ],
    description:
      "A landing page for a gaming platform highlighting featured games and releases.",
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
    num: "14",
    slug: "chairs-shop",
    title: "Chairs Shop",
    category: "Furniture Store",
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
    num: "15",
    slug: "wave-cafe",
    title: "Wave Cafe",
    category: "Coffee Shop Website",
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
