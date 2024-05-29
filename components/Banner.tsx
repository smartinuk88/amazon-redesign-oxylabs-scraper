import Image from "next/image";
import AmazonFire from "@/public/images/amazon-fire.png";
import AmazonFireLogo from "@/public/images/amazon-fire-logo.png";
import { Button } from "./ui/button";
import Link from "next/link";

function Banner() {
  return (
    <Link
      href={{
        pathname: "/search",
        query: { q: "Amazon Fire TV" },
      }}
      className="mb-32 p-8 lg:p-4 lg:pl-0 rounded-md lg:h-96 bg-gradient-to-br from-red-600 to-fusion flex flex-col lg:flex-row shadow-md"
    >
      <div className="w-full relative flex justify-center items-center">
        <Image
          src={AmazonFire}
          alt={"Amazon Fire stick"}
          height={650}
          width={650}
          className="lg:absolute p-8 lg:p-0"
        />
      </div>
      <div className="w-full flex flex-col space-y-4 h-full justify-center items-center relative">
        <p className="text-cloudy">Featured</p>
        <div>
          <Image
            src={AmazonFireLogo}
            alt="Amazon Fire Logo"
            height={450}
            width={450}
          />
        </div>
        <p className="text-black">Magically simple!</p>
        <Button className="shadow-sm rounded-md hover:shadow-md bg-gradient-to-r from-amazon to-yellow-500 w-1/3 py-8 lg:absolute bottom-[-3rem]">
          Shop now
        </Button>
      </div>
    </Link>
  );
}

export default Banner;
