"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaQuoteLeft } from "react-icons/fa";
import { MdSettingsSuggest } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import Skills from "./skills";
import AboutMe from "./aboutMe";
import MyJourney from "./myJourney";
import Recommendations from "@/components/Recommendations/Recommendations";
import { cn } from "@/lib/utils";

const tabs = [
  {
    value: "myJourney",
    label: "My Journey",
    icon: FaGraduationCap,
  },
  {
    value: "skills",
    label: "Skills",
    icon: MdSettingsSuggest,
  },
  {
    value: "about",
    label: "About Me",
    icon: IoPersonSharp,
  },
  {
    value: "recommendations",
    label: "Recommendations",
    icon: FaQuoteLeft,
  },
] as const;

type TabValue = (typeof tabs)[number]["value"];

export default function Resume() {
  const [active, setActive] = useState<TabValue>("myJourney");
  const listRef = useRef<HTMLDivElement>(null);

  // Click outside collapses visual focus (keeps selection)
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (!listRef.current?.contains(e.target as Node)) {
        // no-op: selection stays; only used if we want collapse behavior later
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <section className="mt-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.05, duration: 0.35, ease: "easeOut" },
        }}
        className="flex justify-center items-center xl:py-0"
      >
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex flex-col gap-6 sm:gap-10" data-aos="fade-up">
            {/* Expanded Tabs — 21st.dev style */}
            <div className="w-full flex justify-center">
              <div
                ref={listRef}
                className={cn(
                  "inline-flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full",
                  "border border-primary-1000/20 bg-primary-1000/5 backdrop-blur-sm",
                  "shadow-sm"
                )}
                role="tablist"
                aria-label="About sections"
              >
                {tabs.map((tab) => {
                  const isActive = active === tab.value;
                  const Icon = tab.icon;

                  return (
                    <button
                      key={tab.value}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActive(tab.value)}
                      className={cn(
                        "relative flex items-center justify-center gap-2 rounded-full",
                        "transition-all duration-300 ease-out cursor-pointer",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1000/40",
                        isActive
                          ? "bg-primary-1000 text-white shadow-md shadow-primary-1000/25 px-3.5 sm:px-5 py-2.5 sm:py-3"
                          : "text-primary-1000/70 hover:text-primary-1000 hover:bg-primary-1000/10 px-2.5 sm:px-3 py-2.5 sm:py-3"
                      )}
                    >
                      <Icon
                        className={cn(
                          "shrink-0 transition-transform duration-300",
                          isActive ? "text-base sm:text-xl" : "text-base sm:text-lg",
                          isActive && "scale-110"
                        )}
                      />

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.span
                            key="label"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                            className="overflow-hidden whitespace-nowrap text-xs sm:text-sm md:text-base font-semibold"
                          >
                            {tab.label}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content */}
            <div className="w-full overflow-hidden min-h-[480px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {active === "myJourney" && <MyJourney />}
                  {active === "skills" && <Skills />}
                  {active === "about" && <AboutMe />}
                  {active === "recommendations" && <Recommendations />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
