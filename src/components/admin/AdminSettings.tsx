import React, { useState } from 'react';
import { Save, Instagram, Palette, CheckCircle2, Loader2, ExternalLink } from 'lucide-react';
import { SiteSettings } from '../../types/index.js';
import { api, openInstagram } from '../../utils/api.js';

interface AdminSettingsProps {
  settings: SiteSettings;
  onRefresh: () => void;
}

export const AdminSettings: React.FC<AdminSettingsProps> = ({ settings, onRefresh }) => {
  const [form, setForm] = useState<SiteSettings>({ ...settings });
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
        text: 'Website settings saved! Public store updated immediately.'
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
          Control website branding, typography, Instagram contact destination, and hero copy without touching code.
        </p>
      </div>

      {statusMessage && (
        <div
          className={`p-4 rounded-xl text-xs sm:text-sm flex items-center justify-between ${
            statusMessage.type === 'success'
              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
              : 'bg-red-500/10 border border-red-500/30 text-red-300'
          }`}
        >
          <span>{statusMessage.text}</span>
          <button onClick={() => setStatusMessage(null)}>✕</button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Instagram destination */}
        <div className="glass-card p-6 rounded-2xl border border-amber-500/20 bg-amber-500/[0.02]">
          <div className="flex items-center gap-2 mb-2 text-amber-400 font-bold font-gaming text-sm uppercase">
            <Instagram className="w-4 h-4" />
            <span>Instagram Buy Now Destination *</span>
          </div>
          <p className="text-xs text-slate-400 mb-4">
            Every "Buy Now" button across the website opens this Instagram URL. Make sure it points to your active profile or DM link.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="text"
              required
              value={form.instagramUrl}
              onChange={(e) => setForm({ ...form, instagramUrl: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white"
              placeholder="https://instagram.com/your_profile"
            />
            <button
              type="button"
              onClick={() => openInstagram(form.instagramUrl)}
              className="shrink-0 px-4 py-2.5 rounded-xl glass-panel text-xs text-amber-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Test Link</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
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
