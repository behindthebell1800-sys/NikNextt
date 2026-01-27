
import React from 'react';

const videos = [
  { id: 1, title: 'The Visual History of Logic', duration: '12:45', thumbnail: 'https://picsum.photos/id/101/600/400' },
  { id: 2, title: 'Understanding Neural Networks', duration: '08:20', thumbnail: 'https://picsum.photos/id/102/600/400' },
  { id: 3, title: 'Complexity Theory Explained', duration: '15:10', thumbnail: 'https://picsum.photos/id/103/600/400' },
  { id: 4, title: 'The Geometry of Art', duration: '10:30', thumbnail: 'https://picsum.photos/id/104/600/400' },
  { id: 5, title: 'Simulations and Reality', duration: '18:55', thumbnail: 'https://picsum.photos/id/105/600/400' },
  { id: 6, title: 'The Flow State Mechanism', duration: '09:12', thumbnail: 'https://picsum.photos/id/106/600/400' },
];

export const Visuals: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 py-16">
      <div className="max-w-[1140px] mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Visual Breakdowns</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Complex ideas are best understood through the eyes. Explore our archive of visual essays and breakdowns.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid) => (
            <div key={vid.id} className="group cursor-pointer">
              <div className="aspect-video relative rounded-2xl overflow-hidden mb-4 border border-slate-100">
                <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                    <svg className="w-6 h-6 text-slate-900 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded">
                  {vid.duration}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-violet-600 transition-colors">
                {vid.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
