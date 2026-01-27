
import React from 'react';

const offers = [
  {
    title: 'Clear Explainers',
    description: 'Bite-sized but deep dives into concepts that usually feel overwhelming.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'bg-blue-50'
  },
  {
    title: 'Visual Breakdowns',
    description: 'Learning is easier when you can see the logic. Our diagrams make it simple.',
    icon: (
      <svg className="w-8 h-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'bg-violet-50'
  },
  {
    title: 'Thoughtful Insights',
    description: 'Curation from the world’s best documentaries, podcasts, and literature.',
    icon: (
      <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.364-5.636l-.707-.707m12.728 12.728l-.707-.707M6.364 17.636l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    color: 'bg-teal-50'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What NikNextt Offers</h2>
          <div className="w-12 h-1 bg-violet-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 group border border-slate-50"
            >
              <div className={`${offer.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                {offer.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{offer.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
