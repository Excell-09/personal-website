import Heading from "../../components/Heading";
import Container from "../../components/Container";
import projectsImage from "../../assets/projectsImage";
import ProjectCard from "./ProjectCard";

const ALLPROJECTS = [
  {
    title: "Food Store",
    subtitle: "Online shops for users who want buy food.",
    image: projectsImage.foodstore,
    link: "https://github.com/Excell-09/food_store",
  },
  {
    title: "News Portal",
    subtitle: "News portal for users who want to see news.",
    image: projectsImage.portalNews,
    link: "https://portal-berita-jun-choi.vercel.app",
  },
  {
    title: "My Shop",
    subtitle: "Online shops for users who want buy something.",
    image: projectsImage.myshop,
    link: "https://my-shop-junchoi.vercel.app/",
  },
  {
    title: "Instagram Clone",
    subtitle:
      "A replica version of the Instagram website showcasing a similar user interface and Some Instagram functionality.",
    image: projectsImage.instagram,
    link: "https://instagram-clone-junchoi.vercel.app/",
  },
  {
    title: "Google Clone",
    subtitle: "A replica version of the Google website showcasing a similar user interface and search functionality",
    image: projectsImage.google,
    link: "https://google-clone-jun-choi.vercel.app/",
  },
  {
    title: "Job Portal",
    subtitle: "Jobs Portal for users who wants to looking a job.",
    image: projectsImage.findjob,
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
              <ProjectCard title={project.title} subtitle={project.subtitle} image={project.image} link={project.link} key={i} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
