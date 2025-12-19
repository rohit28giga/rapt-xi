import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import TeamSection from './components/TeamSection';
import ChatBot from './components/ChatBot';
import { FeaturesSection, PricingSection, CoreAdvantageSection } from './components/FeaturesAndPricing';

// --- ENHANCED GLOBAL NEURAL BACKGROUND (Brighter & More Visible) ---
const GlobalNeuralBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#01040f]">
    {/* Deep Glossy Base Gradients */}
    <div className="absolute inset-0 bg-gradient-to-tr from-[#01040f] via-[#050b1a] to-[#01040f]"></div>
    
    {/* Large Glossy Orbs - Increased Opacity */}
    <div className="absolute top-[-10%] left-[-5%] w-[1000px] h-[1000px] bg-teal-500/15 blur-[180px] rounded-full animate-float opacity-40"></div>
    <div className="absolute bottom-[-10%] right-[-5%] w-[1000px] h-[1000px] bg-indigo-500/15 blur-[180px] rounded-full animate-float opacity-40" style={{ animationDelay: '4s' }}></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-600/10 blur-[200px] rounded-full animate-pulse-slow"></div>
    
    {/* Neural Network SVG - Increased opacity and line weight for better visibility */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.55]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow-bright">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <pattern id="shiny-grid-bright" x="0" y="0" width="600" height="600" patternUnits="userSpaceOnUse">
           {/* Static Nodes - Slightly larger and brighter */}
           <circle cx="50" cy="50" r="2.5" fill="#2dd4bf" filter="url(#glow-bright)" />
           <circle cx="550" cy="150" r="2.5" fill="#a855f7" filter="url(#glow-bright)" />
           <circle cx="300" cy="450" r="2.5" fill="#2dd4bf" filter="url(#glow-bright)" />
           <circle cx="100" cy="300" r="2.5" fill="#3b82f6" filter="url(#glow-bright)" />
           
           {/* Connection Lines - Increased stroke and visibility */}
           <path d="M50 50 Q 300 100, 550 150" stroke="#2dd4bf" strokeWidth="0.8" fill="none" opacity="0.35" />
           <path d="M550 150 Q 400 300, 300 450" stroke="#a855f7" strokeWidth="0.8" fill="none" opacity="0.35" />
           <path d="M300 450 Q 150 400, 100 300" stroke="#3b82f6" strokeWidth="0.8" fill="none" opacity="0.35" />
           <path d="M100 300 Q 75 175, 50 50" stroke="#2dd4bf" strokeWidth="0.8" fill="none" opacity="0.35" />

           {/* Shiny Data Packets - Brighter and faster feel */}
           <circle r="3" fill="#fff" filter="url(#glow-bright)" className="shadow-[0_0_15px_#fff]">
              <animateMotion dur="5s" repeatCount="indefinite" path="M50 50 Q 300 100, 550 150" />
           </circle>
           <circle r="2.5" fill="#2dd4bf" filter="url(#glow-bright)">
              <animateMotion dur="8s" repeatCount="indefinite" path="M550 150 Q 400 300, 300 450" />
           </circle>
           <circle r="2.5" fill="#fff" filter="url(#glow-bright)" style={{ animationDelay: '2.5s' }}>
              <animateMotion dur="10s" repeatCount="indefinite" path="M300 450 Q 150 400, 100 300" />
           </circle>
        </pattern>
      </defs>
      
      {/* Drifting Whole Grid */}
      <g className="animate-float" style={{ animationDuration: '35s' }}>
        <rect width="100%" height="100%" fill="url(#shiny-grid-bright)" />
      </g>
      
      {/* Dynamic Sparkles - More of them and brighter */}
      {Array.from({ length: 40 }).map((_, i) => (
          <circle 
            key={i}
            cx={Math.random() * 100 + "%"}
            cy={Math.random() * 100 + "%"}
            r={Math.random() * 1.8 + 0.6}
            fill="#fff"
            className="animate-pulse-fast"
            style={{ 
              animationDelay: `${Math.random() * 5}s`, 
              opacity: Math.random() * 0.4 + 0.3,
              filter: 'blur(0.8px)'
            }}
          />
      ))}
    </svg>

    {/* Texture Layer */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] pointer-events-none opacity-15"></div>
  </div>
);

// Trusted By Marquee
const TrustedBy = () => (
  <section className="py-10 border-y border-white/5 relative z-10 bg-transparent">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-8">
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]">Authorized for High-Security Firms:</span>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 hover:opacity-100 transition-opacity duration-700">
            <span className="font-bold text-white text-xl tracking-tight">KPMG<span className="font-light opacity-30">.digital</span></span>
            <span className="font-bold text-white text-xl tracking-tight">Fin<span className="font-light opacity-30">Audit</span></span>
            <span className="font-bold text-white text-xl tracking-tight">ACCU<span className="font-light opacity-30">RATE</span></span>
            <span className="font-bold text-white text-xl tracking-tight">Ledger<span className="font-light opacity-30">AI</span></span>
        </div>
    </div>
  </section>
);

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState('/');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const initObserver = () => {
        document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    };

    setTimeout(initObserver, 200);
    return () => observer.disconnect();
  }, [currentRoute]);

  const handleNavigate = (path: string) => {
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white font-sans selection:bg-teal-500/40 relative bg-transparent">
      <GlobalNeuralBackground />
      
      <Navbar onNavigate={handleNavigate} />
      
      <main className="relative z-10">
        {currentRoute === '/team' ? (
          <TeamSection />
        ) : (
          <>
            <Hero />
            <TrustedBy />
            <FeaturesSection />
            <CoreAdvantageSection />
            <PricingSection />
          </>
        )}
      </main>
      
      <ChatBot />
      <Footer />
    </div>
  );
};

export default App;