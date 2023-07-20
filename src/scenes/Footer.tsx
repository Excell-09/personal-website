import Contacts from "../components/Contacts";
import { BsArrowUpCircle } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="text-center h-[45vh] bg-mySecondary rounded-t-3xl flex flex-col justify-center">
      <a href="#home">
        <BsArrowUpCircle
          size={38}
          className="mx-auto text-myPrimary cursor-pointer animate-bounce drop-shadow-3xl-primary"
        />
      </a>
      <div className="flex justify-center gap-4 items-center mt-8">
        <Contacts size="large" />
      </div>
      <section className="mt-4">
        <p className="text-myPrimary text-xl">junchoi.jobs@gmail.com</p>
      </section>
    </footer>
  );
}
