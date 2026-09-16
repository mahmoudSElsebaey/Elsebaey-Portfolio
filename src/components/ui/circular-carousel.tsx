"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface CarouselItem {
  id: string;
  title: string;
  description: string;
  tag?: string;
  image?: string;
  icon?: React.ReactNode;
}

export interface CircularCarouselProps {
  items: CarouselItem[];
  activeIndex?: number;
  onActiveChange?: (index: number) => void;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const VISIBLE_COUNT = 5;
const RADIUS_X = 240;
const RADIUS_Y = 110;

function getItemPosition(index: number, activeIndex: number, total: number) {
  const offset = index - activeIndex;
  const half = Math.floor(VISIBLE_COUNT / 2);
  let adjustedOffset = offset;
  if (offset > half) adjustedOffset = offset - total;
  if (offset < -half) adjustedOffset = offset + total;
  if (Math.abs(adjustedOffset) > half * 2) return null;

  const angle = (adjustedOffset / VISIBLE_COUNT) * Math.PI;
  const x = Math.sin(angle) * RADIUS_X;
  const y = -Math.cos(angle) * RADIUS_Y;
  const distance = Math.abs(adjustedOffset);
  const maxDistance = half + 1;
  const scale = Math.max(0, 1 - (distance / maxDistance) * 0.28);
  const opacity = Math.max(0.35, 1 - (distance / maxDistance) * 0.65);
  const zIndex = VISIBLE_COUNT - distance;

  return { x, y, scale, opacity, zIndex, adjustedOffset };
}

export function CircularCarousel({
  items,
  activeIndex: controlledIndex,
  onActiveChange,
  autoPlay = true,
  autoPlayInterval = 4500,
  className,
}: CircularCarouselProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const activeIndex = controlledIndex ?? internalIndex;
  const total = items.length;

  const goTo = useCallback(
    (index: number) => {
      const newIndex = ((index % total) + total) % total;
      if (controlledIndex === undefined) {
        setInternalIndex(newIndex);
      }
      onActiveChange?.(newIndex);
    },
    [total, controlledIndex, onActiveChange],
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (!autoPlay || isHovered || isFocused) return;
    intervalRef.current = setInterval(next, autoPlayInterval);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, autoPlayInterval, isHovered, isFocused, next]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    const el = containerRef.current;
    el?.addEventListener("keydown", handler);
    return () => el?.removeEventListener("keydown", handler);
  }, [next, prev]);

  const activeItem = items[activeIndex];

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label="Services carousel"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={cn(
        "relative flex flex-col items-center justify-center gap-6 outline-none",
        className,
      )}
    >
      {/* Circular track */}
      <div className="relative h-[320px] w-full max-w-2xl">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => {
            const pos = getItemPosition(i, activeIndex, total);
            if (!pos) return null;
            const isActive = i === activeIndex;

            return (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  x: pos.x,
                  y: pos.y,
                  scale: pos.scale,
                  opacity: pos.opacity,
                  zIndex: pos.zIndex,
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => goTo(i)}
                aria-label={item.title}
                aria-selected={isActive}
                role="option"
                className={cn(
                  "absolute left-1/2 top-1/2 flex h-40 w-52 -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col overflow-hidden rounded-2xl border border-primary-1000/20 bg-background/80 backdrop-blur-md transition-shadow duration-300",
                  isActive
                    ? "shadow-[0_16px_48px_-12px] shadow-primary-1000/40 border-primary-1000/50"
                    : "shadow-[0_8px_24px_-4px] shadow-black/20 hover:border-primary-1000/35",
                )}
                style={{ transformOrigin: "center center" }}
              >
                {/* Image or icon */}
                <div className="relative h-20 w-full shrink-0 overflow-hidden bg-primary-1000/10">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="208px"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-3xl text-primary-1000">
                      {item.icon}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col justify-between p-3 pt-2 text-left">
                  {item.tag && (
                    <span className="mb-1 w-fit rounded-full bg-primary-1000/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary-1000">
                      {item.tag}
                    </span>
                  )}
                  <div>
                    <h3
                      className={cn(
                        "font-semibold leading-tight transition-colors duration-300",
                        isActive
                          ? "text-sm text-primary-1000"
                          : "text-xs text-foreground/80",
                      )}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-0.5 line-clamp-2 text-[11px] leading-relaxed transition-colors duration-300",
                        isActive
                          ? "text-foreground/70"
                          : "text-foreground/40",
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>

        {/* Center number — site style (text-outline) */}
        <motion.div
          key={activeItem.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"
        >
          <span
            className="text-5xl font-extrabold tracking-tight text-outline text-transparent select-none"
            style={{ userSelect: "none" }}
          >
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span className="mt-0.5 text-xs text-foreground/40">
            of {String(total).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      {/* Active service detail below */}
      <motion.div
        key={`detail-${activeItem.id}`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mx-auto max-w-md text-center px-4"
      >
        <h3 className="text-lg font-bold text-primary-1000">{activeItem.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-foreground/60 dark:text-white/50">
          {activeItem.description}
        </p>
      </motion.div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={prev}
          aria-label="Previous service"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-1000/25 bg-primary-1000/5 text-primary-1000 backdrop-blur-sm transition-colors hover:bg-primary-1000/15 focus-visible:ring-2 focus-visible:ring-primary-1000/40"
        >
          <ChevronLeft className="size-5" />
        </motion.button>

        <div className="flex items-center gap-1.5" role="tablist">
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === activeIndex
                  ? "w-6 bg-primary-1000"
                  : "w-1.5 bg-primary-1000/25 hover:bg-primary-1000/50",
              )}
              aria-label={`Go to service ${i + 1}`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={next}
          aria-label="Next service"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-1000/25 bg-primary-1000/5 text-primary-1000 backdrop-blur-sm transition-colors hover:bg-primary-1000/15 focus-visible:ring-2 focus-visible:ring-primary-1000/40"
        >
          <ChevronRight className="size-5" />
        </motion.button>
      </div>
    </div>
  );
}

export default CircularCarousel;
