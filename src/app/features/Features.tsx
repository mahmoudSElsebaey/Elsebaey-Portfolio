"use client";

import { useState } from "react";
import { featuresList } from "./data";
import { ChevronDownIcon, Check } from "lucide-react";

export default function FeaturesTabs() {
  const [openCategory, setOpenCategory] = useState<string | null>(
    featuresList[0]?.category ?? null
  );

  const toggle = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  const active =
    featuresList.find((s) => s.category === openCategory) ?? featuresList[0];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 mt-8 mb-20 md:mb-28">
      {/* Category grid — quick visual scan */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-10">
        {featuresList.map((section) => {
          const isActive = openCategory === section.category;
          return (
            <button
              key={section.category}
              type="button"
              onClick={() => toggle(section.category)}
              data-aos="fade-up"
              className={[
                "group relative text-left rounded-2xl border p-4 md:p-5 transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-1000/10",
                isActive
                  ? "border-primary-1000 bg-primary-1000/15 shadow-md shadow-primary-1000/10"
                  : "border-primary-1000/20 bg-primary-1000/5 hover:border-primary-1000/40",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <span
                  className={[
                    "w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center text-xl md:text-2xl transition-colors duration-300",
                    isActive
                      ? "bg-primary-1000 text-white"
                      : "bg-primary-1000/15 text-primary-1000 border border-primary-1000/30 group-hover:bg-primary-1000 group-hover:text-white",
                  ].join(" ")}
                >
                  {section.icon}
                </span>

                <span
                  className={[
                    "text-[11px] md:text-xs font-bold px-2 py-0.5 rounded-full tabular-nums",
                    isActive
                      ? "bg-primary-1000 text-white"
                      : "bg-primary-1000/10 text-primary-1000",
                  ].join(" ")}
                >
                  {section.features.length}
                </span>
              </div>

              <h3
                className={[
                  "text-xs sm:text-sm md:text-base font-semibold leading-snug line-clamp-2",
                  isActive ? "text-primary-1000" : "opacity-90",
                ].join(" ")}
              >
                {section.title.replace(" Features", "").replace(" & ", " &\n")}
              </h3>

              {/* Active indicator bar */}
              <span
                className={[
                  "absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300",
                  isActive
                    ? "bg-primary-1000 opacity-100"
                    : "bg-transparent opacity-0",
                ].join(" ")}
              />
            </button>
          );
        })}
      </div>

      {/* Active category details */}
      {active && (
        <div
          key={active.category}
          className="rounded-2xl border border-primary-1000/25 bg-primary-1000/5 overflow-hidden"
          data-aos="fade-up"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 md:p-6 border-b border-primary-1000/15">
            <div className="flex items-center gap-3 md:gap-4 min-w-0">
              <span className="w-12 h-12 rounded-xl bg-primary-1000 text-white flex items-center justify-center text-2xl shrink-0">
                {active.icon}
              </span>
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-primary-1000 truncate">
                  {active.title}
                </h3>
                <p className="text-xs md:text-sm opacity-60">
                  {active.features.length} capabilities in this area
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpenCategory(null)}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-primary-1000/70 hover:text-primary-1000 transition-colors"
            >
              Collapse
              <ChevronDownIcon className="w-4 h-4 rotate-180" />
            </button>
          </div>

          {/* Features as chips / cards */}
          <div className="p-5 md:p-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-3.5">
              {active.features.map((feature, index) => (
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
        </div>
      )}

      {/* Collapsed empty state hint */}
      {!openCategory && (
        <p className="text-center text-sm opacity-50 mt-2" data-aos="fade-up">
          Select a category above to explore capabilities
        </p>
      )}
    </section>
  );
}
