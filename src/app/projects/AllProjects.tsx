import Image from "next/image";
import Link from "next/link";
import { projectsData } from "./data";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
// import { motion } from "framer-motion";

const AllProjects: React.FC = () => {
  return (
    //   <motion.section
    //   initial={{ opacity: 0 }}
    //   animate={{
    //     opacity: 1,
    //     transition: {
    //       delay: 2.4,
    //       duration: 0.4,
    //       ease: "easeIn",
    //     },
    //   }}
    // >
    <div className="container " data-aos="zoom-in">
      <h1
        className="mb-3 text-xl md:text-3xl border-b-3 border-primary-1000 inline-block py-2"
        data-aos="zoom-in"
      >
        All Projects
      </h1>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        {projectsData.map((project, index) => {
          return (
            <li
              key={index}
              className="group rounded-[15px] overflow-hidden border-b hover:border-primary-1000 
             hover:bg-primary-1000/30 dark:hover:bg-primary-1000/10 transition-all duration-1000 pb-5 project-parent"
              data-aos="zoom-in"
            >
              <div className="w-full h-[300px] relative top-0 left-0">
                {/*_______________ Project Category _______________*/}
                <div className="absolute inset-0 z-10 flex justify-end items-start p-2 ">
                  <div className="project-category w-fit p-[2px] rounded-br-[13px] rounded-tl-[13px] overflow-hidden ">
                    <h3 className="bg-primary-1000 w-fit p-3 rounded-br-[13px] rounded-tl-[13px]">
                      {project.category}
                    </h3>
                  </div>
                </div>
                {/*_______________ Project Image _______________*/}
                <div className="w-full h-full overflow-hidden relative ">
                  <Image
                    src={project.image}
                    width="10000"
                    height="10000"
                    alt={project.title}
                    className="w-full h-full scale-x-[101.5%] group-hover:scale-[115%] group-hover:transition-all
                     group-hover:duration-2000 duration-1000 "
                  />
                  {/*_______________ Project Buttons _______________*/}
                  <div
                    className="flex gap-4 absolute top-[-50%] scale-0 group-hover:scale-100 group-hover:top-2
                   transition-all group-hover:duration-1000 duration-600 left-4 z-50"
                  >
                    {/*Live Project */}
                    <Link href={project.live} target="_blank">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-primary-1000/70 hover:bg-primary-1000 flex justify-center items-center cursor-pointer group">
                            <BsArrowUpRight className="text-[30px] transition-all" />
                          </TooltipTrigger>
                          <TooltipContent>Live Project</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                    {/*Github Repo */}
                    <Link href={project.github} target="_blank">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-primary-1000/70 hover:bg-primary-1000 flex justify-center items-center cursor-pointer group">
                            <BsGithub className="text-[30px] transition-all" />
                          </TooltipTrigger>
                          <TooltipContent>Github Repo</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center my-3 px-6">
                {/*_______________ Project Number _______________*/}
                <div
                  className="text-transparent text-outline text-4xl font-extrabold"
                  style={{ userSelect: "none" }}
                  data-aos="zoom-in"
                >
                  {project.num}
                </div>
                {/*_______________ Project Title _______________*/}
                <h3
                  className="text-[25px] font-bold leading-none project-title "
                  data-aos="zoom-in"
                >
                  {project.title}
                </h3>
              </div>
              {/*_______________ Project Discription _______________*/}
              <p
                className="opacity-70 px-6 my-3 text-[14px] leading-relaxed"
                data-aos="zoom-in"
              >
                {project.description}
              </p>
              {/*_______________ Project Tools _______________*/}
              <ul
                className="flex flex-wrap items-center gap-2 px-6"
                data-aos="zoom-in"
              >
                {project.tools.map((tool, i) => {
                  return (
                    <li
                      key={i}
                      className="text-primary-1000 text-sm capitalize border border-primary-1000/50 bg-primary-1000/20 py-1 px-3 rounded-[14px]"
                      data-aos="zoom-in"
                    >
                      {tool.name}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
    // </motion.section>
  );
};

export default AllProjects;
