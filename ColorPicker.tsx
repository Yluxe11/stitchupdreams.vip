import React from 'react';
import { Palette } from 'lucide-react';

interface ColorPickerProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const colors = [
  '#ffffff', // White
  '#000000', // Black
  '#ef4444', // Red
  '#3b82f6', // Blue
  '#22c55e', // Green
  '#f59e0b', // Yellow
  '#8b5cf6', // Purple
  '#ec4899', // Pink
];

export function ColorPicker({ selectedColor, onColorChange }: ColorPickerProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto mt-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <Palette className="w-6 h-6 mr-2 text-gray-700" />
        Choose Your Color
      </h3>

      <div className="grid grid-cols-4 gap-4">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onColorChange(color)}
            className={`
              w-12 h-12 rounded-full transition-transform duration-300 ease-in-out
              ${selectedColor === color ? 'scale-110 border-4 border-blue-500' : 'border-2 border-gray-300'}
              shadow-sm hover:shadow-lg
            `}
            style={{ backgroundColor: color }}
            aria-label={`Select ${color} color`}
          />
        ))}
      </div>
    </div>
  );
}
