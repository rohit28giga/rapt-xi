import React from 'react';
import { ArrowRight, AlertTriangle, Database, Activity, CheckCircle2, ScanLine, Search, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-transparent overflow-hidden pt-32 lg:pt-0 perspective-1000">
      
      <div className="w-[90%] xl:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 min-h-[800px]">
        
        {/* LEFT COLUMN: Content */}
        <div className="lg:col-span-5 text-left reveal-on-scroll z-20 flex flex-col justify-center py-12 lg:py-0">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-tight mb-8 font-jakarta drop-shadow-[0_0_40px_rgba(45,212,191,0.2)]">
              <span className="block lg:whitespace-nowrap">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-500 font-light">Breakthrough</span> AI from
              </span>
              <span className="block lg:whitespace-nowrap">
                evidence to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-500 font-light">finalization</span>
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-xl mb-12 font-light leading-relaxed border-l-2 border-teal-500/30 pl-6 backdrop-blur-sm">
              AI agents that automate audit procedures, filings, and compliance workflows for Chartered Accountant firms, ensuring accuracy and NFRA compliance.
            </p>

            <div className="flex flex-wrap gap-6">
              <button className="relative overflow-hidden bg-white text-black px-10 py-4 rounded-lg text-base font-bold transition-all flex items-center gap-2 group shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-10 py-4 rounded-lg text-white font-light hover:bg-white/5 border border-white/10 transition-all flex items-center gap-2 backdrop-blur-sm hover:border-teal-500/50 hover:shadow-[0_0_20px_rgba(45,212,191,0.1)]">
                Start Audit &rarr;
              </button>
            </div>
        </div>

        {/* RIGHT COLUMN: REPOSITIONED CORE & SCREENS WITH INTERACTIONS */}
        <div className="lg:col-span-7 relative h-[700px] flex items-center justify-center lg:justify-end reveal-on-scroll mt-12 lg:mt-0 perspective-1200 lg:pr-12">
             
             {/* Main Graphic Area */}
             <div className="relative w-[500px] h-[500px] flex items-center justify-center animate-float">
                
                {/* --- ACTIVE INTERACTIVE DATA BEAMS --- */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                    <defs>
                        <filter id="beam-glow-intense" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="4" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        <linearGradient id="stream-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0" />
                            <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#fff" stopOpacity="1" />
                        </linearGradient>
                    </defs>
                    
                    {/* Primary Interaction Lines */}
                    <line x1="250" y1="250" x2="160" y2="170" stroke="#2dd4bf" strokeWidth="2.5" strokeOpacity="0.6" filter="url(#beam-glow-intense)" />
                    <line x1="250" y1="250" x2="340" y2="170" stroke="#2dd4bf" strokeWidth="2.5" strokeOpacity="0.6" filter="url(#beam-glow-intense)" />
                    <line x1="250" y1="250" x2="160" y2="330" stroke="#2dd4bf" strokeWidth="2.5" strokeOpacity="0.6" filter="url(#beam-glow-intense)" />
                    <line x1="250" y1="250" x2="340" y2="330" stroke="#ef4444" strokeWidth="3.5" strokeOpacity="0.9" filter="url(#beam-glow-intense)" />
                    
                    {/* Rapid Flowing Packets */}
                    {[0.2, 0.4, 0.6, 0.8].map((delay, i) => (
                        <circle key={`p1-${i}`} r="3.5" fill="#fff" filter="url(#beam-glow-intense)">
                            <animateMotion dur="0.7s" repeatCount="indefinite" path="M160 170 L250 250" begin={`${delay}s`} />
                        </circle>
                    ))}
                    {[0, 0.3, 0.6].map((delay, i) => (
                        <circle key={`p2-${i}`} r="3" fill="#2dd4bf" filter="url(#beam-glow-intense)">
                            <animateMotion dur="0.9s" repeatCount="indefinite" path="M340 170 L250 250" begin={`${delay}s`} />
                        </circle>
                    ))}
                    {[0.1, 0.5, 0.9].map((delay, i) => (
                        <circle key={`p3-${i}`} r="4" fill="#ef4444" filter="url(#beam-glow-intense)">
                            <animateMotion dur="0.4s" repeatCount="indefinite" path="M250 250 L340 330" begin={`${delay}s`} />
                        </circle>
                    ))}
                </svg>

                {/* --- BRIGHTER & DENSER NEBULA CORE --- */}
                <div className="relative w-64 h-64 flex items-center justify-center z-10">
                    {/* Outer glow layer - Significantly brighter */}
                    <div className="absolute inset-[-30px] bg-teal-400/95 blur-[60px] animate-morph-slow mix-blend-screen" 
                         style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}></div>
                    
                    {/* Dense middle layer - Cyan Highlight */}
                    <div className="absolute inset-[-15px] bg-cyan-300/90 blur-[40px] animate-morph-fast mix-blend-screen" 
                         style={{ borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%', animationDirection: 'reverse' }}></div>
                    
                    {/* Inner core - Deep energetic Indigo */}
                    <div className="absolute inset-0 bg-indigo-600 blur-[45px] animate-morph-slow mix-blend-screen opacity-100" 
                         style={{ borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%', animationDelay: '-2s' }}></div>

                    {/* Central Star - Ultra Intense */}
                    <div className="w-14 h-14 bg-white blur-[10px] rounded-full animate-pulse shadow-[0_0_60px_rgba(255,255,255,1)] flex items-center justify-center">
                        <div className="w-6 h-6 bg-teal-200 blur-[5px] rounded-full"></div>
                    </div>
                    
                    {/* Active Icons - Glowing */}
                    <div className="absolute inset-0 flex items-center justify-center">
                         <Search className="w-7 h-7 text-white absolute top-1/4 animate-pulse drop-shadow-[0_0_20px_white]" />
                         <ShieldCheck className="w-7 h-7 text-white absolute bottom-1/4 animate-pulse drop-shadow-[0_0_20px_white]" style={{animationDelay: '1s'}} />
                    </div>
                </div>

                {/* --- 4 CLUSTERED SCREENS --- */}
                
                {/* 1. INGESTION */}
                <div className="absolute top-[15%] left-[10%] w-48 bg-[#0a101f]/98 backdrop-blur-3xl border border-teal-500/80 rounded-xl p-3 shadow-[0_0_50px_rgba(45,212,191,0.4)] transform hover:scale-105 transition-all duration-300 z-20">
                    <div className="flex justify-between items-center mb-2 border-b border-teal-500/30 pb-1">
                        <span className="text-[9px] font-bold text-teal-100 uppercase">Ingestion</span>
                        <Database className="w-3 h-3 text-teal-400" />
                    </div>
                    <div className="flex gap-1 h-6 items-end">
                        {[40, 90, 60, 100, 70, 95].map((h, i) => (
                            <div key={i} className="flex-1 bg-teal-400 rounded-t-[1px] shadow-[0_0_10px_rgba(45,212,191,0.5)]" style={{height: `${h}%`}}></div>
                        ))}
                    </div>
                </div>

                {/* 2. RECONCILIATION */}
                <div className="absolute top-[15%] right-[10%] w-48 bg-[#0a101f]/98 backdrop-blur-3xl border border-blue-500/80 rounded-xl p-3 shadow-[0_0_50px_rgba(59,130,246,0.4)] transform hover:scale-105 transition-all duration-300 z-20">
                     <div className="flex justify-between items-center mb-2 border-b border-blue-500/30 pb-1">
                        <span className="text-[9px] font-bold text-blue-100 uppercase">Recon</span>
                        <ScanLine className="w-3 h-3 text-blue-400" />
                    </div>
                    <div className="flex justify-between text-[9px] font-mono text-slate-300">
                        <span>Ledger</span>
                        <span className="text-blue-400 font-bold">MATCHED</span>
                    </div>
                    <div className="w-full h-1 bg-blue-900 mt-1 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-400 w-[98%] shadow-[0_0_8px_cyan] animate-pulse"></div>
                    </div>
                </div>

                {/* 3. COMPLIANCE */}
                <div className="absolute bottom-[20%] left-[10%] w-48 bg-[#0a101f]/98 backdrop-blur-3xl border border-purple-500/80 rounded-xl p-3 shadow-[0_0_50px_rgba(168,85,247,0.4)] transform hover:scale-105 transition-all duration-300 z-20">
                    <div className="flex justify-between items-center mb-2 border-b border-purple-500/30 pb-1">
                        <span className="text-[9px] font-bold text-purple-100 uppercase">Compliance</span>
                        <ShieldCheck className="w-3 h-3 text-purple-400" />
                    </div>
                    <div className="space-y-1">
                        {['GST Filed', 'TDS Finalized'].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-[8px] text-slate-100">
                                <CheckCircle2 className="w-2.5 h-2.5 text-teal-400" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. ANOMALY - HIGHEST VISIBILITY */}
                <div className="absolute bottom-[20%] right-[10%] w-52 bg-red-950/98 backdrop-blur-3xl border-2 border-red-500 rounded-xl p-3 shadow-[0_0_70px_rgba(239,68,68,0.7)] transform hover:scale-110 transition-all duration-300 animate-alert-pulse z-30">
                     <div className="flex items-center gap-2 mb-1.5 text-red-400">
                        <AlertTriangle className="w-4 h-4 shadow-[0_0_15px_red]" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-red-100">Anomaly!</span>
                    </div>
                    <div className="bg-black/80 p-2 rounded border border-red-500/50">
                        <div className="flex justify-between text-[9px] text-red-500 font-mono font-bold">
                            <span>Variance</span>
                            <span className="shadow-[0_0_15px_red] text-red-400">18.5%</span>
                        </div>
                    </div>
                </div>

             </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;