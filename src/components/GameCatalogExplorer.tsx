import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Gamepad2, 
  Sparkles, 
  CheckCircle2, 
  Instagram, 
  ArrowRight, 
  X, 
  Flame, 
  ShieldCheck, 
  Layers, 
  Zap,
  Unlock,
  Check,
  KeyRound,
  ChevronDown
} from 'lucide-react';
import { Bundle, SiteSettings } from '../types/index.js';
import { POPULAR_GAMES_CATALOG, CatalogGame } from '../data/popularGames.js';
import { matchGameSearch } from '../utils/searchEngine.js';
import { openInstagram } from '../utils/api.js';

interface GameCatalogExplorerProps {
  settings: SiteSettings;
  featuredBundle?: Bundle | null;
  steamUnlockBundle?: Bundle | null;
  onSelectBundle?: (bundle: Bundle) => void;
}

type CategoryFilter = 'all' | 'action' | 'open-world' | 'rpg-adventure' | 'racing-sports' | 'shooter' | 'horror-survival';

const INITIAL_DISPLAY_COUNT = 24;

export const GameCatalogExplorer: React.FC<GameCatalogExplorerProps> = ({
  settings,
  featuredBundle,
  steamUnlockBundle,
  onSelectBundle,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [onlyPopular, setOnlyPopular] = useState(false);
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  // Filter games based on smart fuzzy/acronym search query, category, and popular toggle
  const filteredGames = useMemo(() => {
    return POPULAR_GAMES_CATALOG.filter((game: CatalogGame) => {
      // Category filter
      if (selectedCategory !== 'all' && game.category !== selectedCategory) {
        return false;
      }

      // Popular filter
      if (onlyPopular && !game.popular) {
        return false;
      }

      // Smart Search engine (supports short names, abbreviations like re9, gta, 007, forza 6, bmw, gow, etc.)
      return matchGameSearch(game, searchQuery);
    });
  }, [searchQuery, selectedCategory, onlyPopular]);

  // Sliced games for smooth 60fps rendering of 600+ titles
  const visibleGames = useMemo(() => {
    // If user is actively searching, show up to 48 or full display count
    const limit = searchQuery.trim() ? Math.max(displayCount, 48) : displayCount;
    return filteredGames.slice(0, limit);
  }, [filteredGames, displayCount, searchQuery]);

  const categories: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'All 600+ Titles' },
    { id: 'action', label: 'Action & Combat' },
    { id: 'open-world', label: 'Open World' },
    { id: 'rpg-adventure', label: 'RPG & Fantasy' },
    { id: 'racing-sports', label: 'Racing & Sports' },
    { id: 'shooter', label: 'Shooters & War' },
    { id: 'horror-survival', label: 'Survival & Horror' },
  ];

  const handleOrderSteamUnlockBundle = (gameTitle?: string) => {
    if (steamUnlockBundle && onSelectBundle) {
      onSelectBundle(steamUnlockBundle);
    } else {
      const message = gameTitle 
        ? `Hi! I want to get the ₹449 Steam Unlock Bundle to add ${gameTitle} and access all games in my personal Steam account.`
        : `Hi! I want to get the ₹449 Steam Unlock Bundle and add games to my personal Steam account.`;
      openInstagram(settings.instagramUrl, message, 449);
    }
  };

  const handleSingleGameIdPass = (gameTitle: string) => {
    openInstagram(
      settings.instagramUrl,
      `Hi! I want to get Steam Account ID & Password for ${gameTitle} (₹80).`,
      80
    );
  };

  const handleSingleGamePersonalSteam = (gameTitle: string) => {
    openInstagram(
      settings.instagramUrl,
      `Hi! I want to add ${gameTitle} directly to my personal Steam account (₹120).`,
      120
    );
  };

  return (
    <section id="game-explorer" className="py-20 bg-gradient-to-b from-[#050608] via-[#070b16] to-[#050608] border-t border-b border-white/5 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-amber-500/12 blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[300px] bg-orange-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
            <Search className="w-4 h-4 text-amber-400" />
            <span>SEARCH 60,000+ TITLES • 600+ VAULT PREVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-gaming tracking-tight mb-3">
            GAME SEARCH VAULT
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Explore 60,000+ PC games in our library. Get single game ID & pass for just <span className="text-amber-400 font-bold">₹80</span>, add to personal Steam for <span className="text-emerald-400 font-bold">₹120</span>, or unlock unlimited access with our <span className="text-amber-400 font-bold">₹449 Steam Unlock Bundle</span>!
          </p>
        </div>

        {/* PROMINENT ₹449 STEAM UNLOCK CALLOUT BANNER */}
        <div className="relative mb-10 overflow-hidden rounded-3xl border-2 border-amber-500/60 bg-gradient-to-r from-amber-950/70 via-[#0b1020] to-orange-950/70 p-6 sm:p-8 shadow-[0_0_50px_rgba(245,158,11,0.25)]">
          {/* Decorative badge and glow */}
          <div className="absolute -right-16 -top-16 w-56 h-56 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-56 h-56 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            {/* Left copy */}
            <div className="text-center lg:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold text-[11px] uppercase tracking-wider mb-3 shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                <Flame className="w-3.5 h-3.5 fill-black" />
                <span>ALL GAMES AVAILABLE IN STEAM UNLOCK BUNDLE • ₹449</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-gaming tracking-tight mb-2">
                ADD ANY GAMES IN YOUR PERSONAL ACCOUNT FOR JUST <span className="text-amber-400">₹449</span>!
              </h3>

              <p className="text-slate-200 text-sm sm:text-base font-medium max-w-3xl leading-relaxed mb-4">
                Every game shown in this search vault (and 60,000+ PC titles) is available in our <span className="text-amber-400 font-bold">Steam Unlock Bundle</span>. Add <span className="text-white font-bold underline decoration-amber-400 underline-offset-4">ANY games</span> directly into your personal Steam account with lifetime access and 1-on-1 personal setup support!
              </p>

              {/* Feature pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 pt-1">
                <div className="flex items-center gap-2 bg-black/40 border border-amber-500/30 rounded-xl px-3 py-2 text-xs font-semibold text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Add ANY Game to Personal Account</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 border border-amber-500/30 rounded-xl px-3 py-2 text-xs font-semibold text-slate-200">
                  <Unlock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Full Steam Unlock Included</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 border border-amber-500/30 rounded-xl px-3 py-2 text-xs font-semibold text-slate-200">
                  <KeyRound className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Single Game ID & Pass ₹80</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 border border-amber-500/30 rounded-xl px-3 py-2 text-xs font-semibold text-slate-200">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Instant 5-Min 1-on-1 Setup</span>
                </div>
              </div>
            </div>

            {/* Right Action buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0 justify-center">
              <button
                type="button"
                onClick={() => handleOrderSteamUnlockBundle()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-black font-black text-sm tracking-wide uppercase font-gaming flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all cursor-pointer active:scale-95"
              >
                <Zap className="w-4 h-4 fill-black" />
                <span>Get Steam Unlock Bundle • ₹449</span>
              </button>

              <button
                type="button"
                onClick={() => openInstagram(settings.instagramUrl, 'Hi! I want to request a single game Steam Account ID & Password for ₹80 or add to my personal Steam account.', 80)}
                className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <KeyRound className="w-4 h-4 text-amber-400" />
                <span>Get Single Game (From ₹80)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar & Quick Controls */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="glass-panel p-2 rounded-2xl border border-amber-500/40 bg-[#090d19]/95 shadow-[0_0_30px_rgba(245,158,11,0.15)] flex items-center gap-2">
            <div className="pl-3 text-amber-400">
              <Search className="w-5 h-5" />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setDisplayCount(INITIAL_DISPLAY_COUNT);
              }}
              placeholder="Search title or short form (e.g. gta 5, wukong, re4, cyberpunk, forza 5, cod, gow, rdr2)..."
              className="flex-1 bg-transparent border-none text-white placeholder-slate-500 text-sm sm:text-base focus:outline-none py-2 px-1 font-medium"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            <button
              type="button"
              onClick={() => setOnlyPopular(!onlyPopular)}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                onlyPopular
                  ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'bg-white/5 text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top Trending</span>
              <span className="sm:hidden">Top</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 mt-2.5 px-2 gap-1.5 text-center sm:text-left">
            <div>
              Showing <span className="text-amber-400 font-bold">{filteredGames.length}</span> titles
              {searchQuery && <span> matching "<span className="text-white font-semibold">{searchQuery}</span>"</span>}
            </div>

            <div className="text-amber-300 font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>All titles: ₹449 Bundle | Single ID & Pass ₹80 | Personal Steam ₹120</span>
            </div>
          </div>
        </div>

        {/* Category Pill Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-10 overflow-x-auto pb-2 px-1 scrollbar-none w-full touch-pan-x">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setSelectedCategory(cat.id);
                setDisplayCount(INITIAL_DISPLAY_COUNT);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer active:scale-95 ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'glass-card text-slate-300 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results Grid */}
        {filteredGames.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {visibleGames.map((game) => (
                <div
                  key={game.id}
                  className="group glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-white/10 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 shadow-xl bg-[#090c16]/95 relative"
                >
                  {/* Game Thumbnail with authentic real image */}
                  <div className="relative h-48 overflow-hidden bg-black/60">
                    <img
                      src={game.coverImage}
                      alt={game.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg';
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090c16] via-transparent to-black/40" />

                    {/* Badges on poster */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[10px] font-bold uppercase font-gaming">
                        {game.genre}
                      </span>
                      {game.popular && (
                        <span className="px-2 py-0.5 rounded-md bg-amber-500 text-black text-[10px] font-black uppercase font-gaming flex items-center gap-1 shadow-md">
                          <Flame className="w-3 h-3 fill-black text-black" />
                          <span>HOT</span>
                        </span>
                      )}
                    </div>

                    {/* Top-Right Badge: Pricing quick preview */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/90 text-black text-[10px] font-black uppercase font-gaming shadow-md flex items-center gap-1">
                        <Unlock className="w-3 h-3 text-black" />
                        <span>₹449 ALL • ₹80 ID/PASS</span>
                      </span>
                    </div>

                    <div className="absolute bottom-2 right-3 text-[10px] text-slate-300 font-semibold bg-black/60 px-2 py-0.5 rounded backdrop-blur-md">
                      {game.releaseYear} Edition
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white font-gaming group-hover:text-amber-300 transition-colors mb-2 leading-snug">
                        {game.title}
                      </h3>
                      
                      <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                        {game.description}
                      </p>

                      {/* Pricing Tier Box */}
                      <div className="space-y-1.5 bg-black/50 rounded-xl p-3 border border-amber-500/20 mb-4 text-xs">
                        <div className="flex items-center justify-between text-amber-300 font-bold border-b border-white/5 pb-1.5">
                          <span className="flex items-center gap-1.5">
                            <Unlock className="w-3.5 h-3.5 text-amber-400" />
                            <span>Steam Unlock Bundle</span>
                          </span>
                          <span className="text-amber-400">₹449 (All 60k Games)</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-200 font-semibold pt-0.5">
                          <span className="flex items-center gap-1.5">
                            <KeyRound className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Single Game ID & Password</span>
                          </span>
                          <span className="text-emerald-400 font-bold">₹80</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-300 font-medium">
                          <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                            <span>Add to Personal Steam</span>
                          </span>
                          <span className="text-sky-300 font-bold">₹120</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      {/* 1. All Games Steam Unlock Bundle Button */}
                      <button
                        type="button"
                        onClick={() => handleOrderSteamUnlockBundle(game.title)}
                        className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-black text-xs flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.35)] transition-all cursor-pointer"
                      >
                        <Zap className="w-3.5 h-3.5 fill-black text-black" />
                        <span>Unlock in ₹449 Steam Bundle</span>
                      </button>

                      {/* 2. Split Single Game Options (₹80 ID/Pass vs ₹120 Personal Steam) */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => handleSingleGameIdPass(game.title)}
                          className="py-2 px-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 hover:text-emerald-200 font-bold text-[11px] flex items-center justify-center gap-1 transition-all cursor-pointer"
                          title="Instant ID & Password login credentials ready to play"
                        >
                          <KeyRound className="w-3 h-3 text-emerald-400" />
                          <span>ID & Pass • ₹80</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleSingleGamePersonalSteam(game.title)}
                          className="py-2 px-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-bold text-[11px] flex items-center justify-center gap-1 border border-white/10 transition-colors cursor-pointer"
                          title="Added directly to your personal Steam account"
                        >
                          <Instagram className="w-3 h-3 text-amber-400" />
                          <span>Personal • ₹120</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Pagination */}
            {filteredGames.length > visibleGames.length && (
              <div className="text-center mb-12">
                <button
                  type="button"
                  onClick={() => setDisplayCount((prev) => prev + 24)}
                  className="px-8 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-amber-500/30 hover:border-amber-500/60 text-white font-black text-sm font-gaming inline-flex items-center gap-2 transition-all cursor-pointer shadow-lg active:scale-95"
                >
                  <ChevronDown className="w-4 h-4 text-amber-400" />
                  <span>LOAD MORE GAMES ({visibleGames.length} OF {filteredGames.length})</span>
                </button>
              </div>
            )}
          </>
        ) : (
          /* Custom Game Request Banner when no local results match */
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-amber-500/40 bg-gradient-to-r from-amber-500/[0.1] via-black/90 to-amber-600/[0.1] text-center max-w-2xl mx-auto mb-12 shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400 mx-auto mb-4">
              <Gamepad2 className="w-7 h-7" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>YES, IT'S AVAILABLE!</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white font-gaming mb-2">
              Looking for "{searchQuery}"?
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-lg mx-auto leading-relaxed">
              We have over <span className="text-amber-400 font-bold">60,000+ PC games in stock</span>. All games are available:
              <br />
              • <span className="text-amber-400 font-bold">Steam Unlock Bundle for just ₹449</span> (All games on personal account)
              <br />
              • <span className="text-emerald-400 font-bold">Single Game ID & Password for just ₹80</span>
              <br />
              • <span className="text-sky-300 font-bold">Add to Personal Steam for ₹120</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={() => openInstagram(settings.instagramUrl, `Hi! I want the ₹449 Steam Unlock Bundle and add ${searchQuery} to my personal account.`, 449)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-black text-black" />
                <span>Get in ₹449 Steam Bundle</span>
              </button>

              <button
                type="button"
                onClick={() => openInstagram(settings.instagramUrl, `Hi! I want Single Game Steam ID & Password for: ${searchQuery}`, 80)}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <KeyRound className="w-4 h-4 text-emerald-400" />
                <span>Get ID & Pass • ₹80</span>
              </button>

              <button
                type="button"
                onClick={() => openInstagram(settings.instagramUrl, `Custom Game Request (Add to personal Steam): ${searchQuery}`, 120)}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 border border-white/20 transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4 text-amber-400" />
                <span>Personal Steam • ₹120</span>
              </button>
            </div>
          </div>
        )}

        {/* Bottom Custom Request Helper Banner */}
        <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-amber-500/30 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-gradient-to-r from-black/80 via-[#0a0f1d] to-black/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-gaming">
                Need Any Specific Game Not Listed in Preview?
              </div>
              <div className="text-xs text-slate-300">
                All 60,000+ titles available! Single ID & Pass for just <span className="text-emerald-400 font-bold">₹80</span>, add to personal account for <span className="text-sky-300 font-bold">₹120</span>, or unlock ALL games for <span className="text-amber-400 font-bold">₹449</span>!
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => openInstagram(settings.instagramUrl, 'Hi! I want to get single game ID & Password for ₹80', 80)}
              className="px-4 py-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/40 font-bold text-xs whitespace-nowrap flex items-center gap-1 transition-colors cursor-pointer"
            >
              <KeyRound className="w-3.5 h-3.5 text-emerald-400" />
              <span>ID & Pass ₹80</span>
            </button>

            <button
              type="button"
              onClick={() => openInstagram(settings.instagramUrl, 'Custom Wishlist Inquiry: I want to add games to my personal Steam account', 449)}
              className="px-4 py-2.5 rounded-xl bg-amber-500 text-black hover:bg-amber-400 font-black text-xs whitespace-nowrap flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
            >
              <Instagram className="w-3.5 h-3.5 text-black" />
              <span>Ask on DM</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
