
import React from 'react';
import { SiteData } from '../types';

interface FounderPageProps {
  data: SiteData['founder'];
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
    case 'threads':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.28 12.16c0 .41-.05.79-.16 1.13-.11.34-.27.65-.49.92-.22.27-.49.49-.82.65s-.71.24-1.15.24c-.42 0-.79-.08-1.11-.24s-.58-.38-.79-.65-.36-.58-.46-.92c-.1-.34-.15-.72-.15-1.13s.05-.79.15-1.13.25-.65.46-.92c.21-.27.47-.49.79-.65s.69-.24 1.11-.24c.44 0 .82.08 1.15.24s.6.38.82.65c.22.27.38.58.49.92.11.34.16.72.16 1.13zm6.65-2.09c-.11-.41-.26-.8-.44-1.17s-.41-.71-.67-1.02c-.26-.31-.57-.59-.92-.82-.35-.23-.74-.42-1.17-.55s-.9-.23-1.4-.28c-.5-.05-1.04-.08-1.62-.08-1.33 0-2.43.16-3.32.49s-1.57.81-2.07 1.45c-.5.64-.84 1.41-1.01 2.31-.17.9-.26 1.91-.26 3.03s.09 2.13.26 3.03c.17.9.51 1.67 1.01 2.31.5.64 1.18 1.12 2.07 1.45.89.33 1.99.49 3.32.49.49 0 .98-.02 1.46-.07.48-.05.93-.13 1.34-.23.41-.1.78-.23 1.1-.39s.6-.33.81-.53c.21-.2.38-.41.49-.64s.17-.46.17-.69c0-.42-.15-.78-.45-1.08s-.68-.45-1.14-.45c-.24 0-.46.04-.66.12s-.38.19-.53.33-.28.31-.38.49-.17.38-.21.57c-.04.19-.07.38-.08.57s-.02.35-.02.48c0 .24-.04.47-.11.7s-.18.43-.33.6c-.15.17-.34.31-.57.41-.23.1-.5.15-.82.15-1.01 0-1.81-.13-2.39-.38s-1.02-.6-1.32-1.04c-.3-.44-.51-.96-.61-1.56s-.16-1.25-.16-1.95v-.19c0-.7.05-1.35.16-1.95s.31-1.12.61-1.56c.3-.44.74-.79 1.32-1.04s1.38-.38 2.39-.38c.67 0 1.25.07 1.74.21s.91.33 1.25.56c.34.23.61.5.8.81s.29.65.29 1.01c0 .4-.14.73-.42.99-.28.26-.64.39-1.08.39-.3 0-.57-.06-.8-.18s-.43-.28-.59-.48c-.16-.2-.29-.43-.38-.69s-.14-.52-.14-.78c0-.3-.04-.59-.11-.87-.07-.28-.19-.52-.35-.72s-.36-.36-.6-.48c-.24-.12-.53-.18-.87-.18s-.62.06-.87.18-.46.28-.63.48c-.17.2-.31.44-.41.72s-.15.58-.15.87.05.59.15.87.24.52.41.72c.17.2.38.36.63.48.25.12.55.18.87.18.39 0 .73-.08 1.02-.24.29-.16.53-.37.72-.63.19-.26.33-.56.42-.9s.13-.69.13-1.05v-.2c0-.36-.04-.71-.13-1.05s-.23-.64-.42-.9c-.19-.26-.43-.47-.72-.63s-.63-.24-1.02-.24c-.45 0-.85.08-1.2.24s-.64.38-.88.65c-.24.27-.42.58-.54.92s-.18.72-.18 1.13c0 .41.06.79.18 1.13s.3.65.54.92c.24.27.53.49.88.65s.75.24 1.2.24c.3 0 .58-.04.84-.12s.49-.19.69-.33.36-.31.48-.5.2-.38.24-.57.07-.38.08-.57.02-.35.02-.48c0-.34.07-.63.2-.87s.3-.44.5-.59.44-.26.7-.33c.26-.07.54-.1.84-.1s.57.03.82.1.48.17.67.3c.19.13.34.3.44.5.1.2.15.42.15.65 0 .28-.05.58-.15.9s-.25.64-.45.96c-.2.32-.46.61-.78.87-.32.26-.71.48-1.17.66s-.98.32-1.56.42c-.58.1-1.25.15-2.01.15-1.01 0-1.89-.11-2.64-.33s-1.37-.54-1.86-.96c-.49-.42-.85-.94-1.08-1.56s-.34-1.35-.34-2.19v-.19c0-.84.11-1.57.34-2.19s.59-1.14 1.08-1.56 1.11-.74 1.86-.96c.75-.22 1.63-.33 2.64-.33.74 0 1.4.03 1.98.09.58.06 1.09.15 1.53.27s.8.27 1.08.45c.28.18.49.39.63.63s.21.52.21.84c0 .45-.15.82-.45 1.11s-.69.43-1.17.43c-.22 0-.42-.04-.61-.12z" />
        </svg>
      );
    default:
      return <span>{platform[0]}</span>;
  }
};

export const FounderPage: React.FC<FounderPageProps> = ({ data }) => {
  return (
    <div className="animate-in fade-in duration-700 bg-white min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 py-16 lg:py-28">
        
        {/* Founder Layout: Focused & Centered Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          
          {/* Fixed Aspect Ratio Photo Container */}
          <div className="w-full max-w-[400px] aspect-[4/5] mb-10 overflow-hidden rounded-[2.5rem] shadow-2xl border-[12px] border-slate-50 relative group">
            <img 
              src={data.photo} 
              alt={data.name} 
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Soft Overlay on Hover */}
            <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>

          <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
            {data.name}
          </h1>
          <p className="text-sm lg:text-base font-bold text-brand-blue uppercase tracking-[0.3em] mb-10">
            Founder, NikNextt
          </p>

          <div className="flex items-center gap-6">
            {data.socials.map((social, idx) => (
              <a 
                key={idx} 
                href={social.url} 
                target="_blank"
                rel="noopener noreferrer"
                title={social.platform}
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:text-white hover:bg-slate-900 transition-all transform hover:scale-110 active:scale-95 shadow-sm"
                aria-label={social.platform}
              >
                <SocialIcon platform={social.platform} />
              </a>
            ))}
          </div>
        </div>

        {/* Narrative Section */}
        <div className="max-w-[640px] mx-auto">
          <div className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium space-y-8">
            {data.bio.split('\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-24 pt-16 border-t border-slate-100 text-center">
            <p className="text-slate-400 font-semibold italic text-lg">
              “Building for a future where understanding is the default, not the exception.”
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
