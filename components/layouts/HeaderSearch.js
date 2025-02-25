import { useState } from "react";

const HeaderSearch = ({ toggleSearch }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Static content index
  const staticContent = [
    { id: 1, title: "Home Page", description: "Welcome to our homepage", url: "/" },
    { id: 2, title: "About Us", description: "Learn more about our company", url: "/about" },
    { id: 3, title: "Services", description: "Explore our services", url: "/services" },
    { id: 4, title: "Contact Us", description: "Get in touch with us", url: "/contact" },
    { id: 5, title: "Blog", description: "Read our latest blog posts", url: "/blog" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    // Filter static content based on the query
    const filteredResults = staticContent.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <div className="axil-search-area">
      <form action="#" className="axil-searchbar w-100" onSubmit={handleSearch}>
        <div className="search-field">
          <input
            type="text"
            placeholder="Search Here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="navbar-search-btn" type="submit">
            <i className="fal fa-search"></i>
          </button>
        </div>
        <button className="navbar-search-close" onClick={toggleSearch}>
          <i className="fal fa-times" />
        </button>
      </form>

      {/* Display search results */}
      {results.length > 0 && (
        <div className="search-results">
          <h4>Search Results:</h4>
          <ul>
            {results.map((result) => (
              <li key={result.id}>
                <a href={result.url}>{result.title}</a>
                <p>{result.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {query && results.length === 0 && (
        <div className="no-results">
          <p>No results found for "{query}".</p>
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;
