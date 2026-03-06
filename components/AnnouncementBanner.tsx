
import React from 'react';
import { ChevronRight } from 'lucide-react';

const AnnouncementBanner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-white/20 backdrop-blur-3xl py-2.5 md:py-2 px-6 flex items-center justify-center z-[70] border-b border-white/30 min-h-[32px] md:h-[32px]">
      <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 text-white text-center">
        <span className="text-[10px] md:text-xs font-sans font-medium tracking-wide text-white drop-shadow-sm">
          Early access open for CA firms — Founders Plan closing soon.
        </span>
        <a 
          href="https://forms.gle/fABebj1XbMeUsK8H6" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[10px] md:text-xs font-bold text-teal-300 hover:text-white transition-colors group drop-shadow-sm"
        >
          Apply Now
          <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
