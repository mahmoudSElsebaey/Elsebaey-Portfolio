"use client";

import { motion } from "framer-motion";
import { TabsList, TabsTrigger, Tabs, TabsContent } from "@/components/ui/tabs";
import { FaGraduationCap, FaQuoteLeft } from "react-icons/fa";
import Skills from "./skills";
import AboutMe from "./aboutMe";
import MyJourney from "./myJourney";
import Recommendations from "@/components/Recommendations/Recommendations";
import { MdSettingsSuggest } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";

export default function Resume() {
  return (
    <section className="mt-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.05,
            duration: 0.35,
            ease: "easeOut",
          },
        }}
        className="flex justify-center items-center xl:py-0"
      >
        <div className="container mx-auto px-2 sm:px-4">
          <Tabs
            defaultValue="myJourney"
            className="flex flex-col gap-6 sm:gap-10"
            data-aos="fade-up"
          >
            <TabsList className="w-full max-w-4xl mx-auto flex items-center justify-between sm:justify-around gap-1 sm:gap-2 overflow-x-auto no-scrollbar p-1">
              <TabsTrigger
                value="myJourney"
                className="flex-1 min-w-0 rounded-none flex gap-1.5 sm:gap-2 items-center justify-center text-[11px] sm:text-sm md:text-base px-1 sm:px-2"
              >
                <FaGraduationCap className="hidden sm:block text-xl md:text-2xl shrink-0" />
                <span className="text-black dark:text-white truncate">My Journey</span>
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="flex-1 min-w-0 rounded-none flex gap-1.5 sm:gap-2 items-center justify-center text-[11px] sm:text-sm md:text-base px-1 sm:px-2"
              >
                <MdSettingsSuggest className="hidden sm:block text-xl md:text-2xl shrink-0" />
                <span className="text-black dark:text-white truncate">Skills</span>
              </TabsTrigger>
              <TabsTrigger
                value="about"
                className="flex-1 min-w-0 rounded-none flex gap-1.5 sm:gap-2 items-center justify-center text-[11px] sm:text-sm md:text-base px-1 sm:px-2"
              >
                <IoPersonSharp className="hidden sm:block text-xl md:text-2xl shrink-0" />
                <span className="text-black dark:text-white truncate">About Me</span>
              </TabsTrigger>
              <TabsTrigger
                value="recommendations"
                className="flex-1 min-w-0 rounded-none flex gap-1.5 sm:gap-2 items-center justify-center text-[11px] sm:text-sm md:text-base px-1 sm:px-2"
              >
                <FaQuoteLeft className="hidden sm:block text-lg md:text-xl shrink-0" />
                <span className="text-black dark:text-white truncate">Recommendations</span>
              </TabsTrigger>
            </TabsList>

            <div className="w-full overflow-hidden">
              <TabsContent value="myJourney" className="w-full">
                <MyJourney />
              </TabsContent>
              <TabsContent value="skills" className="w-full">
                <Skills />
              </TabsContent>
              <TabsContent value="about" className="w-full">
                <AboutMe />
              </TabsContent>
              <TabsContent value="recommendations" className="w-full">
                <Recommendations />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </section>
  );
}
