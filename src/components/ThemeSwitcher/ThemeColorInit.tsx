"use client";

import { useEffect } from "react";
import { restoreThemeColor } from "./applyThemeColor";

/**
 * Invisible client component that restores the saved theme color
 * as soon as the app mounts (not only when the color panel opens).
 */
export default function ThemeColorInit() {
  useEffect(() => {
    restoreThemeColor();
  }, []);

  return null;
}
