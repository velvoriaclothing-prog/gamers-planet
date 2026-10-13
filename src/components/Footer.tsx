import React from 'react';
import { Shield, Instagram, Lock, ArrowUp } from 'lucide-react';
import { SiteSettings } from '../types/index.js';
import { openInstagram } from '../utils/api.js';

interface FooterProps {
  settings: SiteSettings;
}

export const Footer: React.FC<FooterProps> = ({ settings }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#040508] pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold font-gaming text-white tracking-wider">
                {settings.logoText || 'GAMERS PLANET'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              India's premier digital gaming destination for curated PC vaults, DLC expansions, and verified customer support.
            </p>
            <div className="text-xs text-amber-400/90 font-medium">
              {settings.supportNote}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-gaming">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#flash-sale" className="hover:text-amber-400 transition-colors text-amber-300 font-semibold">
                  ⚡ Flash Sale Vault
                </a>
              </li>
              <li>
                <a href="#single-games" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Single Games Bundle</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    ₹80+
                  </span>
                </a>
              </li>
              <li>
                <a href="#game-explorer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Game Catalog Explorer</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    Search
                  </span>
                </a>
              </li>
              <li>
                <a href="#bundles" className="hover:text-amber-400 transition-colors">
                  Gaming Vault Bundles (₹399+)
                </a>
              </li>
              <li>
                <a href="#channels" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Exclusive Channels</span>
                  <span className="text-[9px] uppercase font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    VIP
                  </span>
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">
                  Customer Proof & Screenshots
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-amber-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-gaming">
              Connect With Us
            </h4>
            <div className="space-y-3">
              <button
                onClick={() => openInstagram(settings.instagramUrl)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-amber-500/40 text-xs sm:text-sm font-semibold text-white transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4 text-amber-400" />
                <span>Follow on Instagram</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{settings.footerText}</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
