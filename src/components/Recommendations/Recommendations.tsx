"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FaLinkedin, FaQuoteLeft } from "react-icons/fa";

const recommendations = [
  {
    name: "Ahmed Amer",
    role: "Professional Trainer & Educator | Founder of Apple 4 Academy",
    relation: "Was a mentor to Mahmoud",
    date: "Sep 2025",
    text: "Mahmoud was one of the most outstanding participants in the course. He showed strong commitment and eagerness to learn. His innovative ideas and quick application skills will make him an asset to any team.",
  },
  {
    name: "Mostafa Elabsawy",
    role: "Software Engineer | Full-Stack Web Developer | MEAN Stack",
    relation: "Studied together",
    date: "Sep 2025",
    text: "During the NTI MEAN Stack program, I had the opportunity to learn alongside Mahmoud Elsebaey. His passion for continuous learning and his noticeable progress throughout the program were truly inspiring. I have no doubt he will continue to grow and excel in the tech field.",
  },
  {
    name: "Osama Sayed",
    role: "Senior Surveyor",
    relation: "Worked on the same team",
    date: "Sep 2025",
    text: "I would like to highly recommend my study colleague who joined me in the MEAN Stack course. Throughout the course, he was an excellent example of dedication and active participation, always professional and respectful. I found him to be committed, writing clean and efficient code, with an organized mindset that helps in delivering practical solutions.",
  },
  {
    name: "Karim Helmy",
    role: "Software Engineer | MERN Stack Developer",
    relation: "Studied together",
    date: "Sep 2025",
    text: "I had the opportunity to take a course with Mahmoud, and I was impressed by his dedication and strong interest in learning. During the training, he demonstrated solid skills in full-stack web development and was always eager to practice and apply what he learned. Mahmoud also has a great collaborative attitude.",
  },
  {
    name: "Mohamed Elbastawisy",
    role: "Co-Founder of VulnCraft | MEAN Stack Developer",
    relation: "Studied together",
    date: "Sep 2025",
    text: "I had the pleasure of studying with Mahmoud Elsebaey during the MEAN Stack program at NTI. He consistently demonstrated strong technical skills in MongoDB, Express, Angular, and Node.js, along with excellent problem-solving abilities. What stood out most was his teamwork and commitment.",
  },
  {
    name: "Ahmed Ayman",
    role: "Developer",
    relation: "Worked on a project together",
    date: "Sep 2025",
    text: "I had the opportunity to work with Mahmoud Elsebaey as a developer during our project at NTI. He showed strong technical abilities, problem-solving skills, and a high level of commitment to delivering quality work. Mahmoud is also a great collaborator and always supported the team.",
  },
  {
    name: "Mohammed Elshahawy",
    role: "Backend Engineer (Node.js) | Express & NestJS",
    relation: "Worked on the same team",
    date: "Sep 2025",
    text: "I worked with Mahmoud Elsebaey during NTI’s MEAN Stack training. He showed strong skills in MongoDB, Express, Angular, and Node.js and was always collaborative. A dedicated and reliable developer who adds value to any team.",
  },
  {
    name: "Ahmed Elzahaby",
    role: "Entry-Level Full Stack Developer (MEAN)",
    relation: "Worked on the same team",
    date: "Sep 2025",
    text: "Mahmoud is one of the few people who combine strong technical skills with a collaborative spirit. He consistently delivers quality work, shares knowledge generously, and approaches every challenge with professionalism and creativity.",
  },
  {
    name: "Muhammed Amer",
    role: "Software Engineer | Ex-SWE Intern @ Huawei",
    relation: "Worked on the same team",
    date: "Sep 2025",
    text: "Mahmoud is a dedicated and talented professional who consistently goes the extra mile. He brings creativity, problem-solving skills, and a positive attitude to every project, making him a valuable teammate and a pleasure to work with.",
  },
];

function RecommendationCard({
  rec,
  expanded,
  onToggle,
}: {
  rec: (typeof recommendations)[0];
  expanded: boolean;
  onToggle: () => void;
}) {
  const isLong = rec.text.length > 150;

  return (
    <article
      className={[
        "h-full rounded-2xl border border-primary-1000/15",
        "bg-background/90 backdrop-blur-sm",
        "px-5 py-5 sm:px-6 sm:py-6",
        "transition-all duration-300",
        expanded
          ? "border-primary-1000/40 shadow-lg shadow-primary-1000/10"
          : "",
      ].join(" ")}
    >
      <FaQuoteLeft className="text-primary-1000/35 text-xl mb-3" />

      <p
        className={[
          "text-sm md:text-[15px] opacity-80 leading-relaxed",
          expanded ? "mb-4" : "mb-3 line-clamp-4",
        ].join(" ")}
      >
        {rec.text}
      </p>

      {isLong && (
        <button
          type="button"
          className="text-xs text-primary-1000 font-semibold mb-4 hover:underline relative z-20"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggle();
          }}
          onPointerDown={(e) => e.stopPropagation()}
        >
          {expanded ? "Show less" : "Read more..."}
        </button>
      )}

      <div className="flex items-center gap-3 pt-4 border-t border-primary-1000/10 mt-auto">
        <div className="w-10 h-10 rounded-full bg-primary-1000/15 border border-primary-1000/30 flex items-center justify-center text-primary-1000 font-bold text-sm shrink-0">
          {rec.name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-primary-1000 text-sm md:text-base truncate">
            {rec.name}
          </h4>
          <p className="text-xs opacity-55 line-clamp-1 leading-snug">{rec.role}</p>
          <p className="text-[11px] opacity-45 mt-0.5">
            {rec.relation} · {rec.date}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Recommendations() {
  const [expandedName, setExpandedName] = useState<string | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleToggle = (name: string) => {
    setExpandedName((prev) => {
      const next = prev === name ? null : name;

      // Pause autoplay while reading full text
      if (swiperRef.current?.autoplay) {
        if (next) {
          swiperRef.current.autoplay.stop();
        } else {
          swiperRef.current.autoplay.start();
        }
      }

      return next;
    });
  };

  return (
    <section className="py-6 md:py-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="recommendations-coverflow mx-auto mb-6 max-w-6xl">
          <Swiper
            modules={[Autoplay, EffectCoverflow, Pagination]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={1}
            spaceBetween={16}
            loop={recommendations.length >= 5}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={700}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: -20,
              depth: 180,
              modifier: 1.6,
              slideShadows: false,
            }}
            breakpoints={{
              // Mobile: 1 card
              0: {
                slidesPerView: 1,
                spaceBetween: 14,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 80,
                  modifier: 1,
                  slideShadows: false,
                },
              },
              // Tablet: 3 cards
              768: {
                slidesPerView: 3,
                spaceBetween: 18,
                coverflowEffect: {
                  rotate: 0,
                  stretch: -10,
                  depth: 140,
                  modifier: 1.4,
                  slideShadows: false,
                },
              },
              // Desktop: 5 cards
              1024: {
                slidesPerView: 5,
                spaceBetween: 16,
                coverflowEffect: {
                  rotate: 0,
                  stretch: -18,
                  depth: 200,
                  modifier: 1.7,
                  slideShadows: false,
                },
              },
            }}
            className="!pb-16"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={() => {
              setExpandedName(null);
              if (swiperRef.current?.autoplay) {
                swiperRef.current.autoplay.start();
              }
            }}
          >
            {recommendations.map((rec) => (
              <SwiperSlide key={rec.name} className="!h-auto">
                <RecommendationCard
                  rec={rec}
                  expanded={expandedName === rec.name}
                  onToggle={() => handleToggle(rec.name)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center">
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
      </div>

      <style jsx global>{`
        /* Progressive opacity + scale by distance from center */
        .recommendations-coverflow .swiper-slide {
          height: auto;
          transition: opacity 0.45s ease, transform 0.45s ease, filter 0.45s ease;
          opacity: 0.18;
          filter: blur(1px);
        }

        /* Outer sides (±2) — almost hidden */
        .recommendations-coverflow .swiper-slide-prev-prev,
        .recommendations-coverflow .swiper-slide-next-next {
          opacity: 0.22;
          filter: blur(0.8px);
        }

        /* Inner sides (±1) — 50% */
        .recommendations-coverflow .swiper-slide-prev,
        .recommendations-coverflow .swiper-slide-next {
          opacity: 0.5;
          filter: blur(0.3px);
        }

        /* Active center card — fully visible */
        .recommendations-coverflow .swiper-slide-active {
          opacity: 1 !important;
          filter: none !important;
          z-index: 5;
        }

        /* Creative pagination: ring + filled core */
        .recommendations-coverflow .swiper-pagination {
          bottom: 0 !important;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }

        .recommendations-coverflow .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          margin: 0 !important;
          background: transparent;
          border: 2px solid color-mix(in oklab, var(--color-primary-1000) 45%, transparent);
          opacity: 1;
          border-radius: 9999px;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
        }

        .recommendations-coverflow .swiper-pagination-bullet::after {
          content: "";
          position: absolute;
          inset: 2px;
          border-radius: 9999px;
          background: transparent;
          transition: background 0.35s ease, transform 0.35s ease;
        }

        .recommendations-coverflow .swiper-pagination-bullet-active {
          width: 28px;
          height: 10px;
          border-color: var(--color-primary-1000);
          background: color-mix(in oklab, var(--color-primary-1000) 20%, transparent);
          box-shadow: 0 0 12px color-mix(in oklab, var(--color-primary-1000) 35%, transparent);
        }

        .recommendations-coverflow .swiper-pagination-bullet-active::after {
          background: var(--color-primary-1000);
          inset: 2px 6px;
        }

        /* Neighbor bullets slightly stronger */
        .recommendations-coverflow .swiper-pagination-bullet:hover {
          border-color: var(--color-primary-1000);
          transform: scale(1.15);
        }

        /* Prevent side cards from stealing clicks */
        .recommendations-coverflow .swiper-slide:not(.swiper-slide-active) {
          pointer-events: none;
        }
        .recommendations-coverflow .swiper-slide-active {
          pointer-events: auto;
        }
      `}</style>
    </section>
  );
}
