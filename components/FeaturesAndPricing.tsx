
import React, { useState, useEffect, useRef } from 'react';
/* Added Activity to the imports to fix the "Cannot find name 'Activity'" error */
import { Check, AlertTriangle, FileSpreadsheet, Database, ListChecks, ShieldCheck, LayoutDashboard, RefreshCw, ArrowRight, Zap, Target, FileText, BarChart3, Fingerprint, Lock, Activity } from 'lucide-react';

// --- Context-Specific Graphics for Features ---

const GraphicWorkingPapers = () => (
  <div className="w-full h-full p-6 flex flex-col gap-4 font-mono text-[10px]">
    <div className="flex justify-between items-center border-b border-teal-500/30 pb-2">
      <span className="text-teal-400">WP_ID: FA_SCHED_2024</span>
      <span className="bg-teal-500/20 px-2 py-0.5 rounded text-[8px]">DRAFT_AUTO</span>
    </div>
    <div className="flex-1 space-y-2">
      {['Opening Bal', 'Additions', 'Depreciation', 'Closing Bal'].map((label, i) => (
        <div key={i} className="flex justify-between items-center p-2 rounded bg-white/5 border border-white/10 animate-in fade-in slide-in-from-left-2" style={{animationDelay: `${i * 150}ms`}}>
          <span className="text-slate-400">{label}</span>
          <span className="text-white">₹ {(Math.random() * 1000000).toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
        </div>
      ))}
      <div className="mt-4 p-3 rounded-lg border border-teal-500/50 bg-teal-500/5 flex items-start gap-3 animate-pulse">
        <Activity className="w-4 h-4 text-teal-400 mt-0.5" />
        <div>
          <div className="text-teal-400 font-bold uppercase text-[8px]">Agent Calculation</div>
          <div className="text-slate-300">Depreciation matched with Income Tax Act Sec 32.</div>
        </div>
      </div>
    </div>
  </div>
);

const GraphicChecklist = () => (
    <div className="w-full h-full p-8 flex flex-col gap-4">
        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">NFRA_COMPLIANCE_CHECKLIST</div>
        <div className="space-y-4">
            {[
                { text: 'Verify Directors Remuneration', status: 'done' },
                { text: 'Analyze Related Party Transactions', status: 'done' },
                { text: 'Subsequent Events Disclosure', status: 'pending' },
                { text: 'Going Concern Assessment', status: 'pending' }
            ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                    <div className={`w-5 h-5 rounded border transition-all duration-500 flex items-center justify-center ${item.status === 'done' ? 'bg-teal-500 border-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.5)]' : 'bg-white/5 border-white/20'}`}>
                        {item.status === 'done' && <Check className="w-3 h-3 text-black" />}
                        {item.status === 'pending' && i === 2 && <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping" />}
                    </div>
                    <div className={`text-[11px] font-medium transition-colors ${item.status === 'done' ? 'text-teal-200' : 'text-slate-500'}`}>{item.text}</div>
                </div>
            ))}
        </div>
        <div className="absolute bottom-6 right-6 p-3 bg-black/40 border border-white/10 rounded-xl backdrop-blur-md flex items-center gap-2">
            <span className="text-[10px] text-teal-400 font-bold">85% COMPLETE</span>
            <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-teal-500 w-[85%]" />
            </div>
        </div>
    </div>
);

const GraphicEvidence = () => (
    <div className="w-full h-full flex items-center justify-center relative">
        <div className="relative w-40 h-52 bg-[#0a0a0a] border border-white/20 rounded-lg shadow-2xl p-4 overflow-hidden transform rotate-[-2deg]">
            <div className="w-full h-4 bg-white/5 rounded mb-4" />
            <div className="space-y-1">
                <div className="w-full h-1 bg-white/10 rounded" />
                <div className="w-2/3 h-1 bg-white/10 rounded" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 h-12 border-t border-dashed border-teal-500/40 pt-2">
                <div className="flex items-center gap-2 text-[8px] text-teal-400 font-mono">
                    <Fingerprint className="w-4 h-4" />
                    DIGITAL_SIGN_VERIFIED
                </div>
            </div>
            <div className="absolute top-2 right-2">
                 <ShieldCheck className="w-5 h-5 text-teal-500 animate-pulse" />
            </div>
        </div>
        
        <div className="absolute top-1/4 right-1/4 w-32 h-24 bg-teal-900/90 border border-teal-500/50 rounded p-3 backdrop-blur shadow-2xl transform rotate-[5deg] animate-hover-float">
             <div className="text-[8px] text-teal-300 font-bold mb-2">Bank Confirmation Received</div>
             <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                 <div className="text-[7px] text-teal-100 italic">HDFC_CONFIRM_#882</div>
             </div>
        </div>
    </div>
);

const GraphicDashboard = () => (
    <div className="w-full h-full p-6 space-y-6 overflow-hidden">
        <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                <div className="text-[8px] text-slate-500 uppercase mb-1">Portfolio Risk</div>
                <div className="text-xl font-bold text-red-400">Low</div>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                <div className="text-[8px] text-slate-500 uppercase mb-1">Time Saved</div>
                <div className="text-xl font-bold text-teal-400">124h</div>
            </div>
        </div>
        <div className="relative h-24 bg-black/40 border border-white/10 rounded-lg p-3 overflow-hidden">
             <div className="absolute inset-0 flex items-end gap-1 px-2 pb-1">
                {[30, 45, 25, 60, 80, 50, 90, 40, 70].map((h, i) => (
                    <div key={i} className="flex-1 bg-teal-500/20 border-t border-teal-400/50 rounded-t-sm" style={{height: `${h}%`}} />
                ))}
             </div>
             <div className="relative text-[8px] text-teal-400 font-mono">LIVE_AUDIT_VELOCITY</div>
        </div>
        <div className="space-y-2">
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-teal-500 to-blue-500 w-[65%] animate-pulse" />
            </div>
            <div className="flex justify-between text-[8px] text-slate-500 uppercase">
                <span>Partner Review</span>
                <span>65% Stage</span>
            </div>
        </div>
    </div>
);

const GraphicReconciliations = () => (
    <div className="w-full h-full p-4 flex flex-col">
        <div className="flex gap-2 flex-1">
            <div className="flex-1 bg-black/40 border border-white/5 rounded p-3">
                <div className="text-[7px] text-slate-500 font-bold uppercase mb-2">Ledger (A)</div>
                <div className="space-y-1">
                   {[1,2,3,4,5].map(i => (
                       <div key={i} className="flex justify-between items-center bg-white/5 p-1 rounded text-[7px]">
                           <span>Entry_{i*10}</span>
                           <span className="text-slate-300">₹{i*1000}</span>
                       </div>
                   ))}
                </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
                 <RefreshCw className="w-4 h-4 text-teal-400 animate-spin-slow" />
                 <div className="h-1 w-full bg-teal-500/20" />
            </div>
            <div className="flex-1 bg-black/40 border border-white/5 rounded p-3">
                <div className="text-[7px] text-slate-500 font-bold uppercase mb-2">GST Portal (B)</div>
                 <div className="space-y-1">
                   {[1,2,3,4,5].map(i => (
                       <div key={i} className={`flex justify-between items-center p-1 rounded text-[7px] ${i === 4 ? 'bg-red-500/20 border border-red-500/50' : 'bg-white/5'}`}>
                           <span>TXN_{i*10}</span>
                           <span className={i === 4 ? 'text-red-400 font-bold' : 'text-slate-300'}>₹{i === 4 ? 4100 : i*1000}</span>
                       </div>
                   ))}
                </div>
            </div>
        </div>
        <div className="mt-4 p-2 bg-red-950/40 border border-red-500/30 rounded flex items-center justify-between">
            <span className="text-[9px] text-red-400 font-bold">Variance: ₹100.00 Detected</span>
            <AlertTriangle className="w-3 h-3 text-red-500 animate-pulse" />
        </div>
    </div>
);

const features = [
  {
    id: 'wp',
    title: 'Automated Working Papers & Schedules',
    desc: 'Auto-generate audit working papers (fixed assets, depreciation, loans) directly from client data, formatted and ready for review.',
    icon: <FileSpreadsheet className="w-6 h-6 text-teal-400" />,
    graphic: <GraphicWorkingPapers />
  },
  {
    id: 'checklist',
    title: 'Smart Audit Programme & Checklist Builder',
    desc: 'Context-aware audit checklists that adapt based on the entity type, turnover, and industry, ensuring no compliance step is missed.',
    icon: <ListChecks className="w-6 h-6 text-teal-400" />,
    graphic: <GraphicChecklist />
  },
  {
    id: 'evidence',
    title: 'Digital Evidence & Confirmation Manager',
    desc: 'Centralized hub for managing external confirmations (bank, debtor) and linking digital evidence directly to ledger entries.',
    icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
    graphic: <GraphicEvidence />
  },
  {
    id: 'review',
    title: 'Audit Review & Finalization Dashboard',
    desc: 'Real-time visibility into audit progress, partner review notes, and critical pending items before signing off.',
    icon: <LayoutDashboard className="w-6 h-6 text-teal-400" />,
    graphic: <GraphicDashboard />
  },
  {
    id: 'recon',
    title: 'Reconciliations Automation (GST, Bank, AIS)',
    desc: 'Tri-way matching between Books, GST Returns, and AIS/TIS data to instantly identify tax variances and leakage.',
    icon: <RefreshCw className="w-6 h-6 text-teal-400" />,
    graphic: <GraphicReconciliations />
  }
];

export const FeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      let closestIndex = 0;
      let minDistance = Infinity;
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });
      setActiveFeature(closestIndex);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="features" className="relative bg-transparent py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="space-y-40 py-24">
          <div className="mb-16">
             <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
                Core Capabilities
             </h2>
             <p className="text-slate-400 text-lg font-light">
                Five pillars of the RAPT Xi agentic architecture.
             </p>
          </div>
          {features.map((feature, idx) => (
            <div 
                key={feature.id} 
                ref={(el) => { sectionRefs.current[idx] = el; }}
                className={`transition-all duration-500 transform ${activeFeature === idx ? 'opacity-100 translate-x-0 scale-100' : 'opacity-30 translate-x-[-20px] scale-95'}`}
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                {feature.icon}
              </div>
              <h3 className="text-3xl font-medium text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                {feature.desc}
              </p>
            </div>
          ))}
          <div className="h-[20vh]"></div>
        </div>
        <div className="hidden lg:flex lg:h-screen lg:sticky lg:top-0 items-center justify-center">
           <div className="relative w-full max-w-lg aspect-[4/3] bg-black/60 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
              <div className="h-8 bg-black/40 border-b border-white/5 flex items-center px-4 justify-between">
                  <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                  </div>
                  <span className="text-[9px] font-mono text-teal-500 tracking-widest uppercase">Agent_Viewport_{features[activeFeature].id}</span>
              </div>
              <div className="flex-1 relative bg-transparent flex items-center justify-center overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-teal-500/20 animate-scan"></div>
                  <div key={activeFeature} className="animate-in fade-in zoom-in duration-700 w-full h-full flex items-center justify-center">
                      {features[activeFeature].graphic}
                  </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export const CoreAdvantageSection: React.FC = () => {
    return (
        <section className="min-h-screen relative flex items-center justify-center py-24 overflow-hidden bg-transparent">
            <div className="text-center max-w-6xl mx-auto px-6 z-10">
                <h2 className="text-4xl md:text-5xl text-white mb-16 font-light">
                    The RAPT Core Advantage: <span className="text-teal-400 font-medium">Agentic Vouching</span>
                </h2>
                <div className="relative mx-auto w-full max-w-5xl">
                    <div className="relative transform transition-all duration-700 hover:scale-[1.02]">
                        <div className="bg-[#111] rounded-2xl p-4 border border-teal-500/30 shadow-[0_0_100px_rgba(45,212,191,0.15)] relative z-20">
                            <div className="bg-[#050505] aspect-[16/9] rounded-xl overflow-hidden relative border border-white/10 shadow-inner">
                                <div className="h-10 bg-[#151515] flex items-center px-5 border-b border-white/10 justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/30"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500/30"></div>
                                        </div>
                                        <span className="text-[10px] text-teal-500/80 font-mono tracking-widest uppercase">Autonomous_Agent_Active</span>
                                    </div>
                                    <div className="text-[10px] text-slate-500 font-mono">NODE_HASH: 0x8FA...42</div>
                                </div>
                                <div className="p-8 grid grid-cols-2 gap-10 h-full font-mono text-[11px] relative overflow-hidden">
                                    {/* Data Stream Lines */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                                        {[...Array(20)].map((_, i) => (
                                            <line 
                                                key={i}
                                                x1="49%" y1={`${15 + i*4}%`} 
                                                x2="51%" y2={`${15 + i*4}%`} 
                                                stroke="#2dd4bf" strokeWidth="1" opacity="0.2"
                                                className="animate-pulse" style={{animationDelay: `${i*0.1}s`}}
                                            />
                                        ))}
                                    </svg>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-2 text-slate-400 mb-2 font-bold uppercase tracking-widest text-[9px]">
                                            <Database className="w-3 h-3" /> External Data Source
                                        </div>
                                        <div className="space-y-3">
                                            {[
                                                {label: 'Vendor INV #928', amt: '₹14,500', status: 'MATCHED'},
                                                {label: 'Office Rent Oct', amt: '₹45,000', status: 'MATCHED'},
                                                {label: 'Director Travel', amt: '₹2,34,500', status: 'WARNING', fail: true}
                                            ].map((row, i) => (
                                                <div key={i} className={`p-4 rounded-lg border flex flex-col gap-1 transition-all ${row.fail ? 'bg-red-500/10 border-red-500/50 animate-alert-pulse' : 'bg-white/[0.03] border-white/5'}`}>
                                                    <div className="flex justify-between">
                                                        <span className="text-white font-bold">{row.label}</span>
                                                        <span className={row.fail ? 'text-red-400' : 'text-teal-400'}>{row.amt}</span>
                                                    </div>
                                                    <div className="text-[9px] opacity-40">{row.status}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-2 text-slate-400 mb-2 font-bold uppercase tracking-widest text-[9px]">
                                            <FileSpreadsheet className="w-3 h-3" /> Firm Ledger
                                        </div>
                                        <div className="space-y-3">
                                            {[
                                                {id: 'JV_029', acct: 'Purchase A/c'},
                                                {id: 'JV_030', acct: 'Rent Expense'},
                                                {id: 'NULL', acct: '---', fail: true}
                                            ].map((row, i) => (
                                                <div key={i} className={`p-4 rounded-lg border flex flex-col gap-1 ${row.fail ? 'bg-red-500/10 border-red-500/50' : 'bg-white/[0.03] border-white/5'}`}>
                                                    <div className="flex justify-between">
                                                        <span className="text-white font-bold">{row.id}</span>
                                                        <span className="text-slate-500 italic">{row.acct}</span>
                                                    </div>
                                                    <div className="text-[9px] opacity-40">LEDGER_ENTRY</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Central Alert UI */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="bg-[#0f0303]/95 border border-red-500 p-6 rounded-2xl shadow-[0_0_50px_rgba(239,68,68,0.4)] backdrop-blur-xl flex flex-col items-center gap-3 animate-bounce-slow pointer-events-auto">
                                            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.8)]">
                                                <AlertTriangle className="w-7 h-7 text-black" />
                                            </div>
                                            <div className="text-center">
                                                <div className="text-red-500 font-black uppercase text-xs tracking-[0.2em] mb-1">Anomaly Detected</div>
                                                <div className="text-[9px] text-white/70 max-w-[180px]">Transaction 'Director Travel' has no matching voucher in the specified ledger period.</div>
                                            </div>
                                            <button className="mt-2 bg-red-500 text-black text-[9px] font-bold px-4 py-1.5 rounded-full uppercase tracking-tighter hover:bg-red-400 transition-colors">Flag For Review</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const PricingSection: React.FC = () => {
    return (
      <section id="pricing" className="py-32 relative bg-transparent overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 blur-[150px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 reveal-on-scroll">
            <h2 className="text-5xl font-bold text-white mb-6 font-jakarta tracking-tight">Investment Tiers</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Scalable agentic power tailored for modern audit firms.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
            {[
                {
                    name: "Pilot Firm", 
                    price: "₹35,000", 
                    desc: "Perfect for sole practitioners looking to start.",
                    features: ["10 Client Portfolios", "Standard Recon Speed", "Basic Reporting", "Email Support"]
                },
                {
                    name: "Growth Firm", 
                    price: "₹65,000", 
                    highlighted: true,
                    desc: "Our most popular tier for established mid-tier firms.",
                    features: ["Unlimited Clients", "Priority Agent Processing", "Custom Checklists", "Direct Xero/Tally Link", "Dedicated Success Manager"]
                },
                {
                    name: "Enterprise", 
                    price: "Custom", 
                    desc: "Full bespoke deployment for multi-partner firms.",
                    features: ["On-Premise Deployment", "SSO Integration", "Custom LLM Fine-tuning", "24/7 Security Operations", "Partner-Level Analytics"]
                }
            ].map((tier, idx) => (
              <div 
                key={idx} 
                className={`group relative rounded-[2rem] p-10 border transition-all duration-500 flex flex-col backdrop-blur-3xl overflow-hidden reveal-on-scroll
                  ${tier.highlighted 
                    ? 'bg-white/[0.04] border-teal-500/50 scale-105 z-20 shadow-[0_0_80px_rgba(45,212,191,0.1)]' 
                    : 'bg-black/40 border-white/10 hover:border-white/20'
                  }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {tier.highlighted && (
                    <div className="absolute top-0 right-0 p-4">
                        <Zap className="w-5 h-5 text-teal-400 animate-pulse" />
                    </div>
                )}
                
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-white mb-3 font-jakarta">{tier.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-black text-white">{tier.price}</span>
                    {tier.price !== 'Custom' && <span className="text-slate-500 text-sm font-mono">/annum</span>}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{tier.desc}</p>
                </div>

                <div className="flex-1 space-y-4 mb-10">
                    {tier.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                            <Check className="w-4 h-4 text-teal-500" />
                            {f}
                        </div>
                    ))}
                </div>

                <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                  tier.highlighted 
                    ? 'bg-teal-500 text-black hover:bg-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.3)]' 
                    : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'
                }`}>
                  Configure Deployment
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Finishing Section */}
        <div className="max-w-5xl mx-auto mt-48 px-6 pb-24 reveal-on-scroll text-center relative">
            <div className="absolute inset-0 bg-teal-500/5 blur-[100px] rounded-full -z-10"></div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Ready to <span className="text-teal-400">RAPT</span> your audits?</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">Join over 50 firms already utilizing agentic intelligence to increase efficiency by 60%.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="bg-white text-black px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform flex items-center gap-3 group">
                    Request Integration <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <div className="flex items-center gap-3 text-slate-500 text-sm font-mono">
                    <Target className="w-4 h-4" /> SECURE_DATA_ENCRYPTION_ACTIVE
                </div>
            </div>
        </div>
      </section>
    );
  };
