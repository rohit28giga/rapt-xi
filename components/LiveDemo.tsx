import React, { useState, useRef, useEffect } from 'react';
import { generateRaptResponse } from '../services/gemini';
import { Message, DemoStatus } from '../types';
import { Send, Loader2, Terminal, RefreshCw } from 'lucide-react';

const LiveDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "RAPT Agent Online. I am connected to the demo ledger. Ask me to analyze expenses, check compliance, or draft a summary." }
  ]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<DemoStatus>(DemoStatus.IDLE);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || status === DemoStatus.PROCESSING) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setStatus(DemoStatus.PROCESSING);

    const response = await generateRaptResponse(userMsg);

    setMessages(prev => [...prev, { role: 'model', content: response }]);
    setStatus(DemoStatus.COMPLETED);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetDemo = () => {
    setMessages([
        { role: 'model', content: "RAPT Agent Online. I am connected to the demo ledger. Ask me to analyze expenses, check compliance, or draft a summary." }
    ]);
    setStatus(DemoStatus.IDLE);
  };

  return (
    <section className="py-24 relative border-b border-white/5">
       {/* Background Glass Layer */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] -z-10"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">Experience the Speed</h2>
          <p className="text-slate-400">Interact with a live RAPT agent instance below.</p>
        </div>

        <div className="reveal-on-scroll rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl flex flex-col h-[500px]">
            {/* Terminal Header */}
            <div className="bg-[#111]/80 px-4 py-2 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                    <Terminal className="w-3 h-3" />
                    rapt-agent-v2.5-flash --secure
                </div>
                <button onClick={resetDemo} className="text-slate-600 hover:text-white transition-colors" title="Reset Session">
                    <RefreshCw className="w-4 h-4" />
                </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-6 overflow-y-auto font-mono text-sm space-y-6 bg-[#050505]/50">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.role === 'model' && (
                            <div className="w-8 h-8 rounded flex-shrink-0 bg-white/5 border border-white/10 flex items-center justify-center text-teal-500">
                                <Terminal className="w-4 h-4" />
                            </div>
                        )}
                        <div className={`max-w-[80%] rounded-lg p-3 border ${
                            msg.role === 'user' 
                            ? 'bg-white/10 border-white/5 text-white' 
                            : 'bg-[#111]/80 border-white/5 text-slate-300'
                        }`}>
                            <div className="whitespace-pre-wrap leading-relaxed">{msg.content}</div>
                        </div>
                    </div>
                ))}
                {status === DemoStatus.PROCESSING && (
                    <div className="flex gap-4 justify-start">
                        <div className="w-8 h-8 rounded flex-shrink-0 bg-white/5 border border-white/10 flex items-center justify-center text-teal-500">
                            <Loader2 className="w-4 h-4 animate-spin" />
                        </div>
                        <div className="bg-[#111]/80 border border-white/5 rounded-lg p-3">
                            <span className="text-teal-500 animate-pulse">Processing ledger data...</span>
                        </div>
                    </div>
                )}
                <div ref={bottomRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#111]/80 border-t border-white/5">
                <div className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask RAPT to analyze data..."
                        className="w-full bg-[#050505]/50 text-white border border-white/10 rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:border-teal-500/50 transition-all font-mono text-sm placeholder:text-slate-700"
                        autoComplete="off"
                    />
                    <button 
                        onClick={handleSend}
                        disabled={!input.trim() || status === DemoStatus.PROCESSING}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed p-1 transition-colors"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;