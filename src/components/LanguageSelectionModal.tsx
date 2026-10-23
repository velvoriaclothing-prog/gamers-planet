import React, { useState } from 'react';
import { Globe, Check, Sparkles, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext.js';

export const LanguageSelectionModal: React.FC = () => {
  const { language, setLanguage, showLanguageModal, closeLanguageModal, t } = useLanguage();
  const [selected, setSelected] = useState<Language>(language);

  if (!showLanguageModal) return null;

  const handleConfirm = () => {
    setLanguage(selected);
    closeLanguageModal();
  };

  const handleSelectDirect = (lang: Language) => {
    setSelected(lang);
    setLanguage(lang);
    // Smooth delay before closing so user sees active feedback
    setTimeout(() => {
      closeLanguageModal();
    }, 250);
  };

  const options: {
    id: Language;
    title: string;
    subtitle: string;
    badge: string;
    flag: string;
    sample: string;
  }[] = [
    {
      id: 'en',
      title: 'English',
      subtitle: 'Clear game titles, direct specifications & instant delivery steps.',
      badge: 'INTERNATIONAL',
      flag: '🌐',
      sample: 'Direct PC Game Vault & Instant Steam Unlock'
    },
    {
      id: 'hi',
      title: 'हिंदी (Hindi)',
      subtitle: 'सरल और स्पष्ट हिंदी में सभी गेम्स, वीडियो प्रमाण और डिलीवरी की जानकारी।',
      badge: 'आसान हिंदी',
      flag: '🇮🇳',
      sample: 'सर्वश्रेष्ठ पीसी गेमिंग बंडल्स और तुरंत डिलीवरी'
    },
    {
      id: 'hinglish',
      title: 'Hinglish (Mix)',
      subtitle: 'Desi gamer mix — Fast, friendly aur samajhne mein sabse aasan.',
      badge: 'GAMER STYLE',
      flag: '⚡',
      sample: 'Sabse sasta PC game vault aur direct DM delivery'
    }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lang-modal-title"
    >
      <div className="relative w-full max-w-lg bg-[#080c18] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden">
        
        {/* Subtle obsidian ambient glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-600/5 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={closeLanguageModal}
          type="button"
          aria-label="Close language selector"
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center mb-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold font-gaming mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>CHOOSE YOUR LANGUAGE / अपनी भाषा चुनें</span>
          </div>

          <h3 id="lang-modal-title" className="text-xl sm:text-2xl font-black text-white font-gaming tracking-tight">
            Select Language to Continue
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1.5 max-w-sm mx-auto leading-relaxed">
            Gamers Planet adapts smoothly to your preferred language. You can change this anytime from the top bar.
          </p>
        </div>

        {/* Language Options Grid */}
        <div className="space-y-3 mb-6 relative z-10">
          {options.map((opt) => {
            const isSelected = selected === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelectDirect(opt.id)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 group relative overflow-hidden ${
                  isSelected
                    ? 'bg-amber-500/15 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.25)] ring-1 ring-amber-400/60'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]'
                }`}
              >
                {/* Active Indicator Bar on Left */}
                {isSelected && (
                  <div className="absolute left-0 inset-y-0 w-1.5 bg-amber-400" />
                )}

                <div className="flex items-center gap-3.5 min-w-0">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 border ${
                    isSelected 
                      ? 'bg-amber-500/20 border-amber-400/50' 
                      : 'bg-white/5 border-white/10'
                  }`}>
                    <span>{opt.flag}</span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm sm:text-base font-black font-gaming tracking-wide ${
                        isSelected ? 'text-amber-400' : 'text-white'
                      }`}>
                        {opt.title}
                      </span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10 uppercase">
                        {opt.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                      {opt.subtitle}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                    isSelected
                      ? 'bg-amber-500 border-amber-400 text-black scale-110 shadow-[0_0_10px_rgba(245,158,11,0.6)]'
                      : 'border-white/20 text-transparent group-hover:border-white/40'
                  }`}>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer info & Confirm button */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Instant switch • 100% Free</span>
          </div>

          <button
            type="button"
            onClick={handleConfirm}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black font-black text-xs font-gaming flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all cursor-pointer active:scale-95"
          >
            <span>{t('lang.continue', 'Continue to Store')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
