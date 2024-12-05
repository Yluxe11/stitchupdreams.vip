import { Product } from '@/types';

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Naruto Embroidered T-Shirt',
    description: 'Classic black t-shirt with detailed Naruto embroidery',
    price: 29.99,
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80',
    ],
    category: 'anime',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['black', 'white', 'navy'],
  },
  {
    id: '2',
    title: 'Arabic Calligraphy Tee',
    description: 'Elegant t-shirt featuring beautiful Arabic calligraphy',
    price: 34.99,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80',
    ],
    category: 'arabic',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['white', 'beige', 'gray'],
  },
  {
    id: '3',
    title: 'Motivational Quote Shirt',
    description: 'Inspirational quote embroidered in modern typography',
    price: 32.99,
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80',
    ],
    category: 'motivational',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['black', 'gray', 'navy'],
  },
  {
    id: '4',
    title: 'One Piece Crew T-Shirt',
    description: 'Featuring the iconic Straw Hat crew embroidery',
    price: 31.99,
    images: [
      'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80',
    ],
    category: 'anime',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['white', 'black', 'red'],
  },
];