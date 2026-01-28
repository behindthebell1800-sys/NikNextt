
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

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

    try {
      // Use the global process object directly to avoid import-shadowing issues
      const apiKey = (window as any).process?.env?.API_KEY || (process as any)?.env?.API_KEY;
      
      if (!apiKey) {
        throw new Error("I'm having trouble connecting to my brain (API Key missing). Please check your settings.");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      // Using gemini-3-flash-preview as recommended for basic Q&A tasks
      const genAIResponse = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [{ parts: [{ text: query }] }],
        config: {
          systemInstruction: "You are NikNextt, a world-class educator known for extreme clarity. Your goal is to take a complex topic and explain it in a way that is emotionally satisfying, human, and simple. Avoid all jargon. Use a warm, encouraging tone. Respond in JSON format only.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              quickSummary: { 
                type: Type.STRING, 
                description: "A 2-3 line warm and clear summary of the core concept." 
              },
              keyPoints: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "3 simple, high-impact bullet points." 
              },
              simpleExample: { 
                type: Type.STRING, 
                description: "A relatable real-world analogy." 
              },
              visualIdea: { 
                type: Type.STRING, 
                description: "Describe a mental image that helps 'see' the logic." 
              },
              finalTakeaway: { 
                type: Type.STRING, 
                description: "One powerful sentence to remember." 
              }
            },
            required: ["quickSummary", "keyPoints", "simpleExample", "visualIdea", "finalTakeaway"]
          }
        },
      });

      const text = genAIResponse.text;
      if (text) {
        // More robust JSON cleaning in case of markdown artifacts
        const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(cleanJson);
        setResponse(parsed);
      } else {
        throw new Error("The model didn't return a clear answer. Try rephrasing your question!");
      }
    } catch (err: any) {
      console.error("Ask NikNextt Error:", err);
      // Friendly, human-readable error messages
      if (err.message?.includes('403') || err.message?.includes('API key')) {
        setError("My API access seems restricted. Please ensure the API key is valid.");
      } else if (err.message?.includes('429')) {
        setError("I'm thinking a bit too hard right now! Please wait a few seconds and try again.");
      } else {
        setError(err.message || "I couldn't clarify that right now. Let's try again in a moment.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 sm:py-24 bg-gradient-to-b from-[#F0F4FF] to-white px-4 sm:px-6 scroll-mt-20 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="max-w-[1140px] mx-auto relative">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-[12px] font-bold uppercase tracking-widest mb-4">
            AI CLARITY ENGINE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4">Ask NikNextt</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg leading-relaxed">
            Stuck on a concept? Get a human-friendly breakdown in seconds.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleAsk} className="mb-12">
            <div className="relative group">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What do you want to understand today?"
                className="w-full h-16 sm:h-24 px-8 sm:px-12 rounded-[2rem] sm:rounded-full bg-white border-2 border-slate-100 shadow-2xl outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 transition-all text-base sm:text-xl pr-12 sm:pr-48"
              />
              <button
                type="submit"
                disabled={loading}
                className="hidden sm:flex absolute right-3 top-3 bottom-3 px-10 rounded-full gradient-btn text-white font-bold text-lg disabled:opacity-50 transition-all items-center justify-center min-w-[160px]"
              >
                {loading ? (
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Explain"
                )}
              </button>
              {/* Mobile Button Overlay */}
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
            
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              {["Explain Entropy", "Neural Networks?", "Mental Models"].map((suggestion) => (
                <button 
                  key={suggestion}
                  type="button" 
                  onClick={() => setQuery(suggestion)}
                  className="px-4 py-2 rounded-full bg-white/50 border border-slate-100 text-[11px] font-bold text-slate-500 hover:text-brand-blue hover:border-brand-blue/30 transition-all uppercase tracking-widest shadow-sm"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </form>

          {error && (
            <div className="p-8 bg-red-50 border border-red-100 rounded-[2rem] text-red-600 text-center animate-fade-up font-medium shadow-inner">
              <div className="text-2xl mb-2">💡</div>
              {error}
            </div>
          )}

          {response && (
            <div className="space-y-6 animate-fade-up">
              {/* Quick Summary Card */}
              <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl border border-slate-50 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue group-hover:w-3 transition-all" />
                <h3 className="text-[11px] font-extrabold text-brand-blue uppercase tracking-[0.2em] mb-6">The Core Idea</h3>
                <p className="text-xl sm:text-2xl text-slate-800 leading-relaxed font-semibold">
                  {response.quickSummary}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Key Points */}
                <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-50">
                  <h3 className="text-[11px] font-extrabold text-brand-violet uppercase tracking-[0.2em] mb-8">Why it matters</h3>
                  <ul className="space-y-5">
                    {response.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex gap-5">
                        <span className="w-7 h-7 rounded-lg bg-brand-violet/10 text-brand-violet flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-slate-600 leading-relaxed text-[15px] sm:text-base font-medium">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Simple Example */}
                <div className="bg-brand-amber/5 p-8 rounded-[2rem] shadow-lg border border-brand-amber/10 flex flex-col">
                  <h3 className="text-[11px] font-extrabold text-brand-amber uppercase tracking-[0.2em] mb-8">Human Analogy</h3>
                  <div className="flex-grow flex items-center">
                    <p className="text-slate-700 leading-relaxed text-base sm:text-lg italic font-medium">
                      "{response.simpleExample}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Idea */}
              <div className="bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 p-10 rounded-[2.5rem] border border-brand-teal/20 text-center shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center mx-auto mb-8 animate-float">
                  <svg className="w-8 h-8 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-[11px] font-extrabold text-brand-teal uppercase tracking-[0.2em] mb-4">Picture This</h3>
                <p className="text-slate-800 max-w-lg mx-auto leading-relaxed text-base sm:text-lg font-medium">
                  {response.visualIdea}
                </p>
              </div>

              {/* Final Takeaway */}
              <div className="bg-[#0A0D14] p-10 rounded-[2rem] text-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] mb-6 relative z-10">THE NIKNEXTT ESSENCE</h3>
                <p className="text-white text-xl sm:text-2xl font-extrabold leading-tight relative z-10">
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
