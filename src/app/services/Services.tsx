"use client";

import { motion } from "framer-motion";
import { services } from "./data";
import CircularCarousel from "@/components/ui/circular-carousel";

export default function Services() {
  const carouselItems = services.map((s) => ({
    id: s.id,
    title: s.title,
    description: s.description,
    tag: s.tag,
    image: s.image,
    icon: s.icon,
  }));

  return (
    <section className="min-h-[80vh] flex flex-col xl:py-5 mt-7 mb-15">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.05, duration: 0.35, ease: "easeOut" },
          }}
        >
          <h3 className="container pb-8 opacity-60" data-aos="fade-up">
            Full-stack web development with a focus on performance, scalability,
            and user experience — from frontend to backend.
          </h3>

          <div data-aos="fade-up" data-aos-duration="600">
            <CircularCarousel items={carouselItems} autoPlay autoPlayInterval={4500} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
