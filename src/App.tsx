import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home } from './pages/home';
import { Shop } from './pages/shop';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Cart } from './pages/cart';
import { Social } from './pages/social';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/social" element={<Social />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;