"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      offset: 40,
      delay: 0,
      easing: "ease-out",
      mirror: false,
      startEvent: "DOMContentLoaded",
    });
  }, []);

  useEffect(() => {
    // Re-scan elements after client navigation so content is not stuck hidden
    const id = window.setTimeout(() => {
      AOS.refreshHard();
    }, 50);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return <>{children}</>;
}
