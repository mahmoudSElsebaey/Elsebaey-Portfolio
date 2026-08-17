"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

function revealVisibleAosElements() {
  document.querySelectorAll<HTMLElement>("[data-aos]").forEach((el) => {
    const rect = el.getBoundingClientRect();
    const inView =
      rect.top < window.innerHeight + 80 && rect.bottom > -80;
    if (inView) {
      el.classList.add("aos-animate");
    }
  });
}

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      offset: 20,
      delay: 0,
      easing: "ease-out",
      mirror: false,
    });
    // Reveal above-the-fold content immediately after first paint
    const id = window.setTimeout(() => {
      AOS.refresh();
      revealVisibleAosElements();
    }, 30);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => {
      AOS.refresh();
      revealVisibleAosElements();
    }, 40);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return <>{children}</>;
}
