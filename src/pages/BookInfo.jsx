import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import BooksAPI from '../hooks/BooksAPI';
export default function BookInfo() {
  const { id } = useParams();
  const { books, loading, error } = BooksAPI(`id:${id}`);
  const book = books[0];

  if (loading) {
    return <div className="text-center text-xl text-indigo-600 mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-600 mt-8">Error: {error}</div>;
  }

  if (!book) {
    return <div className="text-center text-xl text-red-600 mt-8">Book not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img
            src={book.volumeInfo.imageLinks?.thumbnail || '/placeholder.svg'}
            alt={book.volumeInfo.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold text-indigo-800 mb-4">{book.volumeInfo.title}</h1>
          <h2 className="text-xl text-gray-600 mb-4">
            {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}
          </h2>
          <p className="text-gray-700 mb-4">{book.volumeInfo.description}</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-indigo-700">Publisher</h3>
              <p>{book.volumeInfo.publisher || 'Unknown'}</p>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-700">Published Date</h3>
              <p>{book.volumeInfo.publishedDate || 'Unknown'}</p>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-700">Page Count</h3>
              <p>{book.volumeInfo.pageCount || 'Unknown'}</p>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-700">Categories</h3>
              <p>{book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : 'Unknown'}</p>
            </div>
          </div>
          <div className="mt-8">
            <a
              href={book.volumeInfo.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
            >
              Preview Book
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

