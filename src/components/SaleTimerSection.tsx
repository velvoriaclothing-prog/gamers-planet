import React, { useState, useEffect } from 'react';
import { Clock, Flame, Zap, Sparkles, Gamepad2, ArrowRight, Eye, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';
import { Bundle, SiteSettings } from '../types/index.js';
import { openInstagram } from '../utils/api.js';

interface SaleTimerSectionProps {
  bundles: Bundle[];
  settings: SiteSettings;
  onSelectBundle: (bundle: Bundle) => void;
}

// 10 Hours in milliseconds for countdown timer
const TEN_HOURS_MS = 10 * 60 * 60 * 1000;

export const SaleTimerSection: React.FC<SaleTimerSectionProps> = ({
  bundles,
  settings,
  onSelectBundle,
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/40 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
            <span>LIMITED TIME SALE • SPECIAL VAULT PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-gaming tracking-tight mb-3">
            LIMITED TIME SALE ENDS IN
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Special reduced pricing on all premium gaming vaults. Direct verified delivery guaranteed to your account in minutes. Lock in your bundle price below!
          </p>
        </div>

        {/* Live Digital Timer */}
        <div className="max-w-2xl mx-auto mb-14">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-[0_0_50px_rgba(245,158,11,0.15)] bg-gradient-to-b from-amber-500/[0.07] to-black/80">
            <div className="flex items-center justify-center gap-3 sm:gap-6 text-center">
              
              {/* Hours Box */}
              <div className="flex-1 max-w-[140px]">
                <div className="bg-[#0b0e1b] rounded-2xl p-3 sm:p-5 border border-white/10 shadow-inner relative overflow-hidden group">
                  <div className="text-3xl sm:text-6xl font-black font-gaming tracking-wider text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                    {formatDigit(timeLeft.hours)}
                  </div>
                  <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/40 pointer-events-none" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mt-2 font-gaming">
                  Hours
                </div>
              </div>

              {/* Colon separator */}
              <div className="text-2xl sm:text-5xl font-black text-amber-500/70 -mt-6 animate-pulse">
                :
              </div>

              {/* Minutes Box */}
              <div className="flex-1 max-w-[140px]">
                <div className="bg-[#0b0e1b] rounded-2xl p-3 sm:p-5 border border-white/10 shadow-inner relative overflow-hidden group">
                  <div className="text-3xl sm:text-6xl font-black font-gaming tracking-wider text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                    {formatDigit(timeLeft.minutes)}
                  </div>
                  <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/40 pointer-events-none" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mt-2 font-gaming">
                  Minutes
                </div>
              </div>

              {/* Colon separator */}
              <div className="text-2xl sm:text-5xl font-black text-amber-500/70 -mt-6 animate-pulse">
                :
              </div>

              {/* Seconds Box */}
              <div className="flex-1 max-w-[140px]">
                <div className="bg-[#0b0e1b] rounded-2xl p-3 sm:p-5 border border-white/10 shadow-inner relative overflow-hidden group">
                  <div className="text-3xl sm:text-6xl font-black font-gaming tracking-wider text-amber-300 drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]">
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

        {/* ALL BUNDLES WITH LIVE PRICES SECTION */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 font-gaming">
                <Tag className="w-4 h-4" />
                <span>ALL VAULT BUNDLES & FLASH SALE PRICES</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-gaming mt-1">
                AVAILABLE BUNDLES & INSTANT PRICES
              </h3>
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Showing all {activeBundles.length} bundles with current discounted prices
            </div>
          </div>

          {/* Bundles Grid with Prominent Prices */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeBundles.map((bundle) => {
              const savingsPercent =
                bundle.originalPrice && bundle.originalPrice > bundle.price
                  ? Math.round(((bundle.originalPrice - bundle.price) / bundle.originalPrice) * 100)
                  : null;

              return (
                <div
                  key={bundle.id}
                  className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl group bg-[#090c16]/90"
                >
                  {/* Image Header with Price Tag Overlay */}
                  <div
                    onClick={() => onSelectBundle(bundle)}
                    className="relative aspect-[16/9] overflow-hidden bg-slate-950 cursor-pointer block"
                    title={`Click to view ${bundle.title}`}
                  >
                    <img
                      src={bundle.coverImage}
                      alt={bundle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090c16] via-transparent to-black/40" />

                    {/* Price Pill top-right */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-xl bg-black/85 backdrop-blur-md border border-amber-500/50 shadow-lg text-right">
                      <div className="text-[10px] text-slate-400 uppercase font-gaming">Flash Price</div>
                      <div className="text-lg sm:text-xl font-black text-amber-400 font-gaming leading-tight">
                        ₹{bundle.price.toLocaleString('en-IN')}
                      </div>
                    </div>

                    {/* Badge top-left */}
                    {bundle.badge && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-amber-500 text-black text-[11px] font-extrabold uppercase font-gaming shadow-md">
                        {bundle.badge}
                      </div>
                    )}

                    {/* Game count tag */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-xs text-slate-200">
                      <Gamepad2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>{bundle.gameCount > 1 ? `${bundle.gameCount.toLocaleString('en-IN')} Games` : 'Steam Unlock'}</span>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {bundle.category && (
                        <div className="text-[10px] uppercase font-bold text-amber-400/80 mb-1 tracking-wider">
                          {bundle.category}
                        </div>
                      )}
                      <h4 className="text-lg font-bold text-white font-gaming mb-2 group-hover:text-amber-300 transition-colors line-clamp-1">
                        {bundle.title}
                      </h4>
                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                        {bundle.shortDescription}
                      </p>

                      {/* Included Items preview */}
                      {bundle.includedItems && bundle.includedItems.length > 0 && (
                        <div className="space-y-1 mb-4 p-2.5 rounded-xl bg-black/40 border border-white/5">
                          {bundle.includedItems.slice(0, 3).map((item, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300 truncate">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Price Showcase Bar & Buy Actions */}
                    <div className="pt-3 border-t border-white/10">
                      <div className="flex items-baseline justify-between mb-3">
                        <div>
                          <span className="text-2xl sm:text-3xl font-black text-white font-gaming">
                            ₹{bundle.price.toLocaleString('en-IN')}
                          </span>
                          {bundle.originalPrice && (
                            <span className="text-xs sm:text-sm text-slate-500 line-through ml-2 font-mono">
                              ₹{bundle.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>

                        {savingsPercent && (
                          <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                            Save {savingsPercent}%
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => onSelectBundle(bundle)}
                          className="py-2.5 px-3 rounded-xl glass-panel text-slate-200 hover:text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-slate-400" />
                          <span>View Details</span>
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            openInstagram(settings.instagramUrl, bundle.title, bundle.price)
                          }
                          className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
                        >
                          <span>Buy @ ₹{bundle.price}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-black" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
