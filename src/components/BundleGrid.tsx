import React, { useState, useMemo } from 'react';
import { Gamepad2, Play, ExternalLink, Sparkles, Eye, CheckCircle2, Search, ArrowRight, Edit3 } from 'lucide-react';
import { Bundle, SiteSettings } from '../types/index.js';
import { getChannelRedirectInfo } from '../utils/channelRedirect.js';
import { useLiveEdit } from './live-edit/LiveEditContext.js';

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

  return (
    <section id="bundles" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Curated Game Collections</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-gaming tracking-tight">
            EXCLUSIVE GAMING VAULTS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Pre-configured, high-speed verified game collections. Click "View More" for complete game lists and previews, or "Buy Now" to claim via Instagram DM.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search game or bundle..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Category Filter Tabs */}
      {categories.length > 2 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-black font-semibold shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'glass-card text-slate-300 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Bundles Grid (Compact, Smaller Cards) */}
      {filteredBundles.length === 0 ? (
        <div className="bg-[#090d18] rounded-2xl p-8 text-center max-w-md mx-auto my-8 border border-white/10">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredBundles.map((rawBundle) => {
            const bundle = getEffectiveBundle(rawBundle);
            const savingsPercent =
              bundle.originalPrice && bundle.originalPrice > bundle.price
                ? Math.round(((bundle.originalPrice - bundle.price) / bundle.originalPrice) * 100)
                : null;

            return (
              <div
                key={bundle.id}
                className={`group bg-[#090d18]/95 rounded-xl sm:rounded-2xl overflow-hidden flex flex-col relative transition-all duration-300 hover:-translate-y-1 ${
                  bundle.featured
                    ? 'border-2 border-amber-500/80 shadow-[0_0_30px_rgba(245,158,11,0.2)] ring-1 ring-amber-400/30'
                    : 'border border-white/10 hover:border-amber-500/40'
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
                {/* Cover Image & Media Preview container (Compact 16/10) */}
                <div
                  onClick={() => onSelectBundle(bundle)}
                  className="relative aspect-[16/10] max-h-36 sm:max-h-40 overflow-hidden bg-slate-950 cursor-pointer"
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

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d18] via-transparent to-black/35" />

                  {/* Badge */}
                  {bundle.badge && (
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-amber-500 text-black text-[9px] font-black tracking-wider font-gaming shadow-sm z-10">
                      {bundle.badge}
                    </div>
                  )}

                  {/* Video preview indicator */}
                  {bundle.videoPreview && (
                    <div
                      className="absolute top-2 right-2 p-1 rounded-md bg-black/80 hover:bg-black/95 backdrop-blur-md text-amber-400 border border-white/20 transition-transform group-hover:scale-105 flex items-center gap-1 text-[9px] font-bold px-2 shadow-sm z-10"
                    >
                      <Play className="w-2.5 h-2.5 fill-amber-400" />
                      <span>Trailer</span>
                    </div>
                  )}

                  {/* Game Count overlay */}
                  <div className="absolute bottom-1.5 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] text-slate-200">
                    <Gamepad2 className="w-3 h-3 text-amber-400" />
                    <span>{bundle.gameCount > 1 ? `${bundle.gameCount.toLocaleString('en-IN')} Games` : 'Steam Unlock'}</span>
                  </div>
                </div>

                {/* Card Content (Compact & Sleek) */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {bundle.category && (
                      <div className="text-[9px] font-bold tracking-wider text-amber-400/90 uppercase mb-0.5">
                        {bundle.category}
                      </div>
                    )}
                    <h3 className="text-sm sm:text-base font-bold text-white font-gaming group-hover:text-amber-300 transition-colors line-clamp-1 mb-1">
                      {bundle.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-2 leading-relaxed mb-2.5">
                      {bundle.shortDescription}
                    </p>

                    {/* Popular Titles Preview in Bundle (Sleek Mini Strip) */}
                    {bundle.popularTitlesPreview && bundle.popularTitlesPreview.length > 0 && (
                      <div className="mb-2.5 bg-black/40 rounded-lg p-1.5 border border-white/[0.07]">
                        <div className="flex items-center justify-between text-[9px] font-bold text-amber-400 mb-1 font-gaming tracking-wide">
                          <span className="flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                            <span>POPULAR TITLES</span>
                          </span>
                          <span className="text-[8px] text-slate-400 font-sans font-normal">
                            +{bundle.gameCount > 10 ? `${(bundle.gameCount - bundle.popularTitlesPreview.length).toLocaleString('en-IN')} more` : 'All unlocked'}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-1">
                          {bundle.popularTitlesPreview.slice(0, 3).map((game, gIdx) => (
                            <div 
                              key={gIdx} 
                              className="group/game relative rounded overflow-hidden border border-white/10 bg-slate-950 aspect-[16/10] shadow-sm hover:border-amber-400/50 transition-colors"
                              title={game.title}
                            >
                              <img
                                src={game.coverImage}
                                alt={game.title}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover group-hover/game:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex items-end p-0.5">
                                <span className="text-[7.5px] font-semibold text-white truncate leading-tight w-full drop-shadow">
                                  {game.title}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quick highlights from included items (2 items) */}
                    {bundle.includedItems && bundle.includedItems.length > 0 && (
                      <div className="space-y-0.5 mb-2.5">
                        {bundle.includedItems.slice(0, 2).map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-1 text-[11px] text-slate-300 truncate"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div className="pt-2.5 border-t border-white/[0.08]">
                    <div className="flex items-baseline justify-between mb-2.5">
                      <div>
                        <div className="text-[9px] text-slate-400 uppercase tracking-wider">
                          Vault Price
                        </div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-lg sm:text-xl font-black text-white font-gaming tracking-tight">
                            ₹{bundle.price.toLocaleString('en-IN')}
                          </span>
                          {bundle.originalPrice && (
                            <span className="text-[11px] text-slate-500 line-through">
                              ₹{bundle.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                      </div>

                      {savingsPercent && (
                        <div className="px-1.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                          Save {savingsPercent}%
                        </div>
                      )}
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        type="button"
                        onClick={() => onSelectBundle(bundle)}
                        className="w-full py-1.5 px-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-semibold text-[11px] flex items-center justify-center gap-1 transition-all cursor-pointer"
                      >
                        <Eye className="w-3 h-3 text-slate-300" />
                        <span>Details</span>
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
                            className="w-full py-1.5 px-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-black text-[11px] flex items-center justify-center gap-1 shadow-sm transition-all cursor-pointer active:scale-95 text-center"
                            title={`Buy via ${redirectInfo.platformName}`}
                          >
                            <span>Buy Now</span>
                            <ArrowRight className="w-3 h-3 text-black shrink-0" />
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
