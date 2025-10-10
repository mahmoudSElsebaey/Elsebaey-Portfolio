"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
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
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

interface SwiperInstance {
  activeIndex: number;
}

export default function Projects() {
  const [project, setProject] = useState(projectsData[0]);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const handleSlideChange = (swiper: SwiperInstance): void => {
    const currentIndex = swiper.activeIndex;
    setProject(projectsData[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-80vh flex flex-col py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          {/* ----------- Left Side [Project Info] ----------- */}
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col gap-[25px]"
            data-aos="zoom-in"
          >
            <div
              className="text-transparent text-outline text-8xl font-extrabold"
              data-aos="zoom-in"
              style={{ userSelect: "none" }}
            >
              {project.num}
            </div>
            <div
              className="text-[42px] font-bold leading-none"
              data-aos="zoom-in"
            >
              {project.title}
            </div>
            <p className="opacity-70" data-aos="zoom-in">
              {project.description}
            </p>
            {/* project Tools*/}
            <ul className="flex flex-wrap gap-2" data-aos="zoom-in">
              {project.tools.map((item, index) => (
                <li
                  key={index}
                  className="text-primary-1000 capitalize bg-primary-1000/20 px-3 rounded-[14px]"
                  data-aos="zoom-in"
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <div className="border" data-aos="zoom-in"></div>
            <div className="flex gap-4" data-aos="zoom-in">
              {/*Live Project */}
              <Link href={project.live} target="_blank" data-aos="zoom-in">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/10 dark:bg-white/10 flex justify-center items-center cursor-pointer group">
                      <BsArrowUpRight className="text-3xl group-hover:text-primary-1000 transition-all animate-pulse" />
                    </TooltipTrigger>
                    <TooltipContent>Live Project</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/*Github Repo */}
              <Link href={project.github} target="_blank" data-aos="zoom-in">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/10 dark:bg-white/10 flex justify-center items-center cursor-pointer group">
                      <BsGithub className="text-3xl group-hover:text-primary-1000 transition-all animate-pulse" />
                    </TooltipTrigger>
                    <TooltipContent>Github Repo</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>

          {/* ----------- Right Side [Swiper] ----------- */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              data-aos="zoom-in"
            >
              {projectsData.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div
                    className="h-[460px] relative flex justify-center items-center group cursor-pointer"
                    onClick={() => setFullscreenImage(project.image)}
                    data-aos="zoom-in"
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 z-10 flex justify-end items-start p-2">
                      <div className="project-category w-fit p-[2px] rounded-br-[13px] rounded-tl-[13px] overflow-hidden">
                        <h3 className="bg-primary-1000 w-fit p-3 rounded-br-[13px] rounded-tl-[13px]">
                          {project.category}
                        </h3>
                      </div>
                    </div>
                    {/* image */}
                    <div className="relative w-full h-full z-0">
                      <Image
                        src={project.image}
                        fill
                        alt={project.title}
                        // className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex absolute gap-3 right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-primary-1000 hover:bg-primary-1000/90 text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all cursor-pointer"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>

      {/* ----------- Fullscreen Image Modal ----------- */}
      {fullscreenImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-100000"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="relative w-[96vw] h-[90vh] ">
            <Image
              src={fullscreenImage}
              fill
              alt="Fullscreen Project"
              className="object-contain rounded-xl"
            />
          </div>
        </motion.div>
      )}
    </motion.section>
  );
}
