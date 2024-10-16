import React from 'react';
import { useLocation } from 'react-router-dom';
import './SearchResults.css';

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') || '';

  if (query.length < 4 || query.length > 12) {
    return (
      <div className="search-results-container">
        <h1 className="search-results-title">Invalid Search</h1>
        <p className="error-message">Search query must be between 4 and 12 characters long.</p>
      </div>
    );
  }

  const results = [
    { id: 1, title: "Paket Tour Bali", description: "Explore the beauty of the Island of the Gods, Bali.", image: "/img/bali.jpg" },
    { id: 2, title: "Paket Tour Paris", description: "Experience the romance of Paris, the city of lights.", image: "/img/paris.jpg" },
    { id: 3, title: "Paket Tour Yogyakarta", description: "Discover the cultural heritage and stunning landscapes of Yogyakarta.", image: "/img/yogyakarta.jpg" },
    { id: 4, title: "Paket Tour Tokyo", description: "Immerse yourself in the vibrant culture and technology of Tokyo.", image: "/img/tokyo.jpg" },
    { id: 5, title: "Paket Tour Jakarta", description: "Experience the bustling life of Indonesia's capital, Jakarta.", image: "/img/jakarta.jpg" },
    { id: 6, title: "Paket Tour Sydney", description: "Visit the iconic Sydney Opera House and beautiful beaches.", image: "/img/sydney.jpg" },
    { id: 7, title: "Paket Tour Lombok", description: "Relax on the pristine beaches of Lombok.", image: "/img/lombok.jpg" },
    { id: 8, title: "Paket Tour New York", description: "Explore the iconic landmarks of New York City.", image: "/img/newyork.jpg" },
    { id: 9, title: "Paket Tour Sumatra", description: "Experience the unique wildlife and culture of Sumatra.", image: "/img/sumatra.jpg" },
    { id: 10, title: "Paket Tour Rome", description: "Discover the history and beauty of Rome, the Eternal City.", image: "/img/rome.jpg" },
    { id: 11, title: "Paket Tour Bromo", description: "Witness the breathtaking sunrise at Mount Bromo.", image: "/img/bromo.jpg" },
    { id: 12, title: "Paket Tour Bangkok", description: "Enjoy the vibrant street life and cultural landmarks of Bangkok.", image: "/img/bangkok.jpg" },
    { id: 13, title: "Paket Tour Malang", description: "Visit the beautiful city of Malang and its surrounding natural wonders.", image: "/img/malang.jpg" },
    { id: 14, title: "Paket Tour London", description: "Experience the charm and history of London.", image: "/img/london.jpg" },
    { id: 15, title: "Paket Tour Batam", description: "Relax in the beautiful resorts of Batam.", image: "/img/batam.jpg" },
    { id: 16, title: "Paket Tour Seoul", description: "Discover the modern and traditional culture of Seoul.", image: "/img/seoul.jpg" },
    { id: 17, title: "Paket Tour Toba", description: "Explore the magnificent Lake Toba, the largest volcanic lake in the world.", image: "/img/toba.jpg" },
    { id: 18, title: "Paket Tour Amsterdam", description: "Enjoy the picturesque canals and vibrant culture of Amsterdam.", image: "/img/amsterdam.jpg" },
    { id: 19, title: "Paket Tour Karimunjawa", description: "Explore the beautiful islands of Karimunjawa.", image: "/img/karimunjawa.jpg" },
    { id: 20, title: "Paket Tour Santorini", description: "Experience the breathtaking views of Santorini, Greece.", image: "/img/santorini.jpg" },
  ].filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="search-results-container">
      <h1 className="search-results-title">Search Results for "{query}"</h1>
      {results.length > 0 ? (
        <ul className="result-list">
          {results.map(result => (
            <li key={result.id} className="result-item">
              <img src={result.image} alt={result.title} className="result-item-image" /> {/* Add this line */} 
              <h3 className="result-item-title">{result.title}</h3>
              <p className="result-item-description">{result.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-results">No results found for "{query}".</p>
      )}
    </div>
  );
}

export default SearchResults;
