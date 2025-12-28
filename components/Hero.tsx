import React from 'react';
import { scrollToSection } from '../utils/navigation';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-40 px-6 lg:px-12 bg-black overflow-hidden border-b border-white/10">
      <div className="watermark-sl left-[-5%] top-[-10%] rotate-[-10deg]">SL</div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-center">
          
          <div className="lg:col-span-7">
            <div className="flex flex-col mb-12">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-2">
                DIGITAL<br />LAUNCH.
              </h1>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-outline-gold tracking-tight leading-none">
                BUNDLE.
              </h1>
            </div>

            <div className="inline-block bg-studio-gold px-10 py-6 mb-16 transform -skew-x-6 shadow-[20px_20px_0px_0px_rgba(212,175,55,0.05)]">
              <span className="font-display text-2xl md:text-4xl text-black block skew-x-6 tracking-widest">
                OFFER: $599
              </span>
            </div>

            <div className="border-l-8 border-studio-gold pl-12 md:pl-20">
              <h2 className="font-display text-xl md:text-3xl mb-10 leading-none tracking-tighter">
                WE DON'T DECORATE BRANDS.<br />
                WE <span className="text-studio-gold italic">WEAPONIZE</span> THEM.
              </h2>
              <p className="text-base md:text-xl text-white/30 max-w-2xl leading-tight font-medium tracking-tighter">
                Premium custom architecture + mobile supremacy + brand warfare. Speed is your primary asset.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative p-8 md:p-12 border border-white/10 bg-white/[0.02] backdrop-blur-sm shadow-[40px_40px_0px_0px_rgba(255,255,255,0.01)] hover:border-studio-gold/20 transition-all duration-500">
              <div className="absolute top-0 right-0 bg-white text-black font-black text-[9px] tracking-[0.4em] px-5 py-2.5 uppercase z-10 animate-urgency">
                JANUARY SLOTS: 5 LEFT
              </div>

              <div className="mb-10">
                <h3 className="font-display text-2xl text-white tracking-tight leading-none italic">COMMANDER BUNDLE</h3>
              </div>

              <div className="space-y-4 mb-12 border-y border-white/5 py-8">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-studio-gold rotate-45"></div>
                  <span className="text-[9px] font-black text-white/70 uppercase tracking-[0.2em]">Custom AI-Powered Design</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-studio-gold rotate-45"></div>
                  <span className="text-[9px] font-black text-white/70 uppercase tracking-[0.2em]">Full Mobile Optimization</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-studio-gold rotate-45"></div>
                  <span className="text-[9px] font-black text-white/70 uppercase tracking-[0.2em]">Elite Brand Identity Kit</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end gap-6 mb-12">
                <div className="flex flex-col">
                  <span className="font-display text-6xl text-white tracking-tighter leading-none">$599</span>
                  <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em] mt-2">Build Assets</span>
                </div>
                <div className="flex flex-col border-l border-white/20 pl-6 pb-1">
                  <span className="text-studio-gold font-display text-4xl leading-none tracking-tighter uppercase">$50/MO</span>
                  <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em] mt-3">Maintenance</span>
                </div>
              </div>

              <button 
                onClick={() => scrollToSection('contact')} 
                className="w-full bg-studio-gold text-black font-display text-xl py-8 hover:bg-white transition-all shadow-[15px_15px_0px_0px_rgba(0,0,0,0.5)] tracking-widest"
              >
                CLAIM BUNDLE
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;