
import React from 'react';
import { SiteData } from '../types';

interface SectionProps {
  data: SiteData['ctaSection'];
  isEditMode: boolean;
  onUpdate: (path: string, value: any) => void;
}

export const CTASection: React.FC<SectionProps> = ({ data, isEditMode, onUpdate }) => {
  return (
    <section className="py-12 sm:py-24 bg-white px-4 sm:px-6">
      <div className="max-w-[1140px] mx-auto">
        <div className="gradient-hero rounded-[2rem] sm:rounded-[4rem] p-8 sm:p-24 text-center text-white relative overflow-hidden shadow-3xl shadow-brand-blue/30">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            {isEditMode ? (
              <textarea 
                className="w-full bg-transparent text-3xl sm:text-6xl font-extrabold mb-8 sm:mb-12 editable-focus border-none focus:ring-0 p-4 resize-none text-center"
                value={data.text}
                onChange={(e) => onUpdate('ctaSection.text', e.target.value)}
                rows={3}
              />
            ) : (
              <h2 className="text-3xl sm:text-6xl font-extrabold mb-8 sm:mb-12 leading-[40px] sm:leading-tight">{data.text}</h2>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              {data.buttons.map((btn, idx) => (
                <div key={idx} className="relative group w-full sm:w-auto">
                  {isEditMode && (
                    <input 
                      type="text" 
                      className="absolute -top-10 left-0 w-full text-xs text-slate-900 p-1 rounded"
                      value={btn.label}
                      onChange={(e) => {
                        const newBtns = [...data.buttons];
                        newBtns[idx].label = e.target.value;
                        onUpdate('ctaSection.buttons', newBtns);
                      }}
                    />
                  )}
                  <a 
                    href={btn.url} 
                    target={btn.url && btn.url.startsWith('http') ? "_blank" : undefined}
                    rel={btn.url && btn.url.startsWith('http') ? "noopener noreferrer" : undefined}
                    className={`flex items-center justify-center h-[50px] sm:h-auto px-10 py-5 rounded-full font-extrabold text-[16px] sm:text-xl transition-all block w-full ${idx === 0 ? 'bg-white text-brand-violet hover:scale-105 shadow-xl' : 'bg-transparent border-2 border-white/40 hover:border-white text-white'}`}
                  >
                    {btn.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
