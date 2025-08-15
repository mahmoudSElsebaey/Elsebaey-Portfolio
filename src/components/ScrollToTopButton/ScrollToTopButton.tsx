"use client";

import React from "react";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface ScrollToTopButtonProps {
  threshold?: number;

  className?: string;

  offsetClasses?: string;
}

export default function ScrollToTopButton({
  threshold = 240,
  className = "",
  offsetClasses = "bottom-6 right-6",
}: ScrollToTopButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Guard for SSR
    if (typeof window === "undefined") return;

    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setVisible(y > threshold);
    };

    // Fire once to set initial state, then listen
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 12 }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
          className={[
            "fixed z-50 inline-flex h-12 w-12 items-center justify-center rounded-full",
            "bg-black/70 text-white shadow-lg backdrop-blur",
            "hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50",
            "active:scale-95",
            offsetClasses,
            className,
          ].join(" ")}
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/*
USAGE (Next.js / React):

1) Install peer deps (icons + animations):
   npm i lucide-react framer-motion

2) Ensure Tailwind is set up (or swap classes for your own CSS).

3) Drop the component near the root (e.g., app/layout.tsx or pages/_app.tsx wrapper):

   <ScrollToTopButton />

4) Customization examples:
   <ScrollToTopButton threshold={400} />
   <ScrollToTopButton offsetClasses="bottom-4 right-4 md:bottom-8 md:right-8" />
   <ScrollToTopButton className="bg-blue-600 hover:bg-blue-700" />
*/
