import React from 'react';
import { 
  Zap, 
  Flame, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Instagram, 
  ArrowRight,
  Unlock,
  KeyRound,
  Layers,
  HelpCircle
} from 'lucide-react';
import { Bundle, SiteSettings } from '../types/index.js';
import { BundleGrid } from '../components/BundleGrid.js';
import { SaleTimerSection } from '../components/SaleTimerSection.js';
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
  const redirectInfo = getChannelRedirectInfo(settings, { actionType: 'dm' });

  return (
    <div className="space-y-12 pb-16">
      {/* 1. Page Header */}
      <section className="relative pt-8 pb-6 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
          <Flame className="w-3.5 h-3.5 fill-amber-400" />
          <span>OFFICIAL GAMING VAULTS • LIFETIME VALIDITY</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-gaming tracking-tight mb-3">
          PC GAMING BUNDLES VAULT
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Explore our complete collection of curated PC gaming vaults. Every bundle comes with lifetime validity, guided 1-on-1 setup support, and instant verified delivery via {redirectInfo.platformName} within 3-5 minutes!
        </p>
      </section>

      {/* 2. Live Sale Timer Urgency Banner (No Duplicate Cards) */}
      <SaleTimerSection
        bundles={bundles}
        settings={settings}
        onSelectBundle={onSelectBundle}
        showBundlesList={false}
      />

      {/* 3. All Bundles Grid */}
      <BundleGrid
        bundles={bundles}
        settings={settings}
        isAdmin={isAdmin}
        onSelectBundle={onSelectBundle}
        onOpenAdmin={onOpenAdmin}
      />

      {/* 4. Comparison Table Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 bg-[#080c16]/95">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-3xl font-black text-white font-gaming mb-2">
              VAULT BUNDLE COMPARISON
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Quickly compare features, game count, and exclusive perks across each vault tier.
            </p>
          </div>

          <div className="overflow-x-auto pb-2 scrollbar-none">
            <table className="w-full text-left text-xs sm:text-sm min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="py-3 px-4 font-bold uppercase tracking-wider font-gaming">Feature / Perk</th>
                  <th className="py-3 px-3 text-center font-bold text-amber-300 font-gaming">Basic (₹399)</th>
                  <th className="py-3 px-3 text-center font-bold text-amber-400 font-gaming bg-amber-500/10 rounded-t-xl border-x border-t border-amber-500/30">Steam Unlock (₹449)</th>
                  <th className="py-3 px-3 text-center font-bold text-amber-300 font-gaming">Full Unlock (₹699)</th>
                  <th className="py-3 px-3 text-center font-bold text-amber-300 font-gaming">Mega (₹799)</th>
                  <th className="py-3 px-3 text-center font-bold text-amber-300 font-gaming">Ultimate (₹999)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="py-3.5 px-4 font-medium flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Included Games Count</span>
                  </td>
                  <td className="py-3.5 px-3 text-center font-bold">1,000 Games</td>
                  <td className="py-3.5 px-3 text-center font-bold text-amber-400 bg-amber-500/5 border-x border-amber-500/30">All 60,000+ Games</td>
                  <td className="py-3.5 px-3 text-center font-bold">1,000 Games</td>
                  <td className="py-3.5 px-3 text-center font-bold">27,000 Games</td>
                  <td className="py-3.5 px-3 text-center font-bold">Complete Library</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium flex items-center gap-2">
                    <Unlock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Steam Unlock Feature</span>
                  </td>
                  <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Included</td>
                  <td className="py-3.5 px-3 text-center text-emerald-400 font-bold bg-amber-500/5 border-x border-amber-500/30">✓ Full Unlock</td>
                  <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Included</td>
                  <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Included</td>
                  <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Included</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Add to Personal Steam</span>
                  </td>
                  <td className="py-3.5 px-3 text-center text-slate-500">-</td>
                  <td className="py-3.5 px-3 text-center text-emerald-400 font-bold bg-amber-500/5 border-x border-amber-500/30">✓ ANY Game</td>
                  <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Included</td>
                  <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Included</td>
                  <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium flex items-center gap-2">
                    <KeyRound className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>ID & Password Vault Listings</span>
                  </td>
                  <td className="py-3.5 px-3 text-center text-slate-500">-</td>
                  <td className="py-3.5 px-3 text-center text-slate-500 bg-amber-500/5 border-x border-amber-500/30">-</td>
                  <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Lifetime Access</td>
                  <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Lifetime Access</td>
                  <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ VIP Lifetime</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>VIP Channels & Sites Section</span>
                  </td>
                  <td className="py-3.5 px-3 text-center text-slate-500">-</td>
                  <td className="py-3.5 px-3 text-center text-slate-500 bg-amber-500/5 border-x border-amber-500/30">-</td>
                  <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Full Channels</td>
                  <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Full Channels</td>
                  <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ All VIP Sites</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Support & Setup</span>
                  </td>
                  <td className="py-3.5 px-3 text-center">Standard Support</td>
                  <td className="py-3.5 px-3 text-center text-amber-300 font-bold bg-amber-500/5 border-x border-b border-amber-500/30">1-on-1 Personal</td>
                  <td className="py-3.5 px-3 text-center">1-on-1 Personal</td>
                  <td className="py-3.5 px-3 text-center">Priority VIP</td>
                  <td className="py-3.5 px-3 text-center text-amber-400 font-bold">VIP Concierge</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
