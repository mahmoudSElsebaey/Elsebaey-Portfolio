import { LuLayoutDashboard, LuMonitorSmartphone } from "react-icons/lu";
import { FaDatabase, FaLayerGroup, FaReact } from "react-icons/fa";
import {
  RiApps2AiLine,
  RiCloudLine,
  RiNextjsFill,
  RiServerLine,
  RiShieldUserLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { CgPerformance } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import { SiTypescript } from "react-icons/si";

type ServicesType = {
  title: string;
  description: string;
  icon: React.ReactElement;
}[];
export const services: ServicesType = [
  {
    title: "UI Development",
    description:
      "Design and build attractive, responsive user interfaces using HTML, CSS, and JavaScript with a focus on user experience.",
    icon: <LuLayoutDashboard />,
  },
  {
    title: "React.js Development",
    description:
      "Build fast, interactive web applications using React.js with clean, reusable component-based architecture.",
    icon: <FaReact />,
  },
  {
    title: "Next.js Development",
    description:
      "Create high-performance, SEO-friendly websites using Next.js with support for both static and dynamic pages.",
    icon: <RiNextjsFill />,
  },
  {
    title: "Responsive Design",
    description:
      "Develop websites that look great and function well on all devices including mobile, tablet, and desktop.",
    icon: <LuMonitorSmartphone />,
  },
  {
    title: "TypeScript Development",
    description:
      "Write safer, scalable, and maintainable JavaScript code using TypeScript with static type checking and powerful tooling support.",
    icon: <SiTypescript />,
  },
  {
    title: "Tailwind CSS Styling",
    description:
      "Create modern, responsive, and utility-first UI designs using Tailwind CSS with custom themes and animations.",
    icon: <RiTailwindCssFill />,
  },
  {
    title: "Redux State Management",
    description:
      "Implement robust and scalable global state management in React applications using Redux Toolkit and middleware.",
    icon: <FaDatabase />,
  },

  {
    title: "Performance Optimization & Debugging",
    description:
      "Improve website speed, reduce load times, and fix front-end technical issues for better performance.",
    icon: <CgPerformance />,
  },
  {
    title: "E-commerce Page Development",
    description:
      "Build custom e-commerce pages using React, including product displays, shopping carts, and a smooth user experience.",
    icon: <TiShoppingCart />,
  },
  {
    title: "Back-End Development",
    description:
      "Build robust, scalable, and secure back-end APIs using Node.js and Express with RESTful architecture and MongoDB integration.",
    icon: <RiServerLine />, // يمكنك استخدام أيقونة مناسبة مثل RiServerLine من react-icons
  },
  {
    title: "MongoDB Database Design",
    description:
      "Design efficient, schema-flexible NoSQL databases using MongoDB with Mongoose ODM for structured data modeling.",
    icon: <FaDatabase />, // نفس الأيقونة ممكن تتكرر هنا عادي
  },
  {
    title: "REST API Development",
    description:
      "Develop and maintain RESTful APIs to connect front-end interfaces with powerful back-end services.",
    icon: <RiApps2AiLine />, // أيقونة API
  },
  {
    title: "Full Stack MERN / MEAN Development",
    description:
      "Deliver end-to-end web applications using MongoDB, Express.js, React or Angular, and Node.js with complete frontend and backend integration.",
    icon: <FaLayerGroup />, // أو أيقونة تعبر عن full stack
  },
  {
    title: "Authentication & Authorization",
    description:
      "Implement secure login systems using JWT, OAuth, and session-based authentication for both frontend and backend.",
    icon: <RiShieldUserLine />, // أيقونة أمان
  },
  {
    title: "Deployment & Hosting",
    description:
      "Deploy full-stack applications on platforms like Vercel, Netlify, and Render, and manage server deployments on platforms like Heroku or VPS.",
    icon: <RiCloudLine />, // أيقونة Cloud أو Deploy
  },
];
