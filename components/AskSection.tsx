
import React, { useState } from 'react';

interface AskResponse {
  quickSummary: string;
  keyPoints: string[];
  simpleExample: string;
  visualIdea: string;
  finalTakeaway: string;
}

export const AskSection: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<AskResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setResponse(null);

    // The API key is currently being configured. 
    // We simulate a brief "distilling" delay to maintain the UI feel, then show the 'Coming Soon' message.
    setTimeout(() => {
      setLoading(false);
      setError("Sorry for the inconvenience, NikNextt's AI Clarity Engine is coming soon! We're currently fine-tuning my brain for maximum clarity.");
    }, 1200);
  };

  return (
    <section id="ask" className="py-16 sm:py-32 bg-gradient-to-b from-[#F5F8FF] to-white px-4 sm:px-6 scroll-mt-20 overflow-hidden relative">
      {/* Soft Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-blue/5 rounded-full blur-[160px] -z-10 pointer-events-none" />
      
      <div className="max-w-[1140px] mx-auto relative">
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-block px-4 py-1.5 bg-brand-violet/10 text-brand-violet rounded-full text-[12px] font-bold uppercase tracking-[0.2em] mb-6">
            The Clarity Engine
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Ask <span className="gradient-text">NikNextt</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed font-medium">
            Long information → clear understanding → fast.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleAsk} className="mb-16">
            <div className="relative group">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What complex topic can I simplify for you?"
                className="w-full h-16 sm:h-24 px-8 sm:px-12 rounded-[2rem] sm:rounded-full bg-white border-2 border-slate-100 shadow-2xl outline-none focus:border-brand-blue focus:ring-8 focus:ring-brand-blue/5 transition-all text-base sm:text-xl pr-12 sm:pr-48 font-medium placeholder:text-slate-300"
              />
              <button
                type="submit"
                disabled={loading}
                className="hidden sm:flex absolute right-4 top-4 bottom-4 px-12 rounded-full gradient-btn text-white font-bold text-lg disabled:opacity-50 transition-all items-center justify-center min-w-[180px] shadow-xl shadow-brand-blue/20"
              >
                {loading ? (
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Explain"
                )}
              </button>
              {/* Mobile Send Icon */}
              <button
                type="submit"
                disabled={loading}
                className="sm:hidden absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full gradient-btn text-white flex items-center justify-center disabled:opacity-50"
              >
                {loading ? (
                   <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                )}
              </button>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              {["Entropy in 2 minutes", "How Neural Networks learn", "Game Theory basics", "What is Web3?"].map((suggestion) => (
                <button 
                  key={suggestion}
                  type="button" 
                  onClick={() => setQuery(suggestion)}
                  className="px-5 py-2.5 rounded-full bg-white border border-slate-100 text-[11px] font-bold text-slate-500 hover:text-brand-blue hover:border-brand-blue/30 transition-all uppercase tracking-widest shadow-sm active:scale-95"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </form>

          {error && (
            <div className="p-10 bg-brand-blue/5 border border-brand-blue/10 rounded-[2.5rem] text-slate-700 text-center animate-fade-up font-semibold shadow-inner">
              <div className="text-3xl mb-4">🧠</div>
              <p className="text-lg leading-relaxed max-w-md mx-auto">{error}</p>
            </div>
          )}

          {response && (
            <div className="space-y-8 animate-fade-up">
              {/* 1. Quick Summary */}
              <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl border border-slate-50 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-3 h-full bg-brand-blue group-hover:w-4 transition-all" />
                <h3 className="text-[12px] font-extrabold text-brand-blue uppercase tracking-[0.3em] mb-6">Quick Summary</h3>
                <p className="text-xl sm:text-3xl text-slate-800 leading-snug font-bold">
                  {response.quickSummary}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* 2. Key Points */}
                <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-lg border border-slate-100">
                  <h3 className="text-[12px] font-extrabold text-brand-violet uppercase tracking-[0.3em] mb-8">The Core Logic</h3>
                  <ul className="space-y-6">
                    {response.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex gap-5">
                        <span className="w-8 h-8 rounded-xl bg-brand-violet/10 text-brand-violet flex items-center justify-center text-[12px] font-black shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-medium">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Simple Example */}
                <div className="bg-brand-amber/5 p-8 sm:p-10 rounded-[2.5rem] shadow-lg border border-brand-amber/10 flex flex-col">
                  <h3 className="text-[12px] font-extrabold text-brand-amber uppercase tracking-[0.3em] mb-8">Imagine This...</h3>
                  <div className="flex-grow flex items-center">
                    <p className="text-slate-700 leading-relaxed text-lg sm:text-xl italic font-semibold">
                      "{response.simpleExample}"
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Visual Idea */}
              <div className="bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 p-10 sm:p-14 rounded-[3rem] border border-brand-teal/20 text-center shadow-lg group">
                <div className="w-20 h-20 rounded-[1.5rem] bg-white shadow-2xl flex items-center justify-center mx-auto mb-10 animate-float">
                  <svg className="w-10 h-10 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-[12px] font-extrabold text-brand-teal uppercase tracking-[0.3em] mb-6">Mental Model</h3>
                <p className="text-slate-800 max-w-xl mx-auto leading-relaxed text-lg sm:text-xl font-bold">
                  {response.visualIdea}
                </p>
              </div>

              {/* 5. Final Takeaway */}
              <div className="bg-slate-900 p-12 sm:p-16 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <h3 className="text-[11px] font-black text-white/30 uppercase tracking-[0.5em] mb-8 relative z-10">THE NIKNEXTT ESSENCE</h3>
                <p className="text-white text-2xl sm:text-4xl font-extrabold leading-tight relative z-10 tracking-tight">
                  {response.finalTakeaway}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
