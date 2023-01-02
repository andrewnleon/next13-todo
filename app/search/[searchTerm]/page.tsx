import { notFound } from "next/navigation";
import React from "react";
import { SearchResult, PageProps } from "../../../typings";

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&lr=lang_en&api_key=${process.env.API_KEY}`
  );
  const data: SearchResult = await res.json();
  return data;
};

async function SearchResults({ params: { searchTerm } }: PageProps) {
  const searchResults = await search(searchTerm);
  if (!searchResults) return notFound();
  return (
    <div>
      <p>Searched: {searchTerm}</p>
      <ol className="p-5 space-y-5">
        {searchResults.organic_results.map((result) => (
          <li key={result.position} className="list-decimal">
            <p>{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SearchResults;
