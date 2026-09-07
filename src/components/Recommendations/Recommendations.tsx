"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteLeft, FaLinkedin } from "react-icons/fa";

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

export default function Recommendations() {
  return (
    <section className="container mx-auto px-4 py-6 md:py-10">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop
        speed={700}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1.15, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 2.4, spaceBetween: 24 },
          1280: { slidesPerView: 3, spaceBetween: 24 },
        }}
        className="recommendations-swiper !pb-14"
      >
        {recommendations.map((rec) => (
          <SwiperSlide key={rec.name} className="!h-auto">
            <article className="h-full flex flex-col rounded-2xl border border-primary-1000/20 bg-primary-1000/5 p-5 md:p-6 transition-all duration-300 hover:border-primary-1000/45 hover:bg-primary-1000/10 hover:shadow-lg hover:shadow-primary-1000/10">
              <FaQuoteLeft className="text-primary-1000/40 text-2xl mb-3 shrink-0" />

              <p className="text-sm md:text-[15px] opacity-80 leading-relaxed flex-1 mb-5 line-clamp-6">
                {rec.text}
              </p>

              <div className="mt-auto pt-4 border-t border-primary-1000/15">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary-1000/20 border border-primary-1000/40 flex items-center justify-center text-primary-1000 font-bold text-sm shrink-0">
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
                    <p className="text-xs opacity-60 line-clamp-2 leading-snug">
                      {rec.role}
                    </p>
                    <p className="text-[11px] opacity-50 mt-1">
                      {rec.relation} · {rec.date}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-2 text-center" data-aos="fade-up">
        <a
          href="https://www.linkedin.com/in/mahmoudelsebaey999/details/recommendations/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary-1000 hover:underline opacity-80 hover:opacity-100 transition-opacity"
        >
          <FaLinkedin className="text-lg" />
          View all recommendations on LinkedIn
        </a>
      </div>

      <style jsx global>{`
        .recommendations-swiper .swiper-button-prev,
        .recommendations-swiper .swiper-button-next {
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          background: color-mix(
            in oklab,
            var(--color-primary-1000) 85%,
            transparent
          );
          color: white;
          top: auto;
          bottom: 0;
          margin-top: 0;
        }
        .recommendations-swiper .swiper-button-prev {
          left: 0;
        }
        .recommendations-swiper .swiper-button-next {
          right: 0;
        }
        .recommendations-swiper .swiper-button-prev::after,
        .recommendations-swiper .swiper-button-next::after {
          font-size: 14px;
          font-weight: 700;
        }
        .recommendations-swiper .swiper-pagination-bullet {
          background: var(--color-primary-1000);
          opacity: 0.35;
        }
        .recommendations-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .recommendations-swiper .swiper-slide {
          height: auto;
        }
        @media (max-width: 640px) {
          .recommendations-swiper .swiper-button-prev,
          .recommendations-swiper .swiper-button-next {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
