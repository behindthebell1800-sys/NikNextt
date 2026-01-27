
import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const navItems: { label: string; value: Page }[] = [
    { label: 'Explore', value: 'explore' },
    { label: 'Visuals', value: 'visuals' },
    { label: 'Ideas', value: 'ideas' },
    { label: 'About', value: 'about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-[1140px] mx-auto px-6 h-16 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')}
          className="text-2xl font-bold tracking-tight text-slate-800 hover:opacity-80 transition-opacity"
        >
          Nik<span className="text-violet-600">Nextt</span>
        </button>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`text-[15px] font-medium transition-colors duration-300 ${
                currentPage === item.value 
                  ? 'text-violet-600' 
                  : 'text-slate-600 hover:text-violet-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <button className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md active:scale-95">
            Subscribe
          </button>
        </div>
      </div>
    </nav>
  );
};
