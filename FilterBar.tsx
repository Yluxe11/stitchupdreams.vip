import React from 'react';
import { Filter } from 'lucide-react';

interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedFabric: string;
  onFabricChange: (fabric: string) => void;
}

const categories = ['All', 'T-Shirts', 'Hoodies', 'Caps', 'Tote Bags'];
const fabrics = ['All', 'Cotton', 'Polyester', 'Blend'];

export function FilterBar({
  selectedCategory,
  onCategoryChange,
  selectedFabric,
  onFabricChange,
}: FilterBarProps) {
  return (
    <div className="bg-white shadow-sm p-4 rounded-lg">
      <div className="flex items-center space-x-4">
        <Filter className="w-5 h-5 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Filters:</span>
      </div>
      
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Fabric</label>
          <select
            value={selectedFabric}
            onChange={(e) => onFabricChange(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            {fabrics.map((fabric) => (
              <option key={fabric} value={fabric}>
                {fabric}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}