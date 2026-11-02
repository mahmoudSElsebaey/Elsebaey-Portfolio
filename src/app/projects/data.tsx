export interface Project {
  num: string;
  slug: string;
  title: string;
  titleAr?: string;
  category: string;
  categoryAr?: string;
  tags: string[];
  tools: { name: string }[];
  description: string;
  descriptionAr?: string;
  longDescription?: string;
  longDescriptionAr?: string;
  challenges?: string[];
  challengesAr?: string[];
  problems?: string[];
  problemsAr?: string[];
  features?: string[];
  featuresAr?: string[];
  image: string;
  live?: string;
  github?: string;
}

export const projectsData: Project[] = [
  // NOTE: English content kept; Arabic translations live in projectArabic.ts
  // and are merged at runtime on the project detail page language toggle.
