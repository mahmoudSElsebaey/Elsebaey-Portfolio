"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Socials from "../ui/Socials";
import Photo from "../ui/Photo";
import { MdOutlineFileDownload } from "react-icons/md";
import Stats from "../ui/Stats";
import { MdOutlineWavingHand } from "react-icons/md";

const titles: string[] = [
  "Full-Stack Developer",
  "Front-End Developer",
  "Back-End Developer",
  "React.js Developer",
  "Angular.js Developer",
  "Next.js Developer",
  "MERN | MEAN Stack",
  "Freelancer Developer",
];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="h-full">
      <div className="container mx-auto my-3 flex flex-col md:flex-row justify-between items-center">
        {/*My Informatiom */}
        <div className="xl:h-[480px] flex flex-col gap-2 xl:gap-6 md:gap-1 items-center md:items-start justify-center order-2 md:order-none ">
          <p className="text-4xl font-bold flex gap-3 " data-aos="zoom-in">
            Hello <MdOutlineWavingHand className="text-primary-1000" /> I&apos;m
          </p>
          <p
            className="text-3xl sm:text-4xl xl:text-5xl font-bold uppercase relative animate-pulse"
            data-aos="zoom-in"
          >
            Mahmoud Elsebaey
            <span
              className="absolute top-1/2 left-0 w-full my-name animate-pulse h-[0.0001px] opacity-80 z-[-1]
            shadow-[0_0_30px_5px_theme(--color-primary-1000)] lg:shadow-[0_0_40px_15px_theme(--color-primary-1000)]"
            ></span>
          </p>
          <ul
            className="h-10 self-start ml-[10%] sm:ml-[16%] md:ml-0"
            data-aos="zoom-in"
          >
            <li
              key={index}
              style={{ letterSpacing: "2px" }}
              className="typing text-2xl sm:text-3xl font-extrabold text-outline text-transparent"
            >
              {titles[index]}
            </li>
          </ul>
          {/* <h2 className="typing">Front-End Developer</h2> */}

          <p
            className=" dark:text-white/60 text-black/60 max-w-[500px] text-center md:text-left text-sm md:text-base leading-relaxed"
            data-aos="zoom-in"
          >
            A Full-Stack Developer| MERN & MEAN I build modern, responsive, and
            scalable web applications with clean code and seamless user
            experiences. Always exploring new technologies to create impactful
            digital solutions.
          </p>
          <div
            className="flex flex-col md:flex-row items-center gap-8"
            data-aos="zoom-in"
          >
            {/* Button */}
            <div className="btn-cv relative p-[2px] overflow-hidden rounded-full">
              <a
                href="/assets/cv/Mahmoud Elsebaey- Frontend Developer_CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="uppercase cursor-pointer bg-primary-1000 hover:bg-primary-1000 text-white
                   rounded-full gap-2 group border border-primary-1000 transition-all duration-300 "
                >
                  <span>Download Cv</span>
                  <span className="text-5xl  animate-pulse">
                    <MdOutlineFileDownload />
                  </span>
                </Button>
              </a>
            </div>
            {/* Socials Icons */}
            <div className="" data-aos="zoom-in">
              <Socials />
            </div>
          </div>
        </div>
        {/* My Photo */}
        <div className="order-1 md:order-none">
          <Photo />
        </div>
      </div>
      {/* Stats */}
      <div className="mb-25 mt-10 xl:mt-6">
        <Stats />
      </div>
    </main>
  );
}
