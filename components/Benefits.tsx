import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-32 px-6 lg:px-12 bg-black relative overflow-hidden border-b border-white/10">
      <div className="watermark-sl right-[-10%] top-[20%]">SL</div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="mb-24">
          <h2 className="font-display text-4xl md:text-6xl mb-6 tracking-tighter leading-none">
            THE <span className="text-studio-gold">$50/MO</span><br />NO-BRAINER.
          </h2>
          <div className="w-24 h-1 bg-studio-gold mb-8"></div>
          <p className="text-white/40 text-lg font-medium max-w-xl leading-relaxed tracking-tight">
            Websites are high-performance assets. Our maintenance protocol ensures your digital engine remains optimized, secure, and future-proof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/10">
          {BENEFITS.map((benefit) => (
            <div 
              key={benefit.id} 
              className="p-10 border border-white/10 hover:border-studio-gold/30 transition-all duration-300 group bg-white/[0.01] flex flex-col min-h-[300px]"
            >
              <div className="flex-grow">
                <h3 className="font-display text-xl text-white mb-5 tracking-tight leading-none group-hover:text-studio-gold transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-white/40 leading-relaxed text-[13px] font-medium tracking-tight">
                  {benefit.description}
                </p>
              </div>
              
              <div className="mt-12 pt-6 border-t border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 bg-studio-gold"></div>
                  <span className="text-[8px] font-black text-studio-gold tracking-[0.4em] uppercase whitespace-nowrap">
                    PROTOCOL: {benefit.icon}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;