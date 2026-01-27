
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-[800px] mx-auto px-6">
          <h1 className="text-5xl font-bold text-slate-900 mb-10 text-center">About NikNextt</h1>
          
          <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
            <p>
              NikNextt was created to help people understand, not just consume. 
              In a world that feels increasingly fast, shallow, and noisy, this platform is a pause — a place to think, learn, and grow.
            </p>
            
            <div className="bg-violet-50 p-8 rounded-3xl border border-violet-100 my-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Philosophy</h3>
              <p className="italic">
                "Real knowledge isn't about how much you can memorize, but how clearly you can connect the dots. 
                We don't want to give you more facts; we want to give you better frameworks."
              </p>
            </div>

            <p>
              We believe that the best way to prepare for the future is to understand the fundamentals. 
              Whether it's the physics of the stars, the psychology of our behavior, or the systems of 
              our economy, everything is connected.
            </p>
            
            <p>
              NikNextt is a labor of love by a small team of educators, designers, and thinkers 
              who believe that the internet can still be a place for deep concentration.
            </p>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-100 flex items-center gap-6">
            <img 
              src="https://picsum.photos/id/64/100/100" 
              alt="Founder" 
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
            />
            <div>
              <p className="font-bold text-slate-900">Nikolai Rossi</p>
              <p className="text-sm text-slate-500">Founder, NikNextt</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
