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
  Unlock,
  Layers,
  ChevronRight
} from 'lucide-react';
import { Bundle, SiteSettings } from '../types/index.js';
import { openInstagram } from '../utils/api.js';

interface SingleGamesSectionProps {
  settings: SiteSettings;
  featuredBundle?: Bundle | null;
  onSelectBundle?: (bundle: Bundle) => void;
}

interface SingleGameOption {
  id: string;
  price: number;
  originalPrice: number;
  title: string;
  badge?: string;
  popular?: boolean;
  bestValue?: boolean;
  type: 'account' | 'personal';
  subtitle: string;
  features: string[];
  deliveryTime: string;
  icon: 'key' | 'game1' | 'game2' | 'game3' | 'game5';
  sampleCovers: string[];
}

interface PopularSingleGame {
  title: string;
  genre: string;
  coverImage: string;
  year: number;
  badge?: string;
}

const POPULAR_SINGLE_GAMES: PopularSingleGame[] = [
  {
    title: 'Grand Theft Auto V: Premium Edition (GTA 5)',
    genre: 'Open World Crime Action',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg',
    year: 2024,
    badge: 'ALL-TIME BESTSELLER'
  },
  {
    title: 'Black Myth: Wukong',
    genre: 'Action RPG',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg',
    year: 2024,
    badge: 'GOTY WINNER'
  },
  {
    title: 'Resident Evil 4 Remake (Gold Edition)',
    genre: 'Survival Horror',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg',
    year: 2024,
    badge: 'TOP HORROR'
  },
  {
    title: 'Forza Horizon 5: Premium Edition',
    genre: 'Open World Racing',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg',
    year: 2024,
    badge: 'TOP RACING'
  },
  {
    title: 'Cyberpunk 2077: Phantom Liberty',
    genre: 'Open World RPG',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
    year: 2024,
    badge: 'RAY TRACING'
  },
  {
    title: 'God of War Ragnarök',
    genre: 'Mythological Action',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/header.jpg',
    year: 2024,
    badge: 'PLAYSTATION HIT'
  },
  {
    title: 'Warhammer 40k: Space Marine 2',
    genre: 'Action Shooter',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2183900/header.jpg',
    year: 2024,
    badge: 'TRENDING'
  },
  {
    title: 'Dragon Ball: Sparking! ZERO',
    genre: 'Anime Fighting',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1790600/header.jpg',
    year: 2024,
    badge: 'TOP HIT'
  },
  {
    title: 'Silent Hill 2 (Remake)',
    genre: 'Psychological Horror',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2124490/header.jpg',
    year: 2024,
    badge: 'HORROR'
  },
  {
    title: 'EA SPORTS FC 25',
    genre: 'Football / Sports',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2669320/header.jpg',
    year: 2024,
    badge: 'TOP SPORTS'
  },
  {
    title: 'Red Dead Redemption 2',
    genre: 'Open World Western',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
    year: 2024,
    badge: 'MASTERPIECE'
  },
  {
    title: 'Ghost of Tsushima DIRECTOR\'S CUT',
    genre: 'Samurai Action',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/header.jpg',
    year: 2024,
    badge: 'PLAYSTATION HIT'
  },
  {
    title: "Marvel's Spider-Man Remastered",
    genre: 'Superhero Action',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg',
    year: 2024,
    badge: 'BLOCKBUSTER'
  },
  {
    title: 'Elden Ring: Shadow of the Erdtree',
    genre: 'Action RPG',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg',
    year: 2024,
    badge: 'DARK FANTASY'
  },
  {
    title: 'Resident Evil Village',
    genre: 'Survival Horror',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/header.jpg',
    year: 2024,
    badge: 'GOTHIC HORROR'
  },
  {
    title: 'Hitman: World of Assassination (Agent 47)',
    genre: 'Stealth / Espionage',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1659040/header.jpg',
    year: 2024,
    badge: 'STEALTH HIT'
  }
];

const SINGLE_OPTIONS: SingleGameOption[] = [
  {
    id: 'single-steam-account',
    price: 80,
    originalPrice: 299,
    title: 'Steam Account ID & Password (ANY Game)',
    badge: 'ANY GAME • ₹80',
    type: 'account',
    subtitle: 'Pre-activated Steam Account credentials for ANY PC game ready to play',
    features: [
      'Steam Account ID & Password for ANY PC game',
      'GTA 5, RE4 Remake, Forza Horizon 5, Hitman & all AAA',
      '100% login guarantee & verified access',
      'Instant digital credentials in 3-5 mins',
      'Full setup assistance & 1-on-1 support'
    ],
    deliveryTime: 'Instant (3-5 mins)',
    icon: 'key',
    sampleCovers: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1659040/header.jpg'
    ]
  },
  {
    id: 'single-add-1-game',
    price: 120,
    originalPrice: 499,
    title: 'Add 1 game to personal Steam account',
    badge: '1 GAME UNLOCK',
    type: 'personal',
    subtitle: 'Any 1 PC game of your choice added directly to your own account',
    features: [
      'Add 1 game to your personal Steam account',
      'Keep your own profile, achievements & trophies',
      'Play with friends on your primary account',
      'Complete step-by-step setup assistance'
    ],
    deliveryTime: '5-10 mins',
    icon: 'game1',
    sampleCovers: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/header.jpg'
    ]
  },
  {
    id: 'single-add-2-games',
    price: 199,
    originalPrice: 899,
    title: 'Add 2 games to personal Steam account',
    badge: 'POPULAR DUO',
    popular: true,
    type: 'personal',
    subtitle: 'Choose any 2 PC games added directly to your personal account',
    features: [
      'Add 2 games to your personal Steam account',
      'Save ₹41 compared to individual singles',
      'Direct verified addition to your library',
      'Personal customer support included'
    ],
    deliveryTime: '5-10 mins',
    icon: 'game2',
    sampleCovers: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/2183900/header.jpg',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1790600/header.jpg',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/2669320/header.jpg'
    ]
  },
  {
    id: 'single-add-3-games',
    price: 249,
    originalPrice: 1299,
    title: 'Add 3 games to personal Steam account',
    badge: 'TRIO PACK',
    type: 'personal',
    subtitle: 'Choose any 3 PC games added directly to your personal account',
    features: [
      'Add 3 games to your personal Steam account',
      'Save ₹111 compared to individual singles',
      'Direct verified addition to your library',
      'Priority setup assistance & support'
    ],
    deliveryTime: '5-10 mins',
    icon: 'game3',
    sampleCovers: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/header.jpg',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg'
    ]
  },
  {
    id: 'single-add-5-games',
    price: 349,
    originalPrice: 1999,
    title: 'Add 5 games to personal Steam account',
    badge: 'BEST VALUE',
    bestValue: true,
    type: 'personal',
    subtitle: 'Choose any 5 PC games added directly to your personal account',
    features: [
      'Add 5 games to your personal Steam account',
      'Only ~₹70 per game (Maximum Single Savings)',
      'Direct verified addition to your library',
      'VIP setup assistance & 1-on-1 personal support'
    ],
    deliveryTime: '5-10 mins',
    icon: 'game5',
    sampleCovers: [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg',
      'https://cdn.cloudflare.steamstatic.com/steam/apps/2124490/header.jpg'
    ]
  }
];

export const SingleGamesSection: React.FC<SingleGamesSectionProps> = ({
  settings,
  featuredBundle,
  onSelectBundle
}) => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'personal' | 'account'>('all');

  const filteredOptions = SINGLE_OPTIONS.filter((opt) => {
    if (selectedTab === 'personal') return opt.type === 'personal';
    if (selectedTab === 'account') return opt.type === 'account';
    return true;
  });

  return (
    <section id="single-games" className="py-20 relative bg-gradient-to-b from-[#050608] via-[#090d1a] to-[#050608] border-t border-b border-amber-500/20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[250px] bg-orange-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Gamepad2 className="w-4 h-4 text-amber-400" />
            <span>INDIVIDUAL TITLES & STEAM ACCOUNT SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-gaming tracking-tight mb-3">
            SINGLE GAMES BUNDLE
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Want specific games instead of a massive vault? Get ready-to-play <span className="text-amber-400 font-bold">Steam Account ID & Password for just ₹80</span> for ANY game, or add titles directly to your personal Steam account for ₹120.
          </p>
        </div>

        {/* Featured Offer Banner (Highlighting the ₹399/₹449 Steam Unlock Bundle) */}
        <div className="mb-12 glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/40 bg-gradient-to-r from-amber-500/[0.12] via-black/80 to-amber-600/[0.12] shadow-[0_0_40px_rgba(245,158,11,0.15)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center shrink-0 shadow-lg text-amber-400">
                <Sparkles className="w-7 h-7 text-amber-400 animate-pulse" />
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-black text-[11px] font-black uppercase font-gaming tracking-wider">
                    MAIN FEATURED OFFER
                  </span>
                  <span className="text-xs text-amber-400 font-bold">
                    ★ BEST OVERALL VALUE
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-gaming tracking-tight">
                  ₹449 Steam Unlock Bundle (All 60,000 Games Vault)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  Why stop at a single game? Unlock ALL games + full Steam Unlock Feature + Lifetime Access + Complete Setup Assistance + Personal Customer Support for just ₹449.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <div className="text-center sm:text-right hidden sm:block">
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-gaming">Featured Price</div>
                <div className="text-3xl font-black text-amber-400 font-gaming">₹449</div>
              </div>

              {featuredBundle && onSelectBundle ? (
                <button
                  type="button"
                  onClick={() => onSelectBundle(featuredBundle)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all cursor-pointer"
                >
                  <span>View All-Games Bundle</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => openInstagram(settings.instagramUrl, '₹449 Steam Unlock Bundle (Featured Offer)', 449)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all cursor-pointer"
                >
                  <Instagram className="w-4 h-4 text-black" />
                  <span>Order ₹449 Steam Unlock</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* POPULAR TITLES SHOWCASE (REAL STEAM COVER IMAGES & INSTANT ACTIONS)       */}
        {/* ========================================================================= */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                <Flame className="w-4 h-4 fill-amber-400" />
                <span>HOTTEST TITLES READY FOR INSTANT ACTIVATION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-gaming tracking-tight">
                POPULAR GAMES AVAILABLE RIGHT NOW
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Click any title to get dedicated <strong className="text-emerald-400">Steam ID & Password for ₹80</strong> or <strong className="text-sky-300">Add to Personal Steam for ₹120</strong>.
              </p>
            </div>

            <a
              href="#catalog-explorer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors shrink-0"
            >
              <span>Search 600+ more titles in Vault</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Grid of Popular Games with Authentic Steam Posters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {POPULAR_SINGLE_GAMES.map((game, idx) => (
              <div
                key={idx}
                className="group glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between bg-[#080b14]/95 hover:-translate-y-1 shadow-lg"
              >
                {/* Header Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                  <img
                    src={game.coverImage}
                    alt={game.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex gap-1">
                    {game.badge && (
                      <span className="px-2 py-0.5 rounded-md bg-amber-500 text-black text-[10px] font-black uppercase font-gaming shadow">
                        {game.badge}
                      </span>
                    )}
                  </div>

                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[10px] text-slate-300 font-semibold border border-white/10">
                    {game.year}
                  </div>

                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-[10px] font-semibold text-amber-300 uppercase tracking-wider block">
                      {game.genre}
                    </span>
                    <h4 className="text-sm font-bold text-white font-gaming truncate leading-tight drop-shadow">
                      {game.title}
                    </h4>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-3.5 space-y-2 bg-[#090d18]">
                  {/* Action 1: Get ID & Password for ₹80 */}
                  <button
                    type="button"
                    onClick={() => {
                      const msg = `Hi GAMERS PLANET! I want to get Steam Account ID & Password for ${game.title} (₹80). Please share payment details!`;
                      const url = `${settings.instagramUrl.replace(/\/$/, '')}/?text=${encodeURIComponent(msg)}`;
                      window.open(url, '_blank', 'noopener,noreferrer');
                    }}
                    className="w-full py-2 px-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 font-extrabold text-xs flex items-center justify-between transition-all cursor-pointer group/btn"
                    title={`Get instant ID & Pass for ${game.title}`}
                  >
                    <span className="flex items-center gap-1.5 truncate">
                      <KeyRound className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">Get ID & Pass</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-400 text-black text-[11px] font-black shrink-0 font-gaming">
                      ₹80
                    </span>
                  </button>

                  {/* Action 2: Add to Personal Steam for ₹120 */}
                  <button
                    type="button"
                    onClick={() => {
                      const msg = `Hi GAMERS PLANET! I want to add ${game.title} directly to my personal Steam account (₹120). Please share setup details!`;
                      const url = `${settings.instagramUrl.replace(/\/$/, '')}/?text=${encodeURIComponent(msg)}`;
                      window.open(url, '_blank', 'noopener,noreferrer');
                    }}
                    className="w-full py-2 px-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/35 text-amber-300 font-extrabold text-xs flex items-center justify-between transition-all cursor-pointer group/btn2"
                    title={`Add ${game.title} to personal Steam account`}
                  >
                    <span className="flex items-center gap-1.5 truncate">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span className="truncate">Personal Steam</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-amber-400 text-black text-[11px] font-black shrink-0 font-gaming">
                      ₹120
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter Tabs for Options */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-10 overflow-x-auto pb-2 px-1 scrollbar-none w-full touch-pan-x">
          <button
            type="button"
            onClick={() => setSelectedTab('all')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer active:scale-95 ${
              selectedTab === 'all'
                ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                : 'glass-card text-slate-300 hover:text-white hover:border-white/20'
            }`}
          >
            All Single Options (5)
          </button>
          <button
            type="button"
            onClick={() => setSelectedTab('personal')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer active:scale-95 ${
              selectedTab === 'personal'
                ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                : 'glass-card text-slate-300 hover:text-white hover:border-white/20'
            }`}
          >
            Add to Personal Steam Account (4)
          </button>
          <button
            type="button"
            onClick={() => setSelectedTab('account')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer active:scale-95 ${
              selectedTab === 'account'
                ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                : 'glass-card text-slate-300 hover:text-white hover:border-white/20'
            }`}
          >
            Steam ID & Password (1)
          </button>
        </div>

        {/* Single Games Bundle Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredOptions.map((opt) => {
            const savingsPercent = Math.round(((opt.originalPrice - opt.price) / opt.originalPrice) * 100);
            const isTopTier = opt.bestValue || opt.popular;

            return (
              <div
                key={opt.id}
                className={`group glass-card rounded-2xl overflow-hidden flex flex-col justify-between border transition-all duration-300 hover:-translate-y-1 shadow-xl bg-[#090c16]/95 relative ${
                  isTopTier 
                    ? 'border-amber-500/50 shadow-[0_0_25px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/30' 
                    : 'border-white/10 hover:border-amber-500/40'
                }`}
              >
                {/* Highlight Glow for Top Tiers */}
                {isTopTier && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500" />
                )}

                {/* Card Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform shrink-0">
                      {opt.icon === 'key' && <KeyRound className="w-6 h-6 text-amber-400" />}
                      {opt.icon === 'game1' && <Gamepad2 className="w-6 h-6 text-amber-400" />}
                      {opt.icon === 'game2' && <Flame className="w-6 h-6 text-amber-400" />}
                      {opt.icon === 'game3' && <Sparkles className="w-6 h-6 text-amber-400" />}
                      {opt.icon === 'game5' && <Zap className="w-6 h-6 text-amber-400" />}
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      {opt.badge && (
                        <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase font-gaming tracking-wider ${
                          opt.bestValue 
                            ? 'bg-amber-400 text-black shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                            : opt.popular
                            ? 'bg-orange-500 text-black'
                            : 'bg-white/10 text-slate-300 border border-white/10'
                        }`}>
                          {opt.badge}
                        </span>
                      )}
                      <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{opt.deliveryTime}</span>
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-gaming group-hover:text-amber-300 transition-colors mb-1.5 leading-snug">
                    {opt.title}
                  </h3>
                  
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {opt.subtitle}
                  </p>

                  {/* Sample Covers Preview Strip */}
                  {opt.sampleCovers && opt.sampleCovers.length > 0 && (
                    <div className="mb-4 bg-black/40 rounded-xl p-2.5 border border-white/5">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>Popular Available Covers</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1.5">
                        {opt.sampleCovers.map((cover, cIdx) => (
                          <div key={cIdx} className="rounded-md overflow-hidden aspect-[16/10] bg-black border border-white/10">
                            <img
                              src={cover}
                              alt="Game cover preview"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Feature Checklist */}
                  <div className="space-y-2 py-3 border-t border-b border-white/10 my-4 bg-black/30 rounded-xl p-3">
                    {opt.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & Order on Instagram Action */}
                <div className="p-6 pt-2">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-widest font-gaming">
                        Offer Price
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-white font-gaming tracking-tight">
                          ₹{opt.price}
                        </span>
                        <span className="text-xs text-slate-500 line-through">
                          ₹{opt.originalPrice}
                        </span>
                      </div>
                    </div>

                    <span className="px-2 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                      Save {savingsPercent}%
                    </span>
                  </div>

                  {/* Order on Instagram Button */}
                  <button
                    type="button"
                    onClick={() => openInstagram(settings.instagramUrl, opt.title, opt.price)}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] transition-all cursor-pointer group/btn"
                  >
                    <Instagram className="w-4 h-4 text-black group-hover/btn:rotate-12 transition-transform" />
                    <span>Order on Instagram</span>
                    <ArrowRight className="w-3.5 h-3.5 text-black group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[10px] text-center text-slate-500 mt-2">
                    Direct UPI / QR payment • Instant DM delivery
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust & Instructions Note */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-gaming">
                How to Order Any Single Game Option
              </div>
              <div className="text-xs text-slate-400">
                Click "Get ID & Pass (₹80)" or "Order on Instagram" on any tier. DM us your desired game title(s) on <span className="text-amber-400 font-semibold">@gamersplanet20.26</span>. We deliver directly to you in 3-5 minutes!
              </div>
            </div>
          </div>

          <a
            href={settings.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Instagram className="w-4 h-4 text-amber-400" />
            <span>Chat on Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
};
