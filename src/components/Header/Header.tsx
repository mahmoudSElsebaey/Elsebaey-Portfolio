"use client";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import ThemeToggle from "../ui/theme-toggle";
import Image from "next/image";
import logo from "./../../../public/assets/logo-r.png";
import { Nav } from "../Nav/Nav";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Link from "next/link";
import { SwatchBook, SunMoon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./header.css";

const PANEL_WIDTH = 220;
const EDGE_GAP = 12;

type HeaderTip = "theme-color" | "theme-mode" | null;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showThemeColors, setShowThemeColors] = useState(false);
  const [showIdentity, setShowIdentity] = useState(false);
  const [headerTip, setHeaderTip] = useState<HeaderTip>(null);
  const [panelPos, setPanelPos] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const themeRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const identityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tipTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updatePanelPosition = useCallback(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const vw = window.innerWidth;

    let left = rect.right - PANEL_WIDTH;
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

  useEffect(() => {
    return () => {
      if (identityTimer.current) clearTimeout(identityTimer.current);
      if (tipTimer.current) clearTimeout(tipTimer.current);
    };
  }, []);

  const openIdentity = () => {
    if (identityTimer.current) clearTimeout(identityTimer.current);
    identityTimer.current = setTimeout(() => setShowIdentity(true), 120);
  };

  const closeIdentity = () => {
    if (identityTimer.current) clearTimeout(identityTimer.current);
    setShowIdentity(false);
  };

  const openHeaderTip = (tip: HeaderTip) => {
    if (tipTimer.current) clearTimeout(tipTimer.current);
    tipTimer.current = setTimeout(() => setHeaderTip(tip), 120);
  };

  const closeHeaderTip = () => {
    if (tipTimer.current) clearTimeout(tipTimer.current);
    setHeaderTip(null);
  };

  return (
    <header
      className={`w-full max-w-[100vw] left-0 right-0 px-3 md:px-5 flex justify-between items-center sticky top-0 z-[9999] transition-[padding,box-shadow,background-color] duration-300 backdrop-blur-md ${
        isScrolled
          ? "py-2 xl:py-2 md:px-10 header bg-background/80"
          : "py-4 xl:py-5 bg-transparent"
      }`}
    >
      <div
        className="relative flex justify-center items-center ml-[-15px]"
        onMouseEnter={openIdentity}
        onMouseLeave={closeIdentity}
        onFocus={openIdentity}
        onBlur={closeIdentity}
      >
        <Link
          href="/"
          className="cursor-pointer flex items-center group/logo"
          prefetch
          aria-describedby="logo-identity-card"
        >
          <Image
            src={logo}
            width={100}
            height={100}
            className="w-22 h-16 hidden sm:block transition-transform duration-300 group-hover/logo:scale-[1.04] group-hover/logo:drop-shadow-[0_0_18px_rgba(var(--primary-rgb,120,80,255),0.35)]"
            alt="Mahmoud Elsebaey portfolio logo"
            priority
          />
          <p
            data-text="elseba3y"
            className="lg:hidden xl:block logo-name py-1 ml-[17px] sm:ml-0 text-[22px] sm:text-3xl font-extrabold text-outline text-transparent rotate-[-3deg] sm:rotate-0 transition-transform duration-300 group-hover/logo:scale-[1.02]"
            style={{
              fontFamily: "JetBrains Mono, JetBrains Mono Fallback",
              userSelect: "none",
            }}
          >
            <span className="opacity-70">elseba3y</span>
          </p>
        </Link>

        <AnimatePresence>
          {showIdentity && (
            <motion.div
              id="logo-identity-card"
              role="tooltip"
              initial={{ opacity: 0, y: 8, filter: "blur(6px)", scale: 0.96 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, y: 6, filter: "blur(4px)", scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:block absolute top-full left-0 mt-2 z-[10001] min-w-[260px] max-w-[300px] pointer-events-none"
            >
              <div className="relative rounded-2xl border border-primary-1000/30 bg-background/80 backdrop-blur-xl px-4 py-3.5 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.35)] shadow-primary-1000/20">
                <span className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-primary-1000/25 via-transparent to-primary-1000/10 opacity-70" />
                {/* Arrow - matched glass background */}
                <span className="absolute -top-1.5 left-6 h-3 w-3 rotate-45 border-l border-t border-primary-1000/30 bg-background/80 backdrop-blur-xl" />

                <div className="relative z-10 flex gap-3 items-start">
                  <div className="shrink-0 mt-0.5 rounded-xl border border-primary-1000/25 bg-primary-1000/10 p-1.5">
                    <Image
                      src={logo}
                      width={40}
                      height={40}
                      className="h-9 w-9 object-contain"
                      alt=""
                      aria-hidden
                    />
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <p
                      className="text-[15px] sm:text-base font-bold leading-tight tracking-wide text-foreground"
                      style={{
                        fontFamily: "Teko, system-ui, sans-serif",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Mahmoud Salah Elsebaey
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-primary-1000 font-semibold">
                      Full-Stack MERN Developer
                    </p>
                    <p
                      className="mt-0.5 text-[12px] leading-snug text-foreground/65 italic"
                      style={{
                        fontFamily: "Georgia, 'Times New Roman', serif",
                      }}
                    >
                      Modern apps. Clean code. Seamless experiences.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="hidden lg:flex items-center xl:translate-x-[70px]">
        <Nav />
      </div>

      <div className="flex items-center gap-2 shrink-0" ref={themeRef}>
        <div
          className="relative"
          onMouseEnter={() => openHeaderTip("theme-color")}
          onMouseLeave={closeHeaderTip}
        >
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

          <AnimatePresence>
            {headerTip === "theme-color" && !showThemeColors && (
              <motion.div
                role="tooltip"
                initial={{
                  opacity: 0,
                  y: 8,
                  filter: "blur(6px)",
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 6,
                  filter: "blur(4px)",
                  scale: 0.98,
                }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:block absolute top-full right-0 mt-2 z-[10001] w-[210px] pointer-events-none"
              >
                <div className="relative rounded-xl border border-primary-1000/30 bg-background/85 backdrop-blur-xl px-3.5 py-3 shadow-[0_8px_28px_-12px_rgba(0,0,0,0.35)] shadow-primary-1000/15">
                  <span className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-primary-1000/20 via-transparent to-primary-1000/10 opacity-70" />
                  {/* Arrow - matched glass background */}
                  <span className="absolute -top-1.5 right-4 h-3 w-3 rotate-45 border-l border-t border-primary-1000/30 bg-background/85 backdrop-blur-xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary-1000/15 text-primary-1000">
                        <SwatchBook className="h-3.5 w-3.5" strokeWidth={2.25} />
                      </span>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-primary-1000 font-semibold">
                        Accent Color
                      </p>
                    </div>
                    <p className="text-[12px] leading-snug text-foreground/70">
                      Pick a primary accent color for the whole site theme.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className="relative"
          onMouseEnter={() => openHeaderTip("theme-mode")}
          onMouseLeave={closeHeaderTip}
        >
          <ThemeToggle />

          <AnimatePresence>
            {headerTip === "theme-mode" && (
              <motion.div
                role="tooltip"
                initial={{
                  opacity: 0,
                  y: 8,
                  filter: "blur(6px)",
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 6,
                  filter: "blur(4px)",
                  scale: 0.98,
                }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:block absolute top-full right-0 mt-2 z-[10001] w-[200px] pointer-events-none"
              >
                <div className="relative rounded-xl border border-primary-1000/30 bg-background/85 backdrop-blur-xl px-3.5 py-3 shadow-[0_8px_28px_-12px_rgba(0,0,0,0.35)] shadow-primary-1000/15">
                  <span className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-primary-1000/20 via-transparent to-primary-1000/10 opacity-70" />
                  {/* Arrow - matched glass background */}
                  <span className="absolute -top-1.5 right-4 h-3 w-3 rotate-45 border-l border-t border-primary-1000/30 bg-background/85 backdrop-blur-xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary-1000/15 text-primary-1000">
                        <SunMoon className="h-3.5 w-3.5" strokeWidth={2.25} />
                      </span>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-primary-1000 font-semibold">
                        Light / Dark
                      </p>
                    </div>
                    <p className="text-[12px] leading-snug text-foreground/70">
                      Switch between light and dark appearance modes.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

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
