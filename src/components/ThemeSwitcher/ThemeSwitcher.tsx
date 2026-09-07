"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { colorOptions, colorLabels, DEFAULT_COLOR } from "./colors";

const CUSTOM_KEY = "custom";
const STORAGE_NAME = "selectedColor";
const STORAGE_CUSTOM = "customColor";

export default function ThemeSwitcher() {
  const [activeColor, setActiveColor] = useState<string>(DEFAULT_COLOR);
  const [customHex, setCustomHex] = useState<string>("#7C3AED");
  const colorInputRef = useRef<HTMLInputElement>(null);

  const applyColor = (name: string, hex: string) => {
    document.documentElement.style.setProperty("--color-primary", hex);
    document.documentElement.style.setProperty("--color-primary-1000", hex);
    setActiveColor(name);
    localStorage.setItem(STORAGE_NAME, name);
    if (name === CUSTOM_KEY) {
      localStorage.setItem(STORAGE_CUSTOM, hex);
      setCustomHex(hex);
    }
  };

  useEffect(() => {
    const savedName = localStorage.getItem(STORAGE_NAME);
    const savedCustom = localStorage.getItem(STORAGE_CUSTOM);

    if (savedCustom) setCustomHex(savedCustom);

    if (savedName === CUSTOM_KEY && savedCustom) {
      applyColor(CUSTOM_KEY, savedCustom);
    } else if (savedName && colorOptions[savedName]) {
      applyColor(savedName, colorOptions[savedName]);
    } else {
      applyColor(DEFAULT_COLOR, colorOptions[DEFAULT_COLOR]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCustomChange = (hex: string) => {
    if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) return;
    applyColor(CUSTOM_KEY, hex);
  };

  return (
    <div
      className="w-full box-border p-3 rounded-2xl
        border border-primary-1000/30 bg-background/95 backdrop-blur-md shadow-lg shadow-black/10"
    >
      <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-1000/70 mb-2.5 px-0.5">
        Theme color
      </p>

      <div className="grid grid-cols-4 gap-2.5 mb-3">
        {Object.entries(colorOptions).map(([name, hex]) => {
          const isActive = activeColor === name;
          return (
            <button
              key={name}
              type="button"
              onClick={() => applyColor(name, hex)}
              title={colorLabels[name] ?? name}
              aria-label={colorLabels[name] ?? name}
              className={`relative w-9 h-9 mx-auto rounded-full cursor-pointer transition-all duration-300
                hover:scale-110 hover:opacity-100
                ${isActive ? "ring-2 ring-offset-2 ring-offset-background scale-105 opacity-100" : "opacity-85"}`}
              style={{
                backgroundColor: hex,
                // @ts-expect-error CSS custom property for ring color
                "--tw-ring-color": hex,
              }}
            >
              {isActive && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-white shadow-sm" />
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="pt-2.5 border-t border-primary-1000/15">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-1000/70 mb-2 px-0.5">
          Custom color
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => colorInputRef.current?.click()}
            title="Pick a custom color"
            aria-label="Pick a custom color"
            className={`relative w-9 h-9 rounded-full cursor-pointer transition-all duration-300 shrink-0
              border-2 border-dashed border-primary-1000/40 hover:border-primary-1000
              flex items-center justify-center overflow-hidden
              ${activeColor === CUSTOM_KEY ? "ring-2 ring-offset-2 ring-offset-background scale-105" : ""}`}
            style={{
              background:
                activeColor === CUSTOM_KEY
                  ? customHex
                  : `conic-gradient(from 0deg, #C6A15B, #0D9488, #6366F1, #D946EF, #F43F5E, #84CC16, #22D3EE, #FB7185, #C6A15B)`,
              // @ts-expect-error CSS custom property for ring color
              "--tw-ring-color": customHex,
            }}
          >
            {activeColor !== CUSTOM_KEY && (
              <span className="absolute inset-[3px] rounded-full bg-background/90 flex items-center justify-center">
                <Plus className="w-3.5 h-3.5 text-primary-1000" />
              </span>
            )}
          </button>

          <input
            ref={colorInputRef}
            type="color"
            value={customHex}
            onChange={(e) => onCustomChange(e.target.value)}
            className="sr-only"
            tabIndex={-1}
            aria-hidden
          />

          <input
            type="text"
            value={customHex.toUpperCase()}
            onChange={(e) => {
              let v = e.target.value.trim();
              if (!v.startsWith("#")) v = `#${v}`;
              if (v.length <= 7) {
                setCustomHex(v);
                if (/^#[0-9A-Fa-f]{6}$/.test(v)) onCustomChange(v);
              }
            }}
            spellCheck={false}
            className="flex-1 min-w-0 h-9 px-2.5 rounded-lg border border-primary-1000/20 bg-background/60
              text-xs font-mono tracking-wider outline-none
              focus:border-primary-1000/50 focus:ring-1 focus:ring-primary-1000/30"
            placeholder="#7C3AED"
            aria-label="Custom hex color"
          />
        </div>
      </div>
    </div>
  );
}
