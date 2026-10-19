import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Upload, Video, Image as ImageIcon, Eye, Check, X, AlertTriangle, Loader2 } from 'lucide-react';
import { Bundle, SiteSettings } from '../../types/index.js';
import { api } from '../../utils/api.js';
import { MediaUploadInput } from './MediaUploadInput.js';

interface AdminBundlesProps {
  bundles: Bundle[];
  settings: SiteSettings;
  onRefresh: () => void;
}

export const AdminBundles: React.FC<AdminBundlesProps> = ({
  bundles,
  settings,
  onRefresh,
}) => {
  const [editingBundle, setEditingBundle] = useState<Partial<Bundle> | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [deleteCandidate, setDeleteCandidate] = useState<Bundle | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploadingMedia, setUploadingMedia] = useState<'cover' | 'video' | null>(null);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Form fields helper
  const handleOpenNew = () => {
    setIsNew(true);
    setEditingBundle({
      title: '',
      price: 499,
      originalPrice: 1999,
      gameCount: 5,
      shortDescription: '',
      fullDescription: '',
      coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
      videoPreview: '',
      includedItems: ['Game Title 1 (Deluxe)', 'Game Title 2 (GOTY)'],
      category: 'Action RPG',
      badge: 'FEATURED',
      active: true,
    });
  };

  const handleOpenEdit = (bundle: Bundle) => {
    setIsNew(false);
    setEditingBundle({ ...bundle });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'cover' | 'video') => {
    const file = e.target.files?.[0];
    if (!file || !editingBundle) return;

    setUploadingMedia(type);
    try {
      const res = await api.uploadBundleFile(file);
      if (type === 'cover') {
        setEditingBundle((prev) => ({ ...prev!, coverImage: res.fileUrl }));
      } else {
        setEditingBundle((prev) => ({ ...prev!, videoPreview: res.fileUrl }));
      }
      setStatusMessage({ type: 'success', text: `Uploaded ${file.name} successfully!` });
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err.message || 'File upload failed' });
    } finally {
      setUploadingMedia(null);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBundle || !editingBundle.title || editingBundle.price === undefined) {
      setStatusMessage({ type: 'error', text: 'Title and Price are required.' });
      return;
    }

    setSaving(true);
    setStatusMessage(null);

    try {
      if (isNew) {
        await api.createBundle(editingBundle);
        setStatusMessage({ type: 'success', text: 'New bundle created and published to vault!' });
      } else if (editingBundle.id) {
        await api.updateBundle(editingBundle.id, editingBundle);
        setStatusMessage({ type: 'success', text: 'Bundle updated successfully!' });
      }
      setEditingBundle(null);
      onRefresh();
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err.message || 'Failed to save bundle.' });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteCandidate) return;
    try {
      await api.deleteBundle(deleteCandidate.id);
      setDeleteCandidate(null);
      setStatusMessage({ type: 'success', text: 'Bundle removed from database.' });
      onRefresh();
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err.message || 'Failed to delete bundle.' });
    }
  };

  return (
    <div className="space-y-8">
      {/* Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <h3 className="text-xl font-bold text-white font-gaming">
            BUNDLE VAULT MANAGEMENT
          </h3>
          <p className="text-xs text-slate-400">
            Create, update pricing in ₹ INR, upload cover art/gameplay videos, and manage included game titles.
          </p>
        </div>
        <button
          onClick={handleOpenNew}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Bundle</span>
        </button>
      </div>

      {/* Notifications */}
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

      {/* Bundles Table / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bundles.map((bundle) => (
          <div
            key={bundle.id}
            className={`glass-card rounded-2xl overflow-hidden flex flex-col justify-between border ${
              bundle.active ? 'border-white/10' : 'border-red-500/30 opacity-70'
            }`}
          >
            <div className="relative aspect-[16/9] bg-black">
              <img
                src={bundle.coverImage}
                alt={bundle.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop';
                }}
              />
              <div className="absolute top-2 left-2 flex items-center gap-1.5">
                {bundle.badge && (
                  <span className="px-2 py-0.5 rounded bg-amber-500 text-black text-[10px] font-extrabold font-gaming">
                    {bundle.badge}
                  </span>
                )}
                {!bundle.active && (
                  <span className="px-2 py-0.5 rounded bg-red-500/80 text-white text-[10px] font-bold">
                    Draft / Inactive
                  </span>
                )}
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[11px] text-amber-400 font-bold">
                ₹{bundle.price}
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[10px] uppercase font-semibold text-amber-400/80 mb-1">
                  {bundle.category || 'Game Bundle'} • {bundle.gameCount > 1 ? `${bundle.gameCount.toLocaleString('en-IN')} Games` : 'Steam Unlock'}
                </div>
                <h4 className="text-base font-bold text-white font-gaming mb-1">
                  {bundle.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                  {bundle.shortDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  {bundle.includedItems.length} items listed
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenEdit(bundle)}
                    title="Edit Bundle"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setDeleteCandidate(bundle)}
                    title="Delete Bundle"
                    className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit / Create Bundle Modal */}
      {editingBundle && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in">
          <div className="fixed inset-0" onClick={() => setEditingBundle(null)} />
          
          <div className="relative w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 z-10 border border-white/15 my-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <h4 className="text-xl font-bold text-white font-gaming">
                {isNew ? 'Create New Game Bundle' : `Edit: ${editingBundle.title}`}
              </h4>
              <button
                onClick={() => setEditingBundle(null)}
                className="p-2 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-5">
              {/* Title & Badge */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Bundle Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingBundle.title || ''}
                    onChange={(e) => setEditingBundle({ ...editingBundle, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-white"
                    placeholder="e.g. Cyberpunk & Sci-Fi AAA Titan Vault"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Badge / Tag
                  </label>
                  <input
                    type="text"
                    value={editingBundle.badge || ''}
                    onChange={(e) => setEditingBundle({ ...editingBundle, badge: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-white"
                    placeholder="e.g. BEST VALUE"
                  />
                </div>
              </div>

              {/* Price, Original Price, Game Count, Category */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Price (₹ INR) *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={editingBundle.price ?? ''}
                    onChange={(e) => setEditingBundle({ ...editingBundle, price: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Original Price (₹)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={editingBundle.originalPrice ?? ''}
                    onChange={(e) => setEditingBundle({ ...editingBundle, originalPrice: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Game Count
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={editingBundle.gameCount ?? ''}
                    onChange={(e) => setEditingBundle({ ...editingBundle, gameCount: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    value={editingBundle.category || ''}
                    onChange={(e) => setEditingBundle({ ...editingBundle, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-white"
                    placeholder="e.g. Hardcore RPG"
                  />
                </div>
              </div>

              {/* Short Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Short Description (Card view)
                </label>
                <input
                  type="text"
                  value={editingBundle.shortDescription || ''}
                  onChange={(e) => setEditingBundle({ ...editingBundle, shortDescription: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-white"
                  placeholder="A concise 1-2 sentence overview for the card"
                />
              </div>

              {/* Full Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Detailed Description (Modal view)
                </label>
                <textarea
                  rows={3}
                  value={editingBundle.fullDescription || ''}
                  onChange={(e) => setEditingBundle({ ...editingBundle, fullDescription: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-white"
                  placeholder="Detailed breakdown of expansions, setup instructions, and specs"
                />
              </div>

              {/* Included Items / Games */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Included Games & Items (one title per line)
                </label>
                <textarea
                  rows={4}
                  value={Array.isArray(editingBundle.includedItems) ? editingBundle.includedItems.join('\n') : ''}
                  onChange={(e) =>
                    setEditingBundle({
                      ...editingBundle,
                      includedItems: e.target.value.split('\n').filter((s) => s.trim().length > 0)
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm font-mono text-white"
                  placeholder={"Cyberpunk 2077 + Phantom Liberty\nDead Space Remake\nStarfield Premium Edition"}
                />
                <span className="text-[11px] text-slate-500">
                  Each line will appear as an individual item with a checkmark in the bundle modal.
                </span>
              </div>

              {/* Media Uploads: Cover Image & Video Preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <MediaUploadInput
                  label="Bundle Cover Image"
                  accept="image/*"
                  value={editingBundle.coverImage || ''}
                  onChange={(url) => setEditingBundle({ ...editingBundle, coverImage: url })}
                  category="bundles"
                  placeholder="Upload cover image or enter URL..."
                  helpText="Image automatically saves to vault storage & commits to GitHub permanently."
                  required
                />

                <MediaUploadInput
                  label="Gameplay Video Preview / Trailer"
                  accept="video/*"
                  value={editingBundle.videoPreview || ''}
                  onChange={(url) => setEditingBundle({ ...editingBundle, videoPreview: url })}
                  category="bundles"
                  placeholder="Upload MP4/WebM video or enter URL..."
                  helpText="Video previews loop in bundle modals and card hover previews. Stored permanently in GitHub."
                />
              </div>

              {/* Status Toggle */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="activeCheck"
                  checked={editingBundle.active ?? true}
                  onChange={(e) => setEditingBundle({ ...editingBundle, active: e.target.checked })}
                  className="w-4 h-4 rounded text-amber-500 bg-black border-white/20"
                />
                <label htmlFor="activeCheck" className="text-xs font-medium text-slate-200 cursor-pointer">
                  Bundle Active (visible on public store)
                </label>
              </div>

              {/* Form buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingBundle(null)}
                  className="px-5 py-2.5 rounded-xl glass-card text-xs sm:text-sm text-slate-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                >
                  {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                  <span>{isNew ? 'Create Bundle' : 'Save Changes'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteCandidate && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="glass-panel p-6 rounded-2xl max-w-md w-full border border-red-500/30 text-center">
            <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white font-gaming mb-2">Delete Bundle?</h4>
            <p className="text-xs text-slate-300 mb-6">
              Are you sure you want to permanently delete <strong className="text-white">{deleteCandidate.title}</strong>? This action cannot be undone.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setDeleteCandidate(null)}
                className="px-4 py-2 rounded-xl glass-card text-xs font-semibold text-slate-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-md cursor-pointer"
              >
                Yes, Delete Bundle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
