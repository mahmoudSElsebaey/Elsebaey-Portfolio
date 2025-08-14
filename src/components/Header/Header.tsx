"use client";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "../ui/theme-toggle";
import Image from "next/image";
import logo from "./../../../public/assets/me-removebg-preview.png";
import { Nav } from "../Nav/Nav";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import ScrollProgressBar from "../ScrollProgressBar/ScrollProgressBar";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showThemeColors, setShowThemeColors] = useState(false);
  const themeRef = useRef<HTMLDivElement>(null); // Reference to the theme toggle container

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
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
      className={`px-5 flex justify-between items-center sticky top-0 z-9999 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? "py-2 xl:py-2 px-10 header" : "py-4 xl:py-6"
      }`}
    >
          <ScrollProgressBar />
      {/* logo */}
      <div className="relative flex justify-center items-center">
        <Image src={logo} width={90} alt="logo" />
        <div className="absolute w-[70%] h-[70%] rounded-full bg-primary-1000 top-[12%] z-[-5] opacity-60"></div>
        <div className="absolute w-[75%] h-[77%] rounded-full bg-primary-1000 top-[12%] opacity-20"></div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center xl:translate-x-[70px]">
        <Nav />
      </div>

      {/* Theme Switcher */}
      <div className="flex justify-center items-center xl:translate-x-[75px] " ref={themeRef}>
        <div className="relative group ">
          <button
            className="text-[22px] font-extrabold btn-colors gradient-text cursor-pointer flex gap-1 items-center"
            onClick={() => setShowThemeColors((prev) => !prev)}
          >
            <span className="w-3 h-3 bg-primary-1000 block rounded-full transition-all duration-500 group-hover:h-6"></span>
            Themes
          </button>

          <div
            className={`absolute left-[50%] translate-x-[-50%] ${
              showThemeColors ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
            } transition-all duration-300`}
          >
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      {/* Theme Toggle */}
      <div>
        <ThemeToggle />
      </div>
    </header>
  );
}
