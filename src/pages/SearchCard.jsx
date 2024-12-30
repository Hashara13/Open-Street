import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import List from '../components/List';
import BooksAPI from '../hooks/BooksAPI';

export default function SearchCard() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { books, loading, error, totalItems } = BooksAPI(query, page);

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePreviousPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

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
      <SearchBar setQuery={setQuery} />
      {loading && <p className="text-center text-indigo-600">Loading...</p>}
      {error && <p className="text-center text-red-600">Error: {error}</p>}
      {books.length > 0 && <List books={books} />}
      {totalItems > 0 && (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-indigo-500 text-white rounded-l hover:bg-indigo-600"
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="px-4 py-2 bg-gray-200 text-gray-700">
            Page {page}
          </span>
          <button
            className="px-4 py-2 bg-indigo-500 text-white rounded-r hover:bg-indigo-600"
            onClick={handleNextPage}
            disabled={books.length < 9}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
