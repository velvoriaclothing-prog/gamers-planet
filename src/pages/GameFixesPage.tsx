import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Wrench, Box } from 'lucide-react';
import { MosaicBackdrop } from '../components/MosaicBackdrop.js';
import { GAME_FIXES, GameFixCategory } from '../data/gameFixes.js';

const CATEGORIES: Array<'All' | Exclude<GameFixCategory, 'All'>> = [
  'All',
  'Online Fix',
  'Rockstar',
  'Ubisoft',
  'Capcom',
  'EA',
  'Sony',
];

const PAGE_SIZE = 60;

export const GameFixesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const filteredGames = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return GAME_FIXES.filter((game) => {
      const matchesCat =
        selectedCategory === 'All' || game.category === selectedCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        game.title.toLowerCase().includes(q) ||
        game.category.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, selectedCategory]);

  const visibleGames = useMemo(
    () => filteredGames.slice(0, visibleCount),
    [filteredGames, visibleCount]
  );

  const remaining = Math.max(0, filteredGames.length - visibleCount);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setVisibleCount(PAGE_SIZE);
  };

  const handleImageError = (id: number) => {
    setFailedImages((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
  };

  return (
    <div className="relative min-h-screen pb-20">
      <MosaicBackdrop />

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        {/* Editorial Header */}
        <div className="mb-6 sm:mb-7 max-w-2xl">
          <div className="flex items-baseline gap-3 flex-wrap mb-1.5">
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Game Fixes
            </h1>
            <span className="text-xs font-medium text-zinc-400 tabular-nums">
              {filteredGames.length.toLocaleString('en-IN')} available
            </span>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Browse the database for available Steam &amp; online fixes. Click any game card to open its fix page.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full max-w-sm mb-4">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search game fixes..."
            className="w-full pl-10 pr-8 py-2.5 rounded-lg bg-[#141418]/90 backdrop-blur-md border border-white/[0.1] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500/60 transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => handleSearchChange('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-7 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
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

        {/* Game Fixes Grid */}
        {filteredGames.length === 0 ? (
          <div className="bg-[#121215] rounded-xl p-10 text-center max-w-md mx-auto my-8 border border-white/[0.07]">
            <Wrench className="w-9 h-9 text-zinc-500 mx-auto mb-3" />
            <h2 className="text-base font-semibold text-white mb-1">No Matching Game Fixes</h2>
            <p className="text-xs text-zinc-400 mb-4">
              No releases matched &ldquo;{searchQuery}&rdquo;. Try another title or reset filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 text-xs font-medium rounded-lg bg-red-600 hover:bg-red-500 text-white transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {visibleGames.map((game) => {
                const hasImage = Boolean(game.image) && !failedImages[game.id];

                return (
                  <a
                    key={game.id}
                    href={game.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#121215] hover:bg-[#17171b] border border-white/[0.07] hover:border-white/[0.18] rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  >
                    {/* Clean 16:9 Game Cover Header */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
                      {hasImage ? (
                        <img
                          src={game.image}
                          alt={game.title}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          decoding="async"
                          onError={() => handleImageError(game.id)}
                          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1b1b22] to-[#111115] text-zinc-600">
                          <Wrench className="w-6 h-6" />
                        </div>
                      )}
                    </div>

                    {/* Clean Two-Line Card Footer */}
                    <div className="p-3 sm:p-4 flex items-center justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <h2 className="text-xs sm:text-[15px] font-semibold text-white group-hover:text-red-400 transition-colors truncate leading-snug">
                          {game.title}
                        </h2>

                        <div className="mt-1 flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-400">
                          <Box className="w-3 h-3 text-zinc-500 shrink-0" />
                          <span className="truncate">{game.category}</span>
                        </div>
                      </div>

                      <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-200 transition-colors shrink-0" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Load More / Show All Controls */}
            {remaining > 0 && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                  className="px-5 py-2.5 rounded-lg bg-[#16161b] hover:bg-[#1f1f26] border border-white/[0.1] text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer tabular-nums"
                >
                  Load More ({Math.min(PAGE_SIZE, remaining)} of {remaining.toLocaleString('en-IN')} remaining)
                </button>
                <button
                  type="button"
                  onClick={() => setVisibleCount(filteredGames.length)}
                  className="px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer tabular-nums"
                >
                  Show All ({filteredGames.length.toLocaleString('en-IN')})
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};
