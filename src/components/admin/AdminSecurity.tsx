import React, { useState } from 'react';
import { Lock, KeyRound, ShieldCheck, AlertTriangle, Eye, EyeOff, Loader2 } from 'lucide-react';
import { api } from '../../utils/api.js';

export const AdminSecurity: React.FC = () => {
  const [currentCode, setCurrentCode] = useState('');
  const [newCode, setNewCode] = useState('');
  const [confirmCode, setConfirmCode] = useState('');
  const [showCodes, setShowCodes] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newCode.length < 4) {
      setStatusMessage({ type: 'error', text: 'New access code must be at least 4 characters long.' });
      return;
    }
    if (newCode !== confirmCode) {
      setStatusMessage({ type: 'error', text: 'New access codes do not match.' });
      return;
    }

    setLoading(true);
    setStatusMessage(null);

    try {
      const res = await api.changeAdminCode(currentCode, newCode);
      setStatusMessage({ type: 'success', text: res.message || 'Access code changed successfully!' });
      setCurrentCode('');
      setNewCode('');
      setConfirmCode('');
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: err.message || 'Failed to update access code. Verify current code.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 max-w-2xl">
      <div className="pb-6 border-b border-white/10">
        <h3 className="text-xl font-bold text-white font-gaming">
          ADMIN SECURITY & ACCESS CREDENTIALS
        </h3>
        <p className="text-xs text-slate-400">
          Change the master access code required when tapping the website logo 5 times.
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

      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
        <KeyRound className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs text-slate-300">
          <strong className="text-white block mb-0.5">Production Deployment Recommendation:</strong>
          The initial access code <code className="text-amber-400 font-mono">1710</code> is for local development testing.
          Before deploying publicly, please update it here to a custom secure password or phrase.
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">
            Current Access Code *
          </label>
          <div className="relative">
            <input
              type={showCodes ? 'text' : 'password'}
              required
              value={currentCode}
              onChange={(e) => setCurrentCode(e.target.value)}
              placeholder="Enter current code (e.g. 1710)"
              className="w-full px-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white pr-10"
            />
            <button
              type="button"
              onClick={() => setShowCodes(!showCodes)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              {showCodes ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">
            New Access Code * (Min 4 chars)
          </label>
          <input
            type={showCodes ? 'text' : 'password'}
            required
            value={newCode}
            onChange={(e) => setNewCode(e.target.value)}
            placeholder="Enter new strong access code"
            className="w-full px-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">
            Confirm New Access Code *
          </label>
          <input
            type={showCodes ? 'text' : 'password'}
            required
            value={confirmCode}
            onChange={(e) => setConfirmCode(e.target.value)}
            placeholder="Re-enter new access code"
            className="w-full px-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white"
          />
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-md disabled:opacity-50 font-gaming"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin text-black" /> : <ShieldCheck className="w-4 h-4" />}
            <span>Update Access Code</span>
          </button>
        </div>
      </form>
    </div>
  );
};
