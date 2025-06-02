"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full my-5 relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[280px] h-[280px] xl:w-[480px] xl:h-[480px] rounded-full overflow-hidden
           absolute top-1/2 left-1/2 transform-[translate(-50%,-52%)]"
        >
          <Image
            // src="/assets/hero-img.png"
            src="/assets/hoda3-rm.png"
             quality={100}
            alt="Personal image"
            priority
            fill
            className="object-contain scale-[95%] dark:sepia-40 dark:grayscale-50 sepia-70 grayscale-100 "
          />
        </motion.div>
        {/* Circle */}
        <motion.svg
          className="w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            // stroke="#b99a57"
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
            className='stroke-primary-1000'
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
