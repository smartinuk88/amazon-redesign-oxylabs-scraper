"use client";

import { getCartTotal } from "@/lib/getCartTotal";
import { groupByASIN } from "@/lib/groupByASIN";
import { useCartStore } from "@/store";
import Image from "next/image";
import AddToCart from "./AddToCart";
import { Button } from "./ui/button";
import { BasicProduct } from "@/typings/sharedBasketTypings";
import { Content } from "@/typings/productTypings";

function isContent(product: BasicProduct): product is Content {
  return "images" in product;
}

function Basket() {
  const cart = useCartStore((state) => state.cart);
  const grouped = groupByASIN(cart);
  const basketTotal = getCartTotal(cart);

  return (
    <div className="max-w-7xl mx-auto">
      <ul className="space-y-5 divide-y-2">
        {Object.keys(grouped).map((asin) => {
          const item = grouped[asin][0];
          const total = getCartTotal(grouped[asin]);

          return (
            <li
              key={asin}
              className="p-5 my-2 flex border border-cloudy rounded-md shadow-md md:flex-row items-center justify-between"
            >
              {isContent(item) ? (
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              ) : (
                <Image
                  src={item.url_image}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              )}

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pl-4">
                <div>
                  <p className="line-clamp-2 font-bold">{item.title}</p>
                  {isContent(item) && (
                    <div className="line-clamp-1 font-light text-sm mt-2">
                      {item.description}
                    </div>
                  )}
                </div>

                <div className="flex flex-row justify-end md:flex-col md:justify-start h-full space-x-4 md:space-x-0 items-end">
                  <AddToCart product={item} />

                  <p className="md:mt-4 font-bold text-right">{total}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col justify-end">
        <p className="font-bold text-2xl text-right text-amazon mt-16 mb-1 mx-5">
          Total: {basketTotal}
        </p>

        <Button className="mt-5 h-20 border border-amazon shadow-sm rounded-full hover:shadow-md bg-gradient-to-r from-amazon to-yellow-500">
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default Basket;
