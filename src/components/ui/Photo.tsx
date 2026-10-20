"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full my-5 relative flex items-center justify-center">
      {/* Visible immediately on first paint — no opacity:0 delay that blanks the hero */}
      <div>
        <div
          className="w-[280px] h-[280px] xl:w-[480px] xl:h-[480px] rounded-full overflow-hidden
           absolute top-1/2 left-1/2 transform-[translate(-50%,-52%)]"
        >
          <Image
            src="/assets/hoda1.png"
            quality={85}
            alt="Mahmoud Elsebaey, Full-Stack MERN Developer"
            priority
            fill
            sizes="(max-width: 1280px) 280px, 480px"
            className="object-contain scale-[105%]"
          />
        </div>
        <motion.svg
          className="w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          initial={false}
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="stroke-primary-1000"
          />
        </motion.svg>
      </div>
    </div>
  );
}
