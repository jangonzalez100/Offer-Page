
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
        <div className="bg-black border border-studio-gold/20 p-12 md:p-20 text-center max-w-[1440px] mx-auto rounded-none relative overflow-hidden">
          <div className="watermark-sl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]">SL</div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-display text-white mb-8 tracking-tighter leading-none">
              MISSION<br /><span className="text-studio-gold">SECURED.</span>
            </h2>
            
            {/* Visual Progress Element */}
            <div className="mb-12">
              <div className="flex justify-between items-end mb-3">
                <span className="text-[10px] font-black text-studio-gold tracking-[0.4em] uppercase">Transmission Status</span>
                <span className="text-[10px] font-black text-studio-gold tracking-[0.4em] uppercase">100% COMPLETE</span>
              </div>
              <div className="w-full h-4 border border-studio-gold/30 p-1">
                <div className="w-full h-full bg-studio-gold relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
              <p className="mt-4 text-[11px] font-black text-white tracking-[0.3em] uppercase opacity-60">TRANSMISSION COMPLETE</p>
            </div>

            <p className="text-white/40 text-xl font-medium leading-relaxed mb-12">
              Your project blueprint is locked. Our lead strategist is reviewing your brief now. Expect contact within 24 business hours to begin the weaponization of your brand.
            </p>
            
            <button 
              onClick={() => setStatus('idle')}
              className="px-12 py-5 border border-white/20 text-white font-display text-xs tracking-[0.3em] hover:border-studio-gold hover:text-studio-gold transition-all uppercase rounded-none"
            >
              Send New Brief
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-black relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl md:text-8xl mb-8 leading-[0.82]">
              SECURE<br />YOUR<br />
              <span className="text-studio-gold">LEGACY.</span>
            </h2>
            <p className="text-white/40 text-lg font-medium leading-relaxed max-w-md">
              Fill the form below to lock in the $599 launch price. Slots are allocated on a first-come, first-served basis. Secure your January slot today.
            </p>
            <div className="mt-12 hidden lg:block">
              <span className="text-[10px] font-black text-studio-gold tracking-[0.4em] uppercase opacity-40">24H RESPONSE TIME GUARANTEED</span>
            </div>
            {status === 'error' && (
              <div className="mt-8 p-4 border border-red-500/50 bg-red-500/10 text-red-500 text-xs font-black uppercase tracking-widest">
                Transmission Error. Please try again or contact support directly.
              </div>
            )}
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-14 border-l border-white/10 pl-0 md:pl-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="border-b border-white/20 focus-within:border-studio-gold transition-all pb-6">
                  <label className="block text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-4">Commander Name</label>
                  <input 
                    required 
                    name="name"
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent text-white text-2xl font-display outline-none placeholder:text-white/[0.03]" 
                    placeholder="FULL NAME" 
                    disabled={status === 'submitting'}
                  />
                </div>
                <div className="border-b border-white/20 focus-within:border-studio-gold transition-all pb-6">
                  <label className="block text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-4">Secure Email</label>
                  <input 
                    required 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent text-white text-2xl font-display outline-none placeholder:text-white/[0.03]" 
                    placeholder="EMAIL ADDRESS" 
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>

              <div className="border-b border-white/20 focus-within:border-studio-gold transition-all pb-6">
                <label className="block text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-4">Business Identity</label>
                <input 
                  required 
                  name="business"
                  type="text" 
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  className="w-full bg-transparent text-white text-2xl font-display outline-none placeholder:text-white/[0.03]" 
                  placeholder="COMPANY NAME" 
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="border-b border-white/20 focus-within:border-studio-gold transition-all pb-6">
                <label className="block text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-4">Mission Objective</label>
                <textarea 
                  required
                  name="message"
                  rows={2} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent text-white text-2xl font-display outline-none placeholder:text-white/[0.03] resize-none" 
                  placeholder="PROJECT DETAILS"
                  disabled={status === 'submitting'}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className={`w-full py-10 font-display text-3xl transition-all transform active:scale-[0.98] rounded-none shadow-[15px_15px_0px_0px_rgba(255,255,255,0.03)] ${
                  status === 'submitting' 
                  ? 'bg-white/10 text-white/30 cursor-not-allowed' 
                  : 'bg-studio-gold text-black hover:bg-white'
                }`}
              >
                {status === 'submitting' ? 'TRANSMITTING...' : 'CLAIM YOUR BUNDLE'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
