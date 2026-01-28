
import React, { useState } from 'react';

export const PosterPage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generatePoster = async () => {
    setLoading(true);
    setError(null);
    
    // Simulate generation attempt
    setTimeout(() => {
      setLoading(false);
      setError("Sorry for the inconvenience, the Brand Visualizer is coming soon! Our artists are currently teaching the AI how to see depth.");
    }, 1500);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 animate-fade-up">
      <div className="max-w-4xl mx-auto text-center">
        <header className="mb-12">
          <div className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal rounded-full text-[12px] font-bold uppercase tracking-[0.2em] mb-6">
            Brand Visualizer
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Poster <span className="gradient-text">Lab</span>
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-lg leading-relaxed">
            Generate your brand's "Coming Soon" visual. High quality, 1:1, designed for clarity.
          </p>
        </header>

        <div className="relative group max-w-xl mx-auto">
          {!imageUrl && !loading && !error && (
            <div className="aspect-square bg-slate-50 border-2 border-dashed border-slate-200 rounded-[3rem] flex flex-col items-center justify-center p-12 transition-all hover:bg-slate-100 hover:border-brand-blue/30">
              <div className="w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-10 h-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-slate-400 font-medium mb-8">No visual generated yet.</p>
              <button 
                onClick={generatePoster}
                className="gradient-btn text-white px-10 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-all"
              >
                Generate Poster
              </button>
            </div>
          )}

          {loading && (
            <div className="aspect-square bg-slate-900 rounded-[3rem] flex flex-col items-center justify-center p-12 text-white overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
              <div className="w-16 h-16 border-4 border-brand-blue/30 border-t-brand-blue rounded-full animate-spin mb-8 relative z-10" />
              <h3 className="text-xl font-bold mb-4 relative z-10">Creating Clarity...</h3>
              <p className="text-white/60 text-sm max-w-[240px] leading-relaxed relative z-10">
                Mixing soft gradients, geometric shapes, and deep curiosity.
              </p>
            </div>
          )}

          {error && !loading && (
            <div className="aspect-square bg-slate-50 rounded-[3rem] flex flex-col items-center justify-center p-12 border border-slate-100 shadow-inner">
              <div className="text-4xl mb-6">🎨</div>
              <p className="text-slate-600 font-bold mb-8 px-8 leading-relaxed">{error}</p>
              <button 
                onClick={generatePoster}
                className="gradient-btn text-white px-8 py-3 rounded-full font-bold shadow-lg"
              >
                Notify Me
              </button>
            </div>
          )}

          {imageUrl && !loading && (
            <div className="animate-fade-up">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-8 border-white group relative">
                <img src={imageUrl} alt="Generated Poster" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <a 
                     href={imageUrl} 
                     download="NikNextt-Coming-Soon.png"
                     className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold shadow-2xl hover:scale-105 transition-all"
                   >
                     Download 1:1 Poster
                   </a>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <footer className="mt-20 max-w-xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
             <div className="h-1 bg-brand-blue/20 rounded-full" />
             <div className="h-1 bg-brand-violet/20 rounded-full" />
             <div className="h-1 bg-brand-teal/20 rounded-full" />
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.4em] mt-8">
            Curiosity · Clarity · Learning · Future
          </p>
        </footer>
      </div>
    </div>
  );
};
