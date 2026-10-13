import React, { useState, useMemo } from 'react';
import { Gamepad2, Play, ExternalLink, Sparkles, Eye, CheckCircle2, Search, ArrowRight } from 'lucide-react';
import { Bundle, SiteSettings } from '../types/index.js';
import { openInstagram } from '../utils/api.js';

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

      {/* Bundles Grid */}
      {filteredBundles.length === 0 ? (
        <div className="glass-panel rounded-2xl p-12 text-center max-w-md mx-auto my-12">
          <Gamepad2 className="w-12 h-12 text-slate-500 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-2 font-gaming">No Bundles Found</h3>
          <p className="text-xs text-slate-400 mb-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBundles.map((bundle) => {
            const savingsPercent =
              bundle.originalPrice && bundle.originalPrice > bundle.price
                ? Math.round(((bundle.originalPrice - bundle.price) / bundle.originalPrice) * 100)
                : null;

            return (
              <div
                key={bundle.id}
                className={`group glass-card rounded-2xl overflow-hidden flex flex-col relative transition-all duration-300 ${
                  bundle.featured
                    ? 'border-2 border-amber-500/70 shadow-[0_0_35px_rgba(245,158,11,0.25)] ring-1 ring-amber-400/40 -translate-y-1'
                    : 'border border-white/10 hover:border-amber-500/30'
                }`}
              >
                {/* Cover Image & Media Preview container */}
                <div
                  onClick={() => onSelectBundle(bundle)}
                  className="relative aspect-[16/10] overflow-hidden bg-slate-950 cursor-pointer"
                  title="Click to view details & video trailer"
                >
                  <img
                    src={bundle.coverImage}
                    alt={bundle.title}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop';
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d111d] via-transparent to-black/40" />

                  {/* Badge */}
                  {bundle.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-amber-500 text-black text-[11px] font-extrabold tracking-wider font-gaming shadow-lg z-10">
                      {bundle.badge}
                    </div>
                  )}

                  {/* Video preview indicator */}
                  {bundle.videoPreview && (
                    <div
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-amber-400 border border-white/20 transition-transform group-hover:scale-110 flex items-center gap-1.5 text-[11px] font-semibold px-2.5 shadow-lg z-10"
                    >
                      <Play className="w-3.5 h-3.5 fill-amber-400" />
                      <span>Watch Trailer</span>
                    </div>
                  )}

                  {/* Game Count overlay */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-xs text-slate-200">
                    <Gamepad2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>{bundle.gameCount > 1 ? `${bundle.gameCount.toLocaleString('en-IN')} Games Included` : 'Steam Unlock Feature'}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {bundle.category && (
                      <div className="text-[11px] font-semibold tracking-wider text-amber-400/80 uppercase mb-1">
                        {bundle.category}
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white font-gaming group-hover:text-amber-300 transition-colors line-clamp-1 mb-2">
                      {bundle.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-4">
                      {bundle.shortDescription}
                    </p>

                    {/* Quick highlights from included items */}
                    {bundle.includedItems && bundle.includedItems.length > 0 && (
                      <div className="space-y-1.5 mb-6">
                        {bundle.includedItems.slice(0, 4).map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                        {bundle.includedItems.length > 4 && (
                          <div className="text-[11px] text-amber-400/90 font-medium pl-5">
                            + {bundle.includedItems.length - 4} more features in bundle
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-baseline justify-between mb-4">
                      <div>
                        <div className="text-[11px] text-slate-400 uppercase tracking-wider">
                          Vault Price
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl sm:text-3xl font-extrabold text-white font-gaming tracking-tight">
                            ₹{bundle.price.toLocaleString('en-IN')}
                          </span>
                          {bundle.originalPrice && (
                            <span className="text-sm text-slate-500 line-through">
                              ₹{bundle.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                      </div>

                      {savingsPercent && (
                        <div className="px-2 py-1 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                          Save {savingsPercent}%
                        </div>
                      )}
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => onSelectBundle(bundle)}
                        className="w-full py-2.5 px-3 rounded-xl glass-panel text-slate-200 hover:text-white hover:border-amber-500/30 font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <Eye className="w-4 h-4 text-slate-300" />
                        <span>View More</span>
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          openInstagram(settings.instagramUrl, bundle.title, bundle.price)
                        }
                        className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all cursor-pointer"
                      >
                        <span>Buy Now</span>
                        <ArrowRight className="w-3.5 h-3.5 text-black" />
                      </button>
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
