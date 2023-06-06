import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
type Props = {
  size: "large" | "normal";
};

const SOSIAL_MEDIA = [
  { link: "https://www.linkedin.com/in/junchoi14", Icon: AiFillLinkedin },
  { link: "https://github.com/Excell-09", Icon: AiFillGithub },
  {
    link: "https://api.whatsapp.com/send?phone=6289602391929",
    Icon: AiOutlineWhatsApp,
  },
];

export default function Contacts(props: Props) {
  if (props.size === "normal") {
    return (
      <>
        {SOSIAL_MEDIA.map(({ Icon, link }, i) => (
          <a
            key={i}
            className="border-4 border-myPrimary text-myPrimary rounded-full p-2 bg-mySecondary transition duration-300 hover:drop-shadow-3xl-primary"
            target="black"
            href={link}
            referrerPolicy=""
          >
            <Icon size={34} />
          </a>
        ))}
      </>
    );
  }

  return (
    <>
      {SOSIAL_MEDIA.map(({ Icon, link }, i) => (
        <a
          key={i}
          className="border-4 border-myPrimary text-myPrimary rounded-full p-2 bg-mySecondary transition duration-300 hover:drop-shadow-3xl-primary"
          target="black"
          href={link}
          referrerPolicy=""
        >
          <Icon size={48} />
        </a>
      ))}
    </>
  );
}
