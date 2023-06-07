import Button from "../../components/Button";
import Container from "../../components/Container";
import Navlink from "./Navlink";
import * as React from "react";

type Props = {
  bodyRef: React.RefObject<HTMLDivElement>;
  sections: React.RefObject<HTMLDivElement>[];
};

const NAVLINK = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar(props: Props) {
  const [isNavActive, setIsNavActive] = React.useState(false);
  const [isNavLinkActive, setIsNavLinkActive] = React.useState("home");

  const handlerActiveNav = () => {
    if (Math.round(props.bodyRef.current?.scrollTop as number) > 250) {
      setIsNavActive(true);
    } else {
      setIsNavActive(false);
    }
  };

  const handlerActiveNavLink = () => {
    props.sections.forEach((section) => {
      const sectionTop = section.current?.offsetTop as number;
      if (
        Math.round(props.bodyRef.current?.scrollTop as number) >=
        sectionTop - 70
      ) {
        setIsNavLinkActive(section.current?.getAttribute("id") as string);
      }
    });
  };

  React.useEffect(() => {
    props.bodyRef.current?.addEventListener("scroll", handlerActiveNav);
    props.bodyRef.current?.addEventListener("scroll", handlerActiveNavLink);
    return () => {
      window.removeEventListener("scroll", handlerActiveNav);
      window.removeEventListener("scroll", handlerActiveNavLink);
    };
  }, []);

  return (
    <>
      <header
        className={`bg-mySecondary rounded-b-[40px] fixed w-full transition duration-300 delay-75 z-50  ${
          isNavActive ? "-translate-y-20" : "translate-y-0"
        }`}
      >
        {/* while Not On Scroll */}
        <div className={`py-2`}>
          <Container>
            <div className="flex flex-row items-center justify-between sm:px-3 px-2">
              <a
                href="#home"
                className="text-center"
                onClick={() => props.bodyRef?.current?.scrollTop}
              >
                <h5 className="font-bold text-lg sm:text-xl md:text-3xl">
                  Jun Choi
                </h5>
                <h6 className="font-bold text-xs md:text-base">
                  Personal Website
                </h6>
              </a>
              <div className="space-x-3 hidden sm:block">
                {NAVLINK.map((item, i) => (
                  <Navlink
                    label={item.label}
                    href={item.href}
                    key={i}
                    active={item.href.replace("#", "") === isNavLinkActive}
                  />
                ))}
              </div>
              <div>
                <Button label="See Projects" href="#projects" />
              </div>
            </div>
          </Container>
        </div>
      </header>

      {/* while On Scroll */}
      <header
        className={`
      flex 
      flex-row 
      items-center 
      justify-between 
      bg-mySecondary 
      rounded-full 
      fixed 
      top-4 
      left-1/2 
      -translate-x-1/2 
      transition-all
      duration-300
      z-50
      ${
        isNavActive ? "-translate-y-0 scale-100" : " -translate-y-full scale-0"
      }`}
      >
        <div className="space-x-3 sm:py-4 sm:px-6 px-2 py-4">
          {NAVLINK.map((item, i) => (
            <Navlink
              label={item.label}
              href={item.href}
              key={i}
              active={item.href.replace("#", "") === isNavLinkActive}
            />
          ))}
        </div>
      </header>
    </>
  );
}
