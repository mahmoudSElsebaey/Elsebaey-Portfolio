import { projectsPart1 } from "./projects-part1";
import { projectsPart2 } from "./projects-part2";

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

export const projectsData: Project[] = [...projectsPart1, ...projectsPart2];

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
  "News",
  "Portfolio",
  "Backend",
  "Gaming",
  "Real Estate",
  "Legal",
  "Supabase",
  "RTL/LTR",
  "HTML/CSS/JS",
  "3D",
] as const;

export type ProjectTag = (typeof ALL_TAGS)[number];
