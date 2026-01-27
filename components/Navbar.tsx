import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  joinUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, joinUrl }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 h-20">
      <div className="max-w-[1140px] mx-auto px-6 h-full flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')}
          className="text-2xl font-extrabold tracking-tight"
        >
          <span className="gradient-text">NikNextt</span>
        </button>

        <a 
          href={joinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-btn text-white px-8 py-2.5 rounded-full text-sm font-bold shadow-lg flex items-center justify-center min-w-[100px]"
        >
          Join
        </a>
      </div>
    </nav>
  );
};