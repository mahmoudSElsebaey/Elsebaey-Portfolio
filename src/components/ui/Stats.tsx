"use client";

type StatsType = {
  num: number;
  text: string;
}[];

import CountUp from "react-countup";

export default function Stats() {
  const stats: StatsType = [
    { num: 2, text: "Years of Experience " },
    { num: 24, text: "Projects Completed" },
    { num: 31, text: "Technologies Masterd" },
    { num: 132, text: "Code Commits" },
  ];
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-6 max-w-[90vw] xl:max-w-none mx-auto">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-1 gap-4 items-center justify-start"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-3xl md:text-6xl font-extrabold text-primary-1000"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-gray-500/80 sm:text-[10px] md:text-base`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
