
import React, { useState, useEffect, useRef } from 'react';
import { Check, AlertTriangle, FileSpreadsheet, Database, ListChecks, ShieldCheck, LayoutDashboard, RefreshCw, Fingerprint, Activity } from 'lucide-react';

// --- Context-Specific Graphics for Features ---

const GraphicScheduleIII = () => (
  <div className="w-full h-full p-6 flex flex-col gap-4 font-mono text-[10px]">
    <div className="flex justify-between items-center border-b border-teal-500/30 pb-2">
      <span className="text-teal-400">SCHED_III_PREP</span>
      <span className="bg-teal-500/20 px-2 py-0.5 rounded text-[8px]">AUTO_GEN</span>
    </div>
    <div className="space-y-2">
      <div className="text-slate-500 text-[8px] mb-1">EQUITY AND LIABILITIES</div>
      {['Shareholders\' Funds', 'Non-current Liabilities', 'Current Liabilities'].map((label, i) => (
        <div key={i} className="flex justify-between items-center p-1.5 rounded bg-white/5 border border-white/10">
          <span className="text-slate-400">{label}</span>
          <span className="text-white">₹ {(Math.random() * 5000000).toLocaleString('en-IN')}</span>
        </div>
      ))}
      <div className="text-slate-500 text-[8px] mt-2 mb-1">ASSETS</div>
      {['Non-current Assets', 'Current Assets'].map((label, i) => (
        <div key={i} className="flex justify-between items-center p-1.5 rounded bg-white/5 border border-white/10">
          <span className="text-slate-400">{label}</span>
          <span className="text-white">₹ {(Math.random() * 5000000).toLocaleString('en-IN')}</span>
        </div>
      ))}
    </div>
  </div>
);

const GraphicLedgerReview = () => (
  <div className="w-full h-full p-6 flex flex-col gap-3 font-mono text-[9px]">
    <div className="text-teal-400 border-b border-teal-500/30 pb-2 flex justify-between">
      <span>13-MONTH_LEDGER_SCAN</span>
      <span className="text-red-400">3 RISKS FOUND</span>
    </div>
    <div className="space-y-2 overflow-hidden">
      {[
        { date: 'Apr 23', desc: 'Opening Balance Sync', risk: 'Low' },
        { date: 'Oct 23', desc: 'Large Cash Withdrawal', risk: 'High' },
        { date: 'Mar 24', desc: 'Year-end Provision', risk: 'Med' },
        { date: 'Apr 24', desc: 'Post-closing Entry', risk: 'High' }
      ].map((item, i) => (
        <div key={i} className={`p-2 rounded border ${item.risk === 'High' ? 'border-red-500/30 bg-red-500/5' : 'border-white/10 bg-white/5'}`}>
          <div className="flex justify-between mb-1">
            <span className="text-slate-500">{item.date}</span>
            <span className={item.risk === 'High' ? 'text-red-400' : 'text-teal-400'}>{item.risk} Risk</span>
          </div>
          <div className="text-white">{item.desc}</div>
        </div>
      ))}
    </div>
  </div>
);

const GraphicGSTRecon = () => (
  <div className="w-full h-full p-6 flex flex-col gap-4">
    <div className="text-[10px] font-mono text-teal-400 mb-2">GST_TRI_WAY_MATCHING</div>
    <div className="grid grid-cols-3 gap-2 h-24">
      {['Books', 'GSTR-2B', 'GSTR-3B'].map((source, i) => (
        <div key={i} className="bg-white/5 border border-white/10 rounded p-2 flex flex-col items-center justify-center gap-2">
          <div className="text-[8px] text-slate-500">{source}</div>
          <div className="text-xs font-bold text-white">₹1.2Cr</div>
          <Check className="w-3 h-3 text-teal-400" />
        </div>
      ))}
    </div>
    <div className="p-3 rounded-lg border border-teal-500/30 bg-teal-500/5 flex items-center justify-between">
      <div className="text-[9px] text-teal-200">All ITC Mapped & Verified</div>
      <ShieldCheck className="w-4 h-4 text-teal-400" />
    </div>
  </div>
);

const GraphicTDSRecon = () => (
  <div className="w-full h-full p-6 flex flex-col gap-3">
    <div className="text-[10px] font-mono text-blue-400 mb-2">TDS_COMPLIANCE_ENGINE</div>
    <div className="space-y-2">
      {[
        { section: '194C', status: 'Matched', color: 'text-teal-400' },
        { section: '194J', status: 'Short Deduction', color: 'text-red-400' },
        { section: '194I', status: 'Matched', color: 'text-teal-400' }
      ].map((item, i) => (
        <div key={i} className="flex justify-between items-center p-2 bg-white/5 border border-white/10 rounded">
          <span className="text-[10px] text-white font-mono">Sec {item.section}</span>
          <span className={`text-[9px] font-bold ${item.color}`}>{item.status}</span>
        </div>
      ))}
    </div>
    <div className="mt-2 text-[8px] text-slate-500 italic">Scanning 26AS vs Books...</div>
  </div>
);

const GraphicRiskGrader = () => (
  <div className="w-full h-full p-8 flex flex-col items-center justify-center gap-6">
    <div className="relative w-32 h-32">
      <svg className="w-full h-full transform -rotate-90">
        <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
        <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="364.4" strokeDashoffset="100" className="text-teal-500 shadow-[0_0_20px_rgba(45,212,191,0.5)]" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-white">72</span>
        <span className="text-[8px] text-slate-500 uppercase">Risk Score</span>
      </div>
    </div>
    <div className="text-center">
      <div className="text-teal-400 font-bold text-xs mb-1">Moderate Engagement Risk</div>
      <div className="text-[9px] text-slate-400">Based on 14 industry-specific parameters</div>
    </div>
  </div>
);

const GraphicConfirmation = () => (
  <div className="w-full h-full p-6 flex flex-col gap-4">
    <div className="text-[10px] font-mono text-purple-400 mb-2">EXTERNAL_CONFIRMATION_TRACKER</div>
    <div className="space-y-3">
      {[
        { party: 'HDFC Bank', type: 'Bank', status: 'Received', color: 'bg-teal-500' },
        { party: 'Reliance Ind.', type: 'Debtor', status: 'Pending', color: 'bg-yellow-500' },
        { party: 'Tata Motors', type: 'Creditor', status: 'Sent', color: 'bg-blue-500' }
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3 p-2 bg-white/5 border border-white/10 rounded">
          <div className={`w-2 h-2 rounded-full ${item.color}`} />
          <div className="flex-1">
            <div className="text-[10px] text-white">{item.party}</div>
            <div className="text-[8px] text-slate-500">{item.type}</div>
          </div>
          <div className="text-[9px] font-bold text-slate-300">{item.status}</div>
        </div>
      ))}
    </div>
  </div>
);

const GraphicPayroll = () => (
  <div className="w-full h-full p-6 flex flex-col gap-3">
    <div className="text-[10px] font-mono text-emerald-400 mb-2">PAYROLL_RECON_MODULE</div>
    <div className="space-y-2">
      <div className="flex justify-between text-[9px] text-slate-500 px-1">
        <span>Component</span>
        <span>Books vs EPF</span>
      </div>
      {['Basic + DA', 'HRA', 'PF Contrib'].map((label, i) => (
        <div key={i} className="flex justify-between items-center p-2 bg-white/5 border border-white/10 rounded">
          <span className="text-[10px] text-white">{label}</span>
          <div className="flex items-center gap-2">
            <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-full" />
            </div>
            <Check className="w-3 h-3 text-emerald-400" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const GraphicBankRecon = () => (
  <div className="w-full h-full p-6 flex flex-col gap-4">
    <div className="text-[10px] font-mono text-cyan-400 mb-2">BANK_STATEMENT_AUTO_RECON</div>
    <div className="flex-1 border border-dashed border-white/10 rounded-lg p-3 flex flex-col gap-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-scan"></div>
      {[
        { desc: 'Chq #10293', amt: '₹45,000', match: true },
        { desc: 'NEFT Inward', amt: '₹1,20,000', match: true },
        { desc: 'Bank Charges', amt: '₹250', match: false }
      ].map((item, i) => (
        <div key={i} className="flex justify-between items-center text-[9px]">
          <span className="text-slate-300">{item.desc}</span>
          <div className="flex items-center gap-2">
            <span className="text-white font-mono">{item.amt}</span>
            {item.match ? <Check className="w-3 h-3 text-teal-400" /> : <AlertTriangle className="w-3 h-3 text-red-400" />}
          </div>
        </div>
      ))}
    </div>
    <div className="text-[8px] text-slate-500 text-center uppercase tracking-widest">98% Auto-Matched</div>
  </div>
);

const GraphicAuditTrail = () => (
  <div className="w-full h-full p-6 flex flex-col gap-4">
    <div className="text-[10px] font-mono text-teal-400 mb-2">NFRA_COMPLIANT_AUDIT_TRAIL</div>
    <div className="space-y-3">
      {[
        { action: 'Data Ingested', user: 'System', time: '09:00 AM', status: 'Verified' },
        { action: 'Risk Scored', user: 'AI Agent', time: '09:02 AM', status: 'Verified' },
        { action: 'Partner Sign-off', user: 'P. Sharma', time: '04:30 PM', status: 'Finalized' }
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3 p-2 bg-white/5 border border-white/10 rounded">
          <div className="flex-1">
            <div className="text-[10px] text-white font-bold">{item.action}</div>
            <div className="text-[8px] text-slate-500">{item.user} • {item.time}</div>
          </div>
          <div className="text-[9px] font-bold text-teal-400">{item.status}</div>
        </div>
      ))}
    </div>
    <div className="mt-auto p-2 bg-teal-500/10 border border-teal-500/30 rounded text-center">
        <span className="text-[9px] text-teal-200 font-bold uppercase tracking-widest">Working Papers Generated</span>
    </div>
  </div>
);

const GraphicPortal = () => (
  <div className="w-full h-full p-6 flex flex-col gap-4">
    <div className="text-[10px] font-mono text-blue-400 mb-2">CLIENT_DOCUMENT_PORTAL</div>
    <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-3">
        <div className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="text-[10px] text-slate-400">Request: Bank Statements</span>
            <span className="text-[9px] text-teal-400 font-bold">80% Received</span>
        </div>
        <div className="space-y-2">
            {['HDFC_Current.pdf', 'SBI_Term_Loan.pdf'].map((file, i) => (
                <div key={i} className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/5">
                    <span className="text-[9px] text-white">{file}</span>
                    <Check className="w-3 h-3 text-teal-400" />
                </div>
            ))}
            <div className="flex items-center justify-between p-2 bg-red-500/5 rounded border border-red-500/20">
                <span className="text-[9px] text-red-200">ICICI_CC_Statement.pdf</span>
                <span className="text-[8px] text-red-400 font-bold">Pending</span>
            </div>
        </div>
    </div>
  </div>
);

const GraphicCalendar = () => (
  <div className="w-full h-full p-6 flex flex-col gap-4">
    <div className="text-[10px] font-mono text-orange-400 mb-2">COMPLIANCE_INTELLIGENCE_CALENDAR</div>
    <div className="grid grid-cols-7 gap-1">
      {[...Array(28)].map((_, i) => (
        <div key={i} className={`aspect-square rounded-sm border ${
          [7, 15, 22].includes(i) ? 'bg-orange-500/20 border-orange-500/50' : 'bg-white/5 border-white/10'
        }`} />
      ))}
    </div>
    <div className="space-y-2">
      <div className="flex items-center gap-2 p-2 bg-orange-500/10 border border-orange-500/30 rounded">
        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-ping" />
        <div className="text-[9px] text-orange-200">GST Filing Deadline: 2 Days Left</div>
      </div>
    </div>
  </div>
);

const features = [
  {
    id: 'tally',
    title: 'Schedule III Financials in Minutes',
    desc: 'Balance Sheet, P&L and Schedule III generated from Tally data in minutes — not days.',
    icon: <FileSpreadsheet className="w-6 h-6 text-teal-400" />,
    graphic: <GraphicScheduleIII />
  },
  {
    id: 'ledger',
    title: '13-Month Risk Mapping',
    desc: 'Every ledger transaction across 13 months risk-scored and flagged — zero sampling, zero misses.',
    icon: <ListChecks className="w-6 h-6 text-teal-400" />,
    graphic: <GraphicLedgerReview />
  },
  {
    id: 'recon',
    title: 'Automated Multi-Way Recon',
    desc: 'TDS, GST, payroll and bank reconciliations completed automatically — exceptions surfaced, nothing buried.',
    icon: <RefreshCw className="w-6 h-6 text-teal-400" />,
    graphic: <GraphicGSTRecon />
  },
  {
    id: 'portal',
    title: 'Unified Client Portal',
    desc: 'Client documents requested, tracked and received through one portal — no WhatsApp, no email chains.',
    icon: <LayoutDashboard className="w-6 h-6 text-teal-400" />,
    graphic: <GraphicPortal />
  },
  {
    id: 'audit',
    title: 'NFRA-Ready Audit Trail',
    desc: 'Full audit trail from data import to partner sign-off — NFRA-ready working papers generated automatically.',
    icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
    graphic: <GraphicAuditTrail />
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
                The five pillars of the RAPT XI agentic architecture.
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
        <div className="hidden lg:h-screen lg:sticky lg:top-0 lg:flex items-center justify-center">
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
                    Every Transaction. <span className="text-teal-400 font-medium">Scrutinised. Automatically.</span>
                </h2>
                <div className="relative mx-auto w-full max-w-5xl">
                    <div className="relative transform transition-all duration-700 hover:scale-[1.02]">
                        <div className="bg-[#0a0a0a] rounded-2xl p-4 border border-white/10 shadow-[0_0_100px_rgba(45,212,191,0.1)] relative z-20">
                            <div className="bg-[#050505] rounded-xl overflow-hidden relative border border-white/5 shadow-2xl">
                                <div className="h-12 bg-[#0f0f0f] flex items-center px-6 border-b border-white/10 justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                                        </div>
                                        <span className="text-[10px] text-teal-500 font-mono tracking-widest uppercase">Transaction_Review_Module</span>
                                    </div>
                                    <div className="text-[10px] text-slate-500 font-mono">SCAN_ID: 0x8FA...42</div>
                                </div>
                                <div className="p-8 space-y-4 font-sans">
                                    {/* Row 1 */}
                                    <div className="flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-all group">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-white font-medium">Related Party Transfer</span>
                                            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Voucher #JV-0291</span>
                                        </div>
                                        <div className="flex items-center gap-8">
                                            <span className="text-sm font-bold text-white">Rs. 8,00,000</span>
                                            <div className="flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/30 rounded-full">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                                                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">Matched</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-all group">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-white font-medium">Advance to Supplier</span>
                                            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Voucher #CP-1102</span>
                                        </div>
                                        <div className="flex items-center gap-8">
                                            <span className="text-sm font-bold text-white">Rs. 12,50,000</span>
                                            <div className="flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/30 rounded-full">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                                                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">Matched</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 3 - Warning */}
                                    <div className="flex items-center justify-between p-5 bg-red-500/5 border border-red-500/30 rounded-xl shadow-[0_0_30px_rgba(239,68,68,0.05)] animate-pulse-subtle">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-white font-medium">Round Figure Entry</span>
                                                <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                                            </div>
                                            <span className="text-[10px] text-red-200/60 font-mono">
                                                No narration — Period end posting
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-8">
                                            <span className="text-sm font-bold text-red-400">Rs. 5,00,000</span>
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-2 px-3 py-1 bg-red-500/20 border border-red-500/40 rounded-full">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                                                    <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">Warning</span>
                                                </div>
                                                <button className="bg-red-500 hover:bg-red-600 text-black text-[10px] font-black px-4 py-2 rounded-lg uppercase tracking-tight transition-all shadow-lg shadow-red-500/20">
                                                    Flag For Review
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-10 bg-[#0f0f0f] border-t border-white/5 flex items-center px-6">
                                    <div className="flex items-center gap-2 text-[9px] text-slate-500 font-mono">
                                        <Activity className="w-3 h-3 text-teal-500" />
                                        <span>AI AGENT SCANNING IN PROGRESS...</span>
                                        <span className="animate-pulse">_</span>
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
