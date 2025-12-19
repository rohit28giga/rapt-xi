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
          className="group relative w-16 h-16 bg-black border border-teal-500/50 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:shadow-[0_0_50px_rgba(20,184,166,0.5)] hover:scale-110 transition-all duration-500"
        >
          {/* Animated rings around the button */}
          <div className="absolute inset-0 border border-teal-500/20 rounded-2xl animate-ping opacity-20"></div>
          <div className="absolute inset-[-4px] border border-teal-500/10 rounded-2xl animate-pulse"></div>
          
          <Cpu className="w-7 h-7 text-teal-400 group-hover:rotate-90 transition-transform duration-500" />
          
          <div className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-teal-500"></span>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[380px] h-[550px] bg-[#020617]/90 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_20px_100px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
          
          {/* Header - Terminal Style */}
          <div className="p-5 bg-white/5 border-b border-white/10 flex items-center justify-between relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-teal-500/10 border border-teal-500/30 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                <Terminal className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <div className="text-xs font-black text-white tracking-[0.2em] uppercase">RAPT <span className="text-teal-400">Xi</span></div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${status === 'IDLE' ? 'bg-teal-500' : 'bg-yellow-500 animate-pulse'}`}></div>
                  <span className="text-[9px] text-slate-400 font-mono font-bold tracking-widest uppercase">
                    {status === 'IDLE' ? 'NODE_ACTIVE' : 'COMPUTE_ACTIVE'}
                  </span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)} 
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* System Metrics Strip */}
          <div className="px-5 py-2 bg-black/40 border-b border-white/5 flex items-center justify-between text-[8px] font-mono text-slate-500 tracking-tighter">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1"><ShieldCheck className="w-2.5 h-2.5" /> SECURE_TLS_1.3</span>
              <span className="flex items-center gap-1"><Sparkles className="w-2.5 h-2.5" /> AGENTIC_MOD_ON</span>
            </div>
            <span>LATENCY: 14ms</span>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`group relative max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed transition-all duration-300 ${
                  msg.role === 'user' 
                  ? 'bg-teal-500 text-black font-bold shadow-[0_4px_20px_rgba(20,184,166,0.3)] rounded-br-none' 
                  : 'bg-white/5 border border-white/10 text-slate-300 rounded-bl-none hover:bg-white/[0.08]'
                }`}>
                  {msg.content}
                  
                  {/* Decorative corner accent for model messages */}
                  {msg.role === 'model' && (
                    <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-teal-500/50"></div>
                  )}
                </div>
                <span className="text-[8px] font-mono text-slate-600 mt-2 uppercase tracking-widest">
                  {msg.role === 'user' ? 'AUTH_USER' : 'RAPT_XI'}
                </span>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex flex-col items-start">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-bl-none flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-1 h-1 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1 h-1 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <span className="text-[10px] font-mono text-teal-500/70 ml-2">THINKING_IN_PROGRESS...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Interface */}
          <div className="p-5 bg-white/5 border-t border-white/10 backdrop-blur-3xl">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Request audit analysis..."
                className="w-full bg-black/60 border border-white/10 rounded-2xl pl-10 pr-12 py-3.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all font-mono"
              />
              <Terminal className="absolute left-3.5 w-4 h-4 text-slate-600" />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="absolute right-2 p-2 bg-teal-500 text-black rounded-xl hover:bg-teal-400 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[0_0_15px_rgba(20,184,166,0.3)]"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3 flex justify-between items-center text-[8px] font-mono text-slate-700 tracking-widest uppercase">
              <span>RAPT_XI_V2.5_FLASH</span>
              <span>© RAPT TECHNOLOGIES</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;