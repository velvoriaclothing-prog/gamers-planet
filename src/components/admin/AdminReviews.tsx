import React, { useState, useRef } from 'react';
import { Upload, Trash2, Eye, EyeOff, ArrowUp, ArrowDown, Star, AlertTriangle, CheckCircle2, Loader2, X, Plus, Image as ImageIcon, Edit3 } from 'lucide-react';
import { ReviewScreenshot } from '../../types/index.js';
import { api } from '../../utils/api.js';

interface AdminReviewsProps {
  reviews: ReviewScreenshot[];
  onRefresh: () => void;
}

interface SelectedFileItem {
  file: File;
  previewUrl: string;
  isValid: boolean;
  error?: string;
}

export const AdminReviews: React.FC<AdminReviewsProps> = ({ reviews, onRefresh }) => {
  const [selectedFiles, setSelectedFiles] = useState<SelectedFileItem[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [defaultNote, setDefaultNote] = useState('Verified buyer review & delivery proof');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Edit review state
  const [editingReview, setEditingReview] = useState<ReviewScreenshot | null>(null);
  const [deleteCandidate, setDeleteCandidate] = useState<ReviewScreenshot | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // File validation
  const validateFile = (file: File): { isValid: boolean; error?: string } => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const fileName = file.name.toLowerCase();

    const hasValidExt = validExtensions.some(ext => fileName.endsWith(ext));
    if (!validTypes.includes(file.type) && !hasValidExt) {
      return { isValid: false, error: 'Unsupported format (only JPG, JPEG, PNG, WebP allowed)' };
    }

    if (file.size > 15 * 1024 * 1024) {
      return { isValid: false, error: 'File size exceeds 15MB limit' };
    }

    return { isValid: true };
  };

  const handleFilesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const files = Array.from(e.target.files);
    if (selectedFiles.length + files.length > 100) {
      setStatusMessage({
        type: 'error',
        text: `Cannot select more than 100 files in one batch. You currently have ${selectedFiles.length} and tried to add ${files.length}.`
      });
      return;
    }

    const newItems: SelectedFileItem[] = files.map((file) => {
      const validation = validateFile(file);
      return {
        file,
        previewUrl: URL.createObjectURL(file),
        isValid: validation.isValid,
        error: validation.error
      };
    });

    setSelectedFiles((prev) => [...prev, ...newItems]);
    setStatusMessage(null);

    // reset input so same files can be re-selected if removed
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeSelectedFile = (index: number) => {
    setSelectedFiles((prev) => {
      const copy = [...prev];
      URL.revokeObjectURL(copy[index].previewUrl);
      copy.splice(index, 1);
      return copy;
    });
  };

  const clearAllSelected = () => {
    selectedFiles.forEach((item) => URL.revokeObjectURL(item.previewUrl));
    setSelectedFiles([]);
  };

  // Perform Batch Upload
  const handleBatchUpload = async () => {
    const validFilesToUpload = selectedFiles.filter(item => item.isValid).map(item => item.file);
    if (validFilesToUpload.length === 0) {
      setStatusMessage({ type: 'error', text: 'No valid image files to upload.' });
      return;
    }

    setIsUploading(true);
    setUploadProgress(20);
    setStatusMessage(null);

    try {
      setUploadProgress(50);
      const res = await api.uploadReviewsBatch(validFilesToUpload, true, defaultNote);
      setUploadProgress(100);

      setStatusMessage({
        type: 'success',
        text: `Successfully uploaded ${res.count} review screenshots to the gallery!`
      });

      clearAllSelected();
      onRefresh();
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: err.message || 'Batch screenshot upload failed. Please verify image sizes.'
      });
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

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
      setStatusMessage({ type: 'success', text: 'Review screenshot deleted.' });
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

  // Save Edit
  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingReview) return;
    try {
      await api.updateReview(editingReview.id, {
        customerHandle: editingReview.customerHandle,
        title: editingReview.title,
        note: editingReview.note,
        rating: editingReview.rating,
      });
      setEditingReview(null);
      setStatusMessage({ type: 'success', text: 'Review entry updated.' });
      onRefresh();
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: 'Failed to update review entry.' });
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-white/10">
        <h3 className="text-xl font-bold text-white font-gaming">
          CUSTOMER PROOF & REVIEW SCREENSHOTS
        </h3>
        <p className="text-xs text-slate-400">
          Upload up to 100 customer feedback screenshots in one batch (JPG, PNG, WebP). Reorder, edit handles, or toggle visibility.
        </p>
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
          <button onClick={() => setStatusMessage(null)}>
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Batch Upload Area */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-dashed border-white/20 hover:border-amber-500/50 transition-colors">
        <div className="text-center max-w-xl mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto mb-4">
            <Upload className="w-7 h-7" />
          </div>
          <h4 className="text-lg font-bold text-white font-gaming mb-1">
            Batch Upload Review Screenshots
          </h4>
          <p className="text-xs text-slate-400 mb-4">
            Supports batch upload of up to 100 screenshots at once. Formats: JPG, JPEG, PNG, WebP (up to 15MB each).
          </p>

          <input
            type="file"
            ref={fileInputRef}
            multiple
            accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
            onChange={handleFilesSelected}
            className="hidden"
            id="batchUploadInput"
          />

          <label
            htmlFor="batchUploadInput"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm cursor-pointer shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Select Screenshots (Up to 100 files)</span>
          </label>
        </div>

        {/* Selected Files Staging Area */}
        {selectedFiles.length > 0 && (
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <span className="text-sm font-bold text-white font-gaming">
                  Staged Batch: {selectedFiles.length} file(s) selected
                </span>
                <span className="text-xs text-slate-400 block">
                  {selectedFiles.filter(f => f.isValid).length} ready for upload
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={clearAllSelected}
                  className="px-3 py-1.5 rounded-lg glass-card text-xs text-slate-400 hover:text-white"
                >
                  Clear Selection
                </button>
                <button
                  type="button"
                  disabled={isUploading || selectedFiles.filter(f => f.isValid).length === 0}
                  onClick={handleBatchUpload}
                  className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Uploading {uploadProgress}%...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Upload All {selectedFiles.filter(f => f.isValid).length} Screenshots</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Default Note config */}
            <div className="mb-4">
              <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                Default Caption / Note applied to newly uploaded screenshots:
              </label>
              <input
                type="text"
                value={defaultNote}
                onChange={(e) => setDefaultNote(e.target.value)}
                className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white"
                placeholder="e.g. Verified buyer review & delivery proof"
              />
            </div>

            {/* Thumbnail Preview Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 max-h-72 overflow-y-auto p-2 bg-black/40 rounded-2xl border border-white/5">
              {selectedFiles.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative group rounded-xl overflow-hidden aspect-square border ${
                    item.isValid ? 'border-white/10' : 'border-red-500 bg-red-950/30'
                  }`}
                >
                  <img
                    src={item.previewUrl}
                    alt={item.file.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-1 text-center">
                    <span className="text-[10px] text-white truncate max-w-full">
                      {item.file.name}
                    </span>
                    <span className="text-[9px] text-slate-400">
                      {(item.file.size / 1024).toFixed(0)} KB
                    </span>
                    <button
                      type="button"
                      onClick={() => removeSelectedFile(idx)}
                      className="mt-1 p-1 rounded bg-red-500/80 hover:bg-red-500 text-white"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                  {!item.isValid && (
                    <div className="absolute top-1 right-1 p-0.5 rounded-full bg-red-500 text-white" title={item.error}>
                      <AlertTriangle className="w-3 h-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Current Reviews List */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-base font-bold text-white font-gaming">
            Uploaded Proof Gallery ({reviews.length})
          </h4>
          <span className="text-xs text-slate-400">
            Use arrows to reorder • Eye icon to hide/show from public store
          </span>
        </div>

        {reviews.length === 0 ? (
          <div className="glass-card p-8 rounded-2xl text-center text-xs text-slate-400">
            No customer reviews uploaded yet. Use the upload box above to add screenshots.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review, idx) => (
              <div
                key={review.id}
                className={`glass-card p-3 rounded-2xl flex gap-3 border transition-all ${
                  review.hidden ? 'border-red-500/30 opacity-60' : 'border-white/10'
                }`}
              >
                {/* Image */}
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-black shrink-0 relative">
                  <img
                    src={review.imageUrl}
                    alt={review.title || 'Review screenshot'}
                    className="w-full h-full object-cover"
                  />
                  {review.hidden && (
                    <div className="absolute inset-0 bg-red-950/70 flex items-center justify-center">
                      <EyeOff className="w-4 h-4 text-red-300" />
                    </div>
                  )}
                </div>

                {/* Details & Actions */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-xs font-bold text-white truncate">
                        {review.customerHandle || '@buyer'}
                      </span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-2.5 h-2.5 ${
                              i < (review.rating || 5)
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      {review.note || review.title || 'Screenshot proof'}
                    </p>
                  </div>

                  {/* Actions bar */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
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
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Review Modal */}
      {editingReview && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="glass-panel p-6 rounded-2xl max-w-md w-full border border-white/15">
            <h4 className="text-base font-bold text-white font-gaming mb-4">
              Edit Review Entry
            </h4>
            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1">Customer Instagram / Handle</label>
                <input
                  type="text"
                  value={editingReview.customerHandle || ''}
                  onChange={(e) => setEditingReview({ ...editingReview, customerHandle: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white"
                  placeholder="@gamer_99"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Short Title</label>
                <input
                  type="text"
                  value={editingReview.title || ''}
                  onChange={(e) => setEditingReview({ ...editingReview, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white"
                  placeholder="Instant delivery in 4 mins!"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Customer Note / Feedback</label>
                <textarea
                  rows={3}
                  value={editingReview.note || ''}
                  onChange={(e) => setEditingReview({ ...editingReview, note: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Rating (1 to 5 Stars)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={editingReview.rating || 5}
                  onChange={(e) => setEditingReview({ ...editingReview, rating: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setEditingReview(null)}
                  className="px-4 py-2 rounded-xl glass-card text-xs text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-amber-500 text-black font-bold text-xs"
                >
                  Save Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {deleteCandidate && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="glass-panel p-6 rounded-2xl max-w-sm w-full border border-red-500/30 text-center">
            <AlertTriangle className="w-10 h-10 text-red-400 mx-auto mb-3" />
            <h4 className="text-base font-bold text-white font-gaming mb-2">Delete Review Screenshot?</h4>
            <p className="text-xs text-slate-300 mb-5">
              This screenshot will be permanently deleted from the customer proof gallery.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setDeleteCandidate(null)}
                className="px-4 py-2 rounded-xl glass-card text-xs text-slate-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-5 py-2 rounded-xl bg-red-600 text-white font-bold text-xs"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
