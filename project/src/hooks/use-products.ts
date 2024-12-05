import { useState, useEffect } from 'react';
import { Product, Filters } from '@/types';
import { mockProducts } from '@/config/mock-data';

export function useProducts() {
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    sizes: [],
    priceRange: [0, 1000],
  });

  const [products, setProducts] = useState<Product[]>(mockProducts);

  useEffect(() => {
    let filtered = mockProducts;

    if (filters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.categories.includes(product.category.toLowerCase())
      );
    }

    if (filters.sizes.length > 0) {
      filtered = filtered.filter((product) =>
        product.sizes.some((size) => filters.sizes.includes(size))
      );
    }

    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    setProducts(filtered);
  }, [filters]);

  return {
    products,
    filters,
    updateFilters: setFilters,
  };
}