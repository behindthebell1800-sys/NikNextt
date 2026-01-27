
import React from 'react';
import { ContentItem } from '../types';

const mockItems: ContentItem[] = [
  {
    id: '1',
    title: 'The Architecture of Deep Work',
    description: 'How to structure your environment for maximum cognitive output.',
    category: 'Guides',
    date: 'Oct 24, 2024',
    thumbnail: 'https://picsum.photos/id/1/600/400'
  },
  {
    id: '2',
    title: 'Philosophy of Time Perception',
    description: 'Why time feels like it speeds up as we age and how to slow it down.',
    category: 'Psychology',
    date: 'Oct 22, 2024',
    thumbnail: 'https://picsum.photos/id/10/600/400'
  },
  {
    id: '3',
    title: 'Visualizing Quantum Physics',
    description: 'Understanding the particle-wave duality through simple geometry.',
    category: 'Science',
    date: 'Oct 19, 2024',
    thumbnail: 'https://picsum.photos/id/20/600/400'
  },
  {
    id: '4',
    title: 'The Art of Critical Listening',
    description: 'How to hear what is not being said in complex conversations.',
    category: 'Communication',
    date: 'Oct 15, 2024',
    thumbnail: 'https://picsum.photos/id/30/600/400'
  }
];

export const FeaturedContent: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-violet-600 font-semibold text-sm tracking-widest uppercase mb-2 block">Curation</span>
            <h2 className="text-3xl font-bold text-slate-900">Featured Content</h2>
          </div>
          <button className="text-slate-600 hover:text-violet-600 font-medium transition-colors hidden sm:block">
            View all content →
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 transition-all hover:shadow-lg">
              <div className="aspect-[3/2] overflow-hidden relative">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-900">
                  {item.category}
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs text-slate-400 mb-2 block font-medium">{item.date}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-violet-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
