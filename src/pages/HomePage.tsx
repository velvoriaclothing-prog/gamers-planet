import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Gamepad2, 
  Search, 
  Lock, 
  Star, 
  ArrowRight, 
  Flame, 
  ShieldCheck, 
  Sparkles,
  KeyRound,
  CheckCircle2,
  Clock,
  Layers,
  HelpCircle
} from 'lucide-react';
import { Bundle, Review, SiteSettings } from '../types/index.js';
import { Hero } from '../components/Hero.js';
import { SaleTimerSection } from '../components/SaleTimerSection.js';
import { FeaturesSection } from '../components/FeaturesSection.js';
import { getChannelRedirectInfo } from '../utils/channelRedirect.js';

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
  return (
    <div className="space-y-8 sm:space-y-12">
      {/* 1. Hero Section */}
      <Hero settings={settings} />

      {/* 2. Quick Multi-Page Hub Navigation Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXPLORE STORE SECTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-gaming tracking-tight">
            WHAT WOULD YOU LIKE TO EXPLORE?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-1">
            Choose a dedicated section below to browse vaults, search games, or view customer proof.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          
          {/* Card 1: Bundles */}
          <Link
            to="/bundles"
            className="group glass-card p-3 sm:p-4 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 bg-[#090d18]/90 text-center flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-2.5 group-hover:scale-110 transition-transform">
                <Flame className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-400 text-amber-400" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white font-gaming group-hover:text-amber-300 transition-colors">
                Bundles Vault
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 line-clamp-1">
                From ₹399 (1k-60k Games)
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-bold text-amber-400 flex items-center justify-center gap-1">
              <span>View Vault</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* Card 2: Singles */}
          <Link
            to="/single-games"
            className="group glass-card p-3 sm:p-4 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 bg-[#090d18]/90 text-center flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2.5 group-hover:scale-110 transition-transform">
                <KeyRound className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white font-gaming group-hover:text-emerald-300 transition-colors">
                Single Games
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 line-clamp-1">
                From ₹80 (ID & Pass)
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-bold text-emerald-400 flex items-center justify-center gap-1">
              <span>Get Single</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* Card 3: Search Catalog */}
          <Link
            to="/catalog"
            className="group glass-card p-3 sm:p-4 rounded-2xl border border-white/10 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-1 bg-[#090d18]/90 text-center flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-2.5 group-hover:scale-110 transition-transform">
                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white font-gaming group-hover:text-sky-300 transition-colors">
                Search 60K+
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 line-clamp-1">
                Instant Acronyms & Aliases
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-bold text-sky-400 flex items-center justify-center gap-1">
              <span>Search Titles</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* Card 4: VIP Channels */}
          <Link
            to="/channels"
            className="group glass-card p-3 sm:p-4 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 bg-[#090d18]/90 text-center flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-2.5 group-hover:scale-110 transition-transform">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white font-gaming group-hover:text-purple-300 transition-colors">
                VIP Channels
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 line-clamp-1">
                Telegram & Private Sites
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-bold text-purple-400 flex items-center justify-center gap-1">
              <span>Unlock VIP</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* Card 5: Reviews */}
          <Link
            to="/reviews"
            className="group glass-card p-3 sm:p-4 rounded-2xl border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 bg-[#090d18]/90 text-center flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-2.5 group-hover:scale-110 transition-transform">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-400 text-amber-400" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white font-gaming group-hover:text-amber-300 transition-colors">
                Customer Proof
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 line-clamp-1">
                65+ Indian Gamers
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-bold text-amber-400 flex items-center justify-center gap-1">
              <span>Read Proof</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* Card 6: FAQ */}
          <Link
            to="/faq"
            className="group glass-card p-3 sm:p-4 rounded-2xl border border-white/10 hover:border-slate-400/50 transition-all duration-300 hover:-translate-y-1 bg-[#090d18]/90 text-center flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-slate-200 mb-2.5 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-slate-200" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white font-gaming group-hover:text-white transition-colors">
                Setup Guide
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 line-clamp-1">
                5-Min Instant Delivery
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-bold text-slate-300 flex items-center justify-center gap-1">
              <span>View FAQ</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

        </div>
      </section>

      {/* 3. Flash Sale Section with Countdown Timer (Compact Spotlight) */}
      <SaleTimerSection
        bundles={bundles}
        settings={settings}
        onSelectBundle={onSelectBundle}
        showBundlesList={true}
      />

      {/* 4. Trending Single Games Spotlight (GTA 5, Wukong, Cyberpunk, God of War) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 pb-3 border-b border-white/10 gap-2">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 font-gaming">
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>INDIVIDUAL TITLES ON DEMAND</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-gaming mt-0.5">
              TRENDING PC SINGLES (FROM ₹80)
            </h3>
          </div>
          <Link
            to="/single-games"
            className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 group"
          >
            <span>View All Singles & Custom Requests</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 4 Compact Game Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
          {[
            {
              title: 'Grand Theft Auto V: Premium (GTA 5)',
              genre: 'Open World Crime Action',
              coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg',
              badge: 'BESTSELLER'
            },
            {
              title: 'Black Myth: Wukong',
              genre: 'Action RPG',
              coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg',
              badge: 'GOTY WINNER'
            },
            {
              title: 'Cyberpunk 2077: Phantom Liberty',
              genre: 'Open World RPG',
              coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
              badge: 'RAY TRACING'
            },
            {
              title: 'God of War Ragnarök',
              genre: 'Mythological Action',
              coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/header.jpg',
              badge: 'PLAYSTATION HIT'
            }
          ].map((game, idx) => (
            <div
              key={idx}
              className="bg-[#080b14]/95 rounded-xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-md group hover:-translate-y-0.5"
            >
              <div className="relative aspect-[16/10] max-h-24 sm:max-h-28 overflow-hidden bg-slate-950">
                <img
                  src={game.coverImage}
                  alt={game.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/25" />
                <div className="absolute top-1.5 left-1.5">
                  <span className="px-1.5 py-0.5 rounded bg-amber-500 text-black text-[8px] font-black uppercase font-gaming">
                    {game.badge}
                  </span>
                </div>
                <div className="absolute bottom-1 left-1.5 right-1.5">
                  <span className="text-[7.5px] font-semibold text-amber-300 uppercase tracking-wider block truncate">
                    {game.genre}
                  </span>
                  <h4 className="text-[11px] sm:text-xs font-bold text-white font-gaming truncate leading-tight drop-shadow">
                    {game.title}
                  </h4>
                </div>
              </div>

              <div className="p-1.5 sm:p-2 space-y-1 bg-[#090d18]">
                {(() => {
                  const idPassInfo = getChannelRedirectInfo(settings, {
                    message: `Hi GAMERS PLANET! I want to get Steam Account ID & Password for ${game.title} (₹80).`
                  });
                  return (
                    <a
                      href={idPassInfo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-1 px-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 font-bold text-[9.5px] sm:text-[10px] flex items-center justify-between transition-all cursor-pointer active:scale-95"
                      title={`Get ID & Pass via ${idPassInfo.platformName}`}
                    >
                      <span className="flex items-center gap-1 truncate">
                        <KeyRound className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                        <span className="truncate">ID & Pass</span>
                      </span>
                      <span className="px-1 py-0.2 rounded bg-emerald-400 text-black text-[9px] font-black shrink-0 font-gaming">
                        ₹80
                      </span>
                    </a>
                  );
                })()}

                {(() => {
                  const personalInfo = getChannelRedirectInfo(settings, {
                    message: `Hi GAMERS PLANET! I want to add ${game.title} directly to my personal Steam account (₹120).`
                  });
                  return (
                    <a
                      href={personalInfo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-1 px-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/35 text-amber-300 font-bold text-[9.5px] sm:text-[10px] flex items-center justify-between transition-all cursor-pointer active:scale-95"
                      title={`Add to personal account via ${personalInfo.platformName}`}
                    >
                      <span className="flex items-center gap-1 truncate">
                        <CheckCircle2 className="w-2.5 h-2.5 text-sky-400 shrink-0" />
                        <span className="truncate">Personal</span>
                      </span>
                      <span className="px-1 py-0.2 rounded bg-amber-400 text-black text-[9px] font-black shrink-0 font-gaming">
                        ₹120
                      </span>
                    </a>
                  );
                })()}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Choose Us / Trust Badges */}
      <FeaturesSection settings={settings} />
    </div>
  );
};
