
import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react';

const ProductPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState('');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.toLowerCase() === 'rohit.s.sairam@gmail.com') {
      setIsAuthorized(true);
      setError('');
    } else {
      setError('Access restricted. Please enter a valid authorized email.');
    }
  };

  return (
    <div className="relative w-full h-[calc(100vh-120px)] overflow-hidden bg-[#020617]">
      {/* The Product Content (Iframe) */}
      <div className={`w-full h-full transition-all duration-1000 ${!isAuthorized ? 'blur-3xl scale-105 pointer-events-none' : 'blur-0 scale-100'}`}>
        <iframe 
          src="https://claude.ai/public/artifacts/c8951de3-f881-417a-a860-d5e34bc9a870" 
          className="w-full h-full border-none"
          title="RAPT Product Demo"
        />
      </div>

      {/* Authorization Overlay */}
      {!isAuthorized && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-[90%] max-w-md p-8 md:p-10 rounded-[2.5rem] bg-[#0a0a0a]/90 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] text-center reveal-on-scroll">
            <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-teal-500/20">
              <Lock className="w-8 h-8 text-teal-400" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
              Exclusive Product Demo
            </h2>
            <p className="text-slate-400 text-sm md:text-base mb-8 font-light leading-relaxed">
              Access to the RAPT Xi autonomous audit layer is currently restricted. Enter your authorized email to proceed.
            </p>

            <form onSubmit={handleVerify} className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter authorized email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all"
                  required
                />
              </div>
              
              {error && (
                <p className="text-red-400 text-xs font-medium animate-pulse">
                  {error}
                </p>
              )}

              <button 
                type="submit"
                className="w-full bg-white text-black hover:bg-teal-400 hover:text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-xl"
              >
                Verify Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-mono">
              <ShieldCheck className="w-3 h-3" />
              Secure Enterprise Access
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
