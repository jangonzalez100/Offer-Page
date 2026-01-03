import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [year, setYear] = useState<string>('');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-black py-24 px-6 lg:px-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-md">
            <a 
              href="https://studiolegado.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 mb-8 group inline-flex"
            >
              <span className="font-display text-4xl tracking-tighter group-hover:text-studio-gold transition-colors">STUDIO LEGADO.</span>
              <div className="w-6 h-8 bg-studio-gold transition-all group-hover:translate-x-1"></div>
            </a>
            <p className="text-white/30 text-[11px] font-black uppercase tracking-[0.3em] leading-loose">
              Forging digital dominance for tomorrow leaders. Not just websites. Cultural influence. Built with AI speed sustained with elite strategy.
            </p>
          </div>

          <div className="flex flex-col md:items-end md:text-right gap-2 self-center">
            <span className="font-display text-xs text-studio-gold tracking-[0.5em] opacity-20">ELITE DIGITAL INFRASTRUCTURE</span>
            <span className="font-display text-[8px] text-white tracking-[0.4em] opacity-10 uppercase">Proprietary AI Workflows and Strategic Branding</span>
          </div>
        </div>
        
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 items-center">
          <p className="text-[9px] font-black text-white/10 uppercase tracking-[0.6em]">
            &copy; {year || '2025'} STUDIO LEGADO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-black text-white/10 uppercase tracking-[0.6em]">Weaponized by</span>
            <a 
              href="https://studiolegado.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 opacity-20 hover:opacity-100 transition-all hover:scale-105"
            >
               <span className="text-[10px] font-black text-white uppercase tracking-tighter">STUDIO LEGADO</span>
               <div className="w-2.5 h-4 bg-studio-gold"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;