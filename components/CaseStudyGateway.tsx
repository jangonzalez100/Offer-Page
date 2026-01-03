import React from 'react';

const CaseStudyGateway: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-black relative overflow-hidden border-b border-white/10">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/5 p-10 md:p-16 bg-white/[0.01]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[9px] font-black text-studio-gold tracking-[0.5em] uppercase">SECURED ASSETS</span>
              <div className="h-px w-12 bg-studio-gold/30"></div>
            </div>
            <h2 className="font-display text-4xl md:text-7xl mb-8 tracking-tighter leading-none uppercase">
              PROVEN<br /><span className="text-studio-gold">DEPLOYMENTS.</span>
            </h2>
            <p className="text-white/40 text-lg md:text-xl font-bold uppercase tracking-tight leading-snug">
              We do not just build websites. We deploy digital artillery. Review our tactical history and see the results we have secured for elite brands.
            </p>
          </div>
          
          <div className="w-full lg:w-auto">
            <a 
              href="https://studiolegado.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full lg:w-auto px-12 py-8 border-2 border-studio-gold text-studio-gold font-display text-xl md:text-2xl hover:bg-studio-gold hover:text-black transition-all group"
            >
              <span>VIEW FULL CASE STUDIES</span>
              <span className="ml-4 group-hover:translate-x-2 transition-transform">→</span>
            </a>
            <p className="mt-4 text-center lg:text-left text-[8px] font-black text-white/20 tracking-[0.4em] uppercase">
              REDIRECTION TO STUDIOLEGADO.COM SECURE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyGateway;