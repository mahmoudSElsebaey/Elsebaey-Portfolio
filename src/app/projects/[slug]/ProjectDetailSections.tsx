"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, ShieldCheck, ArrowRight } from "lucide-react";

interface SectionLabels {
  featuresLabel: string;
  featuresTitle: string;
  featuresHighlight: string;
  featuresDesc: string;
  challengesLabel: string;
  challengesTitle: string;
  challengesHighlight: string;
  challengesDesc: string;
  problemsLabel: string;
  problemsTitle: string;
  problemsHighlight: string;
  problemsDesc: string;
}

interface ProjectDetailSectionsProps {
  features?: string[];
  challenges?: string[];
  problems?: string[];
  labels: SectionLabels;
  isRtl?: boolean;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 280, damping: 24 },
  },
};

const itemScale = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 22 },
  },
};

const itemSlide = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 26 },
  },
};

const itemSlideRtl = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 26 },
  },
};

export default function ProjectDetailSections({
  features,
  challenges,
  problems,
  labels,
  isRtl = false,
}: ProjectDetailSectionsProps) {
  const slideVariant = isRtl ? itemSlideRtl : itemSlide;

  return (
    <>
      {features && features.length > 0 && (
        <motion.section
          className="mt-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={container}
        >
          <motion.div variants={itemUp} className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary-1000/15 text-primary-1000">
                <Sparkles className="h-4.5 w-4.5" size={18} />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-1000/80">
                {labels.featuresLabel}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              {labels.featuresTitle}{" "}
              <span className="text-primary-1000 relative inline-block">
                {labels.featuresHighlight}
                <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-primary-1000/40" />
              </span>
            </h2>
            <p className="mt-2 max-w-xl text-sm opacity-70">
              {labels.featuresDesc}
            </p>
          </motion.div>

          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
            variants={container}
          >
            {features.map((feature, i) => (
              <motion.li
                key={i}
                variants={itemScale}
                whileHover={{
                  y: -3,
                  transition: { type: "spring", stiffness: 400, damping: 20 },
                }}
                className="group relative overflow-hidden rounded-2xl border border-primary-1000/20 bg-gradient-to-br from-primary-1000/[0.07] to-transparent p-4 md:p-5 transition-shadow hover:shadow-[0_8px_30px_-12px] hover:shadow-primary-1000/30"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-1000/10 via-transparent to-transparent" />
                <div className="relative flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-1000 text-[11px] font-bold text-white shadow-sm shadow-primary-1000/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-snug opacity-90 group-hover:opacity-100 transition-opacity">
                    {feature}
                  </span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>
      )}

      {challenges && challenges.length > 0 && (
        <motion.section
          className="mt-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={container}
        >
          <motion.div variants={itemUp} className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
                <Zap className="h-4.5 w-4.5" size={18} />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600/90 dark:text-amber-400/90">
                {labels.challengesLabel}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              {labels.challengesTitle}{" "}
              <span className="relative inline-block text-amber-600 dark:text-amber-400">
                {labels.challengesHighlight}
                <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-amber-500/40" />
              </span>
            </h2>
            <p className="mt-2 max-w-xl text-sm opacity-70">
              {labels.challengesDesc}
            </p>
          </motion.div>

          <motion.ul className="relative space-y-0" variants={container}>
            <div
              className={`absolute top-3 bottom-3 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/20 to-transparent ${
                isRtl ? "right-[15px]" : "left-[15px]"
              }`}
            />

            {challenges.map((challenge, i) => (
              <motion.li
                key={i}
                variants={slideVariant}
                className="relative flex gap-5 pb-6 last:pb-0"
              >
                <span className="relative z-10 mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-amber-500/60 bg-background text-xs font-bold text-amber-600 dark:text-amber-400 shadow-sm">
                  {i + 1}
                </span>
                <div className="flex-1 rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] px-4 py-3.5 md:px-5 md:py-4 transition-colors hover:bg-amber-500/[0.08]">
                  <p className="text-[15px] leading-relaxed opacity-90">
                    {challenge}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>
      )}

      {problems && problems.length > 0 && (
        <motion.section
          className="mt-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={container}
        >
          <motion.div variants={itemUp} className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-4.5 w-4.5" size={18} />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600/90 dark:text-emerald-400/90">
                {labels.problemsLabel}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              {labels.problemsTitle}{" "}
              <span className="relative inline-block text-emerald-600 dark:text-emerald-400">
                {labels.problemsHighlight}
                <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-emerald-500/40" />
              </span>
            </h2>
            <p className="mt-2 max-w-xl text-sm opacity-70">
              {labels.problemsDesc}
            </p>
          </motion.div>

          <motion.ul className="grid grid-cols-1 gap-3.5" variants={container}>
            {problems.map((problem, i) => (
              <motion.li
                key={i}
                variants={itemUp}
                whileHover={{
                  x: isRtl ? -4 : 4,
                  transition: { type: "spring", stiffness: 400, damping: 22 },
                }}
                className="group flex items-start gap-4 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/[0.06] to-transparent p-4 md:p-5 transition-shadow hover:shadow-[0_8px_28px_-14px] hover:shadow-emerald-500/25"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/30">
                  <ArrowRight
                    className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`}
                    size={16}
                  />
                </span>
                <p className="flex-1 text-[15px] leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity pt-0.5">
                  {problem}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>
      )}
    </>
  );
}
