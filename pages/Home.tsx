
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
    <div className="animate-in fade-in duration-700">
      <Hero onNavigate={onNavigate} />
      
      <section className="py-20 bg-violet-50/30">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why NikNextt?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              NikNextt is built for people who want clarity, not noise. 
              In an era of doomscrolling and 10-second summaries, we believe in the 
              power of slow, methodical learning. No clickbait. No rush. 
              Just thoughtful learning designed for the human mind.
            </p>
          </div>
        </div>
      </section>

      <Features />
      <FeaturedContent />
      <Newsletter />
    </div>
  );
};
