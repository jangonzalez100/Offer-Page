import React from 'react';
import { scrollToSection } from '../App';
import { PLANS } from '../constants';

const Hero: React.FC = () => {
  const plan = PLANS[0];

  return (
    <section className="relative pt-16 pb-32 px-6 lg:px-12 bg-black overflow-hidden border-b border-white/5">
      {/* Watermark for visual weight */}
      <div className="watermark-sl left-[-10%] top-[-5%] rotate-[-5deg]">SL</div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-center">
          
          {/* Left Column: Mission Briefing */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-0 mb-10">
              <h1 className="font-display text-[clamp(3rem,10vw,8.5rem)] leading-[0.8] text-white tracking-tighter">
                DIGITAL<br />LAUNCH.
              </h1>
              <h1 className="font-display text-[clamp(3rem,10vw,8.5rem)] leading-[0.8] text-outline-gold tracking-tighter">
                BUNDLE.
              </h1>
            </div>

            <div className="inline-block bg-studio-gold p-6 md:px-10 md:py-6 mb-12 transform -skew-x-12 border-l-[12px] border-black shadow-[15px_15px_0px_0px_rgba(212,175,55,0.1)]">
              <span className="font-display text-2xl md:text-5xl text-black block skew-x-12">
                LAUNCH OFFER: $599
              </span>
            </div>

            <div className="border-l-4 border-studio-gold pl-8 md:pl-16">
              <h2 className="font-display text-2xl md:text-4xl lg:text-5xl mb-8 leading-tight max-w-2xl">
                WE DON'T DECORATE BRANDS.<br />
                WE <span className="text-studio-gold italic">WEAPONIZE</span> THEM.
              </h2>
              <p className="text-xl md:text-2xl text-white/50 max-w-xl leading-relaxed font-medium">
                A high-end custom website + elite mobile optimization + brand strategy. Built for speed. Sustained for growth.
              </p>
            </div>

            <div className="mt-20 flex flex-wrap gap-12 items-center opacity-20">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase">Forged 2025</span>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase">AI Powered</span>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase">Market Hostility</span>
            </div>
          </div>

          {/* Right Column: Commander Card (Desktop High-Impact) */}
          <div className="lg:col-span-5">
            <div className="relative p-10 md:p-14 border-2 border-white/10 bg-white/[0.03] backdrop-blur-md rounded-none shadow-[30px_30px_0px_0px_rgba(255,255,255,0.01)] transition-all hover:border-studio-gold/30 group">
              <div className="absolute -top-5 right-10 bg-white text-black font-black text-[10px] tracking-[0.3em] px-4 py-2 uppercase z-10 shadow-2xl animate-urgency">
                JANUARY SLOTS: 5 REMAINING
              </div>

              <div className="mb-10">
                <span className="text-[11px] font-black text-studio-gold tracking-[0.4em] uppercase block mb-3">Priority Package</span>
                <h3 className="font-display text-4xl text-white tracking-tight group-hover:text-studio-gold transition-colors italic">COMMANDER BUNDLE</h3>
              </div>

              <div className="space-y-5 mb-12 border-y border-white/5 py-10">
                {plan.features.slice(0, 5).map((f) => (
                  <div key={f.name} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-studio-gold rotate-45 group-hover:scale-125 transition-transform"></div>
                    <span className="text-[11px] font-black text-white/80 uppercase tracking-widest leading-none">{f.name}</span>
                  </div>
                ))}
                <div className="text-[10px] font-black text-studio-gold/50 tracking-[0.3em] pt-4">+ FULL STACK DEPLOYMENT</div>
              </div>

              <div className="flex items-baseline gap-5 mb-12">
                <span className="text-7xl font-display text-white leading-none tracking-tighter">{plan.price}</span>
                <div className="flex flex-col border-l border-white/10 pl-5">
                  <span className="text-studio-gold font-display text-2xl leading-none">{plan.monthly}/mo</span>
                  <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] mt-2 italic">Active Support</span>
                </div>
              </div>

              <button 
                onClick={() => scrollToSection('contact')} 
                className="w-full bg-studio-gold text-black font-display text-2xl py-8 hover:bg-white transition-all text-center rounded-none shadow-[10px_10px_0px_0px_rgba(255,255,255,0.05)] transform active:translate-y-1"
              >
                CLAIM YOUR BUNDLE
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;