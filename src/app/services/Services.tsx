"use client";
import { motion } from "framer-motion";
import { services } from "./data";

export default function Services() {
  return (
    <section className=" min-h-[80vh] flex flex-col xl:py-5 mt-7 mb-15">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className=""
        >
           <h3 className=" container pb-6 opacity-60 ">
        I offer modern and efficient web solutions, from building responsive UIs
        to integrating APIs, optimizing performance, and ensuring cross-browser
        compatibility.
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col gap-6 p-3 px-6 service-item rounded-2xl bg-primary-1000/10 group "
              >
                <div className="flex justify-between w-full items-center ">
                  {/* Num of Service */}
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent flex 
                  justify-center items-center h-[50px] gap-1 group-hover:gap-2"
                  >
                    <span className="group-hover:text-4xl transition-all duration-300">
                      0
                    </span>
                    <span className="group-hover:text-6xl transition-all duration-300">
                      {index + 1}
                    </span>
                  </div>
                  {/* Icon of Service  */}
                  <span className="text-3xl group-hover:text-4xl transition-all duration-300">
                    {item.icon}
                  </span>
                </div>
                {/* Title of Service  */}
                <h3 className="text-primary-1000 font-bold text-xl">
                  {item.title}
                </h3>
                {/* Description of Service  */}
                <p className="opacity-50 group-hover:opacity-80 transition-all duration-300 ">{item.description}</p>
              </div>
            );
          })}
</div>

        </motion.div>
      </div>
    </section>
  );
}
