import { useState, useEffect } from 'react';

export default function BooksAPI(query, page = 1, itemsPerPage = 9) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalItems, setTotalItems] = useState(0);

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (!query) return;

    const fetchBooks = async () => {
      setLoading(true);
      setError(null);

      try {
        const startIndex = (page - 1) * itemsPerPage;
        const response = await fetch(
          `${baseUrl}?q=${encodeURIComponent(query)}&startIndex=${startIndex}&maxResults=${itemsPerPage}&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }

        const data = await response.json();
        setBooks(data.items || []);
        setTotalItems(data.totalItems || 0);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [query, page, itemsPerPage, baseUrl, apiKey]);

  return { books, loading, error, totalItems };
}
