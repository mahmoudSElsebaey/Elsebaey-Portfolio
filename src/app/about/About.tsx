"use client";

import { motion } from "framer-motion";
import { TabsList, TabsTrigger, Tabs, TabsContent } from "@/components/ui/tabs";
import { FaGraduationCap } from "react-icons/fa";
import Skills from "./skills";
import AboutMe from "./aboutMe";
import MyJourney from "./myJourney";
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
            delay: 2.4,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
        className="flex justify-center items-center xl:py-0"
      >
        <div className="container mx-auto ">
          <Tabs
            defaultValue="myJourney"
            className="flex flex-col gap-10"
            data-aos="zoom-in"
          >
            <TabsList
              className=" md:w-[80%] md:m-auto flex items-center justify-around "
              data-aos="zoom-in"
            >
              <TabsTrigger
                value="myJourney"
                className="rounded-none flex gap-3 items-center"
                data-aos="zoom-in"
              >
                <FaGraduationCap className="hidden sm:block text-2xl" />
                <span className="text-black dark:text-white">My Journey</span>
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="rounded-l-none flex gap-3 items-center "
                data-aos="zoom-in"
              >
                <MdSettingsSuggest className="hidden sm:block text-2xl" />
                <span className="text-black dark:text-white  "> skills</span>
              </TabsTrigger>
              <TabsTrigger
                value="about"
                className="rounded-r-none flex gap-3 items-center"
                data-aos="zoom-in"
              >
                <IoPersonSharp className="hidden sm:block text-2xl" />
                <span className="text-black dark:text-white">about me</span>
              </TabsTrigger>
            </TabsList>
            {/*________________________________  Tabs Content ________________________________*/}
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
            </div>
          </Tabs>
        </div>
      </motion.div>
    </section>
  );
}
