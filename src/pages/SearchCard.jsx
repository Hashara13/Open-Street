import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import List from '../components/List';
import BooksAPI from '../hooks/BooksAPI';

export default function SearchCard() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { books, loading, error, totalItems } = BooksAPI(query, page);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
  };

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-indigo-800 mb-8"
      >
        Search Books
      </motion.h1>
      <SearchBar onSearch={handleSearch} />
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-xl text-indigo-600 mt-8"
        >
          Loading...
        </motion.div>
      )}
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-xl text-red-600 mt-8"
        >
          Error: {error}
        </motion.div>
      )}
      {books.length > 0 && (
        <div>
          <p className="text-center text-gray-600 mb-4">
            Showing {books.length} of {totalItems} results
          </p>
          <List books={books} />
        </div>
      )}
      {query && books.length === 0 && !loading && !error && (
        <p className="text-center text-xl text-gray-600 mt-8">No books found for "{query}"</p>
      )}
    </div>
  );
}
