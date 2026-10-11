import React, { useState } from 'react';
import { Star, ShieldCheck, Maximize2, MessageSquare, Instagram, Image as ImageIcon, Sparkles } from 'lucide-react';
import { ReviewScreenshot, SiteSettings } from '../types/index.js';
import { LightboxModal } from './LightboxModal.js';
import { openInstagram } from '../utils/api.js';

interface ReviewGalleryProps {
  reviews: ReviewScreenshot[];
  settings: SiteSettings;
  isAdmin?: boolean;
  onOpenAdmin?: () => void;
}

export const ReviewGallery: React.FC<ReviewGalleryProps> = ({
  reviews,
  settings,
  isAdmin,
  onOpenAdmin,
}) => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  return (
    <section id="reviews" className="py-24 bg-[#07090e]/60 border-t border-b border-white/5 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Genuine Gamer Proof</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-gaming tracking-tight mb-4">
            VERIFIED CUSTOMER REVIEWS & SCREENSHOTS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real order completions, UPI transfer screenshots, and verified messages from fellow PC gamers across India. Click any screenshot for a full-screen view.
          </p>
        </div>

        {/* Gallery Content */}
        {reviews.length === 0 ? (
          <div className="glass-panel rounded-2xl p-12 text-center max-w-md mx-auto">
            <ImageIcon className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2 font-gaming">No Screenshots Uploaded Yet</h3>
            <p className="text-xs text-slate-400 mb-6">
              Screenshot proofs will appear here once verified purchases are completed.
            </p>
            {isAdmin && onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 text-black hover:bg-amber-400 transition-colors cursor-pointer"
              >
                Upload Proof Screenshots in Admin
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                onClick={() => setActiveLightboxIndex(index)}
                className="group glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between border border-white/5 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container with preview hover effect */}
                <div className="relative aspect-[4/3] bg-black overflow-hidden">
                  <img
                    src={review.imageUrl}
                    alt={review.title || `Review screenshot #${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop';
                    }}
                  />

                  {/* Gradient mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e121e] via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity" />

                  {/* Click to expand hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <div className="px-3 py-1.5 rounded-lg bg-amber-500 text-black text-xs font-bold flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Expand Proof</span>
                    </div>
                  </div>

                  {/* Rating Stars top right */}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-0.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < (review.rating || 5)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Caption / Handle body */}
                <div className="p-4 flex-1 flex flex-col justify-between bg-[#0b0e18]/80">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-white truncate max-w-[150px]">
                        {review.customerHandle || '@verified_gamer'}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    </div>

                    {review.title && (
                      <h4 className="text-xs font-semibold text-slate-200 line-clamp-1 mb-1 font-gaming">
                        {review.title}
                      </h4>
                    )}

                    {review.note && (
                      <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                        "{review.note}"
                      </p>
                    )}
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500">
                    <span>
                      {new Date(review.createdAt).toLocaleDateString('en-IN', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="text-amber-400/80 group-hover:text-amber-300 font-medium">
                      View full image →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Customer Proof CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl glass-panel max-w-xl mx-auto">
            <div className="text-left text-xs sm:text-sm text-slate-300">
              <span className="font-bold text-white block">Got questions before ordering?</span>
              Send us a direct message on Instagram — we reply within 3-5 minutes!
            </div>
            <button
              onClick={() => openInstagram(settings.instagramUrl)}
              className="shrink-0 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <Instagram className="w-4 h-4 text-black" />
              <span>DM on Instagram</span>
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox modal when an image is clicked */}
      {activeLightboxIndex !== null && (
        <LightboxModal
          reviews={reviews}
          currentIndex={activeLightboxIndex}
          onClose={() => setActiveLightboxIndex(null)}
          onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
        />
      )}
    </section>
  );
};
