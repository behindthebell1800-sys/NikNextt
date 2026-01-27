import React from 'react';
import { SiteData } from '../types';

interface SectionProps {
  data: SiteData['about'];
  isEditMode: boolean;
  onUpdate: (path: string, value: any) => void;
}

export const AboutSection: React.FC<SectionProps> = ({ data, isEditMode, onUpdate }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-violet/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-12">The Philosophy</h2>
        {isEditMode ? (
          <textarea 
            className="w-full bg-transparent text-xl lg:text-2xl text-slate-600 leading-[1.6] editable-focus border-none focus:ring-0 p-4 resize-none italic"
            value={data.story}
            onChange={(e) => onUpdate('about.story', e.target.value)}
            rows={6}
          />
        ) : (
          <p className="text-xl lg:text-2xl text-slate-600 leading-[1.6] italic">
            "{data.story}"
          </p>
        )}
        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-blue/30" />
          <div className="w-12 h-2 rounded-full bg-brand-violet/30" />
          <div className="w-2 h-2 rounded-full bg-brand-pink/30" />
        </div>
      </div>
    </section>
  );
};