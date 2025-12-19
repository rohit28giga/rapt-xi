
import React from 'react';
import { Linkedin, ExternalLink, Award, ShieldCheck, User } from 'lucide-react';

const teamMembers = [
  {
    name: 'ABHAY PRAKASH',
    role: 'Co-Founder & CA Finalist',
    desc: 'Bridging the gap between cutting-edge technology and real-world compliance needs for modern CA firms.',
    linkedin: 'linkedin.com/in/abhayprakash03',
    imgSrc: 'https://res.cloudinary.com/dts98f6v2/image/upload/v1740337812/abhay_pfp.jpg',
    color: 'border-blue-500/30',
    accent: 'text-blue-400',
    glow: 'shadow-[0_0_40px_rgba(59,130,246,0.1)]',
    featured: false,
    badge: 'Co-Founder'
  },
  {
    name: 'ROHIT SAIRAM',
    role: 'Founder & CEO',
    desc: 'Visionary leader driving agentic AI adoption in finance and audit workflows with over a decade of domain expertise.',
    linkedin: 'www.linkedin.com/in/rohit-sairam-ba1666264',
    imgSrc: 'https://res.cloudinary.com/dts98f6v2/image/upload/v1740337812/rohit_pfp.jpg',
    color: 'border-teal-400/60',
    accent: 'text-teal-400',
    glow: 'shadow-[0_0_80px_rgba(45,212,191,0.3)]',
    featured: true,
    badge: 'Founder & CEO'
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
    badge: 'Advisor'
  }
];

const TeamSection = () => {
  return (
    <section className="min-h-screen pt-48 pb-32 relative bg-transparent overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-teal-500/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-28 reveal-on-scroll">
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight font-jakarta uppercase">
            Leadership <span className="text-teal-400">Node</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed font-jakarta">
            The domain experts and engineers behind the RAPT Xi autonomous audit layer.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 relative">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx} 
              className={`group relative p-10 rounded-[2.5rem] bg-[#070912]/95 backdrop-blur-3xl border transition-all duration-700 reveal-on-scroll flex flex-col
                ${member.featured 
                  ? `${member.color} scale-115 z-30 ${member.glow} ring-2 ring-teal-500/20 md:translate-x-8` 
                  : `${member.color} scale-100 z-10 opacity-70 hover:opacity-100 hover:bg-white/[0.02] border-white/10`
                } 
                hover:-translate-y-4 w-full md:w-[320px] lg:w-[380px] min-h-[550px] shadow-2xl`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Profile Avatar Container */}
              <div className="relative w-40 h-40 mx-auto mb-10">
                 {/* Glow Ring */}
                 <div className={`absolute inset-[-4px] rounded-[2rem] bg-gradient-to-br ${member.featured ? 'from-teal-400 via-emerald-500 to-blue-600' : 'from-white/10 to-transparent'} opacity-40 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
                 
                 <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden border border-white/20 bg-[#111] shadow-2xl flex items-center justify-center">
                    {member.imgSrc ? (
                        <img 
                            src={member.imgSrc} 
                            alt={member.name} 
                            className={`w-full h-full object-cover transition-all duration-1000 ${member.featured ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`}
                            loading="lazy"
                            onError={(e) => {
                                // If Cloudinary fails, fallback to UI Avatars
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0a0a0a&color=${member.accent.includes('teal') ? '2dd4bf' : '3b82f6'}&bold=true&size=512`;
                            }}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a] text-slate-700">
                           <User className="w-16 h-16 opacity-30" />
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
                 </div>
              </div>
              
              <div className="text-center mb-auto font-jakarta">
                <h3 className={`text-2xl font-bold text-white mb-2 tracking-tight ${member.featured ? 'text-3xl' : ''}`}>
                  {member.name}
                </h3>
                <div className={`text-[11px] font-mono mb-8 uppercase tracking-[0.4em] font-black ${member.accent}`}>
                  {member.role}
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light px-4">
                  {member.desc}
                </p>
              </div>
              
              <div className="flex justify-center mb-8 font-mono">
                 <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold border ${member.featured ? 'bg-teal-500/10 border-teal-500/50 text-teal-400' : 'bg-white/5 border-white/10 text-slate-500'}`}>
                    {member.badge}
                 </span>
              </div>
              
              <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/5">
                <a 
                  href={`https://${member.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-[10px] font-mono font-bold ${member.accent} hover:text-white transition-all duration-300 group/link tracking-widest`}
                >
                    <Linkedin className="w-4 h-4 group-hover/link:scale-110" />
                    LINKEDIN
                </a>
                <div className="w-1.5 h-1.5 bg-white/10 rounded-full"></div>
                <button className="text-slate-500 hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
