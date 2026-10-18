import React, { useState } from 'react';
import { Save, Instagram, Send, PhoneCall, Globe, Palette, CheckCircle2, Loader2, ExternalLink } from 'lucide-react';
import { SiteSettings, PrimaryChannelType } from '../../types/index.js';
import { api } from '../../utils/api.js';
import { getChannelRedirectInfo, navigateToChannel } from '../../utils/channelRedirect.js';

interface AdminSettingsProps {
  settings: SiteSettings;
  onRefresh: () => void;
}

export const AdminSettings: React.FC<AdminSettingsProps> = ({ settings, onRefresh }) => {
  const [form, setForm] = useState<SiteSettings>({
    ...settings,
    primaryChannelType: settings.primaryChannelType || 'instagram',
    channelHandle: settings.channelHandle || '@gamersplanet20.26',
    channelUrl: settings.channelUrl || settings.instagramUrl || 'https://instagram.com/gamersplanet20.26'
  });
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const ACCENT_PRESETS = [
    { name: 'Amber Gold', hex: '#f59e0b' },
    { name: 'Cyberpunk Cyan', hex: '#06b6d4' },
    { name: 'Emerald Vault', hex: '#10b981' },
    { name: 'Neon Crimson', hex: '#ef4444' },
    { name: 'Violet Royale', hex: '#8b5cf6' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setStatusMessage(null);

    try {
      await api.updateSettings(form);
      setStatusMessage({
        type: 'success',
        text: 'Website settings saved! All purchase buttons, DM redirects, and copy updated immediately.'
      });
      onRefresh();
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: err.message || 'Failed to update website settings.'
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-white/10">
        <h3 className="text-xl font-bold text-white font-gaming">
          WEBSITE CUSTOMIZATION & CONFIGURATION
        </h3>
        <p className="text-xs text-slate-400">
          Control store branding, primary contact channel (Instagram / WhatsApp / Telegram), typography, and copy across the entire site.
        </p>
      </div>

      {statusMessage && (
        <div
          className={`p-4 rounded-xl text-xs sm:text-sm flex items-center justify-between ${
            statusMessage.type === 'success'
              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
              : 'bg-red-500/10 border border-red-500/30 text-red-400'
          }`}
        >
          <span>{statusMessage.text}</span>
          <button onClick={() => setStatusMessage(null)}>✕</button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Universal Primary Channel Switcher */}
        <div className="glass-card p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.03]">
          <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold font-gaming text-sm uppercase">
            <Globe className="w-4 h-4" />
            <span>Universal Primary Contact & Purchase Channel</span>
          </div>
          <p className="text-xs text-slate-400 mb-4">
            Select where all customer "Buy Now", "Get ID & Pass", and "DM for Inquiries" buttons redirect across the entire store.
          </p>

          {/* Channel selector options */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {[
              { type: 'instagram' as PrimaryChannelType, label: 'Instagram', icon: Instagram, color: 'text-amber-400' },
              { type: 'whatsapp' as PrimaryChannelType, label: 'WhatsApp', icon: PhoneCall, color: 'text-emerald-400' },
              { type: 'telegram' as PrimaryChannelType, label: 'Telegram', icon: Send, color: 'text-sky-400' },
              { type: 'custom' as PrimaryChannelType, label: 'Custom Link', icon: Globe, color: 'text-purple-400' }
            ].map(({ type, label, icon: Icon, color }) => (
              <button
                key={type}
                type="button"
                onClick={() => setForm({ ...form, primaryChannelType: type })}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                  form.primaryChannelType === type
                    ? 'border-emerald-500 bg-emerald-500/15 text-white font-bold shadow-md shadow-emerald-500/10'
                    : 'border-white/10 bg-[#070b14] text-slate-400 hover:border-white/20'
                }`}
              >
                <Icon className={`w-5 h-5 ${color}`} />
                <span className="text-xs font-gaming">{label}</span>
              </button>
            ))}
          </div>

          {/* Channel details input */}
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                {form.primaryChannelType === 'whatsapp'
                  ? 'WhatsApp Phone Number (with Country Code)'
                  : 'Channel Handle / Username / Profile ID'}
              </label>
              <input
                type="text"
                required
                value={form.channelHandle || ''}
                onChange={(e) => setForm({ ...form, channelHandle: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white font-mono"
                placeholder={form.primaryChannelType === 'whatsapp' ? '+919876543210' : '@gamersplanet20.26'}
              />
            </div>

            {form.primaryChannelType === 'custom' && (
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Custom Destination URL
                </label>
                <input
                  type="url"
                  required
                  value={form.channelUrl || ''}
                  onChange={(e) => setForm({ ...form, channelUrl: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white"
                  placeholder="https://discord.gg/yourserver or custom link"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Fallback Instagram URL (optional)
              </label>
              <input
                type="text"
                value={form.instagramUrl || ''}
                onChange={(e) => setForm({ ...form, instagramUrl: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white"
                placeholder="https://instagram.com/gamersplanet20.26"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-emerald-400 font-semibold">
                Active destination: {getChannelRedirectInfo(form).actionLabel} ({getChannelRedirectInfo(form).handleOrLabel})
              </span>
              <button
                type="button"
                onClick={() => navigateToChannel(form, { bundleTitle: 'Sample Bundle', price: 399 })}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-xs text-emerald-300 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Test Live Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Branding & Titles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Website Browser Title
            </label>
            <input
              type="text"
              value={form.siteTitle}
              onChange={(e) => setForm({ ...form, siteTitle: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Header Logo Text
            </label>
            <input
              type="text"
              value={form.logoText}
              onChange={(e) => setForm({ ...form, logoText: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white"
            />
          </div>
        </div>

        {/* Hero Section Copy */}
        <div className="space-y-4 pt-4 border-t border-white/5">
          <h4 className="text-sm font-bold text-white font-gaming uppercase tracking-wider">
            Hero Section Text & Buttons
          </h4>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Hero Main Heading
            </label>
            <input
              type="text"
              value={form.heroHeading}
              onChange={(e) => setForm({ ...form, heroHeading: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Hero Subtitle / Description
            </label>
            <textarea
              rows={2}
              value={form.heroSubtitle}
              onChange={(e) => setForm({ ...form, heroSubtitle: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Primary CTA Button Text
              </label>
              <input
                type="text"
                value={form.heroCtaText}
                onChange={(e) => setForm({ ...form, heroCtaText: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Secondary Button Text
              </label>
              <input
                type="text"
                value={form.heroSecondaryText}
                onChange={(e) => setForm({ ...form, heroSecondaryText: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Announcement Pill Banner (optional)
            </label>
            <input
              type="text"
              value={form.announcementText || ''}
              onChange={(e) => setForm({ ...form, announcementText: e.target.value })}
              placeholder="e.g. FLASH SALE: 20% off all bundles this weekend"
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white"
            />
          </div>
        </div>

        {/* Accent Color Palette */}
        <div className="pt-4 border-t border-white/5">
          <label className="block text-xs font-semibold text-slate-300 mb-2 font-gaming uppercase tracking-wider flex items-center gap-1.5">
            <Palette className="w-4 h-4 text-amber-400" />
            <span>Store Theme Accent Color</span>
          </label>
          <div className="flex flex-wrap items-center gap-3">
            {ACCENT_PRESETS.map((preset) => (
              <button
                key={preset.hex}
                type="button"
                onClick={() => setForm({ ...form, accentColor: preset.hex })}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs cursor-pointer transition-all ${
                  form.accentColor === preset.hex
                    ? 'border-white bg-white/10 text-white font-bold'
                    : 'border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ backgroundColor: preset.hex }}
                />
                <span>{preset.name}</span>
              </button>
            ))}

            <div className="flex items-center gap-2 ml-auto">
              <span className="text-xs text-slate-400">Custom Hex:</span>
              <input
                type="color"
                value={form.accentColor}
                onChange={(e) => setForm({ ...form, accentColor: e.target.value })}
                className="w-8 h-8 rounded-lg border-0 bg-transparent cursor-pointer"
              />
              <span className="text-xs font-mono text-slate-300">{form.accentColor}</span>
            </div>
          </div>
        </div>

        {/* Footer & Support */}
        <div className="space-y-4 pt-4 border-t border-white/5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Footer Copyright & Legal Disclaimer
            </label>
            <input
              type="text"
              value={form.footerText}
              onChange={(e) => setForm({ ...form, footerText: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Support Note
            </label>
            <input
              type="text"
              value={form.supportNote}
              onChange={(e) => setForm({ ...form, supportNote: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="pt-6 border-t border-white/10 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-8 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm flex items-center gap-2 shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer font-gaming"
          >
            {saving ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-black" />
                <span>Saving Settings...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4 text-black" />
                <span>Save Website Settings</span>
              </>
            )}
          </button>
        </div>

      </form>
    </div>
  );
};
