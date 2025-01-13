import React from 'react';
import { Star } from 'lucide-react';

interface BookProps {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  rating: number;
  onViewDetails: () => void;
}

export default function BookCard({ title, author, price, image, rating, onViewDetails }: BookProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{author}</p>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-indigo-600">${price.toFixed(2)}</span>
          <button
            onClick={onViewDetails}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}