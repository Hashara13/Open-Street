import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">
            BookExplorer
          </Link>
          <div className="hidden md:flex space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <NavLink to="/" mobile onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/search" mobile onClick={() => setIsOpen(false)}>Search</NavLink>
          <NavLink to="/favorites" mobile onClick={() => setIsOpen(false)}>Favorites</NavLink>
        </motion.div>
      )}
    </nav>
  );
}

function NavLink({ to, children, mobile, onClick }) {
  const baseClasses = "block py-2 px-4 hover:bg-indigo-700 transition duration-200";
  const mobileClasses = mobile ? "text-lg" : "";

  return (
    <Link to={to} className={`${baseClasses} ${mobileClasses}`} onClick={onClick}>
      {children}
    </Link>
  );
}

