import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Social() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Connect With Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <a
          href="https://instagram.com/stitchcraft"
          className="flex flex-col items-center p-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 text-white hover:opacity-90 transition-opacity"
        >
          <Instagram className="h-12 w-12 mb-4" />
          <h2 className="text-xl font-bold mb-2">Instagram</h2>
          <p className="text-center">Follow us for the latest designs and behind-the-scenes content</p>
        </a>

        <a
          href="https://facebook.com/stitchcraft"
          className="flex flex-col items-center p-8 rounded-lg bg-blue-600 text-white hover:opacity-90 transition-opacity"
        >
          <Facebook className="h-12 w-12 mb-4" />
          <h2 className="text-xl font-bold mb-2">Facebook</h2>
          <p className="text-center">Join our community and stay updated with new collections</p>
        </a>

        <a
          href="https://twitter.com/stitchcraft"
          className="flex flex-col items-center p-8 rounded-lg bg-sky-500 text-white hover:opacity-90 transition-opacity"
        >
          <Twitter className="h-12 w-12 mb-4" />
          <h2 className="text-xl font-bold mb-2">Twitter</h2>
          <p className="text-center">Get quick updates and engage with our brand</p>
        </a>

        <a
          href="https://linkedin.com/company/stitchcraft"
          className="flex flex-col items-center p-8 rounded-lg bg-blue-700 text-white hover:opacity-90 transition-opacity"
        >
          <Linkedin className="h-12 w-12 mb-4" />
          <h2 className="text-xl font-bold mb-2">LinkedIn</h2>
          <p className="text-center">Connect with us professionally and follow our growth</p>
        </a>
      </div>
    </div>
  );
}