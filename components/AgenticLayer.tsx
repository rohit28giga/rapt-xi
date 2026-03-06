import React from 'react';
import { Database, FileSpreadsheet, Mail, Globe, Server, Shield } from 'lucide-react';

const IntegrationNode: React.FC<{ icon: React.ReactNode; label: string; position: string; delay: string }> = ({ icon, label, position, delay }) => (
  <div className={`absolute ${position} flex flex-col items-center gap-3 animate-float`} style={{ animationDelay: delay }}>
    <div className="w-12 h-12 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center shadow-2xl text-white hover:scale-110 transition-all duration-500 group cursor-pointer z-20">
      <div className="group-hover:text-teal-400 transition-colors">
        {icon}
      </div>
    </div>
    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold bg-black/80 px-2 py-1 rounded border border-white/10">{label}</span>
  </div>
);

const AgenticLayer: React.FC = () => {
  return (
    <section id="features" className="py-32 relative overflow-hidden border-b border-white/5">
      {/* Background Glass Layer */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] -z-10"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 reveal-on-scroll">
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            One Agentic Layer.<br />
            <span className="text-slate-500">Infinite Possibilities.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
            Stop switching tabs. RAPT sits at the center of your firm's ecosystem. 
            Our agents instantly search your firm's entire history, integrate with Xero, QuickBooks, and SharePoint, 
            and execute tasks with the full memory and judgment of the firm behind it.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              'Instant Cross-Platform Reconciliation',
              'Automated KYC & AML Compliance Checks',
              'Natural Language Querying',
              'Secure, Encrypted Data Handling'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 group">
                <div className="w-1 h-full min-h-[24px] bg-teal-500/50 group-hover:bg-teal-400 transition-colors rounded-full"></div>
                <span className="text-slate-300 group-hover:text-white transition-colors text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Graphic */}
        <div className="order-1 lg:order-2 relative h-[600px] w-full flex items-center justify-center reveal-on-scroll">
            
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30">
               <defs>
                 <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" style={{ stopColor: '#fff', stopOpacity: 0.05 }} />
                   <stop offset="50%" style={{ stopColor: '#2dd4bf', stopOpacity: 0.4 }} />
                   <stop offset="100%" style={{ stopColor: '#fff', stopOpacity: 0.05 }} />
                 </linearGradient>
               </defs>
               {/* Radiating lines from center */}
               <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#lineGrad)" strokeWidth="1" />
               <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="url(#lineGrad)" strokeWidth="1" />
               <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="url(#lineGrad)" strokeWidth="1" />
               <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="url(#lineGrad)" strokeWidth="1" />
            </svg>

            {/* Central Core with Pulse & Glow */}
            <div className="relative z-10 w-48 h-48 bg-black/60 backdrop-blur-xl rounded-full border border-teal-500/40 flex flex-col items-center justify-center shadow-[0_0_80px_rgba(45,212,191,0.2)] animate-pulse-slow">
               {/* Inner Gradient Glow */}
               <div className="absolute inset-0 bg-gradient-to-b from-teal-500/20 to-transparent rounded-full"></div>
               
               {/* Subtle Rotating Ring Overlay */}
               <div className="absolute -inset-2 rounded-full border border-teal-500/10 border-t-teal-500/30 animate-spin-slow"></div>

               <span className="text-3xl font-medium tracking-[0.2em] text-white z-10 drop-shadow-[0_0_15px_rgba(45,212,191,0.6)]">RAPT</span>
            </div>

            {/* Orbiting Nodes */}
            <IntegrationNode icon={<FileSpreadsheet className="w-5 h-5" />} label="Excel" position="top-[10%] left-[50%] -translate-x-1/2" delay="0s" />
            <IntegrationNode icon={<Database className="w-5 h-5" />} label="Xero" position="bottom-[10%] left-[50%] -translate-x-1/2" delay="1s" />
            <IntegrationNode icon={<Mail className="w-5 h-5" />} label="Outlook" position="top-[25%] left-[15%]" delay="2s" />
            <IntegrationNode icon={<Globe className="w-5 h-5" />} label="Registry" position="top-[25%] right-[15%]" delay="0.5s" />
            <IntegrationNode icon={<Server className="w-5 h-5" />} label="SharePoint" position="bottom-[25%] left-[15%]" delay="1.5s" />
            <IntegrationNode icon={<Shield className="w-5 h-5" />} label="AML/KYC" position="bottom-[25%] right-[15%]" delay="2.5s" />
        </div>

      </div>
    </section>
  );
};

export default AgenticLayer;