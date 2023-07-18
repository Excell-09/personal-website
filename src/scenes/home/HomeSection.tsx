import Container from "../../components/Container";
import Button from "../../components/Button";
import Contacts from "../../components/Contacts";

export default function HomeSection() {
  return (
    <Container>
      <div className="h-screen grid place-items-center">
        <div>
          <h1 className="text-4xl sm:text-6xl lg:text-9xl  font-bold text-center">I'm Jun Choi</h1>
          <h6 className="text-sm sm:text-xl font-semibold text-center mt-2">React Js Developer | MERN Developer</h6>
          <div className="text-center mt-4">
            <Button label="Download CV" download href="/personal_file/CV.pdf" />
          </div>
          <div className="flex items-center justify-center mt-6 space-x-2 sm:space-x-4">
            <Contacts size="normal" />
          </div>
        </div>
      </div>
    </Container>
  );
}
