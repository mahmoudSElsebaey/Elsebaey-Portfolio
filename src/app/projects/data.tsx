interface Project {
  num: string;
  title: string;
  category: string;
  tools: { name: string }[];
  description: string;
  image: string;
  live: string;
  github: string;
}

export const projectsData: Project[] = [
  {
    num: "01",
    title: "Barber Shop",
    category: "Landing Page",
    tools: [{ name: "HTML5" }, { name: "CSS3" },{ name: "Bootstrap" }, { name: "JavaScript" }],
    description:
      "A landing page for a barber shop, showcasing services and booking options.",
    image: "/assets/projects-images/Barber Shop.png",
    live: "https://mahmoudselsebaey.github.io/Barber-Shop/",
    github: "https://github.com/mahmoudselsebaey/Barber-Shop",
  },
  {
    num: "02",
    title: "Amin Games",
    category: "Landing Page",
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Bootstrap" },
      // { name: "JavaScript" },
    ],
    description:
      "A landing page for a gaming platform, offering the latest game releases and features.",
    image: "/assets/projects-images/amin.png",
    live: "https://mahmoudselsebaey.github.io/Amin-Games/",
    github: "https://github.com/mahmoudselsebaey/Amin-Games",
  },
  {
    num: "03",
    title: "Game Warrior",
    category: "Landing Page",
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Bootstrap" },
      { name: "JavaScript" },
    ],
    description:
      "A bold landing page for a gaming brand, showcasing news, team, and community.",
    image: "/assets/projects-images/gamewarrior.png",
    live: "https://mahmoudselsebaey.github.io/Game-Warrior/",
    github: "https://github.com/mahmoudselsebaey/Game-Warrior",
  },
  {
    num: "04",
    title: "AppsByJavascript",
    category: "Mini Apps",
    tools: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    description:
      "A collection of small JavaScript apps, like a calculator, clock, and more.",
    image: "/assets/projects-images/Gym Website Template.png",
    live: "https://mahmoudselsebaey.github.io/AppsByJavascript/",
    github: "https://github.com/mahmoudselsebaey/AppsByJavascript",
  },
  {
    num: "05",
    title: "Directory Ads",
    category: "Business Directory",
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Bootstrap" },
      { name: "JavaScript" },
    ],
    description:
      "A business directory website for showcasing various services and advertisements.",
    image: "/assets/projects-images/directoryads.png",
    live: "https://mahmoudselsebaey.github.io/DirectoryAds/",
    github: "https://github.com/mahmoudselsebaey/DirectoryAds",
  },
  {
    num: "06",
    title: "Chairs Shops",
    category: "Furniture Store",
    tools: [{ name: "HTML5" }, { name: "CSS3" }],
    description:
      "An online store showcasing various chairs and furniture products.",
    image: "/assets/projects-images/chairs-shop.png",
    live: "https://mahmoudselsebaey.github.io/chairs-shops/",
    github: "https://github.com/mahmoudselsebaey/chairs-shops",
  },
  {
    num: "07",
    title: "Ecommerce Electronics Store",
    category: "Online Store",
    tools: [
      { name: "React.js" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Bootstrap" },
      { name: "Swiper" },
      { name: "JavaScript" },
    ],
    description:
      "A simple e-commerce site built with React, showcasing products, prices, and a shopping cart.",
    image: "/assets/projects-images/Electronics Store.png",
    live: "https://mahmoudselsebaey.github.io/Ecommerce_ReactJS/",
    github: "https://github.com/mahmoudselsebaey/Ecommerce_ReactJS",
  },
  {
    num: "08",
    title: "Wave Cafe",
    category: "Coffee Shop Website",
    tools: [{ name: "HTML5" }, { name: "CSS3" }],
    description:
      "A modern website for a coffee shop, showcasing services, menu, and opening hours.",
    image: "/assets/projects-images/wave-cafe.png",
    live: "https://mahmoudselsebaey.github.io/wave_cafe/",
    github: "https://github.com/mahmoudselsebaey/wave_cafe",
  },
  {
    num: "09",
    title: "Sakney",
    category: "Property Rental Platform",
    tools: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Material UI" },
    ],
    description:
      "A platform for expatriate students to find rental properties in their area with search functionality and account management.",
    image: "/assets/projects-images/Sakney.png", 
    live: "https://mahmoudselsebaey.github.io/Sakney/",
    github: "https://github.com/mahmoudSElsebaey/Sakney/tree/master",
  },
  {
  num: "10",
  title: "Sakney Dashboard",
  category: "Admin Panel",
  tools: [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "Bootstrap" },
    { name: "JavaScript" },
    { name: "React.js" },
    { name: "Material UI" },
    { name: "Chart.js" },
  ],
  description: "An admin dashboard for the Sakney project, allowing admins to manage users, view analytics, and control property data efficiently.",
    image: "/assets/projects-images/skney dashboard.png", 
  live: "https://mahmoudselsebaey.github.io/SakneyDashboard/",
  github: "https://github.com/mahmoudSElsebaey/SakneyDashboard/tree/master "
}

];

/*
-------------------------------------------
Key Features

    Built on top of Bootstrap 4
    Clean and minimal design
    Cross-browser compatibility
    Fully responsive
    Multi-page template
    Hero header
    Call to action button
    Drop-down menu
    Off-canvas search option
    Full-screen slider on the header
    Hover effects
    Pricing table
    Image gallery with modal view
    Footer navigations
    Testimonial carousel
    Breadcrumbs
    CSS3 preloader
    Modal video player
    Progress bars
    BMI calculator form UI
    Blog section
    404 page
    Google maps
    Comment form UI
    Contact form
    FontAwesome font icons


*/
