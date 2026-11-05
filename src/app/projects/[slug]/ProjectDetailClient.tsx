"use client";

import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowLeft, BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Languages } from "lucide-react";
import type { Project } from "../data";
import { getArabicContent } from "../projectArabic";
import ProjectImageLightbox from "./ProjectImageLightbox";
import ProjectDetailSections from "./ProjectDetailSections";

type Locale = "en" | "ar";

interface ProjectDetailClientProps {
  project: Project;
  prevProject: { slug: string; title: string } | null;
  nextProject: { slug: string; title: string } | null;
}

const ui = {
  en: {
    allProjects: "All Projects",
    technologies: "Technologies",
    liveDemo: "Live Demo",
    github: "GitHub",
    previous: "Previous",
    next: "Next",
    featuresLabel: "The good stuff",
    featuresTitle: "Signature",
    featuresHighlight: "Features",
    featuresDesc:
      "The capabilities that define the product and make it production-ready.",
    challengesLabel: "The hard parts",
    challengesTitle: "Obstacles",
    challengesHighlight: "Faced",
    challengesDesc:
      "Real constraints and design decisions that shaped the architecture.",
    problemsLabel: "From friction to flow",
    problemsTitle: "How I",
    problemsHighlight: "Solved It",
    problemsDesc:
      "Concrete approaches that turned blockers into reliable systems.",
    clickEnlarge: "Click to enlarge",
  },
  ar: {
    allProjects: "كل المشاريع",
    technologies: "التقنيات",
    liveDemo: "معاينة مباشرة",
    github: "جيت هب",
    previous: "السابق",
    next: "التالي",
    featuresLabel: "المميزات",
    featuresTitle: "الميزات",
    featuresHighlight: "الأساسية",
    featuresDesc: "القدرات التي تميّز المنتج وتجعله جاهزًا للإنتاج.",
    challengesLabel: "التحديات",
    challengesTitle: "العقبات",
    challengesHighlight: "التي واجهتها",
    challengesDesc: "قيود حقيقية وقرارات تصميم شكّلت البنية المعمارية.",
    problemsLabel: "من التعقيد إلى الحل",
    problemsTitle: "كيف",
    problemsHighlight: "حللتها",
    problemsDesc: "أساليب عملية حوّلت المعوقات إلى أنظمة موثوقة.",
    clickEnlarge: "اضغط للتكبير",
  },
} as const;

export default function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
}: ProjectDetailClientProps) {
  const [locale, setLocale] = useState<Locale>("en");
  const isAr = locale === "ar";
  const t = ui[locale];

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const ar = useMemo(() => getArabicContent(project.slug), [project.slug]);

  const content = useMemo(() => {
    if (isAr) {
      return {
        title: ar?.titleAr || project.title,
        category: ar?.categoryAr || project.category,
        description:
          ar?.longDescriptionAr ||
          ar?.descriptionAr ||
          project.longDescription ||
          project.description,
        features: ar?.featuresAr || project.features,
        challenges: ar?.challengesAr || project.challenges,
        problems: ar?.problemsAr || project.problems,
      };
    }
    return {
      title: project.title,
      category: project.category,
      description: project.longDescription || project.description,
      features: project.features,
      challenges: project.challenges,
      problems: project.problems,
    };
  }, [isAr, project, ar]);

  return (
    <section
      className="container mx-auto px-4 py-12 md:py-16 relative"
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
    >
      {/* Compact fixed language toggle */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
        <motion.button
          type="button"
          onClick={toggleLocale}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="group relative flex items-center gap-0.5 rounded-full p-0.5 bg-background/75 backdrop-blur-xl border border-primary-1000/30 shadow-[0_4px_20px_-6px] shadow-primary-1000/25 hover:border-primary-1000/50 transition-all duration-300"
          aria-label={isAr ? "Switch to English" : "التبديل إلى العربية"}
        >
          <span className="pointer-events-none absolute -inset-px rounded-full bg-gradient-to-r from-primary-1000/30 via-transparent to-primary-1000/30 opacity-50 group-hover:opacity-90 blur-[0.5px]" />
          <span
            className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-primary-1000 shadow-md shadow-primary-1000/40 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              isAr ? "right-0.5 left-auto" : "left-0.5 right-auto"
            }`}
          />
          <span
            className={`relative z-10 flex items-center justify-center gap-1 min-w-[2.75rem] px-2 py-1.5 rounded-full text-[10px] font-bold tracking-wide transition-colors duration-300 ${
              !isAr ? "text-white" : "text-foreground/65"
            }`}
          >
            <Languages className="h-3 w-3" strokeWidth={2.2} />
            EN
          </span>
          <span
            className={`relative z-10 flex items-center justify-center min-w-[2.75rem] px-2 py-1.5 rounded-full text-[10px] font-bold tracking-wide transition-colors duration-300 ${
              isAr ? "text-white" : "text-foreground/65"
            }`}
          >
            ع
          </span>
        </motion.button>
      </div>

      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-primary-1000 hover:opacity-80 transition-opacity mb-8"
      >
        {isAr ? (
          <>
            <span className="uppercase text-sm tracking-wide">{t.allProjects}</span>
            <BsArrowLeft className="text-lg rotate-180" />
          </>
        ) : (
          <>
            <BsArrowLeft className="text-lg" />
            <span className="uppercase text-sm tracking-wide">{t.allProjects}</span>
          </>
        )}
      </Link>

      <AnimatePresence mode="wait">
        <motion.div
          key={locale}
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            <div className="w-full lg:w-[48%]">
              <ProjectImageLightbox
                src={project.image}
                alt={content.title}
                enlargeLabel={t.clickEnlarge}
              />
            </div>

            <div className="w-full lg:w-[52%] flex flex-col gap-5">
              <div
                className="text-transparent text-outline text-6xl md:text-7xl font-extrabold"
                style={{ userSelect: "none" }}
              >
                {project.num}
              </div>

              <span className="text-primary-1000 text-sm uppercase tracking-widest">
                {content.category}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {content.title}
              </h1>

              <p className="opacity-80 leading-relaxed text-base md:text-lg">
                {content.description}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {project.live && project.live !== "#" && (
                  <div
                    className="btn-cv relative p-[2px] overflow-hidden rounded-full"
                    data-aos="zoom-in"
                  >
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-primary-1000 bg-primary-1000 px-6 text-sm font-medium uppercase text-white transition-all duration-300 hover:bg-primary-1000"
                    >
                      {t.liveDemo}
                      <BsArrowUpRight className="text-xl" />
                    </Link>
                  </div>
                )}
                {project.github && (
                  <div
                    className="btn-cv relative p-[2px] overflow-hidden rounded-full"
                    data-aos="zoom-in"
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-primary-1000 bg-primary-1000 px-6 text-sm font-medium uppercase text-white transition-all duration-300 hover:bg-primary-1000"
                    >
                      {t.github}
                      <BsGithub className="text-xl" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-primary-1000">
              {t.technologies}
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

          <ProjectDetailSections
            features={content.features}
            challenges={content.challenges}
            problems={content.problems}
            labels={{
              featuresLabel: t.featuresLabel,
              featuresTitle: t.featuresTitle,
              featuresHighlight: t.featuresHighlight,
              featuresDesc: t.featuresDesc,
              challengesLabel: t.challengesLabel,
              challengesTitle: t.challengesTitle,
              challengesHighlight: t.challengesHighlight,
              challengesDesc: t.challengesDesc,
              problemsLabel: t.problemsLabel,
              problemsTitle: t.problemsTitle,
              problemsHighlight: t.problemsHighlight,
              problemsDesc: t.problemsDesc,
            }}
            isRtl={isAr}
          />

          <div className="mt-16 pt-8 border-t border-primary-1000/20 flex flex-col sm:flex-row justify-between gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex flex-col gap-1 p-4 rounded-xl border border-primary-1000/20 hover:border-primary-1000/50 hover:bg-primary-1000/5 transition-all"
              >
                <span className="text-xs uppercase opacity-60">{t.previous}</span>
                <span className="font-semibold group-hover:text-primary-1000 transition-colors">
                  {isAr ? (
                    <>{(getArabicContent(prevProject.slug)?.titleAr || prevProject.title)} ←</>
                  ) : (
                    <>← {prevProject.title}</>
                  )}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className={`group flex flex-col gap-1 p-4 rounded-xl border border-primary-1000/20 hover:border-primary-1000/50 hover:bg-primary-1000/5 transition-all ${
                  isAr ? "text-left sm:mr-auto" : "text-right sm:ml-auto"
                }`}
              >
                <span className="text-xs uppercase opacity-60">{t.next}</span>
                <span className="font-semibold group-hover:text-primary-1000 transition-colors">
                  {isAr ? (
                    <>→ {(getArabicContent(nextProject.slug)?.titleAr || nextProject.title)}</>
                  ) : (
                    <>{nextProject.title} →</>
                  )}
                </span>
              </Link>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
