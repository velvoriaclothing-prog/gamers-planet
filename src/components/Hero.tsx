import React from 'react';
import { Sparkles, Gamepad2, ShieldCheck, Zap, Star, ArrowDown, Instagram } from 'lucide-react';
import { SiteSettings } from '../types/index.js';
import { openInstagram } from '../utils/api.js';

interface HeroProps {
  settings: SiteSettings;
}

export const Hero: React.FC<HeroProps> = ({ settings }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-gaming-grid">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Optional Announcement Pill */}
        {settings.announcementText && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <span>{settings.announcementText}</span>
          </div>
        )}

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-gaming uppercase text-white max-w-5xl mx-auto leading-[1.1] mb-6">
          <span className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            {settings.heroHeading || 'LEGENDARY PC GAMING BUNDLES'}
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          {settings.heroSubtitle ||
            'Get instant digital access to top-tier AAA game vaults and curated indie collections. Verified delivery directly to your account in minutes.'}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <a
            href="#flash-sale"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-black font-bold text-base shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer font-gaming tracking-wide"
          >
            <Zap className="w-5 h-5 text-black" />
            <span>{settings.heroCtaText || 'View Flash Sale Bundles'}</span>
          </a>

          <a
            href="#single-games"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-slate-200 hover:text-white hover:border-amber-500/40 hover:bg-white/[0.08] font-semibold text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Gamepad2 className="w-5 h-5 text-amber-400" />
            <span>Single Games (From ₹80)</span>
          </a>
        </div>

        <div className="mb-12">
          <a
            href="#reviews"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-amber-300 transition-colors py-1"
          >
            <div className="flex text-amber-400">
              {'★★★★★'.split('').map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <span>Rated 4.9/5 by 150+ Gamers across India • View Proof</span>
          </a>
        </div>

        {/* Trust Badges / Quick Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10">
          <div className="glass-card p-4 rounded-xl text-center">
            <div className="text-2xl sm:text-3xl font-bold font-gaming text-amber-400 mb-0.5">60,000+</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">PC Games & Vaults</div>
          </div>
          <div className="glass-card p-4 rounded-xl text-center">
            <div className="text-2xl sm:text-3xl font-bold font-gaming text-emerald-400 mb-0.5">&lt; 5 Mins</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Instant Instagram Delivery</div>
          </div>
          <div className="glass-card p-4 rounded-xl text-center">
            <div className="text-2xl sm:text-3xl font-bold font-gaming text-amber-400 mb-0.5">₹0</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Setup Fees / Hidden Costs</div>
          </div>
          <div className="glass-card p-4 rounded-xl text-center">
            <div className="text-2xl sm:text-3xl font-bold font-gaming text-amber-400 mb-0.5 flex items-center justify-center gap-1">
              <span>4.9</span>
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Verified Gamer Rating</div>
          </div>
        </div>

      </div>
    </section>
  );
};
