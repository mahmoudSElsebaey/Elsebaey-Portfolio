"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { BsX } from "react-icons/bs";

interface ProjectImageLightboxProps {
  src: string;
  alt: string;
}

export default function ProjectImageLightbox({
  src,
  alt,
}: ProjectImageLightboxProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-primary-1000/20 bg-primary-1000/5 cursor-zoom-in group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-1000"
        aria-label={`View full size: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={80}
          priority
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/50 text-white text-xs px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
          Click to enlarge
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 cursor-zoom-out"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-[101] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close full size image"
          >
            <BsX className="text-3xl" />
          </button>

          <div
            className="relative w-full h-full max-w-7xl max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              quality={90}
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
