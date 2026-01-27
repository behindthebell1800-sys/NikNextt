import React from 'react';

interface FooterProps {
  onAdminClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="bg-[#0A0D14] text-white pt-12 sm:pt-24 pb-8 sm:pb-12 relative px-4 sm:px-6">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-20">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6 gradient-text">NikNextt</h3>
            <p className="text-slate-400 text-sm sm:text-lg max-w-sm mb-6 sm:mb-8 leading-[20px] sm:leading-relaxed">
              Turning hours of content into minutes of clarity. 
              The knowledge brand for the next generation of thinkers.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'YouTube', 'X'].map(s => (
                <a key={s} href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-blue/20 transition-colors">
                  <div className="w-4 h-4 rounded-sm bg-white/20" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden sm:block">
            <h4 className="font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Archive</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Visuals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
            </ul>
          </div>
          
          <div className="hidden sm:block">
            <h4 className="font-bold text-lg mb-6">NikNextt</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>

          {/* Simple list for mobile */}
          <div className="flex sm:hidden flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500 font-bold uppercase tracking-widest">
            <a href="#">Explore</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 sm:pt-12 text-center text-slate-500 text-[13px] leading-[20px] font-medium">
          <p>© 2024 NikNextt. Built for humans, by humans.</p>
        </div>
      </div>

      {/* Discreet Admin Entry - Stealth Mode */}
      <button 
        onClick={onAdminClick}
        className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-[12px] opacity-[0.12] cursor-pointer text-slate-500 hover:opacity-[0.12] active:opacity-[0.12] transition-none outline-none border-none bg-transparent p-1"
        aria-hidden="true"
      >
        NIK
      </button>
    </footer>
  );
};