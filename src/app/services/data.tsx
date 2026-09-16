import { LuMonitorSmartphone } from "react-icons/lu";
import { FaDatabase, FaFigma, FaReact } from "react-icons/fa";
import {
  RiCloudLine,
  RiNextjsFill,
  RiServerLine,
  RiShieldUserLine,
} from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  tags: string[];
  image?: string;
  tag?: string;
};

const IMG = "/assets/services%20Images";

export const services: ServiceItem[] = [
  {
    id: "1",
    title: "Convert Designs to Code",
    description:
      "Turn any design (Figma, PSD, XD) into a fully functional website that works smoothly on all devices.",
    icon: <FaFigma />,
    tags: ["Figma", "PSD", "XD", "HTML", "CSS", "JavaScript"],
    tag: "Design",
    image: `${IMG}/0fa5ff99-d4d6-4cfc-94ac-ae25389148ab.png`,
  },
  {
    id: "2",
    title: "Modern Frontend Development",
    description:
      "Build interactive and fast user interfaces using React.js or Angular with a focus on great user experience.",
    icon: <FaReact />,
    tags: ["React.js", "Angular", "JavaScript", "TypeScript"],
    tag: "Frontend",
    image: `${IMG}/1deec82c-e447-42d4-9cf3-ddeeb02c4f59.png`,
  },
  {
    id: "3",
    title: "Next.js Development",
    description:
      "Create high-performance, SEO-friendly websites with Next.js using server-side rendering and optimized routing.",
    icon: <RiNextjsFill />,
    tags: ["Next.js", "React.js", "SSR", "SEO"],
    tag: "Next.js",
    image: `${IMG}/b0c3eee5-fa9b-403d-bae7-3f816dc5c761.png`,
  },
  {
    id: "4",
    title: "Responsive & Mobile-Friendly Design",
    description:
      "Ensure websites look great and function perfectly across mobile, tablet, and desktop devices.",
    icon: <LuMonitorSmartphone />,
    tags: ["Responsive", "CSS3", "Flexbox", "Grid", "Tailwind CSS"],
    tag: "Responsive",
    image: `${IMG}/d2de1af9-95c4-432e-96a3-47893c3e3543.png`,
  },
  {
    id: "5",
    title: "Backend & API Development",
    description:
      "Develop secure and scalable back-end systems with Node.js, Express, and MongoDB to power applications.",
    icon: <RiServerLine />,
    tags: ["Node.js", "Express", "MongoDB", "REST API"],
    tag: "Backend",
    image: `${IMG}/fd8c2060-2167-4dd3-84a4-3e83ba6931b8.png`,
  },
  {
    id: "6",
    title: "Authentication & Security",
    description:
      "Implement secure login systems with JWT, OAuth, and role-based access to protect user data.",
    icon: <RiShieldUserLine />,
    tags: ["JWT", "OAuth", "Session", "RBAC"],
    tag: "Security",
    image: `${IMG}/margin-572fd3e2-567b-4662-a4b7-977d0494ed8545.png`,
  },
  {
    id: "7",
    title: "E-commerce Development",
    description:
      "Build custom online stores with product listings, shopping carts, and secure checkout functionality.",
    icon: <TiShoppingCart />,
    tags: ["React.js", "Redux", "Stripe", "PayPal", "E-commerce"],
    tag: "E-commerce",
    // cycles first images for remaining services
    image: `${IMG}/0fa5ff99-d4d6-4cfc-94ac-ae25389148ab.png`,
  },
  {
    id: "8",
    title: "Database Design & Management",
    description:
      "Design and manage efficient databases with MongoDB to handle structured and unstructured data effectively.",
    icon: <FaDatabase />,
    tags: ["MongoDB", "Mongoose", "NoSQL", "Data Modeling"],
    tag: "Database",
    image: `${IMG}/1deec82c-e447-42d4-9cf3-ddeeb02c4f59.png`,
  },
  {
    id: "9",
    title: "Deployment & Hosting",
    description:
      "Deploy and host full-stack applications on Vercel, Netlify, Render, or cloud servers for live production use.",
    icon: <RiCloudLine />,
    tags: ["Vercel", "Netlify", "Render", "Heroku", "VPS"],
    tag: "DevOps",
    image: `${IMG}/b0c3eee5-fa9b-403d-bae7-3f816dc5c761.png`,
  },
];
