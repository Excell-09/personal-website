import Heading from "../../components/Heading";
import Container from "../../components/Container";
import projectsImage from "../../assets/projectsImage";
import ProjectCard from "./ProjectCard";

const ALLPROJECTS = [
  {
    title: "Online Shop",
    image: projectsImage.myshop,
    category: ["all", "react-js", "typescript"],
    link: "https://my-shop-junchoi.vercel.app/",
  },
  {
    title: "Instagram Clone",
    image: projectsImage.instagram,
    category: ["all", "next-js", "typescript"],
    link: "https://instagram-clone-junchoi.vercel.app/",
  },
  {
    title: "Google Clone",
    image: projectsImage.google,
    category: ["all", "next-js", "typescript"],
    link: "https://google-clone-jun-choi.vercel.app/",
  },
  {
    title: "Job Portal",
    image: projectsImage.findjob,
    category: ["all", "react-js", "javascript"],
    link: "https://smiling-gabardine-foal.cyclic.app",
  },
];

export default function ProjectsSection() {
  return (
    <Container>
      <div className="h-auto grid place-items-center py-20">
        <div className="text-center">
          <Heading label="My Projects" />
          <div className="grid md:grid-cols-2 mt-6 gap-4 grid-cols-1">
            {ALLPROJECTS.map((project, i) => (
              <ProjectCard
                title={project.title}
                image={project.image}
                category={project.category}
                link={project.link}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
