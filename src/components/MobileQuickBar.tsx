import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flame, Wrench, Lock, Star, HelpCircle } from 'lucide-react';
import { SiteSettings } from '../types/index.js';

interface MobileQuickBarProps {
  settings: SiteSettings;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex flex-col items-center justify-center flex-1 py-1.5 px-1 rounded-lg transition-colors select-none ${
      isActive
        ? 'text-white bg-white/[0.08] font-semibold'
        : 'text-zinc-400 hover:text-white font-medium'
    }`;

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#09090b]/95 border-t border-white/[0.08] backdrop-blur-xl pb-[max(0.25rem,env(safe-area-inset-bottom))]"
    >
      <div className="max-w-md mx-auto flex items-center justify-around px-2 py-1 gap-1">
        <NavLink to="/bundles" className={navLinkClass}>
          <Flame className="w-4 h-4 mb-0.5 text-red-500" />
          <span className="text-[10px]">Bundles</span>
        </NavLink>

        <NavLink to="/game-fixes" className={navLinkClass}>
          <Wrench className="w-4 h-4 mb-0.5 text-red-400" />
          <span className="text-[10px]">Fixes</span>
        </NavLink>

        <NavLink to="/channels" className={navLinkClass}>
          <Lock className="w-4 h-4 mb-0.5 text-amber-400" />
          <span className="text-[10px]">VIP</span>
        </NavLink>

        <NavLink to="/reviews" className={navLinkClass}>
          <Star className="w-4 h-4 mb-0.5 text-amber-400" />
          <span className="text-[10px]">Reviews</span>
        </NavLink>

        <NavLink to="/faq" className={navLinkClass}>
          <HelpCircle className="w-4 h-4 mb-0.5 text-zinc-400" />
          <span className="text-[10px]">FAQ</span>
        </NavLink>
      </div>
    </nav>
  );
};
