import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Terminal, Sparkles, Cpu, ShieldCheck } from 'lucide-react';
import { generateRaptResponse } from '../services/gemini';
import { Message } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "RAPT Xi Command Interface initialized. Secure node established. How can I assist with your firm's compliance or audit workflows today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [status, setStatus] = useState<'IDLE' | 'THINKING' | 'SYNCING'>('IDLE');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);
    setStatus('THINKING');

    try {
      const response = await generateRaptResponse(userMsg);
      setMessages(prev => [...prev, { role: 'model', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', content: "CRITICAL ERROR: Connection to RAPT Core lost. Please re-authenticate." }]);
    } finally {
      setIsTyping(false);
      setStatus('IDLE');
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative w-14 h-14 bg-black border border-teal-500/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:shadow-[0_0_50px_rgba(20,184,166,0.5)] hover:scale-110 transition-all duration-500"
        >
          {/* Animated rings around the button */}
          <div className="absolute inset-0 border border-teal-500/20 rounded-full animate-ping opacity-20"></div>
          <div className="absolute inset-[-4px] border border-teal-500/10 rounded-full animate-pulse"></div>
          
          <div className="relative z-10">
            <Cpu className="w-6 h-6 text-teal-400 group-hover:rotate-90 transition-transform duration-500" />
          </div>
          
          {/* Status Indicator */}
          <div className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-teal-500 border-2 border-black"></span>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[400px] h-[600px] bg-[#020617]/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_30px_120px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
          
          {/* Header - Agent Identity */}
          <div className="p-6 bg-gradient-to-b from-white/5 to-transparent border-b border-white/10 flex items-center justify-between relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-teal-500/10 border border-teal-500/30 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(20,184,166,0.2)] overflow-hidden">
                  <Terminal className="w-6 h-6 text-teal-400" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent animate-pulse"></div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-black border border-white/10 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div>
                <div className="text-sm font-black text-white tracking-[0.2em] uppercase flex items-center gap-2">
                  RAPT <span className="text-teal-400 italic">XI</span>
                  <span className="px-1.5 py-0.5 rounded bg-teal-500/10 border border-teal-500/20 text-[8px] text-teal-400 font-mono">V2.5</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[9px] text-slate-500 font-mono font-bold tracking-widest uppercase">
                    {status === 'IDLE' ? 'SYSTEM_STABLE' : 'PROCESSING_QUERY'}
                  </span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)} 
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all border border-transparent hover:border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Neural Activity Strip */}
          <div className="px-6 py-2.5 bg-black/40 border-b border-white/5 flex items-center justify-between text-[9px] font-mono text-slate-500 tracking-tighter">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3 text-teal-500/70" /> ENCRYPTED</span>
              <span className="flex items-center gap-1.5"><Cpu className="w-3 h-3 text-teal-500/70" /> NEURAL_LINK</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-20 h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-teal-500/40 w-[65%] animate-pulse"></div>
              </div>
              <span>65% LOAD</span>
            </div>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.02),transparent_70%)]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`group relative max-w-[85%] p-5 rounded-3xl text-[13px] leading-relaxed transition-all duration-300 ${
                  msg.role === 'user' 
                  ? 'bg-white text-black font-bold shadow-[0_10px_30px_rgba(255,255,255,0.1)] rounded-br-none' 
                  : 'bg-[#0a101f] border border-white/10 text-slate-300 rounded-bl-none hover:bg-[#0f172a] shadow-xl'
                }`}>
                  {msg.content}
                  
                  {/* Status dots for model messages */}
                  {msg.role === 'model' && (
                    <div className="absolute -top-1 -left-1 flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500/50"></div>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-2.5 px-1">
                  <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest font-bold">
                    {msg.role === 'user' ? 'CA_PARTNER_NODE' : 'RAPT_XI_CORE'}
                  </span>
                  <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
                  <span className="text-[8px] font-mono text-slate-700">08:40:19</span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex flex-col items-start">
                <div className="bg-[#0a101f] border border-white/10 p-5 rounded-3xl rounded-bl-none flex items-center gap-3 shadow-xl">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <span className="text-[10px] font-mono text-teal-500/70 font-bold tracking-widest uppercase">ANALYZING_LEDGER...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Interface */}
          <div className="p-6 bg-gradient-to-t from-black/80 to-transparent border-t border-white/10 backdrop-blur-3xl">
            <div className="relative flex items-center group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Request audit analysis..."
                className="relative w-full bg-black/80 border border-white/10 rounded-2xl pl-12 pr-14 py-4 text-[13px] text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500/50 transition-all font-mono"
              />
              <Terminal className="absolute left-4 w-4 h-4 text-slate-600 group-focus-within:text-teal-500 transition-colors" />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="absolute right-2.5 p-2.5 bg-teal-500 text-black rounded-xl hover:bg-teal-400 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[0_0_20px_rgba(20,184,166,0.4)]"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-4 flex justify-between items-center text-[9px] font-mono text-slate-700 tracking-[0.2em] uppercase font-bold">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500/20"></div>
                <span>SECURE_SESSION_ACTIVE</span>
              </div>
              <span>© 2026 RAPT</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;