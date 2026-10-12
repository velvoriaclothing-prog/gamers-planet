import React, { useState, useMemo } from 'react';
import { Trash2, Eye, EyeOff, ArrowUp, ArrowDown, Star, AlertTriangle, CheckCircle2, Loader2, X, Plus, Edit3, Search, MapPin, Gamepad2, ShieldCheck } from 'lucide-react';
import { ReviewScreenshot } from '../../types/index.js';
import { api } from '../../utils/api.js';

interface AdminReviewsProps {
  reviews: ReviewScreenshot[];
  onRefresh: () => void;
}

const getInitials = (name?: string): string => {
  if (!name) return 'GP';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

export const AdminReviews: React.FC<AdminReviewsProps> = ({ reviews, onRefresh }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // New review modal state
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newReview, setNewReview] = useState<Partial<ReviewScreenshot>>({
    reviewerName: '',
    customerHandle: '',
    location: '',
    gameTitle: '',
    rating: 5,
    title: '',
    note: '',
    hidden: false,
    order: 0
  });

  // Edit review state
  const [editingReview, setEditingReview] = useState<ReviewScreenshot | null>(null);
  const [deleteCandidate, setDeleteCandidate] = useState<ReviewScreenshot | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Filtered reviews in admin
  const filteredReviews = useMemo(() => {
    if (!searchQuery.trim()) return reviews;
    const q = searchQuery.toLowerCase().trim();
    return reviews.filter(
      r =>
        (r.reviewerName || '').toLowerCase().includes(q) ||
        (r.customerHandle || '').toLowerCase().includes(q) ||
        (r.location || '').toLowerCase().includes(q) ||
        (r.gameTitle || '').toLowerCase().includes(q) ||
        (r.note || '').toLowerCase().includes(q)
    );
  }, [reviews, searchQuery]);

  // Visibility toggle
  const toggleVisibility = async (review: ReviewScreenshot) => {
    try {
      await api.updateReview(review.id, { hidden: !review.hidden });
      onRefresh();
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: 'Failed to update visibility.' });
    }
  };

  // Delete review
  const handleDelete = async () => {
    if (!deleteCandidate) return;
    try {
      await api.deleteReview(deleteCandidate.id);
      setDeleteCandidate(null);
      setStatusMessage({ type: 'success', text: 'Text review deleted successfully.' });
      onRefresh();
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: 'Failed to delete review.' });
    }
  };

  // Reorder reviews
  const moveReview = async (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= reviews.length) return;

    const ids = reviews.map(r => r.id);
    const temp = ids[index];
    ids[index] = ids[targetIndex];
    ids[targetIndex] = temp;

    try {
      await api.reorderReviews(ids);
      onRefresh();
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: 'Failed to reorder reviews.' });
    }
  };

  // Create new review
  const handleCreateReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.reviewerName && !newReview.note) {
      setStatusMessage({ type: 'error', text: 'Reviewer name and review text are required.' });
      return;
    }

    setIsSaving(true);
    setStatusMessage(null);

    try {
      await api.createReview({
        ...newReview,
        order: reviews.length + 1
      });
      setIsAddingNew(false);
      setNewReview({
        reviewerName: '',
        customerHandle: '',
        location: '',
        gameTitle: '',
        rating: 5,
        title: '',
        note: '',
        hidden: false,
        order: 0
      });
      setStatusMessage({ type: 'success', text: 'New verified Indian text review added successfully!' });
      onRefresh();
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err.message || 'Failed to create review.' });
    } finally {
      setIsSaving(false);
    }
  };

  // Save Edit
  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingReview) return;
    setIsSaving(true);
    try {
      await api.updateReview(editingReview.id, {
        reviewerName: editingReview.reviewerName,
        customerHandle: editingReview.customerHandle,
        location: editingReview.location,
        gameTitle: editingReview.gameTitle,
        title: editingReview.title,
        note: editingReview.note,
        rating: editingReview.rating,
      });
      setEditingReview(null);
      setStatusMessage({ type: 'success', text: 'Review updated successfully.' });
      onRefresh();
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: 'Failed to update review.' });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <h3 className="text-xl font-bold text-white font-gaming">
            CUSTOMER REVIEWS MANAGEMENT ({reviews.length} VERIFIED)
          </h3>
          <p className="text-xs text-slate-400">
            Text-only customer reviews with Indian names and cities. Add new reviews, edit content, toggle visibility, or reorder.
          </p>
        </div>

        <button
          onClick={() => setIsAddingNew(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Review</span>
        </button>
      </div>

      {/* Status banner */}
      {statusMessage && (
        <div
          className={`p-4 rounded-xl text-xs sm:text-sm flex items-center justify-between gap-3 ${
            statusMessage.type === 'success'
              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
              : 'bg-red-500/10 border border-red-500/30 text-red-300'
          }`}
        >
          <span>{statusMessage.text}</span>
          <button onClick={() => setStatusMessage(null)} className="cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Search Bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by reviewer name, city, or note..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-slate-100 placeholder-slate-500"
          />
        </div>
        <div className="text-xs text-slate-400">
          Showing {filteredReviews.length} of {reviews.length} reviews
        </div>
      </div>

      {/* Reviews Grid */}
      {filteredReviews.length === 0 ? (
        <div className="glass-card p-12 rounded-2xl text-center text-xs text-slate-400">
          No customer reviews match your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredReviews.map((review, idx) => {
            const name = review.reviewerName || review.customerHandle?.replace('@', '') || 'Verified Buyer';
            const initials = getInitials(name);

            return (
              <div
                key={review.id}
                className={`glass-card p-4 rounded-2xl flex flex-col justify-between border transition-all ${
                  review.hidden ? 'border-red-500/30 opacity-60' : 'border-white/10'
                }`}
              >
                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-black font-extrabold text-xs shrink-0 font-gaming">
                        {initials}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-white truncate flex items-center gap-1">
                          <span>{name}</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 inline" />
                        </div>
                        <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                          {review.location && <span>{review.location}</span>}
                          {review.customerHandle && (
                            <span className="text-slate-500">{review.customerHandle}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5 shrink-0 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-2.5 h-2.5 ${
                            i < (review.rating || 5)
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Game tag */}
                  {review.gameTitle && (
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 text-[10px] text-amber-300 font-medium mb-2">
                      <Gamepad2 className="w-2.5 h-2.5 text-amber-400" />
                      <span className="truncate">{review.gameTitle}</span>
                    </div>
                  )}

                  {/* Title & Note */}
                  {review.title && (
                    <h5 className="text-xs font-semibold text-slate-200 mb-1 line-clamp-1">
                      "{review.title}"
                    </h5>
                  )}
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-3">
                    {review.note}
                  </p>
                </div>

                {/* Actions bar */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                  {/* Order controls */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => moveReview(idx, 'up')}
                      disabled={idx === 0}
                      title="Move Up"
                      className="p-1 rounded bg-white/5 hover:bg-white/10 disabled:opacity-30 text-slate-300 cursor-pointer"
                    >
                      <ArrowUp className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => moveReview(idx, 'down')}
                      disabled={idx === reviews.length - 1}
                      title="Move Down"
                      className="p-1 rounded bg-white/5 hover:bg-white/10 disabled:opacity-30 text-slate-300 cursor-pointer"
                    >
                      <ArrowDown className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => toggleVisibility(review)}
                      title={review.hidden ? 'Show on website' : 'Hide from website'}
                      className={`p-1.5 rounded text-xs cursor-pointer ${
                        review.hidden
                          ? 'bg-red-500/20 text-red-300'
                          : 'bg-white/5 hover:bg-white/10 text-slate-300'
                      }`}
                    >
                      {review.hidden ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={() => setEditingReview(review)}
                      title="Edit Review Details"
                      className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-300 cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setDeleteCandidate(review)}
                      title="Delete Review"
                      className="p-1.5 rounded bg-red-500/10 hover:bg-red-500/20 text-red-400 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Add New Review Modal */}
      {isAddingNew && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
          <div className="fixed inset-0" onClick={() => setIsAddingNew(false)} />
          <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 z-10 border border-white/15 my-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <h4 className="text-lg font-bold text-white font-gaming">
                Add New Verified Text Review
              </h4>
              <button onClick={() => setIsAddingNew(false)} className="text-slate-400 hover:text-white cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateReview} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Reviewer Name (Indian) *
                  </label>
                  <input
                    type="text"
                    required
                    value={newReview.reviewerName || ''}
                    onChange={(e) => setNewReview({ ...newReview, reviewerName: e.target.value })}
                    placeholder="e.g. Rohan Sharma"
                    className="w-full px-3 py-2 rounded-xl glass-input text-xs sm:text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    value={newReview.location || ''}
                    onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                    placeholder="e.g. New Delhi or Mumbai, MH"
                    className="w-full px-3 py-2 rounded-xl glass-input text-xs sm:text-sm text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Customer Handle (Optional)
                  </label>
                  <input
                    type="text"
                    value={newReview.customerHandle || ''}
                    onChange={(e) => setNewReview({ ...newReview, customerHandle: e.target.value })}
                    placeholder="e.g. @rohan_gamer"
                    className="w-full px-3 py-2 rounded-xl glass-input text-xs sm:text-sm text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Star Rating (1-5)
                  </label>
                  <select
                    value={newReview.rating || 5}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl glass-input text-xs sm:text-sm text-white bg-slate-900"
                  >
                    <option value={5}>5 Stars (★★★★★)</option>
                    <option value={4}>4 Stars (★★★★☆)</option>
                    <option value={3}>3 Stars (★★★☆☆)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Game / Bundle Purchased
                </label>
                <input
                  type="text"
                  value={newReview.gameTitle || ''}
                  onChange={(e) => setNewReview({ ...newReview, gameTitle: e.target.value })}
                  placeholder="e.g. Cyberpunk & Sci-Fi AAA Titan Vault"
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs sm:text-sm text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Review Headline
                </label>
                <input
                  type="text"
                  value={newReview.title || ''}
                  onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                  placeholder="e.g. Delivered in 3 mins on Instagram DM! Smooth gameplay"
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs sm:text-sm text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Verified Review Text *
                </label>
                <textarea
                  required
                  rows={4}
                  value={newReview.note || ''}
                  onChange={(e) => setNewReview({ ...newReview, note: e.target.value })}
                  placeholder="Describe the purchase experience, UPI transfer confirmation, download speeds, and setup guidance..."
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs sm:text-sm text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsAddingNew(false)}
                  className="px-4 py-2 rounded-xl glass-card text-xs text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                >
                  {isSaving && <Loader2 className="w-4 h-4 animate-spin text-black" />}
                  <span>Save Review</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Review Modal */}
      {editingReview && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
          <div className="fixed inset-0" onClick={() => setEditingReview(null)} />
          <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 z-10 border border-white/15 my-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <h4 className="text-lg font-bold text-white font-gaming">
                Edit Review
              </h4>
              <button onClick={() => setEditingReview(null)} className="text-slate-400 hover:text-white cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Reviewer Name
                  </label>
                  <input
                    type="text"
                    value={editingReview.reviewerName || ''}
                    onChange={(e) => setEditingReview({ ...editingReview, reviewerName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl glass-input text-xs sm:text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    value={editingReview.location || ''}
                    onChange={(e) => setEditingReview({ ...editingReview, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl glass-input text-xs sm:text-sm text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Customer Handle
                  </label>
                  <input
                    type="text"
                    value={editingReview.customerHandle || ''}
                    onChange={(e) => setEditingReview({ ...editingReview, customerHandle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl glass-input text-xs sm:text-sm text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Rating (1-5)
                  </label>
                  <select
                    value={editingReview.rating || 5}
                    onChange={(e) => setEditingReview({ ...editingReview, rating: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl glass-input text-xs sm:text-sm text-white bg-slate-900"
                  >
                    <option value={5}>5 Stars (★★★★★)</option>
                    <option value={4}>4 Stars (★★★★☆)</option>
                    <option value={3}>3 Stars (★★★☆☆)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Game / Bundle Title
                </label>
                <input
                  type="text"
                  value={editingReview.gameTitle || ''}
                  onChange={(e) => setEditingReview({ ...editingReview, gameTitle: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs sm:text-sm text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Review Headline
                </label>
                <input
                  type="text"
                  value={editingReview.title || ''}
                  onChange={(e) => setEditingReview({ ...editingReview, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs sm:text-sm text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Review Text
                </label>
                <textarea
                  rows={4}
                  value={editingReview.note || ''}
                  onChange={(e) => setEditingReview({ ...editingReview, note: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs sm:text-sm text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setEditingReview(null)}
                  className="px-4 py-2 rounded-xl glass-card text-xs text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                >
                  {isSaving && <Loader2 className="w-4 h-4 animate-spin text-black" />}
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteCandidate && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="glass-panel p-6 rounded-2xl max-w-sm w-full border border-red-500/30 text-center">
            <AlertTriangle className="w-10 h-10 text-red-400 mx-auto mb-3" />
            <h4 className="text-base font-bold text-white font-gaming mb-2">Delete Review?</h4>
            <p className="text-xs text-slate-300 mb-5">
              Are you sure you want to permanently delete the review by <strong className="text-white">{deleteCandidate.reviewerName || deleteCandidate.customerHandle || 'this buyer'}</strong>?
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setDeleteCandidate(null)}
                className="px-4 py-2 rounded-xl glass-card text-xs text-slate-300 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-5 py-2 rounded-xl bg-red-600 text-white font-bold text-xs cursor-pointer shadow-md"
              >
                Delete Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
