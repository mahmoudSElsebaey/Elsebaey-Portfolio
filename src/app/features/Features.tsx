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
    <section className="w-full max-w-3xl mx-auto px-4 mt-10 mb-20 md:mb-28">
      <div className="space-y-3 md:space-y-4">
        {featuresList.map((section) => {
          const isOpen = openCategory === section.category;
          return (
            <div
              key={section.category}
              className="rounded-xl border border-primary-1000/25 overflow-hidden bg-primary-1000/5 transition-colors hover:border-primary-1000/40"
              data-aos="zoom-in"
            >
              <button
                type="button"
                onClick={() => toggle(section.category)}
                className="w-full flex items-center justify-between gap-3 p-4 md:p-5 text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 md:gap-4 min-w-0">
                  <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-1000/15 border border-primary-1000/40 flex items-center justify-center text-primary-1000 text-xl md:text-2xl shrink-0">
                    {section.icon}
                  </span>
                  <span className="font-semibold text-sm sm:text-base md:text-lg text-primary-1000 truncate">
                    {section.title}
                  </span>
                </div>
                <ChevronDownIcon
                  className={`w-5 h-5 md:w-6 md:h-6 text-primary-1000 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <ul className="px-4 md:px-5 pb-4 md:pb-5 space-y-2.5 border-t border-primary-1000/15 pt-3">
                    {section.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm md:text-base opacity-80 leading-relaxed"
                      >
                        <span
                          className="text-transparent text-outline text-xs md:text-sm font-extrabold shrink-0 mt-0.5"
                          style={{ userSelect: "none" }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
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
