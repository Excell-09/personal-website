import Button from "../../components/Button";

type Props = {
  title: string;
  image: string;
  category: string[];
  link: string;
};

export default function ProjectCard(props: Props): JSX.Element | null {
  return (
    <div className="bg-white relative group rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer">
      <div
        className="
            after:absolute 
            after:top-0 
            after:left-0 
            after:w-full 
            after:h-full 
            after:content-[''] 
            after:bg-myPrimary/80
            after:transition-all
            after:duration-150
            after:delay-150
            after:group-hover:bg-myPrimary
            "
      >
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full group-hover:scale-[2] transition-all duration-300"
        />
        <div className="z-10 absolute top-0 left-0 h-full w-full  grid delay-150 transition-all duration-150">
          <div className="m-auto">
            <Button label="Visit" href={props.link} />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
