import React, { useState, useEffect } from 'react';
import { Instagram, Sparkles, Gamepad2, ArrowUp } from 'lucide-react';
import { SiteSettings } from '../types/index.js';
import { openInstagram } from '../utils/api.js';

interface MobileQuickBarProps {
  settings: SiteSettings;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ settings }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling past 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 z-30 transition-all duration-300 animate-in fade-in slide-in-from-bottom-3 pointer-events-auto">
      <div className="glass-panel p-2.5 rounded-2xl border border-amber-500/40 bg-[#070a14]/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(245,158,11,0.25)] flex items-center justify-between gap-2">
        <a
          href="#single-games"
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs font-bold active:scale-95 transition-all shrink-0"
        >
          <Gamepad2 className="w-3.5 h-3.5 text-amber-400" />
          <span>From ₹80</span>
        </a>

        <button
          type="button"
          onClick={() => openInstagram(settings.instagramUrl)}
          className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 active:scale-95 text-black font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all cursor-pointer"
        >
          <Instagram className="w-3.5 h-3.5 text-black" />
          <span className="truncate">Order on Instagram</span>
        </button>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white active:scale-95 transition-colors shrink-0"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
