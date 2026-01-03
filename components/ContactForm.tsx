import React, { useState } from 'react';
import { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    businessName: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xwvkbzob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          business: formData.businessName,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "conversion", {
            send_to: "AW-17838178620/IbKNCJip2NgbELyC9LlC",
            value: 1.0,
            currency: "USD",
          });
        }
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="contact" className="py-24 px-6 lg:px-12 bg-black">
        <div className="bg-black border border-studio-gold/20 p-12 md:p-20 text-center max-w-[1440px] mx-auto relative overflow-hidden">
          <div className="watermark-sl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]">SL</div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-display text-white mb-8 tracking-tighter leading-none">
              MISSION<br /><span className="text-studio-gold">SECURED.</span>
            </h2>
            <p className="text-white/40 text-xl font-medium leading-relaxed mb-12 uppercase tracking-tighter">
              Your project blueprint is locked. Expect contact within 24 hours to begin the weaponization of your brand.
            </p>
            <button onClick={() => setStatus('idle')} className="px-12 py-5 border border-white/20 text-white font-display text-xs tracking-[0.3em] hover:border-studio-gold hover:text-studio-gold transition-all uppercase">
              Send New Brief
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-6 lg:px-12 bg-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-12">
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 leading-[0.85] tracking-tighter uppercase">
                SECURE<br />YOUR<br />
                <span className="text-studio-gold">LEGACY.</span>
              </h2>
              <div className="w-16 h-1 bg-studio-gold mb-8"></div>
              
              {/* Lead Magnet Callout */}
              <div className="bg-studio-gold/[0.05] border border-studio-gold/20 p-6 mb-10 relative">
                <div className="absolute -top-3 left-4 bg-studio-gold text-black text-[8px] font-black px-3 py-1 tracking-[0.2em] uppercase whitespace-nowrap">Tactical Bonus</div>
                <h3 className="text-white font-display text-lg mb-2 tracking-tight uppercase italic">2026 BRAND COMMANDER PROTOCOL</h3>
                <p className="text-white/50 text-[11px] font-bold uppercase tracking-tight leading-relaxed">
                  Submit your brief below to claim your bundle and receive our proprietary 15 point audit checklist for brand scale.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <span className="text-[9px] font-black text-white/20 tracking-[0.3em] uppercase">January Slot Count</span>
                  <span className="text-studio-gold font-display text-xl">05 LEFT</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <span className="text-[9px] font-black text-white/20 tracking-[0.3em] uppercase">System Latency</span>
                  <span className="text-green-500 font-display text-xl">OPTIMAL</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white/[0.01] border border-white/5 p-8 md:p-12 relative shadow-[20px_20px_60px_rgba(0,0,0,0.5)]">
              {/* Tactical corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-studio-gold/30"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-studio-gold/30"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                  <p className="text-[10px] font-black text-white/30 tracking-[0.4em] uppercase mb-1">Mission briefing</p>
                  <p className="text-xs text-white/60 font-medium uppercase tracking-tighter">Enter parameters to initialize deployment</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-studio-gold"></div>
                  <div className="w-2 h-2 bg-studio-gold/40"></div>
                  <div className="w-2 h-2 bg-studio-gold/10"></div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="border-b border-white/10 focus-within:border-studio-gold transition-all pb-3">
                    <label className="block text-[8px] font-black text-white/20 uppercase tracking-[0.5em] mb-4">Commander Name</label>
                    <input 
                      required 
                      value={formData.name} 
                      onChange={(e) => setFormData({...formData, name: e.target.value})} 
                      className="w-full bg-transparent text-white text-lg font-display outline-none placeholder:text-white/[0.05]" 
                      placeholder="NAME" 
                    />
                  </div>
                  <div className="border-b border-white/10 focus-within:border-studio-gold transition-all pb-3">
                    <label className="block text-[8px] font-black text-white/20 uppercase tracking-[0.5em] mb-4">Secure Transmission</label>
                    <input 
                      required 
                      type="email" 
                      value={formData.email} 
                      onChange={(e) => setFormData({...formData, email: e.target.value})} 
                      className="w-full bg-transparent text-white text-lg font-display outline-none placeholder:text-white/[0.05]" 
                      placeholder="EMAIL" 
                    />
                  </div>
                </div>
                
                <div className="border-b border-white/10 focus-within:border-studio-gold transition-all pb-3">
                  <label className="block text-[8px] font-black text-white/20 uppercase tracking-[0.5em] mb-4">Business Identity</label>
                  <input 
                    required 
                    value={formData.businessName} 
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})} 
                    className="w-full bg-transparent text-white text-lg font-display outline-none placeholder:text-white/[0.05]" 
                    placeholder="COMPANY" 
                  />
                </div>

                <div className="border-b border-white/10 focus-within:border-studio-gold transition-all pb-3">
                  <label className="block text-[8px] font-black text-white/20 uppercase tracking-[0.5em] mb-4">Strategic Objective</label>
                  <textarea 
                    required 
                    rows={1} 
                    value={formData.message} 
                    onChange={(e) => setFormData({...formData, message: e.target.value})} 
                    className="w-full bg-transparent text-white text-lg font-display outline-none placeholder:text-white/[0.05] resize-none" 
                    placeholder="GOALS"
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'} 
                    className={`w-full py-10 font-display text-2xl md:text-3xl transition-all ${
                      status === 'submitting' 
                      ? 'bg-white/5 text-white/20' 
                      : 'bg-studio-gold text-black hover:bg-white shadow-[15px_15px_0px_0px_rgba(255,255,255,0.03)] active:translate-x-1 active:translate-y-1 active:shadow-none'
                    }`}
                  >
                    {status === 'submitting' ? 'INITIALIZING...' : 'CLAIM MY BUNDLE'}
                  </button>
                  <p className="mt-8 text-center text-[7px] font-black text-white/10 tracking-[0.8em] uppercase italic">
                    By submitting you agree to mission protocols and secure contact
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;