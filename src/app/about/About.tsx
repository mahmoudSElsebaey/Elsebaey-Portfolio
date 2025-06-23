"use client";

// import data
import { about, education, certificates, skills } from "./data";
import { motion } from "framer-motion";
import { TabsList, TabsTrigger, Tabs, TabsContent } from "@/components/ui/tabs";
// import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
// import Image from "next/image";

import { TbCertificate } from "react-icons/tb";
import { GrOrganization } from "react-icons/gr";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function Resume() {
  return (
    <section className="mt-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
        className="flex justify-center items-center xl:py-0"
      >
        <div className="container mx-auto ">
          <Tabs defaultValue="about" className="flex flex-col gap-10">
            <TabsList className=" flex items-center justify-center gap-0 md:gap-4 xl:gap-10 ">
              <TabsTrigger value="about" className="rounded-r-none">
                about me
              </TabsTrigger>
              <TabsTrigger value="education" className="rounded-none">
                education
              </TabsTrigger>
              <TabsTrigger value="certificates" className="rounded-none">
                certificates
              </TabsTrigger>
              <TabsTrigger value="skills" className="rounded-l-none">
                skills
              </TabsTrigger>
            </TabsList>
            <div className="w-full ">
              {/* About section */}
              <TabsContent value="about" className="w-full">
                <div className="flex flex-col text-center gap-8 md:text-left">
                  <div className="flex flex-col gap-4 ">
                    <h3 className="text-4xl md:text-5xl font-bold text-primary-1000">
                      {about.title}
                    </h3>
                    <p className="opacity-70 mx-auto xl:mx-auto leading-7">
                      {about.description}
                    </p>
                  </div>
                  {/* <ScrollArea className="h-[400px] transition-all"> */}
                  <ul className="grid grid-cols-1 md:grid-cols-2 w-full text-base sm:text-xl leading-[2] mx-auto md:mx-0 ">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center w-[80%] m-auto md:w-full gap-2"
                        >
                          <span className="text-primary-1000">
                            {item.fieldName}
                          </span>
                          <span className=" animate-pulse ">
                          {item.fieldValue}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  {/* </ScrollArea> */}
                </div>
              </TabsContent>

              {/* Education Section */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col text-center gap-8 lg:text-left">
                  <div className="flex flex-col gap-4 ">
                    <h3 className="text-4xl md:text-5xl font-bold text-primary-1000">
                      {education.title}
                    </h3>
                    <p className="opacity-70 mx-auto md:mx-0 ">
                      {education.description}
                    </p>
                  </div>
                  {/* <ScrollArea className="h-[400px] transition-all"> */}
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mx-5 md:mx-0">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="dark:bg-primary-1000/10 bg-primary-1000/40 flex flex-col justify-center items-center
                           h-[180px] rounded-lg lg:items-start px-10"
                        >
                          <span className="text-primary-1000 ">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.institution}
                          </h3>
                          <div className=" flex justify-center items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary-1000 block animate-pulse"></span>
                            <p className="opacity-50">{item.degree}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  {/* </ScrollArea> */}
                </div>
              </TabsContent>

              {/* certificates Section */}
              <TabsContent value="certificates" className="w-full">
                <div className="flex flex-col text-center gap-8 xl:gap-8 lg:text-left">
                  <div className="w-full flex flex-col gap-4 ">
                    <h3 className="text-4xl md:text-5xl  font-bold text-primary-1000">
                      {certificates.title}
                    </h3>
                    <p className="opacity-70 mx-auto md:mx-0  ">
                      {certificates.description}
                    </p>
                  </div>
                  {/* certificates items */}
                  <div className="">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {certificates.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="flex flex-col gap-4 px-10 py-5 justify-center items-center
                             dark:bg-primary-1000/10 bg-primary-1000/40 rounded-lg"
                          >
                            {/* Text information */}
                            <div className="w-full ">
                              <p className="text-primary-1000 text-center">
                                {item.date}
                              </p>
                              <p className="font-bold text-2xl">{item.title}</p>
                              {/* icons */}
                              <div className="flex flex-wrap justify-between my-3">
                                <div className="flex gap-2 justify-center items-center xl:justify-start">
                                  <TbCertificate className="text-primary-1000 animate-pulse" />
                                  <p>{item.type}</p>
                                </div>
                                <div className="flex gap-2 justify-center items-center xl:justify-start">
                                  <GrOrganization className="text-primary-1000 animate-pulse" />
                                  <p>{item.source}</p>
                                </div>
                              </div>
                              <p className="opacity-50 text-sm">
                                {item.details}
                              </p>
                            </div>
                            {/* Link */}
                            <div className="">
                              <Link
                                href={item.link} target="_blank"
                                className="flex justify-center items-center gap-4 border border-primary-1000 py-3 px-6 rounded-lg
                                 text-primary-1000 font-bold hover:bg-primary-1000 group hover:text-white transition-all duration-300"
                              >
                                Show Certificate
                                <FaExternalLinkAlt className="group-hover:text-[22px] transition-all duration-300" />
                              </Link>
                            </div>
                            {/* images */}
                            {/* <div className="w-[95%] h-full mx-auto xl:w-[50%] rounded-lg overflow-hidden ">
                              <Image
                                src={item.image}
                                width={500}
                                height={500}
                                alt={item.title}
                                className="w-full h-full hover:scale-[1.2] transition-all duration-700 "
                              />
                            </div> */}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              {/* skills Section */}
              <TabsContent value="skills" className="w-full">
                <div className="flex flex-col text-center gap-8 lg:text-left">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-4xl md:text-5xl font-bold text-primary-1000">
                      {skills.title}
                    </h3>
                    <p className="opacity-70 mx-auto md:mx-0  ">
                      {skills.description}
                    </p>
                  </div>
                  {/* <ScrollArea className="h-[400px] transition-all"> */}
                  <div className="">
                    <ul className="flex flex-col gap-[40px]">
                      {skills.sections.map((sec, index) => {
                        return (
                          <li key={index}>
                            <h3 className="text-primary-1000 text-[18px] sm:text-2xl font-bold mb-5 text-left flex items-center border gap-0">
                              <span className="text-outline text-transparent animate-pulse text-2xl sm:text-3xl pr-4">
                                0{index + 1} 
                              </span>
                              {sec.title}
                            </h3>
                            <div className="">
                              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px]">
                                {sec.items.map((item, i) => {
                                  return (
                                    <li key={i}>
                                      <TooltipProvider>
                                        <Tooltip>
                                          <TooltipTrigger>
                                            <div className="text-5xl sm:text-6xl transition-all">
                                              {item.icon}
                                            </div>
                                          </TooltipTrigger>
                                          <TooltipContent>
                                            <p className="text-accent font-bold">
                                              {item.name}
                                            </p>
                                          </TooltipContent>
                                        </Tooltip>
                                      </TooltipProvider>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {/* </ScrollArea> */}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </section>
  );
}
