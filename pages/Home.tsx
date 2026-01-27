
import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { FeaturedContent } from '../components/FeaturedContent';
import { Newsletter } from '../components/Newsletter';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* 1. HERO (Blue-Violet) */}
      <Hero onNavigate={onNavigate} />
      
      {/* 2. VALUE SECTION (Soft Gradient) */}
      <Features />

      {/* 3. WHY NIKNEXTT (Warm Section - Amber/Pink) */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-amber-50 to-pink-50">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="inline-block px-4 py-2 bg-amber-accent/10 text-amber-accent font-bold rounded-full text-sm mb-6">
              The Human Logic
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Why we choose <span className="text-pink-highlight">Clarity</span> over noise.
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              In an era of doomscrolling and 10-second summaries, we believe in the 
              power of slow, methodical learning. No clickbait. No rush. 
              NikNextt is a sanctuary for those who value deep understanding.
            </p>
            <ul className="space-y-4">
              {['Methodical research', 'Emotional satisfaction', 'Visual logic', 'No distractions'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-slate-800">
                  <div className="w-6 h-6 rounded-full bg-amber-accent flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 relative">
             <div className="w-full aspect-square rounded-[3rem] bg-gradient-to-tr from-amber-accent to-pink-highlight transform rotate-3 shadow-2xl flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Learning" className="w-full h-full object-cover mix-blend-overlay opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl">🧠</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED CONTENT (Cool Section - Teal/Blue) */}
      <FeaturedContent />

      {/* 5. CTA (Return to Blue-Violet) */}
      <Newsletter />
    </div>
  );
};
