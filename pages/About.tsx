
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-white min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 py-16 lg:py-28">
        
        {/* SECTION 1 — INTRO */}
        <section className="mb-24 lg:mb-32">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">
            About NikNextt
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium">
            Information is everywhere, yet true understanding has become rare. NikNextt exists to reduce the noise and bring clarity to a complex world.
          </p>
        </section>

        {/* SECTION 2 — THE PROBLEM */}
        <section className="mb-24 lg:mb-32">
          <h2 className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-[0.3em]">The Challenge</h2>
          <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
            <p>
              We are living through an era of information obesity. There is more high-quality content available than ever before, but our time remains a finite resource.
            </p>
            <p>
              Most people consume content at a rapid pace scrolling through insights, listening at double speed, and checking off lists without ever truly retaining what they have heard. 
            </p>
            <p>
              Important ideas that could actually change how we think or work often get lost in the endless stream. We are consuming more, but understanding less.
            </p>
          </div>
        </section>

        {/* SECTION 3 — WHAT NIKNEXTT DOES */}
        <section className="mb-24 lg:mb-32 p-10 sm:p-16 bg-slate-50 rounded-[3rem] border border-slate-100">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8">What we do</h2>
          <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
            <p>
              Our process is simple but deliberate. We take long-form content videos, podcasts, and complex academic topics and break them down into their most essential elements.
            </p>
            <p>
              We do not just summarize; we synthesize. We extract the core logic and explain it in a way that is easy to grasp, whether you are an expert or a curious learner. 
            </p>
            <p>
              Our goal is to provide you with the mental frameworks you need to understand a topic deeply, in just a fraction of the time it would normally take.
            </p>
          </div>
        </section>

        {/* SECTION 4 — PHILOSOPHY */}
        <section className="mb-24 lg:mb-32 text-center py-16 border-y border-slate-100">
          <blockquote className="text-2xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-10 max-w-2xl mx-auto">
            “If something cannot be explained clearly, it is not understood deeply.”
          </blockquote>
          <div className="max-w-xl mx-auto space-y-6 text-slate-600">
            <p className="text-lg">
              We value clarity over volume. We believe that learning is not about how much you know, but how well you understand what you know. 
            </p>
            <p className="text-lg">
              By slowing down complex ideas and stripping away the fluff, we make deep understanding accessible to everyone.
            </p>
          </div>
        </section>

        {/* SECTION 5 — WHO THIS IS FOR */}
        <section className="mb-24 lg:mb-32">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8">Who this is for</h2>
          <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
            <p>
              NikNextt is for the curious minds. It is for the lifelong learners who are tired of shallow summaries and clickbait headlines.
            </p>
            <p>
              It is for people who value their time and want to reach the meaning behind the noise. If you are someone who wants to understand the world a little better every day without sacrificing your peace of mind, you are in the right place.
            </p>
          </div>
        </section>

        {/* SECTION 6 — CLOSING */}
        <section className="pt-16 border-t border-slate-100">
          <p className="text-2xl text-slate-800 font-bold leading-relaxed max-w-2xl">
            Clarity is not just a goal; it is a way of seeing. We invite you to explore our insights and join us in our pursuit of deeper understanding.
          </p>
        </section>

      </div>
    </div>
  );
};
