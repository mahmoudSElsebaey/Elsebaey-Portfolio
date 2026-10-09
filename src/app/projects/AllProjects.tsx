"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { projectsData, ALL_TAGS } from "./data";
import { BsArrowUpRight, BsGithub, BsArrowRight, BsSearch, BsX } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight, HiChevronDown, HiChevronUp } from "react-icons/hi2";

const PER_PAGE = 9;
const MOBILE_VISIBLE_TAGS = 6;

const AllProjects: React.FC = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [showAllTags, setShowAllTags] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return projectsData.filter((project) => {
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q)) ||
        project.tools.some((t) => t.name.toLowerCase().includes(q));

      const matchesTags =
        activeTags.length === 0 ||
        activeTags.every((tag) => project.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [search, activeTags]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));

  useEffect(() => {
    setPage(1);
  }, [search, activeTags]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return filtered.slice(start, start + PER_PAGE);
  }, [page, filtered]);

  const goTo = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearch("");
    setActiveTags([]);
  };

  const hasFilters = search.trim() !== "" || activeTags.length > 0;

  // Keep active tags always visible, then fill with remaining up to limit on mobile
  const visibleTags = useMemo(() => {
    if (showAllTags) return [...ALL_TAGS];
    const active = ALL_TAGS.filter((t) => activeTags.includes(t));
    const rest = ALL_TAGS.filter((t) => !activeTags.includes(t));
    const combined = [...active, ...rest];
    return combined.slice(0, MOBILE_VISIBLE_TAGS);
  }, [showAllTags, activeTags]);

  const hiddenCount = ALL_TAGS.length - visibleTags.length;

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

      <div className="mb-8 space-y-3 md:space-y-4">
        {/* Search */}
        <div className="relative max-w-xl">
          <BsSearch className="absolute left-3.5 md:left-4 top-1/2 -translate-y-1/2 text-primary-1000/70 text-sm md:text-base pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            className="w-full pl-10 md:pl-11 pr-10 py-2.5 md:py-3 rounded-full border border-primary-1000/40 bg-background dark:bg-[#0f1420] text-sm md:text-base outline-none focus:border-primary-1000 focus:ring-2 focus:ring-primary-1000/20 transition-all placeholder:opacity-50"
            aria-label="Search projects"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-primary-1000/70 hover:bg-primary-1000/15 transition-colors cursor-pointer"
              aria-label="Clear search"
            >
              <BsX className="text-lg" />
            </button>
          )}
        </div>

        {/* Tags — horizontal scroll on mobile, wrap on md+ */}
        <div className="relative">
          {/* Mobile: scrollable row */}
          <div className="md:hidden -mx-4 px-4">
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide pb-1 snap-x">
              {visibleTags.map((tag) => {
                const isActive = activeTags.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={
                      isActive
                        ? "shrink-0 snap-start text-[11px] font-medium px-2.5 py-1 rounded-full bg-primary-1000 text-white shadow-sm shadow-primary-1000/25 transition-all cursor-pointer"
                        : "shrink-0 snap-start text-[11px] font-medium px-2.5 py-1 rounded-full border border-primary-1000/40 text-primary-1000 active:bg-primary-1000/15 transition-all cursor-pointer"
                    }
                  >
                    {tag}
                  </button>
                );
              })}
              {hiddenCount > 0 && (
                <button
                  type="button"
                  onClick={() => setShowAllTags(true)}
                  className="shrink-0 snap-start text-[11px] font-medium px-2.5 py-1 rounded-full border border-dashed border-primary-1000/40 text-primary-1000/80 cursor-pointer flex items-center gap-0.5"
                >
                  +{hiddenCount} <HiChevronDown className="text-xs" />
                </button>
              )}
              {showAllTags && ALL_TAGS.length > MOBILE_VISIBLE_TAGS && (
                <button
                  type="button"
                  onClick={() => setShowAllTags(false)}
                  className="shrink-0 snap-start text-[11px] font-medium px-2.5 py-1 rounded-full border border-dashed border-primary-1000/40 text-primary-1000/80 cursor-pointer flex items-center gap-0.5"
                >
                  Less <HiChevronUp className="text-xs" />
                </button>
              )}
              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="shrink-0 snap-start text-[11px] font-medium px-2.5 py-1 rounded-full border border-red-400/50 text-red-400 active:bg-red-400/10 transition-all cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Desktop: wrap */}
          <div className="hidden md:flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider opacity-50 font-medium mr-1">
              Filter:
            </span>
            {ALL_TAGS.map((tag) => {
              const isActive = activeTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={
                    isActive
                      ? "text-xs font-medium px-3 py-1.5 rounded-full bg-primary-1000 text-white shadow-md shadow-primary-1000/25 transition-all cursor-pointer"
                      : "text-xs font-medium px-3 py-1.5 rounded-full border border-primary-1000/40 text-primary-1000 hover:bg-primary-1000/15 transition-all cursor-pointer"
                  }
                >
                  {tag}
                </button>
              );
            })}
            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs font-medium px-3 py-1.5 rounded-full border border-red-400/50 text-red-400 hover:bg-red-400/10 transition-all cursor-pointer ml-1"
              >
                Clear all
              </button>
            )}
          </div>
        </div>

        {/* Results count */}
        <p className="text-xs md:text-sm opacity-60">
          {filtered.length === 0
            ? "No projects found"
            : `Showing ${filtered.length} project${filtered.length !== 1 ? "s" : ""}`}
          {hasFilters && filtered.length > 0 && (
            <span className="opacity-50"> (filtered)</span>
          )}
        </p>
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
          <div className="w-16 h-16 rounded-full border border-primary-1000/30 flex items-center justify-center">
            <BsSearch className="text-2xl text-primary-1000/50" />
          </div>
          <p className="text-base opacity-60 max-w-sm">
            No projects match your search or filters. Try different keywords or clear the filters.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-primary-1000 text-white hover:opacity-90 transition-opacity shadow-md shadow-primary-1000/25 cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      )}

      {filtered.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {pageItems.map((project, index) => (
            <li key={project.slug} className="project-card-3d group/card">
              <div className="project-card-border relative p-[2px] rounded-2xl overflow-hidden h-full">
                <article className="relative z-10 flex flex-col h-full rounded-2xl overflow-hidden bg-background dark:bg-[#0f1420] border border-white/5 transition-transform duration-500 ease-out">
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
                      className="object-contain p-3 transition-transform duration-700 ease-out group-hover/card:scale-110"
                    />
                    <span className="absolute top-3 left-3 text-[10px] md:text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-full border border-primary-1000/60 bg-background/90 dark:bg-[#0f1420]/90 text-primary-1000 backdrop-blur-sm">
                      {project.category}
                    </span>
                    <span className="project-card-shine pointer-events-none absolute inset-0" />
                  </Link>

                  <div className="flex flex-col flex-1 p-4 md:p-5 gap-3">
                    <div className="flex items-start gap-3">
                      <span
                        className="text-transparent text-outline text-2xl font-extrabold leading-none shrink-0"
                        style={{ userSelect: "none" }}
                      >
                        {project.num}
                      </span>
                      <Link href={`/projects/${project.slug}`} className="min-w-0">
                        <h3 className="text-base md:text-lg font-bold leading-snug transition-colors line-clamp-2 group-hover/card:text-primary-1000">
                          {project.title}
                        </h3>
                      </Link>
                    </div>

                    <p className="opacity-70 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <ul className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <li
                          key={tag}
                          className="text-[10px] md:text-xs text-primary-1000 border border-primary-1000/40 bg-primary-1000/15 px-2 py-0.5 rounded-full cursor-pointer hover:bg-primary-1000/25 transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            if (!activeTags.includes(tag)) toggleTag(tag);
                          }}
                        >
                          {tag}
                        </li>
                      ))}
                      {project.tags.length > 3 && (
                        <li className="text-[10px] md:text-xs opacity-60 px-1 py-0.5">
                          +{project.tags.length - 3}
                        </li>
                      )}
                    </ul>

                    <div className="mt-auto pt-2 flex items-center gap-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-2 rounded-full bg-primary-1000 text-white hover:opacity-90 transition-opacity shadow-md shadow-primary-1000/25"
                      >
                        Details <BsArrowRight className="text-sm" />
                      </Link>

                      {project.live && project.live !== "#" && (
                        <Link
                          href={project.live}
                          target="_blank"
                          className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-primary-1000/40 text-primary-1000 hover:bg-primary-1000/15 transition-colors"
                          aria-label="Live demo"
                        >
                          <BsArrowUpRight className="text-base" />
                        </Link>
                      )}

                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-primary-1000/40 text-primary-1000 hover:bg-primary-1000/15 transition-colors"
                          aria-label="GitHub repository"
                        >
                          <BsGithub className="text-base" />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            </li>
          ))}
        </ul>
      )}

      {totalPages > 1 && filtered.length > 0 && (
        <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => goTo(Math.max(1, page - 1))}
            disabled={page === 1}
            className="w-10 h-10 rounded-full border border-primary-1000/40 flex items-center justify-center text-primary-1000 disabled:opacity-30 hover:bg-primary-1000/15 transition-colors cursor-pointer disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <HiChevronLeft className="text-xl" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => goTo(p)}
              className={
                p === page
                  ? "w-10 h-10 rounded-full text-sm font-semibold transition-all cursor-pointer bg-primary-1000 text-white shadow-md shadow-primary-1000/30"
                  : "w-10 h-10 rounded-full text-sm font-semibold transition-all cursor-pointer border border-primary-1000/40 text-primary-1000 hover:bg-primary-1000/15"
              }
            >
              {p}
            </button>
          ))}

          <button
            type="button"
            onClick={() => goTo(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className="w-10 h-10 rounded-full border border-primary-1000/40 flex items-center justify-center text-primary-1000 disabled:opacity-30 hover:bg-primary-1000/15 transition-colors cursor-pointer disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <HiChevronRight className="text-xl" />
          </button>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .project-card-3d {
          perspective: 1200px;
        }

        .project-card-3d:hover .project-card-border > article {
          transform: rotateX(4deg) rotateY(-4deg) translateY(-6px);
          box-shadow:
            0 20px 40px -12px color-mix(in oklab, var(--color-primary-1000) 35%, transparent),
            0 8px 16px -8px rgba(0, 0, 0, 0.25);
        }

        .project-card-border::before,
        .project-card-border::after {
          content: "";
          position: absolute;
          inset: -40%;
          z-index: 0;
          background: linear-gradient(
            theme(--color-primary-1000) 0%,
            theme(--color-primary-1000) 40%,
            transparent 40%,
            transparent 100%
          );
          animation: project-spin 6s linear infinite;
          opacity: 0.85;
        }

        .project-card-border::after {
          background: linear-gradient(
            transparent 0%,
            transparent 50%,
            theme(--color-primary-1000) 50%,
            theme(--color-primary-1000) 100%
          );
          animation-duration: 4s;
          animation-direction: reverse;
          opacity: 0.7;
        }

        .project-card-3d:hover .project-card-border::before,
        .project-card-3d:hover .project-card-border::after {
          opacity: 1;
          animation-duration: 2.5s;
        }

        .project-card-shine {
          background: linear-gradient(
            120deg,
            transparent 30%,
            rgba(255, 255, 255, 0.12) 50%,
            transparent 70%
          );
          transform: translateX(-120%);
        }

        .project-card-3d:hover .project-card-shine {
          animation: project-shine 1.1s ease forwards;
        }

        @keyframes project-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes project-shine {
          to {
            transform: translateX(120%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-card-border::before,
          .project-card-border::after,
          .project-card-shine {
            animation: none !important;
          }
          .project-card-3d:hover .project-card-border > article {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default AllProjects;
