import { Result } from "@/typings/searchTypings";

function fetchSearch(searchTerm: string) {
  const username = process.env.OXYLABS_USERNAME;
  const password = process.env.OXYLABS_PASSWORD;

  const body = {
    source: "amazon_search",
    domain: "com",
    query: searchTerm,
    pages: 2,
    parse: true,
  };

  const response = fetch("https://realtime.oxylabs.io/v1/queries", {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.results === 0) return;
      const result: Result = data.results[0];

      return result;
    })
    .catch((err) => console.log(err));

  return response;
}

export default fetchSearch;
