import React from 'react';

interface ProductPreviewProps {
  product: string;
  color: string;
  text: string;
  image: string | null;
}

export function ProductPreview({ product, color, text, image }: ProductPreviewProps) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        Preview Your Design
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[0, 15, -15].map((angle, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition-transform"
          >
            <div
              className="w-full aspect-square rounded-lg"
              style={{
                backgroundColor: color,
                transform: `perspective(1000px) rotateY(${angle}deg)`,
              }}
            >
              {image && (
                <img
                  src={image}
                  alt="Preview"
                  className="absolute inset-0 w-full h-full object-contain p-8"
                />
              )}
              {text && (
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <p className="text-center break-words max-w-full">
                    {text}
                  </p>
                </div>
              )}
            </div>
            <p className="mt-4 text-center text-sm text-gray-500">
              {index === 0 ? 'Front View' : index === 1 ? 'Side View' : 'Back View'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}