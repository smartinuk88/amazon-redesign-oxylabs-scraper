import fetchProduct from "@/lib/fetchProduct";

type Props = {
  searchParams: {
    asin: string;
  };
};

async function ProductPage({ searchParams: { asin } }: Props) {
  const product = await fetchProduct(asin);

  console.log(product);
  return (
    <div className="mx-7 md:mr-12 md:ml-52 mt-32 mb-20 min-h-screen">page</div>
  );
}

export default ProductPage;
