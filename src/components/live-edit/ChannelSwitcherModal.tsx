import React, { useState } from 'react';
import { useLiveEdit } from './LiveEditContext.js';
import { PrimaryChannelType } from '../../types/index.js';
import { X, Check, Instagram, Send, PhoneCall, Globe, ShieldCheck } from 'lucide-react';

interface ChannelSwitcherModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChannelSwitcherModal: React.FC<ChannelSwitcherModalProps> = ({ isOpen, onClose }) => {
  const { getEffectiveSettings, stageChannelChange } = useLiveEdit();
  const settings = getEffectiveSettings();

  const [channelType, setChannelType] = useState<PrimaryChannelType>(
    settings.primaryChannelType || 'instagram'
  );
  const [handle, setHandle] = useState<string>(settings.channelHandle || '@gamersplanet20.26');
  const [customUrl, setCustomUrl] = useState<string>(settings.channelUrl || '');
  const [customLabel, setCustomLabel] = useState<string>(settings.channelCustomLabel || '');

  if (!isOpen) return null;

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    stageChannelChange(
      channelType,
      handle.trim(),
      customUrl.trim() || undefined,
      customLabel.trim() || undefined
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0a0f1d] border-2 border-emerald-500/70 rounded-3xl p-6 shadow-2xl shadow-emerald-500/10 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 font-gaming">
                Universal Channel Switcher
              </span>
              <h3 className="text-lg font-black font-gaming text-white">
                Set Primary Contact & DM Channel
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleApply} className="space-y-4 text-xs">
          {/* Channel Type Grid */}
          <div>
            <label className="block text-slate-300 font-bold mb-2">
              Select Primary Customer Contact Platform:
            </label>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {/* Instagram */}
              <button
                type="button"
                onClick={() => {
                  setChannelType('instagram');
                  if (!handle.startsWith('@')) setHandle('@gamersplanet20.26');
                }}
                className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                  channelType === 'instagram'
                    ? 'bg-amber-500/20 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                    : 'bg-[#060913] border-white/10 text-slate-400 hover:border-white/30'
                }`}
              >
                <div className={`p-2 rounded-xl ${channelType === 'instagram' ? 'bg-amber-500 text-black' : 'bg-white/10 text-slate-300'}`}>
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs">Instagram</div>
                  <div className="text-[10px] text-slate-400">Direct Message</div>
                </div>
              </button>

              {/* WhatsApp */}
              <button
                type="button"
                onClick={() => {
                  setChannelType('whatsapp');
                  if (!handle.includes('+')) setHandle('+919876543210');
                }}
                className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                  channelType === 'whatsapp'
                    ? 'bg-emerald-500/20 border-emerald-500 text-white shadow-lg shadow-emerald-500/10'
                    : 'bg-[#060913] border-white/10 text-slate-400 hover:border-white/30'
                }`}
              >
                <div className={`p-2 rounded-xl ${channelType === 'whatsapp' ? 'bg-emerald-500 text-black' : 'bg-white/10 text-slate-300'}`}>
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs">WhatsApp</div>
                  <div className="text-[10px] text-slate-400">Direct Chat wa.me</div>
                </div>
              </button>

              {/* Telegram */}
              <button
                type="button"
                onClick={() => {
                  setChannelType('telegram');
                  if (!handle.startsWith('@')) setHandle('@gamersplanet_vip');
                }}
                className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                  channelType === 'telegram'
                    ? 'bg-sky-500/20 border-sky-500 text-white shadow-lg shadow-sky-500/10'
                    : 'bg-[#060913] border-white/10 text-slate-400 hover:border-white/30'
                }`}
              >
                <div className={`p-2 rounded-xl ${channelType === 'telegram' ? 'bg-sky-500 text-black' : 'bg-white/10 text-slate-300'}`}>
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs">Telegram</div>
                  <div className="text-[10px] text-slate-400">Direct Channel/Chat</div>
                </div>
              </button>

              {/* Custom */}
              <button
                type="button"
                onClick={() => setChannelType('custom')}
                className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                  channelType === 'custom'
                    ? 'bg-purple-500/20 border-purple-500 text-white shadow-lg shadow-purple-500/10'
                    : 'bg-[#060913] border-white/10 text-slate-400 hover:border-white/30'
                }`}
              >
                <div className={`p-2 rounded-xl ${channelType === 'custom' ? 'bg-purple-500 text-black' : 'bg-white/10 text-slate-300'}`}>
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs">Custom Link</div>
                  <div className="text-[10px] text-slate-400">Any URL / Discord</div>
                </div>
              </button>
            </div>
          </div>

          {/* Handle / Phone / Username */}
          <div>
            <label className="block text-slate-300 font-bold mb-1">
              {channelType === 'whatsapp' ? 'WhatsApp Phone Number (with Country Code)' : 'Channel Handle / Username / ID'}
            </label>
            <input
              type="text"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="w-full bg-[#050811] border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-400 font-mono text-sm"
              placeholder={channelType === 'whatsapp' ? '+919876543210' : '@gamersplanet20.26'}
              required
            />
            <p className="text-[11px] text-slate-400 mt-1">
              {channelType === 'whatsapp' && 'All DM buttons will open WhatsApp chat with this number.'}
              {channelType === 'telegram' && 'All purchase buttons will open t.me/your_handle.'}
              {channelType === 'instagram' && 'All purchase buttons will redirect to this Instagram profile.'}
              {channelType === 'custom' && 'Displayed handle name.'}
            </p>
          </div>

          {/* Custom Link Options */}
          {channelType === 'custom' && (
            <div className="space-y-3 pt-2 border-t border-white/10">
              <div>
                <label className="block text-slate-300 font-bold mb-1">Custom Destination URL</label>
                <input
                  type="url"
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  className="w-full bg-[#050811] border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-purple-400 text-xs"
                  placeholder="https://discord.gg/yourserver or https://..."
                  required={channelType === 'custom'}
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Custom Button Label</label>
                <input
                  type="text"
                  value={customLabel}
                  onChange={(e) => setCustomLabel(e.target.value)}
                  className="w-full bg-[#050811] border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-purple-400 text-xs"
                  placeholder="e.g. Join Discord / Message Direct"
                />
              </div>
            </div>
          )}

          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-slate-300 text-[11px] flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-emerald-300">Instant Storewide Redirection:</strong> Every single purchase button, ID & password inquiry, weekend deal banner, and contact link across all pages will immediately point to this new channel.
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 font-bold transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              <Check className="w-4 h-4" />
              <span>Apply Channel Live</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
