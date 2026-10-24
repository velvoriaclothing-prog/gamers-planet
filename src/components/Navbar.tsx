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
import { useLanguage } from '../context/LanguageContext.js';
import { LanguageToggle } from './LanguageToggle.js';
import { ThemeToggle } from './ThemeToggle.js';

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
  const { t } = useLanguage();
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
      // Normal click: navigate to bundles if single click after timeout
      clickTimerRef.current = setTimeout(() => {
        setClickCount(0);
        navigate('/bundles');
      }, 400);
    }
  };

  useEffect(() => {
    return () => {
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    };
  }, []);

  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `py-2 px-3 text-xs font-gaming uppercase tracking-wider transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
      isActive
        ? 'text-amber-400 font-black border-b-2 border-amber-400'
        : 'text-slate-300 hover:text-white border-b-2 border-transparent font-semibold'
    }`;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#050711]/92 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Clean Brand Wordmark (Single Text Element) */}
        <div className="flex items-center shrink-0">
          <button
            onClick={handleLogoClick}
            type="button"
            title="Gamers Planet"
            className="group flex items-center gap-2.5 text-left focus:outline-none select-none transition-transform active:scale-95 cursor-pointer"
          >
            <div className={`w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center overflow-hidden transition-all duration-200 group-hover:border-amber-400 group-hover:bg-amber-500/20 ${
              showClickPulse ? 'scale-110 border-amber-300' : ''
            }`}>
              {settings.logoImageUrl ? (
                <img
                  src={settings.logoImageUrl}
                  alt={settings.logoText || 'Logo'}
                  className="w-full h-full object-contain p-1"
                />
              ) : (
                <Shield className="w-5 h-5 text-amber-400 transition-transform duration-200 group-hover:scale-110" />
              )}
            </div>

            <span className="text-xl sm:text-2xl font-black tracking-wider font-gaming text-white group-hover:text-amber-300 transition-colors whitespace-nowrap">
              {settings.logoText || 'GAMERS PLANET'}
            </span>
          </button>
        </div>

        {/* Zone 2: Clean 4 Single-Line Nav Links */}
        <nav className="hidden lg:flex items-center gap-2 text-xs text-slate-300">
          <NavLink to="/bundles" className={navItemClass}>
            <span>{t('nav.bundles', 'Bundles Vault')}</span>
          </NavLink>

          <NavLink to="/channels" className={navItemClass}>
            <span>{t('nav.channels', 'VIP Channels')}</span>
          </NavLink>

          <NavLink to="/reviews" className={navItemClass}>
            <span>{t('nav.reviews', 'Reviews')}</span>
          </NavLink>

          <NavLink to="/faq" className={navItemClass}>
            <span>{t('nav.faq', 'FAQ')}</span>
          </NavLink>
        </nav>

        {/* Zone 3: Actions — Theme & Language Switchers & Primary Action */}
        <div className="flex items-center gap-2">
          {/* Theme & Live Wallpaper Selector */}
          <ThemeToggle variant="navbar" />

          {/* Language Switcher Dropdown */}
          <LanguageToggle variant="navbar" />

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
          
          {/* Mobile Language Selector */}
          <div className="mb-4">
            <LanguageToggle variant="drawer" />
          </div>

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
                <span>{t('nav.home', 'Home Storefront')}</span>
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
                <span>{t('nav.bundles', 'Bundles Vault')}</span>
              </div>
              <span className="text-[10px] uppercase font-black px-1.5 py-0.5 rounded bg-black/40 text-amber-300">
                ₹399+
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
                <span>{t('nav.channels', 'VIP Channels & Sites')}</span>
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
                <span>{t('nav.reviews', 'Reviews & Proof')}</span>
              </div>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/40 text-emerald-400">
                Verified
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
                <span>{t('nav.faq', 'Frequently Asked Questions & Setup Guide')}</span>
              </div>
            </NavLink>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 px-1">
            <span>{t('common.instant_delivery', 'Instant delivery in 3-5 mins')}</span>
            <span className="text-amber-400 font-bold">{settings.channelHandle || '@gamersplanet20.26'}</span>
          </div>
        </div>
      )}
    </header>
  );
};
