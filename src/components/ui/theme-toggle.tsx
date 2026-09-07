"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-primary-1000/20 bg-primary-1000/5" />
    );
  }

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={cn(
        "relative w-10 h-10 rounded-full cursor-pointer",
        "flex items-center justify-center",
        "border border-primary-1000/25 bg-primary-1000/5",
        "hover:bg-primary-1000/15 hover:border-primary-1000/40",
        "transition-all duration-300 active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1000/40"
      )}
    >
      {/* Sun — visible in dark mode (click to go light) */}
      <Sun
        className={cn(
          "absolute h-[18px] w-[18px] text-primary-1000",
          "transition-all duration-500 ease-out",
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        )}
        strokeWidth={2}
      />

      {/* Moon — visible in light mode (click to go dark) */}
      <Moon
        className={cn(
          "absolute h-[18px] w-[18px] text-primary-1000",
          "transition-all duration-500 ease-out",
          isDark
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        )}
        strokeWidth={2}
      />
    </button>
  );
}
