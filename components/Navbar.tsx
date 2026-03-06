import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
    { label: 'Features', href: '#features', isRoute: false, isExternal: false }, 
    { label: 'Product', href: 'https://claude.ai/public/artifacts/22c1f2e6-6895-49a6-9153-daac3939c5d8', isRoute: false, isExternal: true },
    { label: 'Team', href: '/team', isRoute: true, isExternal: false } 
];

const Navbar = ({ onNavigate, currentRoute = '/' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isFloating = scrolled || currentRoute !== '/';

  const handleLinkClick = (e, item) => {
    if (item.isExternal) return; // Let default anchor behavior happen
    
    setMobileMenuOpen(false);
    if (item.isRoute) {
        e.preventDefault();
        onNavigate(item.href);
    } else {
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
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-in-out ${
        isFloating 
          ? 'top-[44px] w-[90%] md:w-[80%] xl:w-[70%] bg-white/[0.06] backdrop-blur-3xl border border-white/20 py-3 md:py-4 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3),0_0_30px_rgba(255,255,255,0.05)]' 
          : 'top-[32px] w-full bg-transparent py-5 md:py-8 border-b border-white/5'
      }`}
    >
      <div className={`mx-auto flex items-center justify-between transition-all duration-700 ${isFloating ? 'px-8 md:px-12 w-full' : 'w-[92%] xl:w-[75%] px-0'}`}>
        
        {/* Logo */}
        <div className="flex items-center cursor-pointer select-none" onClick={() => onNavigate('/')}>
          <div className="flex items-center h-[22px] md:h-[26px]">
            <span className="text-[22px] md:text-[26px] font-medium font-sans lowercase leading-none flex items-center tracking-tight text-white">
              rapt
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-center gap-10 lg:gap-14 transition-all duration-700">
          {navItems.map((item) => (
            <a 
                key={item.label} 
                href={item.href} 
                onClick={(e) => handleLinkClick(e, item)}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="text-white/80 hover:text-white text-[14px] font-medium tracking-wide transition-all hover:scale-110"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <button 
            onClick={() => onNavigate('/contact')}
            className={`group relative bg-white text-black hover:bg-teal-400 hover:text-white rounded-full font-bold transition-all shadow-xl flex items-center gap-2 ${isFloating ? 'px-6 py-2 text-[12px]' : 'px-8 py-3 text-sm'}`}
          >
            Book a Demo
            <ArrowRight className={`${isFloating ? 'w-4 h-4' : 'w-5 h-5'} group-hover:translate-x-1 transition-transform`} />
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/10 p-8 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-4 duration-300 rounded-b-3xl">
          {navItems.map((item) => (
            <a 
                key={item.label} 
                href={item.href} 
                onClick={(e) => handleLinkClick(e, item)}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="text-white hover:text-teal-400 text-xl font-bold tracking-tight" 
            >
              {item.label}
            </a>
          ))}
          <hr className="border-white/10" />
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('/contact');
            }}
            className="w-full bg-teal-600 hover:bg-teal-500 text-white py-4 rounded-xl font-black transition-colors"
          >
            Book a Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;