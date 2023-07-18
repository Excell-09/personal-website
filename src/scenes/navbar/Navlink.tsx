type Props = {
  label: string;
  href: string;
  active: boolean;
};

export default function Navlink(props: Props) {
  return (
    <a
      className={`text-myAccent rounded-full px-3 py-2 font-medium sm:text-base text-sm transition-all duration-300 ${
        props.active
          ? "bg-myPrimary"
          : " bg-myPrimary/40"
      }`}
      href={props.href}
    >
      {props.label}
    </a>
  );
}
