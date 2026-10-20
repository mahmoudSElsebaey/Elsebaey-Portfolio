"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
};

/**
 * Soft glowing mouse trail that follows the pointer.
 * Uses the site primary accent color, desktop-only, respects reduced-motion.
 */
export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Skip touch devices and reduced-motion preferences
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isTouch || prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;

    const mouse = { x: -9999, y: -9999, px: -9999, py: -9999 };
    const particles: Particle[] = [];
    const MAX_PARTICLES = 48;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const getAccent = () => {
      const styles = getComputedStyle(document.documentElement);
      return (
        styles.getPropertyValue("--color-primary-1000").trim() ||
        styles.getPropertyValue("--color-primary").trim() ||
        "#C6A15B"
      );
    };

    /** Parse #rgb / #rrggbb / rgb() into r,g,b */
    const parseColor = (raw: string): [number, number, number] => {
      const hex = raw.trim();
      if (hex.startsWith("#")) {
        const h = hex.slice(1);
        if (h.length === 3) {
          return [
            parseInt(h[0] + h[0], 16),
            parseInt(h[1] + h[1], 16),
            parseInt(h[2] + h[2], 16),
          ];
        }
        if (h.length >= 6) {
          return [
            parseInt(h.slice(0, 2), 16),
            parseInt(h.slice(2, 4), 16),
            parseInt(h.slice(4, 6), 16),
          ];
        }
      }
      const m = hex.match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
      if (m) return [+m[1], +m[2], +m[3]];
      return [198, 161, 91]; // gold fallback
    };

    let rgb = parseColor(getAccent());

    // Watch CSS variable changes (theme switcher)
    const colorObserver = new MutationObserver(() => {
      rgb = parseColor(getAccent());
    });
    colorObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    const spawn = (x: number, y: number, speed: number) => {
      if (particles.length >= MAX_PARTICLES) particles.shift();
      const angle = Math.random() * Math.PI * 2;
      const spread = 0.35 + Math.random() * 0.55;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * spread * (0.2 + speed * 0.08),
        vy: Math.sin(angle) * spread * (0.2 + speed * 0.08) - 0.15,
        life: 1,
        maxLife: 0.55 + Math.random() * 0.55,
        size: 3 + Math.random() * 7 + speed * 0.15,
      });
    };

    const onMove = (e: MouseEvent) => {
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const dx = mouse.x - mouse.px;
      const dy = mouse.y - mouse.py;
      const speed = Math.min(28, Math.hypot(dx, dy));

      // denser trail when moving faster
      const count = speed > 2 ? 1 + Math.floor(speed / 10) : 0;
      for (let i = 0; i < count; i++) {
        const t = (i + 1) / (count + 1);
        spawn(mouse.x - dx * t, mouse.y - dy * t, speed);
      }
      // soft ambient particle at cursor
      if (speed > 0.5) spawn(mouse.x, mouse.y, speed * 0.5);
    };

    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      // soft cursor glow (cloud core)
      if (mouse.x > 0) {
        const core = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          42,
        );
        core.addColorStop(0, `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.18)`);
        core.addColorStop(0.45, `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.06)`);
        core.addColorStop(1, `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0)`);
        ctx.fillStyle = core;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 42, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.life -= 0.016 / p.maxLife;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = p.life * p.life * 0.55;
        const r = p.size * (0.5 + p.life * 0.5);

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        g.addColorStop(0, `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`);
        g.addColorStop(
          0.4,
          `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha * 0.35})`,
        );
        g.addColorStop(1, `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0)`);

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      colorObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[40] hidden md:block"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
