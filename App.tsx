import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { StyleDiscovery } from './components/home/StyleDiscovery';
import { Shop } from './pages/Shop';
import { CustomDesign } from './pages/CustomDesign';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
          <Header />
        
        <main className="container mx-auto px-4 py-8">
                 <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/features" element={<Features />} />
            <Route path="/discover-styles" element={<StyleDiscovery />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/custom-design" element={<CustomDesign />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
