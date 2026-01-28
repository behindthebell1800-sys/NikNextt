
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onAdminClick?: () => void;
  onNavigate?: (page: Page) => void;
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
    case 'linkedin':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    default:
      return null;
  }
};

export const Footer: React.FC<FooterProps> = ({ socials, onNavigate }) => {
  const handleShare = async () => {
    const shareData = {
      title: 'NikNextt',
      text: 'Turning hours of content into minutes of clarity.',
      url: window.location.origin,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share failed', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.origin);
      alert('Link copied to clipboard!');
    }
  };

  const getUrl = (platform: string) => {
    return socials?.find(s => s.platform.toLowerCase() === platform.toLowerCase())?.url || '#';
  };

  return (
    <footer className="bg-[#0B0F1A] text-slate-400 py-20 sm:py-28 px-6 relative overflow-hidden">
      {/* Subtle Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-[800px] mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Top Row: Brand Identity */}
        <div className="mb-12">
          <h3 className="text-3xl font-extrabold text-white tracking-tight mb-4">NikNextt</h3>
          <p className="text-slate-500 text-lg sm:text-xl leading-relaxed max-w-md mx-auto">
            Turning hours of content into minutes of clarity.<br />
            Clear thinking. No noise.
          </p>
        </div>

        {/* Middle Row: Informative Links */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 mb-16 text-sm font-semibold tracking-wide uppercase">
          <button onClick={() => onNavigate?.('about')} className="hover:text-white transition-colors">About NikNextt</button>
          <button onClick={() => onNavigate?.('founder')} className="hover:text-white transition-colors">Founder</button>
          <button onClick={() => onNavigate?.('visuals')} className="hover:text-white transition-colors">Explain Videos</button>
          <div className="flex items-center gap-2 opacity-60 cursor-default">
            <span>Ask NikNextt</span>
            <span className="text-[10px] border border-slate-700 px-2 py-0.5 rounded text-slate-500 font-black tracking-tighter">Soon</span>
          </div>
        </div>

        {/* Bottom Section: Socials & Share */}
        <div className="flex flex-col items-center gap-10 mb-20">
          <div className="flex items-center gap-10">
            {['YouTube', 'Instagram', 'X', 'LinkedIn'].map((platform) => (
              <a 
                key={platform}
                href={getUrl(platform)} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] transition-all transform hover:scale-110 active:scale-95"
                title={platform}
              >
                <SocialIcon platform={platform} />
              </a>
            ))}
          </div>
          
          <button 
            onClick={handleShare}
            className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-colors group px-6 py-3 border border-transparent hover:border-slate-800 rounded-full"
          >
            <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share NikNextt
          </button>
        </div>

        {/* Bottom Line */}
        <div className="w-full pt-10 border-t border-slate-900/40 flex flex-col items-center">
          <p className="text-[12px] font-bold text-slate-600 uppercase tracking-[0.4em] text-center">
            © {new Date().getFullYear()} NikNextt — Designed for clarity, not clicks.
          </p>
        </div>

      </div>
    </footer>
  );
};
