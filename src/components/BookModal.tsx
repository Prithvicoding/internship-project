import React from 'react';
import { X, Star } from 'lucide-react';

interface BookModalProps {
  book: {
    title: string;
    author: string;
    description: string;
    publicationDate: string;
    rating: number;
    price: number;
    image: string;
  };
  onClose: () => void;
}

export default function BookModal({ book, onClose }: BookModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{book.title}</h2>
            <p className="text-gray-600 mt-2">{book.author}</p>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < book.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">({book.rating}/5)</span>
            </div>
            <p className="text-gray-700 mt-4">{book.description}</p>
            <div className="mt-4">
              <p className="text-gray-600">Publication Date: {book.publicationDate}</p>
              <p className="text-xl font-bold text-indigo-600 mt-2">${book.price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}