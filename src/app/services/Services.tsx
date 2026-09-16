"use client";
import { motion } from "framer-motion";
import { services } from "./data";

export default function Services() {
  return (
    <section className=" min-h-[80vh] flex flex-col xl:py-5 mt-7 mb-15 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.05, duration: 0.35, ease: "easeOut" },
          }}
          className=""
        >
          <h3 className="container pb-6 opacity-60" data-aos="fade-up">
            Full-stack web development with a focus on performance, scalability,
            and user experience — from frontend to backend .
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
            {services.map((item, index) => {
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="flex flex-1 flex-col gap-6 p-3 px-6 service-item rounded-2xl bg-primary-1000/10 group  "
                >
                  <div className="flex justify-between w-full items-center ">
                    <div
                      className="text-5xl font-extrabold text-outline text-transparent flex 
                  justify-center items-center h-[50px] gap-1 group-hover:gap-2"
                      style={{ userSelect: "none" }}
                    >
                      <span
                        style={{ userSelect: "none" }}
                        className={`group-hover:text-4xl transition-all duration-300 ${
                          index >= 9 ? " hidden" : "block"
                        }`}
                      >
                        0
                      </span>
                      <span
                        className={`group-hover:text-6xl transition-all duration-300`}
                      >
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-3xl group-hover:text-4xl transition-all duration-300">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-primary-1000 font-bold text-xl">
                    {item.title}
                  </h3>
                  <p className="text-sm dark:text-white/50 dark:group-hover:text-white/90 text-black/50 group-hover:text-black/90 transition-all duration-600 leading-8 ">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2 z-20">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className=" bg-primary-1000/10 text-primary-1000 text-xs px-5 py-1 rounded-full z-20 "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
