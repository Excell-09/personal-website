import * as React from "react";
import Navbar from "./scenes/navbar/Navbar";
import HomeSection from "./scenes/home/HomeSection";
import SkillsSection from "./scenes/Skill/SkillsSection";
import ProjectsSection from "./scenes/projects/ProjectsSection";

function App() {
  const bodyRef = React.useRef<HTMLDivElement>(null);
  const homeSection = React.useRef<HTMLDivElement>(null);
  const skillSection = React.useRef<HTMLDivElement>(null);
  const projectsSection = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={bodyRef}
      className="h-screen overflow-y-auto scroll-smooth overflow-x-hidden"
    >
      <Navbar
        bodyRef={bodyRef}
        sections={[homeSection, skillSection, projectsSection]}
      />
      <main>
        <section ref={homeSection} id="home" className="h-screen">
          <HomeSection />
        </section>
        <section ref={skillSection} id="skills" className="h-screen">
          <SkillsSection />
        </section>
        <section ref={projectsSection} id="projects" className="h-screen">
          <ProjectsSection />
        </section>
      </main>
    </div>
  );
}

export default App;
