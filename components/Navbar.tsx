import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
    { label: 'Features', href: '#features', isRoute: false }, 
    { label: 'Team', href: '/team', isRoute: true } 
];

const Navbar = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, item) => {
    setMobileMenuOpen(false);
    if (item.isRoute) {
        e.preventDefault();
        onNavigate(item.href);
    } else {
        // Only if we are on the home page, scroll. Otherwise navigate home first.
        const currentPath = window.location.pathname; // This might be handled by App state
        // Since we are using state-based routing in App.tsx:
        onNavigate('/');
        setTimeout(() => {
            const target = document.getElementById(item.href.substring(1));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl border-white/10 py-4 shadow-2xl top-0' : 'bg-[#020617]/50 backdrop-blur-md py-7 top-[32px]'
      }`}
    >
      <div className="w-[90%] xl:w-[75%] mx-auto grid grid-cols-2 md:grid-cols-12 items-center">
        
        {/* Logo */}
        <div className="md:col-span-3 flex items-center cursor-pointer select-none" onClick={() => onNavigate('/')}>
          <div className="flex items-center gap-1.5 group">
            <span className="text-2xl font-black tracking-tighter text-white uppercase font-sans">
              RAPT
            </span>
            <span className="text-2xl font-black tracking-tighter text-teal-400 uppercase font-sans drop-shadow-[0_0_15px_rgba(45,212,191,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(45,212,191,0.8)] transition-all">
              XI
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex md:col-span-6 justify-center items-center gap-12">
          {navItems.map((item) => (
            <a 
                key={item.label} 
                href={item.href} 
                onClick={(e) => handleLinkClick(e, item)}
                className="text-slate-400 hover:text-white text-sm font-semibold tracking-wide transition-all hover:scale-105"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex md:col-span-3 justify-end items-center">
          <button className="group relative bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-md text-white px-7 py-2.5 rounded-lg text-sm font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(45,212,191,0.2)] flex items-center gap-2">
            Book a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform opacity-80" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex justify-end">
          <button className="text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 p-8 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => (
            <a 
                key={item.label} 
                href={item.href} 
                onClick={(e) => handleLinkClick(e, item)}
                className="text-slate-300 hover:text-white text-xl font-bold tracking-tight" 
            >
              {item.label}
            </a>
          ))}
          <hr className="border-white/10" />
          <button className="w-full bg-teal-600 hover:bg-teal-500 text-white py-4 rounded-xl font-black transition-colors">
            Book a Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;