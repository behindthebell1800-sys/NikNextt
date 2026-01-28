import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import process from 'process';

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
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API Key not found. Please check your environment configuration.");
      }

      const ai = new GoogleGenAI({ apiKey });
      const genAIResponse = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: query,
        config: {
          systemInstruction: `You are NikNextt, a friendly teacher. 
          Your mission: Hours of information → minutes of clarity.
          Respond ONLY with the final simplified answer.
          - Do NOT mention sources.
          - Do NOT show research steps or reasoning.
          - Do NOT use emojis.
          - Use very simple words (beginner-level).
          - No technical jargon unless explained simply.
          - Be fast and direct.
          - Explain like teaching a curious 10-year-old.
          Respond in valid JSON format.`,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              quickSummary: { type: Type.STRING, description: "A 2-3 line very simple, direct summary." },
              keyPoints: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "3-5 bullet points of the most important ideas." 
              },
              simpleExample: { type: Type.STRING, description: "One easy, real-life relatable example for a 10-year-old." },
              visualIdea: { type: Type.STRING, description: "Describe a simple visual the brain can imagine (boxes, steps, etc). Keep it minimal." },
              finalTakeaway: { type: Type.STRING, description: "One strong sentence the user should remember." }
            },
            required: ["quickSummary", "keyPoints", "simpleExample", "visualIdea", "finalTakeaway"]
          }
        },
      });

      let text = genAIResponse.text;
      if (text) {
        // Remove markdown code blocks if present to ensure clean JSON parsing
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        setResponse(JSON.parse(text));
      }
    } catch (err: any) {
      console.error("Ask NikNextt Error:", err);
      setError(err.message || "I couldn't clarify that right now. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 sm:py-24 bg-[#F0F4FF] px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Ask NikNextt</h2>
          <p className="text-slate-600 max-w-xl mx-auto font-medium">
            Turning hours of content into minutes of clarity.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleAsk} className="mb-12">
            <div className="relative group">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask any topic, question, or concept you want to understand..."
                className="w-full h-16 sm:h-20 px-8 rounded-full bg-white border-2 border-slate-100 shadow-xl outline-none focus:border-brand-blue transition-all text-base sm:text-lg pr-40"
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 px-6 sm:px-10 rounded-full gradient-btn text-white font-bold text-sm sm:text-base disabled:opacity-50 transition-all flex items-center justify-center min-w-[120px]"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Explain Simply"
                )}
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 justify-center">
              <button 
                type="button" 
                onClick={() => setQuery("Explain AI like I'm 10")}
                className="text-[11px] font-bold text-slate-400 hover:text-brand-blue transition-colors uppercase tracking-[0.15em]"
              >
                Ex: AI for 10yr olds
              </button>
              <button 
                type="button" 
                onClick={() => setQuery("What is Entropy?")}
                className="text-[11px] font-bold text-slate-400 hover:text-brand-blue transition-colors uppercase tracking-[0.15em]"
              >
                Ex: What is Entropy?
              </button>
            </div>
          </form>

          {error && (
            <div className="p-6 bg-red-50 border border-red-100 rounded-3xl text-red-600 text-center animate-fade-up">
              {error}
            </div>
          )}

          {response && (
            <div className="space-y-6 animate-fade-up">
              {/* Quick Summary Card */}
              <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
                <h3 className="text-[11px] font-extrabold text-brand-blue uppercase tracking-[0.2em] mb-4">Quick Summary</h3>
                <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
                  {response.quickSummary}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Key Points */}
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                  <h3 className="text-[11px] font-extrabold text-brand-violet uppercase tracking-[0.2em] mb-6">Key Points</h3>
                  <ul className="space-y-4">
                    {response.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="w-6 h-6 rounded-full bg-brand-violet/10 text-brand-violet flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Simple Example */}
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                  <h3 className="text-[11px] font-extrabold text-brand-amber uppercase tracking-[0.2em] mb-6">Simple Example</h3>
                  <div className="flex gap-4">
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base italic">
                      {response.simpleExample}
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Idea */}
              <div className="bg-gradient-to-br from-brand-teal/5 to-brand-blue/5 p-8 sm:p-10 rounded-[2.5rem] border border-brand-teal/10">
                <h3 className="text-[11px] font-extrabold text-brand-teal uppercase tracking-[0.2em] mb-6">Visual Idea</h3>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 animate-float">
                    <svg className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-slate-700 max-w-lg leading-relaxed text-sm sm:text-base">
                    {response.visualIdea}
                  </p>
                </div>
              </div>

              {/* Final Takeaway */}
              <div className="bg-slate-900 p-8 rounded-[2rem] text-center">
                <h3 className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] mb-4">Final Takeaway</h3>
                <p className="text-white text-lg font-bold">
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