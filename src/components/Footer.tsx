import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Instagram, PhoneCall, Send, Globe, ArrowUp } from 'lucide-react';
import { SiteSettings } from '../types/index.js';
import { getChannelRedirectInfo } from '../utils/channelRedirect.js';
import { EditableText } from './live-edit/EditableText.js';

interface FooterProps {
  settings: SiteSettings;
}

export const Footer: React.FC<FooterProps> = ({ settings }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const redirectInfo = getChannelRedirectInfo(settings, { actionType: 'support' });

  return (
    <footer className="border-t border-white/10 bg-[#040508] pt-16 pb-24 md:pb-16 text-slate-400">
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
              <EditableText
                textKey="supportNote"
                defaultText={settings.supportNote || 'Direct support available for all gamers.'}
                label="Footer Support Note"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-gaming">
              Pages & Storefront
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  Home Storefront
                </Link>
              </li>
              <li>
                <Link to="/bundles" className="hover:text-amber-400 transition-colors text-amber-300 font-semibold flex items-center gap-1.5">
                  <span>⚡ Bundles Vault</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    ₹399+
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/single-games" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Single Games Store</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    ₹80
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Search 60,000+ PC Games</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-400 border border-sky-500/30">
                    Search
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/channels" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>VIP Channels & Sites</span>
                  <span className="text-[9px] uppercase font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    VIP
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Customer Proof & Reviews</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    65+ Verified
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-amber-400 transition-colors">
                  FAQ & 5-Min Setup Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-gaming">
              Connect With Us
            </h4>
            <div className="space-y-4">
              <a
                href={redirectInfo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/40 text-slate-200 hover:text-white transition-all text-xs font-semibold cursor-pointer"
                title={`Connect via ${redirectInfo.platformName}`}
              >
                {redirectInfo.isWhatsApp && <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />}
                {redirectInfo.isTelegram && <Send className="w-4 h-4 text-sky-400 shrink-0" />}
                {redirectInfo.isInstagram && <Instagram className="w-4 h-4 text-amber-400 shrink-0" />}
                {redirectInfo.isCustom && <Globe className="w-4 h-4 text-purple-400 shrink-0" />}
                <span>{redirectInfo.actionLabel}</span>
              </a>

              <div className="text-[11px] text-slate-500 leading-relaxed">
                Orders delivered within 3-5 minutes. Payment accepted via UPI, Google Pay, PhonePe, and Paytm.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} GAMERS PLANET. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-amber-400/80">Support: 10:00 AM - 12:00 AM IST</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
