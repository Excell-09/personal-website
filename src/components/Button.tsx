import { AiOutlineArrowRight } from "react-icons/ai";
import { HiDocumentDownload, HiOutlineDocumentDownload } from "react-icons/hi";

type Props = {
  label: string;
  href?: string;
  download?: boolean;
  fontSize?: number;
};

export default function Button(props: Props) {
  if (props.download) {
    return (
      <button className="text-myAccent bg-myPrimary rounded-full group">
        <div className="sm:px-12 sm:py-3  px-6 py-1 flex items-center justify-center gap-1">
          <a
            download
            href={props.href}
            className=" text-xl sm:text-3xl font-semibold"
          >
            {props.label}
          </a>
          <div className="relative w-[36px] h-[36px]">
            <HiDocumentDownload
              size={34}
              className="opacity-0 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:opacity-100 transition-opacity"
            />
            <HiOutlineDocumentDownload
              size={34}
              className="opacity-100 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:opacity-0 transition-opacity duration-300"
            />
          </div>
        </div>
      </button>
    );
  }

  return (
    <button className="text-myAccent bg-myPrimary font-semibold rounded-full group">
      {props.href?.includes("https") ? (
        <a
          target="blank"
          href={props.href}
          className="sm:px-5 py-2 px-3 flex items-center gap-2 sm:text-base text-sm hover:underline"
        >
          {props.label}
          <AiOutlineArrowRight
            size={24}
            className="group-hover:-rotate-45 transition duration-300"
          />
        </a>
      ) : (
        <a
          href={props.href}
          className="sm:px-5 py-2 px-3 flex items-center gap-2 sm:text-base text-sm"
        >
          {props.label}
          <AiOutlineArrowRight
            size={24}
            className="group-hover:rotate-90 transition duration-300"
          />
        </a>
      )}
    </button>
  );
}
