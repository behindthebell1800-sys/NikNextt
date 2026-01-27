
import React from 'react';

export const Newsletter: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-[2.5rem] p-10 lg:p-20 text-center relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Clarity, once a week.</h2>
            <p className="text-indigo-100 mb-10 text-lg">
              No spam. No hype. Just three thoughtful ideas to help you think deeper about the world around you.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-6 py-4 rounded-full bg-white text-slate-900 outline-none focus:ring-4 focus:ring-white/20 transition-all text-[15px]"
                required
              />
              <button 
                type="submit"
                className="bg-amber-400 hover:bg-amber-300 text-slate-900 px-8 py-4 rounded-full font-bold transition-all active:scale-95 shadow-lg shadow-amber-900/20"
              >
                Join Now
              </button>
            </form>
            <p className="text-indigo-200 mt-6 text-sm">
              Join 12,000+ readers who choose depth over speed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
