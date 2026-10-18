import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { 
  Shield, 
  Sparkles, 
  Instagram, 
  Send,
  PhoneCall,
  Globe,
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
  Search,
  Home
} from 'lucide-react';
import { SiteSettings } from '../types/index.js';
import { getChannelRedirectInfo } from '../utils/channelRedirect.js';

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
  const navigate = useNavigate();

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
      // Normal click: navigate home if single click after timeout
      clickTimerRef.current = setTimeout(() => {
        setClickCount(0);
        navigate('/');
      }, 400);
    }
  };

  useEffect(() => {
    return () => {
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    };
  }, []);

  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `py-1.5 px-2.5 rounded-lg text-xs font-gaming uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
      isActive
        ? 'text-amber-400 bg-amber-500/15 border border-amber-500/40 font-black shadow-[0_0_15px_rgba(245,158,11,0.25)]'
        : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent font-bold'
    }`;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#06080e]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo with 5-click easter egg */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleLogoClick}
            type="button"
            title="Gamers Planet (Click 5 times for Admin)"
            className="group flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none select-none transition-transform active:scale-95 cursor-pointer"
          >
            <div className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-700/10 border border-amber-500/40 flex items-center justify-center transition-all duration-300 group-hover:border-amber-400 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] ${
              showClickPulse ? 'scale-110 border-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.6)]' : ''
            }`}>
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 transition-transform duration-300 group-hover:rotate-12" />
            </div>

            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-lg sm:text-2xl font-bold tracking-wider font-gaming bg-gradient-to-r from-white via-slate-200 to-amber-300 bg-clip-text text-transparent">
                  {settings.logoText || 'GAMERS PLANET'}
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-widest text-amber-400 font-semibold px-1.5 py-0.5 rounded border border-amber-500/30 bg-amber-500/10 uppercase">
                  VAULT
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Premium Curated PC Game Bundles
              </p>
            </div>
          </button>
        </div>

        {/* Desktop Navigation items (Multi-Page Router) */}
        <nav className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-slate-300">
          <NavLink to="/" className={navItemClass}>
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </NavLink>

          <NavLink to="/bundles" className={navItemClass}>
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Bundles Vault</span>
          </NavLink>

          <NavLink to="/single-games" className={navItemClass}>
            <Gamepad2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Single Games (₹80)</span>
          </NavLink>

          <NavLink to="/catalog" className={navItemClass}>
            <Search className="w-3.5 h-3.5 text-sky-400" />
            <span>Search 60K+</span>
          </NavLink>

          <NavLink to="/channels" className={navItemClass}>
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>VIP Channels</span>
          </NavLink>

          <NavLink to="/reviews" className={navItemClass}>
            <Star className="w-3.5 h-3.5 text-amber-400" />
            <span>Reviews</span>
          </NavLink>

          <NavLink to="/faq" className={navItemClass}>
            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
            <span>FAQ</span>
          </NavLink>
        </nav>

        {/* Actions / Admin & Instagram buttons */}
        <div className="flex items-center gap-2">
          {isAdmin ? (
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenDashboard}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-all cursor-pointer"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="hidden sm:inline">Admin Panel</span>
              </button>
              <button
                onClick={onLogout}
                title="Log out of admin"
                className="p-2 text-xs font-medium rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-500/10 border border-white/5 transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            (() => {
              const redirectInfo = getChannelRedirectInfo(settings, { actionType: 'dm' });
              return (
                <a
                  href={redirectInfo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold text-xs sm:text-sm shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] active:scale-95 transition-all cursor-pointer shrink-0"
                  title={`Chat with us on ${redirectInfo.platformName}`}
                >
                  {redirectInfo.isWhatsApp && <PhoneCall className="w-4 h-4 text-black group-hover:rotate-12 transition-transform shrink-0" />}
                  {redirectInfo.isTelegram && <Send className="w-4 h-4 text-black group-hover:rotate-12 transition-transform shrink-0" />}
                  {redirectInfo.isInstagram && <Instagram className="w-4 h-4 text-black group-hover:rotate-12 transition-transform shrink-0" />}
                  {redirectInfo.isCustom && <Globe className="w-4 h-4 text-black group-hover:rotate-12 transition-transform shrink-0" />}
                  <span className="font-gaming uppercase tracking-wide">{redirectInfo.actionLabel}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform hidden sm:inline shrink-0" />
                </a>
              );
            })()
          )}

          {/* Mobile Navigation Dropdown Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={`lg:hidden flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer select-none active:scale-95 ${
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
        <div className="lg:hidden border-t border-white/10 bg-[#090d18]/98 backdrop-blur-2xl px-4 py-4 shadow-2xl transition-all">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `flex items-center justify-between p-3 rounded-xl border text-xs font-bold font-gaming uppercase tracking-wider transition-all ${
                isActive ? 'bg-amber-500 text-black border-amber-400' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Home className="w-4 h-4" />
                <span>Home Storefront</span>
              </div>
            </NavLink>

            <NavLink
              to="/bundles"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `flex items-center justify-between p-3 rounded-xl border text-xs font-bold font-gaming uppercase tracking-wider transition-all ${
                isActive ? 'bg-amber-500 text-black border-amber-400' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Bundles Vault</span>
              </div>
              <span className="text-[10px] uppercase font-black px-1.5 py-0.5 rounded bg-black/40 text-amber-300">
                ₹399+
              </span>
            </NavLink>

            <NavLink
              to="/single-games"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `flex items-center justify-between p-3 rounded-xl border text-xs font-bold font-gaming uppercase tracking-wider transition-all ${
                isActive ? 'bg-amber-500 text-black border-amber-400' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Gamepad2 className="w-4 h-4 text-emerald-400" />
                <span>Single Games</span>
              </div>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/40 text-emerald-300">
                ₹80
              </span>
            </NavLink>

            <NavLink
              to="/catalog"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `flex items-center justify-between p-3 rounded-xl border text-xs font-bold font-gaming uppercase tracking-wider transition-all ${
                isActive ? 'bg-amber-500 text-black border-amber-400' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-sky-400" />
                <span>Search 60,000+</span>
              </div>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/40 text-sky-300">
                Search
              </span>
            </NavLink>

            <NavLink
              to="/channels"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `flex items-center justify-between p-3 rounded-xl border text-xs font-bold font-gaming uppercase tracking-wider transition-all ${
                isActive ? 'bg-amber-500 text-black border-amber-400' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-amber-400" />
                <span>VIP Channels & Sites</span>
              </div>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/40 text-amber-400">
                VIP
              </span>
            </NavLink>

            <NavLink
              to="/reviews"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `flex items-center justify-between p-3 rounded-xl border text-xs font-bold font-gaming uppercase tracking-wider transition-all ${
                isActive ? 'bg-amber-500 text-black border-amber-400' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Star className="w-4 h-4 text-amber-400" />
                <span>Reviews & Proof</span>
              </div>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/40 text-emerald-400">
                65+ Indian
              </span>
            </NavLink>

            <NavLink
              to="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `flex items-center justify-between p-3 rounded-xl border text-xs font-bold font-gaming uppercase tracking-wider transition-all sm:col-span-2 ${
                isActive ? 'bg-amber-500 text-black border-amber-400' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 text-slate-400" />
                <span>Frequently Asked Questions & Setup Guide</span>
              </div>
            </NavLink>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 px-1">
            <span>Instant delivery in 3-5 mins</span>
            <span className="text-amber-400 font-bold">{settings.channelHandle || '@gamersplanet20.26'}</span>
          </div>
        </div>
      )}
    </header>
  );
};
