import { colorOptions, DEFAULT_COLOR } from "./colors";

export const STORAGE_NAME = "selectedColor";
export const STORAGE_CUSTOM = "customColor";
export const CUSTOM_KEY = "custom";

/** Apply primary accent to the document root (Tailwind primary-1000 uses --color-primary). */
export function applyThemeColor(hex: string) {
  if (typeof document === "undefined") return;
  document.documentElement.style.setProperty("--color-primary", hex);
  document.documentElement.style.setProperty("--color-primary-1000", hex);
}

/** Read localStorage and restore the last chosen color. Returns { name, hex }. */
export function restoreThemeColor(): { name: string; hex: string } {
  if (typeof window === "undefined") {
    return { name: DEFAULT_COLOR, hex: colorOptions[DEFAULT_COLOR] };
  }

  const savedName = localStorage.getItem(STORAGE_NAME);
  const savedCustom = localStorage.getItem(STORAGE_CUSTOM);

  if (savedName === CUSTOM_KEY && savedCustom && /^#[0-9A-Fa-f]{6}$/.test(savedCustom)) {
    applyThemeColor(savedCustom);
    return { name: CUSTOM_KEY, hex: savedCustom };
  }

  if (savedName && colorOptions[savedName]) {
    applyThemeColor(colorOptions[savedName]);
    return { name: savedName, hex: colorOptions[savedName] };
  }

  applyThemeColor(colorOptions[DEFAULT_COLOR]);
  return { name: DEFAULT_COLOR, hex: colorOptions[DEFAULT_COLOR] };
}

export function persistThemeColor(name: string, hex: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_NAME, name);
  if (name === CUSTOM_KEY) {
    localStorage.setItem(STORAGE_CUSTOM, hex);
  }
}
