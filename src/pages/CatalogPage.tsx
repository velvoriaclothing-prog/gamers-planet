import React from 'react';
import { Search, Sparkles, Unlock, Zap, KeyRound, Flame } from 'lucide-react';
import { Bundle, SiteSettings } from '../types/index.js';
import { GameCatalogExplorer } from '../components/GameCatalogExplorer.js';

interface CatalogPageProps {
  settings: SiteSettings;
  featuredBundle?: Bundle | null;
  steamUnlockBundle?: Bundle | null;
  onSelectBundle: (bundle: Bundle) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  settings,
  featuredBundle,
  steamUnlockBundle,
  onSelectBundle
}) => {
  return (
    <div className="space-y-6 pb-16">
      {/* Catalog Explorer Component with Compact Smaller Cards */}
      <GameCatalogExplorer
        settings={settings}
        featuredBundle={featuredBundle}
        steamUnlockBundle={steamUnlockBundle}
        onSelectBundle={onSelectBundle}
      />
    </div>
  );
};
