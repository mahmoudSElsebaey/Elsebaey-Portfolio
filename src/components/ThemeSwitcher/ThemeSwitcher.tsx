
"use client";

import { useEffect, useRef, useState } from "react";
import { colorOptions } from "./colors";
 
export default function ThemeSwitcher() {
  const [activeColor, setActiveColor] = useState<string>("teal");
 
  const sidebarRef = useRef<HTMLDivElement>(null);

  const setPrimaryColor = (name: string, color: string) => {
    document.documentElement.style.setProperty("--color-primary", color);
    setActiveColor(name);
  };

  useEffect(() => {
    setPrimaryColor("gold", colorOptions.gold);
  }, []);

  return (
    <div
      ref={sidebarRef}
      className="grid grid-cols-6 mt-1.5 lg:grid-cols-4 gap-2 min-w-[180px] lg:min-w-[150px] py-2 px-3
       z-[99999] bg-primary-1000/30 rounded-[15px] border-x-4 border-primary-1000 backdrop-blur-md"
    >
      {Object.entries(colorOptions).map(([name, hex]) => {
        const isActive = activeColor === name;
        return (
          <button
            key={name}
            onClick={() => setPrimaryColor(name, hex)}
            className={`w-5 h-5 mx-auto rounded-full cursor-pointer transition-all duration-300
                        opacity-80 hover:opacity-100 
                        ${
                          isActive
                            ? "ring-1 ring-white ring-offset-1 scale-105"
                            : ""
                        }`}
            // title={name}
            style={{ backgroundColor: hex }}
          />
        );
      })}
    </div>
  );
}
 