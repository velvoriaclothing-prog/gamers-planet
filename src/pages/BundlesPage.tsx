import React from 'react';
import {
  KeyRound,
  PhoneCall,
  ArrowRight,
  UserCheck,
  Check,
  Snowflake
} from 'lucide-react';
import { Bundle, SiteSettings } from '../types/index.js';
import { BundleGrid } from '../components/BundleGrid.js';
import { MosaicBackdrop } from '../components/MosaicBackdrop.js';
import { getChannelRedirectInfo } from '../utils/channelRedirect.js';

interface BundlesPageProps {
  bundles: Bundle[];
  settings: SiteSettings;
  isAdmin: boolean;
  onSelectBundle: (bundle: Bundle) => void;
  onOpenAdmin: () => void;
}

export const BundlesPage: React.FC<BundlesPageProps> = ({
  bundles,
  settings,
  isAdmin,
  onSelectBundle,
  onOpenAdmin
}) => {
  const vipChannelRedirect = getChannelRedirectInfo(settings, { actionType: 'vip_channel' });
  const singleGameRedirect = getChannelRedirectInfo(settings, { actionType: 'single' });

  const bundleCovers = React.useMemo(
    () => bundles.map((b) => b.coverImage).filter(Boolean),
    [bundles]
  );

  return (
    <div className="relative min-h-screen pb-16">
      {/* Moody Angled Game Artwork Backdrop Behind Header & Grid Top */}
      <MosaicBackdrop extraCovers={bundleCovers} />

      {/* Main Showcase: Game Bundles Grid */}
      <BundleGrid
        bundles={bundles}
        settings={settings}
        isAdmin={isAdmin}
        onSelectBundle={onSelectBundle}
        onOpenAdmin={onOpenAdmin}
      />

      {/* Clean Secondary Services Strip Below the Bundles Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {/* Card 1: Unlimited Steam ID & Pass VIP Channel */}
          <div className="bg-[#121215] border border-white/[0.07] hover:border-white/[0.15] rounded-xl p-5 sm:p-6 flex flex-col justify-between gap-5 transition-colors">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                  <Snowflake className="w-3.5 h-3.5 text-sky-300 shrink-0" />
                  <span>Christmas VIP Access · Lifetime ₹199</span>
                </span>
                <span className="text-xs text-zinc-500">WhatsApp Business</span>
              </div>

              <h2 className="text-lg sm:text-xl font-semibold text-white">
                Unlimited Steam ID &amp; Pass Channel
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 leading-relaxed">
                Daily fresh Steam IDs &amp; passwords dropped straight into our VIP channel. One-time lifetime entry for ₹199.
              </p>

              <div className="mt-4 space-y-1.5 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Daily fresh Steam account drops</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Instant access to hundreds of top PC titles</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href={vipChannelRedirect.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1c1c22] hover:bg-[#24242c] border border-white/[0.1] text-white text-xs sm:text-sm font-medium transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Message on WhatsApp (₹199)</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              </a>
            </div>
          </div>

          {/* Card 2: Single PC Games on Demand */}
          <div className="bg-[#121215] border border-white/[0.07] hover:border-white/[0.15] rounded-xl p-5 sm:p-6 flex flex-col justify-between gap-5 transition-colors">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-medium text-red-400">
                  Christmas 50% OFF · Individual Titles
                </span>
                <span className="text-xs text-zinc-500">WhatsApp Business</span>
              </div>

              <h2 className="text-lg sm:text-xl font-semibold text-white">
                Buy Any Single PC Game
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 leading-relaxed">
                Looking for one specific title? Message us on WhatsApp Business with the game name and claim 50% OFF.
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5">
                  <KeyRound className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-medium text-white">Steam ID &amp; Pass</div>
                    <div className="text-[11px] text-zinc-400">Ready-to-play login</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5">
                  <UserCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-medium text-white">Personal Steam</div>
                    <div className="text-[11px] text-zinc-400">Added to your account</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <a
                href={singleGameRedirect.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-medium transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-white shrink-0" />
                <span>WhatsApp for Single Games (50% OFF)</span>
                <ArrowRight className="w-3.5 h-3.5 text-white shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
