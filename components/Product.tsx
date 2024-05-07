"use client";

import Image from "next/image";
import Link from "next/link";
import Smartwatch from "@/public/images/smartwatch-transparent.png";
import PrimeTick from "@/public/images/amazon-prime-transparent.png";
import { useEffect, useState } from "react";
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

  const [rating, setRating] = useState(0);
  const [hasPrime, setHasPrime] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [amountSold, setAmountSold] = useState(0);

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setHasPrime(Math.random() < 0.5);
    setLabel(labelOptions[Math.floor(Math.random() * labelOptions.length)]);
    setAmountSold(Math.floor(Math.random() * 101));
  }, []);

  return (
    <Link
      href={{
        pathname: "/",
        // query: { url: product.url },
      }}
      className="relative flex flex-col md:grid md:grid-cols-4 border rounded-md md:h-64 w-full border-cloudy shadow-md hover:border-fusion transition-all duration-300"
    >
      <div className="triangle-up">
        <span className="triangle-text text-xs font-semibold text-white z-10">
          {amountSold}% sold
        </span>
      </div>
      <div className="relative md:col-span-1 flex justify-center items-center w-full h-72 md:h-full">
        <Image
          src={Smartwatch}
          alt="smartwatch"
          fill
          className="object-contain"
        />
      </div>
      <div className="md:col-span-2 flex flex-col items-start justify-between py-6 px-6 md:px-0 ">
        <div className="flex flex-col space-y-3 mb-3 md:mb-0">
          <p className="font-bold text-lg line-clamp-2">
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
            } hidden md:block text-center w-1/2 md:justify-self-end rounded-full p-2`}
          >
            {label}
          </p>
        )}
      </div>
      <div className="md:col-span-1 flex flex-col justify-end pl-4 pr-4 md:pl-0 lg:pl-4 py-6">
        <button
          className="px-4 md:px-2 lg:px-4 py-2 md:text-sm lg:text-base cursor-pointer hover:opacity-80 border border-amazon shadow-sm rounded-full hover:shadow-md bg-gradient-to-r from-amazon to-yellow-500 text-white
         transition-all duration-300"
        >
          Add To Cart
        </button>
      </div>
    </Link>
  );
}

export default Product;
