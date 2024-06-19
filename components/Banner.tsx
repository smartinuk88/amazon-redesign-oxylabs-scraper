import Image from "next/image";
import AmazonFire from "@/public/images/amazon-fire.png";
import AmazonFireLogo from "@/public/images/amazon-fire-logo.png";
import { Button } from "./ui/button";
import Link from "next/link";

function Banner() {
  return (
    <div className="mb-32 p-8 lg:p-4 lg:pl-0 rounded-md lg:h-96 bg-gradient-to-br from-red-600 to-fusion flex flex-col lg:flex-row shadow-md w-full">
      <div className="w-full relative flex justify-center items-center">
        <Image
          src={AmazonFire}
          alt={"Amazon Fire stick"}
          height={650}
          width={650}
          className="lg:absolute max-w-full lg:max-w-xl p-8 lg:p-0"
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
        <Link
          href={{
            pathname: "/search",
            query: { q: "Amazon Fire TV" },
          }}
        >
          <Button className="text-xs md:text-base shadow-sm rounded-md hover:shadow-md bg-gradient-to-r from-amazon to-yellow-500 w-full lg:w-1/3 py-4 md:py-8 lg:absolute bottom-[-3rem]">
            Shop now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
