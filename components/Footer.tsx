import React from 'react';
import { Twitter, Linkedin, Github, ShieldCheck, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-3xl border-t border-white/5 pt-24 pb-12 text-slate-400 relative z-20 overflow-hidden">
      {/* Background visual element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[300px] bg-teal-500/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-black text-white font-brand tracking-widest">RAPT <span className="text-teal-500 italic">Xi</span></span>
            </div>
            <p className="text-lg leading-relaxed max-w-md text-slate-500 font-light">
              Transforming the audit workflow into an autonomous, real-time intelligence engine for the modern Chartered Accountant.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.3em]">Platform</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#features" className="hover:text-teal-400 transition-colors">Autonomous Vouching</a></li>
              <li><a href="#features" className="hover:text-teal-400 transition-colors">Risk Assessment</a></li>
              <li><a href="#features" className="hover:text-teal-400 transition-colors">API Integrations</a></li>
              <li><a href="#pricing" className="hover:text-teal-400 transition-colors">Pricing Tiers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.3em]">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-teal-500" /> solutions@rapt.ai</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-teal-500" /> Bengaluru, KA, IN</li>
              <li className="flex flex-col gap-2">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Direct Support</span>
                <span className="text-sm text-teal-400">+91 96324 41733</span>
                <span className="text-sm text-teal-400">+91 97391 01333</span>
              </li>
              <li className="flex items-center gap-3 font-mono text-[10px] text-teal-500/50 uppercase"><ShieldCheck className="w-4 h-4" /> NFRA Compliance v3.2</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono tracking-widest uppercase text-slate-600">
          <div className="flex items-center gap-4">
            <span>© 2026 RAPT TECHNOLOGIES INC.</span>
            <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
            <span>ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">PRIVACY_PROTOCOL</a>
            <a href="#" className="hover:text-white transition-colors">SERVICE_LEVEL_AGREEMENT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;