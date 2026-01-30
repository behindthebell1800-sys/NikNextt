
import React from 'react';
import { SiteData, Card } from '../types';

interface SectionProps {
  data: SiteData['featured'];
  isEditMode: boolean;
  onUpdate: (path: string, value: any) => void;
}

export const FeaturedSection: React.FC<SectionProps> = ({ data, isEditMode, onUpdate }) => {
  const addCard = () => {
    const newCard: Card = {
      id: Date.now().toString(),
      title: 'New Content Title',
      description: 'Short content description here.',
      thumbnail: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=600&q=80',
      url: '#'
    };
    onUpdate('featured.cards', [...data.cards, newCard]);
  };

  const removeCard = (id: string) => {
    onUpdate('featured.cards', data.cards.filter(c => c.id !== id));
  };

  const updateCard = (idx: number, updates: Partial<Card>) => {
    const newCards = [...data.cards];
    newCards[idx] = { ...newCards[idx], ...updates };
    onUpdate('featured.cards', newCards);
  };

  return (
    <section className="py-12 sm:py-24 bg-[#FCFDFF] px-4 sm:px-6">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 sm:mb-16 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2 sm:mb-4">Latest Insights</h2>
            <p className="text-slate-500 font-medium text-sm sm:text-base">Updated every Sunday morning.</p>
          </div>
          {isEditMode && (
            <button 
              onClick={addCard}
              className="px-6 py-2.5 bg-brand-teal text-white rounded-full font-bold hover:bg-opacity-90 transition-all flex items-center gap-2 text-sm"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              Add Card
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.cards.map((card, idx) => (
            <div key={card.id} className="group relative bg-white rounded-[16px] sm:rounded-3xl overflow-hidden border border-slate-100 card-hover">
              <div className="aspect-video overflow-hidden relative">
                <img src={card.thumbnail} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {isEditMode && (
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity p-4">
                    <input 
                      type="text" 
                      placeholder="Image URL..." 
                      className="w-full text-xs p-2 rounded mb-2"
                      value={card.thumbnail}
                      onChange={(e) => updateCard(idx, { thumbnail: e.target.value })}
                    />
                    <input 
                      type="text" 
                      placeholder="Article URL..." 
                      className="w-full text-xs p-2 rounded"
                      value={card.url}
                      onChange={(e) => updateCard(idx, { url: e.target.value })}
                    />
                  </div>
                )}
              </div>
              <div className="p-6 sm:p-8">
                {isEditMode ? (
                  <>
                    <input 
                      className="w-full bg-transparent text-base sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 editable-focus border-none focus:ring-0 p-1"
                      value={card.title}
                      onChange={(e) => updateCard(idx, { title: e.target.value })}
                    />
                    <textarea 
                      className="w-full bg-transparent text-slate-500 text-sm leading-relaxed mb-4 sm:mb-6 editable-focus border-none focus:ring-0 p-1 resize-none"
                      value={card.description}
                      onChange={(e) => updateCard(idx, { description: e.target.value })}
                      rows={2}
                    />
                  </>
                ) : (
                  <>
                    <h3 className="text-base leading-[24px] sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-brand-blue transition-colors">{card.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-2">{card.description}</p>
                  </>
                )}
                <a 
                  href={card.url} 
                  target={card.url && card.url.startsWith('http') ? "_blank" : undefined}
                  rel={card.url && card.url.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="text-brand-blue font-bold text-sm inline-flex items-center gap-2 group/link h-10"
                >
                  Dive Deeper 
                  <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
              {isEditMode && (
                <button 
                  onClick={() => removeCard(card.id)}
                  className="absolute top-4 right-4 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
