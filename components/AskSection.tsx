
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

// Ensure process.env.API_KEY is safely accessible in the browser context
const getApiKey = () => {
  try {
    // Attempt to access via the standard environmental path
    return (window as any).process?.env?.API_KEY || (process as any)?.env?.API_KEY;
  } catch {
    return undefined;
  }
};

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
      const apiKey = getApiKey();
      
      if (!apiKey) {
        throw new Error("Clarity link missing: The API brain is not connected. Please ensure the API_KEY is set in the environment.");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const genAIResponse = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [{ parts: [{ text: query }] }],
        config: {
          systemInstruction: `You are the AI brain of "NikNextt". 
          BRAND RULE: NikNextt turns hours of content into minutes of clarity.
          Depth over Speed. Human over Clicks.
          
          HOW TO ANSWER:
          - Use all relevant knowledge.
          - Show ONLY the final structured answer.
          - Be fast, simple, and direct.
          - No jargon. Teaching a curious 10-year-old.
          - No emojis. No filler text.
          
          OUTPUT STRUCTURE (Strict JSON):
          1. QUICK SUMMARY: 2-3 short lines, simple language.
          2. KEY POINTS: 3-5 bullet points of what matters.
          3. SIMPLE EXAMPLE: One easy real-life child-friendly analogy.
          4. VISUAL IDEA: Describe a simple visual (boxes, arrows, steps).
          5. FINAL TAKEAWAY: One strong sentence to remember.`,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              quickSummary: { type: Type.STRING },
              keyPoints: { type: Type.ARRAY, items: { type: Type.STRING } },
              simpleExample: { type: Type.STRING },
              visualIdea: { type: Type.STRING },
              finalTakeaway: { type: Type.STRING }
            },
            required: ["quickSummary", "keyPoints", "simpleExample", "visualIdea", "finalTakeaway"]
          }
        },
      });

      const text = genAIResponse.text;
      if (text) {
        const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(cleanJson);
        setResponse(parsed);
      } else {
        throw new Error("I couldn't distill that topic right now. Please try again.");
      }
    } catch (err: any) {
      console.error("NikNextt Clarity Engine Error:", err);
      if (err.message?.includes('429')) {
        setError("I'm distilling too much right now! Please wait a few seconds.");
      } else {
        setError(err.message || "Something went wrong while finding clarity.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ask" className="py-12 sm:py-24 bg-gradient-to-b from-[#F0F4FF] to-white px-4 sm:px-6 scroll-mt-20 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="max-w-[1140px] mx-auto relative">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-[12px] font-bold uppercase tracking-widest mb-4">
            AI CLARITY ENGINE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Minutes of Clarity</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg leading-relaxed">
            Turn complex topics into human logic instantly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleAsk} className="mb-12">
            <div className="relative group">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What concept needs clarifying?"
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
                  "Clarify"
                )}
              </button>
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
              {["Explain Entropy", "What is Web3?", "Game Theory"].map((suggestion) => (
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
              <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl border border-slate-50 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue group-hover:w-3 transition-all" />
                <h3 className="text-[11px] font-extrabold text-brand-blue uppercase tracking-[0.2em] mb-6">Quick Summary</h3>
                <p className="text-xl sm:text-2xl text-slate-800 leading-relaxed font-semibold">
                  {response.quickSummary}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100">
                  <h3 className="text-[11px] font-extrabold text-brand-violet uppercase tracking-[0.2em] mb-8">Key Points</h3>
                  <ul className="space-y-4">
                    {response.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="w-6 h-6 rounded-lg bg-brand-violet/10 text-brand-violet flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-slate-600 leading-relaxed text-[15px] font-medium">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-brand-amber/5 p-8 rounded-[2rem] shadow-lg border border-brand-amber/10 flex flex-col">
                  <h3 className="text-[11px] font-extrabold text-brand-amber uppercase tracking-[0.2em] mb-8">Simple Example</h3>
                  <div className="flex-grow flex items-center">
                    <p className="text-slate-700 leading-relaxed text-base sm:text-lg italic font-medium">
                      "{response.simpleExample}"
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-teal/5 p-10 rounded-[2.5rem] border border-brand-teal/10 text-center shadow-lg">
                <h3 className="text-[11px] font-extrabold text-brand-teal uppercase tracking-[0.2em] mb-6">Visual Idea</h3>
                <p className="text-slate-800 max-w-lg mx-auto leading-relaxed text-base sm:text-lg font-medium">
                  {response.visualIdea}
                </p>
              </div>

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
