// src/pages/ProductsPage.tsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { image: '/images/product1.jpg', title: 'Anime Characters', description: 'Custom embroidered anime characters.' },
  { image: '/images/product2.jpg', title: 'Motivational Quotes', description: 'Beautifully embroidered motivational quotes.' },
  { image: '/images/product3.jpg', title: 'Arabic Calligraphy', description: 'Elegant Arabic calligraphy designs.' },
];

const ProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-4">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
