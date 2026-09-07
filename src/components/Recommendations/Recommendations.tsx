"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaLinkedin, FaQuoteLeft } from "react-icons/fa";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

const recommendations = [
  {
    tempId: 0,
    testimonial:
      "Mahmoud was one of the most outstanding participants in the course. He showed strong commitment and eagerness to learn. His innovative ideas and quick application skills will make him an asset to any team.",
    by: "Ahmed Amer — Professional Trainer & Educator",
    initials: "AA",
  },
  {
    tempId: 1,
    testimonial:
      "During the NTI MEAN Stack program, I had the opportunity to learn alongside Mahmoud Elsebaey. His passion for continuous learning and his noticeable progress throughout the program were truly inspiring.",
    by: "Mostafa Elabsawy — Full-Stack Web Developer",
    initials: "ME",
  },
  {
    tempId: 2,
    testimonial:
      "Throughout the MEAN Stack course, he was an excellent example of dedication and active participation. Committed, writing clean and efficient code, with an organized mindset that helps in delivering practical solutions.",
    by: "Osama Sayed — Senior Surveyor",
    initials: "OS",
  },
  {
    tempId: 3,
    testimonial:
      "I was impressed by his dedication and strong interest in learning. He demonstrated solid skills in full-stack web development and has a great collaborative attitude, making him a supportive and reliable teammate.",
    by: "Karim Helmy — MERN Stack Developer",
    initials: "KH",
  },
  {
    tempId: 4,
    testimonial:
      "He consistently demonstrated strong technical skills in MongoDB, Express, Angular, and Node.js, along with excellent problem-solving abilities. What stood out most was his teamwork and commitment.",
    by: "Mohamed Elbastawisy — Co-Founder of VulnCraft",
    initials: "MB",
  },
  {
    tempId: 5,
    testimonial:
      "He showed strong technical abilities, problem-solving skills, and a high level of commitment to delivering quality work. Mahmoud is also a great collaborator and always supported the team.",
    by: "Ahmed Ayman — Developer",
    initials: "AY",
  },
  {
    tempId: 6,
    testimonial:
      "He showed strong skills in MongoDB, Express, Angular, and Node.js and was always collaborative. A dedicated and reliable developer who adds value to any team.",
    by: "Mohammed Elshahawy — Backend Engineer",
    initials: "MS",
  },
  {
    tempId: 7,
    testimonial:
      "Mahmoud is one of the few people who combine strong technical skills with a collaborative spirit. He consistently delivers quality work, shares knowledge generously, and approaches every challenge with professionalism.",
    by: "Ahmed Elzahaby — Full Stack Developer",
    initials: "AE",
  },
  {
    tempId: 8,
    testimonial:
      "Mahmoud is a dedicated and talented professional who consistently goes the extra mile. He brings creativity, problem-solving skills, and a positive attitude to every project.",
    by: "Muhammed Amer — Software Engineer",
    initials: "MA",
  },
];

type RecItem = (typeof recommendations)[0];

interface CardSize {
  width: number;
  height: number;
  isMobile: boolean;
}

interface TestimonialCardProps {
  position: number;
  testimonial: RecItem;
  handleMove: (steps: number) => void;
  size: CardSize;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  size,
}) => {
  const isCenter = position === 0;
  const { width, height, isMobile } = size;
  const corner = isMobile ? 28 : 50;
  const yOffset = isMobile ? (isCenter ? -40 : position % 2 ? 8 : -8) : isCenter ? -65 : position % 2 ? 15 : -15;
  const rotate = isMobile ? 0 : isCenter ? 0 : position % 2 ? 2.5 : -2.5;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 transition-all duration-500 ease-in-out",
        "flex flex-col",
        isMobile ? "p-4" : "p-6 sm:p-8",
        isCenter
          ? "z-10 bg-primary-1000 text-white border-primary-1000"
          : "z-0 bg-background text-foreground border-primary-1000/20 hover:border-primary-1000/50"
      )}
      style={{
        width,
        height,
        clipPath: `polygon(${corner}px 0%, calc(100% - ${corner}px) 0%, 100% ${corner}px, 100% 100%, calc(100% - ${corner}px) 100%, ${corner}px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(width / 1.5) * position}px)
          translateY(${yOffset}px)
          rotate(${rotate}deg)
          scale(${isCenter ? 1 : Math.max(0.78, 1 - Math.abs(position) * 0.07)})
        `,
        opacity: isCenter
          ? 1
          : Math.max(0.25, 1 - Math.abs(position) * 0.28),
        boxShadow: isCenter
          ? "0px 10px 0px 4px color-mix(in oklab, var(--color-primary-1000) 35%, transparent)"
          : "0px 0px 0px 0px transparent",
      }}
    >
      {/* Fold corner accent */}
      <span
        className={cn(
          "absolute block origin-top-right rotate-45",
          isCenter ? "bg-white/30" : "bg-primary-1000/25"
        )}
        style={{
          right: -2,
          top: corner - 2,
          width: SQRT_5000,
          height: 2,
        }}
      />

      {/* Avatar initials */}
      <div
        className={cn(
          "shrink-0 flex items-center justify-center font-bold",
          isMobile ? "mb-2 h-9 w-9 text-xs" : "mb-3 h-12 w-12 text-sm",
          isCenter
            ? "bg-white text-primary-1000"
            : "bg-primary-1000/15 text-primary-1000 border border-primary-1000/30"
        )}
        style={{
          boxShadow: isCenter
            ? "3px 3px 0px rgba(0,0,0,0.15)"
            : "3px 3px 0px color-mix(in oklab, var(--color-primary-1000) 20%, transparent)",
        }}
      >
        {testimonial.initials}
      </div>

      <FaQuoteLeft
        className={cn(
          "shrink-0",
          isMobile ? "mb-1.5 text-sm" : "mb-2 text-lg",
          isCenter ? "text-white/50" : "text-primary-1000/30"
        )}
      />

      {/* Quote text — grows and doesn't collide with footer */}
      <h3
        className={cn(
          "font-medium leading-relaxed flex-1 min-h-0 overflow-hidden",
          isMobile ? "text-[13px] line-clamp-6" : "text-sm sm:text-base line-clamp-5",
          isCenter ? "text-white" : "text-foreground"
        )}
      >
        &ldquo;{testimonial.testimonial}&rdquo;
      </h3>

      {/* Author — normal flow, no absolute positioning */}
      <p
        className={cn(
          "shrink-0 mt-3 pt-2 border-t italic",
          isMobile ? "text-[11px] line-clamp-2" : "text-xs sm:text-sm line-clamp-2",
          isCenter
            ? "text-white/80 border-white/20"
            : "opacity-60 border-primary-1000/10"
        )}
      >
        — {testimonial.by}
      </p>
    </div>
  );
};

export default function Recommendations() {
  const [size, setSize] = useState<CardSize>({
    width: 360,
    height: 360,
    isMobile: false,
  });
  const [list, setList] = useState(recommendations);

  const handleMove = (steps: number) => {
    if (steps === 0) return;
    const newList = [...list];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      if (w < 400) {
        // Small phones: wider-ish + taller so text + name fit
        setSize({ width: 280, height: 360, isMobile: true });
      } else if (w < 480) {
        setSize({ width: 300, height: 380, isMobile: true });
      } else if (w < 640) {
        setSize({ width: 320, height: 400, isMobile: true });
      } else if (w < 1024) {
        setSize({ width: 340, height: 360, isMobile: false });
      } else {
        setSize({ width: 360, height: 360, isMobile: false });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const id = setInterval(() => handleMove(1), 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  return (
    <section className="py-4 md:py-8 overflow-hidden">
      <div
        className="relative w-full overflow-hidden"
        style={{ height: size.height + (size.isMobile ? 120 : 180) }}
      >
        {list.map((item, index) => {
          const position =
            list.length % 2
              ? index - (list.length + 1) / 2
              : index - list.length / 2;

          return (
            <TestimonialCard
              key={item.tempId}
              testimonial={item}
              handleMove={handleMove}
              position={position}
              size={size}
            />
          );
        })}

        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-3 z-20">
          <button
            type="button"
            onClick={() => handleMove(-1)}
            className={cn(
              "flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center text-xl transition-all duration-300",
              "bg-background border-2 border-primary-1000/30 text-primary-1000",
              "hover:bg-primary-1000 hover:text-white hover:border-primary-1000",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1000/50",
              "active:scale-95"
            )}
            aria-label="Previous recommendation"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            type="button"
            onClick={() => handleMove(1)}
            className={cn(
              "flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center text-xl transition-all duration-300",
              "bg-background border-2 border-primary-1000/30 text-primary-1000",
              "hover:bg-primary-1000 hover:text-white hover:border-primary-1000",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1000/50",
              "active:scale-95"
            )}
            aria-label="Next recommendation"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>

      <div className="text-center mt-4">
        <a
          href="https://www.linkedin.com/in/mahmoudelsebaey999/details/recommendations/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary-1000 hover:underline opacity-75 hover:opacity-100 transition-opacity"
        >
          <FaLinkedin className="text-lg" />
          View all recommendations on LinkedIn
        </a>
      </div>
    </section>
  );
}
