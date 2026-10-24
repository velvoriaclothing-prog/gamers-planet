import React from 'react';
import { Palette, Check, X, Sparkles, Sliders, Eye, Zap, Shield, Moon } from 'lucide-react';
import { useTheme, THEMES, ThemeId, WallpaperMode } from '../context/ThemeContext.js';
import { useLanguage } from '../context/LanguageContext.js';

export const ThemeSelectorModal: React.FC = () => {
  const { 
    theme, 
    setTheme, 
    wallpaperMode, 
    setWallpaperMode, 
    isThemeModalOpen, 
    closeThemeModal 
  } = useTheme();
  const { t } = useLanguage();

  if (!isThemeModalOpen) return null;

  const themesList = Object.values(THEMES);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="theme-modal-title"
    >
      <div className="relative w-full max-w-lg bg-[#080c18] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={closeThemeModal}
          type="button"
          aria-label="Close theme selector"
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold font-gaming mb-3">
            <Palette className="w-3.5 h-3.5 text-amber-400" />
            <span>STORE THEME & LIVE WALLPAPER</span>
          </div>

          <h3 id="theme-modal-title" className="text-xl sm:text-2xl font-black text-white font-gaming tracking-tight">
            Customize Website Theme
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-sm mx-auto leading-relaxed">
            Select an atmospheric gaming theme. All bundles and details remain clearly visible with high contrast.
          </p>
        </div>

        {/* Theme Options */}
        <div className="space-y-2.5 mb-6">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-gaming mb-1">
            Color Palette
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {themesList.map((item) => {
              const isSelected = theme === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTheme(item.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden group ${
                    isSelected
                      ? 'bg-white/[0.08] shadow-[0_0_20px_rgba(0,0,0,0.6)]'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
                  }`}
                  style={{
                    borderColor: isSelected ? item.primaryColor : undefined,
                    boxShadow: isSelected ? `0 0 20px ${item.glowColor}` : undefined,
                  }}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-full shadow-sm border border-white/20"
                        style={{ backgroundColor: item.primaryColor }}
                      />
                      <span className="text-sm font-bold font-gaming text-white group-hover:text-amber-300 transition-colors">
                        {item.name}
                      </span>
                    </div>

                    {isSelected && (
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center text-black shadow-sm"
                        style={{ backgroundColor: item.primaryColor }}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  <p className="text-[10px] text-slate-400 line-clamp-1">
                    {item.tagline}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Wallpaper Animation Control */}
        <div className="mb-6 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-gaming flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Live Wallpaper Animation</span>
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'animated' as WallpaperMode, label: 'Live Animated', desc: 'Floating stars & grid' },
              { id: 'subtle' as WallpaperMode, label: 'Subtle Drift', desc: 'Calm slow particles' },
              { id: 'static' as WallpaperMode, label: 'Static Minimal', desc: 'Zero motion backdrop' },
            ].map((mode) => {
              const isSelected = wallpaperMode === mode.id;
              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setWallpaperMode(mode.id)}
                  className={`py-2 px-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500/20 border-amber-400 text-white font-bold shadow-sm'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <div className="text-xs font-gaming">{mode.label}</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">{mode.desc}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Done Button */}
        <button
          type="button"
          onClick={closeThemeModal}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs sm:text-sm font-gaming uppercase tracking-wider transition-all cursor-pointer shadow-lg active:scale-98"
        >
          Apply Theme & Close
        </button>

      </div>
    </div>
  );
};
