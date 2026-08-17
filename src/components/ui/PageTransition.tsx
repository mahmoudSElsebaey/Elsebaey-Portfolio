"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 0.55 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.15, duration: 0.35, ease: "easeOut" }}
          className="h-screen w-screen fixed top-0 left-0 bg-black pointer-events-none z-[9998]"
        />
        {children}
      </div>
    </AnimatePresence>
  );
}
