"use client";

import { useState } from "react";

export default function AnnouncementBar() {
  const [show, setShow] = useState(true);

  const data = [
    "Dedication",
    "Mastery",
    "Innovation",
    "Development",
    "Hard work",
    "Learning",
    "Sharing",
  ];

  if (!show) return null;

  return (
    <section className="bg-primary-1000">
      <div className="text-white py-5 flex justify-between">
        <div className="overflow-hidden w-full">
          <div className="animate-marquee flex justify-center items-center gap-2 md:gap-6 xl:gap-13">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-primary-1000 py-1 px-5  text-[20px] rounded-[10px] min-w-fit "
                >
                  <p className="">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => setShow(false)}
          className="ml-4 px-3 cursor-pointer mr-1 text-2xl text-white/70 font-extrabold transition-all rounded-[5px] duration-300"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </section>
  );
}
