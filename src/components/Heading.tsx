type Props = {
  label: string;
};

export default function Heading({ label }: Props) {
  return (
    <div className=" w-fit mx-auto">
      <h3 className="text-4xl font-bold">{label}</h3>
      <div className="h-2 bg-myPrimary rounded-full w-2/3 mx-auto my-2"></div>
    </div>
  );
}
