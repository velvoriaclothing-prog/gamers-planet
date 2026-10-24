import React, { useState, useEffect } from 'react';
import { Clock, Flame, Zap, Sparkles, Gamepad2, ArrowRight, Eye, CheckCircle2, ShieldCheck, Tag, Edit3, Play } from 'lucide-react';
import { Bundle, SiteSettings } from '../types/index.js';
import { getChannelRedirectInfo } from '../utils/channelRedirect.js';
import { useLiveEdit } from './live-edit/LiveEditContext.js';

interface SaleTimerSectionProps {
  bundles: Bundle[];
  settings: SiteSettings;
  onSelectBundle: (bundle: Bundle) => void;
  showBundlesList?: boolean;
}

// 10 Hours in milliseconds for countdown timer
const TEN_HOURS_MS = 10 * 60 * 60 * 1000;

export const SaleTimerSection: React.FC<SaleTimerSectionProps> = ({
  bundles,
  settings,
  onSelectBundle,
  showBundlesList = true,
}) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const now = Date.now();
    const remaining = TEN_HOURS_MS - (now % TEN_HOURS_MS);
    return {
      hours: Math.floor(remaining / (1000 * 60 * 60)),
      minutes: Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((remaining % (1000 * 60)) / 1000),
      totalMs: remaining
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const remaining = TEN_HOURS_MS - (now % TEN_HOURS_MS);
      setTimeLeft({
        hours: Math.floor(remaining / (1000 * 60 * 60)),
        minutes: Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((remaining % (1000 * 60)) / 1000),
        totalMs: remaining
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDigit = (num: number) => num.toString().padStart(2, '0');

  // Live Edit hooks
  const { isLiveEditMode, openBundleQuickEdit, getEffectiveBundle } = useLiveEdit();

  // Filter active bundles
  const activeBundles = bundles.filter(b => b.active);

  return (
    <section id="flash-sale" className="relative py-16 bg-gradient-to-b from-[#0a0d18] via-[#070913] to-[#050608] border-t border-b border-amber-500/20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-amber-500/15 via-orange-500/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-10 left-1/4 w-[400px] h-[250px] bg-amber-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Banner Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
            <span>LIMITED TIME SALE • SPECIAL VAULT PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-gaming tracking-tight mb-3 [text-wrap:balance]">
            LIMITED TIME SALE ENDS IN
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto [text-wrap:balance]">
            Special reduced pricing on all premium gaming vaults. Direct verified delivery guaranteed to your account in minutes. Lock in your bundle price below!
          </p>
        </div>

        {/* Live Digital Timer */}
        <div className="max-w-2xl mx-auto mb-14">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/25 shadow-2xl bg-[#080d1a]/90 backdrop-blur-2xl">
            <div className="flex items-center justify-center gap-3 sm:gap-6 text-center">
              
              {/* Hours Box */}
              <div className="flex-1 max-w-[140px]">
                <div className="bg-[#050812] rounded-2xl p-3 sm:p-5 border border-white/10 shadow-inner relative overflow-hidden group">
                  <div className="text-3xl sm:text-6xl font-black font-mono tabular-nums text-amber-400">
                    {formatDigit(timeLeft.hours)}
                  </div>
                  <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/40 pointer-events-none" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mt-2 font-gaming">
                  Hours
                </div>
              </div>

              {/* Colon separator */}
              <div className="text-2xl sm:text-5xl font-black text-amber-500/60 -mt-6 select-none font-mono">
                :
              </div>

              {/* Minutes Box */}
              <div className="flex-1 max-w-[140px]">
                <div className="bg-[#050812] rounded-2xl p-3 sm:p-5 border border-white/10 shadow-inner relative overflow-hidden group">
                  <div className="text-3xl sm:text-6xl font-black font-mono tabular-nums text-amber-400">
                    {formatDigit(timeLeft.minutes)}
                  </div>
                  <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/40 pointer-events-none" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mt-2 font-gaming">
                  Minutes
                </div>
              </div>

              {/* Colon separator */}
              <div className="text-2xl sm:text-5xl font-black text-amber-500/60 -mt-6 select-none font-mono">
                :
              </div>

              {/* Seconds Box */}
              <div className="flex-1 max-w-[140px]">
                <div className="bg-[#050812] rounded-2xl p-3 sm:p-5 border border-white/10 shadow-inner relative overflow-hidden group">
                  <div className="text-3xl sm:text-6xl font-black font-mono tabular-nums text-amber-300">
                    {formatDigit(timeLeft.seconds)}
                  </div>
                  <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/40 pointer-events-none" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mt-2 font-gaming">
                  Seconds
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ALL BUNDLES WITH LIVE PRICES SECTION (CONDITIONAL) */}
        {showBundlesList && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-3 border-b border-white/10 gap-2">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 font-gaming">
                  <Tag className="w-3.5 h-3.5" />
                  <span>VAULT BUNDLES & FLASH SALE PRICES</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-gaming mt-0.5">
                  AVAILABLE VAULTS & DISCOUNTED PRICES
                </h3>
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Showing all {activeBundles.length} vaults with instant activation
              </div>
            </div>

            {/* Bundles Grid with Compact Smaller Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {activeBundles.map((rawBundle) => {
                const bundle = getEffectiveBundle(rawBundle);
                const savingsPercent =
                  bundle.originalPrice && bundle.originalPrice > bundle.price
                    ? Math.round(((bundle.originalPrice - bundle.price) / bundle.originalPrice) * 100)
                    : null;

                return (
                  <div
                    key={bundle.id}
                    className={`bg-[#090d18]/95 rounded-xl sm:rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg group relative ${
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
                    {/* Image Header with Price Tag Overlay */}
                    <div
                      onClick={() => onSelectBundle(bundle)}
                      className="relative aspect-[16/10] max-h-34 sm:max-h-38 overflow-hidden bg-slate-950 cursor-pointer block"
                      title={`Click to view ${bundle.title}`}
                    >
                      <img
                        src={bundle.coverImage}
                        alt={bundle.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090d18] via-transparent to-black/35" />

                      {/* Price Tag top-right */}
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/85 backdrop-blur-md border border-amber-500/40 shadow-sm text-right">
                        <div className="text-[8px] text-slate-400 uppercase font-gaming">Flash Price</div>
                        <div className="text-sm sm:text-base font-black text-amber-400 font-gaming leading-tight">
                          ₹{bundle.price.toLocaleString('en-IN')}
                        </div>
                      </div>

                      {/* Badge top-left */}
                      {bundle.badge && (
                        <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-amber-500 text-black text-[9px] font-black uppercase font-gaming shadow-sm">
                          {bundle.badge}
                        </div>
                      )}

                      {/* Video indicator */}
                      {bundle.videoPreview && (
                        <div className="absolute top-2 left-20 p-1 rounded-md bg-black/80 text-amber-400 border border-amber-500/30 flex items-center gap-1 text-[8.5px] font-bold px-1.5 shadow-sm z-10">
                          <Play className="w-2.5 h-2.5 fill-amber-400" />
                          <span>Video</span>
                        </div>
                      )}

                      {/* Watch Video Hover Play Overlay */}
                      {bundle.videoPreview && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[1px] z-10">
                          <div className="px-2.5 py-1 rounded-full bg-amber-500 text-black text-[11px] font-black font-gaming flex items-center gap-1 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                            <Play className="w-3 h-3 fill-black" />
                            <span>WATCH VIDEO</span>
                          </div>
                        </div>
                      )}

                      {/* Game count tag */}
                      <div className="absolute bottom-1.5 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] text-slate-200 z-10">
                        <Gamepad2 className="w-3 h-3 text-amber-400" />
                        <span>{bundle.gameCount > 1 ? `${bundle.gameCount.toLocaleString('en-IN')} Games` : 'Steam Unlock'}</span>
                      </div>
                    </div>

                    {/* Body Details (Compact) */}
                    <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between">
                      <div>
                        {bundle.category && (
                          <div className="text-[9px] uppercase font-bold text-amber-400/90 mb-0.5 tracking-wider">
                            {bundle.category}
                          </div>
                        )}
                        <h4 className="text-sm font-bold text-white font-gaming mb-1 group-hover:text-amber-300 transition-colors line-clamp-1">
                          {bundle.title}
                        </h4>
                        <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed mb-2">
                          {bundle.shortDescription}
                        </p>

                        {/* Popular Titles Mini Strip */}
                        {bundle.popularTitlesPreview && bundle.popularTitlesPreview.length > 0 && (
                          <div className="mb-2 p-1.5 rounded-lg bg-black/40 border border-white/[0.07]">
                            <div className="text-[8px] font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                              <span>Top Titles Preview</span>
                              <span className="text-slate-400 font-normal">In Vault</span>
                            </div>
                            <div className="grid grid-cols-3 gap-1">
                              {bundle.popularTitlesPreview.slice(0, 3).map((g, gIdx) => (
                                <div key={gIdx} className="rounded overflow-hidden aspect-[16/10] bg-black border border-white/10">
                                  <img
                                    src={g.coverImage}
                                    alt={g.title}
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Included Items preview (max 2 items for compactness) */}
                        {bundle.includedItems && bundle.includedItems.length > 0 && (
                          <div className="space-y-0.5 mb-2.5 p-1.5 rounded-lg bg-black/30 border border-white/5">
                            {bundle.includedItems.slice(0, 2).map((item, i) => (
                              <div key={i} className="flex items-center gap-1 text-[10px] text-slate-300 truncate">
                                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                                <span className="truncate">{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Price Showcase Bar & Buy Actions */}
                      <div className="pt-2 border-t border-white/[0.08]">
                        <div className="flex items-baseline justify-between mb-2">
                          <div>
                            <span className="text-lg sm:text-xl font-black text-white font-gaming">
                              ₹{bundle.price.toLocaleString('en-IN')}
                            </span>
                            {bundle.originalPrice && (
                              <span className="text-[11px] text-slate-500 line-through ml-1.5 font-mono">
                                ₹{bundle.originalPrice.toLocaleString('en-IN')}
                              </span>
                            )}
                          </div>

                          {savingsPercent && (
                            <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold">
                              Save {savingsPercent}%
                            </span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-1.5">
                          <button
                            type="button"
                            onClick={() => onSelectBundle(bundle)}
                            className="py-1.5 px-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-semibold text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer"
                          >
                            {bundle.videoPreview || (bundle.videoPlaylist && bundle.videoPlaylist.length > 0) ? (
                              <>
                                <Play className="w-3 h-3 text-amber-400 fill-amber-400" />
                                <span>See in Video</span>
                              </>
                            ) : (
                              <>
                                <Eye className="w-3 h-3 text-slate-400" />
                                <span>Details</span>
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
                                className="py-1.5 px-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-black text-[11px] flex items-center justify-center gap-1 shadow-sm transition-all cursor-pointer active:scale-95 text-center"
                                title={`Buy via ${redirectInfo.platformName}`}
                              >
                                <span>Buy ₹{bundle.price}</span>
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
          </div>
        )}

      </div>
    </section>
  );
};
