import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Share2, 
  Check, 
  Play, 
  Gamepad2, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  SkipForward, 
  SkipBack, 
  Video, 
  PhoneCall, 
  Send, 
  Instagram, 
  Globe, 
  ArrowRight,
  Flame,
  Layers,
  Copy,
  Lock
} from 'lucide-react';
import { Bundle, SiteSettings } from '../types/index.js';
import { getChannelRedirectInfo } from '../utils/channelRedirect.js';
import { useLanguage } from '../context/LanguageContext.js';
import { shareBundleLink, getBundleShareUrl } from '../utils/shareBundle.js';

interface SingleBundlePageProps {
  bundles: Bundle[];
  settings: SiteSettings;
  isAdmin: boolean;
  onOpenAdmin?: () => void;
}

// Helper to check for YouTube embeddable URL
function getYouTubeEmbed(url?: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=0&rel=0` : null;
}

const DEFAULT_PREVIEW_VIDEO = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';

export const SingleBundlePage: React.FC<SingleBundlePageProps> = ({
  bundles,
  settings,
  isAdmin,
  onOpenAdmin
}) => {
  const { bundleId } = useParams<{ bundleId: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [shareToast, setShareToast] = useState<{ show: boolean; message: string }>({
    show: false,
    message: ''
  });
  const [securityNotice, setSecurityNotice] = useState<{ show: boolean; message: string }>({
    show: false,
    message: ''
  });

  const showProtectedNotice = () => {
    setSecurityNotice({
      show: true,
      message: '🔒 Vault Protection: Video downloading is restricted.'
    });
    setTimeout(() => setSecurityNotice({ show: false, message: '' }), 3000);
  };

  // Block Ctrl+S / Cmd+S video saving
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        showProtectedNotice();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Resilient bundle matching: exact id, case-insensitive, strip 'bundle-', or slugified title
  const resolvedBundle = React.useMemo(() => {
    if (!bundleId) return bundles[0] || null;
    const cleanParam = bundleId.toLowerCase().trim();

    // 1. Exact ID
    let found = bundles.find(b => b.id.toLowerCase() === cleanParam);
    if (found) return found;

    // 2. ID without 'bundle-' prefix
    found = bundles.find(b => b.id.toLowerCase().replace(/^bundle-/, '') === cleanParam.replace(/^bundle-/, ''));
    if (found) return found;

    // 3. Slug match on title
    found = bundles.find(b => {
      const slug = b.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return slug === cleanParam || slug.includes(cleanParam) || cleanParam.includes(slug);
    });
    if (found) return found;

    // Fallback to first available bundle
    return bundles[0] || null;
  }, [bundleId, bundles]);

  const bundle = resolvedBundle;

  // Sequential Video Playlist extraction
  const getPlaylist = (): string[] => {
    if (Array.isArray(bundle?.videoPlaylist) && bundle.videoPlaylist.length > 0) {
      const list = bundle.videoPlaylist
        .map((u) => (typeof u === 'string' ? u.trim() : ''))
        .filter(Boolean);
      if (list.length > 0) return list;
    }
    if (bundle?.videoPreview && bundle.videoPreview.trim().length > 0) {
      const parts = bundle.videoPreview
        .split(/[\n,;]+/)
        .map((s) => s.trim())
        .filter(Boolean);
      if (parts.length > 0) return parts;
    }
    return [DEFAULT_PREVIEW_VIDEO];
  };

  const playlist = getPlaylist();
  const [currentPartIndex, setCurrentPartIndex] = useState(0);

  useEffect(() => {
    setCurrentPartIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [bundle?.id]);

  const currentVideoUrl = playlist[currentPartIndex] || playlist[0];
  const ytEmbed = getYouTubeEmbed(currentVideoUrl);

  const handleVideoEnded = () => {
    if (playlist.length > 1) {
      setCurrentPartIndex((prev) => (prev + 1) % playlist.length);
    } else if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleNextPart = () => {
    if (playlist.length > 1) {
      setCurrentPartIndex((prev) => (prev + 1) % playlist.length);
    }
  };

  const handlePrevPart = () => {
    if (playlist.length > 1) {
      setCurrentPartIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    }
  };

  const handleShare = async () => {
    if (!bundle) return;
    const res = await shareBundleLink(bundle);
    if (res.copied) {
      setShareToast({
        show: true,
        message: 'Direct link copied! Ready to share with friends.'
      });
      setTimeout(() => setShareToast({ show: false, message: '' }), 3000);
    } else if (res.shared) {
      setShareToast({
        show: true,
        message: 'Link shared successfully!'
      });
      setTimeout(() => setShareToast({ show: false, message: '' }), 3000);
    }
  };

  if (!bundle) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold font-gaming text-white mb-3">Bundle Not Found</h2>
        <p className="text-slate-400 mb-6">The bundle link you followed may have expired or is no longer active.</p>
        <Link
          to="/bundles"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-black font-extrabold font-gaming"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All Bundles</span>
        </Link>
      </div>
    );
  }



  const redirectInfo = getChannelRedirectInfo(settings, {
    bundleTitle: bundle.title,
    price: bundle.price,
    actionType: 'purchase'
  });

  return (
    <div className="min-h-screen pb-28 md:pb-20">
      {/* Toast Notification */}
      {shareToast.show && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-amber-500 text-black font-extrabold text-xs sm:text-sm shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <Check className="w-4 h-4 text-black stroke-[3]" />
          <span>{shareToast.message}</span>
        </div>
      )}

      {/* Security Toast Notification for Anti-Download Protection */}
      {securityNotice.show && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-red-950/95 border border-red-500/50 text-red-200 font-extrabold text-xs sm:text-sm shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-200 backdrop-blur-xl">
          <Lock className="w-4 h-4 text-amber-400 stroke-[2.5]" />
          <span>{securityNotice.message}</span>
        </div>
      )}

      {/* Top Breadcrumb & Action Bar */}
      <div className="border-b border-white/[0.08] bg-[#070b17]/90 backdrop-blur-xl sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-3 flex items-center justify-between gap-3">
          <Link
            to="/bundles"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 text-xs font-semibold font-gaming uppercase tracking-wider transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Bundles</span>
          </Link>

          <div className="truncate text-xs font-gaming text-slate-400 hidden sm:block max-w-[280px]">
            {bundle.title}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold font-gaming uppercase tracking-wider transition-all cursor-pointer active:scale-95"
              title="Share bundle link"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Share Link</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
        
        {/* Main Vault Panel Container */}
        <div className="glass-panel rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-[#080d19] shadow-[0_25px_80px_rgba(0,0,0,0.95)]">
          
          {/* 1. Cinematic Video Section (Anti-Download Protection Enforced) */}
          <div 
            onContextMenu={(e) => {
              e.preventDefault();
              e.stopPropagation();
              showProtectedNotice();
              return false;
            }}
            onDragStart={(e) => {
              e.preventDefault();
              return false;
            }}
            className="relative w-full aspect-video max-h-[62vh] bg-black overflow-hidden flex items-center justify-center select-none protected-video-shield"
          >
            {ytEmbed ? (
              <iframe
                src={ytEmbed}
                title={`${bundle.title} Walkthrough Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0 aspect-video"
              />
            ) : (
              <video
                ref={videoRef}
                key={`${bundle.id}-${currentPartIndex}-${currentVideoUrl}`}
                src={currentVideoUrl}
                poster={bundle.coverImage}
                controls
                controlsList="nodownload noremoteplayback noplaybackrate"
                disablePictureInPicture
                disableRemotePlayback
                autoPlay
                playsInline
                preload="auto"
                draggable={false}
                onDragStart={(e) => {
                  e.preventDefault();
                  return false;
                }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  showProtectedNotice();
                  return false;
                }}
                onEnded={handleVideoEnded}
                className="w-full h-full max-h-[62vh] object-contain bg-black select-none pointer-events-auto"
              >
                Your browser does not support the video tag.
              </video>
            )}

            {/* Anti-Download Protection Watermark */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 pointer-events-none flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[9px] sm:text-[10px] text-slate-300 font-gaming uppercase tracking-wider select-none opacity-60">
              <Lock className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-amber-400 shrink-0" />
              <span>Vault Protected</span>
            </div>

            {/* Video Indicator Pill */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-2 pointer-events-none max-w-[calc(100%-24px)]">
              <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-amber-500/40 text-amber-400 text-[10px] sm:text-xs font-bold font-gaming shadow-lg truncate">
                <Video className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">{t('modal.included_heading', "WHAT'S INCLUDED IN BUNDLE (VIDEO)")}</span>
              </div>
              {playlist.length > 1 && (
                <div className="px-2 py-0.5 sm:py-1 rounded-full bg-amber-500/25 backdrop-blur-md border border-amber-500/50 text-amber-300 text-[10px] sm:text-[11px] font-bold font-gaming flex items-center gap-1 shadow-lg shrink-0">
                  <Zap className="w-2.5 sm:w-3 h-2.5 sm:h-3 fill-amber-400 shrink-0" />
                  <span>PART {currentPartIndex + 1}/{playlist.length}</span>
                </div>
              )}
            </div>
          </div>

          {/* Sequential Playlist Controls Bar — Shifted BELOW the video */}
          {playlist.length > 1 && (
            <div className="bg-[#0b1020] border-b border-white/10 px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2.5 shadow-inner">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[11px] sm:text-xs font-bold font-gaming tracking-wide">
                  <Zap className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" />
                  <span>{t('video.sequence_active', 'Sequential Sequence Active:')}</span>
                </div>
                <span className="text-[11px] text-slate-400 hidden sm:inline">
                  Part {currentPartIndex + 1} {t('video.of', 'of')} {playlist.length} • Auto-advances
                </span>
              </div>

              <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-0.5 scrollbar-none">
                <button
                  type="button"
                  onClick={handlePrevPart}
                  className="p-1 sm:p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/10"
                  title="Previous Part"
                >
                  <SkipBack className="w-3 h-3" />
                </button>

                {playlist.map((_, pIdx) => {
                  const isCurrent = currentPartIndex === pIdx;
                  return (
                    <button
                      key={pIdx}
                      type="button"
                      onClick={() => setCurrentPartIndex(pIdx)}
                      className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold font-gaming transition-all cursor-pointer flex items-center gap-1 border shrink-0 ${
                        isCurrent
                          ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.5)] font-black'
                          : 'bg-white/5 text-slate-300 hover:text-white border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />}
                      <span>Part {pIdx + 1}</span>
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={handleNextPart}
                  className="p-1 sm:p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/10"
                  title="Next Part"
                >
                  <SkipForward className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}

          {/* 2. Bundle Content Body */}
          <div className="p-4 sm:p-8 bg-[#090c15]">
            
            {/* Header: Title, Category, Stats, and Price Box */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 sm:gap-6 mb-6 sm:mb-8 border-b border-white/10 pb-6">
              <div className="space-y-1.5">
                {bundle.category && (
                  <span className="text-[11px] sm:text-xs font-bold tracking-wider text-amber-400 uppercase font-gaming">
                    {bundle.category}
                  </span>
                )}
                <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-gaming tracking-tight">
                  {bundle.title}
                </h1>
                
                {/* Unboxed Metadata Discipline */}
                <div className="flex items-center gap-2 sm:gap-3 text-xs text-slate-400 flex-wrap pt-1 font-mono">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Gamepad2 className="w-4 h-4 text-amber-400" />
                    <strong className="text-white font-bold">
                      {bundle.gameCount > 1 ? bundle.gameCount.toLocaleString('en-IN') : 'Steam Unlock'}
                    </strong>{' '}
                    {bundle.gameCount > 1 ? 'Total Games' : 'Feature'}
                  </span>
                  <span>·</span>
                  <span className="text-emerald-400 font-medium">Instant Digital Delivery</span>
                  <span>·</span>
                  <span>Lifetime Vault Access</span>
                  <span>·</span>
                  <span className="text-amber-400/90 font-medium">100% Verified</span>
                </div>
              </div>

              {/* Direct Instagram DM Badge */}
              <div className="shrink-0 p-3.5 sm:p-4 rounded-2xl border border-pink-500/35 bg-gradient-to-br from-pink-950/40 via-purple-950/30 to-amber-950/20 text-left md:text-right shadow-xl">
                <div className="flex items-center md:justify-end gap-1.5 text-[11px] text-pink-400 font-extrabold uppercase font-gaming">
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Direct Purchase</span>
                </div>
                <div className="text-base sm:text-lg font-black font-gaming text-white mt-1">
                  DM on Instagram
                </div>
                <div className="text-xs font-mono text-amber-400 font-bold mt-0.5">
                  @gamerspoint2026
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-1">
                  Instant Response & Setup Guide
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400 font-gaming mb-2">
                Bundle Overview
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {bundle.fullDescription || bundle.shortDescription || 'Exclusive premium PC gaming collection.'}
              </p>
            </div>

            {/* Popular Titles in this Bundle Showcase */}
            {bundle.popularTitlesPreview && bundle.popularTitlesPreview.length > 0 && (
              <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#090d19]/90 border border-amber-500/30 shadow-lg">
                <div className="flex items-center justify-between mb-3.5 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white font-gaming">
                      TOP POPULAR BLOCKBUSTERS INCLUDED
                    </h3>
                  </div>
                  <span className="text-xs text-amber-400/90 font-medium">
                    All playable with lifetime access
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {bundle.popularTitlesPreview.map((game, idx) => (
                    <div
                      key={idx}
                      className="group/pop relative rounded-xl overflow-hidden border border-white/10 bg-slate-950 aspect-[16/10] hover:border-amber-400 transition-all hover:-translate-y-0.5 shadow-md"
                    >
                      <img
                        src={game.coverImage}
                        alt={game.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover/pop:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-2 sm:p-2.5">
                        <span className="text-[11px] sm:text-xs font-bold text-white font-gaming truncate">
                          {game.title}
                        </span>
                        {game.genre && (
                          <span className="text-[9px] sm:text-[10px] text-amber-400 uppercase tracking-wider truncate">
                            {game.genre}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What is Included Checklist */}
            <div className="mb-8">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400 font-gaming mb-3">
                Everything Included In This Vault
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(bundle.includedItems || []).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-500/20 text-xs sm:text-sm text-slate-200 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-medium truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Order Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/5 border border-amber-500/25 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1.5 text-left">
                <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase font-gaming">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>How Instant Purchase Works:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  1. Click "DM to Buy on Instagram" below to message us directly at <span className="text-amber-400 font-semibold font-mono">@gamerspoint2026</span>.<br />
                  2. We provide instant payment details (UPI, Google Pay, PhonePe, Paytm).<br />
                  3. Receive full credentials and lifetime installation instructions within minutes!
                </p>
              </div>
              
              <div className="shrink-0 flex items-center gap-2 text-xs text-slate-300 bg-white/5 px-3 py-2 rounded-xl border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Refund & Setup Guarantee</span>
              </div>
            </div>

            {/* Desktop Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10">
              <button
                onClick={handleShare}
                type="button"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white text-xs sm:text-sm font-bold font-gaming uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
              >
                <Share2 className="w-4 h-4 text-amber-400" />
                <span>Share Bundle Page Link</span>
              </button>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  to="/bundles"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl glass-card text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors text-center"
                >
                  Browse Other Bundles
                </Link>

                <a
                  href={redirectInfo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:from-pink-500 hover:to-amber-400 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(244,63,94,0.4)] hover:shadow-[0_0_35px_rgba(244,63,94,0.6)] active:scale-95 transition-all cursor-pointer font-gaming text-center shrink-0"
                >
                  <Instagram className="w-5 h-5 text-white shrink-0" />
                  <span>DM to Buy on Instagram</span>
                  <ArrowRight className="w-4 h-4 text-white shrink-0" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Mobile Sticky Bottom Bar (Fixed <= 15% viewport, touch target >= 48px) */}
      <div className="md:hidden fixed bottom-14 left-0 right-0 z-40 bg-[#070b16]/95 backdrop-blur-2xl border-t border-pink-500/30 p-2.5 px-4 shadow-[0_-10px_30px_rgba(0,0,0,0.85)]">
        <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
          <div className="flex flex-col">
            <span className="text-[10px] text-pink-400 uppercase font-gaming flex items-center gap-1">
              <Instagram className="w-3 h-3 text-pink-400" />
              <span>DM on Instagram</span>
            </span>
            <span className="text-sm font-black font-gaming text-amber-400">
              @gamerspoint2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              type="button"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-amber-400 hover:text-white transition-colors cursor-pointer"
              title="Share Bundle"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <a
              href={redirectInfo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-amber-500 text-white font-extrabold text-xs font-gaming uppercase tracking-wider flex items-center gap-1.5 shadow-lg active:scale-95 transition-transform"
            >
              <Instagram className="w-3.5 h-3.5 text-white" />
              <span>DM to Buy</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
