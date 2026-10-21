import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SiteSettings } from '../types/index.js';
import { getChannelRedirectInfo } from '../utils/channelRedirect.js';

interface FaqSectionProps {
  settings?: SiteSettings;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ settings }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const platform = settings ? getChannelRedirectInfo(settings).platformName : 'Instagram';

  const faqs = [
    {
      q: `How does ordering via ${platform} work?`,
      a: `Simply choose any bundle and click "Buy Now" to message us on ${platform}. Tell us the bundle you want, complete the payment via UPI, Google Pay, PhonePe, or Paytm, and send the payment screenshot. Within 3-5 minutes, our team will deliver the bundle credentials and full setup instructions directly in your chat.`
    },
    {
      q: 'Are these games permanently added to my PC?',
      a: 'Yes! You get full lifetime access to download and play the games anytime. You can download games directly at maximum speeds without speed caps, and you can reinstall them whenever you upgrade your PC.'
    },
    {
      q: 'Will my save files and achievements be preserved?',
      a: 'Absolutely. Game saves are stored locally on your PC or synced via cloud, so your progress is 100% saved and safe even across Windows updates.'
    },
    {
      q: 'What if a game doesn’t launch on my PC?',
      a: `We provide active 1-on-1 ${platform} technical support. If your hardware meets the game’s minimum specifications and you encounter any launch or DirectX error, we guide you through fixing dependencies or offer an alternative title guarantee.`
    },
    {
      q: 'How do the Single Games options (₹80 - ₹349) work?',
      a: 'If you only want specific titles instead of a full vault, you can add 1 game (₹120), 2 games (₹199), 3 games (₹249), or 5 games (₹349) directly to your personal Steam account, keeping your personal username, trophies, and profile. Or get ready-to-play pre-activated Steam credentials for just ₹80.'
    },
    {
      q: 'What is included in the Steam Unlock and Full Unlock Bundles?',
      a: 'The Steam Unlock Bundle gives you full Steam Unlock features with lifetime validity and personal support. The Full Unlock Bundle includes 1,000 games, Steam Unlock, website VIP channels and Sites section access, plus lifetime game ID and password listings.'
    },
    {
      q: 'Can I request specific games that are not in the existing bundles?',
      a: `Yes! Send us a message on ${platform} with your desired wishlist of games. We can create custom tailored bundle packages for you at discounted bundle rates.`
    }
  ];

  return (
    <section id="faq" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">
          <HelpCircle className="w-4 h-4" />
          <span>Got Questions?</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-gaming tracking-tight">
          FREQUENTLY ASKED QUESTIONS
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="glass-card rounded-2xl overflow-hidden border border-white/5 transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <span className="font-semibold text-sm sm:text-base text-white">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
