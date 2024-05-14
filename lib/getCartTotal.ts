import { BasicProduct } from "@/typings/sharedBasketTypings";

export function getCartTotal(products: BasicProduct[]): string {
  const total = products.reduce(
    (acc: number, currentProduct: BasicProduct) => acc + currentProduct.price,
    0
  );

  return `${
    products[0]?.currency ? products[0]?.currency : "$"
  } ${total.toFixed(2)}`;
}
