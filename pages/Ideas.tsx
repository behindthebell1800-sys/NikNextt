
import React from 'react';

const notes = [
  { title: "Entropy in Social Systems", excerpt: "How organizations tend towards chaos if not constantly infused with purpose...", date: "Oct 2024" },
  { title: "The Feedback Loop Problem", excerpt: "Why automated systems often create their own problems when left unmonitored...", date: "Sep 2024" },
  { title: "Minimalism of Information", excerpt: "The cognitive cost of choice and how to filter for quality over quantity...", date: "Aug 2024" },
  { title: "Digital Sovereignty", excerpt: "Owning your data is the first step towards owning your attention...", date: "Jul 2024" },
];

export const Ideas: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 py-16">
      <div className="max-w-[1140px] mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Ideas & Raw Notes</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Shorter, less formal explorations of things we're currently thinking about. A digital garden of sorts.
          </p>
        </header>

        <div className="grid gap-6">
          {notes.map((note, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-violet-200 transition-colors group cursor-pointer">
              <span className="text-xs font-bold text-violet-500 uppercase tracking-widest mb-2 block">{note.date}</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-violet-600 transition-colors">{note.title}</h3>
              <p className="text-slate-600 text-lg">{note.excerpt}</p>
              <div className="mt-6 flex items-center text-sm font-semibold text-slate-400 group-hover:text-violet-600">
                Read reflection →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
