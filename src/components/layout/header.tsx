import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Globe2, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { SITE_CONFIG } from '@/lib/constants';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Button variant="outline" size="sm" className="mr-2 lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Link to="/" className="text-2xl font-bold">
              {SITE_CONFIG.name} <span className="text-primary">({SITE_CONFIG.shortName})</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/shop" className="text-sm font-medium hover:text-primary">
              Shop
            </Link>
            <Link to="/customize" className="text-sm font-medium hover:text-primary">
              Customize
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm">
              <Globe2 className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}