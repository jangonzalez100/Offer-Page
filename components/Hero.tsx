import React from 'react';
import { scrollToSection } from '../utils/navigation';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-20 md:pt-12 md:pb-32 px-6 lg:px-12 bg-black overflow-hidden border-b border-white/10">
      <div className="watermark-sl left-[-5%] top-[-5%] rotate-[-10deg]">SL</div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col mb-10 lg:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-studio-gold"></div>
            <span className="text-[9px] font-black text-studio-gold tracking-[0.5em] uppercase">MISSION 01 ACTIVE</span>
          </div>
          
          <h1 className="font-display text-[clamp(3.5rem,12vw,9.5rem)] tracking-tighter leading-[0.8] mb-8 md:mb-10">
            STUDIO<br />LEGADO.
          </h1>
          
          <div className="max-w-4xl">
            <p className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-2 tracking-tighter uppercase leading-[0.85]">
              STOP DECORATING.
            </p>
            <p className="text-4xl md:text-7xl lg:text-8xl font-black text-studio-gold mb-8 tracking-tighter uppercase leading-[0.85]">
              START WEAPONIZING.
            </p>
            <p className="text-base md:text-2xl text-white/50 mb-10 tracking-tight uppercase font-bold max-w-2xl leading-snug italic">
              Websites should convert not just exist. We build the engine.
            </p>
            
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="w-full lg:w-auto">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full sm:w-auto bg-studio-gold text-black font-display text-xl md:text-3xl px-12 py-6 md:px-20 md:py-8 hover:bg-white transition-all shadow-[15px_15px_0px_0px_rgba(255,255,255,0.03)] flex items-center justify-center gap-4 group"
                >
                  <span>CLAIM MY BUNDLE</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
                <div className="mt-4 flex items-center gap-3 px-2">
                  <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                  <span className="text-[10px] font-black text-white/40 tracking-[0.2em] uppercase">05 SLOTS LEFT FOR JANUARY</span>
                </div>
              </div>

              {/* Instant Lead Magnet Callout */}
              <div className="bg-white/[0.03] border border-white/10 p-5 md:p-6 max-w-sm relative group cursor-pointer hover:border-studio-gold/40 transition-colors" onClick={() => scrollToSection('contact')}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[9px] font-black text-studio-gold uppercase tracking-widest">FREE PROTOCOL</span>
                  <div className="flex-1 h-px bg-studio-gold/20"></div>
                </div>
                <h3 className="text-white font-display text-sm md:text-base mb-2 tracking-tight uppercase">2026 BRAND COMMANDER CHECKLIST</h3>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-tight leading-relaxed">
                  Our proprietary 15 point audit to weaponize your brand for maximum conversion. Download inside.
                </p>
                <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-white/5 pt-12">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex -space-x-1.5">
                {[1, 2, 3].map((num) => (
                  <div 
                    key={num} 
                    className="w-10 h-10 border border-white/20 bg-black flex flex-col items-center justify-center relative group"
                  >
                    <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-green-500 rounded-full"></div>
                    <span className="text-[7px] font-black text-white/40 tracking-tighter uppercase mb-[-2px]">Unit</span>
                    <span className="text-[10px] font-black text-studio-gold">0{num}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-white/80 tracking-widest uppercase italic">TRUSTED BY 50 PLUS BRANDS</span>
                <span className="text-[8px] font-bold text-white/20 uppercase tracking-[0.2em]">GLOBAL DEPLOYMENT READY</span>
              </div>
            </div>
            <p className="text-white/40 text-sm md:text-lg font-medium leading-relaxed max-w-xl uppercase tracking-tight">
              Elite digital infrastructure for serious business owners. Secure 2.5K in value for 599 total deployment.
            </p>
          </div>
          
          <div className="lg:col-span-6 flex flex-wrap gap-4 md:justify-end">
            <div className="px-5 py-3 border border-white/10 bg-white/[0.02] flex flex-col min-w-[120px]">
              <span className="text-studio-gold font-display text-xl leading-none">400%</span>
              <span className="text-[8px] font-black text-white/30 tracking-widest uppercase mt-2">Growth AVG</span>
            </div>
            <div className="px-5 py-3 border border-white/10 bg-white/[0.02] flex flex-col min-w-[120px]">
              <span className="text-studio-gold font-display text-xl leading-none">50+</span>
              <span className="text-[8px] font-black text-white/30 tracking-widest uppercase mt-2">Deployments</span>
            </div>
            <div className="px-5 py-3 border border-white/10 bg-white/[0.02] flex flex-col min-w-[120px]">
              <span className="text-studio-gold font-display text-xl leading-none">ACTIVE</span>
              <span className="text-[8px] font-black text-white/30 tracking-widest uppercase mt-2">Protocols</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;