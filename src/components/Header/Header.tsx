"use client";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import ThemeToggle from "../ui/theme-toggle";
import Image from "next/image";
import logo from "./../../../public/assets/logo-r.png";
import { Nav } from "../Nav/Nav";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Link from "next/link";
import { SwatchBook } from "lucide-react";
import "./header.css";

const PANEL_WIDTH = 220;
const EDGE_GAP = 12;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showThemeColors, setShowThemeColors] = useState(false);
  const [panelPos, setPanelPos] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const themeRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const updatePanelPosition = useCallback(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const vw = window.innerWidth;

    // Prefer align panel's right edge with button's right edge
    let left = rect.right - PANEL_WIDTH;

    // Clamp inside viewport
    left = Math.max(EDGE_GAP, Math.min(left, vw - PANEL_WIDTH - EDGE_GAP));

    const top = rect.bottom + 8;

    setPanelPos({ top, left });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      if (showThemeColors) updatePanelPosition();
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showThemeColors, updatePanelPosition]);

  useLayoutEffect(() => {
    if (!showThemeColors) return;
    updatePanelPosition();

    const onResize = () => updatePanelPosition();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [showThemeColors, updatePanelPosition]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        themeRef.current &&
        !themeRef.current.contains(event.target as Node)
      ) {
        setShowThemeColors(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`px-3 md:px-5 flex justify-between items-center sticky top-0 z-[9999] transition-[padding,box-shadow,background-color] duration-300 backdrop-blur-md ${
        isScrolled
          ? "py-2 xl:py-2 md:px-10 header bg-background/80"
          : "py-4 xl:py-5 bg-transparent"
      }`}
    >
      <div
        className="relative flex justify-center items-center ml-[-15px]"
        title="Mahmoud Elsebaey "
      >
        <Link href="/" className="cursor-pointer flex items-center" prefetch>
          <Image
            src={logo}
            width={100}
            height={100}
            className="w-22 h-16 hidden sm:block"
            alt="logo"
            priority
          />
          <p
            data-text="elseba3y"
            className="lg:hidden xl:block logo-name py-1 ml-[17px] sm:ml-0 text-[22px] sm:text-3xl font-extrabold text-outline text-transparent rotate-[-3deg] sm:rotate-0"
            style={{
              fontFamily: "JetBrains Mono, JetBrains Mono Fallback",
              userSelect: "none",
            }}
          >
            <span className="opacity-70">elseba3y</span>
          </p>
        </Link>
      </div>

      <div className="hidden lg:flex items-center xl:translate-x-[70px]">
        <Nav />
      </div>

      <div className="flex items-center gap-2 shrink-0" ref={themeRef}>
        <button
          ref={buttonRef}
          type="button"
          aria-label="Choose theme color"
          aria-expanded={showThemeColors}
          title="Choose theme color"
          className="w-10 h-10 rounded-full cursor-pointer flex items-center justify-center
            border border-primary-1000/25 bg-primary-1000/5
            hover:bg-primary-1000/15 hover:border-primary-1000/40
            transition-all duration-300 active:scale-95
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1000/40"
          onClick={() => {
            setShowThemeColors((prev) => {
              const next = !prev;
              if (next) {
                // position will be set in useLayoutEffect
                requestAnimationFrame(updatePanelPosition);
              }
              return next;
            });
          }}
        >
          <SwatchBook
            className="h-[18px] w-[18px] text-primary-1000"
            strokeWidth={2}
          />
        </button>

        <ThemeToggle />

        {/* Fixed to viewport — never expands document width */}
        {showThemeColors && (
          <div
            className="fixed z-[10000]"
            style={{
              top: panelPos.top,
              left: panelPos.left,
              width: PANEL_WIDTH,
            }}
          >
            <ThemeSwitcher />
          </div>
        )}
      </div>
    </header>
  );
}
