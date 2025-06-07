"use client";

import * as Accordion from "@radix-ui/react-accordion";
import * as Tabs from "@radix-ui/react-tabs";
import { ChevronDownIcon } from "lucide-react";
import { featuresList } from "./data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function FeaturesTabs() {
  return (
    <Tabs.Root
      defaultValue={featuresList[0].category}
      className="w-full max-w-5xl mx-auto px-4 mt-15 mb-30"
    >
      {/* Tab buttons */}
      <Tabs.List className="flex flex-wrap justify-center gap-1 md:gap-4 xl:gap-6 mb-6">
        {featuresList.map(({ category, title, icon }) => (
          <TooltipProvider key={category}>
            <Tooltip>
              <TooltipTrigger>
                <Tabs.Trigger
                  value={category}
                  className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] xl:w-[70px] xl:h-[70px] rounded-full bg-primary-1000/20 flex justify-center items-center
                   cursor-pointer group transition-all duration-500 data-[state=active]:bg-primary-1000
                 data-[state=active]:text-white social-icon border border-transparent 
                   "
                >
                  <span className=" text-2xl md:text-3xl transition-all">
                    {icon}
                  </span>
                </Tabs.Trigger>
              </TooltipTrigger>
              <TooltipContent>{title}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </Tabs.List>

      {/* Tab content */}
      {featuresList.map((section) => (
        <Tabs.Content key={section.category} value={section.category}>
          <Accordion.Root
            type="single"
            collapsible
            className="space-y-2"
            defaultValue={section.title}
          >
            <Accordion.Item
              value={section.title}
              className="border border-primary-1000 w-full rounded-lg overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group w-full flex items-center cursor-pointer justify-between p-4 bg-primary-100/10 hover:bg-primary-100/20 transition font-bold text-left text-primary-1000">
                  <div className="flex items-center gap-3">
                    <span className="animate-pulse text-2xl">
                      {section.icon}
                    </span>
                    <span>{section.title}</span>
                  </div>
                  <ChevronDownIcon
                    className="w-5 h-5 transition-transform duration-300 animate-pulse
                    group-data-[state=open]:rotate-180 group-data-[state=open]:animate-none"
                    aria-hidden
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="py-4  bg-primary-1000/10  ">
                <ul className="space-y-0">
                  {section.features.map((f, i) => (
                    <li
                      key={i}
                      className="text-[16px] flex items-center gap-3 text-white/60 p-2 hover:text-white group transition-all duration-300"
                    >
                      <span className="font-bold text-outline text-transparent animate-pulse text-2xl">
                       <span className={`${i <= 9 ? "hidden" : ""}`}>0</span>
                       <span className=" group-hover:scale-[1.2] transition-all duration-300 ">{i+1}</span>
                      
                        {/* {String(i + 1).padStart(2, "0")} */}
                      </span>
                      <span className="">{f}</span>
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
