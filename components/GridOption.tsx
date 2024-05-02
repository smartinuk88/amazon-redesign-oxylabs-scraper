import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image?: StaticImageData | string;
};

function GridOption({ title, image }: Props) {
  return (
    <Link
      href={{
        pathname: "/search",
        query: { q: title },
      }}
      className="relative border border-cloudy bg-white rounded-lg shadow-lg h-64 p-5 flex flex-col items-center justify-end hover:border-fusion transition-all duration-300 w-full max-w-sm"
    >
      {image && (
        <Image
          src={image}
          alt={title}
          className="absolute top-[-50px] z-10"
          height={250}
          width={250}
          objectFit="contain"
        />
      )}
      <h2 className="text-center text-xl font-bold">{title}</h2>
    </Link>
  );
}

export default GridOption;
