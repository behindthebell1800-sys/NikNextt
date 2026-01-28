
import React from 'react';

interface FooterProps {
  onAdminClick?: () => void;
  socials?: { platform: string; url: string; }[];
}

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform.toLowerCase()) {
    case 'youtube':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    case 'x':
    case 'twitter':
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
        </svg>
      );
    default:
      return <span>{platform[0]}</span>;
  }
};

export const Footer: React.FC<FooterProps> = ({ onAdminClick, socials }) => {
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
              {socials?.map(s => (
                <a 
                  key={s.platform} 
                  href={s.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-blue/20 transition-colors"
                  title={s.platform}
                >
                  <SocialIcon platform={s.platform} />
                </a>
              )) || ['Instagram', 'YouTube', 'X'].map(s => (
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
