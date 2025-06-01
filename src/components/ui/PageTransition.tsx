"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
          className="h-screen w-screen fixed top-0 left-0 bg-black opacity-50  pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
}
