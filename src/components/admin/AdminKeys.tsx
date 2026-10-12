import React, { useState, useEffect } from 'react';
import { Key, Plus, RefreshCw, CheckCircle, Clock, XCircle, Trash2, Search, Filter } from 'lucide-react';
import { Bundle, GameKey, KeyStatus } from '../../types/index.js';
import { api } from '../../utils/api.js';

interface AdminKeysProps {
  bundles: Bundle[];
}

export const AdminKeys: React.FC<AdminKeysProps> = ({ bundles }) => {
  const [keys, setKeys] = useState<GameKey[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBundleId, setSelectedBundleId] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateModalOpen, setGenerateModalOpen] = useState(false);

  // Modal form
  const [genBundleId, setGenBundleId] = useState<string>(bundles[0]?.id || '');
  const [genCount, setGenCount] = useState<number>(5);
  const [genPrefix, setGenPrefix] = useState<string>('VAULT');

  const fetchKeys = async () => {
    setLoading(true);
    try {
      const data = await api.getKeys();
      setKeys(data);
    } catch (err) {
      console.error('Failed to load keys:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKeys();
  }, []);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!genBundleId) return;
    setIsGenerating(true);
    try {
      const selectedBundle = bundles.find(b => b.id === genBundleId);
      await api.batchGenerateKeys(
        genBundleId,
        selectedBundle?.title || 'Vault Bundle',
        genCount,
        genPrefix
      );
      setGenerateModalOpen(false);
      await fetchKeys();
    } catch (err) {
      console.error('Failed to generate keys:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleStatusChange = async (keyId: string, newStatus: KeyStatus) => {
    try {
      await api.updateKey(keyId, {
        status: newStatus,
        usedAt: newStatus === 'used' ? new Date().toISOString() : undefined
      });
      setKeys(prev => prev.map(k => (k.id === keyId ? { ...k, status: newStatus } : k)));
    } catch (err) {
      console.error('Failed to update key status:', err);
    }
  };

  const handleDelete = async (keyId: string) => {
    if (!window.confirm('Delete this key code permanently?')) return;
    try {
      await api.deleteKey(keyId);
      setKeys(prev => prev.filter(k => k.id !== keyId));
    } catch (err) {
      console.error('Failed to delete key:', err);
    }
  };

  const filteredKeys = keys.filter(k => {
    if (selectedBundleId !== 'all' && k.bundleId !== selectedBundleId) return false;
    if (statusFilter !== 'all' && k.status !== statusFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const codeMatch = k.code.toLowerCase().includes(q);
      const titleMatch = (k.bundleTitle || '').toLowerCase().includes(q);
      const noteMatch = (k.notes || '').toLowerCase().includes(q);
      if (!codeMatch && !titleMatch && !noteMatch) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#0d111c] border border-white/10">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Key className="w-5 h-5 text-amber-400" />
            Digital Game Keys & Access Codes
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Generate and manage persistent activation tokens stored securely in Firebase Firestore.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchKeys}
            disabled={loading}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 transition-colors cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>

          <button
            onClick={() => setGenerateModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xs font-bold transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Generate Keys</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search key code..."
            className="w-full bg-[#0d111c] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
          />
        </div>

        <div>
          <select
            value={selectedBundleId}
            onChange={e => setSelectedBundleId(e.target.value)}
            className="w-full bg-[#0d111c] border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
          >
            <option value="all">All Bundles ({bundles.length})</option>
            {bundles.map(b => (
              <option key={b.id} value={b.id}>
                {b.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="w-full bg-[#0d111c] border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
          >
            <option value="all">All Statuses</option>
            <option value="active">Active (Unused)</option>
            <option value="used">Used / Redeemed</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Keys List */}
      <div className="bg-[#0d111c] border border-white/10 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-slate-400 flex items-center justify-center gap-2">
            <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
            <span>Loading cloud keys...</span>
          </div>
        ) : filteredKeys.length === 0 ? (
          <div className="py-16 text-center text-slate-400 space-y-3">
            <Key className="w-8 h-8 text-slate-600 mx-auto" />
            <p className="text-sm font-medium">No digital keys found</p>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Generate keys for your bundles. They are saved in Firebase Firestore and persist across all Render deployments.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {filteredKeys.map(k => (
              <div key={k.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white/[0.02]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-sm font-bold text-amber-400 tracking-wider bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                      {k.code}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        k.status === 'active'
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                          : k.status === 'used'
                          ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                          : 'bg-slate-500/15 text-slate-400 border border-slate-500/30'
                      }`}
                    >
                      {k.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium">{k.bundleTitle || 'Bundle'}</p>
                  <p className="text-[10px] text-slate-500">
                    Created {new Date(k.createdAt).toLocaleDateString()}
                    {k.usedAt && ` • Redeemed ${new Date(k.usedAt).toLocaleDateString()}`}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <select
                    value={k.status}
                    onChange={e => handleStatusChange(k.id, e.target.value as KeyStatus)}
                    className="bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-slate-300 focus:outline-none focus:border-amber-500"
                  >
                    <option value="active">Active</option>
                    <option value="used">Used</option>
                    <option value="inactive">Inactive</option>
                  </select>

                  <button
                    onClick={() => handleDelete(k.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                    title="Delete Key"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Generate Modal */}
      {generateModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#11141f] border border-white/15 rounded-2xl max-w-md w-full p-6 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Key className="w-5 h-5 text-amber-400" />
              Generate Keys for Bundle
            </h3>

            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">Select Target Bundle</label>
                <select
                  value={genBundleId}
                  onChange={e => setGenBundleId(e.target.value)}
                  className="w-full bg-[#0d1017] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                >
                  {bundles.map(b => (
                    <option key={b.id} value={b.id}>
                      {b.title} (₹{b.price})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">Key Prefix</label>
                <input
                  type="text"
                  value={genPrefix}
                  onChange={e => setGenPrefix(e.target.value.toUpperCase())}
                  placeholder="e.g. VAULT, STEAM, NEXUS"
                  className="w-full bg-[#0d1017] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">Quantity to Generate</label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={genCount}
                  onChange={e => setGenCount(parseInt(e.target.value, 10) || 5)}
                  className="w-full bg-[#0d1017] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setGenerateModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-all cursor-pointer"
                >
                  {isGenerating ? 'Generating...' : `Generate ${genCount} Keys`}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
