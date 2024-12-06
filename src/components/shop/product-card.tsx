import React from 'react';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
        />
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
          <Heart className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium">{product.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-semibold">${product.price}</p>
          <Button size="sm">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}