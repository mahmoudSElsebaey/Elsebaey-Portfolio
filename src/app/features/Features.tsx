"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { featuresList } from "./data";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

// Short labels for compact expanded tabs
const shortLabels: Record<string, string> = {
  "UI & Design": "UI & Design",
  "Frontend Logic": "Frontend",
  "API Integration": "API",
  "Authentication & Security": "Auth",
  "Routing & Navigation": "Routing",
  "Performance & Optimization": "Performance",
  "Backend & Fullstack": "Backend",
  "Developer Tools": "Tools",
};

export default function FeaturesTabs() {
  const [active, setActive] = useState<string>(
    featuresList[0]?.category ?? ""
  );

  const activeSection =
    featuresList.find((s) => s.category === active) ?? featuresList[0];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 mt-8 mb-20 md:mb-28">
      {/* Expanded Tabs */}
      <div className="w-full flex justify-center mb-8 md:mb-10">
        <div
          className={cn(
            "inline-flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 p-1.5 rounded-full",
            "border border-primary-1000/20 bg-primary-1000/5 backdrop-blur-sm",
            "shadow-sm max-w-full"
          )}
          role="tablist"
          aria-label="Feature categories"
        >
          {featuresList.map((section) => {
            const isActive = active === section.category;
            const label = shortLabels[section.category] ?? section.category;

            return (
              <button
                key={section.category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(section.category)}
                className={cn(
                  "relative flex items-center justify-center gap-2 rounded-full",
                  "transition-all duration-300 ease-out cursor-pointer",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1000/40",
                  isActive
                    ? "bg-primary-1000 text-white shadow-md shadow-primary-1000/25 px-3 sm:px-4 py-2 sm:py-2.5"
                    : "text-primary-1000/70 hover:text-primary-1000 hover:bg-primary-1000/10 px-2.5 sm:px-3 py-2 sm:py-2.5"
                )}
              >
                <span
                  className={cn(
                    "shrink-0 text-base sm:text-lg transition-transform duration-300",
                    isActive && "scale-110"
                  )}
                >
                  {section.icon}
                </span>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.span
                      key="label"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden whitespace-nowrap text-xs sm:text-sm font-semibold"
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active category details */}
      <AnimatePresence mode="wait">
        {activeSection && (
          <motion.div
            key={activeSection.category}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="rounded-2xl border border-primary-1000/25 bg-primary-1000/5 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 md:gap-4 p-5 md:p-6 border-b border-primary-1000/15">
              <span className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary-1000 text-white flex items-center justify-center text-xl md:text-2xl shrink-0">
                {activeSection.icon}
              </span>
              <div className="min-w-0">
                <h3 className="text-base md:text-xl font-bold text-primary-1000 truncate">
                  {activeSection.title}
                </h3>
                <p className="text-xs md:text-sm opacity-60">
                  {activeSection.features.length} capabilities in this area
                </p>
              </div>
            </div>

            {/* Features grid */}
            <div className="p-5 md:p-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-3.5">
                {activeSection.features.map((feature, index) => (
                  <li
                    key={index}
                    className="group flex items-start gap-3 rounded-xl border border-primary-1000/10 bg-background/40 px-3.5 py-3 md:px-4 md:py-3.5 transition-all duration-300 hover:border-primary-1000/35 hover:bg-primary-1000/5 hover:shadow-sm"
                  >
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-primary-1000/15 border border-primary-1000/30 text-primary-1000 flex items-center justify-center shrink-0 group-hover:bg-primary-1000 group-hover:text-white transition-colors duration-300">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>

                    <div className="min-w-0 flex-1">
                      <span
                        className="text-[10px] font-bold tracking-wider text-primary-1000/50 tabular-nums"
                        style={{ userSelect: "none" }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm md:text-[15px] leading-relaxed opacity-85">
                        {feature}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
