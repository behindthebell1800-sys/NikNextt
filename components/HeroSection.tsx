import React from 'react';
import { SiteData } from '../types';

interface HeroProps {
  data: SiteData['hero'];
  isEditMode: boolean;
  onUpdate: (path: string, value: any) => void;
}

export const HeroSection: React.FC<HeroProps> = ({ data, isEditMode, onUpdate }) => {
  return (
    <section className="relative pt-12 pb-12 sm:pb-24 overflow-hidden px-4 sm:px-6">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[60%] h-[120%] bg-gradient-to-bl from-brand-violet/10 via-brand-blue/5 to-transparent rounded-bl-[200px] -z-10" />
      
      <div className="max-w-[1140px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="animate-fade-up order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/10 rounded-full text-brand-blue font-bold text-sm mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            NikNextt
          </div>
          <h1 className="text-[28px] leading-[36px] sm:text-5xl lg:text-7xl font-semibold sm:font-extrabold text-slate-900 mb-2 sm:mb-8">
            Turning hours of content into <span className="gradient-text">minutes of clarity.</span>
          </h1>
          
          {isEditMode ? (
            <textarea
              className="w-full bg-transparent text-base sm:text-xl text-slate-600 leading-[26px] sm:leading-relaxed mb-5 sm:mb-10 editable-focus border-none focus:ring-0 resize-none p-2"
              value={data.supportingLine}
              onChange={(e) => onUpdate('hero.supportingLine', e.target.value)}
              rows={3}
            />
          ) : (
            <p className="text-base sm:text-xl text-slate-600 leading-[26px] sm:leading-relaxed mb-5 sm:mb-10 opacity-90">
              {data.supportingLine}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {data.cta.map((btn, idx) => (
              <div key={idx} className="relative group w-full sm:w-auto">
                {isEditMode && (
                  <div className="absolute -top-10 left-0 flex gap-1 z-10">
                    <input 
                      type="text" 
                      value={btn.label} 
                      onChange={(e) => {
                        const newCta = [...data.cta];
                        newCta[idx].label = e.target.value;
                        onUpdate('hero.cta', newCta);
                      }}
                      className="text-xs p-1 rounded border shadow-sm w-24"
                    />
                  </div>
                )}
                <a 
                  href={btn.url} 
                  className={`flex items-center justify-center w-full sm:w-auto h-[44px] sm:h-auto px-8 sm:py-4 rounded-full font-bold text-[15px] sm:text-lg transition-all ${idx === 0 ? 'gradient-btn text-white' : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'}`}
                >
                  {btn.label}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group order-1 lg:order-2">
          <div className="aspect-video sm:aspect-auto sm:h-auto w-full max-h-[240px] sm:max-h-none rounded-[16px] sm:rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-2 group-hover:rotate-0 transition-transform duration-700 mb-5 lg:mb-0">
            <img 
              src={data.image} 
              alt="Hero" 
              className="w-full h-full object-cover"
            />
          </div>
          {isEditMode && (
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-6">
              <p className="text-white font-bold mb-4">Update Image URL</p>
              <input 
                type="text" 
                className="w-full max-w-sm px-4 py-2 rounded-lg text-sm"
                placeholder="Paste Image URL..."
                value={data.image}
                onChange={(e) => onUpdate('hero.image', e.target.value)}
              />
            </div>
          )}
          {/* Decorative shapes hidden on mobile to avoid crowding */}
          <div className="hidden sm:block absolute -bottom-6 -left-6 w-24 h-24 bg-brand-amber rounded-3xl -z-10 blur-2xl opacity-40 animate-float" />
          <div className="hidden sm:block absolute -top-6 -right-6 w-32 h-32 bg-brand-pink rounded-full -z-10 blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </section>
  );
};