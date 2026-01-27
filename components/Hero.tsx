
import React from 'react';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50 py-20 lg:py-32">
      <div className="max-w-[1140px] mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            NikNextt<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-500">
              The upcoming trend in how we learn.
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Information is everywhere, but understanding is rare. 
            NikNextt helps you slow down, think deeper, and truly understand complex ideas.
          </p>
          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            <button 
              onClick={() => onNavigate('explore')}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:translate-y-[-2px] shadow-lg shadow-slate-200"
            >
              Explore Content
            </button>
            <button 
              onClick={() => onNavigate('visuals')}
              className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-3.5 rounded-full font-semibold transition-all hover:translate-y-[-2px]"
            >
              Watch Visuals
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-violet-200/30 rounded-full blur-[80px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-[100px] -z-10" />
    </section>
  );
};
