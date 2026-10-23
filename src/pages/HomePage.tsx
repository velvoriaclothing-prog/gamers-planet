import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Film, 
  Lock, 
  ArrowRight, 
  Flame, 
  ShieldCheck, 
  Sparkles,
  Star,
  CheckCircle2
} from 'lucide-react';
import { Bundle, Review, SiteSettings } from '../types/index.js';
import { Hero } from '../components/Hero.js';
import { SaleTimerSection } from '../components/SaleTimerSection.js';
import { BundleGrid } from '../components/BundleGrid.js';
import { VideoShowcaseSection } from '../components/VideoShowcaseSection.js';
import { ChannelsSection } from '../components/ChannelsSection.js';
import { FeaturesSection } from '../components/FeaturesSection.js';
import { getChannelRedirectInfo } from '../utils/channelRedirect.js';
import { useLanguage } from '../context/LanguageContext.js';

interface HomePageProps {
  bundles: Bundle[];
  reviews: Review[];
  settings: SiteSettings;
  onSelectBundle: (bundle: Bundle) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  bundles,
  reviews,
  settings,
  onSelectBundle
}) => {
  const { t } = useLanguage();
  const redirectInfo = getChannelRedirectInfo(settings, { actionType: 'dm' });

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1. Hero Section */}
      <Hero settings={settings} />

      {/* 2. Focused 3-Pillar Glass Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Pillar 1: Bundles Vault */}
          <Link
            to="/bundles"
            className="group glass-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between border border-white/[0.08] hover:border-amber-500/50 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform">
                <Flame className="w-6 h-6 fill-amber-400 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-white font-gaming group-hover:text-amber-300 transition-colors">
                {t('nav.bundles', 'PC Gaming Bundles')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                {t('bundles.subtitle', 'Curated game vaults with Steam Unlock, full DLC expansions, and personal 1-on-1 customer setup support.')}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/5 text-xs font-bold text-amber-400 flex items-center justify-between">
              <span>{t('hero.btn_browse', 'Explore Vault Bundles')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Pillar 2: What's Included in Bundle (See in Video) */}
          <a
            href="/bundles#gameplay-videos"
            className="group glass-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between border border-white/[0.08] hover:border-amber-500/50 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform">
                <Film className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-white font-gaming group-hover:text-amber-300 transition-colors">
                {t('video.eyebrow', "What's Included in Bundle")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                {t('video.subtitle', 'Watch full video walkthroughs demonstrating every game, Steam Unlock feature, and setup perk included in each vault.')}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/5 text-xs font-bold text-amber-400 flex items-center justify-between">
              <span>{t('hero.btn_videos', 'See in Video')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Pillar 3: VIP Channels & Sites */}
          <Link
            to="/channels"
            className="group glass-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between border border-white/[0.08] hover:border-amber-500/50 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform">
                <Lock className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-white font-gaming group-hover:text-amber-300 transition-colors">
                {t('channels.title', 'VIP Channels & Sites')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                {t('channels.subtitle', 'Direct access to private Telegram channels, password listings, and verified cloud library sites.')}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/5 text-xs font-bold text-amber-400 flex items-center justify-between">
              <span>{t('channels.title', 'Access Channels')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>
      </section>

      {/* 3. Flash Sale Spotlight Timer */}
      <SaleTimerSection
        bundles={bundles}
        settings={settings}
        onSelectBundle={onSelectBundle}
        showBundlesList={false}
      />

      {/* 4. Official Gaming Bundles Vault Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 font-gaming mb-1.5">
              <Sparkles className="w-4 h-4" />
              <span>{t('bundles.badge', 'OFFICIAL PC GAME PACKAGES')}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white font-gaming tracking-tight">
              {t('bundles.heading', 'CURATED BUNDLE VAULTS')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {t('bundles.subtitle', 'Select any package below to inspect full titles, watch trailers, or order directly.')}
            </p>
          </div>

          <Link
            to="/bundles"
            className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 group shrink-0"
          >
            <span>{t('hero.btn_browse', 'View Full Vault Catalog')}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <BundleGrid
          bundles={bundles}
          settings={settings}
          onSelectBundle={onSelectBundle}
        />
      </section>

      {/* 5. Cinema Gameplay Video Trailers (Sequential Player) */}
      <VideoShowcaseSection
        bundles={bundles}
        settings={settings}
        onSelectBundle={onSelectBundle}
      />

      {/* 6. VIP Channels Section Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChannelsSection settings={settings} />
      </section>

      {/* 7. Why Gamers Planet (Trust, Speed, Support) */}
      <FeaturesSection settings={settings} />
    </div>
  );
};
