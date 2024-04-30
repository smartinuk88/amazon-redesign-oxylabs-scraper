import Link from "next/link";
import { ElementType } from "react";

type Props = {
  icon: ElementType;
  title: string;
};

function SidebarOption({ icon: Icon, title }: Props) {
  return (
    <Link
      href={
        title === "Home"
          ? "/"
          : {
              pathname: "/search",
              query: { q: title },
            }
      }
    >
      <button
        className="flex space-x-1 items-center px-5 w-full rounded-full hover:shadow-md hover:bg-gradient-to-r hover:from-sea-green hover:to-teal hover:text-white
         transition-all duration-300 group"
      >
        <Icon className="h-10 px-2 w-10 text-amazon group-hover:text-white" />
        <p>{title}</p>
      </button>
    </Link>
  );
}

export default SidebarOption;
