
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
    case 'linkedin':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
