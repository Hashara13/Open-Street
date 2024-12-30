import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import SearchCard from './pages/SearchCard';
import BookInfo from './pages/BookInfo';
import WishList from './pages/Wishlist';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
        <NavBar/>
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchCard />} />
            <Route path="/book/:id" element={<BookInfo />} />
            <Route path="/favorites" element={<WishList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

