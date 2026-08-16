"use client";

import Image from "next/image";
import Link from "next/link";
import { projectsData } from "./data";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub, BsEye } from "react-icons/bs";

const AllProjects: React.FC = () => {
  return (
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
              key={project.slug}
              className="group rounded-[15px] overflow-hidden border-b hover:border-primary-1000 
             hover:bg-primary-1000/30 dark:hover:bg-primary-1000/10 transition-all duration-1000 pb-5 project-parent"
              data-aos="zoom-in"
            >
              <div className="w-full h-[300px] relative top-0 left-0">
                <div className="w-full h-[80%] sm:h-full overflow-hidden relative">
                  <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-0">
                    <Image
                      src={project.image}
                      fill
                      alt={project.title}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={70}
                      priority={index < 2}
                      className="object-cover scale-x-[101.5%] group-hover:scale-[110%] transition-transform duration-500 group-hover:duration-2000"
                    />
                  </Link>

                  {/* Hover buttons (desktop) */}
                  <div
                    className="flex gap-4 absolute top-[-50%] scale-0 sm:group-hover:scale-100 sm:group-hover:top-2
                   transition-all sm:group-hover:duration-1000 duration-600 left-4 z-50"
                  >
                    <Link href={`/projects/${project.slug}`}>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-primary-1000/70 hover:bg-primary-1000 flex justify-center items-center cursor-pointer">
                            <BsEye className="text-[30px]" />
                          </TooltipTrigger>
                          <TooltipContent>View Details</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>

                    {project.live && project.live !== "#" && (
                      <Link href={project.live} target="_blank">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-primary-1000/70 hover:bg-primary-1000 flex justify-center items-center cursor-pointer">
                              <BsArrowUpRight className="text-[30px]" />
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
                            <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-primary-1000/70 hover:bg-primary-1000 flex justify-center items-center cursor-pointer">
                              <BsGithub className="text-[30px] transition-all" />
                            </TooltipTrigger>
                            <TooltipContent>Github Repo</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <Link href={`/projects/${project.slug}`} className="block">
                <div className="flex gap-3 items-center my-3 px-6">
                  <div
                    className="text-transparent text-outline text-4xl font-extrabold"
                    style={{ userSelect: "none" }}
                    data-aos="zoom-in"
                  >
                    {project.num}
                  </div>
                  <h3
                    className="text-[20px] sm:text-[25px] font-bold leading-none project-title group-hover:text-primary-1000 transition-colors"
                    data-aos="zoom-in"
                  >
                    {project.title}
                  </h3>
                </div>

                <p
                  className="opacity-70 px-6 my-3 text-[14px] leading-relaxed"
                  data-aos="zoom-in"
                >
                  {project.description}
                </p>
              </Link>

              <ul
                className="flex flex-wrap items-center gap-2 px-6"
                data-aos="zoom-in"
              >
                {project.tools.map((tool, i) => (
                  <li
                    key={i}
                    className="text-primary-1000 text-sm capitalize border border-primary-1000/50 bg-primary-1000/20 py-1 px-3 rounded-[14px]"
                    data-aos="zoom-in"
                  >
                    {tool.name}
                  </li>
                ))}
              </ul>

              {/* Mobile links */}
              <div
                className="sm:hidden flex justify-center gap-2 mt-5 px-4 flex-wrap"
                data-aos="zoom-in"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="project-category p-[2px] rounded-[15px] overflow-hidden"
                >
                  <h3 className="bg-primary-1000 rounded-[15px]">
                    <span className="w-full h-[50px] px-5 rounded-[10px] bg-primary-1000/70 flex gap-3 justify-center items-center text-white">
                      Details <BsEye className="text-[18px]" />
                    </span>
                  </h3>
                </Link>

                {project.live && project.live !== "#" && (
                  <div className="project-category p-[2px] rounded-[15px] overflow-hidden">
                    <h3 className="bg-primary-1000 rounded-[15px]">
                      <Link href={project.live} target="_blank">
                        <span className="w-full h-[50px] px-5 rounded-[10px] bg-primary-1000/70 flex gap-3 justify-center items-center text-white">
                          Live <BsArrowUpRight className="text-[18px]" />
                        </span>
                      </Link>
                    </h3>
                  </div>
                )}

                {project.github && (
                  <div className="project-category p-[2px] rounded-[15px] overflow-hidden">
                    <h3 className="bg-primary-1000 rounded-[15px]">
                      <Link href={project.github} target="_blank">
                        <span className="w-full h-[50px] px-5 rounded-[10px] bg-primary-1000/70 flex gap-3 justify-center items-center text-white">
                          Github <BsGithub className="text-[18px]" />
                        </span>
                      </Link>
                    </h3>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllProjects;
