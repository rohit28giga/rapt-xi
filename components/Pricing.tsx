import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

interface PricingOption {
  partners: string;
  price: string;
  label: string;
}

interface PricingCardData {
  id: string;
  name: string;
  options: PricingOption[];
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const pricingData: PricingCardData[] = [
  {
    id: 'solo',
    name: 'Solo',
    options: [
      { partners: '1 Partner', price: 'Rs. 18,000', label: '1 Partner' }
    ],
    features: [
      "Full audit workflow automation",
      "Unlimited clients",
      "Priority support"
    ],
    cta: "Get Started"
  },
  {
    id: 'boutique',
    name: 'Boutique',
    options: [
      { partners: '2 to 3 Partners', price: 'Rs. 25,000', label: '2-3 Partners' },
      { partners: '4 to 5 Partners', price: 'Rs. 38,000', label: '4-5 Partners' }
    ],
    features: [
      "Everything in Solo",
      "Multi-partner collaboration",
      "Advanced reconciliations"
    ],
    cta: "Get Started",
    highlighted: true
  },
  {
    id: 'professional',
    name: 'Professional',
    options: [
      { partners: '6 to 10 Partners', price: 'Rs. 72,000', label: '6-10 Partners' },
      { partners: '11 to 20 Partners', price: 'Rs. 1,00,000', label: '11-20 Partners' }
    ],
    features: [
      "Everything in Boutique",
      "Complete compliance suite",
      "Dedicated onboarding"
    ],
    cta: "Get Started"
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    options: [
      { partners: '21+ Partners', price: 'Custom Pricing', label: '21+ Partners' }
    ],
    features: [
      "Everything in Professional",
      "Custom workflows",
      "White-glove support"
    ],
    cta: "Contact Sales"
  }
];

const Pricing: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, number>>({
    boutique: 0,
    professional: 0
  });

  const handleOptionChange = (cardId: string, index: number) => {
    setSelectedOptions(prev => ({ ...prev, [cardId]: index }));
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
       {/* Background Glass Layer */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl font-medium text-white mb-6">
            Partner-Based Pricing
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Scale your AI workforce according to your firm's size and partnership structure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((card, idx) => {
            const selectedIdx = selectedOptions[card.id] || 0;
            const currentOption = card.options[selectedIdx];
            const hasMultipleOptions = card.options.length > 1;

            return (
              <div 
                key={card.id} 
                className={`reveal-on-scroll relative rounded-2xl p-6 border transition-all duration-500 flex flex-col backdrop-blur-md group ${
                  card.highlighted 
                    ? 'bg-white/5 border-teal-500/50 z-10 shadow-[0_0_40px_rgba(45,212,191,0.15)]' 
                    : 'bg-[#0a0a0a]/40 border-white/10 hover:border-white/20'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {card.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-500 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{card.name}</h3>
                  
                  {/* Price Display */}
                  <div className="mb-6 min-h-[60px] flex flex-col justify-center">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-white tracking-tight">
                        {currentOption.price}
                      </span>
                      {currentOption.price.includes('Rs.') && (
                        <span className="text-slate-500 text-xs font-medium">/year</span>
                      )}
                    </div>
                    <div className="text-slate-400 text-[10px] uppercase tracking-widest mt-1 font-mono">
                      {currentOption.partners}
                    </div>
                  </div>

                  {/* Partner Selector */}
                  {hasMultipleOptions && (
                    <div className="flex p-1 bg-white/5 rounded-xl border border-white/10 mb-2">
                      {card.options.map((option, oIdx) => (
                        <button
                          key={oIdx}
                          onClick={() => handleOptionChange(card.id, oIdx)}
                          className={`flex-1 py-2 px-1 text-[9px] font-bold rounded-lg transition-all duration-300 ${
                            selectedIdx === oIdx 
                              ? 'bg-teal-500 text-black shadow-lg shadow-teal-500/20' 
                              : 'text-slate-400 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {option.label.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex-grow mb-8">
                  <ul className="space-y-4">
                    {card.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-[13px] text-slate-300 leading-snug">
                        <div className="mt-1 bg-teal-500/10 p-0.5 rounded-full">
                          <Check className="w-3 h-3 text-teal-500 shrink-0" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  card.highlighted 
                    ? 'bg-white text-black hover:bg-teal-500 hover:text-black hover:scale-[1.02] active:scale-[0.98]' 
                    : 'border border-white/10 hover:border-white/30 hover:bg-white/5 text-white active:scale-[0.98]'
                }`}>
                  {card.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;