import React from 'react';
import { Filters } from '@/types';
import { Button } from '@/components/ui/button';

interface ProductFiltersProps {
  filters: Filters;
  onUpdateFilters: (filters: Filters) => void;
}

export function ProductFilters({ filters, onUpdateFilters }: ProductFiltersProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {['All', 'Anime', 'Arabic', 'Motivational'].map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.categories.includes(category.toLowerCase())}
                onChange={(e) => {
                  const newCategories = e.target.checked
                    ? [...filters.categories, category.toLowerCase()]
                    : filters.categories.filter((c) => c !== category.toLowerCase());
                  onUpdateFilters({ ...filters, categories: newCategories });
                }}
                className="rounded border-gray-300"
              />
              <span className="ml-2">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Size</h3>
        <div className="space-y-2">
          {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <label key={size} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.sizes.includes(size)}
                onChange={(e) => {
                  const newSizes = e.target.checked
                    ? [...filters.sizes, size]
                    : filters.sizes.filter((s) => s !== size);
                  onUpdateFilters({ ...filters, sizes: newSizes });
                }}
                className="rounded border-gray-300"
              />
              <span className="ml-2">{size}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <input
              type="number"
              value={filters.priceRange[0]}
              onChange={(e) => {
                onUpdateFilters({
                  ...filters,
                  priceRange: [Number(e.target.value), filters.priceRange[1]],
                });
              }}
              className="w-full border rounded-md p-2"
              placeholder="Min"
            />
            <input
              type="number"
              value={filters.priceRange[1]}
              onChange={(e) => {
                onUpdateFilters({
                  ...filters,
                  priceRange: [filters.priceRange[0], Number(e.target.value)],
                });
              }}
              className="w-full border rounded-md p-2"
              placeholder="Max"
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => onUpdateFilters({ ...filters, priceRange: [0, 1000] })}
          >
            Reset Price
          </Button>
        </div>
      </div>
    </div>
  );
}