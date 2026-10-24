import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Gamepad2, ShieldCheck, Zap, Star, ArrowRight, Flame } from 'lucide-react';
import { SiteSettings } from '../types/index.js';
import { EditableText } from './live-edit/EditableText.js';
import { useLanguage } from '../context/LanguageContext.js';

interface HeroProps {
  settings: SiteSettings;
}

export const Hero: React.FC<HeroProps> = ({ settings }) => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-white/[0.06] bg-[#05070c]">
      {/* Dynamic Background Media (Image or Video) */}
      {settings.heroBackgroundMedia && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/\.(mp4|webm|mov|mkv|avi)(\?.*)?$/i.test(settings.heroBackgroundMedia) || settings.heroBackgroundMedia.includes('/video') ? (
            <video
              src={settings.heroBackgroundMedia}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-25"
            />
          ) : (
            <img
              src={settings.heroBackgroundMedia}
              alt="Hero Backdrop"
              className="w-full h-full object-cover opacity-20"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070c]/80 via-[#05070c]/60 to-[#05070c]" />
        </div>
      )}

      {/* Subtle architectural ambient glows - restrained and deep */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-amber-500/[0.07] blur-[150px] pointer-events-none rounded-full z-0" />
      <div className="absolute -bottom-10 right-10 w-[300px] h-[250px] bg-amber-600/[0.04] blur-[120px] pointer-events-none rounded-full z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Editorial Announcement Bar */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-medium backdrop-blur-md">
          <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <EditableText
            textKey="announcementText"
            defaultText={settings.announcementText || t('hero.announcement', 'FLASH SALE: Extra ₹150 OFF any Mega Bundle this weekend!')}
            className="truncate max-w-xs sm:max-w-xl font-medium"
            label="Store Announcement Bar"
          />
        </div>

        {/* Hero Title */}
        <div className="mb-4">
          <EditableText
            as="h1"
            textKey="heroHeading"
            defaultText={settings.heroHeading || t('hero.heading', 'LEGENDARY PC GAMING BUNDLES')}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-gaming uppercase text-white max-w-4xl mx-auto leading-[1.12] [text-wrap:balance]"
            label="Hero Main Headline"
          />
        </div>

        {/* Hero Subtitle */}
        <div className="mb-8">
          <EditableText
            as="p"
            multiline
            textKey="heroSubtitle"
            defaultText={settings.heroSubtitle || t('hero.subtitle', 'Direct verified digital delivery for top-tier AAA game vaults and curated PC collections. Activated to your account in minutes with lifetime access.')}
            className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal [text-wrap:balance]"
            label="Hero Subtitle"
          />
        </div>

        {/* Call to Actions (Direct Focused Routing) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
          <Link
            to="/bundles"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-black font-extrabold text-xs sm:text-sm shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer font-gaming tracking-wide whitespace-nowrap shrink-0"
          >
            <Zap className="w-4 h-4 fill-black text-black" />
            <span>{t('hero.btn_browse', 'Browse Vault Bundles')}</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </Link>

          <Link
            to="/bundles"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0d1326]/80 border border-white/10 hover:border-amber-500/50 hover:bg-white/[0.08] text-slate-200 hover:text-white font-bold text-xs sm:text-sm backdrop-blur-xl transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{t('hero.btn_videos', "See What's Included (Video)")}</span>
          </Link>

          <Link
            to="/channels"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0d1326]/80 border border-white/10 hover:border-amber-500/50 hover:bg-white/[0.08] text-slate-200 hover:text-white font-bold text-xs sm:text-sm backdrop-blur-xl transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>{t('hero.btn_channels', 'VIP Channels & Sites')}</span>
          </Link>
        </div>

        {/* Customer Proof Link */}
        <div className="mb-10">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-amber-300 transition-colors py-1 group"
          >
            <div className="flex text-amber-400 text-xs">
              {'★★★★★'.split('').map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <span>{t('hero.rated', 'Rated 4.9/5 by 150+ Gamers across India')}</span>
            <span className="text-amber-400 group-hover:underline">{t('hero.view_proof', '· View Proof →')}</span>
          </Link>
        </div>

        {/* Quantitative Proof Strip (Unified, Hairline Dividers & Tabular Numerals) */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] bg-[#080d1a]/85 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-4 sm:p-5 max-w-4xl mx-auto shadow-2xl">
          <div className="p-3 text-center">
            <div className="text-xl sm:text-2xl font-black font-mono tabular-nums text-amber-400 mb-0.5">60,000+</div>
            <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">{t('hero.stat_games', 'PC Games & Vaults')}</div>
          </div>
          <div className="p-3 text-center">
            <div className="text-xl sm:text-2xl font-black font-mono tabular-nums text-emerald-400 mb-0.5">&lt; 5 Mins</div>
            <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">{t('hero.stat_delivery', 'Direct DM Delivery')}</div>
          </div>
          <div className="p-3 text-center">
            <div className="text-xl sm:text-2xl font-black font-mono tabular-nums text-sky-400 mb-0.5">₹0 Fee</div>
            <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">{t('hero.stat_fee', 'Setup Fees & Hidden Costs')}</div>
          </div>
          <div className="p-3 text-center">
            <div className="text-xl sm:text-2xl font-black font-mono tabular-nums text-amber-400 mb-0.5 flex items-center justify-center gap-1">
              <span>4.9</span>
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">{t('hero.stat_rating', 'Verified Gamer Rating')}</div>
          </div>
        </div>

      </div>
    </section>
  );
};
