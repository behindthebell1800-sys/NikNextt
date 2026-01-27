
import React from 'react';

const offers = [
  {
    title: 'Clear Explainers',
    description: 'Bite-sized but deep dives into concepts that usually feel overwhelming. We simplify without losing the essence.',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'bg-primary-blue',
    shadow: 'shadow-primary-blue/20'
  },
  {
    title: 'Visual Breakdowns',
    description: 'Learning is easier when you can see the logic. Our unique diagrams make the invisible visible.',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'bg-violet-main',
    shadow: 'shadow-violet-main/20'
  },
  {
    title: 'Deep Curation',
    description: 'The best documentaries, podcasts, and literature, filtered for quality and timeless insight.',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
      </svg>
    ),
    color: 'bg-teal-main',
    shadow: 'shadow-teal-main/20'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-32 bg-violet-50/50">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Designed for the Human Mind</h2>
          <div className="w-20 h-2 gradient-divider mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {offers.map((offer, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 group"
            >
              <div className={`${offer.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-xl ${offer.shadow}`}>
                {offer.icon}
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{offer.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
