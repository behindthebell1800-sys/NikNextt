import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { WhatWeDoSection } from './components/WhatWeDoSection';
import { FeaturedSection } from './components/FeaturedSection';
import { AboutSection } from './components/AboutSection';
import { FounderSection } from './components/FounderSection';
import { CTASection } from './components/CTASection';
import { AskSection } from './components/AskSection';
import { AdminPortal } from './components/AdminPortal';
import { Login } from './components/Login';
import { FounderPage } from './pages/FounderPage';
import { Visuals } from './pages/Visuals';
import { Ideas } from './pages/Ideas';
import { About } from './pages/About';
import { Explore } from './pages/Explore';
import { SiteData, Page, ViewMode } from './types';

const INITIAL_DATA: SiteData = {
  hero: {
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    supportingLine: 'In a world overflowing with information, we find the core logic that matters.',
    cta: [
      { label: 'Watch on YouTube', url: '#' },
      { label: 'Follow on Instagram', url: '#' }
    ],
    joinUrl: '#',
    config: { visible: true }
  },
  whatWeDo: {
    cards: [
      { id: 'w1', title: 'Deep Curation', description: 'We filter through thousands of hours of high-quality content to find the absolute gems.' },
      { id: 'w2', title: 'Visual Synthesis', description: 'Complex ideas are mapped out into beautiful, easy-to-digest visual frameworks.' },
      { id: 'w3', title: 'Actionable Clarity', description: 'We don\'t just summarize; we give you the tools to apply new knowledge immediately.' }
    ],
    config: { visible: true }
  },
  featured: {
    cards: [
      { id: 'f1', title: 'The Future of Learning', description: 'How AI is changing the way we digest information.', thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80', url: '#' },
      { id: 'f2', title: 'Mental Models for 2024', description: 'The 3 frameworks every modern thinker needs.', thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80', url: '#' },
      { id: 'f3', title: 'The Art of Deep Focus', description: 'Reclaiming your attention in a distracted world.', thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80', url: '#' }
    ],
    config: { visible: true }
  },
  askSection: {
    config: { visible: true }
  },
  about: {
    story: 'NikNextt was born from a simple frustration: there is too much great information and too little time to consume it. We believe everyone deserves access to deep insights without having to sacrifice their entire day. Our mission is to bridge the gap between high-level academic concepts and practical, everyday wisdom.',
    config: { visible: true }
  },
  founder: {
    name: 'Nikolai Rossi',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'Educator, designer, and perpetual student. Nikolai spent a decade in digital learning before founding NikNextt to solve the problem of information overwhelm. He believes that depth is the new luxury in a fast-paced world.',
    socials: [
      { platform: 'YouTube', url: '#' },
      { platform: 'Instagram', url: '#' },
      { platform: 'X', url: '#' }
    ],
    config: { visible: true }
  },
  ctaSection: {
    text: 'Ready to clear the fog? Start your journey towards clarity today.',
    buttons: [
      { label: 'Subscribe Now', url: '#' },
      { label: 'View All Content', url: '#' }
    ],
    config: { visible: true }
  }
};

const App: React.FC = () => {
  const [data, setData] = useState<SiteData>(() => {
    const saved = localStorage.getItem('niknextt_site_data');
    return saved ? JSON.parse(saved) : INITIAL_DATA;
  });
  
  const [viewMode, setViewMode] = useState<ViewMode>('public');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('niknextt_admin_session') === 'active';
  });

  useEffect(() => {
    localStorage.setItem('niknextt_site_data', JSON.stringify(data));
  }, [data]);

  const updateData = (path: string, value: any) => {
    const keys = path.split('.');
    setData(prev => {
      const newData = { ...prev };
      let current: any = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsLoggedIn(true);
      localStorage.setItem('niknextt_admin_session', 'active');
      setViewMode('admin');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('niknextt_admin_session');
    setViewMode('public');
  };

  const handleAdminClick = () => {
    setViewMode(isLoggedIn ? 'admin' : 'login');
  };

  if (viewMode === 'login') {
    return <Login onLogin={handleLogin} onCancel={() => setViewMode('public')} />;
  }

  if (viewMode === 'admin' && isLoggedIn) {
    return <AdminPortal data={data} onUpdate={updateData} onLogout={handleLogout} onBackToSite={() => setViewMode('public')} />;
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <>
            {data.hero.config.visible && <HeroSection data={data.hero} isEditMode={false} onUpdate={updateData} />}
            {data.whatWeDo.config.visible && <WhatWeDoSection data={data.whatWeDo} isEditMode={false} onUpdate={updateData} />}
            {data.featured.config.visible && <FeaturedSection data={data.featured} isEditMode={false} onUpdate={updateData} />}
            {data.askSection?.config.visible && <AskSection />}
            {data.about.config.visible && <AboutSection data={data.about} isEditMode={false} onUpdate={updateData} />}
            {data.founder.config.visible && <FounderSection data={data.founder} isEditMode={false} onUpdate={updateData} />}
            {data.ctaSection.config.visible && <CTASection data={data.ctaSection} isEditMode={false} onUpdate={updateData} />}
          </>
        );
      case 'visuals':
        return <Visuals />;
      case 'ideas':
        return <Ideas />;
      case 'about':
        return <About />;
      case 'explore':
        return <Explore />;
      case 'founder':
        return <FounderPage data={data.founder} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} joinUrl={data.hero.joinUrl} />
      
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>

      <Footer onAdminClick={handleAdminClick} />
    </div>
  );
};

export default App;