import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  PhoneCall,
  LogOut,
  LayoutDashboard,
  Menu,
  X,
  Flame,
  Wrench,
  Lock,
  Star,
  HelpCircle,
  Gamepad2
} from 'lucide-react';
import { SiteSettings } from '../types/index.js';
import { getChannelRedirectInfo } from '../utils/channelRedirect.js';
import { useLanguage } from '../context/LanguageContext.js';
import { LanguageToggle } from './LanguageToggle.js';

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
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  // Logo 5-click easter egg detector for Admin Panel
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const nextCount = clickCount + 1;
    setClickCount(nextCount);

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
      clickTimerRef.current = setTimeout(() => {
        setClickCount(0);
        navigate('/bundles');
      }, 350);
    }
  };

  useEffect(() => {
    return () => {
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    };
  }, []);

  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer border ${
      isActive
        ? 'bg-white/[0.08] border-white/[0.12] text-white'
        : 'bg-transparent border-transparent text-zinc-400 hover:text-white hover:bg-white/[0.04]'
    }`;

  const redirectInfo = getChannelRedirectInfo(settings, { actionType: 'dm' });

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.06] bg-[#09090b]/92 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={handleLogoClick}
          type="button"
          title="Gamers Planet"
          className="group flex items-center gap-2.5 text-left focus:outline-none select-none cursor-pointer shrink-0"
        >
          <div className="w-8 h-8 rounded-full bg-red-600/15 border border-red-500/40 flex items-center justify-center overflow-hidden shrink-0 group-hover:border-red-400 transition-colors">
            {settings.logoImageUrl ? (
              <img
                src={settings.logoImageUrl}
                alt={settings.logoText || 'Gamers Planet'}
                className="w-full h-full object-contain p-1"
              />
            ) : (
              <Gamepad2 className="w-4 h-4 text-red-500" />
            )}
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[15px] sm:text-base font-bold text-white tracking-tight whitespace-nowrap">
              Gamers Planet
            </span>
            <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-red-500 mt-0.5 whitespace-nowrap">
              DIWALI · 50% OFF
            </span>
          </div>
        </button>

        {/* Zone 2: Clean Right-Aligned Nav + Primary Action */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink to="/bundles" className={navItemClass}>
              {t('nav.bundles', 'Bundles')}
            </NavLink>
            <NavLink to="/game-fixes" className={navItemClass}>
              Game Fixes
            </NavLink>
            <NavLink to="/channels" className={navItemClass}>
              {t('nav.channels', 'VIP Channel')}
            </NavLink>
            <NavLink to="/reviews" className={navItemClass}>
              {t('nav.reviews', 'Reviews')}
            </NavLink>
            <NavLink to="/faq" className={navItemClass}>
              {t('nav.faq', 'FAQ')}
            </NavLink>
          </nav>

          <div className="hidden md:block">
            <LanguageToggle variant="navbar" />
          </div>

          {isAdmin ? (
            <div className="flex items-center gap-1.5">
              <button
                onClick={onOpenDashboard}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-[#18181c] text-white border border-white/10 hover:border-white/25 transition-colors cursor-pointer whitespace-nowrap"
              >
                <LayoutDashboard className="w-3.5 h-3.5 text-red-400" />
                <span className="hidden sm:inline">Admin</span>
              </button>
              <button
                onClick={onLogout}
                title="Log out"
                className="p-1.5 rounded-full text-zinc-400 hover:text-red-400 hover:bg-white/[0.06] transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <a
              href={redirectInfo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#141418] hover:bg-[#1c1c22] border border-white/[0.1] hover:border-emerald-500/40 text-xs font-medium text-zinc-100 transition-all cursor-pointer whitespace-nowrap shrink-0"
              title="Chat on WhatsApp Business"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>WhatsApp</span>
            </a>
          )}

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden p-2 rounded-lg bg-[#141418] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-[#0c0c0f]/98 backdrop-blur-xl px-4 py-4 space-y-3">
          <LanguageToggle variant="drawer" />

          <div className="grid grid-cols-2 gap-2">
            <NavLink
              to="/bundles"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 rounded-xl border text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-red-600/15 border-red-500/40 text-white'
                    : 'bg-[#141418] border-white/[0.07] text-zinc-300'
                }`
              }
            >
              <Flame className="w-4 h-4 text-red-400 shrink-0" />
              <span>Bundles</span>
            </NavLink>

            <NavLink
              to="/game-fixes"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 rounded-xl border text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-red-600/15 border-red-500/40 text-white'
                    : 'bg-[#141418] border-white/[0.07] text-zinc-300'
                }`
              }
            >
              <Wrench className="w-4 h-4 text-red-400 shrink-0" />
              <span>Game Fixes</span>
            </NavLink>

            <NavLink
              to="/channels"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 rounded-xl border text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-red-600/15 border-red-500/40 text-white'
                    : 'bg-[#141418] border-white/[0.07] text-zinc-300'
                }`
              }
            >
              <Lock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>VIP Channel</span>
            </NavLink>

            <NavLink
              to="/reviews"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 rounded-xl border text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-red-600/15 border-red-500/40 text-white'
                    : 'bg-[#141418] border-white/[0.07] text-zinc-300'
                }`
              }
            >
              <Star className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Reviews</span>
            </NavLink>

            <NavLink
              to="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `col-span-2 flex items-center gap-2 p-3 rounded-xl border text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-red-600/15 border-red-500/40 text-white'
                    : 'bg-[#141418] border-white/[0.07] text-zinc-300'
                }`
              }
            >
              <HelpCircle className="w-4 h-4 text-zinc-400 shrink-0" />
              <span>FAQ &amp; Setup Guide</span>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};
