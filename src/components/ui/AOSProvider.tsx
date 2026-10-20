"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

function revealVisibleAosElements() {
  document.querySelectorAll<HTMLElement>("[data-aos]").forEach((el) => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight + 80 && rect.bottom > -80;
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
      duration: 350,
      once: true,
      offset: 40,
      delay: 0,
      easing: "ease-out",
      mirror: false,
      debounceDelay: 50,
      throttleDelay: 80,
      startEvent: "DOMContentLoaded",
    });

    AOS.refresh();
    revealVisibleAosElements();

    const id = window.requestAnimationFrame(() => {
      AOS.refresh();
      revealVisibleAosElements();
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      AOS.refresh();
      revealVisibleAosElements();
    });
    return () => window.cancelAnimationFrame(id);
  }, [pathname]);

  return <>{children}</>;
}
