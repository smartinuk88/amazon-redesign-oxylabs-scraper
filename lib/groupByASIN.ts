import { Content } from "@/typings/productTypings";

export function groupByASIN(products: Content[]): Record<string, Content[]> {
  return products?.reduce(
    (accumulator: Record<string, Content[]>, currentProduct: Content) => {
      const asin = currentProduct.asin;
      if (!accumulator[asin]) {
        accumulator[asin] = [];
      }
      accumulator[asin].push(currentProduct);
      return accumulator;
    },
    {}
  );
}
