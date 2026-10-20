import React, { useState } from 'react';
import { 
  Save, 
  Instagram, 
  Send, 
  PhoneCall, 
  Globe, 
  Palette, 
  CheckCircle2, 
  Loader2, 
  ExternalLink,
  GitBranch,
  Eye,
  EyeOff,
  RefreshCw,
  ShieldCheck,
  AlertCircle,
  HardDrive,
  UploadCloud
} from 'lucide-react';
import { SiteSettings, PrimaryChannelType } from '../../types/index.js';
import { api } from '../../utils/api.js';
import { getChannelRedirectInfo, navigateToChannel } from '../../utils/channelRedirect.js';
import { MediaUploadInput } from './MediaUploadInput.js';

interface AdminSettingsProps {
  settings: SiteSettings;
  onRefresh: () => void;
}

export const AdminSettings: React.FC<AdminSettingsProps> = ({ settings, onRefresh }) => {
  const [form, setForm] = useState<SiteSettings>({
    ...settings,
    primaryChannelType: settings.primaryChannelType || 'instagram',
    channelHandle: settings.channelHandle || '@gamersplanet20.26',
    channelUrl: settings.channelUrl || settings.instagramUrl || 'https://instagram.com/gamersplanet20.26',
    githubRepo: settings.githubRepo || '',
    githubToken: settings.githubToken || '',
    githubBranch: settings.githubBranch || 'main',
    githubFolder: settings.githubFolder || 'uploads',
    githubAutoSync: settings.githubAutoSync !== false
  });
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // GitHub storage state
  const [showGithubToken, setShowGithubToken] = useState(false);
  const [testingGithub, setTestingGithub] = useState(false);
  const [githubTestResult, setGithubTestResult] = useState<{
    success: boolean;
    message: string;
    repoName?: string;
    isPrivate?: boolean;
    defaultBranch?: string;
  } | null>(null);

  const [syncingGithub, setSyncingGithub] = useState(false);
  const [githubSyncResult, setGithubSyncResult] = useState<{
    success: boolean;
    syncedCount: number;
    totalFound: number;
    message: string;
  } | null>(null);

  const handleTestGitHub = async () => {
    if (!form.githubRepo || !form.githubToken) {
      setGithubTestResult({
        success: false,
        message: 'Please provide both GitHub Repository (e.g. username/my-store-media) and Personal Access Token.'
      });
      return;
    }

    setTestingGithub(true);
    setGithubTestResult(null);

    try {
      const res = await api.testGitHubConnection({
        token: form.githubToken.trim(),
        repo: form.githubRepo.trim(),
        branch: form.githubBranch?.trim() || 'main'
      });
      const isSuccess = res.success !== undefined ? Boolean(res.success) : Boolean(res.connected);
      setGithubTestResult({
        success: isSuccess,
        message: res.message || (isSuccess ? 'Connected to GitHub successfully!' : 'Connection failed'),
        repoName: res.repo,
        isPrivate: res.isPrivate,
        defaultBranch: res.branch
      });
    } catch (err: any) {
      setGithubTestResult({
        success: false,
        message: err.message || 'GitHub connection test failed. Please check token permissions.'
      });
    } finally {
      setTestingGithub(false);
    }
  };

  const handleSyncAllToGitHub = async () => {
    setSyncingGithub(true);
    setGithubSyncResult(null);

    try {
      // First save current settings if token/repo changed
      await api.updateSettings(form);

      const res = await api.syncAllToGitHub();
      setGithubSyncResult({
        success: res.success,
        syncedCount: res.syncedCount,
        totalFound: res.totalFound,
        message: res.success 
          ? `Successfully synced and committed ${res.syncedCount} of ${res.totalFound} media files to GitHub permanently!` 
          : `Sync completed with errors: ${res.errors.join(', ')}`
      });
    } catch (err: any) {
      setGithubSyncResult({
        success: false,
        syncedCount: 0,
        totalFound: 0,
        message: err.message || 'Batch sync failed'
      });
    } finally {
      setSyncingGithub(false);
    }
  };

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

        {/* Branding, Logo & Hero Media */}
        <div className="space-y-4 pt-4 border-t border-white/5">
          <h4 className="text-sm font-bold text-white font-gaming uppercase tracking-wider flex items-center gap-2">
            <Palette className="w-4 h-4 text-amber-400" />
            <span>Store Branding & Visual Assets</span>
          </h4>

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <MediaUploadInput
              label="Store Logo Image / Icon (Optional)"
              accept="image/*"
              value={form.logoImageUrl || ''}
              onChange={(url) => setForm({ ...form, logoImageUrl: url })}
              category="branding"
              placeholder="Upload store logo PNG/SVG or enter URL..."
              helpText="Custom store logo displayed in Navbar and Footer. Saved permanently in GitHub."
            />

            <MediaUploadInput
              label="Hero Background Media / Video Banner (Optional)"
              accept="image/*,video/*"
              value={form.heroBackgroundMedia || ''}
              onChange={(url) => setForm({ ...form, heroBackgroundMedia: url })}
              category="branding"
              placeholder="Upload background video MP4/WebM or image..."
              helpText="Cinematic background for the Hero showcase. Saved permanently in GitHub."
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

        {/* GitHub Permanent Cloud Storage Card */}
        <div className="glass-card p-6 rounded-2xl border border-sky-500/30 bg-sky-500/[0.03] space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                <GitBranch className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-gaming tracking-wider uppercase">
                  PERMANENT MEDIA CLOUD STORAGE (GITHUB INTEGRATION)
                </h4>
                <p className="text-xs text-slate-400">
                  Directly upload images & videos from admin and save permanently into your GitHub repository.
                </p>
              </div>
            </div>

            {form.githubRepo && form.githubToken && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold self-start sm:self-auto">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Permanent GitHub Vault Active</span>
              </span>
            )}
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 space-y-1.5 leading-relaxed">
            <p>
              💡 <strong className="text-sky-300">How Permanent Save Works:</strong> Whenever you upload bundle covers, trailers, VIP channel thumbnails, or review screenshots, the files are committed to your GitHub repository via API. They are served via global edge CDN and <strong className="text-emerald-400">never get deleted</strong>, even during host restarts or code deployments.
            </p>
          </div>

          {/* Test & Sync Alerts */}
          {githubTestResult && (
            <div
              className={`p-4 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 ${
                githubTestResult.success
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                  : 'bg-red-500/10 border border-red-500/30 text-red-300'
              }`}
            >
              {githubTestResult.success ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              )}
              <div className="flex-1">
                <span className="font-bold block">
                  {githubTestResult.success ? 'Connection Succeeded' : 'Connection Failed'}
                </span>
                <span className="text-xs text-slate-300">{githubTestResult.message}</span>
              </div>
              <button
                type="button"
                onClick={() => setGithubTestResult(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>
          )}

          {githubSyncResult && (
            <div
              className={`p-4 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 ${
                githubSyncResult.success
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                  : 'bg-amber-500/10 border border-amber-500/30 text-amber-300'
              }`}
            >
              <HardDrive className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="font-bold block">
                  Batch Sync Result ({githubSyncResult.syncedCount}/{githubSyncResult.totalFound} media files)
                </span>
                <span className="text-xs text-slate-300">{githubSyncResult.message}</span>
              </div>
              <button
                type="button"
                onClick={() => setGithubSyncResult(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* GitHub Repository */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                GitHub Repository (username/repository) *
              </label>
              <input
                type="text"
                value={form.githubRepo || ''}
                onChange={(e) => setForm({ ...form, githubRepo: e.target.value })}
                placeholder="e.g. yourname/gamersplanet-media"
                className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white font-mono"
              />
              <span className="text-[11px] text-slate-500 block mt-1">
                The GitHub repo where media files and videos will be saved permanently.
              </span>
            </div>

            {/* GitHub Personal Access Token */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-slate-300">
                  GitHub Personal Access Token (classic or fine-grained) *
                </label>
                <button
                  type="button"
                  onClick={() => setShowGithubToken(!showGithubToken)}
                  className="text-[11px] text-slate-400 hover:text-amber-400 flex items-center gap-1 cursor-pointer"
                >
                  {showGithubToken ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                  <span>{showGithubToken ? 'Hide' : 'Reveal'}</span>
                </button>
              </div>
              <input
                type={showGithubToken ? 'text' : 'password'}
                value={form.githubToken || ''}
                onChange={(e) => setForm({ ...form, githubToken: e.target.value })}
                placeholder="ghp_xxxxxxxxxxxxxxxxxxxx or github_pat_..."
                className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white font-mono"
              />
              <span className="text-[11px] text-slate-500 block mt-1">
                Requires repository write permission (contents:read & contents:write or repo scope).
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Target Branch
              </label>
              <input
                type="text"
                value={form.githubBranch || 'main'}
                onChange={(e) => setForm({ ...form, githubBranch: e.target.value })}
                placeholder="main"
                className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Storage Folder inside Repository
              </label>
              <input
                type="text"
                value={form.githubFolder || 'uploads'}
                onChange={(e) => setForm({ ...form, githubFolder: e.target.value })}
                placeholder="uploads"
                className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white font-mono"
              />
            </div>
          </div>

          {/* Auto-commit checkbox */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="githubAutoSyncCheck"
              checked={form.githubAutoSync !== false}
              onChange={(e) => setForm({ ...form, githubAutoSync: e.target.checked })}
              className="w-4 h-4 rounded text-sky-500 bg-black border-white/20"
            />
            <label htmlFor="githubAutoSyncCheck" className="text-xs text-slate-200 cursor-pointer">
              Automatically commit every new image and video uploaded in admin directly to GitHub
            </label>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleTestGitHub}
              disabled={testingGithub}
              className="px-4 py-2.5 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-sky-300 text-xs font-bold font-gaming flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {testingGithub ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-sky-400" />
                  <span>Testing Connection...</span>
                </>
              ) : (
                <>
                  <RefreshCw className="w-3.5 h-3.5 text-sky-400" />
                  <span>Test GitHub Connection</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleSyncAllToGitHub}
              disabled={syncingGithub || !form.githubRepo || !form.githubToken}
              className="px-4 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs font-bold font-gaming flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-40"
            >
              {syncingGithub ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-400" />
                  <span>Syncing All Files to GitHub...</span>
                </>
              ) : (
                <>
                  <UploadCloud className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Sync All Local Media to GitHub Now</span>
                </>
              )}
            </button>

            <a
              href="https://github.com/settings/tokens"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-slate-400 hover:text-sky-300 underline inline-flex items-center gap-1 ml-auto"
            >
              <span>Generate GitHub Token</span>
              <ExternalLink className="w-3 h-3" />
            </a>
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
