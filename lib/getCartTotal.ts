import { Content } from "@/typings/productTypings";

export function getCartTotal(products: Content[]): string {
  const total = products.reduce(
    (acc: number, currentProduct: Content) => acc + currentProduct.price,
    0
  );

  return `${
    products[0]?.currency ? products[0]?.currency : "$"
  } ${total.toFixed(2)}`;
}
