"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { certificates } from "./data";
import { TbCertificate } from "react-icons/tb";
import { GrOrganization } from "react-icons/gr";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function Certificates() {
  // ✅ ترتيب الشهادات حسب التاريخ (DD-MM-YYYY)
  const sortedCertificates = certificates.items.slice().sort((a, b) => {
    const parseDate = (dateStr: string): Date => {
      const [day, month, year] = dateStr.split("-").map(Number);
      return new Date(year, month - 1, day);
    };

    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  });

  return (
    <div
      className="flex flex-col text-center gap-8 xl:gap-8 lg:text-left"
      data-aos="zoom-in"
    >
      {/* Title & Description */}
      <div className="w-full flex flex-col gap-4" data-aos="zoom-in">
        <h3 className="text-2xl md:text-4xl font-bold text-primary-1000">
          {certificates.title}
        </h3>
        <p className="text-gray-500 mx-auto md:mx-0 text-xs md:text-base">
          {certificates.description}
        </p>
      </div>

      {/* Timeline */}
      <VerticalTimeline data-aos="zoom-in">
        {sortedCertificates.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            icon={item.icon}
            iconClassName="bg-primary-1000 text-white"
            data-aos="zoom-in"
            contentStyle={{
              backgroundColor: "rgba(13, 77, 110, 0.1)",
              borderRadius: "0.5rem",
              padding: "1.5rem 2rem",
              boxShadow: "none",
            }}
            contentArrowStyle={{
              borderRight: "7px solid rgba(13, 77, 110, 0.1)",
            }}
            className="text-left"
          >
            {/* Title */}
            <h3 className=" text-xl font-bold" data-aos="zoom-in">
              {item.title}
            </h3>

            {/* Icons Info Row */}
            <div
              className="flex flex-col justify-start my-3 gap-3 text-xs md:text-base text-primary-1000"
              data-aos="zoom-in"
            >
              <div className="flex gap-3 items-center" data-aos="zoom-in">
                <TbCertificate />
                <div className="opacity-70 text-primary-1000">{item.type}</div>
              </div>
              <div className="flex gap-3 items-center" data-aos="zoom-in">
                <GrOrganization />
                <div className="opacity-70 text-primary-1000">
                  {item.source}
                </div>
              </div>
            </div>

            {/* Details */}
            <p className="text-[12px] text-gray-400 " data-aos="zoom-in">
              {item.details}
            </p>

            {/* Link */}
            <div className="mt-4 flex justify-center" data-aos="zoom-in">
              <Link
                href={item.link}
                target="_blank"
                className="flex justify-center items-center gap-4 border border-primary-1000 text-sm md:text-base py-2 md:py-3 px-4 md:px-6 rounded-lg text-primary-1000 font-bold hover:bg-primary-1000 group hover:text-white transition-all duration-300"
              >
                Show Certificate
                <FaExternalLinkAlt className="group-hover:text-[22px] transition-all duration-300" />
              </Link>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
