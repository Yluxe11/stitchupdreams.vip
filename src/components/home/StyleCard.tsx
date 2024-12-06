import React from 'react';
import { Sparkles } from 'lucide-react';

interface StyleCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  isSelected: boolean;
  onSelect: () => void;
}

export function StyleCard({ title, description, image, isSelected, onSelect }: StyleCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-lg shadow-lg transition-all duration-300
        ${isSelected ? 'ring-4 ring-blue-500 transform scale-105' : 'hover:shadow-xl'}
      `}
      onClick={onSelect}
    >
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          {title}
          {isSelected && <Sparkles className="w-5 h-5 animate-bounce" />}
        </h3>
        <p className="text-gray-200 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}