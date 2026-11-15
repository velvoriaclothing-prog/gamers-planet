import React, { useState, useMemo } from 'react';
import { Gamepad2, Play, Search, Edit3, Share2, Check, Snowflake } from 'lucide-react';
import { Bundle, SiteSettings } from '../types/index.js';
import { useLiveEdit } from './live-edit/LiveEditContext.js';
import { shareBundleLink } from '../utils/shareBundle.js';

interface BundleGridProps {
  bundles: Bundle[];
  settings: SiteSettings;
  isAdmin?: boolean;
  onSelectBundle: (bundle: Bundle) => void;
  onOpenAdmin?: () => void;
}

function toCleanTitle(raw: string): string {
  // Format loud uppercase titles into clean editorial title case while keeping brand acronyms intact
  if (raw !== raw.toUpperCase()) return raw;
  return raw
    .toLowerCase()
    .split(' ')
    .map((word) => {
      if (['vip', 'pc', 'id', 'gta', 'dlc'].includes(word)) return word.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

export const BundleGrid: React.FC<BundleGridProps> = ({
  bundles,
  isAdmin,
  onSelectBundle,
  onOpenAdmin,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [shareToast, setShareToast] = useState<{ show: boolean; message: string }>({
    show: false,
    message: ''
  });

  const handleShareBundle = async (e: React.MouseEvent, bundle: Bundle) => {
    e.stopPropagation();
    const res = await shareBundleLink(bundle);
    if (res.copied || res.shared) {
      setShareToast({
        show: true,
        message: res.copied ? 'Bundle link copied!' : 'Bundle link shared!'
      });
      setTimeout(() => setShareToast({ show: false, message: '' }), 2600);
    }
  };

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
    <section id="bundles" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-6">
      {/* Share Toast Notification */}
      {shareToast.show && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg bg-[#18181c] border border-white/15 text-white font-medium text-xs sm:text-sm shadow-2xl flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{shareToast.message}</span>
        </div>
      )}

      {/* Editorial Header — Clean left-aligned hierarchy matching reference */}
      <div className="mb-6 sm:mb-7 max-w-2xl">
        <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Game Bundles
          </h1>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 tracking-wide">
            <Snowflake className="w-3.5 h-3.5 text-sky-300 shrink-0" />
            <span>Christmas Sale · Flat 50% OFF</span>
          </span>
        </div>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Browse all curated PC game vaults. Click any bundle to watch the preview video and message us on <span className="text-zinc-200 font-medium">WhatsApp Business</span> to claim 50% OFF.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative w-full max-w-sm mb-4">
        <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search bundles or games..."
          className="w-full pl-10 pr-8 py-2.5 rounded-lg bg-[#141418]/90 backdrop-blur-md border border-white/[0.1] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500/60 transition-colors"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>

      {/* Category Filter Pills */}
      {categories.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-7 scrollbar-none">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer border ${
                  active
                    ? 'bg-red-600 border-red-500 text-white shadow-sm'
                    : 'bg-[#16161a]/90 border-white/[0.08] text-zinc-300 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Bundles Grid: Clean 2-col on mobile, 4-col on desktop matching reference */}
      {filteredBundles.length === 0 ? (
        <div className="bg-[#121215] rounded-xl p-10 text-center max-w-md mx-auto my-8 border border-white/[0.07]">
          <Gamepad2 className="w-9 h-9 text-zinc-500 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-white mb-1">No Bundles Found</h3>
          <p className="text-xs text-zinc-400 mb-4">
            {searchQuery
              ? `No bundles matching "${searchQuery}". Try another keyword.`
              : 'No gaming bundles are currently active.'}
          </p>
          {isAdmin && onOpenAdmin && (
            <button
              onClick={onOpenAdmin}
              className="px-4 py-2 text-xs font-medium rounded-lg bg-red-600 text-white hover:bg-red-500 transition-colors cursor-pointer"
            >
              Add Bundle in Admin
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {filteredBundles.map((rawBundle) => {
            const bundle = getEffectiveBundle(rawBundle);
            const displayTitle = toCleanTitle(bundle.title);
            const gamesLabel =
              bundle.gameCount > 1
                ? `${bundle.gameCount.toLocaleString('en-IN')} Games`
                : bundle.category || 'Steam Unlock';

            return (
              <div
                key={bundle.id}
                onClick={() => onSelectBundle(bundle)}
                className="group bg-[#121215] hover:bg-[#17171b] border border-white/[0.07] hover:border-white/[0.18] rounded-xl overflow-hidden flex flex-col relative transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                {/* Live Edit Trigger */}
                {isLiveEditMode && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openBundleQuickEdit(bundle);
                    }}
                    className="absolute top-2 right-2 z-30 px-2 py-1 rounded-md bg-amber-500 hover:bg-amber-400 text-black text-[10px] font-bold flex items-center gap-1 shadow cursor-pointer"
                    title="Edit bundle"
                  >
                    <Edit3 className="w-2.5 h-2.5" />
                    <span>Edit</span>
                  </button>
                )}

                {/* Clean 16:9 Artwork Header (zero sticker clutter) */}
                <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
                  <img
                    src={bundle.coverImage}
                    alt={displayTitle}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg';
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300 ease-out"
                    loading="lazy"
                  />

                  {/* Subtle hover play affordance */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-10 h-10 rounded-full bg-white/95 text-black flex items-center justify-center shadow-lg">
                      <Play className="w-4 h-4 fill-black ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Clean Two-Line Card Footer */}
                <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
                  <h2 className="text-xs sm:text-[15px] font-semibold text-white group-hover:text-zinc-100 truncate leading-snug">
                    {displayTitle}
                  </h2>

                  <div className="mt-1.5 flex items-center justify-between gap-1.5">
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-400 truncate min-w-0">
                      <Play className="w-3 h-3 text-red-500 fill-red-500 shrink-0" />
                      <span className="text-amber-400 font-medium shrink-0">50% OFF</span>
                      <span aria-hidden="true" className="text-zinc-600">·</span>
                      <span className="truncate">{gamesLabel}</span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleShareBundle(e, bundle)}
                      title="Share bundle link"
                      aria-label={`Share ${displayTitle}`}
                      className="p-1.5 -mr-1 rounded-md text-zinc-500 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer shrink-0"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
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
