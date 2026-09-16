import { LuMonitorSmartphone } from "react-icons/lu";
import { FaDatabase, FaFigma, FaReact } from "react-icons/fa";
import {
  RiCloudLine,
  RiNextjsFill,
  RiServerLine,
  RiShieldUserLine,
} from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";

type ServicesType = {
  title: string;
  description: string;
  icon: React.ReactElement;
  tags: string[];
}[];

export const services: ServicesType = [
  {
    title: "Convert Designs to Code",
    description:
      "Turn any design (Figma, PSD, XD) into a fully functional website that works smoothly on all devices.",
    icon: <FaFigma />,
    tags: ["Figma", "PSD", "XD", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Modern Frontend Development",
    description:
      "Build interactive and fast user interfaces using React.js or Angular with a focus on great user experience.",
    icon: <FaReact />,
    tags: ["React.js", "Angular", "JavaScript", "TypeScript"],
  },
  {
    title: "Next.js Development",
    description:
      "Create high-performance, SEO-friendly websites with Next.js using server-side rendering and optimized routing.",
    icon: <RiNextjsFill />,
    tags: ["Next.js", "React.js", "SSR", "SEO"],
  },
  {
    title: "Responsive & Mobile-Friendly Design",
    description:
      "Ensure websites look great and function perfectly across mobile, tablet, and desktop devices.",
    icon: <LuMonitorSmartphone />,
    tags: ["Responsive", "CSS3", "Flexbox", "Grid", "Tailwind CSS"],
  },
  {
    title: "Backend & API Development",
    description:
      "Develop secure and scalable back-end systems with Node.js, Express, and MongoDB to power applications.",
    icon: <RiServerLine />,
    tags: ["Node.js", "Express", "MongoDB", "REST API"],
  },
  {
    title: "Authentication & Security",
    description:
      "Implement secure login systems with JWT, OAuth, and role-based access to protect user data.",
    icon: <RiShieldUserLine />,
    tags: ["JWT", "OAuth", "Session", "RBAC"],
  },
  {
    title: "E-commerce Development",
    description:
      "Build custom online stores with product listings, shopping carts, and secure checkout functionality.",
    icon: <TiShoppingCart />,
    tags: ["React.js", "Redux", "Stripe", "PayPal", "E-commerce"],
  },
  {
    title: "Database Design & Management",
    description:
      "Design and manage efficient databases with MongoDB to handle structured and unstructured data effectively.",
    icon: <FaDatabase />,
    tags: ["MongoDB", "Mongoose", "NoSQL", "Data Modeling"],
  },
  {
    title: "Deployment & Hosting",
    description:
      "Deploy and host full-stack applications on Vercel, Netlify, Render, or cloud servers for live production use.",
    icon: <RiCloudLine />,
    tags: ["Vercel", "Netlify", "Render", "Heroku", "VPS"],
  },
];
