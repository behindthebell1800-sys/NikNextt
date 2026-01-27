
import React from 'react';

export const Newsletter: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="gradient-hero rounded-[3.5rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-3xl shadow-primary-blue/30">
          {/* Glowing Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-pink-highlight/30 rounded-full blur-[100px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-accent/20 rounded-full blur-[100px] -ml-32 -mb-32" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6">Clarity, delivered.</h2>
            <p className="text-white/80 mb-12 text-xl leading-relaxed">
              No noise. No spam. Just three deep thoughts every Sunday morning to help you navigate a complex world.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="flex-grow px-8 py-5 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder:text-white/50 outline-none focus:ring-4 focus:ring-white/30 transition-all text-lg font-medium"
                required
              />
              <button 
                type="submit"
                className="bg-amber-accent hover:bg-white hover:text-primary-blue text-white px-10 py-5 rounded-full font-extrabold text-lg transition-all active:scale-95 shadow-xl shadow-black/10"
              >
                Join Now
              </button>
            </form>
            <p className="text-white/60 mt-8 text-sm font-bold tracking-wide uppercase">
              Join 12,000+ humans choosing depth over speed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
