
import React from 'react';
import { Linkedin, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ivan Stanislavskiy',
    role: 'Technical Advisor',
    desc: 'Advises on system architecture, scalability, and technical design to ensure RAPT Xi is built on robust and secure engineering foundations.',
    linkedin: 'linkedin.com/in/ivanstanislavskiy',
    imgSrc: '', 
    color: 'border-purple-500/30',
    accent: 'text-purple-400',
    glow: 'shadow-[0_0_40px_rgba(168,85,247,0.15)]',
    featured: false,
    badge: 'Infrastructure'
  },
  {
    name: 'CA Kishan Rao',
    role: 'Audit Advisor',
    desc: 'A seasoned Chartered Accountant with over 10 years of experience in statutory audits, tax compliance, and financial advisory.',
    linkedin: 'linkedin.com',
    imgSrc: '',
    color: 'border-amber-500/30',
    accent: 'text-amber-400',
    glow: 'shadow-[0_0_40px_rgba(245,158,11,0.1)]',
    featured: false,
    badge: 'Compliance'
  },
  {
    name: 'Rohit Sairam',
    role: 'Founder & CEO',
    desc: 'Leading product vision and execution at RAPT Xi, focused on building automation systems that simplify audit workflows and help CA firms scale efficiently.',
    linkedin: 'www.linkedin.com/in/rohit-sairam-ba1666264',
    imgSrc: './input_file_1.png',
    color: 'border-teal-400/60',
    accent: 'text-teal-400',
    glow: 'shadow-[0_0_80px_rgba(45,212,191,0.3)]',
    featured: true,
    badge: 'Strategy'
  },
  {
    name: 'Abhay Prakash',
    role: 'Co-Founder & CFO',
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
    name: 'Pranav Sairam',
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
    <section className="min-h-screen pt-4 pb-32 relative bg-transparent overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-teal-500/40 to-transparent"></div>
      
      <div className="max-w-[1536px] mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight font-jakarta">
            The team behind RAPT Xi.
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed font-jakarta px-4">
            The domain experts, systems architects, and next-gen builders behind the RAPT Xi autonomous audit layer.
          </p>
        </div>

        {/* Adjacent Layout Grid: 1 column mobile, 2 columns tablet, 5 columns desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4 xl:gap-6 relative items-stretch max-w-7xl mx-auto">
          {teamMembers.map((member, idx) => {
            // Determine order for mobile
            let mobileOrder = "order-last";
            if (member.name === 'Rohit Sairam') mobileOrder = "order-1";
            else if (member.name === 'Abhay Prakash') mobileOrder = "order-2";
            else if (member.name === 'Ivan Stanislavskiy') mobileOrder = "order-3";
            else if (member.name === 'CA Kishan Rao') mobileOrder = "order-4";
            else if (member.name === 'Pranav Sairam') mobileOrder = "order-5";

            return (
              <div 
                key={idx} 
                className={`group relative p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-[#070912]/80 backdrop-blur-3xl border transition-all duration-700 reveal-on-scroll flex flex-col h-full ${mobileOrder} lg:order-none
                  ${member.featured 
                    ? `${member.color} scale-100 lg:scale-[1.02] z-30 ${member.glow} ring-1 ring-teal-500/20 shadow-teal-500/10` 
                    : `${member.color} scale-100 z-10 opacity-95 hover:opacity-100 hover:bg-white/[0.02] border-white/10 shadow-black/50`
                  } 
                  hover:-translate-y-2 shadow-2xl overflow-hidden`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
              {/* Profile Avatar Container */}
              <div className="relative w-full aspect-[4/5] mb-5 md:mb-6 group/img overflow-hidden rounded-[1rem] md:rounded-[1.5rem] border border-white/10 bg-black/40">
                 {/* Profile Image */}
                 <img 
                    src={member.imgSrc || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0a0a0a&color=${member.accent.split('-')[1]}&size=512&bold=true`} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105 group-hover:brightness-110"
                    loading="eager"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0a0a0a&color=${member.accent.includes('teal') ? '2dd4bf' : '3b82f6'}&size=512`;
                    }}
                 />

                 {/* Cinematic Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#070912] via-transparent to-transparent opacity-90"></div>
                 <div className="absolute inset-0 border-[1px] border-white/10 rounded-[2rem] pointer-events-none"></div>
                 
              </div>
              
              <div className="text-center mb-auto font-jakarta">
                <h3 className={`text-lg xl:text-xl font-bold text-white mb-1 tracking-tight ${member.featured ? 'lg:text-2xl' : ''}`}>
                  {member.name}
                </h3>
                <div className={`text-[9px] lg:text-[10px] font-mono mb-4 uppercase tracking-[0.4em] font-black ${member.accent}`}>
                  {member.role}
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light px-2">
                  {member.desc}
                </p>
              </div>
              
              <div className="mt-auto space-y-6">
                <div className="flex justify-center font-mono">
                   <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold border ${member.featured ? 'bg-teal-500/10 border-teal-500/50 text-teal-400' : 'bg-white/5 border-white/10 text-slate-500'}`}>
                      PRIORITY: {member.badge}
                   </span>
                </div>
                
                <div className="pt-6 border-t border-white/5">
                  <a 
                    href={`https://${member.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 text-[10px] font-mono font-bold ${member.accent} hover:text-white transition-all duration-300 group/link tracking-widest uppercase`}
                  >
                      <Linkedin className="w-3.5 h-3.5" />
                      LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

        <div className="mt-24 text-center reveal-on-scroll">
          <p className="text-slate-300 text-xl font-medium tracking-wide">
            "Built in collaboration with Chartered Accountants and audit professionals."
          </p>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </section>
  );
};

export default TeamSection;
