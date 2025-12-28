import React from 'react';
import { scrollToSection } from '../utils/navigation';

const OfferTable: React.FC = () => {
  return (
    <section id="offer" className="py-32 px-6 lg:px-12 bg-black relative border-b border-white/10">
      <div className="watermark-sl left-[-10%] bottom-[-5%] rotate-[-15deg]">BUNDLE</div>
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-4xl md:text-6xl mb-10 tracking-tight leading-none">
                THE<br />ONLY<br />
                <span className="text-studio-gold">MISSION.</span>
              </h2>
              <p className="text-white/30 text-lg leading-tight font-medium max-w-sm tracking-tighter mb-10">
                We've unified our offering into a single, high-performance package. Total dominance. Zero technical debt.
              </p>
            </div>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6 text-studio-gold">
                <div className="h-px flex-1 bg-studio-gold/20"></div>
                <span className="font-display text-[9px] tracking-[0.5em]">COMMANDER SUITE</span>
                <div className="h-px flex-1 bg-studio-gold/20"></div>
              </div>
              <div className="bg-white/[0.02] p-6 border border-white/10">
                <p className="text-[9px] font-black text-studio-gold tracking-[0.4em] uppercase mb-3 italic underline underline-offset-4">White Label License</p>
                <p className="text-[10px] text-white/30 leading-relaxed font-medium tracking-tight">
                  All sites feature "Designed by Studio Legado" in the footer. To secure a White Label license and remove branding, a 20% premium applies to the build cost.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="h-full relative p-8 md:p-12 border border-studio-gold/30 bg-studio-gold/[0.03] shadow-[40px_40px_0px_0px_rgba(212,175,55,0.03)] flex flex-col">
              
              <h3 className="font-display text-3xl text-white mb-12 tracking-tight uppercase italic">COMMANDER BUNDLE</h3>
              
              <div className="flex flex-wrap items-end gap-10 mb-12 border-b border-white/5 pb-12">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display text-[12px] text-white/20 line-through">$2,500</span>
                    <span className="text-[9px] font-black text-studio-gold/60 uppercase tracking-[0.2em]">(2.5K MARKET VALUE)</span>
                  </div>
                  <span className="text-7xl md:text-8xl lg:text-9xl font-display text-white tracking-tighter leading-none">$599</span>
                  <span className="text-white/20 text-[8px] font-black uppercase tracking-[0.5em] mt-3 ml-1">Initial Deployment</span>
                </div>
                
                <div className="flex flex-col border-l border-white/10 pl-8 pb-1">
                  <span className="text-5xl md:text-7xl font-display text-studio-gold tracking-tighter leading-none">$50/MO</span>
                  <span className="text-white/20 text-[8px] font-black uppercase tracking-[0.4em] mt-3">Maintenance Protocol</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 mb-16">
                {[
                  'Custom AI-Powered Design',
                  'Full Mobile Optimization',
                  'Elite Brand Identity Kit',
                  'Premium SEO Foundation',
                  'Secure Cloud Hosting',
                  '24/7 Threat Monitoring',
                  'Performance Tuning',
                  'Dedicated Support'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-studio-gold/40"></div>
                    <span className="text-[9px] font-black text-white/80 uppercase tracking-[0.15em]">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => scrollToSection('contact')}
                className="mt-auto block w-full py-8 bg-studio-gold text-black font-display text-2xl tracking-widest hover:bg-white transition-all text-center shadow-[15px_15px_0px_0px_rgba(0,0,0,0.5)]"
              >
                RESERVE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferTable;