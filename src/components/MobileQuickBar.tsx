import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Zap, Film, Lock, Star, Globe } from 'lucide-react';
import { SiteSettings } from '../types/index.js';
import { useLanguage } from '../context/LanguageContext.js';

interface MobileQuickBarProps {
  settings: SiteSettings;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = () => {
  const { t, openLanguageModal, language } = useLanguage();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex flex-col items-center justify-center flex-1 py-1 px-0.5 rounded-xl transition-all duration-200 select-none ${
      isActive
        ? 'text-amber-400 bg-amber-500/15 font-black shadow-[0_0_12px_rgba(245,158,11,0.25)]'
        : 'text-slate-400 hover:text-white font-medium hover:bg-white/5'
    }`;

  const langBadge = language === 'hi' ? 'हिं' : language === 'hinglish' ? 'Hing' : 'EN';

  return (
    <nav 
      aria-label="Mobile Bottom Navigation"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#060a16]/95 border-t border-white/10 backdrop-blur-2xl shadow-[0_-8px_30px_rgba(0,0,0,0.85)] pb-[max(0.25rem,env(safe-area-inset-bottom))]"
    >
      <div className="max-w-md mx-auto flex items-center justify-around px-1.5 py-1 gap-0.5">
        
        {/* 1. Home */}
        <NavLink to="/" className={navLinkClass}>
          <Home className="w-4 h-4 mb-0.5" />
          <span className="text-[9px] font-gaming uppercase tracking-wider truncate max-w-[50px]">{t('nav.home', 'Home')}</span>
        </NavLink>

        {/* 2. Bundles */}
        <NavLink to="/bundles" className={navLinkClass}>
          <Zap className="w-4 h-4 mb-0.5 text-amber-400" />
          <span className="text-[9px] font-gaming uppercase tracking-wider truncate max-w-[54px]">{t('nav.bundles', 'Bundles')}</span>
        </NavLink>

        {/* 3. Live Trailers */}
        <a 
          href="/bundles#gameplay-videos" 
          className="flex flex-col items-center justify-center flex-1 py-1 px-0.5 rounded-xl transition-all duration-200 select-none text-slate-400 hover:text-white font-medium hover:bg-white/5"
        >
          <Film className="w-4 h-4 mb-0.5 text-amber-400" />
          <span className="text-[9px] font-gaming uppercase tracking-wider truncate max-w-[50px]">Video</span>
        </a>

        {/* 4. VIP Channels */}
        <NavLink to="/channels" className={navLinkClass}>
          <Lock className="w-4 h-4 mb-0.5 text-amber-400" />
          <span className="text-[9px] font-gaming uppercase tracking-wider truncate max-w-[52px]">VIP</span>
        </NavLink>

        {/* 5. Reviews */}
        <NavLink to="/reviews" className={navLinkClass}>
          <Star className="w-4 h-4 mb-0.5 text-amber-400" />
          <span className="text-[9px] font-gaming uppercase tracking-wider truncate max-w-[50px]">{t('nav.reviews', 'Reviews')}</span>
        </NavLink>

        {/* 6. Language Switch Button */}
        <button
          type="button"
          onClick={() => openLanguageModal()}
          className="flex flex-col items-center justify-center flex-1 py-1 px-0.5 rounded-xl transition-all duration-200 select-none text-amber-400 hover:text-white font-bold hover:bg-white/5 border border-amber-500/20 bg-amber-500/10"
          title="Change Language"
        >
          <Globe className="w-4 h-4 mb-0.5 text-amber-400" />
          <span className="text-[9px] font-gaming uppercase tracking-wider">{langBadge}</span>
        </button>

      </div>
    </nav>
  );
};
