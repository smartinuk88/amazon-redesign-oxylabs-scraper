import { BasicProduct } from "@/typings/sharedBasketTypings";

export function groupByASIN(
  products: BasicProduct[]
): Record<string, BasicProduct[]> {
  return products?.reduce(
    (
      accumulator: Record<string, BasicProduct[]>,
      currentProduct: BasicProduct
    ) => {
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
