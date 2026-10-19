import React, { useState, useRef } from 'react';
import { 
  Upload, 
  Image as ImageIcon, 
  Video as VideoIcon, 
  X, 
  Check, 
  Loader2, 
  ExternalLink, 
  Globe, 
  ShieldCheck, 
  Sparkles,
  Link as LinkIcon,
  RefreshCw,
  GitBranch
} from 'lucide-react';
import { api } from '../../utils/api.js';

interface MediaUploadInputProps {
  value: string;
  onChange: (url: string) => void;
  label: string;
  accept?: 'image/*' | 'video/*' | 'image/*,video/*';
  placeholder?: string;
  helpText?: string;
  category?: 'bundles' | 'reviews' | 'channels' | 'branding' | 'media';
  required?: boolean;
}

export const MediaUploadInput: React.FC<MediaUploadInputProps> = ({
  value,
  onChange,
  label,
  accept = 'image/*',
  placeholder = 'Upload media file or enter URL...',
  helpText,
  category = 'media',
  required = false
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const [isUrlMode, setIsUrlMode] = useState<boolean>(false);
  const [dragActive, setDragActive] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const isVideo = (url: string) => {
    return /\.(mp4|webm|mov|mkv|avi)(\?.*)?$/i.test(url) || url.includes('/video');
  };

  const isGitHubUrl = (url: string) => {
    return url.includes('raw.githubusercontent.com') || url.includes('cdn.jsdelivr.net/gh/');
  };

  const handleFileProcess = async (file: File) => {
    if (!file) return;

    // Validate size (max 100MB)
    if (file.size > 100 * 1024 * 1024) {
      setUploadError('File exceeds 100MB limit. Please choose a smaller file.');
      return;
    }

    setIsUploading(true);
    setUploadError(null);
    setUploadSuccess(null);

    try {
      const res = await api.uploadMedia(file, category);
      if (res.success && res.fileUrl) {
        onChange(res.fileUrl);
        if (res.githubSaved) {
          setUploadSuccess('Uploaded & committed permanently to GitHub!');
        } else {
          setUploadSuccess('Uploaded & saved to server storage.');
        }
        setTimeout(() => setUploadSuccess(null), 5000);
      } else {
        throw new Error(res.message || 'Upload failed');
      }
    } catch (err: any) {
      console.error('File upload error:', err);
      setUploadError(err.message || 'Failed to upload media file. Please try again.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const hasValue = Boolean(value && value.trim().length > 0);
  const currentIsVideo = hasValue && isVideo(value);
  const currentIsGitHub = hasValue && isGitHubUrl(value);

  return (
    <div className="space-y-2">
      {/* Label and mode toggle */}
      <div className="flex items-center justify-between text-xs">
        <label className="font-semibold text-slate-200 font-gaming uppercase tracking-wide flex items-center gap-1.5">
          {accept.includes('video') ? (
            <VideoIcon className="w-3.5 h-3.5 text-amber-400" />
          ) : (
            <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
          )}
          <span>{label}</span>
          {required && <span className="text-red-400">*</span>}
        </label>

        <div className="flex items-center gap-2">
          {hasValue && currentIsGitHub && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold">
              <GitBranch className="w-3 h-3 text-emerald-400" />
              <span>GitHub Synced</span>
            </span>
          )}

          <button
            type="button"
            onClick={() => setIsUrlMode(!isUrlMode)}
            className="text-[11px] font-medium text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            {isUrlMode ? (
              <>
                <Upload className="w-3 h-3 text-amber-400" />
                <span>Switch to File Upload</span>
              </>
            ) : (
              <>
                <LinkIcon className="w-3 h-3 text-slate-400" />
                <span>Or Paste Direct URL</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Container */}
      {!hasValue ? (
        /* Empty state: Drop zone or text URL input */
        isUrlMode ? (
          <div className="space-y-1.5">
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
            <p className="text-[11px] text-slate-400">
              Paste direct image/video URL (e.g. Steam, YouTube, or raw media link)
            </p>
          </div>
        ) : (
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
            className={`relative rounded-2xl border-2 border-dashed p-6 text-center cursor-pointer transition-all duration-200 ${
              dragActive
                ? 'border-amber-400 bg-amber-500/10 scale-[1.01]'
                : 'border-white/15 hover:border-amber-500/40 bg-white/[0.02] hover:bg-white/[0.04]'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept={accept}
              onChange={handleInputChange}
              className="hidden"
            />

            {isUploading ? (
              <div className="py-4 flex flex-col items-center justify-center gap-2 text-amber-400">
                <Loader2 className="w-8 h-8 animate-spin" />
                <span className="text-xs font-bold font-gaming uppercase tracking-wider">
                  Uploading & Committing to Storage...
                </span>
                <span className="text-[11px] text-slate-400">
                  Saving file permanently to vault & GitHub
                </span>
              </div>
            ) : (
              <div className="py-2 flex flex-col items-center justify-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-md">
                  <Upload className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-white block">
                    Click to browse or drag file here
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {accept.includes('video')
                      ? 'Supports MP4, WebM, MOV, JPG, PNG, WebP (up to 100MB)'
                      : 'Supports JPG, PNG, WebP, GIF, SVG (up to 50MB)'}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-400 mt-1">
                  <GitBranch className="w-3 h-3 text-emerald-400" />
                  <span>Permanent Storage & GitHub Auto-Sync</span>
                </div>
              </div>
            )}
          </div>
        )
      ) : (
        /* Populated state: Preview thumbnail/video player + Replace & Remove actions */
        <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#080c18] p-3 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Media Preview Box */}
            <div className="relative w-full sm:w-44 aspect-[16/10] rounded-xl overflow-hidden bg-black border border-white/10 shrink-0">
              {currentIsVideo ? (
                <video
                  src={value}
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={value}
                  alt={label}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg';
                  }}
                />
              )}

              <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md text-[9px] font-bold text-amber-400 border border-white/10">
                {currentIsVideo ? 'VIDEO' : 'IMAGE'}
              </div>
            </div>

            {/* Media Info & Change Controls */}
            <div className="flex-1 min-w-0 w-full space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-white font-gaming truncate">
                  Active Asset
                </span>
                <span className="text-[10px] font-mono text-slate-400 truncate max-w-[180px]">
                  {value}
                </span>
              </div>

              {/* Status info */}
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                {currentIsGitHub ? (
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Permanent GitHub File</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-slate-300 font-medium">
                    <Globe className="w-3.5 h-3.5 text-amber-400" />
                    <span>Vault Media Storage</span>
                  </span>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold font-gaming flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <RefreshCw className="w-3 h-3 text-black" />
                  <span>Replace File</span>
                </button>

                <button
                  type="button"
                  onClick={() => onChange('')}
                  className="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <X className="w-3 h-3" />
                  <span>Remove</span>
                </button>

                <a
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1 transition-colors"
                  title="Open media in new tab"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Inspect</span>
                </a>
              </div>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            onChange={handleInputChange}
            className="hidden"
          />
        </div>
      )}

      {/* Uploading progress overlay if user replaced an existing file */}
      {isUploading && hasValue && (
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-2 text-xs text-amber-300 animate-pulse">
          <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
          <span>Uploading new file and saving to permanent storage...</span>
        </div>
      )}

      {/* Success Notification */}
      {uploadSuccess && (
        <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>{uploadSuccess}</span>
        </div>
      )}

      {/* Error Notification */}
      {uploadError && (
        <div className="p-2.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs flex items-center justify-between gap-2 animate-in fade-in">
          <span>{uploadError}</span>
          <button
            type="button"
            onClick={() => setUploadError(null)}
            className="text-red-400 hover:text-white"
          >
            ✕
          </button>
        </div>
      )}

      {helpText && (
        <p className="text-[11px] text-slate-400 leading-relaxed">{helpText}</p>
      )}
    </div>
  );
};
