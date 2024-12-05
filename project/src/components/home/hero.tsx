import React from 'react';
import { Button } from '../ui/button';

export function Hero() {
  return (
    <div className="relative h-[600px] bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80")'
    }}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Express Yourself with Artfully Embroidered T-Shirts
          </h1>
          <p className="text-xl mb-8">
            Discover unique designs featuring anime art, Arabic calligraphy, and inspiring quotes.
            Each piece is crafted with care to bring your personality to life.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Customize Your Design
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}