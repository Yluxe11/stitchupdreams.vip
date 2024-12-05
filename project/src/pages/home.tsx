import React from 'react';
import { Hero } from '@/components/home/hero';
import { Categories } from '@/components/home/categories';
import { Features } from '@/components/home/features';

export function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Features />
    </>
  );
}