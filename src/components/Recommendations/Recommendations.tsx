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

interface TestimonialCardProps {
  position: number;
  testimonial: RecItem;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 sm:p-8 transition-all duration-500 ease-in-out overflow-hidden",
        isCenter
          ? "z-10 bg-primary-1000 text-white border-primary-1000"
          : "z-0 bg-background text-foreground border-primary-1000/20 hover:border-primary-1000/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
          scale(${isCenter ? 1 : Math.max(0.72, 1 - Math.abs(position) * 0.08)})
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
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />

      {/* Avatar initials */}
      <div
        className={cn(
          "mb-4 h-12 w-12 flex items-center justify-center font-bold text-sm",
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
          "mb-2 text-lg",
          isCenter ? "text-white/50" : "text-primary-1000/30"
        )}
      />

      <h3
        className={cn(
          "text-sm sm:text-base font-medium leading-relaxed line-clamp-5",
          isCenter ? "text-white" : "text-foreground"
        )}
      >
        &ldquo;{testimonial.testimonial}&rdquo;
      </h3>

      <p
        className={cn(
          "absolute bottom-6 left-6 right-6 mt-2 text-xs sm:text-sm italic line-clamp-2",
          isCenter ? "text-white/80" : "opacity-60"
        )}
      >
        — {testimonial.by}
      </p>
    </div>
  );
};

export default function Recommendations() {
  const [cardSize, setCardSize] = useState(340);
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
      if (w < 480) setCardSize(260);
      else if (w < 640) setCardSize(290);
      else if (w < 1024) setCardSize(320);
      else setCardSize(360);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Auto-advance every 5s
  useEffect(() => {
    const id = setInterval(() => handleMove(1), 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  return (
    <section className="py-4 md:py-8 overflow-hidden">
      <div
        className="relative w-full overflow-hidden"
        style={{ height: cardSize + 180 }}
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
              cardSize={cardSize}
            />
          );
        })}

        {/* Nav buttons */}
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-3 z-20">
          <button
            type="button"
            onClick={() => handleMove(-1)}
            className={cn(
              "flex h-12 w-12 items-center justify-center text-xl transition-all duration-300",
              "bg-background border-2 border-primary-1000/30 text-primary-1000",
              "hover:bg-primary-1000 hover:text-white hover:border-primary-1000",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1000/50",
              "active:scale-95"
            )}
            aria-label="Previous recommendation"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => handleMove(1)}
            className={cn(
              "flex h-12 w-12 items-center justify-center text-xl transition-all duration-300",
              "bg-background border-2 border-primary-1000/30 text-primary-1000",
              "hover:bg-primary-1000 hover:text-white hover:border-primary-1000",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1000/50",
              "active:scale-95"
            )}
            aria-label="Next recommendation"
          >
            <ChevronRight className="h-6 w-6" />
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
