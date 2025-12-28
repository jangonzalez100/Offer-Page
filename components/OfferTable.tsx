
import React from 'react';
import { PLANS } from '../constants';
import { scrollToSection } from '../App';

const OfferTable: React.FC = () => {
  const plan = PLANS[0];

  return (
    <section id="offer" className="py-24 px-6 lg:px-12 bg-black relative">
       <div className="watermark-sl right-[-10%] bottom-[-5%] rotate-12 opacity-[0.015]">SL</div>
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl md:text-8xl mb-8 leading-[0.85]">
              THE<br />ONLY<br />
              <span className="text-studio-gold">MISSION.</span>
            </h2>
            <div className="space-y-10">
              <p className="text-white/40 text-xl leading-relaxed font-medium max-w-md">
                We've unified our offering into a single, high-performance package. One price. Total dominance. No hidden fees.
              </p>
              <div className="flex items-center gap-4 text-studio-gold">
                <div className="h-px flex-1 bg-studio-gold/20"></div>
                <span className="font-display text-xs tracking-[0.4em]">WEAPONIZED SUITE</span>
                <div className="h-px flex-1 bg-studio-gold/20"></div>
              </div>
              <div className="bg-white/5 p-6 border-l-2 border-studio-gold">
                <p className="text-[10px] font-black text-white/60 tracking-widest uppercase mb-2">Backlink Policy</p>
                <p className="text-[11px] text-white/30 leading-relaxed font-medium">
                  All sites include "Designed by Studio Legado" in the footer. To remove this and secure a White Label license, a 20% premium applies.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative p-12 md:p-16 border-4 border-studio-gold bg-studio-gold/5 transition-all duration-500 rounded-none shadow-[30px_30px_0px_0px_rgba(212,175,55,0.05)]">
              <div className="absolute top-0 right-0 bg-studio-gold text-black font-black text-[11px] px-8 py-2 tracking-[0.3em]">
                ELITE STATUS
              </div>
              
              <h3 className="font-display text-4xl text-white mb-10 tracking-tight">{plan.name}</h3>
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-10 mb-12 border-b border-white/5 pb-12">
                <div className="flex items-baseline gap-3">
                  <span className="text-8xl md:text-[10rem] font-display text-white tracking-tighter leading-none">{plan.price}</span>
                  <span className="text-white/30 text-[10px] font-black uppercase tracking-widest">Initial Build</span>
                </div>
                <div className="flex items-baseline gap-2 border-l border-white/10 md:pl-10">
                  <span className="text-5xl font-display text-studio-gold leading-none">{plan.monthly}/mo</span>
                  <span className="text-white/20 text-[9px] font-black uppercase tracking-widest leading-none">Maintenance</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-start gap-4 list-none">
                    <div className="w-2 h-2 mt-1.5 rounded-none bg-studio-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
                    <span className="text-[11px] font-black text-white/80 uppercase tracking-widest leading-tight">{feature.name}</span>
                  </li>
                ))}
              </div>

              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full py-8 bg-studio-gold text-black font-display text-2xl tracking-[0.1em] hover:bg-white transition-all text-center rounded-none shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]"
              >
                RESERVE COMMANDER BUNDLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferTable;
