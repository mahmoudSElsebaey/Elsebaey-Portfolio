"use client"; 

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "2px",
        // background: "linear-gradient(to right, #00f, #0ff)",
        width: `${scroll}%`,
        zIndex: 9999,
        transition: "width 0.1s ease-out"
      }}
      className="bg-gradient-to-r from-primary-1000/30 to-primary-1000"
    />
  );
}
