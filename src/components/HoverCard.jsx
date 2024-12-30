import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HoverCard({ book, index }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.some(fav => fav.id === book.id));
  }, [book.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorite) {
      const updatedFavorites = favorites.filter(fav => fav.id !== book.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      favorites.push(book);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={book.volumeInfo.imageLinks?.thumbnail || '/placeholder.svg'}
        alt={book.volumeInfo.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-indigo-800 mb-2">{book.volumeInfo.title}</h2>
        <p className="text-gray-600 mb-4">
          {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}
        </p>
        <p className="text-sm text-gray-500 mb-4 line-clamp-3">{book.volumeInfo.description}</p>
        <div className="flex justify-between items-center">
          <Link
            to={`/book/${book.id}`}
            className="inline-block bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-200"
          >
            Read More
          </Link>
          <button
            onClick={toggleFavorite}
            className={`text-2xl ${isFavorite ? 'text-yellow-500' : 'text-gray-400'}`}
          >
            ★
          </button>
        </div>
      </div>
    </motion.div>
  );
}

