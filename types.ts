export type Page = 'home' | 'visuals' | 'ideas' | 'about' | 'explore' | 'founder';
export type ViewMode = 'public' | 'admin' | 'login';

export interface ButtonLink {
  label: string;
  url: string;
}

export interface Card {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  url?: string;
}

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  thumbnail: string;
}

export interface SectionConfig {
  visible: boolean;
}

export interface SiteData {
  hero: {
    image: string;
    supportingLine: string;
    cta: ButtonLink[];
    config: SectionConfig;
    joinUrl: string;
  };
  whatWeDo: {
    cards: Card[];
    config: SectionConfig;
  };
  featured: {
    cards: Card[];
    config: SectionConfig;
  };
  askSection: {
    config: SectionConfig;
    dailyLimit?: number;
  };
  about: {
    story: string;
    config: SectionConfig;
  };
  founder: {
    name: string;
    photo: string;
    bio: string;
    socials: {
      platform: string;
      url: string;
    }[];
    config: SectionConfig;
  };
  ctaSection: {
    text: string;
    buttons: ButtonLink[];
    config: SectionConfig;
  };
}