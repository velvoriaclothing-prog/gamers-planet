import React, { useState, useEffect } from 'react';
import { useLiveEdit } from './LiveEditContext.js';
import { X, Check, Gamepad2, Sparkles, Tag, DollarSign, Layers } from 'lucide-react';
import { Bundle } from '../../types/index.js';
import { MediaUploadInput } from '../admin/MediaUploadInput.js';

export const BundleQuickEditModal: React.FC = () => {
  const { activeEditBundle, closeBundleQuickEdit, stageBundleChange, getEffectiveBundle } = useLiveEdit();

  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [originalPrice, setOriginalPrice] = useState<number | undefined>(undefined);
  const [badge, setBadge] = useState<string>('');
  const [gameCount, setGameCount] = useState<number>(1);
  const [shortDescription, setShortDescription] = useState<string>('');
  const [coverImage, setCoverImage] = useState<string>('');
  const [videoPreview, setVideoPreview] = useState<string>('');

  useEffect(() => {
    if (activeEditBundle) {
      const effective = getEffectiveBundle(activeEditBundle);
      setTitle(effective.title);
      setPrice(effective.price);
      setOriginalPrice(effective.originalPrice);
      setBadge(effective.badge || '');
      setGameCount(effective.gameCount || 1);
      setShortDescription(effective.shortDescription || '');
      setCoverImage(effective.coverImage || '');
      setVideoPreview(effective.videoPreview || '');
    }
  }, [activeEditBundle, getEffectiveBundle]);

  if (!activeEditBundle) return null;

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeEditBundle) return;

    stageBundleChange(activeEditBundle.id, {
      title: title.trim(),
      price: Number(price) || activeEditBundle.price,
      originalPrice: originalPrice ? Number(originalPrice) : undefined,
      badge: badge.trim() || undefined,
      gameCount: Number(gameCount) || 1,
      shortDescription: shortDescription.trim(),
      coverImage: coverImage.trim() || activeEditBundle.coverImage,
      videoPreview: videoPreview.trim() || undefined
    });

    closeBundleQuickEdit();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0a0f1d] border-2 border-amber-500/70 rounded-3xl p-6 shadow-2xl shadow-amber-500/10 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 font-gaming">
                Live Bundle Quick-Tweak
              </span>
              <h3 className="text-lg font-black font-gaming truncate max-w-xs text-white">
                {title || activeEditBundle.title}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={closeBundleQuickEdit}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleApply} className="space-y-4 text-xs">
          {/* Bundle Title */}
          <div>
            <label className="block text-slate-300 font-bold mb-1 flex items-center gap-1.5">
              <Gamepad2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Bundle Title</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#050811] border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-400 text-sm font-semibold"
              placeholder="e.g. Basic Gaming Bundle"
              required
            />
          </div>

          {/* Pricing Row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-bold mb-1 flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                <span>Live Price (₹ INR)</span>
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full bg-[#050811] border border-emerald-500/50 rounded-xl px-3 py-2 text-emerald-400 font-bold text-base focus:outline-none focus:border-emerald-400"
                placeholder="399"
                required
                min={1}
              />
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-1 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-slate-400" />
                <span>Original Price (₹ INR)</span>
              </label>
              <input
                type="number"
                value={originalPrice || ''}
                onChange={(e) => setOriginalPrice(e.target.value ? Number(e.target.value) : undefined)}
                className="w-full bg-[#050811] border border-white/20 rounded-xl px-3 py-2 text-slate-300 focus:outline-none focus:border-amber-400"
                placeholder="e.g. 1999"
              />
            </div>
          </div>

          {/* Game Count & Badge Row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-bold mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                <span>Games Included</span>
              </label>
              <input
                type="number"
                value={gameCount}
                onChange={(e) => setGameCount(Number(e.target.value))}
                className="w-full bg-[#050811] border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-sky-400"
                placeholder="1000"
                min={1}
              />
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Card Badge</span>
              </label>
              <input
                type="text"
                value={badge}
                onChange={(e) => setBadge(e.target.value)}
                className="w-full bg-[#050811] border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-400 uppercase"
                placeholder="e.g. MOST POPULAR"
              />
            </div>
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-slate-300 font-bold mb-1">
              Short Summary Description
            </label>
            <textarea
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              rows={2}
              className="w-full bg-[#050811] border border-white/20 rounded-xl p-2.5 text-slate-200 focus:outline-none focus:border-amber-400 text-xs"
              placeholder="Quick one-line summary displayed on the card..."
            />
          </div>

          {/* Media Direct Uploads */}
          <div className="space-y-3 pt-2 border-t border-white/10">
            <MediaUploadInput
              label="Cover Image"
              accept="image/*"
              value={coverImage}
              onChange={(url) => setCoverImage(url)}
              category="bundles"
              placeholder="Upload cover image..."
              helpText="Auto-commits permanently to GitHub."
            />

            <MediaUploadInput
              label="Gameplay Video Preview / Trailer"
              accept="video/*"
              value={videoPreview}
              onChange={(url) => setVideoPreview(url)}
              category="bundles"
              placeholder="Upload gameplay video (MP4/WebM)..."
              helpText="Auto-commits permanently to GitHub."
            />
          </div>

          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-slate-300 text-[11px] leading-relaxed">
            💡 <strong className="text-amber-300">Global Reactive Update:</strong> Changes applied here will immediately update this bundle across all pages (Hero stats, Flash Sale countdown, Pricing Vault, and DM purchase buttons).
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={closeBundleQuickEdit}
              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 font-bold transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-lg shadow-amber-500/20"
            >
              <Check className="w-4 h-4" />
              <span>Apply Changes Live</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
