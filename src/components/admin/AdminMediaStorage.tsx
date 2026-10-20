import React, { useState, useEffect } from 'react';
import { 
  GitBranch, 
  UploadCloud, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  HardDrive, 
  ExternalLink, 
  Eye, 
  EyeOff, 
  Copy, 
  Check, 
  Film, 
  Image as ImageIcon, 
  Search, 
  Filter, 
  ShieldCheck, 
  Folder,
  Layers,
  Sparkles,
  Loader2
} from 'lucide-react';
import { SiteSettings } from '../../types/index.js';
import { api } from '../../utils/api.js';
import { MediaUploadInput } from './MediaUploadInput.js';

interface AdminMediaStorageProps {
  settings: SiteSettings;
  onRefresh: () => void;
}

interface MediaItem {
  filename: string;
  category: string;
  relativePath: string;
  localUrl: string;
  permanentUrl: string;
  size: number;
  mtime: string;
  isVideo: boolean;
}

export const AdminMediaStorage: React.FC<AdminMediaStorageProps> = ({ settings, onRefresh }) => {
  // GitHub config state
  const [form, setForm] = useState<SiteSettings>({
    ...settings,
    githubRepo: settings.githubRepo || '',
    githubToken: settings.githubToken || '',
    githubBranch: settings.githubBranch || 'main',
    githubFolder: settings.githubFolder || 'uploads',
    githubAutoSync: settings.githubAutoSync !== false
  });

  const [savingSettings, setSavingSettings] = useState(false);
  const [showToken, setShowToken] = useState(false);
  const [testResult, setTestResult] = useState<{
    success: boolean;
    message: string;
    repoName?: string;
    isPrivate?: boolean;
    defaultBranch?: string;
  } | null>(null);
  const [testing, setTesting] = useState(false);

  const [syncingAll, setSyncingAll] = useState(false);
  const [syncResult, setSyncResult] = useState<{
    success: boolean;
    syncedCount: number;
    totalFound: number;
    message: string;
  } | null>(null);

  // Quick Direct Upload State
  const [uploadedUrl, setUploadedUrl] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<'bundles' | 'reviews' | 'channels' | 'branding' | 'media'>('bundles');
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  // Files library state
  const [mediaFiles, setMediaFiles] = useState<MediaItem[]>([]);
  const [loadingFiles, setLoadingFiles] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const loadMediaFiles = async () => {
    setLoadingFiles(true);
    try {
      const res = await api.listMedia();
      if (res.success && Array.isArray(res.files)) {
        setMediaFiles(res.files);
      }
    } catch (err) {
      console.error('Failed to load media list:', err);
    } finally {
      setLoadingFiles(false);
    }
  };

  useEffect(() => {
    loadMediaFiles();
  }, []);

  const handleSaveGitHubConfig = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSavingSettings(true);
    try {
      await api.updateSettings(form);
      onRefresh();
    } catch (err: any) {
      console.error('Failed to save settings:', err);
    } finally {
      setSavingSettings(false);
    }
  };

  const handleTestConnection = async () => {
    if (!form.githubRepo || !form.githubToken) {
      setTestResult({
        success: false,
        message: 'Please provide both GitHub repository (owner/repo) and Personal Access Token.'
      });
      return;
    }

    setTesting(true);
    setTestResult(null);

    try {
      const res = await api.testGitHubConnection({
        token: form.githubToken.trim(),
        repo: form.githubRepo.trim(),
        branch: form.githubBranch?.trim() || 'main'
      });

      setTestResult({
        success: Boolean(res.connected),
        message: res.message || (res.connected ? 'Connected to GitHub successfully!' : 'Connection test failed'),
        repoName: res.repo,
        isPrivate: (res as any).isPrivate,
        defaultBranch: res.branch
      });
    } catch (err: any) {
      setTestResult({
        success: false,
        message: err.message || 'GitHub connection test failed'
      });
    } finally {
      setTesting(false);
    }
  };

  const handleSyncAll = async () => {
    setSyncingAll(true);
    setSyncResult(null);

    try {
      // Ensure settings saved first
      await api.updateSettings(form);
      const res = await api.syncAllToGitHub();
      setSyncResult({
        success: res.success,
        syncedCount: res.syncedCount,
        totalFound: res.totalFound,
        message: res.success
          ? `Committed & backed up ${res.syncedCount} of ${res.totalFound} media files to GitHub repository!`
          : `Sync completed with errors: ${res.errors.join(', ')}`
      });
      // Refresh list
      loadMediaFiles();
    } catch (err: any) {
      setSyncResult({
        success: false,
        syncedCount: 0,
        totalFound: 0,
        message: err.message || 'Batch sync failed'
      });
    } finally {
      setSyncingAll(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedUrl(text);
    setTimeout(() => setCopiedUrl(null), 3000);
  };

  const filteredFiles = mediaFiles.filter((item) => {
    if (categoryFilter !== 'all' && item.category !== categoryFilter) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return item.filename.toLowerCase().includes(q) || item.relativePath.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0c1224] via-[#0f172a] to-[#131d36] border border-sky-500/30 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 font-gaming">
                Permanent Media Storage Active
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white font-gaming tracking-wide flex items-center gap-2.5">
              <GitBranch className="w-6 h-6 text-sky-400" />
              <span>DIRECT UPLOAD & GITHUB CLOUD BACKUP</span>
            </h2>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Upload images and gameplay videos directly from the admin panel without manual image URLs. Files are stored locally and committed permanently to your GitHub repository, surviving redeployments and server restarts with 100% uptime.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={loadMediaFiles}
              disabled={loadingFiles}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loadingFiles ? 'animate-spin' : ''}`} />
              <span>Refresh Vault</span>
            </button>

            <button
              onClick={handleSyncAll}
              disabled={syncingAll || !form.githubRepo || !form.githubToken}
              className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-extrabold text-xs font-gaming flex items-center gap-1.5 shadow-[0_0_20px_rgba(14,165,233,0.35)] transition-all cursor-pointer disabled:opacity-40"
            >
              {syncingAll ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-black" />
                  <span>Committing to GitHub...</span>
                </>
              ) : (
                <>
                  <UploadCloud className="w-4 h-4 text-black" />
                  <span>Sync All Files to GitHub</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Sync notification message */}
        {syncResult && (
          <div
            className={`mt-4 p-3.5 rounded-xl text-xs flex items-center gap-2.5 ${
              syncResult.success
                ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                : 'bg-amber-500/15 border border-amber-500/30 text-amber-300'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-medium">{syncResult.message}</span>
          </div>
        )}
      </div>

      {/* Grid: Direct Upload Box + GitHub Repository Configuration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Card 1: Direct File Uploader (Images & Videos) */}
        <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <UploadCloud className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-gaming uppercase tracking-wide">
                    Direct Media Upload
                  </h3>
                  <span className="text-[11px] text-slate-400">
                    Upload images & gameplay videos directly from your device
                  </span>
                </div>
              </div>

              <span className="text-[10px] uppercase font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                100MB Max
              </span>
            </div>

            {/* Target Category Selector */}
            <div className="space-y-1.5 mb-4">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Folder className="w-3.5 h-3.5 text-amber-400" />
                <span>Upload Target Category</span>
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-xs">
                {(['bundles', 'reviews', 'channels', 'branding', 'media'] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl border text-center font-medium capitalize transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Universal Upload Component */}
            <MediaUploadInput
              label={`Upload Asset to ${selectedCategory}`}
              accept="image/*,video/*"
              category={selectedCategory}
              value={uploadedUrl}
              onChange={(url) => {
                setUploadedUrl(url);
                loadMediaFiles();
              }}
              placeholder="Drop file here or choose from system..."
              helpText="Supported formats: MP4, WebM, MOV, JPG, PNG, WebP, GIF, SVG. Automatically backed up to GitHub."
            />
          </div>

          {/* Copied URL alert if any */}
          {copiedUrl && (
            <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="truncate">Copied to clipboard: {copiedUrl}</span>
            </div>
          )}
        </div>

        {/* Card 2: GitHub Repository Connection Config */}
        <form onSubmit={handleSaveGitHubConfig} className="glass-card p-6 rounded-3xl border border-sky-500/30 bg-sky-500/[0.02] space-y-4">
          <div className="flex items-center justify-between pb-3 mb-1 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                <GitBranch className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white font-gaming uppercase tracking-wide">
                  GitHub Repository Setup
                </h3>
                <span className="text-[11px] text-slate-400">
                  Configure repository credentials for automatic permanent storage
                </span>
              </div>
            </div>

            <a
              href="https://github.com/settings/tokens"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-sky-300 hover:underline flex items-center gap-1"
            >
              <span>Get Token</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Test connection alert */}
          {testResult && (
            <div
              className={`p-3.5 rounded-xl text-xs flex items-start gap-2.5 ${
                testResult.success
                  ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                  : 'bg-red-500/15 border border-red-500/30 text-red-300'
              }`}
            >
              {testResult.success ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              )}
              <div className="flex-1 min-w-0">
                <div className="font-bold flex items-center gap-2">
                  <span>{testResult.success ? 'GitHub Connection Verified' : 'Connection Failed'}</span>
                  {testResult.repoName && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/40 font-mono">
                      {testResult.repoName} ({testResult.isPrivate ? 'Private' : 'Public'})
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-300 mt-0.5">{testResult.message}</p>
              </div>
              <button
                type="button"
                onClick={() => setTestResult(null)}
                className="text-slate-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>
          )}

          <div className="space-y-3 text-xs">
            {/* Repository Input */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                GitHub Repository (username/repo or URL) *
              </label>
              <input
                type="text"
                value={form.githubRepo || ''}
                onChange={(e) => setForm({ ...form, githubRepo: e.target.value })}
                placeholder="e.g. yourname/gamersplanet-media"
                className="w-full px-3.5 py-2.5 rounded-xl glass-input text-white font-mono text-xs"
              />
            </div>

            {/* Token Input with Show/Hide */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-slate-300 font-semibold">
                  Personal Access Token (classic with repo or fine-grained with contents:write) *
                </label>
                <button
                  type="button"
                  onClick={() => setShowToken(!showToken)}
                  className="text-[11px] text-slate-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
                >
                  {showToken ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                  <span>{showToken ? 'Hide' : 'Reveal'}</span>
                </button>
              </div>
              <input
                type={showToken ? 'text' : 'password'}
                value={form.githubToken || ''}
                onChange={(e) => setForm({ ...form, githubToken: e.target.value })}
                placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
                className="w-full px-3.5 py-2.5 rounded-xl glass-input text-white font-mono text-xs"
              />
            </div>

            {/* Branch and Folder */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Branch
                </label>
                <input
                  type="text"
                  value={form.githubBranch || 'main'}
                  onChange={(e) => setForm({ ...form, githubBranch: e.target.value })}
                  placeholder="main"
                  className="w-full px-3 py-2 rounded-xl glass-input text-white font-mono text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Folder Path
                </label>
                <input
                  type="text"
                  value={form.githubFolder || 'uploads'}
                  onChange={(e) => setForm({ ...form, githubFolder: e.target.value })}
                  placeholder="uploads"
                  className="w-full px-3 py-2 rounded-xl glass-input text-white font-mono text-xs"
                />
              </div>
            </div>

            {/* Auto-commit checkbox */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="mediaAutoSyncCheck"
                checked={form.githubAutoSync !== false}
                onChange={(e) => setForm({ ...form, githubAutoSync: e.target.checked })}
                className="w-4 h-4 rounded text-sky-500 bg-black border-white/20"
              />
              <label htmlFor="mediaAutoSyncCheck" className="text-slate-300 cursor-pointer">
                Automatically commit newly uploaded media directly to GitHub repository
              </label>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between gap-3 border-t border-white/10">
            <button
              type="button"
              onClick={handleTestConnection}
              disabled={testing}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${testing ? 'animate-spin text-sky-400' : ''}`} />
              <span>{testing ? 'Testing...' : 'Test Connection'}</span>
            </button>

            <button
              type="submit"
              disabled={savingSettings}
              className="px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-extrabold text-xs font-gaming flex items-center gap-1.5 transition-all cursor-pointer"
            >
              {savingSettings ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-black" />
                  <span>Saving...</span>
                </>
              ) : (
                <span>Save GitHub Credentials</span>
              )}
            </button>
          </div>
        </form>

      </div>

      {/* Media Vault & Uploaded Files Library */}
      <div className="space-y-4 pt-4 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-white font-gaming tracking-wide flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-amber-400" />
              <span>VAULT MEDIA ASSETS ({filteredFiles.length} of {mediaFiles.length})</span>
            </h3>
            <p className="text-xs text-slate-400">
              Browse all stored bundle covers, trailers, VIP channel thumbnails, and review screenshots.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search file name..."
                className="pl-8 pr-3 py-1.5 rounded-xl glass-input text-xs text-white placeholder-slate-500 w-40 sm:w-52"
              />
            </div>

            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
              {(['all', 'bundles', 'reviews', 'channels', 'branding', 'media'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-2.5 py-1 rounded-lg capitalize transition-colors cursor-pointer ${
                    categoryFilter === cat
                      ? 'bg-amber-500 text-black font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Media Grid */}
        {loadingFiles ? (
          <div className="p-12 text-center text-slate-400 flex flex-col items-center justify-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-amber-400" />
            <span className="text-xs">Loading media vault library...</span>
          </div>
        ) : filteredFiles.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-white/[0.02] border border-white/5 text-slate-400 space-y-2">
            <Folder className="w-8 h-8 mx-auto text-slate-600" />
            <p className="text-sm font-semibold text-slate-300">No media assets found in this category</p>
            <p className="text-xs text-slate-500">
              Use the uploader above or upload directly from bundle & channel edit modals.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredFiles.map((file) => {
              const displayUrl = file.permanentUrl || file.localUrl;
              const isGitHub = displayUrl.includes('raw.githubusercontent.com') || displayUrl.includes('cdn.jsdelivr.net');

              return (
                <div
                  key={file.relativePath}
                  className="group relative rounded-2xl overflow-hidden bg-[#0a0e1c] border border-white/10 hover:border-amber-400/50 transition-all p-3 space-y-2.5 shadow-lg flex flex-col justify-between"
                >
                  {/* Media Thumbnail / Video Box */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black border border-white/5 flex items-center justify-center">
                    {file.isVideo ? (
                      <video
                        src={file.localUrl}
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={file.localUrl}
                        alt={file.filename}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg';
                        }}
                      />
                    )}

                    {/* Media Type & Category Badges */}
                    <div className="absolute top-2 left-2 flex items-center gap-1">
                      <span className="px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md text-[9px] font-bold text-amber-400 border border-white/10 flex items-center gap-1">
                        {file.isVideo ? <Film className="w-2.5 h-2.5" /> : <ImageIcon className="w-2.5 h-2.5" />}
                        <span>{file.isVideo ? 'VIDEO' : 'IMAGE'}</span>
                      </span>

                      <span className="px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md text-[9px] font-medium text-slate-300 uppercase border border-white/10">
                        {file.category}
                      </span>
                    </div>

                    {isGitHub && (
                      <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-emerald-500/80 backdrop-blur-md text-[9px] font-bold text-black flex items-center gap-0.5">
                        <GitBranch className="w-2.5 h-2.5" />
                        <span>GitHub</span>
                      </div>
                    )}
                  </div>

                  {/* File Info */}
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-white truncate" title={file.filename}>
                      {file.filename}
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span>{formatFileSize(file.size)}</span>
                      <span>
                        {new Date(file.mtime).toLocaleDateString('en-IN', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-1">
                    <button
                      type="button"
                      onClick={() => handleCopy(file.permanentUrl)}
                      className="flex-1 py-1 px-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                      title="Copy Permanent CDN / GitHub URL"
                    >
                      {copiedUrl === file.permanentUrl ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-slate-400" />
                          <span>Copy URL</span>
                        </>
                      )}
                    </button>

                    <a
                      href={file.localUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-[11px] flex items-center justify-center transition-colors"
                      title="Open in new tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
};
