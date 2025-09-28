"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education } from "./data";

export default function Education() {
  const sortedEducationItems = education.items.slice().sort((a, b) => {
    const extractStartDate = (duration: string): Date => {
      const match = duration.match(/(\d{2})\/?(\d{4})|(\d{4})/);
      if (match) {
        if (match[1] && match[2]) {
          return new Date(`${match[2]}-${match[1]}-01`);
        } else if (match[3]) {
          return new Date(`${match[3]}-01-01`);
        }
      }
      const yearMatch = duration.match(/\d{4}/);
      return new Date(`${yearMatch ? yearMatch[0] : "1900"}-01-01`);
    };

    return extractStartDate(b.duration).getTime() - extractStartDate(a.duration).getTime();
  });

  return (
    <div
      className="flex flex-col text-center gap-8 lg:text-left"
      data-aos="zoom-in"
    >
      <div className="flex flex-col gap-4">
        <h3
          className="text-2xl md:text-4xl font-bold text-primary-1000"
          data-aos="zoom-in"
        >
          {education.title}
        </h3>
        <p
          className="opacity-70 mx-auto md:mx-0 text-xs md:text-base"
          data-aos="zoom-in"
        >
          {education.description}
        </p>
      </div>

      <VerticalTimeline data-aos="zoom-in">
        {sortedEducationItems.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.duration}
            icon={item.icon}
            iconClassName=""
            className="text-left"
          >
            <h3 className="text-base sm:text-xl font-bold" data-aos="zoom-in">
              {item.institution}
            </h3>
            <div className="text-xs sm:text-base flex gap-2 sm:items-center my-2" data-aos="zoom-in">
              <div className="text-base sm:text-2xl text-primary-1000" data-aos="zoom-in">
                {item.icon}
              </div>
              <div className="opacity-70 text-primary-1000" data-aos="zoom-in">
                {item.degree}
              </div>
            </div>
            <p className="text-[12px] text-gray-400" data-aos="zoom-in">
              {item.desc}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
