import React from 'react';
import { motion } from 'framer-motion';
import HoverCard from './HoverCard';
export default function List({ books }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {books.map((book, index) => (
        <HoverCard key={book.id} book={book} index={index} />
      ))}
    </motion.div>
  );
}

