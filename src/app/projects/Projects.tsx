"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowUpRight, BsGithub, BsEye } from "react-icons/bs";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "./data";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Swiper as SwiperType } from "swiper";

export default function Projects() {
  const [project, setProject] = useState(projectsData[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    setProject(projectsData[swiper.realIndex]);
  };

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12">
          {/* ----------- Info ----------- */}
          <div className="w-full xl:w-[45%] flex flex-col gap-4 md:gap-5 order-2 xl:order-1">
            <div
              className="text-transparent text-outline text-5xl md:text-7xl xl:text-8xl font-extrabold leading-none"
              style={{ userSelect: "none" }}
            >
              {project.num}
            </div>

            <span className="text-primary-1000 text-xs md:text-sm uppercase tracking-widest">
              {project.category}
            </span>

            <Link
              href={`/projects/${project.slug}`}
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight hover:text-primary-1000 transition-colors"
            >
              {project.title}
            </Link>

            <p className="opacity-70 text-sm md:text-base leading-relaxed line-clamp-3">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-2">
              {project.tools.slice(0, 6).map((item, index) => (
                <li
                  key={index}
                  className="text-primary-1000 text-xs md:text-sm capitalize bg-primary-1000/20 px-2.5 py-1 rounded-full"
                >
                  {item.name}
                </li>
              ))}
              {project.tools.length > 6 && (
                <li className="text-primary-1000/70 text-xs md:text-sm px-2.5 py-1">
                  +{project.tools.length - 6}
                </li>
              )}
            </ul>

            <div className="h-px w-full bg-border" />

            <div className="flex items-center gap-3">
              <Link href={`/projects/${project.slug}`}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-1000 text-white flex justify-center items-center hover:opacity-90 transition-opacity">
                      <BsEye className="text-xl md:text-2xl" />
                    </TooltipTrigger>
                    <TooltipContent>View Details</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>

              {project.live && project.live !== "#" && (
                <Link href={project.live} target="_blank">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/10 dark:bg-white/10 flex justify-center items-center hover:text-primary-1000 transition-colors">
                        <BsArrowUpRight className="text-xl md:text-2xl" />
                      </TooltipTrigger>
                      <TooltipContent>Live Project</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              )}

              {project.github && (
                <Link href={project.github} target="_blank">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/10 dark:bg-white/10 flex justify-center items-center hover:text-primary-1000 transition-colors">
                        <BsGithub className="text-xl md:text-2xl" />
                      </TooltipTrigger>
                      <TooltipContent>Github Repo</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              )}
            </div>
          </div>

          {/* ----------- Swiper ----------- */}
          <div className="w-full xl:w-[55%] order-1 xl:order-2">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              loop
              speed={700}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation
              onSlideChange={handleSlideChange}
              className="projects-swiper !pb-12"
            >
              {projectsData.map((proj, index) => (
                <SwiperSlide key={proj.slug}>
                  <Link
                    href={`/projects/${proj.slug}`}
                    className="relative block w-full aspect-[16/11] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-primary-1000/15 bg-primary-1000/5"
                  >
                    <Image
                      src={proj.image}
                      fill
                      alt={proj.title}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 55vw"
                      quality={75}
                      priority={index === 0}
                      className="object-contain p-2 sm:p-4"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="w-full flex justify-center mt-6 md:mt-10">
          <div className="btn-cv relative p-[2px] overflow-hidden rounded-full">
            <Link href="/projects" className="inline-block">
              <Button
                size="lg"
                className="uppercase cursor-pointer bg-primary-1000 hover:bg-primary-1000 text-white
                     rounded-full border border-primary-1000 transition-all duration-300 py-6 px-7 text-sm md:text-base"
              >
                view all projects
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .projects-swiper .swiper-button-prev,
        .projects-swiper .swiper-button-next {
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          background: color-mix(in oklab, var(--color-primary-1000) 85%, transparent);
          color: white;
          top: auto;
          bottom: 0;
          margin-top: 0;
        }
        .projects-swiper .swiper-button-prev {
          left: 0;
        }
        .projects-swiper .swiper-button-next {
          right: 0;
        }
        .projects-swiper .swiper-button-prev::after,
        .projects-swiper .swiper-button-next::after {
          font-size: 14px;
          font-weight: 700;
        }
        .projects-swiper .swiper-pagination-bullet {
          background: var(--color-primary-1000);
          opacity: 0.35;
        }
        .projects-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        @media (max-width: 640px) {
          .projects-swiper .swiper-button-prev,
          .projects-swiper .swiper-button-next {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
