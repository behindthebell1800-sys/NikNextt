
import React from 'react';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden gradient-hero min-h-[85vh] flex items-center pt-20">
      {/* Animated background shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-highlight/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-[1140px] mx-auto px-6 relative z-10 w-full text-white">
        <div className="max-w-4xl">
          <h1 className="text-6xl lg:text-8xl font-extrabold leading-[1.05] mb-8 animate-slow-fade">
            NikNextt<br />
            <span className="text-amber-accent">Depth</span> over Speed.<br />
            <span className="opacity-90">Human over Clicks.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 max-w-2xl animate-slow-fade" style={{ animationDelay: '0.2s' }}>
            We build for clarity, curiosity, and the human desire to truly understand. Welcome to the upcoming trend in how we learn.
          </p>
          <div className="flex flex-wrap gap-5 animate-slow-fade" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => onNavigate('explore')}
              className="bg-white text-primary-blue hover:bg-amber-accent hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:translate-y-[-4px] shadow-2xl shadow-black/20"
            >
              Start Exploring
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className="bg-transparent border-2 border-white/40 hover:border-white text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
            >
              Our Manifesto
            </button>
          </div>
        </div>
      </div>

      {/* Hero-to-Next Section Sync */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-violet-50/50 to-transparent"></div>
    </section>
  );
};
