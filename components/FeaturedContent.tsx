
import React from 'react';
import { ContentItem } from '../types';

const mockItems: ContentItem[] = [
  {
    id: '1',
    title: 'The Architecture of Deep Work',
    description: 'How to structure your environment for maximum cognitive output.',
    category: 'Guides',
    date: 'Oct 24, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '2',
    title: 'Philosophy of Time Perception',
    description: 'Why time feels like it speeds up as we age and how to slow it down.',
    category: 'Psychology',
    date: 'Oct 22, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '3',
    title: 'Visualizing Quantum Physics',
    description: 'Understanding the particle-wave duality through simple geometry.',
    category: 'Science',
    date: 'Oct 19, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '4',
    title: 'The Art of Critical Listening',
    description: 'How to hear what is not being said in complex conversations.',
    category: 'Communication',
    date: 'Oct 15, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80'
  }
];

export const FeaturedContent: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-main/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1140px] mx-auto px-6 relative z-10">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-teal-main font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Archive Curation</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900">Featured Content</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary-blue hover:text-violet-main font-bold transition-all">
            Browse all insights 
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockItems.map((item) => (
            <div key={item.id} className="group card-gradient-border p-3 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-main/10 hover:-translate-y-2">
              <div className="aspect-video overflow-hidden rounded-2xl relative mb-6">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest text-teal-main shadow-lg">
                  {item.category}
                </div>
              </div>
              <div className="px-2 pb-4">
                <span className="text-xs font-bold text-slate-400 mb-2 block uppercase tracking-wider">{item.date}</span>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-tight group-hover:text-primary-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
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
