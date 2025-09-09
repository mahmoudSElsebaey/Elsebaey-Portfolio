// components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { GoSun } from "react-icons/go";
 
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`w-14 h-8 flex items-center rounded-full px-1 transition-colors duration-300 cursor-pointer ${
        isDark ? "bg-gray-800" : "bg-yellow-500"
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          isDark ? "translate-x-6 bg-gray-200" : "translate-x-0 bg-white"
        }`}
      >
        {isDark ? (
          <IoMoon size={16} className="text-primary-1000" />
        ) : (
          <GoSun size={16} className="text-primary-1000" />
        )}
      </div>
    </button>
  );
}
