import React from 'react';
import { 
  KeyRound, 
  Sparkles, 
  CheckCircle2, 
  Instagram, 
  ArrowRight,
  Gamepad2,
  UserCheck,
  ShieldCheck,
  Zap,
  Flame
} from 'lucide-react';
import { Bundle, SiteSettings } from '../types/index.js';
import { BundleGrid } from '../components/BundleGrid.js';
import { getChannelRedirectInfo } from '../utils/channelRedirect.js';
import { useLanguage } from '../context/LanguageContext.js';

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
  const { t } = useLanguage();
  const vipChannelRedirect = getChannelRedirectInfo(settings, { actionType: 'vip_channel' });
  const singleGameRedirect = getChannelRedirectInfo(settings, { actionType: 'single' });

  return (
    <div className="space-y-8 sm:space-y-12 pb-16">
      
      {/* Top Value Spotlight Section (VIP Channel + Single Games On Demand) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Card 1: Unlimited ID & Pass VIP Channel (Only ₹199) */}
          <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-amber-500/40 bg-gradient-to-br from-[#120f07] via-[#0d111d] to-[#070b16] shadow-[0_0_35px_rgba(245,158,11,0.15)] hover:border-amber-400 transition-all">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30 font-gaming">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    VIP Channel Access
                  </span>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Just</span>
                    <span className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">₹199</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white font-gaming leading-tight">
                  UNLIMITED STEAM ID & PASS CHANNEL
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Get daily fresh Steam accounts with full offline & online game libraries dropped directly inside our VIP channel.
                </p>

                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Daily Account Drops:</strong> Fresh Steam ID & Password daily</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Unlimited Access:</strong> Play hundreds of top PC games</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Lifetime VIP:</strong> One-time fee of only ₹199</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href={vipChannelRedirect.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-sm font-gaming uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.35)] active:scale-95 transition-all text-center"
                >
                  <Instagram className="w-4 h-4 text-black shrink-0" />
                  <span>DM to Join Channel (₹199)</span>
                  <ArrowRight className="w-4 h-4 text-black shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Single Games on Demand (DM on Instagram) */}
          <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-pink-500/35 bg-gradient-to-br from-[#180918] via-[#0f0e1d] to-[#070b16] shadow-[0_0_35px_rgba(236,72,153,0.12)] hover:border-pink-400 transition-all">
            <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-pink-500/20 text-pink-400 border border-pink-500/30 font-gaming">
                    <Gamepad2 className="w-3.5 h-3.5 text-pink-400" />
                    Single Games on Demand
                  </span>
                  <span className="text-xs font-mono font-bold text-pink-400">@gamerspoint2026</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white font-gaming leading-tight">
                  BUY ANY SINGLE PC GAME
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Looking for a specific game? DM us on Instagram with any game name and get it instantly delivered.
                </p>

                {/* The 2 Available Delivery Modes */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                    <KeyRound className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white font-gaming">Steam ID & Pass</div>
                      <div className="text-[11px] text-slate-300">Dedicated Steam login with the game</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                    <UserCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white font-gaming">Personal Steam</div>
                      <div className="text-[11px] text-slate-300">Game added directly to your own Steam</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={singleGameRedirect.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:from-pink-500 hover:to-amber-400 text-white font-extrabold text-sm font-gaming uppercase tracking-wider shadow-[0_0_20px_rgba(244,63,94,0.35)] active:scale-95 transition-all text-center"
                >
                  <Instagram className="w-4 h-4 text-white shrink-0" />
                  <span>DM for Single Games</span>
                  <ArrowRight className="w-4 h-4 text-white shrink-0" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Showcase: Clean All Bundles Grid (Watch Video & DM to Buy) */}
      <BundleGrid
        bundles={bundles}
        settings={settings}
        isAdmin={isAdmin}
        onSelectBundle={onSelectBundle}
        onOpenAdmin={onOpenAdmin}
      />

    </div>
  );
};
