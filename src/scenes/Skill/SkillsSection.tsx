import Container from "../../components/Container";
import Heading from "../../components/Heading";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiPython,
  SiDjango,
  SiRedux,
  SiMysql,
  SiGithub,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import IconSkill from "./IconSkill";

const SKILLS_TECH = [
  { label: "HTML", Icon: SiHtml5 },
  { label: "CSS", Icon: SiCss3 },
  { label: "React Js", Icon: SiReact },
  { label: "Typescript", Icon: SiTypescript },
  { label: "Javascript", Icon: SiJavascript },
  { label: "TailwindCss", Icon: SiTailwindcss },
  { label: "Redux", Icon: SiRedux },
  { label: "Express Js", Icon: SiExpress },
  { label: "Node Js", Icon: SiNodedotjs },
  { label: "Mongo DB", Icon: SiMongodb },
  { label: "Git", Icon: SiGithub },
  { label: "Next Js", Icon: SiNextdotjs },
  { label: "Python", Icon: SiPython },
  { label: "Django", Icon: SiDjango },
  { label: "MySQL", Icon: SiMysql },
  { label: "Golang", Icon: TbBrandGolang },
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
