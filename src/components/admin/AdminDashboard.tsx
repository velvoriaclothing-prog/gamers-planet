import React, { useState } from 'react';
import { Package, Star, MessageSquare, Settings, ShieldCheck, ArrowLeft, LogOut, ExternalLink, Shield, Send, Globe, Key, Database, Cloud, GitBranch } from 'lucide-react';
import { Bundle, ReviewScreenshot, SiteSettings, Channel } from '../../types/index.js';
import { AdminBundles } from './AdminBundles.js';
import { AdminReviews } from './AdminReviews.js';
import { AdminSettings } from './AdminSettings.js';
import { AdminSecurity } from './AdminSecurity.js';
import { AdminChannels } from './AdminChannels.js';
import { AdminKeys } from './AdminKeys.js';
import { AdminDatabase } from './AdminDatabase.js';
import { AdminMediaStorage } from './AdminMediaStorage.js';

interface AdminDashboardProps {
  bundles: Bundle[];
  reviews: ReviewScreenshot[];
  channels: Channel[];
  settings: SiteSettings;
  onRefreshAll: () => void;
  onClose: () => void;
  onLogout: () => void;
}

type TabType = 'bundles' | 'channels' | 'reviews' | 'keys' | 'media' | 'database' | 'settings' | 'security';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  bundles,
  reviews,
  channels,
  settings,
  onRefreshAll,
  onClose,
  onLogout,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('bundles');

  return (
    <div className="min-h-screen bg-[#050609] text-slate-100 flex flex-col font-sans">
      {/* Top Admin Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#090c14]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Store</span>
            </button>

            <div className="flex items-center gap-2 border-l border-white/10 pl-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <span className="text-base font-bold font-gaming text-white tracking-wide">
                  ADMIN CONTROL VAULT
                </span>
                <span className="text-[10px] text-amber-400 block font-medium">
                  {settings.siteTitle}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
            >
              <span>View Live Store</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </button>

            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-xs font-semibold text-red-300 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Admin Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-white/10 scrollbar-none">
          <button
            onClick={() => setActiveTab('bundles')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'bundles'
                ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                : 'glass-card text-slate-300 hover:text-white'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Gaming Bundles ({bundles.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('channels')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'channels'
                ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                : 'glass-card text-slate-300 hover:text-white'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Channels & Websites ({channels.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('reviews')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'reviews'
                ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                : 'glass-card text-slate-300 hover:text-white'
            }`}
          >
            <Star className="w-4 h-4" />
            <span>Text Reviews ({reviews.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('keys')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'keys'
                ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                : 'glass-card text-slate-300 hover:text-white'
            }`}
          >
            <Key className="w-4 h-4" />
            <span>Game Keys & Codes</span>
          </button>

          <button
            onClick={() => setActiveTab('media')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'media'
                ? 'bg-sky-500 text-black shadow-[0_0_20px_rgba(14,165,233,0.3)]'
                : 'glass-card text-slate-300 hover:text-white'
            }`}
          >
            <GitBranch className="w-4 h-4 text-sky-400" />
            <span className="flex items-center gap-1.5">
              <span>Media & GitHub Storage</span>
              <span className="w-2 h-2 rounded-full bg-sky-400 inline-block animate-pulse" />
            </span>
          </button>

          <button
            onClick={() => setActiveTab('database')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'database'
                ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                : 'glass-card text-slate-300 hover:text-white'
            }`}
          >
            <Database className="w-4 h-4 text-emerald-400" />
            <span className="flex items-center gap-1.5">
              <span>Cloud Database</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
            </span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'settings'
                ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                : 'glass-card text-slate-300 hover:text-white'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Website Settings & Instagram</span>
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'security'
                ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                : 'glass-card text-slate-300 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Security & Credentials</span>
          </button>
        </div>

        {/* Tab Content */}
        <main className="animate-in fade-in duration-200">
          {activeTab === 'bundles' && (
            <AdminBundles
              bundles={bundles}
              settings={settings}
              onRefresh={onRefreshAll}
            />
          )}

          {activeTab === 'channels' && (
            <AdminChannels
              channels={channels}
              onRefresh={onRefreshAll}
            />
          )}

          {activeTab === 'reviews' && (
            <AdminReviews
              reviews={reviews}
              onRefresh={onRefreshAll}
            />
          )}

          {activeTab === 'media' && (
            <AdminMediaStorage
              settings={settings}
              onRefresh={onRefreshAll}
            />
          )}

          {activeTab === 'settings' && (
            <AdminSettings
              settings={settings}
              onRefresh={onRefreshAll}
            />
          )}

          {activeTab === 'security' && (
            <AdminSecurity />
          )}
        </main>
      </div>
    </div>
  );
};
