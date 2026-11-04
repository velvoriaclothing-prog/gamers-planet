import React, { useState, useMemo } from 'react';
import { Gamepad2, Play, Search, ArrowRight, Edit3, Flame, Share2, Check, Instagram, Video, ShieldCheck } from 'lucide-react';
import { Bundle, SiteSettings } from '../types/index.js';
import { getChannelRedirectInfo } from '../utils/channelRedirect.js';
import { useLiveEdit } from './live-edit/LiveEditContext.js';
import { useLanguage } from '../context/LanguageContext.js';
import { shareBundleLink } from '../utils/shareBundle.js';

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
  const [shareToast, setShareToast] = useState<{ show: boolean; message: string }>({
    show: false,
    message: ''
  });

  const handleShareBundle = async (e: React.MouseEvent, bundle: Bundle) => {
    e.stopPropagation();
    const res = await shareBundleLink(bundle);
    if (res.copied) {
      setShareToast({
        show: true,
        message: 'Direct link copied! Ready to share.'
      });
      setTimeout(() => setShareToast({ show: false, message: '' }), 3000);
    } else if (res.shared) {
      setShareToast({
        show: true,
        message: 'Link shared successfully!'
      });
      setTimeout(() => setShareToast({ show: false, message: '' }), 3000);
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
  const { t } = useLanguage();

  return (
    <section id="bundles" className="relative py-8 sm:py-12 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      {/* Share Toast Notification */}
      {shareToast.show && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-amber-500 text-black font-extrabold text-xs sm:text-sm shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <Check className="w-4 h-4 text-black stroke-[3]" />
          <span>{shareToast.message}</span>
        </div>
      )}

      {/* Subtle ambient lighting halo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[300px] bg-amber-500/[0.07] blur-[150px] pointer-events-none rounded-full z-0" />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
            <span>OFFICIAL VAULTS • CLICK TO WATCH VIDEO</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-gaming tracking-tight">
            PC GAMING VAULT BUNDLES
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
            Click any bundle box below to watch its full video walkthrough & gameplay proof.
          </p>
        </div>

        {/* Compact Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search bundles..."
            className="w-full pl-9 pr-8 py-2 rounded-xl glass-input text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400/60 shadow-lg"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Tabs (if multiple categories) */}
      {categories.length > 2 && (
        <div className="relative z-10 flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-gaming font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.35)] scale-[1.02]'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Bundles Grid: 2 boxes per row on mobile, 4 on desktop (Small Compact Boxes) */}
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
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5">
          {filteredBundles.map((rawBundle) => {
            const bundle = getEffectiveBundle(rawBundle);

            return (
              <div
                key={bundle.id}
                onClick={() => onSelectBundle(bundle)}
                className={`group bg-gradient-to-b from-[#0c1224]/95 via-[#080c18]/95 to-[#040711] rounded-xl sm:rounded-2xl overflow-hidden flex flex-col relative transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 cursor-pointer ${
                  bundle.featured
                    ? 'border border-amber-500/70 shadow-[0_8px_25px_rgba(0,0,0,0.8),0_0_20px_rgba(245,158,11,0.2)]'
                    : 'border border-white/10 hover:border-amber-500/50 shadow-[0_8px_25px_rgba(0,0,0,0.7)]'
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
                    className="absolute top-2 right-2 z-30 px-2 py-0.5 rounded bg-amber-500 hover:bg-amber-400 text-black text-[9px] font-black flex items-center gap-1 shadow-xl cursor-pointer"
                    title="Click to edit bundle title or badge"
                  >
                    <Edit3 className="w-2.5 h-2.5" />
                    <span>Edit</span>
                  </button>
                )}

                {/* Cover Image & Media Preview container (Cinematic 16/9) */}
                <div
                  className="relative aspect-[16/9] overflow-hidden bg-slate-950"
                  title="Click to watch video walkthrough"
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

                  {/* Top Badge: Game count / Feature */}
                  <div className="absolute top-2 left-2 px-1.5 sm:px-2 py-0.5 rounded bg-amber-500 text-black text-[8px] sm:text-[9px] font-black tracking-wider font-gaming shadow-sm z-10 uppercase">
                    {bundle.gameCount > 1 ? `${bundle.gameCount.toLocaleString('en-IN')} Games` : 'Steam Unlock'}
                  </div>

                  {/* Video preview indicator */}
                  <div className="absolute top-2 right-2 p-0.5 sm:p-1 rounded bg-black/85 backdrop-blur-md text-amber-400 border border-amber-500/30 flex items-center gap-1 text-[8px] sm:text-[9px] font-bold px-1.5 sm:px-2 shadow-sm z-10">
                    <Play className="w-2 h-2 fill-amber-400 shrink-0" />
                    <span className="hidden xs:inline">Video Proof</span>
                    <span className="xs:hidden">Video</span>
                  </div>

                  {/* Watch Video Hover Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/55 backdrop-blur-[1px] z-10">
                    <div className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-amber-500 text-black text-[10px] sm:text-xs font-black font-gaming flex items-center gap-1.5 shadow-[0_0_20px_rgba(245,158,11,0.6)] transform scale-95 group-hover:scale-100 transition-transform">
                      <Play className="w-3 h-3 fill-black shrink-0" />
                      <span>WATCH VIDEO</span>
                    </div>
                  </div>
                </div>

                {/* Card Content (Compact Box Discipline) */}
                <div className="p-2.5 sm:p-3 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Bundle Title */}
                    <h3 className="text-xs sm:text-sm font-black text-white font-gaming group-hover:text-amber-300 transition-colors truncate mb-1">
                      {bundle.title}
                    </h3>

                    {/* Metadata & Validity */}
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2 font-mono">
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>Lifetime Access</span>
                      </span>
                      <span className="text-slate-500 hidden sm:inline">Instant DM</span>
                    </div>
                  </div>

                  {/* Simple Clean Action Buttons (Compact & Touch-Friendly) */}
                  <div className="pt-2 border-t border-white/[0.08] flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={(e) => handleShareBundle(e, bundle)}
                      title="Share bundle link"
                      className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-amber-400 hover:text-white transition-all cursor-pointer shrink-0 active:scale-90"
                    >
                      <Share2 className="w-3 h-3" />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectBundle(bundle);
                      }}
                      className="flex-1 py-1.5 sm:py-2 px-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-bold text-[10px] sm:text-xs flex items-center justify-center gap-1 transition-all cursor-pointer whitespace-nowrap font-gaming uppercase tracking-wider"
                    >
                      <Play className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />
                      <span>Video</span>
                    </button>

                    {(() => {
                      const redirectInfo = getChannelRedirectInfo(settings, {
                        bundleTitle: bundle.title,
                        actionType: 'purchase'
                      });
                      return (
                        <a
                          href={redirectInfo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 py-1.5 sm:py-2 px-1.5 rounded-lg bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:from-pink-500 hover:to-amber-400 text-white font-black text-[10px] sm:text-xs flex items-center justify-center gap-1 shadow-sm transition-all cursor-pointer active:scale-95 text-center whitespace-nowrap font-gaming uppercase tracking-wider"
                          title="DM on Instagram @gamerspoint2026 to buy this bundle"
                        >
                          <Instagram className="w-3 h-3 text-white shrink-0" />
                          <span>DM</span>
                          <ArrowRight className="w-2.5 h-2.5 text-white shrink-0" />
                        </a>
                      );
                    })()}
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
