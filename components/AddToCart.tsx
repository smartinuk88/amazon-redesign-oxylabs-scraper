"use client";

import { useCartStore } from "@/store";
import { Content } from "@/typings/productTypings";
import { Button } from "./ui/button";
import RemoveFromCart from "./RemoveFromCart";

function AddToCart({ product }: { product: Content }) {
  const [cart, addToCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
  ]);

  console.log(cart);

  const howManyInCart = cart.filter(
    (item) => item.asin === product.asin
  ).length;

  console.log("How many in cart: ", howManyInCart);

  const handleAdd = () => {
    console.log("Adding to cart", product);
    addToCart(product);
  };

  if (howManyInCart > 0) {
    return (
      <div className="flex space-x-5 items-center">
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