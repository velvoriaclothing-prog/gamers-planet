import React, { useEffect, useRef } from 'react';
import { X, Play, Gamepad2, CheckCircle2, ShieldCheck, Zap, Instagram, ArrowRight, Video } from 'lucide-react';
import { Bundle, SiteSettings } from '../types/index.js';
import { openInstagram } from '../utils/api.js';

interface BundleModalProps {
  bundle: Bundle | null;
  settings: SiteSettings;
  onClose: () => void;
}

// Helper to check for YouTube embeddable URL
function getYouTubeEmbed(url?: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=0&rel=0` : null;
}

const DEFAULT_PREVIEW_VIDEO = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';

export const BundleModal: React.FC<BundleModalProps> = ({
  bundle,
  settings,
  onClose,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll to top of modal container whenever bundle opens
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [bundle?.id]);

  // Video source: ALWAYS show video, never cover art
  const videoUrl = bundle?.videoPreview?.trim() || DEFAULT_PREVIEW_VIDEO;
  const ytEmbed = getYouTubeEmbed(videoUrl);

  // Auto-play video whenever bundle opens or changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // If browser blocks unmuted autoplay, mute and try again
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, [bundle?.id, videoUrl]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!bundle) return null;

  const savingsPercent =
    bundle.originalPrice && bundle.originalPrice > bundle.price
      ? Math.round(((bundle.originalPrice - bundle.price) / bundle.originalPrice) * 100)
      : null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-2xl p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
    >
      {/* Background click dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Centering wrapper: items-start with comfortable top padding prevents clipping */}
      <div className="min-h-full flex items-start justify-center pt-4 sm:pt-8 pb-12 relative pointer-events-none">
        
        <div className="pointer-events-auto relative w-full max-w-4xl glass-panel rounded-3xl overflow-hidden border border-white/15 z-10 shadow-[0_25px_80px_rgba(0,0,0,0.95)]">
          
          {/* Close Button with high z-index */}
          <button
            onClick={onClose}
            type="button"
            title="Close (Esc)"
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/80 hover:bg-black text-slate-200 hover:text-white border border-white/20 transition-all hover:scale-110 cursor-pointer shadow-xl backdrop-blur-md"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Media Header: ALWAYS DISPLAY VIDEO (NEVER COVER ART) */}
          <div className="relative w-full aspect-video max-h-[55vh] bg-black overflow-hidden flex items-center justify-center">
            {ytEmbed ? (
              <iframe
                src={ytEmbed}
                title={`${bundle.title} Gameplay Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0 aspect-video"
              />
            ) : (
              <video
                ref={videoRef}
                key={videoUrl}
                src={videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full max-h-[55vh] object-contain bg-black"
              >
                Your browser does not support the video tag.
              </video>
            )}

            {/* Video Indicator Pill */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-amber-500/40 text-amber-400 text-xs font-bold font-gaming shadow-lg">
              <Video className="w-3.5 h-3.5 text-amber-400" />
              <span>GAMEPLAY TRAILER</span>
            </div>
          </div>

          {/* Modal Details Body */}
          <div className="p-6 sm:p-8 bg-[#090c15]">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-white/10 pb-6">
              <div>
                {bundle.category && (
                  <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
                    {bundle.category}
                  </span>
                )}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-gaming mt-1 mb-2">
                  {bundle.title}
                </h2>
                <div className="flex items-center gap-3 text-xs text-slate-400 flex-wrap">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Gamepad2 className="w-4 h-4 text-amber-400" />
                    <strong className="text-white">
                      {bundle.gameCount > 1 ? bundle.gameCount.toLocaleString('en-IN') : 'Steam Unlock'}
                    </strong>{' '}
                    {bundle.gameCount > 1 ? 'Total Games' : 'Feature'}
                  </span>
                  <span>•</span>
                  <span className="text-emerald-400 font-medium">Instant Digital Delivery</span>
                  <span>•</span>
                  <span>Lifetime Vault Access</span>
                </div>
              </div>

              {/* Price Box */}
              <div className="shrink-0 glass-card p-4 rounded-2xl border border-amber-500/30 text-left md:text-right">
                <div className="text-[11px] text-slate-400 uppercase font-semibold">Special Vault Price</div>
                <div className="flex items-baseline md:justify-end gap-2.5">
                  <span className="text-3xl sm:text-4xl font-black text-white font-gaming">
                    ₹{bundle.price.toLocaleString('en-IN')}
                  </span>
                  {bundle.originalPrice && (
                    <span className="text-base text-slate-500 line-through">
                      ₹{bundle.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
                {savingsPercent && (
                  <div className="text-xs text-emerald-400 font-semibold mt-1">
                    Instant savings of {savingsPercent}% off retail
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-gaming mb-2">
                Bundle Overview
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {bundle.fullDescription || bundle.shortDescription || 'Exclusive premium PC gaming collection.'}
              </p>
            </div>

            {/* Popular Titles in this Bundle Showcase */}
            {bundle.popularTitlesPreview && bundle.popularTitlesPreview.length > 0 && (
              <div className="mb-8 p-4 rounded-2xl bg-[#090d19]/90 border border-amber-500/30 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    <h3 className="text-sm font-black uppercase tracking-wider text-white font-gaming">
                      TOP POPULAR BLOCKBUSTERS INCLUDED
                    </h3>
                  </div>
                  <span className="text-xs text-amber-400/90 font-medium font-sans">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-2">
                        <span className="text-[11px] font-bold text-white leading-tight drop-shadow line-clamp-1">
                          {game.title}
                        </span>
                        {game.genre && (
                          <span className="text-[9px] text-amber-300 font-medium">
                            {game.genre}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Included Games / Items list */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-gaming">
                  Included Games & Features ({bundle.includedItems?.length || 0})
                </h3>
                <span className="text-xs text-slate-400">Lifetime access guaranteed</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-60 overflow-y-auto pr-1">
                {(bundle.includedItems || []).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-500/20 text-xs sm:text-sm text-slate-200 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-medium truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Order Box */}
            <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-left">
                <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase font-gaming">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>How Instant Purchase Works:</span>
                </div>
                <p className="text-xs text-slate-300">
                  1. Click "Claim on Instagram" to message us directly on Instagram.<br />
                  2. Pay via UPI, Google Pay, PhonePe, or Paytm.<br />
                  3. Receive full credentials and lifetime installation guide in 3-5 minutes!
                </p>
              </div>
              
              <div className="shrink-0 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Refund & Setup Guarantee</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-4">
              <button
                onClick={onClose}
                type="button"
                className="w-full sm:w-auto px-6 py-3 rounded-xl glass-card text-slate-300 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                Back to Bundles
              </button>

              <button
                onClick={() => {
                  openInstagram(settings.instagramUrl, bundle.title, bundle.price);
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer font-gaming"
              >
                <Instagram className="w-5 h-5 text-black" />
                <span>Claim on Instagram (₹{bundle.price})</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
