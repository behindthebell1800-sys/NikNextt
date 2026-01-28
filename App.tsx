
import React, { useState } from 'react';
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

/**
 * INITIAL_DATA object configuration
 */
const INITIAL_DATA: SiteData = {
  hero: {
    image: 'https://i.postimg.cc/13hf6ktQ/BE99C2AF-25A4-43C1-ACD3-5CAF6135CC07.png',
    supportingLine: 'In a world overflowing with information, we find the core logic that matters.',
    cta: [
      { label: 'Watch on YouTube', url: 'https://youtube.com/@niknextt?si=xc7ig8CRdLKguc_Z' },
      { label: 'Follow on Instagram', url: 'https://www.instagram.com/niknextt?igsh=MTdlcndybXR0NjE1bg%3D%3D&utm_source=qr' }
    ],
    joinUrl: 'https://www.instagram.com/niknextt?igsh=MTdlcndybXR0NjE1bg%3D%3D&utm_source=qr',
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
    name: 'Nikhil Choudhary',
    photo: 'https://i.postimg.cc/0j1ymmkz/3D4D9E28-7872-4D28-A61D-9165FCB5FDB2.png',
    bio: 'Nikhil Choudhary is a digital creator and marketer focused on clarity over noise. With experience in content, design, and automation, he builds simple systems and explanations that help people learn faster, work smarter, and grow without losing the human touch.',
    socials: [
      { platform: 'YouTube', url: 'https://youtube.com/@niknextt?si=xc7ig8CRdLKguc_Z' },
      { platform: 'Instagram', url: 'https://www.instagram.com/niknextt?igsh=MTdlcndybXR0NjE1bg%3D%3D&utm_source=qr' },
      { platform: 'X', url: '#' },
      { platform: 'LinkedIn', url: '#' }
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
  const [data, setData] = useState<SiteData>(INITIAL_DATA);
  const [viewMode, setViewMode] = useState<ViewMode>('public');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      setViewMode('admin');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
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
            {data.askSection?.config.visible && <AskSection />}
            {data.featured.config.visible && <FeaturedSection data={data.featured} isEditMode={false} onUpdate={updateData} />}
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

  const navigateAndScroll = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={navigateAndScroll} joinUrl={data.hero.joinUrl} />
      
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>

      <Footer onAdminClick={handleAdminClick} onNavigate={navigateAndScroll} socials={data.founder.socials} />
    </div>
  );
};

export default App;
