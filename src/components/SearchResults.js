import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  const results = [
    { id: 1, title: "Bali" },
    { id: 2, title: "Japan" },
  ].filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="container-fluid text-light">
      <h1>Search Results for "{query}"</h1>
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;