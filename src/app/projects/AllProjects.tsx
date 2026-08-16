"use client";

import Image from "next/image";
import Link from "next/link";
import { projectsData } from "./data";
import { BsArrowUpRight, BsGithub, BsArrowRight } from "react-icons/bs";

const AllProjects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 md:mb-10">
        <h1 className="text-2xl md:text-3xl font-bold border-b-2 border-primary-1000 inline-block pb-2">
          All Projects
        </h1>
        <p className="mt-3 opacity-70 text-sm md:text-base max-w-xl">
          Selected work across full-stack apps, dashboards, and landing pages.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
        {projectsData.map((project, index) => (
          <li
            key={project.slug}
            className="group flex flex-col rounded-2xl overflow-hidden border border-primary-1000/15
              bg-primary-1000/5 hover:border-primary-1000/40 hover:bg-primary-1000/10
              transition-all duration-300"
          >
            {/* Image */}
            <Link
              href={`/projects/${project.slug}`}
              className="relative block w-full aspect-[16/11] overflow-hidden bg-black/5 dark:bg-white/5"
            >
              <Image
                src={project.image}
                fill
                alt={project.title}
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                quality={70}
                priority={index < 3}
                className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-full bg-primary-1000 text-white">
                {project.category}
              </span>
            </Link>

            {/* Content */}
            <div className="flex flex-col flex-1 p-4 md:p-5 gap-3">
              <div className="flex items-start gap-3">
                <span
                  className="text-transparent text-outline text-2xl font-extrabold leading-none shrink-0"
                  style={{ userSelect: "none" }}
                >
                  {project.num}
                </span>
                <Link href={`/projects/${project.slug}`} className="min-w-0">
                  <h3 className="text-base md:text-lg font-bold leading-snug group-hover:text-primary-1000 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                </Link>
              </div>

              <p className="opacity-70 text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-1.5">
                {project.tools.slice(0, 4).map((tool, i) => (
                  <li
                    key={i}
                    className="text-[11px] md:text-xs text-primary-1000 border border-primary-1000/40 bg-primary-1000/15 px-2 py-0.5 rounded-full"
                  >
                    {tool.name}
                  </li>
                ))}
                {project.tools.length > 4 && (
                  <li className="text-[11px] md:text-xs opacity-60 px-1 py-0.5">
                    +{project.tools.length - 4}
                  </li>
                )}
              </ul>

              {/* Actions */}
              <div className="mt-auto pt-2 flex items-center gap-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-2 rounded-full
                    bg-primary-1000 text-white hover:opacity-90 transition-opacity"
                >
                  Details <BsArrowRight className="text-sm" />
                </Link>

                {project.live && project.live !== "#" && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full
                      border border-primary-1000/40 text-primary-1000 hover:bg-primary-1000/15 transition-colors"
                    aria-label="Live demo"
                  >
                    <BsArrowUpRight className="text-base" />
                  </Link>
                )}

                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full
                      border border-primary-1000/40 text-primary-1000 hover:bg-primary-1000/15 transition-colors"
                    aria-label="GitHub repository"
                  >
                    <BsGithub className="text-base" />
                  </Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProjects;
