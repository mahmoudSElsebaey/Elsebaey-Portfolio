"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  {
    name: "Home",
    path: "/",
    summary:
      "Intro, key stats, and a quick snapshot of who I am as a full-stack developer.",
  },
  {
    name: "About Me",
    path: "/about",
    summary:
      "My education, certificates, skills, career journey, and recommendations.",
  },
  {
    name: "Services",
    path: "/services",
    summary:
      "What I deliver: frontend, backend, APIs, auth, e-commerce, and deployment.",
  },
  {
    name: "Projects",
    path: "/projects",
    summary:
      "Selected work with live demos, tech stacks, and detailed case studies.",
  },
  {
    name: "Features",
    path: "/features",
    summary:
      "Capabilities I can build — responsive UI, themes, performance, and more.",
  },
  {
    name: "Contact",
    path: "/contact",
    summary:
      "Reach out for a project, a question, or a collaboration opportunity.",
  },
];

export const Nav = () => {
  const pathname = usePathname();
  const [activeTip, setActiveTip] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const openTip = (path: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setActiveTip(path), 120);
  };

  const closeTip = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveTip(null);
  };

  return (
    <nav className="flex gap-2 xl:gap-6">
      {links.map((link) => {
        const isActive =
          link.path === "/"
            ? pathname === "/"
            : pathname === link.path || pathname.startsWith(`${link.path}/`);

        return (
          <div
            key={link.path}
            className="relative"
            onMouseEnter={() => openTip(link.path)}
            onMouseLeave={closeTip}
            onFocus={() => openTip(link.path)}
            onBlur={closeTip}
          >
            <Link
              href={link.path}
              prefetch
              className={`${
                isActive
                  ? "border-r-2 border-l-2 border-primary-1000 text-primary-1000 font-extrabold bg-primary-1000/10"
                  : "nav-link"
              } capitalize py-2 px-4 rounded-[10px] cursor-pointer transition-colors duration-200`}
            >
              {link.name}
            </Link>

            <AnimatePresence>
              {activeTip === link.path && (
                <motion.div
                  role="tooltip"
                  initial={{ opacity: 0, y: 8, filter: "blur(6px)", scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, y: 6, filter: "blur(4px)", scale: 0.98 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 mt-2 z-[10001] w-[220px] pointer-events-none"
                >
                  <div className="relative rounded-xl border border-primary-1000/30 bg-background/85 backdrop-blur-xl px-3.5 py-3 shadow-[0_8px_28px_-12px_rgba(0,0,0,0.35)] shadow-primary-1000/15">
                    <span className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-primary-1000/20 via-transparent to-primary-1000/10 opacity-70" />
                    <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 border-l border-t border-primary-1000/30 bg-background/85" />
                    <div className="relative z-10">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-primary-1000 font-semibold mb-1">
                        {link.name}
                      </p>
                      <p className="text-[12px] leading-snug text-foreground/70">
                        {link.summary}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
};
