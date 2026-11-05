"use client";

import { createPortal } from "react-dom";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { BsX } from "react-icons/bs";

interface ProjectImageLightboxProps {
  src: string;
  alt: string;
  enlargeLabel?: string;
}

export default function ProjectImageLightbox({
  src,
  alt,
  enlargeLabel = "Click to enlarge",
}: ProjectImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-primary-1000/20 bg-primary-1000/5 cursor-zoom-in group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-1000"
        aria-label={`${enlargeLabel}: ${alt}`}
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
        <span className="pointer-events-none absolute bottom-3 end-3 rounded-full bg-black/50 text-white text-xs px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
          {enlargeLabel}
        </span>
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-4 md:p-8"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 end-4 z-[100000] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <BsX className="text-3xl" />
            </button>

            <div
              className="relative h-[88vh] w-[92vw] max-w-7xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="92vw"
                quality={95}
                priority
                unoptimized
                className="object-contain"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
