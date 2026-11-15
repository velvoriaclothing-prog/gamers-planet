import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Instagram, PhoneCall, Send, Globe, ArrowUp } from 'lucide-react';
import { SiteSettings } from '../types/index.js';
import { getChannelRedirectInfo } from '../utils/channelRedirect.js';
import { useLanguage } from '../context/LanguageContext.js';

interface FooterProps {
  settings: SiteSettings;
}

export const Footer: React.FC<FooterProps> = ({ settings }) => {
  const { openLanguageModal, language } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const redirectInfo = getChannelRedirectInfo(settings, { actionType: 'support' });

  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#09090b] pt-12 pb-24 lg:pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-red-600/15 border border-red-500/40 flex items-center justify-center text-red-500">
                <Gamepad2 className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Gamers Planet
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Curated PC game bundles, instant digital access, and verified support. Christmas Sale: Flat 50% OFF on all bundles.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/bundles" className="hover:text-white transition-colors">
                  Game Bundles
                </Link>
              </li>
              <li>
                <Link to="/game-fixes" className="hover:text-white transition-colors">
                  Game Fixes
                </Link>
              </li>
              <li>
                <Link to="/channels" className="hover:text-white transition-colors">
                  VIP Channels &amp; Sites
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQ &amp; Setup Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Direct Support
            </h4>
            <a
              href={redirectInfo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#141418] hover:bg-[#1c1c22] border border-white/[0.1] text-zinc-100 text-xs font-medium transition-colors"
            >
              {redirectInfo.isWhatsApp && <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
              {redirectInfo.isTelegram && <Send className="w-3.5 h-3.5 text-sky-400 shrink-0" />}
              {redirectInfo.isInstagram && <Instagram className="w-3.5 h-3.5 text-red-400 shrink-0" />}
              {redirectInfo.isCustom && <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
              <span>Chat on WhatsApp Business</span>
            </a>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Instant delivery in 3–5 minutes via UPI, Google Pay, PhonePe, or Paytm.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Gamers Planet. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => openLanguageModal()}
              type="button"
              className="px-2.5 py-1 rounded-md bg-[#141418] hover:bg-[#1c1c22] text-zinc-300 hover:text-white transition-colors cursor-pointer border border-white/[0.08] flex items-center gap-1.5 text-xs"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase">{language}</span>
            </button>
            <button
              onClick={scrollToTop}
              type="button"
              className="p-1.5 rounded-md bg-[#141418] hover:bg-[#1c1c22] border border-white/[0.08] text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
