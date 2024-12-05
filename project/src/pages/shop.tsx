import React from 'react';
import { ProductGrid } from '@/components/shop/product-grid';
import { ProductFilters } from '@/components/shop/product-filters';
import { useProducts } from '@/hooks/use-products';

export function Shop() {
  const { products, filters, updateFilters } = useProducts();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Shop Collection</h1>
      
      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        <div className="hidden lg:block">
          <ProductFilters filters={filters} onUpdateFilters={updateFilters} />
        </div>
        
        <div className="lg:col-span-3">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}