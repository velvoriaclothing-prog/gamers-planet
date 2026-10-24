import React, { useState, useMemo } from 'react';
import { Gamepad2, Play, ExternalLink, Sparkles, Eye, CheckCircle2, Search, ArrowRight, Edit3, Flame } from 'lucide-react';
import { Bundle, SiteSettings } from '../types/index.js';
import { getChannelRedirectInfo } from '../utils/channelRedirect.js';
import { useLiveEdit } from './live-edit/LiveEditContext.js';
import { useLanguage } from '../context/LanguageContext.js';

interface BundleGridProps {
  bundles: Bundle[];
  settings: SiteSettings;
  isAdmin?: boolean;
  onSelectBundle: (bundle: Bundle) => void;
  onOpenAdmin?: () => void;
}

export const BundleGrid: React.FC<BundleGridProps> = ({
  bundles,
  settings,
  isAdmin,
  onSelectBundle,
  onOpenAdmin,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>(['All']);
    bundles.forEach((b) => {
      if (b.category) set.add(b.category);
    });
    return Array.from(set);
  }, [bundles]);

  const filteredBundles = useMemo(() => {
    return bundles.filter((bundle) => {
      const matchCat =
        selectedCategory === 'All' || bundle.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchCat;

      const matchTitle = bundle.title.toLowerCase().includes(query);
      const matchDesc = bundle.shortDescription.toLowerCase().includes(query);
      const matchItems = bundle.includedItems.some((item) =>
        item.toLowerCase().includes(query)
      );

      return matchCat && (matchTitle || matchDesc || matchItems);
    });
  }, [bundles, selectedCategory, searchQuery]);

  const { isLiveEditMode, openBundleQuickEdit, getEffectiveBundle } = useLiveEdit();
  const { t } = useLanguage();

  return (
    <section id="bundles" className="relative py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Subtle ambient lighting halo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[300px] bg-amber-500/[0.07] blur-[150px] pointer-events-none rounded-full z-0" />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
            <span>{t('bundles.badge', 'OFFICIAL GAMING VAULTS • LIFETIME VALIDITY')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-gaming tracking-tight [text-wrap:balance]">
            {t('bundles.heading', 'EXCLUSIVE GAMING VAULTS')}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed [text-wrap:balance]">
            {t('bundles.subtitle', 'Pre-configured, high-speed verified game collections with video proof and direct verified activation.')}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search game or bundle..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400/60 shadow-lg"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Tabs */}
      {categories.length > 2 && (
        <div className="relative z-10 flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-gaming font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.45)] scale-[1.02]'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Bundles Grid */}
      {filteredBundles.length === 0 ? (
        <div className="relative z-10 bg-[#090d18] rounded-2xl p-8 text-center max-w-md mx-auto my-8 border border-white/10 shadow-2xl">
          <Gamepad2 className="w-10 h-10 text-slate-500 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white mb-1.5 font-gaming">No Bundles Found</h3>
          <p className="text-xs text-slate-400 mb-4">
            {searchQuery
              ? `No bundles matching "${searchQuery}". Try a different keyword.`
              : 'No gaming bundles are currently active in the vault.'}
          </p>
          {isAdmin && onOpenAdmin && (
            <button
              onClick={onOpenAdmin}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 text-black hover:bg-amber-400 transition-colors cursor-pointer"
            >
              Create First Bundle in Admin
            </button>
          )}
        </div>
      ) : (
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredBundles.map((rawBundle) => {
            const bundle = getEffectiveBundle(rawBundle);
            const savingsPercent =
              bundle.originalPrice && bundle.originalPrice > bundle.price
                ? Math.round(((bundle.originalPrice - bundle.price) / bundle.originalPrice) * 100)
                : null;

            return (
              <div
                key={bundle.id}
                className={`group bg-gradient-to-b from-[#0c1224]/95 via-[#080c18]/95 to-[#040711] rounded-2xl overflow-hidden flex flex-col relative transition-all duration-300 hover:-translate-y-1.5 ${
                  bundle.featured
                    ? 'border-2 border-amber-500/80 shadow-[0_15px_45px_rgba(0,0,0,0.85),0_0_35px_rgba(245,158,11,0.25)] ring-1 ring-amber-400/40'
                    : 'border border-white/10 hover:border-amber-500/50 shadow-[0_12px_40px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_55px_rgba(0,0,0,0.9),0_0_30px_rgba(245,158,11,0.18)]'
                }`}
              >
                {/* Live Edit Mode Trigger Button */}
                {isLiveEditMode && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openBundleQuickEdit(bundle);
                    }}
                    className="absolute top-2 right-2 z-30 px-2 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-[10px] font-black flex items-center gap-1 shadow-xl cursor-pointer animate-pulse"
                    title="Click to edit bundle title, prices, or badge"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>Edit Live</span>
                  </button>
                )}
                {/* Cover Image & Media Preview container (Cinematic 16/9) */}
                <div
                  onClick={() => onSelectBundle(bundle)}
                  className="relative aspect-[16/9] overflow-hidden bg-slate-950 cursor-pointer"
                  title="Click to view details & video trailer"
                >
                  <img
                    src={bundle.coverImage}
                    alt={bundle.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg';
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient overlay for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d18] via-transparent to-black/30" />

                  {/* Subtle Top Badge */}
                  {bundle.badge && (
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-amber-500 text-black text-[9px] font-black tracking-wider font-gaming shadow-sm z-10 uppercase">
                      {bundle.badge}
                    </div>
                  )}

                  {/* Video preview indicator */}
                  {(bundle.videoPreview || (bundle.videoPlaylist && bundle.videoPlaylist.length > 0)) && (
                    <div
                      className="absolute top-2.5 right-2.5 p-1 rounded bg-black/80 hover:bg-black/95 backdrop-blur-md text-amber-400 border border-amber-500/30 transition-transform group-hover:scale-105 flex items-center gap-1 text-[9px] font-bold px-2 shadow-sm z-10"
                    >
                      <Play className="w-2.5 h-2.5 fill-amber-400" />
                      <span>
                        {bundle.videoPlaylist && bundle.videoPlaylist.length > 1
                          ? `${bundle.videoPlaylist.length}-Part Video`
                          : t('bundles.see_video', "What's Included in Video")}
                      </span>
                    </div>
                  )}

                  {/* Watch Video Hover Play Overlay */}
                  {(bundle.videoPreview || (bundle.videoPlaylist && bundle.videoPlaylist.length > 0)) && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-[1px] z-10">
                      <div className="px-4 py-2 rounded-xl bg-amber-500 text-black text-xs font-black font-gaming flex items-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.7)] transform scale-95 group-hover:scale-100 transition-transform">
                        <Play className="w-3.5 h-3.5 fill-black" />
                        <span>{t('video.heading', "SEE WHAT'S INCLUDED (VIDEO)")}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Content (Refined, Editorial & Unboxed) */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata (Category · Games Count) */}
                    <div className="flex items-center gap-2 text-[11px] font-medium text-amber-400 uppercase tracking-wider mb-1.5">
                      <span>{bundle.category || 'Vault Bundle'}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-300 font-mono tabular-nums">
                        {bundle.gameCount > 1 ? `${bundle.gameCount.toLocaleString('en-IN')} Games` : 'Steam Unlock'}
                      </span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-emerald-400 font-normal">Lifetime Updates</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white font-gaming group-hover:text-amber-300 transition-colors line-clamp-1 mb-1.5">
                      {bundle.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-3">
                      {bundle.shortDescription}
                    </p>

                    {/* Popular Titles Preview in Bundle (Sleek Mini Strip) */}
                    {bundle.popularTitlesPreview && bundle.popularTitlesPreview.length > 0 && (
                      <div className="mb-3 bg-black/40 rounded-xl p-2 border border-white/[0.07]">
                        <div className="flex items-center justify-between text-[10px] font-bold text-amber-400 mb-1.5 font-gaming tracking-wide">
                          <span className="flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3 text-amber-400" />
                            <span>POPULAR TITLES INCLUDED</span>
                          </span>
                          <span className="text-[9px] text-slate-400 font-sans font-normal font-mono tabular-nums">
                            +{bundle.gameCount > 10 ? `${(bundle.gameCount - bundle.popularTitlesPreview.length).toLocaleString('en-IN')} more` : 'Full library'}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5">
                          {bundle.popularTitlesPreview.slice(0, 3).map((game, gIdx) => (
                            <div 
                              key={gIdx} 
                              className="group/game relative rounded-lg overflow-hidden border border-white/10 bg-slate-950 aspect-[16/10] shadow-sm hover:border-amber-400/50 transition-colors"
                              title={game.title}
                            >
                              <img
                                src={game.coverImage}
                                alt={game.title}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover group-hover/game:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex items-end p-1">
                                <span className="text-[8px] font-semibold text-white truncate leading-tight w-full drop-shadow">
                                  {game.title}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quick highlights from included items */}
                    {bundle.includedItems && bundle.includedItems.length > 0 && (
                      <div className="space-y-1 mb-3">
                        {bundle.includedItems.slice(0, 2).map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-1.5 text-xs text-slate-300 truncate"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div className="pt-3 border-t border-white/[0.08]">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
                          Vault Price
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl sm:text-2xl font-black font-mono tabular-nums text-white font-gaming tracking-tight">
                            ₹{bundle.price.toLocaleString('en-IN')}
                          </span>
                          {bundle.originalPrice && (
                            <span className="text-xs text-slate-500 line-through font-mono tabular-nums">
                              ₹{bundle.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                      </div>

                      {savingsPercent && (
                        <div className="px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold font-mono tabular-nums">
                          Save {savingsPercent}%
                        </div>
                      )}
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectBundle(bundle)}
                        className="w-full py-2 px-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
                      >
                        {bundle.videoPreview ? (
                          <>
                            <Play className="w-3 h-3 text-amber-400 fill-amber-400" />
                            <span>{t('bundles.see_video', 'Watch Video')}</span>
                          </>
                        ) : (
                          <>
                            <Eye className="w-3 h-3 text-slate-300" />
                            <span>{t('bundles.view_details', 'Details')}</span>
                          </>
                        )}
                      </button>

                      {(() => {
                        const redirectInfo = getChannelRedirectInfo(settings, {
                          bundleTitle: bundle.title,
                          price: bundle.price,
                          actionType: 'purchase'
                        });
                        return (
                          <a
                            href={redirectInfo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2 px-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer active:scale-95 text-center whitespace-nowrap"
                            title={`Buy via ${redirectInfo.platformName}`}
                          >
                            <span>{t('bundles.claim_now', 'Buy Now')}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-black shrink-0" />
                          </a>
                        );
                      })()}
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
