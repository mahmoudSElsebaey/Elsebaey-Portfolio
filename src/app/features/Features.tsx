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
      data-aos="zoom-in"
    >
      {/* Tab buttons */}
      <Tabs.List
        className="grid grid-cols-5 sm:grid-cols-6 md:flex content-center items-center justify-center gap-3 md:gap-5 mb-5 md:mb-10"
        data-aos="zoom-in"
      >
        {featuresList.map(({ category, title, icon }) => (
          <TooltipProvider key={category}>
            <Tooltip>
              <Tabs.Trigger
                value={category}
                className="w-[55px] h-[55px] md:w-[80px] md:h-[80px] rounded-full bg-primary-1000/15 flex justify-center items-center cursor-pointer group transition-all duration-500 border border-primary-1000 text-primary-1000 m-auto md:m-none
                 data-[state=active]:bg-primary-1000 data-[state=active]:text-white
                 hover:bg-primary-1000/70 hover:text-white/70 "
                data-aos="zoom-in"
              >
                <TooltipTrigger asChild>
                  <span
                    className="text-2xl md:text-3xl transition-all"
                    data-aos="zoom-in"
                  >
                    {icon}
                  </span>
                </TooltipTrigger>
              </Tabs.Trigger>
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
              className="border border-red-1000 w-full rounded-lg overflow-hidden "
            >
              <Accordion.Header>
                <Accordion.Trigger className="group w-full flex items-center cursor-pointer justify-between p-4 bg-primary-100/10 hover:bg-primary-100/20 transition font-bold text-left text-primary-1000">
                  <div
                    className="flex items-center gap-1.5 sm:gap-3"
                    data-aos="zoom-in"
                  >
                    <span className=" text-base sm:text-2xl" data-aos="zoom-in">
                      {section.icon}
                    </span>
                    <span className="text-sm sm:text-xl" data-aos="zoom-in">
                      {section.title}
                    </span>
                  </div>
                  <ChevronDownIcon
                    className="w-5 h-5 transition-transform duration-300 
                    group-data-[state=open]:rotate-180 group-data-[state=open]:animate-none"
                    aria-hidden
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="py-4 bg-primary-1000/10 ">
                <ul className="space-y-0" data-aos="zoom-in">
                  {section.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-xs flex items-center gap-3 opacity-70 p-2 hover:opacity-100"
                      data-aos="zoom-in"
                    >
                      <span
                        className="font-bold text-outline text-transparent text-xs md:text-2xl"
                        data-aos="zoom-in"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="text-xs sm:text-base overflow-hidden text-ellipsis whitespace-nowrap max-w-[90%] sm:max-w-[95%]"
                        title={feature}
                        data-aos="zoom-in"
                      >
                        {feature}
                      </span>
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
