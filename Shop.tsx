import React, { useState } from 'react';
import { FilterBar } from '../components/shop/FilterBar';
import { ProductCard } from '../components/shop/ProductCard';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: '1',
    name: 'Classic Anime T-Shirt',
    price: 29.99,
    category: 'T-Shirts',
    fabric: 'Cotton',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: '2',
    name: 'Motivational Hoodie',
    price: 49.99,
    category: 'Hoodies',
    fabric: 'Cotton',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: '3',
    name: 'Abstract Art Cap',
    price: 24.99,
    category: 'Caps',
    fabric: 'Polyester',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=500',
  },
  // Add more products as needed
];

export function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFabric, setSelectedFabric] = useState('All');
  const [cartMessage, setCartMessage] = useState<string | null>(null);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const fabricMatch = selectedFabric === 'All' || product.fabric === selectedFabric;
    return categoryMatch && fabricMatch;
  });

  const handleAddToCart = () => {
    setCartMessage("You're one step closer to expressing your unique style!");
    setTimeout(() => setCartMessage(null), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Shop Our Collection
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Find the perfect piece to express your unique style
          </p>
        </div>

        <div className="mt-12">
          <FilterBar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedFabric={selectedFabric}
            onFabricChange={setSelectedFabric}
          />
        </div>

        {cartMessage && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
            {cartMessage}
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="mt-12 text-center">
            <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No products found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try changing your filters or check back later for new items.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}