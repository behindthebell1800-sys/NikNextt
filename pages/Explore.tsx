
import React from 'react';
import { FeaturedContent } from '../components/FeaturedContent';

export const Explore: React.FC = () => {
  const categories = ['All', 'Science', 'Culture', 'Psychology', 'Design', 'Philosophy'];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="max-w-[1140px] mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Explore the Archive</h1>
        
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide mb-12">
          {categories.map((cat) => (
            <button 
              key={cat} 
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                cat === 'All' ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <FeaturedContent />
      
      <div className="max-w-[1140px] mx-auto px-6 py-12 flex justify-center">
        <button className="bg-white border border-slate-200 text-slate-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-50 transition-colors">
          Load more insights
        </button>
      </div>
    </div>
  );
};
