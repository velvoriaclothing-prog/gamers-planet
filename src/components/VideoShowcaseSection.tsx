import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Film, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Zap,
  SkipForward,
  SkipBack,
  Layers,
  Loader2,
  RotateCcw
} from 'lucide-react';
import { Bundle, SiteSettings } from '../types/index.js';
import { getChannelRedirectInfo } from '../utils/channelRedirect.js';
import { useLanguage } from '../context/LanguageContext.js';

interface VideoShowcaseSectionProps {
  bundles: Bundle[];
  settings: SiteSettings;
  onSelectBundle?: (bundle: Bundle) => void;
}

export const VideoShowcaseSection: React.FC<VideoShowcaseSectionProps> = ({
  bundles,
  settings,
  onSelectBundle
}) => {
  // Helper to extract sequential video playlist for a bundle
  const getPlaylist = (bundle?: Bundle): string[] => {
    if (!bundle) return [];
    if (Array.isArray(bundle.videoPlaylist) && bundle.videoPlaylist.length > 0) {
      const list = bundle.videoPlaylist
        .map(u => (typeof u === 'string' ? u.trim() : ''))
        .filter(Boolean);
      if (list.length > 0) return list;
    }
    if (bundle.videoPreview && bundle.videoPreview.trim().length > 0) {
      const parts = bundle.videoPreview
        .split(/[\n,;]+/)
        .map(s => s.trim())
        .filter(Boolean);
      if (parts.length > 0) return parts;
    }
    return [];
  };

  const { t } = useLanguage();

  // Filter bundles that have at least one video preview
  const videoBundles = bundles.filter(b => getPlaylist(b).length > 0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoadingVideo, setIsLoadingVideo] = useState(true);
  const [hasPlaybackError, setHasPlaybackError] = useState(false);
  const [autoAdvanceEnabled, setAutoAdvanceEnabled] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentBundle = videoBundles[activeIndex] || bundles[0];
  const currentPlaylist = getPlaylist(currentBundle);
  const currentVideoSrc = currentPlaylist[currentPartIndex] || currentBundle?.videoPreview || '';

  // Reset to part 0 when switching bundles
  useEffect(() => {
    setCurrentPartIndex(0);
    setIsLoadingVideo(true);
    setHasPlaybackError(false);
  }, [activeIndex]);

  // Handle video element play attempt whenever source changes
  useEffect(() => {
    setIsLoadingVideo(true);
    setHasPlaybackError(false);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsLoadingVideo(false);
        })
        .catch(() => {
          // Autoplay policy may pause until user gesture
          setIsPlaying(false);
          setIsLoadingVideo(false);
        });
    }
  }, [currentVideoSrc, activeIndex, currentPartIndex]);

  // Automatic sequential video switching on completion
  const handleVideoEnded = () => {
    if (currentPlaylist.length > 1 && autoAdvanceEnabled) {
      const nextIndex = (currentPartIndex + 1) % currentPlaylist.length;
      setCurrentPartIndex(nextIndex);
      setIsPlaying(true);
    } else {
      // Loop current video
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const handleNextPart = () => {
    if (currentPlaylist.length > 1) {
      setCurrentPartIndex((prev) => (prev + 1) % currentPlaylist.length);
    }
  };

  const handlePrevPart = () => {
    if (currentPlaylist.length > 1) {
      setCurrentPartIndex((prev) => (prev - 1 + currentPlaylist.length) % currentPlaylist.length);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      videoRef.current.requestFullscreen().catch(() => {});
    }
  };

  const handleRetryVideo = () => {
    setHasPlaybackError(false);
    setIsLoadingVideo(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  };

  if (videoBundles.length === 0) return null;

  return (
    <section id="gameplay-videos" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 font-gaming mb-2">
            <Film className="w-4 h-4 text-amber-400" />
            <span>{t('video.eyebrow', "WHAT'S INCLUDED IN BUNDLE — SEE IN VIDEO")}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-gaming tracking-tight">
            {t('video.heading', "SEE WHAT'S INCLUDED (VIDEO PROOF)")}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
            {t('video.subtitle', "Watch real recorded video demonstrations showing the exact games, Steam Unlock tools, and account features included with each package. Multi-part videos play continuously in sequence.")}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 border border-white/10 rounded-xl px-3 py-2 w-fit">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{t('video.proof_badge', "100% Real Video Proof • Full Walkthrough")}</span>
        </div>
      </div>

      {/* Main Cinema Theater Player */}
      <div className="glass-panel rounded-3xl overflow-hidden border border-white/15 bg-[#070a13] shadow-[0_20px_60px_rgba(0,0,0,0.85)] mb-8">
        
        {/* Video Screen Container */}
        <div className="relative aspect-[16/9] max-h-[65vh] w-full bg-black overflow-hidden group">
          <video
            ref={videoRef}
            key={`${currentBundle.id}-${currentPartIndex}-${currentVideoSrc}`}
            src={currentVideoSrc}
            poster={currentBundle.coverImage}
            playsInline
            muted={isMuted}
            preload="auto"
            onPlay={() => {
              setIsPlaying(true);
              setIsLoadingVideo(false);
            }}
            onPause={() => setIsPlaying(false)}
            onWaiting={() => setIsLoadingVideo(true)}
            onPlaying={() => setIsLoadingVideo(false)}
            onCanPlay={() => setIsLoadingVideo(false)}
            onEnded={handleVideoEnded}
            onError={() => {
              setIsLoadingVideo(false);
              setHasPlaybackError(true);
            }}
            className="w-full h-full object-contain bg-black cursor-pointer"
            onClick={togglePlay}
          />

          {/* Buffering Spinner Overlay */}
          {isLoadingVideo && !hasPlaybackError && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex flex-col items-center justify-center pointer-events-none z-10 transition-opacity">
              <Loader2 className="w-10 h-10 text-amber-400 animate-spin mb-2" />
              <span className="text-xs font-bold text-amber-300 font-gaming tracking-wider uppercase">
                Loading Part {currentPartIndex + 1}...
              </span>
            </div>
          )}

          {/* Playback Error Overlay with Retry */}
          {hasPlaybackError && (
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-20 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mb-3">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Video Stream Connecting...</h4>
              <p className="text-xs text-slate-400 max-w-sm mb-4">
                Click below to reload trailer playback.
              </p>
              <button
                onClick={handleRetryVideo}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-2 cursor-pointer transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retry Playback</span>
              </button>
            </div>
          )}

          {/* Top Overlays */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <div className="px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-amber-500/40 text-amber-400 text-[11px] font-black font-gaming tracking-wider flex items-center gap-1.5 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentBundle.title}</span>
            </div>
            {currentBundle.badge && (
              <div className="px-2 py-0.5 rounded bg-amber-500 text-black text-[10px] font-black tracking-wider uppercase font-gaming">
                {currentBundle.badge}
              </div>
            )}
            {currentPlaylist.length > 1 && (
              <div className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] font-black tracking-wider uppercase font-gaming">
                Part {currentPartIndex + 1}/{currentPlaylist.length}
              </div>
            )}
          </div>

          {/* Quick Sound / Mute Indicator overlay */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="p-2 rounded-xl bg-black/80 hover:bg-black text-amber-400 hover:text-amber-300 border border-white/20 backdrop-blur-md transition-all cursor-pointer shadow-lg flex items-center gap-1.5 text-xs font-bold"
              title={isMuted ? 'Click to Unmute Audio' : 'Click to Mute Audio'}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-amber-400" />
                  <span className="text-[10px]">Unmute</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-[10px]">Audio On</span>
                </>
              )}
            </button>

            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-xl bg-black/80 hover:bg-black text-slate-300 hover:text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer shadow-lg"
              title="Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Center Play/Pause button on pause */}
          {!isPlaying && !isLoadingVideo && !hasPlaybackError && (
            <div 
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer backdrop-blur-[2px] transition-all"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.6)] transform hover:scale-110 transition-transform">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-black translate-x-0.5" />
              </div>
            </div>
          )}

          {/* Bottom Floating Control Bar on Hover */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex items-center justify-between opacity-90 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="w-8 h-8 rounded-lg bg-amber-500/20 hover:bg-amber-500/40 text-amber-400 flex items-center justify-center transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-amber-400" />}
              </button>

              <div className="text-xs text-slate-200 font-semibold font-gaming hidden sm:block">
                Playing: {currentBundle.title} {currentPlaylist.length > 1 ? `(Part ${currentPartIndex + 1} of ${currentPlaylist.length})` : ''}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-[10px] text-slate-400">Vault Deal</div>
                <div className="text-sm font-black text-amber-400 font-gaming">
                  ₹{currentBundle.price.toLocaleString('en-IN')}
                </div>
              </div>

              {(() => {
                const redirectInfo = getChannelRedirectInfo(settings, {
                  bundleTitle: currentBundle.title,
                  price: currentBundle.price,
                  actionType: 'purchase'
                });
                return (
                  <a
                    href={redirectInfo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black text-xs font-gaming flex items-center gap-1.5 shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all cursor-pointer"
                  >
                    <span>{t('nav.claim_now', 'Claim Now')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Sequential Sequence Active Bar — Positioned BELOW the video */}
        {currentPlaylist.length > 1 && (
          <div className="bg-[#0b1021] border-t border-b border-white/10 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-inner">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-bold font-gaming tracking-wider">
                <Zap className="w-3.5 h-3.5 fill-amber-400" />
                <span>{t('video.sequence_active', 'Sequential Sequence Active: Part')} {currentPartIndex + 1} {t('video.of', 'of')} {currentPlaylist.length}</span>
              </span>
              <span className="text-[11px] text-slate-400 hidden sm:inline">
                {t('video.auto_advances', 'Auto-plays next part continuously')}
              </span>
            </div>

            {/* Quick Part Switcher Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto">
              <button
                onClick={handlePrevPart}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/10"
                title="Previous Part"
              >
                <SkipBack className="w-3.5 h-3.5" />
              </button>

              {currentPlaylist.map((_, pIdx) => {
                const isPartActive = currentPartIndex === pIdx;
                return (
                  <button
                    key={pIdx}
                    onClick={() => setCurrentPartIndex(pIdx)}
                    className={`px-3 py-1 rounded-lg text-xs font-gaming font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
                      isPartActive
                        ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.5)] scale-105 font-black'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border-white/10'
                    }`}
                  >
                    {isPartActive && <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />}
                    <span>Part {pIdx + 1}</span>
                  </button>
                );
              })}

              <button
                onClick={handleNextPart}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/10"
                title="Next Part"
              >
                <SkipForward className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Video Selector Tabs Below Main Player */}
        <div className="p-4 sm:p-6 bg-[#090d19] border-t border-white/10">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-gaming flex items-center gap-2">
            <Film className="w-3.5 h-3.5 text-amber-400" />
            <span>{t('video.select_bundle', "Select Bundle to See What's Included in Video:")}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {videoBundles.map((b, idx) => {
              const isSelected = activeIndex === idx;
              const bundlePlaylist = getPlaylist(b);
              return (
                <button
                  key={b.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-3 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-center gap-3 border ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.25)] ring-1 ring-amber-400/50'
                      : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.06]'
                  }`}
                >
                  {/* Thumbnail with mini play overlay */}
                  <div className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-black">
                    <img
                      src={b.coverImage}
                      alt={b.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        isSelected ? 'bg-amber-500 text-black' : 'bg-black/70 text-white'
                      }`}>
                        <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Bundle info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1 text-[9px] font-bold text-amber-400 font-gaming uppercase truncate">
                      <span>{b.category || 'Vault'}</span>
                      {bundlePlaylist.length > 1 && (
                        <span className="px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[8px] font-bold">
                          {bundlePlaylist.length} Parts
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-white font-gaming truncate leading-snug">
                      {b.title}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5 font-medium">
                      ₹{b.price} • {b.gameCount > 1 ? `${b.gameCount.toLocaleString('en-IN')} Games` : 'Steam Unlock'}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
