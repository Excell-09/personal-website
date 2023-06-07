import Container from "../../components/Container";
import Heading from "../../components/Heading";
import {
  SiReact,
  SiNextdotjs,
  SiDjango,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import IconSkill from "./IconSkill";

const SKILLS_TECH = [
  { label: "React Js", Icon: SiReact },
  { label: "Next Js", Icon: SiNextdotjs },
  { label: "Django", Icon: SiDjango },
  { label: "TailwindCss", Icon: SiTailwindcss },
  { label: "Typescript", Icon: SiTypescript },
  { label: "Javascript", Icon: SiJavascript },
  { label: "Python", Icon: SiPython },
  { label: "Express Js", Icon: SiExpress },
  { label: "Node Js", Icon: SiNodedotjs },
  { label: "Mongo DB", Icon: SiMongodb },
  { label: "HTML", Icon: SiHtml5 },
  { label: "CSS", Icon: SiCss3 },
];

export default function SkillsSection() {
  return (
    <Container>
      <div className="h-auto grid place-items-center py-20">
        <div className="text-center">
          <Heading label="What I Can Do" />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 mt-4 gap-4">
            {SKILLS_TECH.map(({ label, Icon }, i) => (
              <IconSkill label={label} Icon={Icon} key={i} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
