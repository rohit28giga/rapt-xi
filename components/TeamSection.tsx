
import React from 'react';
import { Linkedin, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

const teamMembers = [
  {
    name: 'ABHAY PRAKASH',
    role: 'Co-Founder & CA Finalist',
    desc: 'Bridging the gap between cutting-edge technology and real-world compliance needs for modern CA firms.',
    linkedin: 'linkedin.com/in/abhayprakash03',
    imgSrc: './input_file_0.png',
    color: 'border-blue-500/30',
    accent: 'text-blue-400',
    glow: 'shadow-[0_0_40px_rgba(59,130,246,0.1)]',
    featured: false,
    badge: 'Operations'
  },
  {
    name: 'ROHIT SAIRAM',
    role: 'Founder & CEO',
    desc: 'Visionary leader driving agentic AI adoption in finance and audit workflows with over a decade of domain expertise.',
    linkedin: 'www.linkedin.com/in/rohit-sairam-ba1666264',
    imgSrc: './input_file_1.png',
    color: 'border-teal-400/60',
    accent: 'text-teal-400',
    glow: 'shadow-[0_0_80px_rgba(45,212,191,0.3)]',
    featured: true,
    badge: 'Strategy'
  },
  {
    name: 'IVAN STANISLAVSKIY',
    role: 'Technology Advisor',
    desc: 'Expert in neural architecture and high-performance computing, ensuring RAPT scalability and security.',
    linkedin: 'linkedin.com/in/ivanstanislavskiy',
    imgSrc: '', 
    color: 'border-purple-500/30',
    accent: 'text-purple-400',
    glow: 'shadow-[0_0_40px_rgba(168,85,247,0.15)]',
    featured: false,
    badge: 'Infrastructure'
  },
  {
    name: 'PRANAV SAIRAM',
    role: 'Early Contributor & Intern',
    desc: 'A 10th-grade prodigy contributing to the core architecture and UI/UX implementation of the RAPT agentic layer.',
    linkedin: 'linkedin.com',
    imgSrc: '',
    color: 'border-emerald-500/30',
    accent: 'text-emerald-400',
    glow: 'shadow-[0_0_40px_rgba(16,185,129,0.1)]',
    featured: false,
    badge: 'Development'
  }
];

const TeamSection = () => {
  return (
    <section className="min-h-screen pt-48 pb-32 relative bg-transparent overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-teal-500/40 to-transparent"></div>
      
      <div className="max-w-[1536px] mx-auto px-6 relative z-10">
        <div className="text-center mb-28 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-[10px] font-mono text-teal-400 mb-6 tracking-[0.2em] uppercase">
            <ShieldCheck className="w-3.5 h-3.5" /> Identity Verified Node
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight font-jakarta uppercase">
            Leadership <span className="text-teal-400">Node</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed font-jakarta">
            The domain experts, systems architects, and next-gen builders behind the RAPT Xi autonomous audit layer.
          </p>
        </div>

        {/* Adjacent Layout Grid: 1 column mobile, 2 columns tablet, 4 columns desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 relative items-stretch max-w-6xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx} 
              className={`group relative p-6 rounded-[2rem] bg-[#070912]/80 backdrop-blur-3xl border transition-all duration-700 reveal-on-scroll flex flex-col h-full
                ${member.featured 
                  ? `${member.color} scale-100 lg:scale-[1.02] z-30 ${member.glow} ring-1 ring-teal-500/20 shadow-teal-500/10` 
                  : `${member.color} scale-100 z-10 opacity-95 hover:opacity-100 hover:bg-white/[0.02] border-white/10 shadow-black/50`
                } 
                hover:-translate-y-2 shadow-2xl overflow-hidden`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Profile Avatar Container with Biometric Frame */}
              <div className="relative w-full aspect-[4/5] mb-6 group/img overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40">
                 {/* Scanning Effect */}
                 <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-teal-400 to-transparent z-20 animate-scan pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 
                 {/* Profile Image */}
                 <img 
                    src={member.imgSrc || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0a0a0a&color=${member.accent.split('-')[1]}&size=512&bold=true`} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110 group-hover:brightness-110"
                    loading="eager"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0a0a0a&color=${member.accent.includes('teal') ? '2dd4bf' : '3b82f6'}&size=512`;
                    }}
                 />

                 {/* Cinematic Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#070912] via-transparent to-transparent opacity-90"></div>
                 <div className="absolute inset-0 border-[1px] border-white/10 rounded-[2rem] pointer-events-none"></div>
                 
                 {/* Secure Badge */}
                 <div className={`absolute bottom-4 left-4 right-4 flex justify-between items-center z-20`}>
                    <div className="px-3 py-1.5 bg-black/70 backdrop-blur-lg border border-white/10 rounded-lg flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${member.featured ? 'bg-teal-400 shadow-[0_0_8px_#2dd4bf]' : 'bg-blue-400 shadow-[0_0_8px_#60a5fa]'} animate-pulse`}></div>
                        <span className="text-[10px] font-mono text-white/90 tracking-widest font-bold">SECURED_AUTH</span>
                    </div>
                    {member.featured && <Zap className="w-5 h-5 text-teal-400 drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]" />}
                 </div>
              </div>
              
              <div className="text-center mb-auto font-jakarta">
                <h3 className={`text-lg xl:text-xl font-bold text-white mb-1 tracking-tight ${member.featured ? 'lg:text-2xl' : ''}`}>
                  {member.name}
                </h3>
                <div className={`text-[9px] lg:text-[10px] font-mono mb-4 uppercase tracking-[0.4em] font-black ${member.accent}`}>
                  {member.role}
                </div>
                
                <p className="text-slate-400 text-xs leading-relaxed mb-6 font-light px-2 h-20 overflow-hidden text-ellipsis">
                  {member.desc}
                </p>
              </div>
              
              <div className="flex justify-center mb-6 font-mono">
                 <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold border ${member.featured ? 'bg-teal-500/10 border-teal-500/50 text-teal-400' : 'bg-white/5 border-white/10 text-slate-500'}`}>
                    PRIORITY: {member.badge}
                 </span>
              </div>
              
              <div className="flex items-center justify-center gap-4 pt-6 border-t border-white/5 mt-auto">
                <a 
                  href={`https://${member.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-[10px] font-mono font-bold ${member.accent} hover:text-white transition-all duration-300 group/link tracking-widest`}
                >
                    LINKEDIN_PROF
                </a>
                <div className="w-1.5 h-1.5 bg-white/10 rounded-full"></div>
                <button className="text-slate-500 hover:text-white transition-colors p-1">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </section>
  );
};

export default TeamSection;
