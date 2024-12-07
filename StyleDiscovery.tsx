import React, { useState } from 'react';
import { StyleCard } from './StyleCard';

const styles = [
  {
    id: 'anime',
    title: 'Anime Inspired',
    description: 'Express your passion for anime through unique embroidered designs',
    image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?auto=format&fit=crop&q=80&w=500',
    message: 'Your love for anime shows your creative spirit and dedication to your passions.',
  },
  {
    id: 'motivational',
    title: 'Motivational Quotes',
    description: 'Wear your inspiration with powerful multilingual messages',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=500',
    message: 'You inspire others through your choice of meaningful words and positive energy.',
  },
  {
    id: 'abstract',
    title: 'Abstract Art',
    description: 'Stand out with unique abstract embroidery patterns',
    image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&q=80&w=500',
    message: 'Your appreciation for abstract art reflects your sophisticated and unique perspective.',
  },
];

export function StyleDiscovery() {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What's Your Style?
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Discover designs that match your personality and make a statement
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {styles.map((style) => (
            <StyleCard
              key={style.id}
              {...style}
              isSelected={selectedStyle === style.id}
              onSelect={() => setSelectedStyle(style.id)}
            />
          ))}
        </div>

        {selectedStyle && (
          <div className="mt-12 text-center">
            <p className="text-lg text-blue-600 font-medium animate-fade-in">
              {styles.find(style => style.id === selectedStyle)?.message}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}