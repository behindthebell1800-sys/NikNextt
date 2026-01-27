
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <button 
              onClick={() => onNavigate('home')}
              className="text-2xl font-bold text-white mb-6 block"
            >
              NikNextt
            </button>
            <p className="max-w-xs text-slate-400 leading-relaxed">
              The upcoming trend in how we learn. We build for clarity, curiosity, and the human desire to truly understand.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('explore')} className="hover:text-white transition-colors">Latest Content</button></li>
              <li><button onClick={() => onNavigate('visuals')} className="hover:text-white transition-colors">Visual Archive</button></li>
              <li><button onClick={() => onNavigate('ideas')} className="hover:text-white transition-colors">Ideas & Notes</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">The Manifesto</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 NikNextt. Designed for clarity, not clicks.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
