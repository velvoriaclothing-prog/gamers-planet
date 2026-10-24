import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeId = 'obsidian-gold' | 'cyber-emerald' | 'cosmic-sapphire' | 'crimson-titan';
export type WallpaperMode = 'animated' | 'subtle' | 'static';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  tagline: string;
  primaryColor: string; // e.g. #f59e0b
  secondaryColor: string;
  accentClass: string;
  glowColor: string;
  bgBase: string;
  cardBase: string;
}

export const THEMES: Record<ThemeId, ThemeConfig> = {
  'obsidian-gold': {
    id: 'obsidian-gold',
    name: 'Obsidian Gold',
    tagline: 'Signature Luxury PC Vault & Amber Accents',
    primaryColor: '#f59e0b',
    secondaryColor: '#d97706',
    accentClass: 'amber',
    glowColor: 'rgba(245, 158, 11, 0.35)',
    bgBase: '#04060e',
    cardBase: 'rgba(9, 13, 25, 0.92)',
  },
  'cyber-emerald': {
    id: 'cyber-emerald',
    name: 'Cyber Emerald',
    tagline: 'Matrix High-Performance Neon & Dark Carbon',
    primaryColor: '#10b981',
    secondaryColor: '#059669',
    accentClass: 'emerald',
    glowColor: 'rgba(16, 185, 129, 0.35)',
    bgBase: '#030a08',
    cardBase: 'rgba(6, 20, 16, 0.92)',
  },
  'cosmic-sapphire': {
    id: 'cosmic-sapphire',
    name: 'Cosmic Sapphire',
    tagline: 'Deep Space Nebula & Cyber Titanium',
    primaryColor: '#0ea5e9',
    secondaryColor: '#0284c7',
    accentClass: 'sky',
    glowColor: 'rgba(14, 165, 233, 0.35)',
    bgBase: '#040714',
    cardBase: 'rgba(7, 16, 34, 0.92)',
  },
  'crimson-titan': {
    id: 'crimson-titan',
    name: 'Crimson Titan',
    tagline: 'Volcanic Dark Matter & Ruby Laser',
    primaryColor: '#f43f5e',
    secondaryColor: '#e11d48',
    accentClass: 'rose',
    glowColor: 'rgba(244, 63, 94, 0.35)',
    bgBase: '#0b0407',
    cardBase: 'rgba(24, 8, 14, 0.92)',
  },
};

interface ThemeContextType {
  theme: ThemeId;
  themeConfig: ThemeConfig;
  setTheme: (theme: ThemeId) => void;
  wallpaperMode: WallpaperMode;
  setWallpaperMode: (mode: WallpaperMode) => void;
  isThemeModalOpen: boolean;
  openThemeModal: () => void;
  closeThemeModal: () => void;
}

const THEME_STORAGE_KEY = 'gamersplanet_active_theme';
const WALLPAPER_STORAGE_KEY = 'gamersplanet_wallpaper_mode';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeId;
      if (saved && THEMES[saved]) return saved;
    } catch {}
    return 'obsidian-gold';
  });

  const [wallpaperMode, setWallpaperModeState] = useState<WallpaperMode>(() => {
    try {
      const saved = localStorage.getItem(WALLPAPER_STORAGE_KEY) as WallpaperMode;
      if (saved && ['animated', 'subtle', 'static'].includes(saved)) return saved;
    } catch {}
    return 'animated';
  });

  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch {}
  };

  const setWallpaperMode = (newMode: WallpaperMode) => {
    setWallpaperModeState(newMode);
    try {
      localStorage.setItem(WALLPAPER_STORAGE_KEY, newMode);
    } catch {}
  };

  const themeConfig = THEMES[theme] || THEMES['obsidian-gold'];

  // Apply theme attributes to document element for global CSS hooks
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-wallpaper-mode', wallpaperMode);
    root.style.setProperty('--primary-accent', themeConfig.primaryColor);
    root.style.setProperty('--primary-glow', themeConfig.glowColor);
    root.style.setProperty('--bg-base', themeConfig.bgBase);
  }, [theme, wallpaperMode, themeConfig]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeConfig,
        setTheme,
        wallpaperMode,
        setWallpaperMode,
        isThemeModalOpen,
        openThemeModal: () => setIsThemeModalOpen(true),
        closeThemeModal: () => setIsThemeModalOpen(false),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
};
