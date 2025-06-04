import { MdDesignServices, MdSpeed } from "react-icons/md";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbRoute } from "react-icons/tb";
import { VscTools } from "react-icons/vsc";

interface FeatureCategory {
  category: string;
  title: string;
  icon: React.ReactElement;
  features: string[];
}

export const featuresList: FeatureCategory[] = [
  {
    category: "UI & Design",
    title: "UI & Design Features",
    icon: <MdDesignServices />,
    features: [
      "Responsive UI for all devices",
      "Dark/Light Theme Toggle",
      "Custom UI Components (Buttons, Modals, Tabs, etc.)",
      "Modern UI Design with Tailwind & Bootstrap",
      "Dynamic Layouts with Flexbox & Grid",
      "Smooth Animations & Transitions",
      "Pixel-perfect implementation from Figma"
    ]
  },
  {
    category: "Frontend Logic",
    title: "Frontend Logic & Interactions",
    icon: <FaReact />,
    features: [
      "Form validation (manual & with libraries)",
      "Dynamic forms with conditional fields",
      "Interactive components: Tabs, Accordions, Dropdowns",
      "Drag & Drop Interfaces",
      "State Management with Redux & Context API",
      "Multi-step Forms",
      "Lazy Loading & Code Splitting",
      "Infinite Scroll and Pagination",
      "Protected Routes and Role-based Access",
      "Advanced Event Handling"
    ]
  },
  {
    category: "API Integration",
    title: "API Integration & Data Handling",
    icon: <BiLinkExternal />,
    features: [
      "Fetch and display data from APIs",
      "Error handling and loading states",
      "Data caching with Redux Toolkit Query",
      "Create dynamic Dashboards",
      "Submit and handle form data",
      "Integrate with third-party APIs (Weather, Maps...)"
    ]
  },
  {
    category: "Authentication & Security",
    title: "Authentication & Security",
    icon: <RiSecurePaymentLine />,
    features: [
      "User login and registration system",
      "Page protection for unauthorized access",
      "JWT-based Authentication & Authorization",
      "LocalStorage/Cookies for token handling",
      "Redirect users based on roles"
    ]
  },
  {
    category: "Routing & Navigation",
    title: "Routing & Navigation",
    icon: <TbRoute />,
    features: [
      "Multi-page apps with Next.js or React Router",
      "Dynamic Routing",
      "Nested Routes",
      "Custom 404 Page",
      "Deep Linking Support"
    ]
  },
  {
    category: "Performance & Optimization",
    title: "Performance & Optimization",
    icon: <MdSpeed />,
    features: [
      "Image optimization with Next.js",
      "Static Site Generation (SSG)",
      "Server-side Rendering (SSR)",
      "Prefetching data & links",
      "Memoization to reduce re-renders"
    ]
  },
  {
    category: "Backend & Fullstack",
    title: "Backend & Fullstack Features",
    icon: <FaNodeJs />,
    features: [
      "Create RESTful APIs with Node.js & Express",
      "CRUD operations with MongoDB",
      "User management system",
      "File upload (images/documents)",
      "JWT authentication in backend",
      "Admin Dashboard for managing content"
    ]
  },
  {
    category: "Developer Tools",
    title: "Developer Tools & Best Practices",
    icon: <VscTools />,
    features: [
      "TypeScript for safer & scalable code",
      "Code formatting with ESLint & Prettier",
      "Version control using Git & GitHub",
      "API testing with Postman",
      "Project structure with Separation of Concerns"
    ]
  }
];
