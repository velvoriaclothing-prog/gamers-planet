import React from 'react';
import { Zap, ShieldCheck, Download, Headphones } from 'lucide-react';
import { SiteSettings } from '../types/index.js';
import { getChannelRedirectInfo } from '../utils/channelRedirect.js';
import { useLanguage } from '../context/LanguageContext.js';

interface FeaturesSectionProps {
  settings?: SiteSettings;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ settings }) => {
  const { t } = useLanguage();
  const platform = settings ? getChannelRedirectInfo(settings).platformName : 'Direct DM';

  const features = [
    {
      icon: Zap,
      title: t('features.f1_title', '5-Minute Instant Delivery'),
      description: t('features.f1_desc', `Zero waiting queues. Once payment screenshot is verified on ${platform}, login credentials and direct setup guides arrive in minutes.`)
    },
    {
      icon: ShieldCheck,
      title: t('features.f2_title', '100% Verified & Safe'),
      description: t('features.f2_desc', 'Every vault bundle is thoroughly pre-tested for malware, clean cloud syncing, and high performance before listing.')
    },
    {
      icon: Download,
      title: t('features.f3_title', 'Lifetime Reinstallation'),
      description: t('features.f3_desc', 'Switching to a new gaming rig or reinstalling Windows? Your vault access remains yours forever with no additional fees.')
    },
    {
      icon: Headphones,
      title: t('features.f4_title', `1-on-1 ${platform} Support`),
      description: t('features.f4_desc', `Facing driver conflicts or setup confusion? Our technical team assists you directly on ${platform} with personalized walkthroughs.`)
    }
  ];

  return (
    <section id="features" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2 font-gaming">
          {t('features.eyebrow', 'Why Thousands of Gamers Choose Us')}
        </h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-gaming tracking-tight [text-wrap:balance]">
          {t('features.title', 'THE ULTIMATE GAMER ADVANTAGE')}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div
              key={idx}
              className="bg-[#080d1a]/85 backdrop-blur-xl p-6 rounded-2xl flex flex-col justify-between border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white font-gaming mb-2">
                  {feat.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {feat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

