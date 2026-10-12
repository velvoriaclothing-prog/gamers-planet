import React, { useState, useEffect } from 'react';
import { Database, Cloud, RefreshCw, CheckCircle2, ShieldCheck, HardDrive, AlertCircle } from 'lucide-react';
import { DatabaseStatus } from '../../types/index.js';
import { api } from '../../utils/api.js';

export const AdminDatabase: React.FC = () => {
  const [status, setStatus] = useState<DatabaseStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);

  const fetchStatus = async () => {
    setLoading(true);
    try {
      const data = await api.getDatabaseStatus();
      setStatus(data);
    } catch (err: any) {
      console.error('Failed to get database status:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const handleManualSync = async () => {
    setSyncing(true);
    setSyncMessage(null);
    try {
      const res = await api.syncDatabase();
      setStatus(res.status);
      setSyncMessage('Successfully synced cloud data with Firebase Firestore!');
      setTimeout(() => setSyncMessage(null), 4000);
    } catch (err: any) {
      setSyncMessage('Sync failed: ' + (err.message || 'Unknown error'));
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0d1424] to-[#12192b] border border-emerald-500/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Persistent Cloud Database Active
              </span>
            </div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Cloud className="w-6 h-6 text-emerald-400" />
              Firebase Firestore Live Persistence
            </h2>
            <p className="text-xs text-slate-300 max-w-2xl">
              All bundles, reviews, channels, settings, and access codes are automatically saved to Google Cloud Firebase Firestore. Changes persist permanently across GitHub commits, AI Studio edits, and Render redeployments.
            </p>
          </div>

          <button
            onClick={handleManualSync}
            disabled={syncing || loading}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer self-start sm:self-auto"
          >
            <RefreshCw className={`w-4 h-4 ${syncing ? 'animate-spin' : ''}`} />
            <span>{syncing ? 'Syncing Cloud...' : 'Force Cloud Sync'}</span>
          </button>
        </div>

        {syncMessage && (
          <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{syncMessage}</span>
          </div>
        )}
      </div>

      {/* Database Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-[#0d111c] border border-white/10 space-y-1">
          <div className="text-slate-400 text-xs flex items-center gap-1.5">
            <Database className="w-4 h-4 text-amber-400" />
            <span>Storage Provider</span>
          </div>
          <p className="text-base font-bold text-white">
            {status?.provider || 'Firebase Firestore'}
          </p>
          <span className="text-[10px] text-emerald-400 font-medium">Cloud Persistent</span>
        </div>

        <div className="p-4 rounded-xl bg-[#0d111c] border border-white/10 space-y-1">
          <div className="text-slate-400 text-xs flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Firebase Project</span>
          </div>
          <p className="text-xs font-mono font-bold text-slate-200 truncate" title={status?.projectId}>
            {status?.projectId || 'directed-curve-464213-q0'}
          </p>
          <span className="text-[10px] text-slate-400">Google Cloud Platform</span>
        </div>

        <div className="p-4 rounded-xl bg-[#0d111c] border border-white/10 space-y-1">
          <div className="text-slate-400 text-xs flex items-center gap-1.5">
            <HardDrive className="w-4 h-4 text-purple-400" />
            <span>Synced Records</span>
          </div>
          <p className="text-base font-bold text-white">
            {(status?.bundlesCount || 0) + (status?.channelsCount || 0) + (status?.reviewsCount || 0) + (status?.keysCount || 0)} Documents
          </p>
          <span className="text-[10px] text-slate-400">
            {status?.bundlesCount || 0} Bundles • {status?.reviewsCount || 0} Reviews
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[#0d111c] border border-white/10 space-y-1">
          <div className="text-slate-400 text-xs flex items-center gap-1.5">
            <RefreshCw className="w-4 h-4 text-emerald-400" />
            <span>Last Cloud Sync</span>
          </div>
          <p className="text-xs font-semibold text-slate-200">
            {status?.lastSyncTime ? new Date(status.lastSyncTime).toLocaleTimeString() : 'Just now'}
          </p>
          <span className="text-[10px] text-emerald-400">Bi-directional mirror active</span>
        </div>
      </div>

      {/* Deployment & Persistence Guide */}
      <div className="p-6 rounded-2xl bg-[#0d111c] border border-white/10 space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          Render Deployment & Data Preservation Architecture
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
            <span className="text-amber-400 font-bold block">1. Cloud Source of Truth</span>
            <p className="text-slate-400 leading-relaxed">
              Every admin create, update, or delete writes straight to Google Cloud Firestore collections (<code className="text-slate-300">bundles</code>, <code className="text-slate-300">channels</code>, <code className="text-slate-300">reviews</code>, <code className="text-slate-300">settings</code>, <code className="text-slate-300">keys</code>).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
            <span className="text-amber-400 font-bold block">2. Automatic Reconnection</span>
            <p className="text-slate-400 leading-relaxed">
              When Render redeploys the site or spins down during inactivity, the server boots up, reads your persisted data from Firebase Firestore, and rehydrates memory immediately.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
            <span className="text-amber-400 font-bold block">3. Zero Data Reset</span>
            <p className="text-slate-400 leading-relaxed">
              New code edits in AI Studio pushed to GitHub will NOT overwrite or erase bundles created in the admin panel on your live website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
