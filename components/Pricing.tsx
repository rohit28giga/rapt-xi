import React from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: "Pilot",
    price: "Pay-as-you-go",
    description: "Perfect for individual audits or trial runs.",
    features: [
      "Full Agent Access",
      "Standard Processing Speed",
      "Basic Document Parsing",
      "Email Support",
      "10GB Secure Storage"
    ],
    cta: "Start Free Trial"
  },
  {
    name: "Professional",
    price: "$149",
    description: "For growing firms needing daily automation.",
    features: [
      "Unlimited Agent Queries",
      "Priority Processing (Flash)",
      "Advanced Ledger Integration (Xero/QB)",
      "Dedicated Account Manager",
      "Unlimited Storage",
      "Custom Reporting Templates"
    ],
    highlighted: true,
    cta: "Get Professional"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full scale deployment for major firms.",
    features: [
      "Custom Agent Training",
      "On-Premise Deployment Options",
      "SSO & Advanced Security",
      "API Access",
      "24/7 Priority Support",
      "White-label Portal"
    ],
    cta: "Contact Sales"
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative">
       {/* Background Glass Layer */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl font-medium text-white mb-6">
            Flexible Pricing
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Scale your AI workforce as your client base grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`reveal-on-scroll relative rounded-2xl p-8 border transition-all duration-300 flex flex-col backdrop-blur-md ${
                tier.highlighted 
                  ? 'bg-white/5 border-teal-500/50 z-10 shadow-[0_0_30px_rgba(45,212,191,0.1)]' 
                  : 'bg-[#0a0a0a]/40 border-white/10 hover:border-white/20'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-500 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  {tier.price !== 'Custom' && tier.price !== 'Pay-as-you-go' && <span className="text-slate-500 text-sm">/mo</span>}
                </div>
                <p className="text-slate-400 text-sm">{tier.description}</p>
              </div>

              <div className="flex-grow mb-8">
                <ul className="space-y-4">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-teal-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-3 rounded-lg font-semibold text-sm transition-all ${
                tier.highlighted 
                  ? 'bg-white text-black hover:bg-slate-200' 
                  : 'border border-white/20 hover:bg-white hover:text-black text-white'
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;