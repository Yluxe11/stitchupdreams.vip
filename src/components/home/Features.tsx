import React from 'react';
import { Scissors, Globe2, Palette, Sparkles } from 'lucide-react';

const features = [
  {
    name: 'Premium Quality',
    description: 'High-quality fabrics and precise embroidery for lasting beauty.',
    icon: Scissors,
  },
  {
    name: 'Global Shipping',
    description: 'We deliver your custom creations worldwide.',
    icon: Globe2,
  },
  {
    name: 'Custom Designs',
    description: 'Upload your own designs or choose from our templates.',
    icon: Palette,
  },
  {
    name: 'Exclusive Collections',
    description: 'Limited edition designs and seasonal collections.',
    icon: Sparkles,
  },
];

export function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose StitchUpDreams
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute h-12 w-12 rounded-md bg-blue-500 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}