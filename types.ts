
export interface ContentItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  date: string;
  duration?: string;
}

export type Page = 'home' | 'visuals' | 'ideas' | 'about' | 'explore';
