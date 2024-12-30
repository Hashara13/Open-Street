import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BookInfo from './BookInfo';
export default function WishList() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-indigo-800 mb-8"
      >
        Your Favorite Books
      </motion.h1>
      {favorites.length === 0 ? (
        <p className="text-center text-xl text-gray-600">You haven't added any favorites yet.</p>
      ) : (
        <BookInfo books={favorites} />
      )}
    </div>
  );
}

