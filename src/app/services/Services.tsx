"use client";
import { motion } from "framer-motion";
import { services } from "./data";
import CircularCarousel from "@/components/ui/circular-carousel";

const serviceImages = [
  {
    id: "1",
    title: "Convert Designs to Code",
    description:
      "Turn any design (Figma, PSD, XD) into a fully functional website that works smoothly on all devices.",
    tag: "Design",
    image: "/assets/services%20Images/0fa5ff99-d4d6-4cfc-94ac-ae25389148ab.png",
  },
  {
    id: "2",
    title: "Modern Frontend Development",
    description:
      "Build interactive and fast user interfaces using React.js or Angular with a focus on great user experience.",
    tag: "Frontend",
    image: "/assets/services%20Images/1deec82c-e447-42d4-9cf3-ddeeb02c4f59.png",
  },
  {
    id: "3",
    title: "Next.js Development",
    description:
      "Create high-performance, SEO-friendly websites with Next.js using server-side rendering and optimized routing.",
    tag: "Next.js",
    image: "/assets/services%20Images/b0c3eee5-fa9b-403d-bae7-3f816dc5c761.png",
  },
  {
    id: "4",
    title: "Responsive Design",
    description:
      "Ensure websites look great and function perfectly across mobile, tablet, and desktop devices.",
    tag: "Responsive",
    image: "/assets/services%20Images/d2de1af9-95c4-432e-96a3-47893c3e3543.png",
  },
  {
    id: "5",
    title: "Backend & API Development",
    description:
      "Develop secure and scalable back-end systems with Node.js, Express, and MongoDB to power applications.",
    tag: "Backend",
    image: "/assets/services%20Images/fd8c2060-2167-4dd3-84a4-3e83ba6931b8.png",
  },
  {
    id: "6",
    title: "Authentication & Security",
    description:
      "Implement secure login systems with JWT, OAuth, and role-based access to protect user data.",
    tag: "Security",
    image: "/assets/services%20Images/margin-572fd3e2-567b-4662-a4b7-977d0494ed8545.png",
  },
];

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

          {/* ===== Original Services Cards (unchanged) ===== */}
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

          {/* ===== Service Images Carousel (below the cards) ===== */}
          <div className="mt-16" data-aos="fade-up" data-aos-duration="600">
            <CircularCarousel
              items={serviceImages}
              autoPlay
              autoPlayInterval={4500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
