"use client";

import { useCartStore } from "@/store";
import { Content } from "@/typings/productTypings";
import { Button } from "./ui/button";

function RemoveFromCart({ product }: { product: Content }) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleRemove = () => {
    console.log("Removing from cart", product.asin);
    removeFromCart(product);
  };
  return (
    <Button className="bg-amazon hover:bg-amazon/50" onClick={handleRemove}>
      -
    </Button>
  );
}

export default RemoveFromCart;
