import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 px-6 lg:px-12 bg-black relative overflow-hidden border-b border-white/5">
       <div className="watermark-sl right-[-5%] top-[10%] opacity-[0.01] scale-75">SL</div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <h2 className="font-display text-5xl md:text-8xl mb-8 leading-[0.82] tracking-tighter">
              THE <span className="text-studio-gold">$50/MO</span><br />NO-BRAINER.
            </h2>
            <div className="w-24 h-2 bg-studio-gold mb-8"></div>
            <p className="text-white/40 text-xl font-medium max-w-xl leading-relaxed">
              Websites are not posters; they are digital engines. Our maintenance protocol ensures your engine never stalls, never leaks, and never rusts.
            </p>
          </div>
          <div className="hidden lg:block pb-2">
            <span className="font-display text-[150px] text-outline opacity-[0.03] select-none leading-none">ELITE</span>
          </div>
        </div>

        {/* 3-COLUMN GRID FOR DESKTOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10">
          {BENEFITS.map((benefit) => (
            <div 
              key={benefit.id} 
              className="p-14 border border-white/10 hover:bg-studio-gold/[0.04] transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-studio-gold/5 -translate-y-12 translate-x-12 rotate-45 group-hover:bg-studio-gold/10 transition-colors"></div>
              
              <div className="text-6xl mb-12 transform group-hover:-translate-y-2 transition-transform duration-500 block">
                {benefit.icon}
              </div>
              
              <div className="relative z-10">
                <h3 className="font-display text-2xl text-white mb-6 tracking-tight group-hover:text-studio-gold transition-colors italic">
                  {benefit.title}
                </h3>
                <p className="text-white/40 leading-relaxed text-base font-medium">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                <div className="h-px w-8 bg-studio-gold"></div>
                <span className="text-[10px] font-black text-studio-gold tracking-[0.3em] uppercase">Protocol Active</span>
              </div>
            </div>
          ))}
          
          {/* Fillers for aesthetic balance in larger grids */}
          <div className="p-14 border border-white/10 flex flex-col justify-center bg-transparent hidden lg:flex group">
             <span className="font-display text-7xl text-outline opacity-[0.05] group-hover:opacity-[0.15] transition-opacity">0101</span>
             <span className="text-[10px] font-black text-white/20 tracking-[0.5em] mt-4 uppercase">System Integrity</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;