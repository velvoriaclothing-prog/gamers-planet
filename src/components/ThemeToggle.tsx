import React from 'react';
import { Palette, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.js';

interface ThemeToggleProps {
  variant?: 'navbar' | 'compact' | 'footer';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ variant = 'navbar' }) => {
  const { openThemeModal, themeConfig } = useTheme();

  if (variant === 'footer') {
    return (
      <button
        onClick={openThemeModal}
        type="button"
        className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/10 flex items-center gap-1.5 text-xs font-gaming"
        title="Customize Theme & Wallpaper"
      >
        <Palette className="w-3.5 h-3.5 text-amber-400" />
        <span>Theme: {themeConfig.name}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={openThemeModal}
      className="flex items-center gap-1.5 py-1.5 px-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white text-xs font-gaming font-bold transition-all cursor-pointer shadow-sm hover:border-amber-500/40"
      title={`Current Theme: ${themeConfig.name} — Click to customize`}
      aria-label="Customize Store Theme and Live Wallpaper"
    >
      <span
        className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
        style={{ backgroundColor: themeConfig.primaryColor }}
      />
      <Palette className="w-3.5 h-3.5 text-slate-300" />
      <span className="hidden sm:inline tracking-wide">{themeConfig.name.split(' ')[0]}</span>
    </button>
  );
};
