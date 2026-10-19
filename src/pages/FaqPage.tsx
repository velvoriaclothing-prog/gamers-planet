import React from 'react';
import { HelpCircle, ShieldCheck, Zap, Instagram, Send, PhoneCall, Globe, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { SiteSettings } from '../types/index.js';
import { FaqSection } from '../components/FaqSection.js';
import { FeaturesSection } from '../components/FeaturesSection.js';
import { getChannelRedirectInfo } from '../utils/channelRedirect.js';

interface FaqPageProps {
  settings: SiteSettings;
}

export const FaqPage: React.FC<FaqPageProps> = ({ settings }) => {
  const redirectInfo = getChannelRedirectInfo(settings, { actionType: 'support' });

  return (
    <div className="space-y-12 pb-16">
      {/* 1. Header */}
      <section className="relative pt-8 pb-4 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>HELP CENTER & ACTIVATION GUIDE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-gaming tracking-tight mb-3">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
          Everything you need to know about purchasing, payment via UPI/GPay/PhonePe, 5-minute activation, and lifetime support.
        </p>

        {/* 3 Step Quick Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
          <div className="glass-panel p-4 rounded-2xl border border-amber-500/30 bg-[#090d18]/90">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-black font-gaming mb-2">
              1
            </div>
            <h4 className="text-xs font-bold text-white font-gaming mb-1">Pick Game or Bundle</h4>
            <p className="text-[11px] text-slate-400">Choose ₹80 Single Game, Steam Unlock, or Mega Bundles.</p>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-amber-500/30 bg-[#090d18]/90">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-black font-gaming mb-2">
              2
            </div>
            <h4 className="text-xs font-bold text-white font-gaming mb-1">Pay via Any UPI App</h4>
            <p className="text-[11px] text-slate-400">Pay securely using Google Pay, PhonePe, Paytm, or BHIM UPI.</p>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-amber-500/30 bg-[#090d18]/90">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black font-gaming mb-2">
              3
            </div>
            <h4 className="text-xs font-bold text-white font-gaming mb-1">Instant 5-Min Setup</h4>
            <p className="text-[11px] text-slate-400">Get credentials or direct library addition with 1-on-1 support.</p>
          </div>
        </div>
      </section>

      {/* 2. FAQ Accordion Section */}
      <FaqSection settings={settings} />

      {/* 3. Features & Guarantees */}
      <FeaturesSection settings={settings} />

      {/* 4. Need more help? Direct Chat */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-black to-amber-500/10 text-center">
          <h3 className="text-xl sm:text-2xl font-black text-white font-gaming mb-2">
            Still Have Questions?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-5">
            Our team is active 7 days a week on {redirectInfo.platformName} to help you choose the right bundle or answer any technical question.
          </p>
          <a
            href={redirectInfo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs sm:text-sm uppercase font-gaming inline-flex items-center gap-2 shadow-lg cursor-pointer active:scale-95 transition-all text-center"
            title={redirectInfo.actionLabel}
          >
            {redirectInfo.isWhatsApp && <PhoneCall className="w-4 h-4 text-black shrink-0" />}
            {redirectInfo.isTelegram && <Send className="w-4 h-4 text-black shrink-0" />}
            {redirectInfo.isInstagram && <Instagram className="w-4 h-4 text-black shrink-0" />}
            {redirectInfo.isCustom && <Globe className="w-4 h-4 text-black shrink-0" />}
            <span>Chat With Us on {redirectInfo.platformName}</span>
            <ArrowRight className="w-4 h-4 text-black shrink-0" />
          </a>
        </div>
      </section>
    </div>
  );
};
