"use client";

import { useCartStore } from "@/store";
import { Button } from "./ui/button";
import { BasicProduct } from "@/typings/sharedBasketTypings";

function RemoveFromCart({ product }: { product: BasicProduct }) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Stop event from propagating to parent Link
    e.preventDefault();
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
