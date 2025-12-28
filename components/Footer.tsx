
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-24 px-6 lg:px-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-md">
            <div className="flex items-center gap-1 mb-8">
              <span className="font-display text-4xl tracking-tighter">STUDIO LEGADO.</span>
              <div className="w-6 h-8 bg-studio-gold"></div>
            </div>
            <p className="text-white/30 text-[11px] font-black uppercase tracking-[0.3em] leading-loose">
              Forging digital dominance for tomorrow's leaders. Not just websites. Cultural influence. Built with AI-speed, sustained with elite strategy.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 text-[11px] font-black uppercase tracking-[0.4em] text-white/40">
            <div className="flex flex-col gap-5">
              <span className="text-studio-gold mb-2 opacity-50">Systems</span>
              <a href="#" className="hover:text-white transition-colors">Client Portal</a>
              <a href="#" className="hover:text-white transition-colors">Queue Status</a>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-studio-gold mb-2 opacity-50">Influence</span>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-studio-gold mb-2 opacity-50">Legal</span>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 items-center">
          <p className="text-[9px] font-black text-white/10 uppercase tracking-[0.6em]">
            &copy; {new Date().getFullYear()} STUDIO LEGADO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-black text-white/10 uppercase tracking-[0.6em]">Weaponized by</span>
            <div className="flex items-center gap-1 opacity-20">
               <span className="text-[10px] font-black text-white uppercase tracking-tighter">STUDIO LEGADO</span>
               <div className="w-2.5 h-4 bg-studio-gold"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
