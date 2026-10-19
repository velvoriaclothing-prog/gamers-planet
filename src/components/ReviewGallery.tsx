import React, { useState, useMemo } from 'react';
import { Star, ShieldCheck, MessageSquare, Instagram, Send, PhoneCall, Globe, Sparkles, Search, CheckCircle2, ThumbsUp, MapPin, Gamepad2, ChevronDown, X, Eye, Video as VideoIcon, ExternalLink } from 'lucide-react';
import { ReviewScreenshot, SiteSettings } from '../types/index.js';
import { getChannelRedirectInfo } from '../utils/channelRedirect.js';

interface ReviewGalleryProps {
  reviews: ReviewScreenshot[];
  settings: SiteSettings;
  isAdmin?: boolean;
  onOpenAdmin?: () => void;
}

// Generate consistent avatar color gradients from Indian names
const getAvatarGradient = (name: string): string => {
  const gradients = [
    'from-amber-500 to-orange-600',
    'from-emerald-500 to-teal-700',
    'from-sky-500 to-blue-700',
    'from-purple-500 to-indigo-700',
    'from-rose-500 to-pink-700',
    'from-cyan-500 to-blue-600',
    'from-amber-400 to-yellow-600',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % gradients.length;
  return gradients[index];
};

// Extract initials from Indian names (e.g. "Rohan Sharma" -> "RS")
const getInitials = (name?: string): string => {
  if (!name) return 'GP';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

export const ReviewGallery: React.FC<ReviewGalleryProps> = ({
  reviews,
  settings,
  isAdmin,
  onOpenAdmin,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [starFilter, setStarFilter] = useState<'all' | '5' | '4'>('all');
  const [visibleCount, setVisibleCount] = useState(12);
  const [activeProofMedia, setActiveProofMedia] = useState<{ url: string; title: string; isVideo: boolean } | null>(null);

  // Filtered reviews
  const filteredReviews = useMemo(() => {
    return reviews.filter((r) => {
      // Star filter
      if (starFilter === '5' && (r.rating || 5) < 5) return false;
      if (starFilter === '4' && (r.rating || 5) < 4) return false;

      // Text query search
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const matchName = (r.reviewerName || '').toLowerCase().includes(q);
      const matchHandle = (r.customerHandle || '').toLowerCase().includes(q);
      const matchLocation = (r.location || '').toLowerCase().includes(q);
      const matchGame = (r.gameTitle || '').toLowerCase().includes(q);
      const matchTitle = (r.title || '').toLowerCase().includes(q);
      const matchNote = (r.note || '').toLowerCase().includes(q);

      return matchName || matchHandle || matchLocation || matchGame || matchTitle || matchNote;
    });
  }, [reviews, searchQuery, starFilter]);

  const displayedReviews = useMemo(() => {
    return filteredReviews.slice(0, visibleCount);
  }, [filteredReviews, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <section id="reviews" className="py-24 bg-[#07090e]/80 border-t border-b border-white/5 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Genuine Text Reviews from Indian Gamers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-gaming tracking-tight mb-4">
            VERIFIED INDIAN CUSTOMER REVIEWS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real feedback from PC gamers across New Delhi, Mumbai, Bengaluru, Kolkata, Pune, and all states in India. Direct UPI orders delivered within minutes via Instagram DM.
          </p>
        </div>

        {/* Trust Badges & Aggregate Score */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          <div className="glass-card p-4 rounded-2xl text-center border border-white/5">
            <div className="flex items-center justify-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-amber-400 font-gaming mb-1">
              <span>4.9</span>
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-xs text-slate-400 font-medium">Average Gamer Rating</div>
          </div>

          <div className="glass-card p-4 rounded-2xl text-center border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-gaming mb-1">
              {reviews.length > 0 ? `${reviews.length}+` : '65+'}
            </div>
            <div className="text-xs text-slate-400 font-medium">Verified Text Testimonials</div>
          </div>

          <div className="glass-card p-4 rounded-2xl text-center border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-gaming mb-1">
              &lt; 4 Mins
            </div>
            <div className="text-xs text-slate-400 font-medium">Average DM Delivery Time</div>
          </div>

          <div className="glass-card p-4 rounded-2xl text-center border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-gaming mb-1">
              100%
            </div>
            <div className="text-xs text-slate-400 font-medium">Clean & Virus-Free Files</div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(12);
              }}
              placeholder="Search by name, city, or game..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
            />
          </div>

          {/* Rating filter pills */}
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto scrollbar-none">
            <button
              onClick={() => { setStarFilter('all'); setVisibleCount(12); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                starFilter === 'all'
                  ? 'bg-amber-500 text-black font-bold shadow-md'
                  : 'glass-card text-slate-300 hover:text-white'
              }`}
            >
              All Reviews ({reviews.length})
            </button>

            <button
              onClick={() => { setStarFilter('5'); setVisibleCount(12); }}
              className={`flex items-center gap-1 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                starFilter === '5'
                  ? 'bg-amber-500 text-black font-bold shadow-md'
                  : 'glass-card text-slate-300 hover:text-white'
              }`}
            >
              <Star className="w-3 h-3 fill-current" />
              <span>5 Stars Only</span>
            </button>

            {isAdmin && onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="px-3.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Manage Reviews
              </button>
            )}
          </div>
        </div>

        {/* Text Reviews Grid */}
        {displayedReviews.length === 0 ? (
          <div className="glass-panel rounded-2xl p-12 text-center max-w-md mx-auto my-12">
            <MessageSquare className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2 font-gaming">No Matching Reviews</h3>
            <p className="text-xs text-slate-400 mb-6">
              {searchQuery
                ? `No reviews matching "${searchQuery}". Try a different name, city, or game.`
                : 'No reviews available at the moment.'}
            </p>
            {isAdmin && onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 text-black hover:bg-amber-400 transition-colors cursor-pointer"
              >
                Add Text Review in Admin
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {displayedReviews.map((review, idx) => {
              const name = review.reviewerName || review.customerHandle?.replace('@', '') || 'Verified Gamer';
              const initials = getInitials(name);
              const gradientClass = getAvatarGradient(name);
              const rating = review.rating || 5;

              return (
                <div
                  key={review.id || idx}
                  className="bg-[#090d18]/90 rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-0.5 shadow-md group relative"
                >
                  <div>
                    {/* User Header with Avatar & Details */}
                    <div className="flex items-start justify-between gap-2.5 mb-3">
                      <div className="flex items-center gap-3">
                        {/* Gradient Initials Circle */}
                        <div
                          className={`w-11 h-11 rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center text-white font-extrabold text-sm shadow-md font-gaming shrink-0`}
                        >
                          {initials}
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                              {name}
                            </h4>
                            <span title="Verified Buyer" className="text-emerald-400">
                              <CheckCircle2 className="w-3.5 h-3.5 inline" />
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-[11px] text-slate-400">
                            {review.location && (
                              <span className="flex items-center gap-0.5 text-slate-400">
                                <MapPin className="w-2.5 h-2.5 text-slate-500" />
                                <span>{review.location}</span>
                              </span>
                            )}
                            {review.customerHandle && (
                              <span className="text-slate-500 font-mono">
                                {review.customerHandle}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Star Rating */}
                      <div className="flex items-center gap-0.5 shrink-0 bg-black/40 px-2 py-1 rounded-md border border-white/5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-slate-700'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Game Purchased Badge */}
                    {review.gameTitle && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-amber-300 font-medium mb-3">
                        <Gamepad2 className="w-3 h-3 text-amber-400" />
                        <span className="truncate max-w-[240px]">{review.gameTitle}</span>
                      </div>
                    )}

                    {/* Review Title */}
                    {review.title && (
                      <h5 className="text-sm font-semibold text-slate-200 mb-2 leading-snug">
                        "{review.title}"
                      </h5>
                    )}

                    {/* Review Body */}
                    {review.note && (
                      <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-3">
                        {review.note}
                      </p>
                    )}

                    {/* Proof Media (Screenshot / Video) */}
                    {review.imageUrl && (
                      <div className="mt-2 mb-1">
                        {(() => {
                          const isVid = /\.(mp4|webm|mov|mkv|avi)(\?.*)?$/i.test(review.imageUrl) || review.imageUrl.includes('/video');
                          return (
                            <button
                              type="button"
                              onClick={() =>
                                setActiveProofMedia({
                                  url: review.imageUrl!,
                                  title: review.title || review.reviewerName || 'Order Proof',
                                  isVideo: isVid
                                })
                              }
                              className="group/proof relative w-full h-32 rounded-xl overflow-hidden bg-black/60 border border-white/10 hover:border-amber-400/60 transition-all flex items-center justify-center cursor-pointer shadow-inner"
                            >
                              {isVid ? (
                                <video
                                  src={review.imageUrl}
                                  className="w-full h-full object-cover opacity-80 group-hover/proof:opacity-100 transition-opacity"
                                  preload="metadata"
                                />
                              ) : (
                                <img
                                  src={review.imageUrl}
                                  alt="Order Proof"
                                  className="w-full h-full object-cover opacity-85 group-hover/proof:opacity-100 group-hover/proof:scale-105 transition-all duration-300"
                                  onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                                  }}
                                />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2 justify-between">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] text-amber-300 font-semibold border border-white/10">
                                  {isVid ? <VideoIcon className="w-2.5 h-2.5" /> : <Eye className="w-2.5 h-2.5" />}
                                  <span>{isVid ? 'Watch Video Proof' : 'View Screenshot'}</span>
                                </span>
                                <span className="text-[10px] text-slate-400 group-hover/proof:text-white">
                                  Click to enlarge
                                </span>
                              </div>
                            </button>
                          );
                        })()}
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Verification & Date */}
                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="inline-flex items-center gap-1 text-emerald-400/90 font-medium text-[11px]">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>Verified UPI / DM Order</span>
                    </span>

                    <span>
                      {review.createdAt
                        ? new Date(review.createdAt).toLocaleDateString('en-IN', {
                            month: 'short',
                            day: 'numeric'
                          })
                        : 'Recent'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {filteredReviews.length > visibleCount && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/10 transition-all cursor-pointer shadow-md hover:border-amber-500/40"
            >
              <span>Load More Reviews (+12)</span>
              <ChevronDown className="w-4 h-4 text-amber-400" />
            </button>
            <div className="text-[11px] text-slate-400 mt-2">
              Showing {displayedReviews.length} of {filteredReviews.length} verified Indian reviews
            </div>
          </div>
        )}

        {/* Customer Proof CTA */}
        <div className="mt-16 text-center">
          {(() => {
            const redirectInfo = getChannelRedirectInfo(settings, { actionType: 'dm' });
            return (
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl glass-panel max-w-xl mx-auto border border-white/10">
                <div className="text-left text-xs sm:text-sm text-slate-300">
                  <span className="font-bold text-white block text-sm">Need help ordering or want custom bundle recommendations?</span>
                  Send us a direct message on {redirectInfo.platformName} — instant reply in 3-5 minutes!
                </div>
                <a
                  href={redirectInfo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md text-center"
                  title={redirectInfo.actionLabel}
                >
                  {redirectInfo.isWhatsApp && <PhoneCall className="w-4 h-4 text-black shrink-0" />}
                  {redirectInfo.isTelegram && <Send className="w-4 h-4 text-black shrink-0" />}
                  {redirectInfo.isInstagram && <Instagram className="w-4 h-4 text-black shrink-0" />}
                  {redirectInfo.isCustom && <Globe className="w-4 h-4 text-black shrink-0" />}
                  <span>{redirectInfo.actionLabel}</span>
                </a>
              </div>
            );
          })()}
        </div>

      </div>

      {/* Proof Media Lightbox Modal */}
      {activeProofMedia && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setActiveProofMedia(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#0b0e18] rounded-3xl border border-white/20 p-4 sm:p-6 flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  {activeProofMedia.isVideo ? <VideoIcon className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-gaming">
                    {activeProofMedia.title}
                  </h4>
                  <span className="text-[10px] text-emerald-400 font-semibold">
                    Verified Customer Proof • Permanent Vault Media
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeProofMedia.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  title="Open original file"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setActiveProofMedia(null)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 min-h-0 flex items-center justify-center overflow-hidden rounded-2xl bg-black border border-white/10">
              {activeProofMedia.isVideo ? (
                <video
                  src={activeProofMedia.url}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[70vh] w-auto max-w-full rounded-xl"
                />
              ) : (
                <img
                  src={activeProofMedia.url}
                  alt={activeProofMedia.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
