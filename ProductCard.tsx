import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  onAddToCart: () => void;
}

export function ProductCard({ name, price, image, category, onAddToCart }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-4 aspect-h-3">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transform transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <span className="text-sm text-blue-600 font-medium">{category}</span>
        <h3 className="mt-1 text-lg font-semibold text-gray-900">{name}</h3>
        <p className="mt-1 text-xl font-bold text-gray-900">${price.toFixed(2)}</p>
        <button
          onClick={onAddToCart}
          className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}