"use client";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "../ui/theme-toggle";
import Image from "next/image";
import logo from "./../../../public/assets/logo-r.png";
import { Nav } from "../Nav/Nav";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Link from "next/link";
import { RiColorFilterLine } from "react-icons/ri";
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
          <div className="relative group" title="choose theme colors">
            <button
              type="button"
              className="text-[22px] font-extrabold btn-colors gradient-text cursor-pointer flex gap-1 items-center"
              onClick={() => setShowThemeColors((prev) => !prev)}
            >
              <div className="flex justify-center items-center w-8">
                <RiColorFilterLine className="text-primary-1000 w-full h-full" />
              </div>
              <p className="hidden">Themes</p>
            </button>
            <div
              className={`absolute left-[50%] translate-x-[-50%] ${
                showThemeColors
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-0 pointer-events-none"
              } transition-all duration-300`}
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
