type Props = {
  label: string;
};

export default function Heading({ label }: Props) {
  return (
    <>
      <h3 className="text-4xl font-bold">{label}</h3>
      <div className="h-2 bg-myPrimary rounded-full w-2/3 mx-auto mt-2"></div>
    </>
  );
}
