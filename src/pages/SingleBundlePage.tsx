import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Share2,
  Check,
  Gamepad2,
  CheckCircle2,
  ShieldCheck,
  Zap,
  SkipForward,
  SkipBack,
  Video,
  PhoneCall,
  ArrowRight,
  Lock
} from 'lucide-react';
import { Bundle, SiteSettings } from '../types/index.js';
import { getChannelRedirectInfo } from '../utils/channelRedirect.js';
import { shareBundleLink } from '../utils/shareBundle.js';

interface SingleBundlePageProps {
  bundles: Bundle[];
  settings: SiteSettings;
  isAdmin: boolean;
  onOpenAdmin?: () => void;
}

function getYouTubeEmbed(url?: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=0&rel=0` : null;
}

const DEFAULT_PREVIEW_VIDEO = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';

function toCleanTitle(raw: string): string {
  if (raw !== raw.toUpperCase()) return raw;
  return raw
    .toLowerCase()
    .split(' ')
    .map((word) => {
      if (['vip', 'pc', 'id', 'gta', 'dlc'].includes(word)) return word.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

export const SingleBundlePage: React.FC<SingleBundlePageProps> = ({
  bundles,
  settings
}) => {
  const { bundleId } = useParams<{ bundleId: string }>();
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
      message: 'Vault Protection: Video downloading is disabled.'
    });
    setTimeout(() => setSecurityNotice({ show: false, message: '' }), 2800);
  };

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

  const resolvedBundle = React.useMemo(() => {
    if (!bundleId) return bundles[0] || null;
    const cleanParam = bundleId.toLowerCase().trim();

    let found = bundles.find((b) => b.id.toLowerCase() === cleanParam);
    if (found) return found;

    found = bundles.find(
      (b) => b.id.toLowerCase().replace(/^bundle-/, '') === cleanParam.replace(/^bundle-/, '')
    );
    if (found) return found;

    found = bundles.find((b) => {
      const slug = b.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return slug === cleanParam || slug.includes(cleanParam) || cleanParam.includes(slug);
    });
    if (found) return found;

    return bundles[0] || null;
  }, [bundleId, bundles]);

  const bundle = resolvedBundle;

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
    if (res.copied || res.shared) {
      setShareToast({
        show: true,
        message: res.copied ? 'Direct bundle link copied!' : 'Bundle link shared!'
      });
      setTimeout(() => setShareToast({ show: false, message: '' }), 2800);
    }
  };

  if (!bundle) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Bundle Not Found</h2>
        <p className="text-zinc-400 text-sm mb-6">
          The bundle link you followed may have expired or is no longer active.
        </p>
        <Link
          to="/bundles"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 text-white text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All Bundles</span>
        </Link>
      </div>
    );
  }

  const displayTitle = toCleanTitle(bundle.title);
  const redirectInfo = getChannelRedirectInfo(settings, {
    bundleTitle: bundle.title,
    actionType: 'purchase'
  });

  return (
    <div className="min-h-screen pb-28 lg:pb-16">
      {/* Toasts */}
      {shareToast.show && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg bg-[#18181c] border border-white/15 text-white font-medium text-xs sm:text-sm shadow-2xl flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{shareToast.message}</span>
        </div>
      )}

      {securityNotice.show && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg bg-red-950/95 border border-red-500/40 text-red-100 font-medium text-xs sm:text-sm shadow-2xl flex items-center gap-2">
          <Lock className="w-4 h-4 text-red-400" />
          <span>{securityNotice.message}</span>
        </div>
      )}

      {/* Sub-navigation bar */}
      <div className="border-b border-white/[0.06] bg-[#09090b]/92 backdrop-blur-xl sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
          <Link
            to="/bundles"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-zinc-300 hover:text-white bg-[#141418] hover:bg-[#1c1c22] border border-white/[0.08] text-xs font-medium transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Bundles</span>
          </Link>

          <div className="truncate text-xs text-zinc-400 hidden sm:block max-w-[300px]">
            {displayTitle}
          </div>

          <button
            onClick={handleShare}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141418] hover:bg-[#1c1c22] border border-white/[0.08] text-zinc-200 text-xs font-medium transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-zinc-400" />
            <span>Share</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-5 sm:py-8">
        <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#111114] shadow-2xl">
          {/* Protected Video Player */}
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
                title={`${displayTitle} Walkthrough Video`}
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

            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-2 pointer-events-none">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/15 text-zinc-200 text-[11px] font-medium">
                <Video className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>Bundle Preview Video</span>
              </div>
              {playlist.length > 1 && (
                <div className="px-2 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/15 text-zinc-200 text-[11px] font-medium">
                  Part {currentPartIndex + 1}/{playlist.length}
                </div>
              )}
            </div>

            <div className="absolute bottom-3 right-3 z-20 pointer-events-none flex items-center gap-1 px-2 py-0.5 rounded bg-black/70 border border-white/10 text-[10px] text-zinc-400 select-none">
              <Lock className="w-2.5 h-2.5 text-zinc-400 shrink-0" />
              <span>Protected Stream</span>
            </div>
          </div>

          {/* Playlist Bar */}
          {playlist.length > 1 && (
            <div className="bg-[#151519] border-b border-white/[0.07] px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2">
              <div className="text-xs text-zinc-400 font-medium flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Part {currentPartIndex + 1} of {playlist.length} · Auto-advances</span>
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
                <button
                  type="button"
                  onClick={handlePrevPart}
                  className="p-1.5 rounded-md bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 border border-white/[0.08] cursor-pointer"
                >
                  <SkipBack className="w-3 h-3" />
                </button>

                {playlist.map((_, pIdx) => (
                  <button
                    key={pIdx}
                    type="button"
                    onClick={() => setCurrentPartIndex(pIdx)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer shrink-0 border ${
                      currentPartIndex === pIdx
                        ? 'bg-red-600 text-white border-red-500'
                        : 'bg-white/[0.04] text-zinc-300 border-white/[0.08] hover:bg-white/[0.08]'
                    }`}
                  >
                    Part {pIdx + 1}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={handleNextPart}
                  className="p-1.5 rounded-md bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 border border-white/[0.08] cursor-pointer"
                >
                  <SkipForward className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}

          {/* Bundle Details Body */}
          <div className="p-5 sm:p-8 space-y-7">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 border-b border-white/[0.07] pb-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-medium text-amber-400">
                  <span>🪔 Diwali Special · Flat 50% OFF</span>
                  {bundle.category && (
                    <>
                      <span className="text-zinc-600">·</span>
                      <span className="text-zinc-400">{bundle.category}</span>
                    </>
                  )}
                </div>

                <h1 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  {displayTitle}
                </h1>

                <div className="flex items-center gap-2.5 text-xs text-zinc-400 flex-wrap pt-1">
                  <span className="flex items-center gap-1.5 text-zinc-200 font-medium">
                    <Gamepad2 className="w-4 h-4 text-red-400" />
                    {bundle.gameCount > 1 ? `${bundle.gameCount.toLocaleString('en-IN')} Games` : 'Steam Unlock Feature'}
                  </span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-emerald-400">Instant Digital Delivery</span>
                  <span className="text-zinc-600">·</span>
                  <span>Lifetime Access</span>
                </div>
              </div>

              <div className="shrink-0 p-3.5 rounded-xl border border-white/[0.08] bg-[#16161b] text-left md:text-right">
                <div className="text-[11px] font-semibold text-red-400 uppercase tracking-wider">
                  Flat 50% OFF Offer
                </div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  Message on WhatsApp
                </div>
                <div className="text-xs text-emerald-400 mt-0.5">
                  WhatsApp Business
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Bundle Overview
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {bundle.fullDescription || bundle.shortDescription || 'Curated PC gaming bundle with lifetime access.'}
              </p>
            </div>

            {bundle.popularTitlesPreview && bundle.popularTitlesPreview.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Popular Titles Included
                  </h3>
                  <span className="text-xs text-zinc-500">Lifetime access</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {bundle.popularTitlesPreview.map((game, idx) => (
                    <div
                      key={idx}
                      className="group/pop relative rounded-lg overflow-hidden border border-white/[0.08] bg-zinc-900 aspect-[16/10]"
                    >
                      <img
                        src={game.coverImage}
                        alt={game.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover/pop:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-2">
                        <span className="text-[11px] font-medium text-white line-clamp-1">
                          {game.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                Included In This Bundle ({bundle.includedItems?.length || 0})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(bundle.includedItems || []).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#16161b] border border-white/[0.05] text-xs sm:text-sm text-zinc-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#16161b] border border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1 text-xs text-zinc-300">
                <div className="font-semibold text-white">How to claim your 50% Diwali discount:</div>
                <p className="text-zinc-400">
                  Message us on <span className="text-zinc-200 font-medium">WhatsApp Business</span>, pay via UPI / GPay / PhonePe, and get instant setup access in 3–5 minutes.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Verified Setup</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/[0.07]">
              <button
                onClick={handleShare}
                type="button"
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-[#18181d] hover:bg-[#222228] border border-white/[0.09] text-zinc-200 text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4 text-zinc-400" />
                <span>Share Bundle Page Link</span>
              </button>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <Link
                  to="/bundles"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-[#18181d] hover:bg-[#222228] border border-white/[0.09] text-zinc-300 text-xs sm:text-sm font-medium transition-colors text-center"
                >
                  Other Bundles
                </Link>

                <a
                  href={redirectInfo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <PhoneCall className="w-4 h-4 text-white shrink-0" />
                  <span>Claim 50% OFF on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-white shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Action Bar (Compact <= 15% height) */}
      <div className="lg:hidden fixed bottom-12 left-0 right-0 z-30 bg-[#09090b]/95 backdrop-blur-xl border-t border-white/[0.08] px-4 py-2.5">
        <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
          <div className="min-w-0">
            <div className="text-[10px] font-semibold text-amber-400">🪔 Diwali 50% OFF</div>
            <div className="text-xs font-medium text-white truncate">WhatsApp Business</div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleShare}
              type="button"
              className="p-2 rounded-lg bg-[#141418] border border-white/[0.08] text-zinc-300 cursor-pointer"
              title="Share Bundle"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <a
              href={redirectInfo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold text-xs flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-white shrink-0" />
              <span>WhatsApp (50% OFF)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
