import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Content } from "./typings/productTypings";
import { OrganicProduct } from "./typings/searchTypings";
import { BasicProduct } from "./typings/sharedBasketTypings";

interface CartState {
  cart: BasicProduct[];
  addToCart: (product: BasicProduct) => void;
  removeFromCart: (product: BasicProduct) => void;
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
