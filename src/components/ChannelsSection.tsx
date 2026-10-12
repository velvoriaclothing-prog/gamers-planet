import React, { useState, useEffect, useMemo } from 'react';
import { Lock, KeyRound, Unlock, Send, MessageSquare, Globe, ExternalLink, ShieldCheck, AlertTriangle, Loader2, Sparkles, LogOut, CheckCircle2, Copy, Check, Link2, ArrowUpRight } from 'lucide-react';
import { Channel, ChannelPlatform, SiteSettings } from '../types/index.js';
import { api, getChannelsToken, setChannelsToken, clearChannelsToken } from '../utils/api.js';

interface ChannelsSectionProps {
  settings: SiteSettings;
  isAdmin?: boolean;
  onOpenAdmin?: () => void;
}

// Ensure URL has https:// protocol so clicks redirect cleanly
const formatSafeUrl = (url?: string): string => {
  if (!url) return '#';
  let clean = url.trim();
  if (!clean.startsWith('http://') && !clean.startsWith('https://')) {
    clean = `https://${clean}`;
  }
  return clean;
};

// Clean display of the link without https:// for compact UI badges
const formatDisplayLink = (url?: string): string => {
  if (!url) return '';
  return url.replace(/^https?:\/\//i, '').replace(/\/$/, '');
};

export const ChannelsSection: React.FC<ChannelsSectionProps> = ({
  settings,
  isAdmin,
  onOpenAdmin,
}) => {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [channels, setChannels] = useState<Channel[]>([]);
  const [loading, setLoading] = useState(false);
  const [initialChecking, setInitialChecking] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [remainingAttempts, setRemainingAttempts] = useState<number | null>(null);
  const [lockoutSeconds, setLockoutSeconds] = useState<number>(0);
  const [selectedPlatform, setSelectedPlatform] = useState<'all' | ChannelPlatform>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyLink = (chan: Channel) => {
    const safeUrl = formatSafeUrl(chan.inviteUrl);
    navigator.clipboard.writeText(safeUrl);
    setCopiedId(chan.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Countdown timer for lockout
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (lockoutSeconds > 0) {
      timer = setInterval(() => {
        setLockoutSeconds((prev) => (prev > 1 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [lockoutSeconds]);

  // Check if session token already exists or if user is admin
  useEffect(() => {
    const checkExistingSession = async () => {
      const existingToken = getChannelsToken();
      if (existingToken || isAdmin) {
        try {
          const data = await api.getChannels();
          setChannels(data);
          setIsUnlocked(true);
        } catch {
          // Token expired or invalid
          clearChannelsToken();
          setIsUnlocked(false);
        }
      }
      setInitialChecking(false);
    };

    checkExistingSession();
  }, [isAdmin]);

  // Unlock submit handler
  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim() || lockoutSeconds > 0) return;

    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await api.unlockChannels(password);
      if (res.token) {
        setChannelsToken(res.token);
        // Fetch protected channels with the new token
        const data = await api.getChannels();
        setChannels(data);
        setIsUnlocked(true);
        setPassword('');
      }
    } catch (err: any) {
      const data = err.data || {};
      if (data.lockout && data.remainingSeconds) {
        setLockoutSeconds(data.remainingSeconds);
      }
      if (data.remainingAttempts !== undefined) {
        setRemainingAttempts(data.remainingAttempts);
      }
      setErrorMsg(err.message || 'Incorrect password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Lock handler
  const handleLock = async () => {
    await api.lockChannels();
    setIsUnlocked(false);
    setChannels([]);
  };

  const filteredChannels = useMemo(() => {
    if (selectedPlatform === 'all') return channels;
    return channels.filter((c) => c.platform === selectedPlatform);
  }, [channels, selectedPlatform]);

  if (initialChecking) {
    return (
      <section id="channels" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Loader2 className="w-8 h-8 animate-spin text-amber-500 mx-auto" />
      </section>
    );
  }

  return (
    <section id="channels" className="py-24 relative overflow-hidden bg-[#06080e]/90 border-t border-b border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-cyan-500/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-indigo-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {!isUnlocked ? (
          /* ========================================================= */
          /* 1. PASSWORD-PROTECTED LOCKED ENTRY SCREEN                  */
          /* ========================================================= */
          <div className="max-w-md mx-auto text-center">
            
            {/* Lock Icon Header */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-700/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto mb-6 shadow-[0_0_25px_rgba(245,158,11,0.25)]">
              <Lock className="w-8 h-8 text-amber-400" />
            </div>

            {/* Heading & Instructions */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-gaming tracking-wide mb-3">
              Exclusive Channels & Websites
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              Enter your password to access our exclusive Telegram channels, Discord servers, and official resource websites.
            </p>

            {/* Error & Lockout Alert */}
            {errorMsg && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm flex items-start gap-3 text-left animate-in fade-in">
                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span>{errorMsg}</span>
                  {remainingAttempts !== null && lockoutSeconds === 0 && (
                    <div className="text-amber-300 font-medium mt-1">
                      {remainingAttempts} attempt(s) remaining before temporary lockout.
                    </div>
                  )}
                  {lockoutSeconds > 0 && (
                    <div className="font-bold text-red-200 mt-1">
                      Lockout active: {Math.floor(lockoutSeconds / 60)}m {lockoutSeconds % 60}s remaining.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Password Entry Form */}
            <form onSubmit={handleUnlock} className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="mb-5 text-left">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-gaming">
                  Access Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={password}
                    disabled={loading || lockoutSeconds > 0}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter access password..."
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm text-white placeholder-slate-500 focus:outline-none"
                    autoComplete="off"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || lockoutSeconds > 0 || !password.trim()}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-50 text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all cursor-pointer font-gaming tracking-wide"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-black" />
                    <span>Verifying Access...</span>
                  </>
                ) : lockoutSeconds > 0 ? (
                  <span>Locked ({lockoutSeconds}s)</span>
                ) : (
                  <>
                    <Unlock className="w-4 h-4 text-black" />
                    <span>Unlock Access</span>
                  </>
                )}
              </button>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Encrypted Community Access</span>
              </div>
            </form>

          </div>
        ) : (
          /* ========================================================= */
          /* 2. UNLOCKED CHANNELS DIRECTORY                             */
          /* ========================================================= */
          <div>
            {/* Top Bar with Header & Platform Filter */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Access Granted</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-gaming tracking-tight">
                  EXCLUSIVE CHANNELS & WEBSITES
                </h2>
                <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                  Official community hubs, notification channels on Telegram and Discord, and verified resource websites. Click any link to join or visit directly.
                </p>
              </div>

              {/* Actions & Lock Button */}
              <div className="flex items-center gap-3">
                {isAdmin && onOpenAdmin && (
                  <button
                    onClick={onOpenAdmin}
                    className="px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Manage Channels & Websites
                  </button>
                )}

                <button
                  onClick={handleLock}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-white hover:border-red-500/40 transition-colors cursor-pointer"
                  title="Lock section and end authenticated session"
                >
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Lock Channels</span>
                </button>
              </div>
            </div>

            {/* Platform Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
              <button
                onClick={() => setSelectedPlatform('all')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedPlatform === 'all'
                    ? 'bg-amber-500 text-black shadow-md font-bold'
                    : 'glass-card text-slate-300 hover:text-white'
                }`}
              >
                All ({channels.length})
              </button>

              <button
                onClick={() => setSelectedPlatform('telegram')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedPlatform === 'telegram'
                    ? 'bg-sky-500 text-black shadow-md font-bold'
                    : 'glass-card text-slate-300 hover:text-white'
                }`}
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram ({channels.filter(c => c.platform === 'telegram').length})</span>
              </button>

              <button
                onClick={() => setSelectedPlatform('discord')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedPlatform === 'discord'
                    ? 'bg-indigo-600 text-white shadow-md font-bold'
                    : 'glass-card text-slate-300 hover:text-white'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Discord ({channels.filter(c => c.platform === 'discord').length})</span>
              </button>

              <button
                onClick={() => setSelectedPlatform('website')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedPlatform === 'website'
                    ? 'bg-emerald-500 text-black shadow-md font-bold'
                    : 'glass-card text-slate-300 hover:text-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Websites & Portals ({channels.filter(c => c.platform === 'website').length})</span>
              </button>
            </div>

            {/* Channels Cards Grid */}
            {filteredChannels.length === 0 ? (
              <div className="glass-panel rounded-2xl p-12 text-center max-w-md mx-auto my-8">
                <MessageSquare className="w-12 h-12 text-slate-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 font-gaming">No Channels Available</h3>
                <p className="text-xs text-slate-400 mb-6">
                  {selectedPlatform !== 'all'
                    ? `No ${selectedPlatform} channels have been published yet.`
                    : 'No exclusive channels have been published in the vault yet.'}
                </p>
                {isAdmin && onOpenAdmin && (
                  <button
                    onClick={onOpenAdmin}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 text-black hover:bg-amber-400 transition-colors"
                  >
                    Add Channels in Admin Dashboard
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredChannels.map((chan) => {
                  const isTelegram = chan.platform === 'telegram';
                  const isDiscord = chan.platform === 'discord';
                  const isWebsite = chan.platform === 'website';
                  const safeUrl = formatSafeUrl(chan.inviteUrl);
                  const displayLink = formatDisplayLink(chan.inviteUrl);

                  return (
                    <div
                      key={chan.id}
                      className="group glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-xl"
                    >
                      {/* Clickable Thumbnail / Platform Banner */}
                      <a
                        href={safeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative aspect-[16/9] max-h-44 bg-slate-950 overflow-hidden block group/thumb cursor-pointer"
                        title={`Click to open ${chan.name}`}
                      >
                        {chan.thumbnailUrl ? (
                          <img
                            src={chan.thumbnailUrl}
                            alt={chan.name}
                            className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).src =
                                isTelegram
                                  ? 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop'
                                  : isDiscord
                                  ? 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop'
                                  : 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop';
                            }}
                          />
                        ) : (
                          <div
                            className={`w-full h-full flex items-center justify-center ${
                              isTelegram
                                ? 'bg-gradient-to-br from-sky-950/80 via-slate-900 to-black'
                                : isDiscord
                                ? 'bg-gradient-to-br from-indigo-950/80 via-slate-900 to-black'
                                : 'bg-gradient-to-br from-emerald-950/80 via-slate-900 to-black'
                            }`}
                          >
                            {isTelegram ? (
                              <Send className="w-16 h-16 text-sky-400/40" />
                            ) : isDiscord ? (
                              <MessageSquare className="w-16 h-16 text-indigo-400/40" />
                            ) : (
                              <Globe className="w-16 h-16 text-emerald-400/40" />
                            )}
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e121e] via-transparent to-black/30" />

                        {/* Platform Badge */}
                        <div
                          className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-xs font-bold tracking-wider uppercase font-gaming flex items-center gap-1.5 shadow-lg ${
                            isTelegram
                              ? 'bg-sky-500 text-black'
                              : isDiscord
                              ? 'bg-indigo-600 text-white'
                              : 'bg-emerald-500 text-black'
                          }`}
                        >
                          {isTelegram ? (
                            <Send className="w-3.5 h-3.5" />
                          ) : isDiscord ? (
                            <MessageSquare className="w-3.5 h-3.5" />
                          ) : (
                            <Globe className="w-3.5 h-3.5" />
                          )}
                          <span>
                            {isTelegram
                              ? 'Telegram Channel'
                              : isDiscord
                              ? 'Discord Server'
                              : 'Official Website'}
                          </span>
                        </div>

                        {/* Category tag */}
                        {chan.category && (
                          <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[11px] text-slate-300 font-medium">
                            {chan.category}
                          </div>
                        )}

                        {/* Quick Direct Link Pill overlay on banner */}
                        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-[10px] text-amber-300 font-mono flex items-center gap-1 opacity-90 group-hover/thumb:opacity-100 transition-opacity">
                          <span>{displayLink}</span>
                          <ArrowUpRight className="w-3 h-3 text-amber-400" />
                        </div>
                      </a>

                      {/* Content Body */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white font-gaming group-hover:text-amber-300 transition-colors mb-2">
                            {chan.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
                            {chan.description}
                          </p>

                          {/* Channel URL Preview & Copy Bar */}
                          <div className="mb-4 p-2.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2 min-w-0">
                              <Link2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                              <a
                                href={safeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-mono text-slate-300 hover:text-amber-300 truncate transition-colors"
                                title={`Open ${safeUrl}`}
                              >
                                {displayLink}
                              </a>
                            </div>

                            <button
                              onClick={() => handleCopyLink(chan)}
                              type="button"
                              title="Copy Link"
                              className="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white text-[11px] font-medium transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                            >
                              {copiedId === chan.id ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-400" />
                                  <span className="text-emerald-400">Copied</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3 text-slate-400" />
                                  <span>Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Direct Channel / Website Link Button with Link inside the Button */}
                        <div className="pt-2">
                          <a
                            href={safeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-between shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                              isTelegram
                                ? 'bg-sky-500 hover:bg-sky-400 text-black shadow-sky-500/25'
                                : isDiscord
                                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30'
                                : 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-emerald-500/25'
                            }`}
                          >
                            <div className="flex items-center gap-2 truncate">
                              {isTelegram ? (
                                <Send className="w-4 h-4 shrink-0" />
                              ) : isDiscord ? (
                                <MessageSquare className="w-4 h-4 shrink-0" />
                              ) : (
                                <Globe className="w-4 h-4 shrink-0" />
                              )}
                              <span className="font-gaming uppercase tracking-wide">
                                {isTelegram
                                  ? 'Join Telegram'
                                  : isDiscord
                                  ? 'Join Discord'
                                  : 'Visit Website'}
                              </span>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0 ml-2">
                              <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-black/25 text-current truncate max-w-[140px] sm:max-w-[180px]">
                                {displayLink}
                              </span>
                              <ArrowUpRight className="w-4 h-4 shrink-0" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};
