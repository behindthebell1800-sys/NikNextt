
import React from 'react';
import { SiteData } from '../types';

interface SectionProps {
  data: SiteData['founder'];
  isEditMode: boolean;
  onUpdate: (path: string, value: any) => void;
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

export const FounderSection: React.FC<SectionProps> = ({ data, isEditMode, onUpdate }) => {
  return (
    <section className="py-12 sm:py-24 bg-[#F8FAFF] px-4 sm:px-6">
      <div className="max-w-[1140px] mx-auto">
        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-8 lg:p-20 shadow-xl border border-slate-100 flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/3 relative group">
            <div className="w-full sm:w-64 aspect-square sm:aspect-auto sm:h-64 max-h-[320px] rounded-[16px] sm:rounded-full overflow-hidden border-4 sm:border-8 border-slate-50 shadow-2xl mx-auto lg:mx-0">
              <img src={data.photo} alt={data.name} className="w-full h-full object-cover" />
            </div>
            {isEditMode && (
              <div className="absolute inset-0 bg-black/60 rounded-[16px] sm:rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-6">
                <input 
                  type="text" 
                  className="w-full px-4 py-2 rounded-lg text-xs"
                  placeholder="Photo URL..."
                  value={data.photo}
                  onChange={(e) => onUpdate('founder.photo', e.target.value)}
                />
              </div>
            )}
            <div className="absolute -bottom-4 left-1/2 lg:left-32 transform -translate-x-1/2 bg-brand-amber text-white font-bold px-6 py-2 rounded-full shadow-lg text-sm sm:text-base">
              Founder
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <div className="inline-block text-brand-blue font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-4">Meet the face behind the brand</div>
            {isEditMode ? (
              <>
                <input 
                  className="w-full bg-transparent text-2xl lg:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-8 editable-focus border-none focus:ring-0 p-1"
                  value={data.name}
                  onChange={(e) => onUpdate('founder.name', e.target.value)}
                />
                <textarea 
                  className="w-full bg-transparent text-base sm:text-xl text-slate-600 leading-[26px] sm:leading-relaxed mb-6 sm:mb-10 editable-focus border-none focus:ring-0 p-1 resize-none"
                  value={data.bio}
                  onChange={(e) => onUpdate('founder.bio', e.target.value)}
                  rows={4}
                />
              </>
            ) : (
              <>
                <h2 className="text-[20px] leading-[28px] sm:text-5xl font-bold sm:font-extrabold text-slate-900 mb-1 sm:mb-8">{data.name}</h2>
                <p className="text-sm opacity-70 mb-4 sm:hidden">Founder, NikNextt</p>
                <div className="text-[16px] leading-[26px] text-slate-600 sm:text-xl sm:leading-relaxed mb-8 sm:mb-10">{data.bio}</div>
              </>
            )}
            
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {data.socials.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-brand-blue transition-all flex items-center gap-3 font-bold group h-12"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-all">
                    <SocialIcon platform={social.platform} />
                  </div>
                  <span className="text-sm sm:text-base hidden sm:inline">{social.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
