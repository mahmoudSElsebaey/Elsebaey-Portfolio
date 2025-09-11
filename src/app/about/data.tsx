import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  TbBrandTailwind,
  TbDeviceMobileCode,
  TbSchema,
  TbBug,
  TbGauge,
  TbListDetails,
  TbBrandFramerMotion,
  TbBrandCpp,
  TbBrandCSharp,
  TbNetwork,
  TbTestPipe,
  TbVectorTriangle,
} from "react-icons/tb";
import { LuComponent } from "react-icons/lu";
import { MdOutlineSwipe } from "react-icons/md";

// Define TypeScript types
type InfoItem = {
  fieldName: string;
  fieldValue: string;
};

type EducationItem = {
  institution: string;
  degree: string;
  duration: string;
  fadeDir?: string;
};

type CertificateItem = {
  source: string;
  title: string;
  type: string;
  date?: string;
  year?: string;
  details: string;
  image: string;
  link: string;
  fadeDir?: string;
};

type SkillItem = {
  name: string;
  icon: React.ReactElement;
};

type SkillSection = {
  title: string;
  items: SkillItem[];
};

// Define the data with types
export const about: {
  title: string;
  description: string;
  info: InfoItem[];
} = {
  title: "About Me",
  description: `A Full-Stack Developer| MERN & MEAN I build modern, responsive,and scalable web applications with clean code and seamless user experiences. Always exploring new technologies to create impactful digital solutions.`,
  info: [
    { fieldName: "Name", fieldValue: "Mahmoud Salah Elsebaey" },
    { fieldName: "Phone", fieldValue: "(+20) 120 7247 967" },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    { fieldName: "Nationality", fieldValue: "Egyption" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English , Arabic" },
    { fieldName: "Military service", fieldValue: "Completed" },
    { fieldName: "Marital status", fieldValue: "single" },
  ],
};

export const education: {
  title: string;
  description: string;
  items: EducationItem[];
} = {
  title: "My Education",
  description: "A summary of my academic and technical background.",
  items: [
    {
      institution: "Faculty of Computers and Information",
      degree: "Bachelor's Degree in Computer Science",
      duration: "2020 - 2023",
      fadeDir: 'fade-right'
    },
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Diploma",
      duration: "2022",
      fadeDir: 'fade-left'
    },
    {
      institution: "SFE Academy",
      degree: "Front-End Track Diploma",
      duration: "Summer 2022",
      fadeDir: 'fade-right'
    },
    {
      institution: "Online Courses",
      degree: "Basic Programming",
      duration: "2021 - 2022",
      fadeDir: 'fade-left'

    },
  ],
};

export const certificates: {
  title: string;
  description: string;
  items: CertificateItem[];
} = {
  title: "My Certificates",
  description:
    "Courses and diplomas completed through online learning, interactive programs, and graded projects from ITI and SFE Academy.",
  items: [
    {
      source: "SFE Academy",
      title: "Front-End Diploma",
      type: "Diploma Certificate",
      date: "10-03-2023",
      details:
        "Completed with full coursework including live lectures, practical tasks, assessments, and final project — graded with a final score.",
      image:
        "/assets/certificates/Mahmoud Elsebaey - Certificate in Front-end Diploma.jpg",
      link: "https://drive.google.com/file/d/1tC9e_VD-6tWhfUf8A2TL5OWB7ZqLPNyA/view?usp=drive_link",
      fadeDir: 'fade-right'
    },
    {
      source: "SFE Academy",
      title: "Back-End Diploma",
      type: "Diploma Certificate",
      date: "22-07-2023",
      details:
        "Completed after attending interactive online sessions, submitting projects, and passing exams. Final certificate was awarded based on total grades.",
      image: "/assets/certificates/Mahmoud  Elsebaey - Back-end Diploma.jpg",
      link: "https://drive.google.com/file/d/1jyFvEf9ts47PxxxGp_oZRBPknQLsDApg/view?usp=drive_link",
      fadeDir: 'fade-left'
    },
    {
      source: "ITI (Self-Learning)",
      title: "Freelancing Basics",
      type: "Attendance Certificate",
      date: "12-09-2022",
      details: "Completed after watching official ITI videos.",
      image:
        "/assets/certificates/Attendance_Certificate_Freelancing-Basics.jpg",
      link: "https://drive.google.com/file/d/1hGR1S1epU6SQBhrl-FWob3FuUOAf21mu/view?usp=drive_link",
      fadeDir: 'fade-right'
    },
    {
      source: "ITI (Self-Learning)",
      title: "Upwork",
      type: "Attendance Certificate",
      date: "14-09-2022",
      details: "Covered Upwork basics and freelancing workflows.",
      image: "/assets/certificates/Attendance_Certificate_Upwork.jpg",
      link: "https://drive.google.com/file/d/11W53W7ohIFtWb_L-zD1_d5nqeE64rCZ7/view?usp=drive_link",
      fadeDir: 'fade-left'
    },
    {
      source: "ITI (Self-Learning)",
      title: "ES6",
      type: "Course Certificate",
      date: "05-09-2022",
      details:
        "Watched full course and implemented concepts in a React project.",
      image: "/assets/certificates/Course_Certificate_ES6.jpg",
      link: "https://drive.google.com/file/d/17TQiB0gIrx_3Vk9aPkDYD0Lm2dTI3UNH/view?usp=drive_link",
      fadeDir: 'fade-right'
    },
    {
      source: "ITI (Self-Learning)",
      title: "HTML & CSS",
      type: "Course Certificate",
      date: "28-08-2022",
      details: "Built responsive layouts and UI templates.",
      image: "/assets/certificates/Course_Certificate_HTML&CSS.jpg",
      link: "https://drive.google.com/file/d/1_4RiyZnzuTArW7Btq6AuuKmhLQfbEk-k/view?usp=drive_link",
      fadeDir: 'fade-left'
    },
    {
      source: "ITI (Self-Learning)",
      title: "JavaScript",
      type: "Course Certificate",
      date: "02-09-2022",
      details: "Learned JS fundamentals and DOM manipulation.",
      image: "/assets/certificates/Course_Certificate_Javascript.jpg",
      link: "https://drive.google.com/file/d/1vAfgP_Y5YBxqfqNXguNZlk7PQwykuQbi/view?usp=drive_link",
      fadeDir: 'fade-right'
    },
    {
      source: "ITI (Self-Learning)",
      title: "React JS",
      type: "Course Certificate",
      date: "10-09-2022",
      details: "Completed course and built a full project using React.",
      image: "/assets/certificates/Course_Certificate_React-JS.jpg",
      link: "https://drive.google.com/file/d/1SUs2kz0tCf8uVIM3fS2qaTY1vsOn_Ma5/view?usp=drive_link",
      fadeDir: 'fade-left'
    },
    {
      source: "ITI (Self-Learning)",
      title: "UX Design",
      type: "Course Certificate",
      date: "10-09-2022",
      details: "Learned user experience principles and UI design basics.",
      image: "/assets/certificates/Course_Certificate_UX-Design.jpg",
      link: "https://drive.google.com/file/d/1hFF5_jPkVlJDIAUBBmKXTEpAiP1RfzNN/view?usp=drive_link",
      fadeDir: 'fade-right'
    },
  ],
};

export const skills: {
  title: string;
  description: string;
  sections: SkillSection[];
} = {
  title: "My Skills",
  description:
    "Here are the key tools, technologies, and concepts I use to build efficient, scalable, and user-friendly web applications. I also have a solid background in general programming with other languages.",
  sections: [
    {
      title: "Front-End Technologies",
      items: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3 /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Next.js", icon: <RiNextjsFill /> },
        { name: "Redux Toolkit", icon: <SiRedux /> },
      ],
    },
    {
      title: "Styling & UI Libraries",
      items: [
        { name: "Tailwind CSS", icon: <TbBrandTailwind /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Material UI (MUI)", icon: <LuComponent /> },
      ],
    },
    {
      title: "Animations & Interactivity",
      items: [
        { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
        { name: "Swiper.js", icon: <MdOutlineSwipe /> },
      ],
    },
    {
      title: "Development Tools",
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Testing (Jest / RTL)", icon: <TbTestPipe /> },
        { name: "Debugging & DevTools", icon: <TbBug /> },
      ],
    },
    {
      title: "Web Concepts & Architecture",
      items: [
        { name: "Responsive Design", icon: <TbDeviceMobileCode /> },
        { name: "API Integration", icon: <TbNetwork /> },
        { name: "Performance Optimization", icon: <TbGauge /> },
      ],
    },
    {
      title: "Back-End & Database Basics",
      items: [
        { name: "Node.js (Basics)", icon: <FaNodeJs /> },
        { name: "MongoDB (Basics)", icon: <SiMongodb /> },
        { name: "Database Design (Basics)", icon: <TbSchema /> },
      ],
    },
    {
      title: "Computer Science Concepts",
      items: [
        { name: "Data Structures", icon: <TbListDetails /> },
        { name: "Design Patterns", icon: <TbVectorTriangle /> },
      ],
    },
    {
      title: "Other Programming Languages",
      items: [
        { name: "C++", icon: <TbBrandCpp /> },
        { name: "C#", icon: <TbBrandCSharp /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
      ],
    },
  ],
};
