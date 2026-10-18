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
import { navigateToChannel } from '../utils/channelRedirect.js';

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
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth < 768;
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Monitor resize so popup is strictly disabled on mobile devices
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Only run on desktop screens (>= 768px)
    if (isMobile || isDismissed) return;

    const checkWidthAndScroll = () => {
      if (typeof window === 'undefined' || window.innerWidth < 768) return;
      if (!isDismissed && window.scrollY > 400) {
        setIsVisible(true);
      }
    };

    const timer = setTimeout(() => {
      if (!isDismissed && window.innerWidth >= 768) {
        setIsVisible(true);
      }
    }, 7000);

    window.addEventListener('scroll', checkWidthAndScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', checkWidthAndScroll);
      clearTimeout(timer);
    };
  }, [isDismissed, isMobile]);

  const handleUnlockBundle = () => {
    if (steamUnlockBundle && onSelectBundle) {
      onSelectBundle(steamUnlockBundle);
    } else {
      navigateToChannel(settings, {
        bundleTitle: 'Steam Unlock Bundle',
        price: 449,
        actionType: 'purchase'
      });
    }
  };

  const handleSingleGameIdPass = () => {
    navigateToChannel(settings, {
      bundleTitle: 'Steam Account ID & Password (Single Game)',
      price: 80,
      actionType: 'single'
    });
  };

  if (isMobile || (!isVisible && !isMinimized)) return null;

  // Minimized pill state (desktop only)
  if (isMinimized) {
    return (
      <div className="hidden md:block fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-2">
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
      className="hidden md:block fixed bottom-6 right-6 z-40 max-w-[390px] w-full transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 pointer-events-auto"
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

          {/* Mini Popular Game Covers Strip */}
          <div className="grid grid-cols-4 gap-1.5 py-1">
            {[
              { title: 'GTA 5', src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg' },
              { title: 'Wukong', src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg' },
              { title: 'RE4 Remake', src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg' },
              { title: 'Cyberpunk', src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg' }
            ].map((g, idx) => (
              <div key={idx} className="relative rounded-lg overflow-hidden aspect-[16/10] bg-black border border-white/10">
                <img
                  src={g.src}
                  alt={g.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/80 text-[8px] text-white font-bold text-center py-0.5 truncate px-0.5">
                  {g.title}
                </div>
              </div>
            ))}
          </div>

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
