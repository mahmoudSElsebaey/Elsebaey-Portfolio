interface Project {
  num: string;
  title: string;
  category: string;
  tools: { name: string }[];
  description: string;
  image: string;
  live?: string;
  github?: string;
}

export const projectsData: Project[] = [
  {
    num: "01",
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
    // TODO: replace with actual project mockup image
    image: "/assets/projects images multi devices/1.png",
    live: "https://universal-booking-saas-client-kappa.vercel.app",
    github: "https://github.com/mahmoudSElsebaey/universal-booking-saas",
  },
  {
    num: "02",
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
    // image: "/assets/projects-images/E-Commerce FullStack.png",
    image: "/assets/projects images multi devices/1.png",
    live: "https://electric-store-mern.vercel.app/",
    github: "https://github.com/mahmoudSElsebaey/electric-store-mern",
  },
  {
    num: "03",
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
    // image: "/assets/projects-images/gem.png",
    image: "/assets/projects images multi devices/2.png",
    live: "https://mahmoudselsebaey.github.io/GYM/",
    github: "https://github.com/mahmoudSElsebaey/GYM",
  },
  {
    num: "04",
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
    // image: "/assets/projects-images/portfolio.png",
    image: "/assets/projects images multi devices/3.png",
    live: "https://mahmoud-elsebaey-portfolio.vercel.app/",
    github: "https://github.com/mahmoudSElsebaey/Elsebaey-Portfolio",
  },
  {
    num: "05",
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
    // image: "/assets/projects-images/auth-app.png",
    image: "/assets/projects images multi devices/4.png",
    live: "https://authentication-app-frontend-seven.vercel.app/",
    github: "https://github.com/mahmoudSElsebaey/Authentication_app_Backend",
  },
  {
    num: "06",
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
    // image: "/assets/projects-images/skaney.png",
    image: "/assets/projects images multi devices/5.png",
    live: "https://mahmoudselsebaey.github.io/Sakney/",
    github: "https://github.com/mahmoudSElsebaey/Sakney",
  },
  {
    num: "07",
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
    // image: "/assets/projects-images/Electronics Store.png",
    image: "/assets/projects images multi devices/6.png",
    live: "https://mahmoudselsebaey.github.io/Ecommerce_ReactJS/",
    github: "https://github.com/mahmoudselsebaey/Ecommerce_ReactJS",
  },
  {
    num: "08",
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
    image: "/assets/projects-images/social-site.png",
    live: "#",
    github: "https://github.com/mahmoudSElsebaey/Social-Feed",
  },
  {
    num: "09",
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
    // image: "/assets/projects-images/skney dashboard.png",
    image: "/assets/projects images multi devices/7.png",
    live: "https://mahmoudselsebaey.github.io/SakneyDashboard/",
    github: "https://github.com/mahmoudSElsebaey/SakneyDashboard",
  },
  {
    num: "10",
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
    // image: "/assets/projects-images/gamewarrior.png",
    image: "/assets/projects images multi devices/8.png",
    live: "https://mahmoudselsebaey.github.io/Game-Warrior/",
    github: "https://github.com/mahmoudselsebaey/Game-Warrior",
  },
  {
    num: "11",
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
    // image: "/assets/projects-images/directoryads.png",
    image: "/assets/projects images multi devices/9.png",
    live: "https://mahmoudselsebaey.github.io/DirectoryAds/",
    github: "https://github.com/mahmoudselsebaey/DirectoryAds",
  },
  {
    num: "12",
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
    // image: "/assets/projects-images/Barber Shop.png",
    image: "/assets/projects images multi devices/10.png",
    live: "https://mahmoudselsebaey.github.io/Barber-Shop/",
    github: "https://github.com/mahmoudselsebaey/Barber-Shop",
  },
  {
    num: "13",
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
    // image: "/assets/projects-images/amin.png",
    image: "/assets/projects images multi devices/11.png",
    live: "https://mahmoudselsebaey.github.io/Amin-Games/",
    github: "https://github.com/mahmoudselsebaey/Amin-Games",
  },
  {
    num: "14",
    title: "Chairs Shop",
    category: "Furniture Store",
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
    ],
    description:
      "An online furniture store showcasing different chair designs and products.",
    // image: "/assets/projects-images/chairs-shop.png",
    image: "/assets/projects images multi devices/12.png",
    live: "https://mahmoudselsebaey.github.io/chairs-shops/",
    github: "https://github.com/mahmoudselsebaey/chairs-shops",
  },
  {
    num: "15",
    title: "Wave Cafe",
    category: "Coffee Shop Website",
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
    ],
    description:
      "A modern coffee shop website showcasing menu, services, and opening hours.",
    // image: "/assets/projects-images/wave-cafe.png",
    image: "/assets/projects images multi devices/13.png",
    live: "https://mahmoudselsebaey.github.io/wave_cafe/",
    github: "https://github.com/mahmoudselsebaey/wave_cafe",
  },
];
