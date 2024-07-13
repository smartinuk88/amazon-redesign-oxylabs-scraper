"use client";

import { useCartStore } from "@/store";
import { Button } from "./ui/button";
import RemoveFromCart from "./RemoveFromCart";
import { BasicProduct } from "@/typings/sharedBasketTypings";

function AddToCart({ product }: { product: BasicProduct }) {
  const [cart, addToCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
  ]);

  console.log(cart);

  const howManyInCart = cart.filter(
    (item) => item.asin === product.asin
  ).length;

  console.log("How many in cart: ", howManyInCart);

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Stop event from propagating to parent Link
    e.preventDefault();
    console.log("Adding to cart", product);
    addToCart(product);
  };

  if (howManyInCart > 0) {
    return (
      <div className="flex space-x-3 md:space-x-5 items-center">
        <RemoveFromCart product={product} />
        <span>{howManyInCart}</span>
        <Button
          className="shadow-sm rounded-full hover:shadow-md bg-gradient-to-r from-amazon to-yellow-500"
          onClick={handleAdd}
        >
          +
        </Button>
      </div>
    );
  }

  return (
    <Button
      className="shadow-sm rounded-full hover:shadow-md bg-gradient-to-r from-amazon to-yellow-500"
      onClick={handleAdd}
    >
      Add to Cart
    </Button>
  );
}

export default AddToCart;
