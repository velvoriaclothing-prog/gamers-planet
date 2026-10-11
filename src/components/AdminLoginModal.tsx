import React, { useState, useEffect } from 'react';
import { ShieldAlert, Lock, Eye, EyeOff, Loader2, X, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { api, setAuthToken } from '../utils/api.js';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [code, setCode] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [lockoutSeconds, setLockoutSeconds] = useState<number>(0);
  const [remainingAttempts, setRemainingAttempts] = useState<number | null>(null);

  // Handle countdown if locked out
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (lockoutSeconds > 0) {
      timer = setInterval(() => {
        setLockoutSeconds((prev) => (prev > 1 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [lockoutSeconds]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim() || lockoutSeconds > 0) return;

    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await api.login(code);
      if (res.token) {
        setAuthToken(res.token);
        setCode('');
        onLoginSuccess();
      }
    } catch (err: any) {
      const data = err.data || {};
      if (data.lockout && data.remainingSeconds) {
        setLockoutSeconds(data.remainingSeconds);
      }
      if (data.remainingAttempts !== undefined) {
        setRemainingAttempts(data.remainingAttempts);
      }
      setErrorMsg(err.message || 'Authentication failed. Please verify access code.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 z-10 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
        
        {/* Close button */}
        <button
          onClick={onClose}
          type="button"
          title="Close"
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto mb-3 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <Lock className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-black text-white font-gaming tracking-wide">
            ADMIN VAULT ACCESS
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Server-protected control center for gaming bundles, customer proof, and settings.
          </p>
        </div>

        {/* Error / Lockout Alert */}
        {errorMsg && (
          <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <span>{errorMsg}</span>
              {lockoutSeconds > 0 && (
                <div className="font-bold text-red-200 mt-1">
                  Lockout active: {Math.floor(lockoutSeconds / 60)}m {lockoutSeconds % 60}s remaining
                </div>
              )}
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-gaming">
              Security Access Code
            </label>
            <div className="relative">
              <input
                type={showCode ? 'text' : 'password'}
                value={code}
                disabled={lockoutSeconds > 0 || loading}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter admin code..."
                autoFocus
                className="w-full px-4 py-3 rounded-xl glass-input text-sm text-white placeholder-slate-500 pr-11 disabled:opacity-50"
              />
              <button
                type="button"
                onClick={() => setShowCode(!showCode)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                {showCode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {remainingAttempts !== null && lockoutSeconds === 0 && (
              <div className="flex items-center justify-end mt-2 text-[11px] text-amber-400/90 font-medium">
                <span>{remainingAttempts} attempt(s) remaining</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || lockoutSeconds > 0 || !code.trim()}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-50 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all cursor-pointer font-gaming"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-black" />
                <span>Verifying Credentials...</span>
              </>
            ) : lockoutSeconds > 0 ? (
              <span>Locked ({lockoutSeconds}s)</span>
            ) : (
              <span>Unlock Admin Vault</span>
            )}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-white/5 text-center">
          <p className="text-[11px] text-slate-500">
            Protected with server-side brute-force lockout, rate limiting, and session verification.
          </p>
        </div>

      </div>
    </div>
  );
};
