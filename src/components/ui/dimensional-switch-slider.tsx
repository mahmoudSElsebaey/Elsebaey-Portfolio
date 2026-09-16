// Built using Hyperiux Vault: https://vault.hyperiux.com
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ArrowLeft, ArrowRight } from "lucide-react";

gsap.registerPlugin(CustomEase);

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;

export type SlideItem = { image: string; text: string };
type CSSLength = string | number;

const DEFAULT_EASE = "cubic-bezier(1, -0.001, 0.159, 0.838)";
const CUBIC_BEZIER_RE =
  /^cubic-bezier\(\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^)]+)\)$/;

function resolveEase(ease: string): string {
  const match = ease.match(CUBIC_BEZIER_RE);
  if (!match) return ease;

  const id = `ease-${match.slice(1, 5).join("_").replace(/[^\d.-]/g, "n")}`;
  if (!CustomEase.get(id)) {
    CustomEase.create(id, match.slice(1, 5).join(","));
  }
  return id;
}

function toCssLength(value: CSSLength) {
  return typeof value === "number" ? `${value}px` : value;
}

const EASE = "power4.inOut";
const DURATION = 0.9;
const TEXT_TRANSLATE_PERCENT = 40;
const TEXT_ROTATE_DEG = 45;
const OUTGOING_DURATION = DURATION * 0.45;
const VERTICAL_TEXT_TRANSLATE_PERCENT = 40;
const VERTICAL_TEXT_ROTATE_DEG = 45;
const VERTICAL_TEXT_ROTATE_REVERSED = true;
const VERTICAL_TEXT_TRANSLATE_REVERSED = true;
const VERTICAL_OUTGOING_DURATION = DURATION * 0.45;
const TEXT_Z = 60;

export interface DimensionalSwitchSliderProps {
  items: SlideItem[];
  infinite?: boolean;
  ease?: string;
  textColor?: string;
  cardClassName?: string;
  cardWidth?: CSSLength;
  cardHeight?: CSSLength;
  direction?: "horizontal" | "vertical";
  textSize?: CSSLength;
  cardBorderRadius?: CSSLength;
  autoplay?: boolean;
  autoplayDelay?: number;
  accentColor?: string;
}

const DimensionalSwitchSlider = ({
  items,
  infinite = true,
  ease = DEFAULT_EASE,
  textColor = "#ffffff",
  cardClassName = "max-md:w-[85vw]! max-md:h-[55vw]! max-[1024px]:w-[85vw]! max-[1024px]:h-[50vw]!",
  cardWidth = 680,
  cardHeight = 420,
  direction = "horizontal",
  textSize = 48,
  cardBorderRadius = 16,
  autoplay = true,
  autoplayDelay = 3200,
  accentColor,
}: DimensionalSwitchSliderProps) => {
  const isVertical = direction === "vertical";
  const flipAxis = isVertical ? "rotateX" : "rotateY";
  const flipperRef = useRef<HTMLDivElement>(null);
  const prevTextRef = useRef<HTMLDivElement>(null);
  const nextTextRef = useRef<HTMLDivElement>(null);
  const showingNextRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const rotationRef = useRef(0);
  const resolvedEase = useMemo(() => resolveEase(ease), [ease]);
  const resolvedCardWidth = toCssLength(cardWidth);
  const resolvedCardHeight = toCssLength(cardHeight);
  const resolvedTextSize = toCssLength(textSize);
  const resolvedCardBorderRadius = toCssLength(cardBorderRadius);

  const [frontIndex, setFrontIndex] = useState(0);
  const [backIndex, setBackIndex] = useState(items.length > 1 ? 1 : 0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const accent = accentColor ?? "var(--color-primary)";

  useEffect(() => {
    gsap.set([prevTextRef.current, nextTextRef.current], { z: TEXT_Z });
  }, []);

  useEffect(() => {
    gsap.killTweensOf([
      flipperRef.current,
      prevTextRef.current,
      nextTextRef.current,
    ]);

    const wasShowingNext = showingNextRef.current;
    rotationRef.current = wasShowingNext ? 180 : 0;
    gsap.set(flipperRef.current, {
      rotateX: 0,
      rotateY: 0,
      [flipAxis]: rotationRef.current,
    });

    const visibleRef = wasShowingNext ? nextTextRef : prevTextRef;
    const hiddenRef = wasShowingNext ? prevTextRef : nextTextRef;
    gsap.set(visibleRef.current, {
      xPercent: 0,
      yPercent: 0,
      rotateX: 0,
      rotateY: 0,
      opacity: 1,
    });
    gsap.set(hiddenRef.current, {
      xPercent: 0,
      yPercent: 0,
      rotateX: 0,
      rotateY: 0,
      opacity: 0,
    });

    isAnimatingRef.current = false;
  }, [direction, flipAxis]);

  const flipTo = useCallback(
    (dir: "prev" | "next", newIndex: number) => {
      const goingNext = dir === "next";
      if (isAnimatingRef.current) return;
      const wasShowingNext = showingNextRef.current;
      flushSync(() => {
        setCurrentIndex(newIndex);
        if (wasShowingNext) {
          setFrontIndex(newIndex);
        } else {
          setBackIndex(newIndex);
        }
      });

      showingNextRef.current = !wasShowingNext;

      const outgoingRef = wasShowingNext ? nextTextRef : prevTextRef;
      const incomingRef = wasShowingNext ? prevTextRef : nextTextRef;
      const flipGoingNext = isVertical ? !goingNext : goingNext;
      rotationRef.current += flipGoingNext ? 180 : -180;
      const rotateValue = rotationRef.current;

      if (prefersReducedMotion()) {
        gsap.set(flipperRef.current, { [flipAxis]: rotateValue });
        gsap.set(outgoingRef.current, {
          xPercent: 0,
          yPercent: 0,
          rotateX: 0,
          rotateY: 0,
          opacity: 0,
        });
        gsap.set(incomingRef.current, {
          xPercent: 0,
          yPercent: 0,
          rotateX: 0,
          rotateY: 0,
          opacity: 1,
        });
        isAnimatingRef.current = false;
        return;
      }

      isAnimatingRef.current = true;

      const tl = gsap.timeline({
        defaults: { duration: DURATION, ease: EASE },
        onComplete: () => {
          isAnimatingRef.current = false;
        },
      });

      tl.to(
        flipperRef.current,
        { [flipAxis]: rotateValue, ease: resolvedEase, duration: 0.7 },
        0,
      );

      const textTl = gsap.timeline();

      if (isVertical) {
        const rotateGoingNext = VERTICAL_TEXT_ROTATE_REVERSED
          ? !goingNext
          : goingNext;
        const translateGoingNext = VERTICAL_TEXT_TRANSLATE_REVERSED
          ? !goingNext
          : goingNext;

        const outgoingEndRotate = rotateGoingNext
          ? VERTICAL_TEXT_ROTATE_DEG
          : -VERTICAL_TEXT_ROTATE_DEG;
        const outgoingEndY = translateGoingNext
          ? -VERTICAL_TEXT_TRANSLATE_PERCENT * 2
          : VERTICAL_TEXT_TRANSLATE_PERCENT * 2;
        const incomingStartRotate = rotateGoingNext
          ? -VERTICAL_TEXT_ROTATE_DEG
          : VERTICAL_TEXT_ROTATE_DEG;
        const incomingStartY = translateGoingNext
          ? VERTICAL_TEXT_TRANSLATE_PERCENT * 2
          : -VERTICAL_TEXT_TRANSLATE_PERCENT * 2;

        textTl.to(
          outgoingRef.current,
          {
            yPercent: outgoingEndY,
            rotateX: outgoingEndRotate,
            duration: VERTICAL_OUTGOING_DURATION * 1.5,
            ease: resolvedEase,
          },
          0,
        );
        textTl.to(outgoingRef.current, { opacity: 0, delay: -0.3, duration: 0 });
        textTl.fromTo(
          incomingRef.current,
          {
            yPercent: incomingStartY,
            rotateX: incomingStartRotate,
            opacity: 0,
          },
          {
            yPercent: 0,
            rotateX: 0,
            opacity: 1,
            duration: VERTICAL_OUTGOING_DURATION * 1.5,
            ease: resolvedEase,
          },
          0.15,
        );
      } else {
        const outgoingEndRotate = goingNext
          ? TEXT_ROTATE_DEG
          : -TEXT_ROTATE_DEG;
        const outgoingEndX = goingNext
          ? TEXT_TRANSLATE_PERCENT
          : -TEXT_TRANSLATE_PERCENT;
        const incomingStartRotate = goingNext
          ? -TEXT_ROTATE_DEG
          : TEXT_ROTATE_DEG;
        const incomingStartX = goingNext
          ? -TEXT_TRANSLATE_PERCENT
          : TEXT_TRANSLATE_PERCENT;

        textTl.to(
          outgoingRef.current,
          {
            xPercent: outgoingEndX,
            rotateY: outgoingEndRotate,
            duration: OUTGOING_DURATION * 1.5,
            ease: resolvedEase,
          },
          0,
        );
        textTl.to(outgoingRef.current, { opacity: 0, delay: -0.3, duration: 0 });
        textTl.fromTo(
          incomingRef.current,
          {
            xPercent: incomingStartX,
            rotateY: incomingStartRotate,
            opacity: 0,
          },
          {
            xPercent: 0,
            rotateY: 0,
            opacity: 1,
            duration: OUTGOING_DURATION * 1.5,
            ease: resolvedEase,
          },
          0.15,
        );
      }

      tl.add(textTl, 0);
    },
    [flipAxis, isVertical, resolvedEase],
  );

  const switchTo = useCallback(
    (dir: "prev" | "next") => {
      const goingNext = dir === "next";
      const wasShowingNext = showingNextRef.current;
      const currentVisibleIndex = wasShowingNext ? backIndex : frontIndex;
      const rawIndex = currentVisibleIndex + (goingNext ? 1 : -1);
      const newIndex = infinite
        ? ((rawIndex % items.length) + items.length) % items.length
        : rawIndex;

      if (!infinite && (newIndex < 0 || newIndex >= items.length)) return;

      flipTo(dir, newIndex);
    },
    [backIndex, flipTo, frontIndex, infinite, items.length],
  );

  useEffect(() => {
    if (!autoplay || autoplayDelay <= 0 || prefersReducedMotion()) return;

    const intervalId = window.setInterval(() => {
      switchTo("next");
    }, autoplayDelay);

    return () => window.clearInterval(intervalId);
  }, [autoplay, autoplayDelay, switchTo]);

  const goToIndex = useCallback(
    (targetIndex: number) => {
      if (targetIndex === currentIndex) return;

      let dir: "prev" | "next";
      if (infinite) {
        const forwardDistance =
          ((targetIndex - currentIndex) % items.length + items.length) %
          items.length;
        dir =
          forwardDistance <= items.length - forwardDistance ? "next" : "prev";
      } else {
        dir = targetIndex > currentIndex ? "next" : "prev";
      }

      flipTo(dir, targetIndex);
    },
    [currentIndex, flipTo, infinite, items.length],
  );

  if (!items.length) return null;

  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-4 py-8">
      <div
        className={`dimensional-card relative ${cardClassName}`}
        style={{
          perspective: "1000px",
          width: resolvedCardWidth,
          height: resolvedCardHeight,
        }}
      >
        <div ref={flipperRef} className="relative h-full w-full [transform-style:preserve-3d]">
          {/* Front face */}
          <div
            className="absolute inset-0 h-full w-full overflow-hidden [backface-visibility:hidden]"
            style={{ borderRadius: resolvedCardBorderRadius }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={items[frontIndex]?.image}
              className="h-full w-full object-cover"
              alt={items[frontIndex]?.text ?? ""}
            />
          </div>
          <div
            className={`absolute inset-0 h-full w-full overflow-hidden [backface-visibility:hidden] ${
              isVertical ? "[transform:rotateX(180deg)]" : "[transform:rotateY(180deg)]"
            }`}
            style={{ borderRadius: resolvedCardBorderRadius }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={items[backIndex]?.image}
              className="h-full w-full object-cover"
              alt={items[backIndex]?.text ?? ""}
            />
          </div>
        </div>
      </div>

      {/* Overlay text */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-[20vw] w-[70%] max-w-3xl -translate-x-1/2 -translate-y-1/2 items-center justify-center max-md:h-[40vw] max-md:w-[90%] max-[1024px]:h-[30vw] max-[1024px]:w-[85%]"
        style={{ perspective: "1000px", fontSize: resolvedTextSize }}
      >
        <div
          ref={prevTextRef}
          className="absolute w-fit text-center font-semibold drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
          style={{ color: textColor }}
        >
          {items[frontIndex]?.text}
        </div>
        <div
          ref={nextTextRef}
          className="absolute w-fit text-center font-semibold opacity-0 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
          style={{ color: textColor }}
        >
          {items[backIndex]?.text}
        </div>
      </div>

      {/* Controls */}
      <div className="z-10 mt-4 flex gap-4">
        <button
          type="button"
          onClick={() => switchTo("prev")}
          aria-label="Previous"
          disabled={!infinite && currentIndex === 0}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-1000/30 bg-primary-1000/5 text-primary-1000 backdrop-blur-md transition-colors duration-300 hover:bg-primary-1000 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-primary-1000/5 disabled:hover:text-primary-1000"
        >
          <ArrowLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => switchTo("next")}
          aria-label="Next"
          disabled={!infinite && currentIndex === items.length - 1}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-1000/30 bg-primary-1000/5 text-primary-1000 backdrop-blur-md transition-colors duration-300 hover:bg-primary-1000 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-primary-1000/5 disabled:hover:text-primary-1000"
        >
          <ArrowRight className="size-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="z-10 flex gap-2">
        {items.map((item, idx) => (
          <button
            key={`${item.text}-${idx}`}
            type="button"
            onClick={() => goToIndex(idx)}
            aria-label={`Go to ${item.text}`}
            aria-current={idx === currentIndex}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-6 bg-primary-1000"
                : "w-1.5 bg-primary-1000/30 hover:bg-primary-1000/50"
            }`}
            style={
              idx === currentIndex && accentColor
                ? { backgroundColor: accent }
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
};

export default DimensionalSwitchSlider;
