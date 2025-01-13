import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BookCard from './components/BookCard';
import BookModal from './components/BookModal';
import Footer from './components/Footer';

// Sample book data
const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 24.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
    description: "Between life and death there is a library, and within that library, the shelves go on forever...",
    publicationDate: "2020-08-13"
  },
  {
    id: 2,
    title: "Dune",
    author: "Frank Herbert",
    price: 29.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides...",
    publicationDate: "1965-08-01"
  },
  {
    id: 3,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 27.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
    description: "Ryland Grace is the sole survivor on a desperate, last-chance mission...",
    publicationDate: "2021-05-04"
  },
  {
    id: 4,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 22.99,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
    description: "Alicia Berenson's life is seemingly perfect. A famous painter married...",
    publicationDate: "2019-02-05"
  }
];

function App() {
  const [selectedBook, setSelectedBook] = useState<typeof books[0] | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative bg-indigo-900 text-white">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000"
              alt="Library"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Your Next Great Read
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Explore our vast collection of books across all genres. From bestsellers to rare finds,
              we have something for every reader.
            </p>
          </div>
        </div>
      </div>

      {/* Book Listings */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard
              key={book.id}
              {...book}
              onViewDetails={() => setSelectedBook(book)}
            />
          ))}
        </div>
      </div>

      {/* Book Modal */}
      {selectedBook && (
        <BookModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;