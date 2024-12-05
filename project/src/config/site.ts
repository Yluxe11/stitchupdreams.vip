import { Category, Feature } from '@/types';
import { Shield, Truck, HeartHandshake, MessageCircle } from 'lucide-react';

export const categories: Category[] = [
  {
    id: 'anime',
    title: 'Anime Designs',
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80',
    description: 'Express your love for anime with our exclusive collection'
  },
  {
    id: 'arabic',
    title: 'Arabic Quotes',
    image: 'https://images.unsplash.com/photo-1630751184795-c6b5c6249c19?auto=format&fit=crop&q=80',
    description: 'Beautiful Arabic calligraphy on premium quality t-shirts'
  },
  {
    id: 'motivational',
    title: 'Motivational Designs',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
    description: 'Wear your inspiration with our motivational collection'
  }
];

export const features: Feature[] = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'High-quality fabrics and detailed embroidery craftsmanship'
  },
  {
    icon: Truck,
    title: 'Global Shipping',
    description: 'Fast and secure worldwide delivery options'
  },
  {
    icon: HeartHandshake,
    title: 'Customer Satisfaction',
    description: '100% satisfaction guaranteed or your money back'
  },
  {
    icon: MessageCircle,
    title: '24/7 Support',
    description: 'Round-the-clock customer service to assist you'
  }
];