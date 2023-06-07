import { IconType } from "react-icons";

type Props = {
  label: string;
  Icon: IconType;
};

export default function IconSkill({ label, Icon }: Props) {
  return (
    <div className="bg-mySecondary/50 rounded-xl p-2 flex flex-col items-center justify-center transition-all hover:rounded-full hover:drop-shadow-3xl-primary">
      <Icon size={38} />
      <h6 className="text-sm mt-2 cursor-default">{label}</h6>
    </div>
  );
}
