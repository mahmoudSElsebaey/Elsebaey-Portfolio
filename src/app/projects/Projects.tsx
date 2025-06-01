
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
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col gap-[25px] order-2 xl:order-none ">
            {/* project Number */}
            <div className="text-transparent text-outline text-8xl font-extrabold">
              {project.num}
            </div>
            {/* project Category*/}
            <div className="text-[42px] font-bold leading-none ">
              {project.title}
            </div>
            {/* project Desription*/}
            <p className="opacity-70">{project.description}</p>
            {/* project Tools*/}
            <ul className="flex flex-wrap gap-2">
              {project.tools.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="text-primary-1000 capitalize bg-primary-1000/20 px-3 rounded-[14px] "
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
            {/* Border */}
            <div className="border"></div>
            {/* Links Buttons */}
            <div className="flex gap-4">
              {/*Live Project */}
              <Link href={project.live} target="_blank">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger
                      className="w-[70px] h-[70px] rounded-full  bg-black/10 dark:bg-white/10
                     flex justify-center items-center  cursor-pointer group"
                    >
                      <BsArrowUpRight className="text-3xl group-hover:text-primary-1000 transition-all animate-pulse" />
                    </TooltipTrigger>
                    <TooltipContent>Live Project</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/*Github Repo */}
              <Link href={project.github} target="_blank">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger
                      className="w-[70px] h-[70px] rounded-full bg-black/10 dark:bg-white/10
                     flex justify-center items-center cursor-pointer group"
                    >
                      <BsGithub className="text-3xl group-hover:text-primary-1000 transition-all animate-pulse" />
                    </TooltipTrigger>
                    <TooltipContent>Github Repo</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          {/* Swiper Slides */}
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projectsData.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative flex justify-center items-center group ">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/40 hover:bg-black/20 transition-all duration-300 z-10">
                        <div className="project-category w-fit p-[2px] m-2 ml-auto  rounded-br-[13px] rounded-tl-[13px] overflow-hidden">
                          <h3 className="bg-primary-1000 w-fit p-3 rounded-br-[13px] rounded-tl-[13px]">
                            {project.category}
                          </h3>
                        </div>
                      </div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          // className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex absolute gap-3 right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-primary-1000 hover:bg-primary-1000/90 text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all cursor-pointer"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
