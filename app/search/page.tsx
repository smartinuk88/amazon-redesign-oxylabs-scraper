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
    <div>
      <h1 className="text-3xl font-bold mb-2">Results for {q}</h1>
      <h2 className="mb-5 text-gray-400">
        ({results?.content.total_results_count || 0} results)
      </h2>
      <ul className="flex flex-col space-y-8">
        {results?.content.results.organic.map((product) => (
          <li key={product.asin}>
            <Product key={product.asin} product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;
