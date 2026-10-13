import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  X, 
  Sparkles, 
  Unlock, 
  Check, 
  ShieldCheck, 
  KeyRound, 
  Instagram, 
  Flame,
  ArrowRight
} from 'lucide-react';
import { Bundle, SiteSettings } from '../types/index.js';
import { openInstagram } from '../utils/api.js';

interface SteamUnlockScrollPopupProps {
  settings: SiteSettings;
  steamUnlockBundle?: Bundle | null;
  onSelectBundle?: (bundle: Bundle) => void;
}

export const SteamUnlockScrollPopup: React.FC<SteamUnlockScrollPopupProps> = ({
  settings,
  steamUnlockBundle,
  onSelectBundle
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Show popup after scrolling past 380px OR after 6 seconds of browsing
    const handleScroll = () => {
      if (!isDismissed && window.scrollY > 380) {
        setIsVisible(true);
      }
    };

    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 6000);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [isDismissed]);

  const handleUnlockBundle = () => {
    if (steamUnlockBundle && onSelectBundle) {
      onSelectBundle(steamUnlockBundle);
    } else {
      openInstagram(
        settings.instagramUrl,
        'Hi! I want to get the ₹449 Steam Unlock Bundle and add ANY game to my personal Steam account instantly.',
        449
      );
    }
  };

  const handleSingleGameIdPass = () => {
    openInstagram(
      settings.instagramUrl,
      'Hi! I want to get a single game Steam Account ID & Password for just ₹80.',
      80
    );
  };

  if (!isVisible && !isMinimized) return null;

  // Minimized pill state
  if (isMinimized) {
    return (
      <div className="fixed bottom-20 md:bottom-6 right-3 sm:right-6 z-40 animate-in fade-in slide-in-from-bottom-2">
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          className="group px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-black text-xs font-gaming flex items-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.5)] border border-amber-300 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <Zap className="w-4 h-4 fill-black text-black animate-bounce" />
          <span>⚡ ₹449 STEAM UNLOCK • ADD ANY GAME</span>
        </button>
      </div>
    );
  }

  return (
    <aside 
      aria-label="Steam Unlock Special Offer"
      className="fixed bottom-20 md:bottom-6 right-3 sm:right-6 z-40 max-w-[390px] w-full transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 pointer-events-auto"
    >
      <div className="relative overflow-hidden rounded-3xl border-2 border-amber-500/70 bg-gradient-to-b from-[#0b1020]/98 via-[#070b16]/98 to-[#05060a]/98 p-5 shadow-[0_15px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(245,158,11,0.35)] backdrop-blur-2xl">
        
        {/* Glow decoration */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-500/25 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-orange-600/20 rounded-full blur-xl pointer-events-none" />

        {/* Top controls: close & minimize */}
        <div className="flex items-center justify-between mb-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[11px] font-black uppercase font-gaming tracking-wide">
            <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400 animate-pulse" />
            <span>INSTANT ONE-TIME OFFER</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setIsMinimized(true)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-[10px] font-bold px-2 cursor-pointer"
              title="Minimize offer"
            >
              Minimize
            </button>
            <button
              type="button"
              onClick={() => {
                setIsVisible(false);
                setIsDismissed(true);
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close offer popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-2.5">
          <h3 className="text-base sm:text-lg font-black text-white font-gaming leading-tight">
            ADD ANY GAMES & PLAY IN ONE-TIME PAYMENT <span className="text-amber-400 underline decoration-amber-400 underline-offset-2">₹449</span>!
          </h3>

          <p className="text-xs text-slate-200 leading-relaxed font-medium">
            Get <span className="text-amber-400 font-bold">Steam Unlock</span> & add <span className="text-white font-bold">ANY PC game</span> of your choice directly to your personal Steam account instantly!
          </p>

          {/* Key perks */}
          <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-300 font-semibold py-1">
            <div className="flex items-center gap-1.5 bg-black/50 border border-amber-500/20 px-2 py-1.5 rounded-xl">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Lifetime Validity</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/50 border border-amber-500/20 px-2 py-1.5 rounded-xl">
              <Unlock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>60,000+ Games</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/50 border border-amber-500/20 px-2 py-1.5 rounded-xl">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Personal Account</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/50 border border-amber-500/20 px-2 py-1.5 rounded-xl">
              <KeyRound className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Single Game ₹80</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-2 pt-1">
            <button
              type="button"
              onClick={handleUnlockBundle}
              className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 active:scale-98 text-black font-black text-xs font-gaming uppercase tracking-wide flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-black text-black" />
              <span>Get Steam Unlock Bundle • ₹449</span>
            </button>

            <button
              type="button"
              onClick={handleSingleGameIdPass}
              className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <KeyRound className="w-3.5 h-3.5 text-amber-400" />
              <span>Or Get Single Game ID & Pass • ₹80</span>
            </button>
          </div>
        </div>

      </div>
    </aside>
  );
};
