import Features from "./features/page";
import Services from "./services/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
// import Resume from "./about/page";
import Title from "@/components/TitleSections/Title";
import HomePage from "@/components/Home/Home";
import Skills from "./about/skills";
import AboutMe from "./about/aboutMe";
import MyJourney from "./about/myJourney";

export default function Home() {
  return (
    <>
      <HomePage />
      <Title mainTitle="About Me" subTitle="My Resume & Who Am I ?" />
      <AboutMe />
      <Title mainTitle="My Journey" subTitle="My Education & Experience" />
      <MyJourney />
      <Title mainTitle="Skills" subTitle="All Tools & Technologies I Use " />
      <Skills />
      <Title mainTitle="Projects" subTitle="My Work" />
      <Projects />
      <Title mainTitle="Services" subTitle="What I Do ?" />
      <Services />
      <Title mainTitle="Features" subTitle="What I Can Build ?" />
      <Features />
      <Title mainTitle="Contact" subTitle="Get In Touch" />
      <Contact />
    </>
  );
}
