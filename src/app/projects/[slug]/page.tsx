import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsArrowLeft, BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  projectsData,
} from "../data";

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
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projectsData.length - 1
      ? projectsData[currentIndex + 1]
      : null;

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      {/* Back */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-primary-1000 hover:opacity-80 transition-opacity mb-8"
      >
        <BsArrowLeft className="text-lg" />
        <span className="uppercase text-sm tracking-wide">All Projects</span>
      </Link>

      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
        <div className="w-full lg:w-[48%]">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-primary-1000/20 bg-primary-1000/5">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={80}
              priority
              className="object-contain p-2"
            />
          </div>
        </div>

        <div className="w-full lg:w-[52%] flex flex-col gap-5">
          <div
            className="text-transparent text-outline text-6xl md:text-7xl font-extrabold"
            style={{ userSelect: "none" }}
          >
            {project.num}
          </div>

          <span className="text-primary-1000 text-sm uppercase tracking-widest">
            {project.category}
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {project.title}
          </h1>

          <p className="opacity-80 leading-relaxed text-base md:text-lg">
            {project.longDescription || project.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.live && project.live !== "#" && (
              <Link
                href={project.live}
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary-1000 text-white hover:opacity-90 transition-opacity"
              >
                Live Demo <BsArrowUpRight />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary-1000 text-primary-1000 hover:bg-primary-1000/10 transition-colors"
              >
                GitHub <BsGithub />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-5 text-primary-1000">
          Technologies
        </h2>
        <ul className="flex flex-wrap gap-2">
          {project.tools.map((tool, i) => (
            <li
              key={i}
              className="text-primary-1000 text-sm capitalize border border-primary-1000/50 bg-primary-1000/20 py-1.5 px-4 rounded-full"
            >
              {tool.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-primary-1000">
            Key Features
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl border border-primary-1000/20 bg-primary-1000/5"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-1000 shrink-0" />
                <span className="opacity-90">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Challenges */}
      {project.challenges && project.challenges.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-primary-1000">
            Challenges
          </h2>
          <ul className="space-y-3">
            {project.challenges.map((item, i) => (
              <li
                key={i}
                className="p-4 rounded-xl border border-primary-1000/20 bg-primary-1000/5 opacity-90"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Problems & Solutions */}
      {project.problems && project.problems.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-primary-1000">
            Problems & Solutions
          </h2>
          <ul className="space-y-3">
            {project.problems.map((item, i) => (
              <li
                key={i}
                className="p-4 rounded-xl border border-primary-1000/20 bg-primary-1000/5 opacity-90"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Prev / Next */}
      <div className="mt-16 pt-8 border-t border-primary-1000/20 flex flex-col sm:flex-row justify-between gap-4">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group flex flex-col gap-1 p-4 rounded-xl border border-primary-1000/20 hover:border-primary-1000/50 hover:bg-primary-1000/5 transition-all"
          >
            <span className="text-xs uppercase opacity-60">Previous</span>
            <span className="font-semibold group-hover:text-primary-1000 transition-colors">
              ← {prevProject.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {nextProject && (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col gap-1 p-4 rounded-xl border border-primary-1000/20 hover:border-primary-1000/50 hover:bg-primary-1000/5 transition-all text-right sm:ml-auto"
          >
            <span className="text-xs uppercase opacity-60">Next</span>
            <span className="font-semibold group-hover:text-primary-1000 transition-colors">
              {nextProject.title} →
            </span>
          </Link>
        )}
      </div>
    </section>
  );
}
