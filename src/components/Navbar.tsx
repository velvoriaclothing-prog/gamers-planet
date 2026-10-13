import React, { useState, useRef, useEffect } from 'react';
import { 
  Shield, 
  Sparkles, 
  Instagram, 
  LogOut, 
  LayoutDashboard, 
  ChevronRight, 
  ChevronDown,
  Menu, 
  X, 
  Flame, 
  Gamepad2, 
  Tag, 
  Lock, 
  Star, 
  HelpCircle,
  Search
} from 'lucide-react';
import { SiteSettings } from '../types/index.js';
import { openInstagram } from '../utils/api.js';

interface NavbarProps {
  settings: SiteSettings;
  isAdmin: boolean;
  onOpenAdminModal: () => void;
  onOpenDashboard: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  settings,
  isAdmin,
  onOpenAdminModal,
  onOpenDashboard,
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showClickPulse, setShowClickPulse] = useState(false);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Logo 5-click easter egg detector
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const nextCount = clickCount + 1;
    setClickCount(nextCount);
    setShowClickPulse(true);
    setTimeout(() => setShowClickPulse(false), 300);

    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }

    if (nextCount >= 5) {
      setClickCount(0);
      if (isAdmin) {
        onOpenDashboard();
      } else {
        onOpenAdminModal();
      }
    } else {
      // Reset clicks if no further clicks within 3 seconds
      clickTimerRef.current = setTimeout(() => {
        setClickCount(0);
      }, 3000);
    }
  };

  useEffect(() => {
    return () => {
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#06080e]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo with 5-click easter egg */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleLogoClick}
            type="button"
            title="Gamers Planet"
            className="group flex items-center gap-3 text-left focus:outline-none select-none transition-transform active:scale-95"
          >
            <div className={`relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-700/10 border border-amber-500/40 flex items-center justify-center transition-all duration-300 group-hover:border-amber-400 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] ${
              showClickPulse ? 'scale-110 border-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.6)]' : ''
            }`}>
              <Shield className="w-6 h-6 text-amber-400 transition-transform duration-300 group-hover:rotate-12" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold tracking-wider font-gaming bg-gradient-to-r from-white via-slate-200 to-amber-300 bg-clip-text text-transparent">
                  {settings.logoText || 'GAMERS PLANET'}
                </span>
                <span className="text-[10px] tracking-widest text-amber-400 font-semibold px-1.5 py-0.5 rounded border border-amber-500/30 bg-amber-500/10 uppercase">
                  VAULT
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Premium Curated PC Game Bundles
              </p>
            </div>
          </button>
        </div>

        {/* Navigation items */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#flash-sale"
            className="hover:text-amber-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all flex items-center gap-1 text-amber-300 font-bold"
          >
            <span>⚡ Flash Sale Vault</span>
          </a>
          <a
            href="#single-games"
            className="hover:text-amber-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all flex items-center gap-1 text-slate-200"
          >
            <span>Single Games</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30">
              ₹80+
            </span>
          </a>
          <a
            href="#game-explorer"
            className="hover:text-amber-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all flex items-center gap-1 text-slate-200"
          >
            <Search className="w-3.5 h-3.5 text-amber-400" />
            <span>Search Catalog</span>
          </a>
          <a
            href="#bundles"
            className="hover:text-amber-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Bundles Vault
          </a>
          <a
            href="#channels"
            className="hover:text-amber-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all flex items-center gap-1.5 text-slate-200"
          >
            <span>Channels & Sites</span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
              VIP
            </span>
          </a>
          <a
            href="#reviews"
            className="hover:text-amber-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all flex items-center gap-1.5"
          >
            <span>Reviews</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
              Verified
            </span>
          </a>
          <a
            href="#features"
            className="hover:text-amber-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Why Us
          </a>
          <a
            href="#faq"
            className="hover:text-amber-400 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-amber-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            FAQ
          </a>
        </nav>

        {/* Actions / Admin & Instagram buttons */}
        <div className="flex items-center gap-2">
          {isAdmin ? (
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenDashboard}
                className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-all cursor-pointer"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="hidden sm:inline">Admin Panel</span>
              </button>
              <button
                onClick={onLogout}
                title="Log out of admin"
                className="p-2 text-xs font-medium rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 border border-white/5 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => openInstagram(settings.instagramUrl)}
              className="group flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold text-xs sm:text-sm shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shrink-0"
            >
              <Instagram className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
              <span className="inline sm:hidden font-gaming uppercase tracking-wide">DM</span>
              <span className="hidden sm:inline font-gaming uppercase tracking-wide">DM on Instagram</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform hidden sm:inline" />
            </button>
          )}

          {/* Mobile Navigation Dropdown Button with Explicit Label & Arrow */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={`md:hidden flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer select-none active:scale-95 ${
              mobileMenuOpen
                ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.5)] border border-amber-400'
                : 'bg-[#0e1322]/90 border border-amber-500/35 text-amber-300 hover:text-white hover:border-amber-400/60 shadow-[0_0_10px_rgba(0,0,0,0.5)]'
            }`}
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-black" />
            ) : (
              <Menu className="w-4 h-4 text-amber-400" />
            )}
            <span className="font-gaming uppercase tracking-wider text-[11px] sm:text-xs">
              Menu
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${
                mobileMenuOpen ? 'rotate-180 text-black' : 'text-amber-400/90'
              }`}
            />
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#090d18]/95 backdrop-blur-2xl px-4 py-5 shadow-2xl transition-all">
          <div className="space-y-1.5 mb-4">
            <a
              href="#flash-sale"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-sm"
            >
              <div className="flex items-center gap-2.5">
                <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Flash Sale Vault</span>
              </div>
              <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-amber-500 text-black">
                LIVE
              </span>
            </a>

            <a
              href="#single-games"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-slate-200 hover:text-white font-semibold text-sm transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Gamepad2 className="w-4 h-4 text-amber-400" />
                <span>Single Games Bundle</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                ₹80 - ₹349
              </span>
            </a>

            <a
              href="#game-explorer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-slate-200 hover:text-white font-semibold text-sm transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-amber-400" />
                <span>Game Search & Catalog</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                60K+ Games
              </span>
            </a>

            <a
              href="#bundles"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-slate-200 hover:text-white font-semibold text-sm transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Tag className="w-4 h-4 text-amber-400" />
                <span>Bundles Vault (₹399 Featured)</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Featured Offer
              </span>
            </a>

            <a
              href="#channels"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-slate-200 hover:text-white font-semibold text-sm transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-amber-400" />
                <span>VIP Channels & Sites</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                VIP
              </span>
            </a>

            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-slate-200 hover:text-white font-semibold text-sm transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Customer Reviews</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                65+ Verified
              </span>
            </a>

            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-slate-200 hover:text-white font-semibold text-sm transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span>FAQ & Setup Support</span>
              </div>
            </a>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 px-1">
            <span>Instant delivery via UPI in 3-5 mins</span>
            <span className="text-amber-400 font-bold">@gamersplanet20.26</span>
          </div>
        </div>
      )}
    </header>
  );
};
