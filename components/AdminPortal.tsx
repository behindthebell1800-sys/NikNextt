import React, { useState } from 'react';
import { SiteData, Card } from '../types';

interface AdminPortalProps {
  data: SiteData;
  onUpdate: (path: string, value: any) => void;
  onLogout: () => void;
  onBackToSite: () => void;
}

const InputLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em] mb-2">{children}</label>
);

export const AdminPortal: React.FC<AdminPortalProps> = ({ data, onUpdate, onLogout, onBackToSite }) => {
  const [activeTab, setActiveTab] = useState<'content' | 'visibility' | 'featured'>('content');
  const [showExport, setShowExport] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);

  const handleCardUpdate = (section: 'whatWeDo' | 'featured', idx: number, field: string, value: any) => {
    const cards = [...data[section].cards];
    cards[idx] = { ...cards[idx], [field]: value };
    onUpdate(`${section}.cards`, cards);
  };

  const handleVisibility = (section: keyof SiteData) => {
    onUpdate(`${section}.config.visible`, !data[section].config.visible);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF] flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-100 p-8 flex flex-col fixed h-full">
        <div className="mb-12">
          <h1 className="text-2xl font-extrabold gradient-text">Admin Portal</h1>
          <p className="text-xs font-medium text-slate-400 mt-1">Manage NikNextt Brand</p>
        </div>

        <nav className="flex-grow space-y-2">
          {[
            { id: 'content', label: 'Brand Content', icon: '📝' },
            { id: 'featured', label: 'Featured Items', icon: '🌟' },
            { id: 'visibility', label: 'Visibility Controls', icon: '👁️' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === tab.id ? 'bg-brand-violet text-white shadow-lg shadow-brand-violet/20' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="pt-8 border-t border-slate-100 space-y-2">
          <button 
            onClick={() => setShowExport(true)}
            className="w-full text-left px-6 py-3 text-sm font-bold text-brand-blue hover:bg-brand-blue/5 rounded-xl flex items-center gap-2 transition-colors"
          >
            <span>💾</span> Export Config
          </button>
          <button onClick={onBackToSite} className="w-full text-left px-6 py-3 text-sm font-bold text-slate-600 hover:text-brand-blue flex items-center gap-2">
            <span>←</span> Back to Site
          </button>
          <button onClick={onLogout} className="w-full text-left px-6 py-3 text-sm font-bold text-red-500 hover:text-red-600 flex items-center gap-2">
            <span>⎋</span> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow ml-72 p-12 max-w-5xl">
        {activeTab === 'content' && (
          <div className="space-y-12 animate-fade-up">
            <header>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Brand Messaging</h2>
              <p className="text-slate-500 font-medium">Locked layouts, dynamic clarity.</p>
            </header>

            {/* Hero Section */}
            <section className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-8 text-brand-blue flex items-center gap-3">
                <span className="w-2 h-6 bg-brand-blue rounded-full" />
                Hero Section
              </h3>
              <div className="grid gap-8">
                <div>
                  <InputLabel>Hero 16:9 Image URL</InputLabel>
                  <input className="w-full bg-slate-50 p-4 rounded-xl border border-slate-100 outline-none focus:border-brand-blue" value={data.hero.image} onChange={e => onUpdate('hero.image', e.target.value)} />
                </div>
                <div>
                  <InputLabel>Navbar Join Button Link</InputLabel>
                  <input className="w-full bg-slate-50 p-4 rounded-xl border border-slate-100 outline-none focus:border-brand-blue" value={data.hero.joinUrl} onChange={e => onUpdate('hero.joinUrl', e.target.value)} placeholder="https://..." />
                </div>
                <div>
                  <InputLabel>Hero Supporting Line</InputLabel>
                  <textarea className="w-full bg-slate-50 p-4 rounded-xl border border-slate-100 outline-none focus:border-brand-blue min-h-[100px]" value={data.hero.supportingLine} onChange={e => onUpdate('hero.supportingLine', e.target.value)} />
                </div>
              </div>
            </section>

            {/* About & Founder */}
            <section className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-8 text-brand-violet flex items-center gap-3">
                <span className="w-2 h-6 bg-brand-violet rounded-full" />
                About & Founder
              </h3>
              <div className="grid gap-8">
                <div>
                  <InputLabel>Brand Story (About Section)</InputLabel>
                  <textarea className="w-full bg-slate-50 p-4 rounded-xl border border-slate-100 outline-none focus:border-brand-blue min-h-[150px]" value={data.about.story} onChange={e => onUpdate('about.story', e.target.value)} />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <InputLabel>Founder Name</InputLabel>
                    <input className="w-full bg-slate-50 p-4 rounded-xl border border-slate-100 outline-none focus:border-brand-blue" value={data.founder.name} onChange={e => onUpdate('founder.name', e.target.value)} />
                  </div>
                  <div>
                    <InputLabel>Founder Image URL</InputLabel>
                    <input className="w-full bg-slate-50 p-4 rounded-xl border border-slate-100 outline-none focus:border-brand-blue" value={data.founder.photo} onChange={e => onUpdate('founder.photo', e.target.value)} />
                  </div>
                </div>
                <div>
                  <InputLabel>Founder Bio</InputLabel>
                  <textarea className="w-full bg-slate-50 p-4 rounded-xl border border-slate-100 outline-none focus:border-brand-blue min-h-[100px]" value={data.founder.bio} onChange={e => onUpdate('founder.bio', e.target.value)} />
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'featured' && (
          <div className="space-y-12 animate-fade-up">
            <header className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Featured Content</h2>
                <p className="text-slate-500 font-medium">Manage the insights grid on the home page.</p>
              </div>
              <button 
                onClick={() => {
                  const newCard: Card = { id: Date.now().toString(), title: 'New Insight', description: 'Brief overview...', thumbnail: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=600&q=80', url: '#' };
                  onUpdate('featured.cards', [...data.featured.cards, newCard]);
                }}
                className="bg-brand-teal text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-brand-teal/20"
              >
                + Add Content Item
              </button>
            </header>

            <div className="grid gap-6">
              {data.featured.cards.map((card, idx) => (
                <div key={card.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex gap-8">
                  <div className="w-48 h-32 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                    <img src={card.thumbnail} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <InputLabel>Title</InputLabel>
                      <input className="w-full bg-slate-50 px-4 py-2 rounded-lg border border-slate-100" value={card.title} onChange={e => handleCardUpdate('featured', idx, 'title', e.target.value)} />
                    </div>
                    <div>
                      <InputLabel>Thumbnail URL</InputLabel>
                      <input className="w-full bg-slate-50 px-4 py-2 rounded-lg border border-slate-100" value={card.thumbnail} onChange={e => handleCardUpdate('featured', idx, 'thumbnail', e.target.value)} />
                    </div>
                    <div>
                      <InputLabel>External Link (YouTube/Insta)</InputLabel>
                      <input className="w-full bg-slate-50 px-4 py-2 rounded-lg border border-slate-100" value={card.url} onChange={e => handleCardUpdate('featured', idx, 'url', e.target.value)} />
                    </div>
                  </div>
                  <button 
                    onClick={() => onUpdate('featured.cards', data.featured.cards.filter(c => c.id !== card.id))}
                    className="self-start p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'visibility' && (
          <div className="space-y-12 animate-fade-up">
            <header>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Visibility Controls</h2>
              <p className="text-slate-500 font-medium">Toggle entire sections on or off.</p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { id: 'hero', label: 'Hero Section' },
                { id: 'whatWeDo', label: 'What NikNextt Does' },
                { id: 'featured', label: 'Featured Content Grid' },
                { id: 'askSection', label: 'Ask NikNextt (AI AI)' },
                { id: 'about', label: 'About Brand Story' },
                { id: 'founder', label: 'Founder Bio Section' },
                { id: 'ctaSection', label: 'Closing CTA Banner' }
              ].map(section => (
                <div key={section.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex items-center justify-between">
                  <span className="font-bold text-slate-700">{section.label}</span>
                  <button 
                    onClick={() => handleVisibility(section.id as any)}
                    className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${data[section.id as keyof SiteData].config.visible ? 'bg-brand-teal' : 'bg-slate-200'}`}
                  >
                    <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${data[section.id as keyof SiteData].config.visible ? 'translate-x-6' : ''}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Export Modal */}
      {showExport && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[300] flex items-center justify-center p-6">
          <div className="bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl flex flex-col max-h-[90vh]">
            <div className="p-10 border-b border-slate-100 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">Export Site Configuration</h3>
                <p className="text-slate-500 font-medium mt-1">Copy this JSON and paste it into INITIAL_DATA in App.tsx to save changes permanently.</p>
              </div>
              <button onClick={() => setShowExport(false)} className="w-12 h-12 rounded-full hover:bg-slate-50 flex items-center justify-center transition-colors">
                <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="flex-grow overflow-auto p-10">
              <pre className="bg-slate-900 text-brand-teal p-8 rounded-3xl text-sm font-mono leading-relaxed overflow-x-auto">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>

            <div className="p-10 border-t border-slate-100 flex justify-end gap-4">
              <button 
                onClick={copyToClipboard}
                className={`px-10 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 ${copyFeedback ? 'bg-brand-teal text-white' : 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20'}`}
              >
                {copyFeedback ? (
                  <><span>✓</span> Copied!</>
                ) : (
                  <><span>📋</span> Copy to Clipboard</>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};