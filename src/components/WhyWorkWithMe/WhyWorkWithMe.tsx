"use client";

import {
  HiOutlineLightningBolt,
  HiOutlineChatAlt2,
  HiOutlineCode,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
} from "react-icons/hi";

const reasons = [
  {
    icon: <HiOutlineCode className="text-2xl" />,
    title: "Clean & Scalable Code",
    description:
      "I write maintainable, typed, and well-structured code that is easy to extend and hand over.",
  },
  {
    icon: <HiOutlineLightningBolt className="text-2xl" />,
    title: "Fast Delivery",
    description:
      "Clear milestones, focused sprints, and practical solutions without unnecessary complexity.",
  },
  {
    icon: <HiOutlineChatAlt2 className="text-2xl" />,
    title: "Clear Communication",
    description:
      "You always know the status, blockers, and next steps — no surprises late in the project.",
  },
  {
    icon: <HiOutlineSparkles className="text-2xl" />,
    title: "UI/UX Focus",
    description:
      "Modern interfaces, responsive layouts, and smooth interactions that feel polished on every device.",
  },
  {
    icon: <HiOutlineShieldCheck className="text-2xl" />,
    title: "Reliable Ownership",
    description:
      "I treat the product like mine: testing, edge cases, and post-launch support when needed.",
  },
  {
    icon: <HiOutlineClock className="text-2xl" />,
    title: "Flexible Collaboration",
    description:
      "Comfortable with freelance, short sprints, or longer partnerships — adapted to your workflow.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="container mx-auto px-4 py-6 md:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {reasons.map((item, index) => (
          <article
            key={item.title}
            className="group relative rounded-2xl border border-primary-1000/20 bg-primary-1000/5 p-5 md:p-6 transition-all duration-300 hover:border-primary-1000/45 hover:bg-primary-1000/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-1000/10"
            data-aos="fade-up"
            data-aos-delay={Math.min(index * 60, 240)}
          >
            <div className="w-12 h-12 rounded-full bg-primary-1000/15 border border-primary-1000/40 text-primary-1000 flex items-center justify-center mb-4 group-hover:bg-primary-1000 group-hover:text-white transition-colors duration-300">
              {item.icon}
            </div>
            <h3 className="text-base md:text-lg font-bold text-primary-1000 mb-2">
              {item.title}
            </h3>
            <p className="text-sm md:text-[15px] opacity-75 leading-relaxed">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
