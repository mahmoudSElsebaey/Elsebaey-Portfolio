"use client";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "../ui/theme-toggle";
import Image from "next/image";
import logo from "./../../../public/assets/logo-r.png";
import { Nav } from "../Nav/Nav";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Link from "next/link";
import { Palette } from "lucide-react";
import "./header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showThemeColors, setShowThemeColors] = useState(false);
  const themeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      <div className="flex justify-between items-center gap-2">
        <div className="flex justify-center items-center" ref={themeRef}>
          <div className="relative group" title="Choose theme color">
            <button
              type="button"
              aria-label="Choose theme color"
              aria-expanded={showThemeColors}
              className="w-10 h-10 rounded-full cursor-pointer flex items-center justify-center
                border border-primary-1000/25 bg-primary-1000/5
                hover:bg-primary-1000/15 hover:border-primary-1000/40
                transition-all duration-300 active:scale-95
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1000/40"
              onClick={() => setShowThemeColors((prev) => !prev)}
            >
              <Palette
                className="h-[18px] w-[18px] text-primary-1000"
                strokeWidth={2}
              />
            </button>
            <div
              className={`absolute right-0 sm:left-[50%] sm:translate-x-[-50%] top-full mt-2 ${
                showThemeColors
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              } transition-all duration-300 origin-top`}
            >
              <ThemeSwitcher />
            </div>
          </div>
        </div>
        <div className="order-1">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
