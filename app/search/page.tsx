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
      <h2 className="mb-5 text-gray-400">
        ({results?.content.total_results_count} results)
      </h2>
      <ul className="flex flex-col space-y-5">
        {results?.content.results.organic.map((product) => (
          <li>
            <Product key={product.asin} product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;
