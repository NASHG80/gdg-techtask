import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Products from './components/Products.jsx';
import Features from './components/Features.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <Navbar page={page} setPage={setPage} />

      <main>
        {page === 'home' && (
          <>
            <Hero />
            <Products />
            <Features />
          </>
        )}

        {page === 'products' && <Products />}
        {page === 'features' && <Features />}
        {page === 'about' && <About />}
      </main>

      <Footer />
    </div>
  );
}