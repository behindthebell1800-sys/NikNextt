import React from 'react';
import { SiteData } from '../types';

interface SectionProps {
  data: SiteData['whatWeDo'];
  isEditMode: boolean;
  onUpdate: (path: string, value: any) => void;
}

export const WhatWeDoSection: React.FC<SectionProps> = ({ data, isEditMode, onUpdate }) => {
  const handleCardChange = (idx: number, field: 'title' | 'description', value: string) => {
    const newCards = [...data.cards];
    newCards[idx] = { ...newCards[idx], [field]: value };
    onUpdate('whatWeDo.cards', newCards);
  };

  return (
    <section className="py-12 sm:py-24 bg-white px-4 sm:px-6">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">How we help you grow</h2>
          <div className="w-16 h-1.5 gradient-hero mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-5 sm:gap-8">
          {data.cards.map((card, idx) => (
            <div key={card.id} className="p-5 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] bg-[#F8FAFF] border border-slate-100 card-hover mb-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 flex items-center justify-center mb-6 sm:mb-8">
                <span className="text-xl sm:text-2xl">
                  {idx === 0 ? '🔍' : idx === 1 ? '🎨' : '⚡'}
                </span>
              </div>
              {isEditMode ? (
                <>
                  <input 
                    className="w-full bg-transparent text-lg sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-4 editable-focus border-none focus:ring-0 p-1"
                    value={card.title}
                    onChange={(e) => handleCardChange(idx, 'title', e.target.value)}
                  />
                  <textarea 
                    className="w-full bg-transparent text-[15px] sm:text-slate-600 leading-[24px] sm:leading-relaxed editable-focus border-none focus:ring-0 p-1 resize-none"
                    value={card.description}
                    onChange={(e) => handleCardChange(idx, 'description', e.target.value)}
                    rows={4}
                  />
                </>
              ) : (
                <>
                  <h3 className="text-[18px] leading-[26px] sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-4">{card.title}</h3>
                  <p className="text-[15px] leading-[24px] sm:text-slate-600 sm:leading-relaxed">{card.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};