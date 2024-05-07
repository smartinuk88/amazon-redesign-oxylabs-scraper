"use client";

import Image from "next/image";
import Link from "next/link";
import PrimeTick from "@/public/images/amazon-prime-transparent.png";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { OrganicProduct } from "@/typings/searchTypings";

function Product({ product }: { product: OrganicProduct }) {
  const labelOptions = [null, "Trending", "Amazon's Choice", "Best Seller"];

  const [hasPrime, setHasPrime] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [amountSold, setAmountSold] = useState(0);

  useEffect(() => {
    setHasPrime(Math.random() < 0.5);
    setAmountSold(Math.floor(Math.random() * 101));

    if (product.best_seller) {
      setLabel("Best Seller");
    } else if (product.is_amazons_choice) {
      setLabel("Amazon's Choice");
    } else if (product.is_sponsored) {
      setLabel("Sponsored");
    }
  }, []);

  return (
    <Link
      href={{
        pathname: "/product",
        query: { asin: product.asin },
      }}
      className="relative flex flex-col md:grid md:grid-cols-4 border rounded-md w-full min-h-64 border-cloudy shadow-md hover:border-fusion transition-all duration-300"
    >
      <div className="triangle-up">
        <span className="triangle-text text-xs font-semibold text-white z-10">
          {amountSold}% sold
        </span>
      </div>
      <div className="relative md:col-span-1 flex justify-center items-center w-full md:h-full p-2">
        <Image
          src={product.url_image}
          alt={product.title}
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>
      <div className="md:col-span-2 flex flex-col items-start justify-between py-6 px-6 md:px-0 ">
        <div className="flex flex-col space-y-3 mb-3 md:mb-0">
          <p className="font-bold text-lg line-clamp-2">{product.title}</p>
          <div className="flex items-center space-x-3">
            {Array(Math.round(product.rating))
              .fill(0)
              .map((_, i) => (
                <Star key={i} className="h-5 text-amazon" />
              ))}
            <span className="text-xs">({product.reviews_count})</span>
          </div>
          <div className="flex space-x-5 items-center">
            <p className="font-bold">
              <span className="text-xs">$</span>
              {product.price}
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
