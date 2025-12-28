
import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import OfferTable from './components/OfferTable';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 100; // Account for sticky header
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const Ticker = () => (
  <div className="w-full bg-black border-b border-white/10 py-3 overflow-hidden">
    <div className="animate-ticker flex items-center">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="flex items-center gap-6 px-6 text-[10px] font-black tracking-[0.25em] text-white/40 uppercase">
          <span>Digital Launch Bundle</span>
          <span className="text-studio-gold">•</span>
          <span>$599 Offer</span>
          <span className="text-studio-gold">•</span>
          <span>Digital Dominance</span>
          <span className="text-studio-gold">•</span>
          <span>Studio Legado</span>
          <span className="text-studio-gold">•</span>
          <span>Culture</span>
          <span className="text-studio-gold">•</span>
        </div>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Ticker />
      
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-xl py-6 px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-1 group"
          >
            <span className="font-display text-2xl tracking-tighter">STUDIO LEGADO.</span>
            <div className="w-4 h-5 bg-studio-gold transition-all group-hover:w-8"></div>
          </button>
          
          <div className="hidden md:flex gap-12 items-center text-[11px] font-black tracking-[0.25em] uppercase">
            <button onClick={() => scrollToSection('benefits')} className="text-white hover:text-studio-gold transition-colors">Benefits</button>
            <button onClick={() => scrollToSection('offer')} className="text-white hover:text-studio-gold transition-colors">The Price</button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-8 py-3 bg-studio-gold text-black font-black hover:bg-white transition-all rounded-none tracking-widest"
            >
              CLAIM BUNDLE
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-studio-gold font-black text-xs tracking-widest uppercase underline underline-offset-4"
            >
              Claim Bundle
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <div className="w-full h-px bg-white/10"></div>
        <Benefits />
        <div className="w-full h-px bg-white/10"></div>
        <OfferTable />
        <div className="w-full h-px bg-white/10"></div>
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
