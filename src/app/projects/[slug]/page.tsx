import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  projectsData,
} from "../data";
import ProjectDetailClient from "./ProjectDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = project.title;
  const description =
    project.longDescription ||
    project.description ||
    `${project.title} — a project by Mahmoud Elsebaey, Full-Stack MERN Developer.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${title} | Mahmoud Elsebaey`,
      description,
      url: `/projects/${slug}`,
      type: "article",
      images: project.image
        ? [
            {
              url: project.image,
              alt: title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Mahmoud Elsebaey`,
      description,
      images: project.image ? [project.image] : undefined,
    },
  };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const prevProject =
    currentIndex > 0
      ? {
          slug: projectsData[currentIndex - 1].slug,
          title: projectsData[currentIndex - 1].title,
          titleAr: projectsData[currentIndex - 1].titleAr,
        }
      : null;
  const nextProject =
    currentIndex < projectsData.length - 1
      ? {
          slug: projectsData[currentIndex + 1].slug,
          title: projectsData[currentIndex + 1].title,
          titleAr: projectsData[currentIndex + 1].titleAr,
        }
      : null;

  return (
    <ProjectDetailClient
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
