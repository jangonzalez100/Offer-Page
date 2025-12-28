import React from 'react';
import { scrollToSection } from '../utils/navigation';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-40 px-6 lg:px-12 bg-black overflow-hidden border-b border-white/10">
      <div className="watermark-sl left-[-5%] top-[-10%] rotate-[-10deg]">SL</div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">
          
          <div className="lg:col-span-7">
            <div className="flex flex-col mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-studio-gold"></div>
                <span className="text-[10px] font-black text-studio-gold tracking-[0.5em] uppercase">PROTOCOL: DIGITAL_LAUNCH_BUNDLE</span>
              </div>
              
              <h1 className="font-display text-[clamp(2.5rem,7vw,6.5rem)] tracking-tight leading-[0.85] mb-4">
                STOP<br />DECORATING.
              </h1>
              <h1 className="font-display text-[clamp(2.5rem,7vw,6.5rem)] text-studio-gold italic tracking-tight leading-[0.85]">
                START<br />WEAPONIZING.
              </h1>
            </div>

            <div className="inline-block bg-studio-gold px-10 py-5 mb-14 transform -skew-x-6 shadow-[20px_20px_0px_0px_rgba(212,175,55,0.05)]">
              <div className="flex flex-col skew-x-6 items-center">
                <span className="font-display text-[11px] text-black/40 line-through mb-1 tracking-[0.2em] leading-none">$2,500 MARKET VALUE</span>
                <span className="font-display text-2xl md:text-4xl text-black tracking-widest leading-none">
                  OFFER: $599
                </span>
              </div>
            </div>

            <div className="border-l-8 border-studio-gold pl-12 md:pl-20 max-w-2xl">
              <h2 className="font-display text-xl md:text-3xl mb-8 leading-none tracking-tighter">
                SECURE $2,500 OF ELITE DIGITAL INFRASTRUCTURE FOR A FRACTION OF THE MARKET RATE.
              </h2>
              <p className="text-base md:text-xl text-white/30 leading-tight font-medium tracking-tighter">
                Premium custom architecture + mobile supremacy + brand warfare. Most agencies sell you paint. We sell you the engine.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 lg:mt-12">
            <div className="relative p-8 md:p-12 border border-white/10 bg-white/[0.02] backdrop-blur-sm shadow-[40px_40px_0px_0px_rgba(255,255,255,0.01)] hover:border-studio-gold/20 transition-all duration-500">
              <div className="absolute top-0 right-0 bg-white text-black font-black text-[9px] tracking-[0.4em] px-5 py-2.5 uppercase z-10 animate-urgency">
                JANUARY SLOTS: 5 LEFT
              </div>

              <div className="mb-10">
                <h3 className="font-display text-2xl text-white tracking-tight leading-none italic uppercase">COMMANDER BUNDLE</h3>
                <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] mt-3">Elite Strategic Deployment</p>
              </div>

              <div className="space-y-4 mb-12 border-y border-white/5 py-8">
                {[
                  'Custom AI-Powered Design',
                  'Full Mobile Optimization',
                  'Elite Brand Identity Kit',
                  'Premium SEO Foundation'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-studio-gold rotate-45"></div>
                    <span className="text-[9px] font-black text-white/70 uppercase tracking-[0.2em]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end gap-6 mb-12">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display text-[10px] text-white/20 line-through">$2,500</span>
                    <span className="text-[7px] font-black text-studio-gold/60 uppercase tracking-[0.2em]">(2.5K VALUE)</span>
                  </div>
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