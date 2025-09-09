"use client";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "../ui/theme-toggle";
import Image from "next/image";
import logo from "./../../../public/assets/logo-r.png";
import { Nav } from "../Nav/Nav";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Link from "next/link";

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
      className={`px-2 md:px-5 flex justify-between items-center sticky top-0 z-9999 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? "py-2 xl:py-2 px-3 md:px-10 header" : "py-4 xl:py-6"
      }`}
    >
      {/* logo */}
      <div
        className="relative flex justify-center items-center"
        title="Mahmoud Elsebaey "
      >
        <Link href="/" className="cursor-pointer">
          <Image
            src={logo}
            width={100}
            height={100}
            className="w-22 h-16"
            alt="logo"
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center xl:translate-x-[70px]">
        <Nav />
      </div>

      <div className="flex justify-between items-center gap-3 ">
        {/* Theme Switcher for colors */}
        <div className="flex justify-center items-center " ref={themeRef}>
          <div className="relative group ">
            <button
              className="text-[22px] font-extrabold btn-colors gradient-text cursor-pointer flex gap-1 items-center"
              onClick={() => setShowThemeColors((prev) => !prev)}
            >
              {/* Theme color indicator */}
              <div className="flex justify-center items-center w-6">
                <span className="w-6 h-6 bg-primary-1000 block rounded-full"></span>
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
        {/* Theme Toggle */}
        <div className="order-1">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
