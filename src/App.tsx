import * as React from "react";
import Navbar from "./scenes/navbar/Navbar";
import HomeSection from "./scenes/home/HomeSection";
import SkillsSection from "./scenes/Skill/SkillsSection";
import ProjectsSection from "./scenes/projects/ProjectsSection";
import Footer from "./scenes/Footer";
import AboutMeSection from "./scenes/AboutMe/AboutMeSection";

function App() {
  const bodyRef = React.useRef<HTMLDivElement>(null);
  const homeSection = React.useRef<HTMLDivElement>(null);
  const aboutmeSection = React.useRef<HTMLDivElement>(null);
  const skillSection = React.useRef<HTMLDivElement>(null);
  const projectsSection = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={bodyRef} className="h-screen overflow-y-auto overflow-x-hidden">
      <Navbar bodyRef={bodyRef} sections={[homeSection, aboutmeSection, skillSection, projectsSection]} />
      <main>
        <section ref={homeSection} id="home">
          <HomeSection />
        </section>
        <section ref={aboutmeSection} id="aboutme">
          <AboutMeSection />
        </section>
        <section ref={skillSection} id="skills">
          <SkillsSection />
        </section>
        <section ref={projectsSection} id="projects">
          <ProjectsSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
