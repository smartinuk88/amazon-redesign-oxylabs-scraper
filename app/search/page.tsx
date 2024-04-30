import Product from "@/components/Product";
import fetchSearch from "@/lib/fetchSearch";

type Props = {
  searchParams: {
    q: string;
  };
};

async function SearchPage({ searchParams: { q } }: Props) {
  const results = await fetchSearch(q);

  return (
    <div className="mx-7 md:mr-12 md:ml-52 mt-32 mb-20 min-h-screen">
      <h1 className="text-3xl font-bold mb-2">Results for {q}</h1>
      <h2 className="mb-5 text-gray-400">(0 results)</h2>
      <div className="flex flex-col space-y-5 items-center">
        {/* <Product /> */}
      </div>
    </div>
  );
}

export default SearchPage;
