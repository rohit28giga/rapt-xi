
import React, { useState } from 'react';
import { Mail, Phone, Building2, Users, FileBarChart, Send, CheckCircle2 } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firmName: '',
    partners: '',
    audits: '',
    mobile: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-md w-full bg-[#070912] border border-teal-500/30 rounded-[2.5rem] p-12 text-center shadow-[0_0_50px_rgba(45,212,191,0.1)]">
          <div className="w-20 h-20 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-teal-500/20">
            <CheckCircle2 className="w-10 h-10 text-teal-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Request Received</h2>
          <p className="text-slate-400 mb-8 font-light">
            Our deployment team will reach out to your firm within 24 hours to schedule your personalized RAPT Xi demonstration.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform"
          >
            Return to Command Center
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-48 pb-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Content */}
          <div className="reveal-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-[10px] font-mono text-teal-400 mb-8 tracking-[0.2em] uppercase">
              <Send className="w-3.5 h-3.5" /> Secure Channel Open
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight font-jakarta leading-tight">
              Book Your <span className="text-teal-400 italic">RAPT Xi</span> Demo
            </h1>
            <p className="text-xl text-slate-400 mb-12 font-light leading-relaxed max-w-lg">
              Experience the future of autonomous auditing. Provide your firm's coordinates to initialize a secure demonstration.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Direct Lines</h4>
                  <p className="text-slate-500 text-sm mb-1">+91 96324 41733</p>
                  <p className="text-slate-500 text-sm">+91 97391 01333</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Secure Email</h4>
                  <p className="text-slate-500 text-sm">solutions@rapt.ai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative reveal-on-scroll">
            <div className="absolute -inset-4 bg-teal-500/5 blur-3xl rounded-full"></div>
            <form 
              onSubmit={handleSubmit}
              className="relative bg-[#070912]/80 backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl space-y-6"
            >
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Firm Name</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-500/50" />
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Sairam & Associates"
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-teal-500/50 transition-colors"
                    value={formData.firmName}
                    onChange={(e) => setFormData({...formData, firmName: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Partners</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-500/50" />
                    <input 
                      required
                      type="number" 
                      placeholder="Count"
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-teal-500/50 transition-colors"
                      value={formData.partners}
                      onChange={(e) => setFormData({...formData, partners: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Annual Audits</label>
                  <div className="relative">
                    <FileBarChart className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-500/50" />
                    <input 
                      required
                      type="number" 
                      placeholder="Est."
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-teal-500/50 transition-colors"
                      value={formData.audits}
                      onChange={(e) => setFormData({...formData, audits: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Mobile Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-500/50" />
                  <input 
                    required
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-teal-500/50 transition-colors"
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-teal-500 text-black font-bold rounded-xl hover:bg-teal-400 transition-all flex items-center justify-center gap-3 group shadow-[0_0_30px_rgba(20,184,166,0.3)]"
              >
                Initialize Demo Request
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <p className="text-[9px] text-center text-slate-600 font-mono uppercase tracking-widest">
                End-to-end encrypted submission node
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
