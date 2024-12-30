import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-indigo-800 mb-8"
      >
        Welcome to BookExplorer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-gray-700 mb-8"
      >
        Discover your next favorite book with our powerful search engine.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link
          to="/search"
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-200"
        >
          Start Exploring
        </Link>
      </motion.div>
    </div>
  );
}

