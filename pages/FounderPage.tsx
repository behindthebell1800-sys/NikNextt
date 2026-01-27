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
    default:
      return <span>{platform[0]}</span>;
  }
};

export const FounderPage: React.FC<FounderPageProps> = ({ data }) => {
  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* Container with 48px Top/Bottom padding and 16px Left/Right padding */}
      <div className="max-w-[1140px] mx-auto px-4 py-12">
        <div className="flex flex-col items-start text-left">
          
          {/* Founder Image: 100% width, max height 360px, 16px radius, 20px margin-bottom */}
          <div className="w-full mb-5">
            <img 
              src={data.photo} 
              alt={data.name} 
              className="w-full h-auto max-h-[360px] object-cover rounded-[16px] shadow-sm"
            />
          </div>

          {/* Founder Name: 20px, 600 weight, 28px line-height, 8px margin-bottom */}
          <h1 className="text-[20px] font-semibold leading-[28px] text-slate-900 mb-2">
            {data.name}
          </h1>

          {/* Founder Role: 14px, 500 weight, 0.75 opacity, 16px margin-bottom */}
          <p className="text-[14px] font-medium text-slate-900 opacity-75 mb-4">
            Founder, NikNextt
          </p>

          {/* Founder Bio: 16px, 26px line-height, 24px margin-bottom */}
          <div className="text-[16px] leading-[26px] text-slate-700 mb-6">
            {data.bio}
          </div>

          {/* Social Links: 20px icon size, 12px gap, left-aligned */}
          <div className="flex items-center gap-[12px]">
            {data.socials.map((social, idx) => (
              <a 
                key={idx} 
                href={social.url} 
                title={social.platform}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-50 text-slate-500 hover:text-brand-blue hover:bg-brand-blue/10 transition-colors"
                aria-label={social.platform}
              >
                <SocialIcon platform={social.platform} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};