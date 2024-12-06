import React from 'react';
import { SITE_CONFIG } from '@/lib/constants';

export function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About {SITE_CONFIG.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg mb-6">
            In a small neighborhood, there was a young person who grew up in a humble family, 
            always believing in the power of dreams and hard work. From a young age, they were 
            deeply passionate about anime, and the characters they admired gave them a sense of 
            strength and determination to chase their dreams, no matter the obstacles.
          </p>
          <p className="text-lg mb-6">
            One day, the idea of starting a clothing business emerged. However, finding a unique 
            concept proved challenging. It was in that moment that they realized the perfect fusion: 
            combining their love for anime with motivational messages they had always believed in.
          </p>
          <p className="text-lg mb-6">
            The first collection was born, featuring anime-inspired embroidery with words of 
            inspiration that reflected their own determination and ambitions. They named the brand 
            StitchUp Dreams, as each design symbolized a thread connecting dreams with reality.
          </p>
          <p className="text-lg mb-6">
            Soon, friends and family started sharing the designs, and the response was overwhelming. 
            Customers found that these clothes were not just fabric, but carried a message. Wearing 
            these pieces became a source of empowerment, a reminder to face challenges head-on.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">
              At {SITE_CONFIG.name}, we believe in the power of self-expression through fashion. 
              Our mission is to create unique, high-quality embroidered apparel that inspires and 
              empowers people to embrace their passions and chase their dreams.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-semibold mr-2">Quality:</span>
                <span>We use premium materials and detailed craftsmanship in every piece.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Creativity:</span>
                <span>Each design is thoughtfully created to tell a unique story.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Community:</span>
                <span>We celebrate diversity and bring people together through shared interests.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Sustainability:</span>
                <span>We're committed to ethical production and environmental responsibility.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}