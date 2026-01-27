
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Visuals } from './pages/Visuals';
import { About } from './pages/About';
import { Ideas } from './pages/Ideas';
import { Explore } from './pages/Explore';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'visuals': return <Visuals />;
      case 'about': return <About />;
      case 'ideas': return <Ideas />;
      case 'explore': return <Explore />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-violet-100 selection:text-violet-900">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow pt-16">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
