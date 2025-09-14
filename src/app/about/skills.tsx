import { skills } from "./data";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export default function Skills() {
  return (
    <div className="flex flex-col text-center gap-8 lg:text-left" data-aos="zoom-in">
      <div className="flex flex-col gap-4" data-aos="zoom-in">
        <h3 className="text-2xl md:text-4xl font-bold text-primary-1000" data-aos="zoom-in">
          {skills.title}
        </h3>
        <p className="opacity-70 mx-auto md:mx-0 text-xs md:text-base " data-aos="zoom-in">
          {skills.description}
        </p>
      </div>
      {/* <ScrollArea className="h-[400px] transition-all"> */}
      <div className="">
        <ul className="flex flex-col gap-[40px]">
          {skills.sections.map((sec, index) => {
            return (
              <li key={index} data-aos="fade-up" data-aos-duration="700">
                <h3 className="text-primary-1000 text-[18px] sm:text-2xl font-bold mb-5 text-left flex items-center gap-0">
                  <span className="text-outline text-transparent animate-pulse text-2xl sm:text-3xl pr-4">
                    0{index + 1}
                  </span>
                  {sec.title}
                </h3>
                <div className="">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px]">
                    {sec.items.map((item, i) => {
                      return (
                        <li key={i} data-aos="zoom-in">
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
    </div>
  );
}
