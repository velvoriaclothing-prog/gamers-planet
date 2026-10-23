import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext.js';

interface LanguageToggleProps {
  variant?: 'navbar' | 'compact' | 'footer' | 'drawer';
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ variant = 'navbar' }) => {
  const { language, setLanguage, openLanguageModal } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languageLabels: Record<Language, { label: string; flag: string; short: string }> = {
    en: { label: 'English', flag: '🌐', short: 'EN' },
    hi: { label: 'हिंदी (Hindi)', flag: '🇮🇳', short: 'हिं' },
    hinglish: { label: 'Hinglish', flag: '⚡', short: 'Hinglish' },
  };

  const current = languageLabels[language] || languageLabels.en;

  if (variant === 'drawer') {
    return (
      <div className="p-3 bg-[#0c1224] rounded-2xl border border-white/10 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-gaming flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>Select Language / भाषा</span>
          </span>
          <button
            onClick={() => openLanguageModal()}
            className="text-[10px] text-amber-400 hover:underline cursor-pointer"
          >
            More Details
          </button>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {(['en', 'hi', 'hinglish'] as Language[]).map((lang) => {
            const isSelected = language === lang;
            return (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`py-2 px-2 rounded-xl text-xs font-gaming font-bold flex flex-col items-center justify-center gap-1 transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10'
                }`}
              >
                <span className="text-sm">{languageLabels[lang].flag}</span>
                <span className="text-[11px]">{languageLabels[lang].short}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="flex items-center gap-1.5 py-1.5 px-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white text-xs font-gaming font-bold transition-all cursor-pointer shadow-sm hover:border-amber-500/40"
        title="Change Language (English / हिंदी / Hinglish)"
        aria-expanded={dropdownOpen}
        aria-haspopup="true"
      >
        <span className="text-sm">{current.flag}</span>
        <span className="tracking-wide">{current.short}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Popover Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-[#090d1a] border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.9)] p-2 z-50 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150">
          <div className="px-2.5 py-1 text-[10px] font-bold text-amber-400 uppercase tracking-wider font-gaming border-b border-white/10 mb-1">
            Choose Language / भाषा
          </div>

          {(['en', 'hi', 'hinglish'] as Language[]).map((lang) => {
            const isSelected = language === lang;
            const item = languageLabels[lang];
            return (
              <button
                key={lang}
                type="button"
                onClick={() => {
                  setLanguage(lang);
                  setDropdownOpen(false);
                }}
                className={`w-full text-left px-2.5 py-2 rounded-xl text-xs font-gaming transition-all flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-black font-black shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{item.flag}</span>
                  <span>{item.label}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </button>
            );
          })}

          <div className="mt-1 pt-1 border-t border-white/10">
            <button
              type="button"
              onClick={() => {
                setDropdownOpen(false);
                openLanguageModal();
              }}
              className="w-full text-center text-[10px] text-slate-400 hover:text-amber-400 py-1 transition-colors cursor-pointer"
            >
              Full Language Screen...
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
