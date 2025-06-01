
// import About from "./about/page";
import Services from "./services/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Resume from "./resume/page";
import Title from "@/components/TitleSections/Title";
import HomePage from "@/components/Home/Home";



export default function Home() {
  return (
    <>
      <HomePage />
      {/* <About /> */}
      <Title mainTitle="About Me" subTitle="My Resume & Who Am I ?" />
      <Resume />
      <Title mainTitle="Services" subTitle="What I Do ?" />
      <Services />
      <Title mainTitle="Projects" subTitle="My Work" />
      <Projects />
      <Title mainTitle="Contact" subTitle="Get In Touch" />
      <Contact />
    </>
  );
}
