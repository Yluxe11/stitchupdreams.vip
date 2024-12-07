import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { StyleDiscovery } from './components/home/StyleDiscovery';
import { Shop } from './pages/Shop';
import { CustomDesign } from './pages/CustomDesign';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <StyleDiscovery />
        <Shop />
        <CustomDesign />
      </main>
      <Footer />
    </div>
  );
}

export default App;