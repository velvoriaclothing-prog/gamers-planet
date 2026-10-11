import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Star, ShieldCheck, Calendar } from 'lucide-react';
import { ReviewScreenshot } from '../types/index.js';

interface LightboxModalProps {
  reviews: ReviewScreenshot[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  reviews,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const currentReview = reviews[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && currentIndex < reviews.length - 1) {
        onNavigate(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, reviews.length, onClose, onNavigate]);

  if (!currentReview) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Close button */}
      <button
        onClick={onClose}
        title="Close Preview (Esc)"
        className="absolute top-4 right-4 z-20 p-3 rounded-full bg-black/70 hover:bg-black text-slate-300 hover:text-white border border-white/10 transition-all hover:scale-110 cursor-pointer"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev / Next buttons */}
      {currentIndex > 0 && (
        <button
          onClick={() => onNavigate(currentIndex - 1)}
          title="Previous Screenshot (Arrow Left)"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 hover:bg-black text-slate-300 hover:text-white border border-white/10 transition-all hover:scale-110 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {currentIndex < reviews.length - 1 && (
        <button
          onClick={() => onNavigate(currentIndex + 1)}
          title="Next Screenshot (Arrow Right)"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 hover:bg-black text-slate-300 hover:text-white border border-white/10 transition-all hover:scale-110 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl max-h-[90vh] w-full flex flex-col md:flex-row glass-panel rounded-3xl overflow-hidden border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
        
        {/* Screenshot View (Left / Main) */}
        <div className="flex-1 bg-black/80 flex items-center justify-center p-2 sm:p-4 max-h-[60vh] md:max-h-[85vh] overflow-hidden">
          <img
            src={currentReview.imageUrl}
            alt={currentReview.title || 'Customer Review Proof'}
            className="max-h-[55vh] md:max-h-[80vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop';
            }}
          />
        </div>

        {/* Info Sidebar (Right) */}
        <div className="w-full md:w-80 p-6 bg-[#090c14] border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Proof {currentIndex + 1} of {reviews.length}
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < (currentReview.rating || 5)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-bold text-xs">
                {currentReview.customerHandle ? currentReview.customerHandle.substring(1, 2).toUpperCase() : 'G'}
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>{currentReview.customerHandle || '@verified_buyer'}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-[11px] text-emerald-400 font-medium">Verified DM Delivery</div>
              </div>
            </div>

            {currentReview.title && (
              <h4 className="text-base font-bold text-white font-gaming mb-2">
                {currentReview.title}
              </h4>
            )}

            {currentReview.note && (
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic bg-white/[0.02] p-3 rounded-xl border border-white/5 mb-4">
                "{currentReview.note}"
              </p>
            )}

            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <Calendar className="w-3.5 h-3.5" />
              <span>
                Verified on {new Date(currentReview.createdAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 mt-6">
            <div className="text-[11px] text-slate-400 text-center">
              All screenshots are genuine WhatsApp / Instagram conversation proofs and payment confirmations.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
