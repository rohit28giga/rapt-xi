
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import TeamSection from './components/TeamSection';
import ChatBot from './components/ChatBot';
import Pricing from './components/Pricing';
import AnnouncementBanner from './components/AnnouncementBanner';
import ContactUs from './components/ContactUs';
import { FeaturesSection, CoreAdvantageSection } from './components/FeaturesAndPricing';

// --- ENHANCED GLOBAL NEURAL BACKGROUND (Continuous Canvas Neural Network) ---
const GlobalNeuralBackground = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 100;
    const connectionDistance = 180;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      isAIPoint: boolean;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = (Math.random() - 0.5) * 0.25;
        this.size = Math.random() * 1.5 + 0.5;
        this.isAIPoint = Math.random() > 0.92; // Brighter "AI" nodes
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.isAIPoint ? this.size * 1.5 : this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.isAIPoint ? 'rgba(45, 212, 191, 0.8)' : 'rgba(255, 255, 255, 0.3)';
        if (this.isAIPoint) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#2dd4bf';
        } else {
            ctx.shadowBlur = 0;
        }
        ctx.fill();
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.12})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach(p => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020617]">
      {/* Deep Glossy Base Gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#020617] via-[#050a1a] to-[#020617]"></div>
      
      {/* Large Glossy Orbs - Muted for focus */}
      <div className="absolute top-[-10%] left-[-5%] w-[1000px] h-[1000px] bg-teal-500/5 blur-[180px] rounded-full animate-float opacity-30"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[1000px] h-[1000px] bg-indigo-500/5 blur-[180px] rounded-full animate-float opacity-30" style={{ animationDelay: '4s' }}></div>
      
      {/* Continuous Neural Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />
      
      {/* Floating Shiny Particles (Static SVG for extra depth) */}
      {[...Array(20)].map((_, i) => (
          <div 
              key={i}
              className="absolute bg-white rounded-full blur-[0.5px] animate-float opacity-10"
              style={{
                  width: Math.random() * 1.5 + 'px',
                  height: Math.random() * 1.5 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animationDuration: (Math.random() * 15 + 15) + 's',
                  animationDelay: (Math.random() * 10) + 's'
              }}
          />
      ))}
    </div>
  );
};

const TrustedBy = () => (
  <section className="py-10 border-y border-white/5 relative z-10 bg-transparent">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-8">
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]">Authorized for High-Security Firms:</span>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 hover:opacity-100 transition-opacity duration-700">
            <span className="font-bold text-white text-xl tracking-tight">KPMG<span className="font-light opacity-30">.digital</span></span>
            <span className="font-bold text-white text-xl tracking-tight">Fin<span className="font-light opacity-30">Audit</span></span>
            <span className="font-bold text-white text-xl tracking-tight">ACCU<span className="font-light opacity-30">RATE</span></span>
            <span className="font-bold text-white text-xl tracking-tight">Ledger<span className="font-light opacity-30">AI</span></span>
        </div>
    </div>
  </section>
);

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState('/');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const initObserver = () => {
        document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    };

    setTimeout(initObserver, 200);
    return () => observer.disconnect();
  }, [currentRoute]);

  const handleNavigate = (path: string) => {
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white font-sans selection:bg-teal-500/40 relative bg-transparent">
      <GlobalNeuralBackground />
      
      <AnnouncementBanner />
      <Navbar onNavigate={handleNavigate} />
      
      <main className="relative z-10">
        {currentRoute === '/team' ? (
          <TeamSection />
        ) : currentRoute === '/contact' ? (
          <ContactUs />
        ) : (
          <>
            <Hero onNavigate={handleNavigate} />
            <TrustedBy />
            <div id="features">
              <FeaturesSection />
            </div>
            <CoreAdvantageSection />
            <div id="pricing">
              <Pricing />
            </div>
          </>
        )}
      </main>
      
      <ChatBot />
      <Footer />
    </div>
  );
};

export default App;
