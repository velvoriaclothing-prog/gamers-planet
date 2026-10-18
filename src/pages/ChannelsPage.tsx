import React from 'react';
import { Lock, Sparkles, ShieldCheck } from 'lucide-react';
import { SiteSettings } from '../types/index.js';
import { ChannelsSection } from '../components/ChannelsSection.js';

interface ChannelsPageProps {
  settings: SiteSettings;
  isAdmin: boolean;
  onOpenAdmin: () => void;
}

export const ChannelsPage: React.FC<ChannelsPageProps> = ({
  settings,
  isAdmin,
  onOpenAdmin
}) => {
  return (
    <div className="space-y-6 pb-16">
      <ChannelsSection
        settings={settings}
        isAdmin={isAdmin}
        onOpenAdmin={onOpenAdmin}
      />
    </div>
  );
};
