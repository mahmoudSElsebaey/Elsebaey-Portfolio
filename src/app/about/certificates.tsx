import { certificates } from "./data";
import { TbCertificate } from "react-icons/tb";
import { GrOrganization } from "react-icons/gr";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function Certificates() {
  return (
    <div
      className="flex flex-col text-center gap-8 xl:gap-8 lg:text-left"
      data-aos="zoom-in"
    >
      <div className="w-full flex flex-col gap-4 " data-aos="zoom-in">
        <h3
          className="text-2xl md:text-4xl  font-bold text-primary-1000"
          data-aos="zoom-in"
        >
          {certificates.title}
        </h3>
        <p
          className="opacity-70 mx-auto md:mx-0 text-xs md:text-base "
          data-aos="zoom-in"
        >
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
                data-aos={item.fadeDir}
                className="flex flex-col gap-4 px-10 py-5 justify-center items-center
                             dark:bg-primary-1000/10 bg-primary-1000/40 rounded-lg"
              >
                {/* Text information */}
                <div className="w-full " data-aos="zoom-in">
                  <p className="font-bold text-base md:text-2xl">
                    {item.title}
                  </p>
                  <p className="text-primary-1000 text-center">{item.date}</p>
                  {/* icons */}
                  <div className="flex flex-wrap justify-center md:justify-between my-3 gap-3">
                    <div className="flex gap-2 justify-center items-center xl:justify-start">
                      <TbCertificate className="text-primary-1000 animate-pulse" />
                      <p className="text-xs md:text-base">{item.type}</p>
                    </div>
                    <div className="flex gap-2 justify-center items-center xl:justify-start">
                      <GrOrganization className="text-primary-1000 animate-pulse" />
                      <p className="text-xs md:text-base">{item.source}</p>
                    </div>
                  </div>
                  <p className="opacity-50 text-xs md:text-sm">
                    {item.details}
                  </p>
                </div>
                {/* Link */}
                <div className="" data-aos="zoom-in">
                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex justify-center items-center gap-4 border border-primary-1000 text-sm md:text-base py-2 md:py-3 px-4 md:px-6 rounded-lg text-primary-1000 font-bold hover:bg-primary-1000 group hover:text-white transition-all duration-300"
                  >
                    Show Certificate
                    <FaExternalLinkAlt className="group-hover:text-[22px] transition-all duration-300" />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
