"use client";

import { useState } from "react";
import { featuresList } from "./data";
import { ChevronDownIcon } from "lucide-react";

export default function FeaturesTabs() {
  const [openCategory, setOpenCategory] = useState<string | null>(
    featuresList[0]?.category ?? null
  );

  const toggle = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 mt-10 mb-20 md:mb-28">
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
        {featuresList.map((section) => (
          <article
            key={section.category}
            className="group relative flex flex-col rounded-2xl border border-primary-1000/20 bg-primary-1000/5 p-5 md:p-6 transition-all duration-300 hover:border-primary-1000/50 hover:bg-primary-1000/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-1000/10"
            data-aos="zoom-in"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-1000/15 border border-primary-1000/40 flex items-center justify-center text-primary-1000 text-2xl md:text-3xl mb-4 group-hover:bg-primary-1000 group-hover:text-white transition-colors duration-300">
              {section.icon}
            </div>

            <h3 className="text-base md:text-lg font-bold text-primary-1000 mb-3 leading-snug">
              {section.title}
            </h3>

            <ul className="space-y-2 flex-1">
              {section.features.slice(0, 5).map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-xs md:text-sm opacity-75 leading-relaxed"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-1000 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
              {section.features.length > 5 && (
                <li className="text-xs text-primary-1000/80 pl-3.5">
                  +{section.features.length - 5} more
                </li>
              )}
            </ul>
          </article>
        ))}
      </div>

      <div className="sm:hidden space-y-3">
        {featuresList.map((section) => {
          const isOpen = openCategory === section.category;
          return (
            <div
              key={section.category}
              className="rounded-xl border border-primary-1000/25 overflow-hidden bg-primary-1000/5"
            >
              <button
                type="button"
                onClick={() => toggle(section.category)}
                className="w-full flex items-center justify-between gap-3 p-4 text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-10 h-10 rounded-full bg-primary-1000/15 border border-primary-1000/40 flex items-center justify-center text-primary-1000 text-xl shrink-0">
                    {section.icon}
                  </span>
                  <span className="font-semibold text-sm text-primary-1000 truncate">
                    {section.title}
                  </span>
                </div>
                <ChevronDownIcon
                  className={`w-5 h-5 text-primary-1000 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <ul className="px-4 pb-4 space-y-2">
                    {section.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-xs opacity-80 leading-relaxed"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-1000 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
