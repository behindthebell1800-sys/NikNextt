
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-violet-100 shadow-sm">
      <div className="max-w-[1140px] mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')}
          className="text-2xl font-extrabold tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="gradient-text">NikNextt</span>
        </button>

        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`text-[15px] font-bold transition-all duration-300 relative group ${
                currentPage === item.value 
                  ? 'text-violet-main' 
                  : 'text-slate-600 hover:text-primary-blue'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-blue to-violet-main transition-all duration-300 group-hover:w-full ${currentPage === item.value ? 'w-full' : ''}`}></span>
            </button>
          ))}
        </div>

        <div>
          <button className="gradient-btn hover:scale-105 active:scale-95 text-white px-7 py-2.5 rounded-full text-sm font-bold transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </nav>
  );
};
