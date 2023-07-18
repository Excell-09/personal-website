import Container from "../../components/Container";
import Heading from "../../components/Heading";

export default function AboutMeSection() {
  return (
    <Container>
      <div className="grid py-20">
        <div className="m-auto">
          <Heading label="About Me" />
          <div className="flex flex-col md:flex-row max-w-[650px] gap-5">
            <div className="flex mx-auto">
              <img className="max-w-[200px] ml-auto h-full" src="personal_file/image-profile.jpg" alt="" loading="lazy" />
            </div>
            <p className="flex-1 text-sm sm:text-base text-slate-600">
              I am a graduate of a vocational high school majoring in Multimedia with a last score of 87. I have an
              internship in the printing industry and have an interest in industry programming. especially as React Js
              Developer and MERN Developer, already learn Javascript, Typescript, Node Js, and their Framework, and have
              completed several projects. I am currently seeking opportunities as a React Js Developer and MERN
              Developer.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
