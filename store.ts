import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Content } from "./typings/productTypings";

interface CartState {
  cart: Content[];
  addToCart: (product: Content) => void;
  removeFromCart: (product: Content) => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        addToCart: (product) => {
          set((state) => ({
            cart: [...state.cart, product],
          }));
        },
        removeFromCart: (product) => {
          const productToRemove = get().cart.findIndex(
            (p) => p.asin === product.asin
          );

          set((state) => {
            const newCart = [...state.cart];

            newCart.splice(productToRemove, 1);
            return { cart: newCart };
          });
        },
      }),
      {
        name: "shopping-cart-storage",
      }
    )
  )
);
