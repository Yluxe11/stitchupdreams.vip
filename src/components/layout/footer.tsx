import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '@/lib/constants';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">{SITE_CONFIG.name}</h3>
            <p className="text-gray-400">{SITE_CONFIG.description}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/social" className="text-gray-400 hover:text-white">Social Media</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@stitchcraft.com</li>
              <li>WhatsApp: +1 234 567 890</li>
              <li>Phone: +1 234 567 890</li>
              <li>Telegram: @stitchcraft</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href={SITE_CONFIG.links.twitter} className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href={SITE_CONFIG.links.instagram} className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}