
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="gradient-footer text-white pt-32 pb-16 relative overflow-hidden">
      {/* Decorative Bridge to previous section */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-divider opacity-50"></div>
      
      <div className="max-w-[1140px] mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <button 
              onClick={() => onNavigate('home')}
              className="text-4xl font-extrabold mb-8 block"
            >
              <span className="gradient-text">NikNextt</span>
            </button>
            <p className="max-w-md text-slate-300 text-lg leading-relaxed">
              The upcoming trend in how we learn. We build for clarity, curiosity, and the human desire to truly understand.
            </p>
            <div className="mt-8 flex gap-5">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center">
                   <div className="w-5 h-5 bg-white/20 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-amber-accent font-extrabold text-lg mb-8 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-6">
              <li><button onClick={() => onNavigate('explore')} className="text-slate-300 hover:text-white text-lg transition-colors font-medium">Latest Insights</button></li>
              <li><button onClick={() => onNavigate('visuals')} className="text-slate-300 hover:text-white text-lg transition-colors font-medium">Visual Archive</button></li>
              <li><button onClick={() => onNavigate('ideas')} className="text-slate-300 hover:text-white text-lg transition-colors font-medium">Draft Ideas</button></li>
              <li><button onClick={() => onNavigate('about')} className="text-slate-300 hover:text-white text-lg transition-colors font-medium">The Manifesto</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-pink-highlight font-extrabold text-lg mb-8 uppercase tracking-widest">Growth</h4>
            <ul className="space-y-6">
              <li><a href="#" className="text-slate-300 hover:text-white text-lg transition-colors font-medium">Newsletter</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white text-lg transition-colors font-medium">Community</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white text-lg transition-colors font-medium">Workshops</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white text-lg transition-colors font-medium">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 font-medium">
          <p className="text-center md:text-left">© 2024 NikNextt. <span className="text-white/80 font-bold">Designed for clarity, not clicks.</span></p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
