"use client";

import Image from "next/image";
import Link from "next/link";
import Smartwatch from "@/public/images/smartwatch-transparent.png";
import PrimeTick from "@/public/images/amazon-prime-transparent.png";
import { useState } from "react";
import { Star } from "lucide-react";

// type Props = {
//   product?: {
//     url?: string;
//     title?: string;
//     image?: string;
//     price?: number;
//   };
// };

function Product() {
  const MAX_RATING = 5;
  const MIN_RATING = 1;

  const labelOptions = [null, "Trending", "Amazon's Choice", "Best Seller"];

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  const [label] = useState(
    labelOptions[Math.floor(Math.random() * labelOptions.length)]
  );

  return (
    <Link
      href={{
        pathname: "/",
        // query: { url: product.url },
      }}
      className="grid grid-cols-4 border rounded-md h-64 w-full border-cloudy shadow-md"
    >
      <div className="relative col-span-1 flex justify-center items-center">
        <Image
          src={Smartwatch}
          alt="smartwatch"
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div className="col-span-2 flex flex-col items-start justify-between py-6">
        <div className="flex flex-col space-y-3">
          <p className="font-bold line-clamp-2">
            Apple Watch Series 5 GPS + Celular - 40mm Space Gray Aluminum Case
            w/ Black Sport Band
          </p>
          <div className="flex items-center">
            {Array(rating)
              .fill(0)
              .map((_, i) => (
                <Star key={i} className="h-5 text-amazon" />
              ))}
          </div>
          <div className="flex space-x-5 items-center">
            <p className="font-bold">
              <span className="text-xs">$</span>199.
              <span className="text-xs">99</span>
            </p>
            {hasPrime && (
              <Image src={PrimeTick} alt="Amazon Prime tick icon" height={10} />
            )}
          </div>
        </div>

        {label && (
          <p
            className={`${
              label === "Amazon's Choice"
                ? "bg-navy text-amazon"
                : "border border-amazon"
            } text-center w-1/2 justify-self-end rounded-full p-2`}
          >
            {label}
          </p>
        )}
      </div>
      <div className="col-span-1 flex flex-col justify-end px-10 py-6">
        <button
          className="px-4 py-2 cursor-pointer hover:opacity-80 border border-amazon shadow-sm rounded-full hover:shadow-md bg-gradient-to-r from-amazon to-yellow-500 text-white
         transition-all duration-300"
        >
          Add To Cart
        </button>
      </div>
    </Link>
  );
}

export default Product;
