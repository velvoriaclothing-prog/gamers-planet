import React, { useState } from 'react';
import { 
  Gamepad2, 
  KeyRound, 
  Sparkles, 
  CheckCircle2, 
  Instagram, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Flame, 
  Clock,
  Send
} from 'lucide-react';
import { Bundle, SiteSettings } from '../types/index.js';
import { SingleGamesSection } from '../components/SingleGamesSection.js';
import { navigateToChannel } from '../utils/channelRedirect.js';

interface SingleGamesPageProps {
  settings: SiteSettings;
  featuredBundle?: Bundle | null;
  onSelectBundle?: (bundle: Bundle) => void;
}

export const SingleGamesPage: React.FC<SingleGamesPageProps> = ({
  settings,
  featuredBundle,
  onSelectBundle
}) => {
  const [customGameName, setCustomGameName] = useState('');

  const handleCustomGameRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customGameName.trim()) return;
    const msg = `Hi GAMERS PLANET! I want to request the single game: "${customGameName.trim()}". Please share whether I can get Steam ID & Password (₹80) or add to my personal Steam account (₹120)!`;
    navigateToChannel(settings, {
      bundleTitle: `Custom Request: ${customGameName.trim()}`,
      message: msg,
      price: 80,
      actionType: 'single'
    });
    setCustomGameName('');
  };

  return (
    <div className="space-y-12 pb-16">
      {/* 1. Header */}
      <section className="relative pt-8 pb-4 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
          <KeyRound className="w-3.5 h-3.5 text-emerald-400" />
          <span>INDIVIDUAL GAME STORE • FROM ₹80</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-gaming tracking-tight mb-3">
          SINGLE GAMES STORE
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Don't need a whole 1,000 game bundle? Get exactly the game you want right now! Choose a <strong className="text-emerald-400">Steam Account ID & Pass for ₹80</strong> or have it <strong className="text-amber-400">added to your personal Steam account for ₹120</strong>.
        </p>

        {/* Custom Game Request Quick Bar */}
        <form 
          onSubmit={handleCustomGameRequest}
          className="mt-6 max-w-xl mx-auto glass-panel p-2 rounded-2xl border border-emerald-500/40 bg-[#080d1a]/95 flex items-center gap-2 shadow-[0_0_30px_rgba(16,185,129,0.15)]"
        >
          <div className="pl-3 text-emerald-400">
            <Gamepad2 className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={customGameName}
            onChange={(e) => setCustomGameName(e.target.value)}
            placeholder="Want any specific game? Type title here (e.g. Forza 5, Wukong)..."
            className="flex-1 bg-transparent border-none text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none py-2 px-1 font-medium"
          />
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-black font-black text-xs font-gaming uppercase tracking-wide flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer shrink-0"
          >
            <span>Request ₹80</span>
            <Send className="w-3.5 h-3.5 fill-black" />
          </button>
        </form>
      </section>

      {/* 2. Single Games Section & Showcase */}
      <SingleGamesSection
        settings={settings}
        featuredBundle={featuredBundle}
        onSelectBundle={onSelectBundle}
      />
    </div>
  );
};
