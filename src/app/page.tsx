import dynamic from "next/dynamic";
import Title from "@/components/TitleSections/Title";
import HomePage from "@/components/Home/Home";

// Below-the-fold: separate chunks so first paint / hero JS stays lighter
const AboutMe = dynamic(() => import("./about/aboutMe"), { ssr: true });
const Projects = dynamic(() => import("./projects/Projects"), { ssr: true });
const Skills = dynamic(() => import("./about/skills"), { ssr: true });
const MyJourney = dynamic(() => import("./about/myJourney"), { ssr: true });
const Services = dynamic(() => import("./services/Services"), { ssr: true });
const Features = dynamic(() => import("./features/Features"), { ssr: true });
const Recommendations = dynamic(
  () => import("@/components/Recommendations/Recommendations"),
  { ssr: true },
);
const WhyWorkWithMe = dynamic(
  () => import("@/components/WhyWorkWithMe/WhyWorkWithMe"),
  { ssr: true },
);
const Contact = dynamic(() => import("./contact/Contact"), { ssr: true });

export default function Home() {
  return (
    <>
      <HomePage />

      <Title mainTitle="About Me" subTitle="My Resume & Who Am I ?" />
      <AboutMe />

      <Title mainTitle="Projects" subTitle="My Work" />
      <Projects />

      <Title mainTitle="Skills" subTitle="All Tools & Technologies I Use " />
      <Skills />

      <Title mainTitle="My Journey" subTitle="My Education & Experience" />
      <MyJourney />

      <Title mainTitle="Services" subTitle="What I Do ?" />
      <Services />

      <Title mainTitle="Features" subTitle="What I Can Build ?" />
      <Features />

      <Title mainTitle="Recommendations" subTitle="What People Say About Me" />
      <Recommendations />

      <Title mainTitle="Why Work With Me" subTitle="What You Get" />
      <WhyWorkWithMe />

      <Title mainTitle="Contact" subTitle="Get In Touch" />
      <Contact />
    </>
  );
}
