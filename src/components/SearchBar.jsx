import React, { useState } from 'react';

const SearchBar = ({ placeholder = "Search...", onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="flex items-center justify-center py-4">
      <form
        className="flex w-full max-w-md"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
