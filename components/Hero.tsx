
import React from 'react';
import { ArrowRight, AlertTriangle, Database, CheckCircle2, ScanLine, Search, ShieldCheck } from 'lucide-react';
import { ShaderAnimation } from './ui/shader-animation';

interface HeroProps {
  onNavigate: (path: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center bg-transparent overflow-hidden pt-40 lg:pt-12">
      
      <div className="w-[90%] xl:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 min-h-[800px]">
        
        {/* LEFT COLUMN: Content */}
        <div className="lg:col-span-6 text-left reveal-on-scroll z-20 flex flex-col justify-center py-12 lg:py-0">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-tighter mb-8 font-montserrat">
              <span className="block">
                Audit <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500">More Clients.</span>
              </span>
              <span className="block">
                Not <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500">More Hours.</span>
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-400 max-w-lg mb-12 font-light leading-relaxed border-l-2 border-teal-500/30 pl-6">
              Built to help CA firms complete audits in days, maintain compliance confidence, and grow without increasing workload.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6">
              <a 
                href="#features"
                className="bg-white text-black px-8 py-4 rounded-lg text-sm font-bold transition-all flex items-center gap-2 group shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#pricing"
                className="px-8 py-4 rounded-lg text-white text-sm font-medium hover:bg-white/5 border border-white/10 transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                Start Audit &rarr;
              </a>

              <button 
                onClick={() => onNavigate('/contact')}
                className="px-8 py-4 rounded-lg text-teal-400 text-sm font-bold bg-teal-500/10 border border-teal-500/20 hover:bg-teal-500/20 transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                Book a Demo
              </button>
            </div>
        </div>

        {/* RIGHT COLUMN: CLOUD & SCREENS */}
        <div className="lg:col-span-6 relative h-[600px] lg:h-[700px] flex items-center justify-center reveal-on-scroll mt-12 lg:mt-0">
             
             {/* Main Graphic Area - Fixed Aspect Ratio Container for Perfect Alignment */}
             <div className="relative w-[600px] h-[600px] flex items-center justify-center scale-75 lg:scale-110 xl:scale-125">
                
                {/* --- THE GLOWING CIRCULAR CLOUD CORE --- */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible z-10">
                    {/* Atmospheric Outer Glow - Soft & Diffused */}
                    <div 
                        className="absolute w-[900px] h-[900px] rounded-full opacity-60 animate-pulse-slow"
                        style={{
                            background: `radial-gradient(circle at center, 
                                rgba(34, 211, 238, 0.5) 0%, 
                                rgba(20, 184, 166, 0.15) 50%, 
                                transparent 70%)`,
                            filter: 'blur(100px)'
                        }}
                    ></div>
                    
                    {/* THE PERFECT CIRCULAR CORE: Dense & Glowing */}
                    <div className="relative w-[227px] h-[227px] rounded-full flex items-center justify-center overflow-hidden">
                        {/* Base Density Layer - Solid Cyan Core */}
                        <div className="absolute inset-0 bg-cyan-600 rounded-full blur-[1px] opacity-100 shadow-[inset_0_0_50px_rgba(255,255,255,0.5)]"></div>
                        
                        {/* Inner Glow Layers */}
                        <div className="absolute inset-2 bg-white rounded-full blur-[15px] opacity-80 animate-pulse"></div>
                        <div className="absolute inset-8 bg-cyan-200 rounded-full blur-[10px] opacity-90"></div>
                        
                        {/* Central High-Density Mass */}
                        <div className="absolute w-[140px] h-[140px] bg-white rounded-full blur-[2px] opacity-100 shadow-[0_0_60px_rgba(255,255,255,1)]"></div>
                        
                        {/* The "Spark" - Pure White Core */}
                        <div className="absolute w-[60px] h-[60px] bg-white rounded-full blur-[0.1px] shadow-[0_0_80px_white,0_0_120px_white]"></div>
                    </div>
                    
                    {/* Subtle Icons (Floating in the cloud) */}
                    <div className="absolute z-20 flex flex-col items-center justify-between h-[150px] py-2">
                        <Search className="w-12 h-12 text-white drop-shadow-[0_0_30px_white] opacity-90" />
                        <ShieldCheck className="w-12 h-12 text-white drop-shadow-[0_0_30px_white] opacity-90" />
                    </div>
                </div>

                {/* Connecting Lines & Data Pulses */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 600 600">
                    {/* Static Dotted Lines */}
                    <g opacity="0.2">
                        <line x1="300" y1="300" x2="120" y2="120" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                        <line x1="300" y1="300" x2="480" y2="120" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                        <line x1="300" y1="300" x2="120" y2="480" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                        <line x1="300" y1="300" x2="480" y2="480" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                    </g>

                    {/* Interaction Pulses (Moving Data Packets) */}
                    <circle r="4" fill="#2dd4bf">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M300 300 L120 120" />
                        <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle r="4" fill="#3b82f6">
                        <animateMotion dur="4s" repeatCount="indefinite" path="M480 120 L300 300" />
                        <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle r="4" fill="#6366f1">
                        <animateMotion dur="3.5s" repeatCount="indefinite" path="M300 300 L120 480" />
                        <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" />
                    </circle>
                    <circle r="4" fill="#f43f5e">
                        <animateMotion dur="2.5s" repeatCount="indefinite" path="M480 480 L300 300" />
                        <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                </svg>

                {/* --- 4 FLOATING SCREENS (Sharper & Closer) --- */}
                
                {/* 1. TALLY IMPORT (Top Left) */}
                <div className="absolute top-[18%] left-[18%] w-36 bg-[#0a101f] border border-teal-500/60 rounded-lg p-3 shadow-[0_20px_40px_rgba(0,0,0,0.8)] animate-float z-30">
                    <div className="flex justify-between items-center mb-2 border-b border-white/10 pb-2">
                        <span className="text-[9px] font-bold text-teal-100 uppercase tracking-widest">Tally Import</span>
                        <Database className="w-3.5 h-3.5 text-teal-400" />
                    </div>
                    <div className="flex gap-1.5 h-8 items-end">
                        {[40, 90, 60, 100, 70, 95, 80].map((h, i) => (
                            <div key={i} className="flex-1 bg-teal-400 rounded-t-[1px]" style={{height: `${h}%`}}></div>
                        ))}
                    </div>
                </div>

                {/* 2. LEDGER MATCHED (Top Right) */}
                <div className="absolute top-[18%] right-[18%] w-36 bg-[#0a101f] border border-blue-500/60 rounded-lg p-3 shadow-[0_20px_40px_rgba(0,0,0,0.8)] animate-float z-30" style={{ animationDelay: '1s' }}>
                     <div className="flex justify-between items-center mb-2 border-b border-white/10 pb-2">
                        <span className="text-[9px] font-bold text-blue-100 uppercase tracking-widest">Ledger Matched</span>
                        <ScanLine className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <div className="flex justify-between text-[8px] font-mono text-slate-200 mb-2">
                        <span>Recon</span>
                        <span className="text-teal-400 font-bold">MATCHED</span>
                    </div>
                    <div className="w-full h-1.5 bg-blue-900/50 rounded-full overflow-hidden">
                        <div className="h-full bg-teal-400 w-[100%] shadow-[0_0_8px_rgba(45,212,191,0.8)]"></div>
                    </div>
                </div>

                {/* 3. SCHEDULE III (Bottom Left) */}
                <div className="absolute bottom-[18%] left-[18%] w-36 bg-[#0a101f] border border-indigo-500/60 rounded-lg p-3 shadow-[0_20px_40px_rgba(0,0,0,0.8)] animate-float z-30" style={{ animationDelay: '2s' }}>
                    <div className="flex justify-between items-center mb-2 border-b border-white/10 pb-2">
                        <span className="text-[9px] font-bold text-indigo-100 uppercase tracking-widest">Schedule III</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                    <div className="space-y-1.5">
                        {['BALANCE SHEET', 'P&L STATEMENT'].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-[8px] text-white font-bold">
                                <CheckCircle2 className="w-2.5 h-2.5 text-green-400" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. RISK FLAGGED (Bottom Right) */}
                <div className="absolute bottom-[18%] right-[18%] w-36 bg-[#0a101f] border border-red-500 rounded-lg p-3 shadow-[0_0_20px_rgba(239,68,68,0.3),0_20px_40px_rgba(0,0,0,0.8)] animate-float z-30" style={{ animationDelay: '3s' }}>
                     <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                        <span className="text-[9px] font-bold uppercase tracking-widest text-red-100">Risk Flagged</span>
                    </div>
                    <div className="bg-red-950/60 p-2 rounded-md border border-red-500/50">
                        <div className="flex flex-col gap-0.5 text-[8px] text-red-400 font-mono">
                            <span className="font-bold">Suspicious</span>
                            <span className="font-bold text-[9px]">18.5% Var</span>
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
