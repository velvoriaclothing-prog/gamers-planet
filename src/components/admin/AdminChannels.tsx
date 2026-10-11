import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Send, MessageSquare, ExternalLink, Eye, EyeOff, Check, X, AlertTriangle, Loader2, ArrowUp, ArrowDown, KeyRound, ShieldCheck } from 'lucide-react';
import { Channel, ChannelPlatform } from '../../types/index.js';
import { api } from '../../utils/api.js';

interface AdminChannelsProps {
  channels: Channel[];
  onRefresh: () => void;
}

export const AdminChannels: React.FC<AdminChannelsProps> = ({ channels, onRefresh }) => {
  const [editingChannel, setEditingChannel] = useState<Partial<Channel> | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [deleteCandidate, setDeleteCandidate] = useState<Channel | null>(null);
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Channels password change state
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [newChannelsPassword, setNewChannelsPassword] = useState('');
  const [updatingPassword, setUpdatingPassword] = useState(false);

  const handleOpenNew = () => {
    setIsNew(true);
    setEditingChannel({
      name: '',
      platform: 'telegram',
      description: '',
      inviteUrl: '',
      thumbnailUrl: '',
      category: 'Community',
      published: true,
      order: channels.length + 1
    });
  };

  const handleOpenEdit = (channel: Channel) => {
    setIsNew(false);
    setEditingChannel({ ...channel });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingChannel || !editingChannel.name || !editingChannel.inviteUrl) {
      setStatusMessage({ type: 'error', text: 'Channel name and invitation URL are required.' });
      return;
    }

    setSaving(true);
    setStatusMessage(null);

    try {
      if (isNew) {
        await api.createChannel(editingChannel);
        setStatusMessage({ type: 'success', text: 'New channel added successfully!' });
      } else if (editingChannel.id) {
        await api.updateChannel(editingChannel.id, editingChannel);
        setStatusMessage({ type: 'success', text: 'Channel updated successfully!' });
      }
      setEditingChannel(null);
      onRefresh();
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err.message || 'Failed to save channel.' });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteCandidate) return;
    try {
      await api.deleteChannel(deleteCandidate.id);
      setDeleteCandidate(null);
      setStatusMessage({ type: 'success', text: 'Channel deleted successfully.' });
      onRefresh();
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err.message || 'Failed to delete channel.' });
    }
  };

  const togglePublished = async (channel: Channel) => {
    try {
      await api.updateChannel(channel.id, { published: !channel.published });
      onRefresh();
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: 'Failed to update channel publish status.' });
    }
  };

  const moveChannel = async (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= channels.length) return;

    const ids = channels.map(c => c.id);
    const temp = ids[index];
    ids[index] = ids[targetIndex];
    ids[targetIndex] = temp;

    try {
      await api.reorderChannels(ids);
      onRefresh();
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: 'Failed to reorder channels.' });
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChannelsPassword.trim() || newChannelsPassword.trim().length < 2) {
      setStatusMessage({ type: 'error', text: 'Password must be at least 2 characters long.' });
      return;
    }

    setUpdatingPassword(true);
    try {
      const res = await api.changeChannelsPassword(newChannelsPassword.trim());
      setStatusMessage({ type: 'success', text: res.message || 'Channels access password updated!' });
      setNewChannelsPassword('');
      setShowPasswordChange(false);
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err.message || 'Failed to update channels access password.' });
    } finally {
      setUpdatingPassword(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <h3 className="text-xl font-bold text-white font-gaming">
            COMMUNITY CHANNELS MANAGEMENT
          </h3>
          <p className="text-xs text-slate-400">
            Manage your exclusive Telegram channels and Discord servers with protected invitation links.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowPasswordChange(!showPasswordChange)}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-white cursor-pointer"
          >
            <KeyRound className="w-3.5 h-3.5 text-amber-400" />
            <span>Change Access Password</span>
          </button>

          <button
            onClick={handleOpenNew}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Channel</span>
          </button>
        </div>
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

      {/* Change Channels Access Password Card */}
      {showPasswordChange && (
        <div className="glass-panel p-6 rounded-2xl border border-amber-500/30 bg-amber-500/[0.03] animate-in fade-in">
          <h4 className="text-sm font-bold text-white font-gaming mb-2 flex items-center gap-2">
            <KeyRound className="w-4 h-4 text-amber-400" />
            <span>Change Channels Section Access Password</span>
          </h4>
          <p className="text-xs text-slate-400 mb-4">
            Currently defaults to <code className="text-amber-400 font-mono">2703</code>. Update it here to any new password you prefer.
          </p>
          <form onSubmit={handleChangePassword} className="flex flex-col sm:flex-row items-center gap-3 max-w-lg">
            <input
              type="text"
              required
              value={newChannelsPassword}
              onChange={(e) => setNewChannelsPassword(e.target.value)}
              placeholder="Enter new channels password..."
              className="w-full px-4 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white"
            />
            <button
              type="submit"
              disabled={updatingPassword || !newChannelsPassword.trim()}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm shrink-0 cursor-pointer disabled:opacity-50"
            >
              {updatingPassword ? 'Saving...' : 'Update Password'}
            </button>
          </form>
        </div>
      )}

      {/* Channels List Table / Grid */}
      {channels.length === 0 ? (
        <div className="glass-card p-12 rounded-2xl text-center text-slate-400 text-xs">
          No channels added yet. Click "+ Add Channel" to create your first Telegram or Discord channel.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((chan, idx) => {
            const isTelegram = chan.platform === 'telegram';

            return (
              <div
                key={chan.id}
                className={`glass-card rounded-2xl overflow-hidden flex flex-col justify-between border ${
                  chan.published ? 'border-white/10' : 'border-red-500/30 opacity-70'
                }`}
              >
                {/* Header preview */}
                <div className="relative aspect-[16/9] max-h-36 bg-black overflow-hidden">
                  {chan.thumbnailUrl ? (
                    <img src={chan.thumbnailUrl} alt={chan.name} className="w-full h-full object-cover" />
                  ) : (
                    <div
                      className={`w-full h-full flex items-center justify-center ${
                        isTelegram
                          ? 'bg-gradient-to-br from-sky-950/80 via-slate-900 to-black'
                          : 'bg-gradient-to-br from-indigo-950/80 via-slate-900 to-black'
                      }`}
                    >
                      {isTelegram ? (
                        <Send className="w-12 h-12 text-sky-400/40" />
                      ) : (
                        <MessageSquare className="w-12 h-12 text-indigo-400/40" />
                      )}
                    </div>
                  )}

                  <div className="absolute top-2 left-2 flex items-center gap-1.5">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        isTelegram ? 'bg-sky-500 text-black' : 'bg-indigo-600 text-white'
                      }`}
                    >
                      {chan.platform}
                    </span>
                    {!chan.published && (
                      <span className="px-2 py-0.5 rounded bg-red-500/80 text-white text-[10px] font-bold">
                        Unpublished
                      </span>
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {chan.category && (
                      <div className="text-[10px] uppercase font-semibold text-amber-400/80 mb-1">
                        {chan.category}
                      </div>
                    )}
                    <h4 className="text-base font-bold text-white font-gaming mb-1">
                      {chan.name}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                      {chan.description}
                    </p>
                    <div className="text-[11px] text-slate-400 mb-3 flex items-center justify-between gap-2 p-2 rounded-lg bg-black/30 border border-white/5">
                      <span className="truncate font-mono text-slate-300">{chan.inviteUrl}</span>
                      <a
                        href={chan.inviteUrl.startsWith('http') ? chan.inviteUrl : `https://${chan.inviteUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 text-[10px] font-semibold shrink-0 transition-colors"
                      >
                        <span>Test Link</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    {/* Reorder controls */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => moveChannel(idx, 'up')}
                        disabled={idx === 0}
                        title="Move Up"
                        className="p-1 rounded bg-white/5 hover:bg-white/10 disabled:opacity-30 text-slate-300 cursor-pointer"
                      >
                        <ArrowUp className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => moveChannel(idx, 'down')}
                        disabled={idx === channels.length - 1}
                        title="Move Down"
                        className="p-1 rounded bg-white/5 hover:bg-white/10 disabled:opacity-30 text-slate-300 cursor-pointer"
                      >
                        <ArrowDown className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => togglePublished(chan)}
                        title={chan.published ? 'Unpublish' : 'Publish'}
                        className={`p-1.5 rounded text-xs cursor-pointer ${
                          chan.published
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : 'bg-white/5 hover:bg-white/10 text-slate-400'
                        }`}
                      >
                        {chan.published ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                      </button>

                      <button
                        onClick={() => handleOpenEdit(chan)}
                        title="Edit Channel"
                        className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white cursor-pointer"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => setDeleteCandidate(chan)}
                        title="Delete Channel"
                        className="p-1.5 rounded bg-red-500/10 hover:bg-red-500/20 text-red-400 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Edit / Add Channel Modal */}
      {editingChannel && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
          <div className="fixed inset-0" onClick={() => setEditingChannel(null)} />
          
          <div className="relative w-full max-w-xl glass-panel rounded-3xl p-6 sm:p-8 z-10 border border-white/15 my-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <h4 className="text-xl font-bold text-white font-gaming">
                {isNew ? 'Add New Community Channel' : `Edit: ${editingChannel.name}`}
              </h4>
              <button
                onClick={() => setEditingChannel(null)}
                className="p-2 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Channel / Server Name *
                </label>
                <input
                  type="text"
                  required
                  value={editingChannel.name || ''}
                  onChange={(e) => setEditingChannel({ ...editingChannel, name: e.target.value })}
                  placeholder="e.g. Gamers Planet VIP Drops & Vaults"
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Platform *
                  </label>
                  <select
                    value={editingChannel.platform || 'telegram'}
                    onChange={(e) => setEditingChannel({ ...editingChannel, platform: e.target.value as ChannelPlatform })}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white bg-slate-900"
                  >
                    <option value="telegram">Telegram Channel</option>
                    <option value="discord">Discord Server</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Category / Tag
                  </label>
                  <input
                    type="text"
                    value={editingChannel.category || ''}
                    onChange={(e) => setEditingChannel({ ...editingChannel, category: e.target.value })}
                    placeholder="e.g. VIP Drops, Squad Lounge"
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Invitation URL *
                </label>
                <input
                  type="text"
                  required
                  value={editingChannel.inviteUrl || ''}
                  onChange={(e) => setEditingChannel({ ...editingChannel, inviteUrl: e.target.value })}
                  placeholder="https://t.me/yourchannel or https://discord.gg/yourinvite"
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Optional Thumbnail Image URL
                </label>
                <input
                  type="text"
                  value={editingChannel.thumbnailUrl || ''}
                  onChange={(e) => setEditingChannel({ ...editingChannel, thumbnailUrl: e.target.value })}
                  placeholder="https://images.unsplash.com/... or leave blank"
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={editingChannel.description || ''}
                  onChange={(e) => setEditingChannel({ ...editingChannel, description: e.target.value })}
                  placeholder="Briefly describe what this channel provides to members..."
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs sm:text-sm text-white"
                />
              </div>

              {/* Published checkbox */}
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="chanPublished"
                  checked={editingChannel.published ?? true}
                  onChange={(e) => setEditingChannel({ ...editingChannel, published: e.target.checked })}
                  className="w-4 h-4 rounded text-amber-500 bg-black border-white/20"
                />
                <label htmlFor="chanPublished" className="text-xs text-slate-200 cursor-pointer">
                  Published (visible to authenticated visitors on the Channels page)
                </label>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingChannel(null)}
                  className="px-4 py-2.5 rounded-xl glass-card text-xs text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                >
                  {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                  <span>{isNew ? 'Create Channel' : 'Save Changes'}</span>
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
            <h4 className="text-base font-bold text-white font-gaming mb-2">Delete Channel?</h4>
            <p className="text-xs text-slate-300 mb-5">
              Are you sure you want to permanently delete <strong className="text-white">{deleteCandidate.name}</strong>?
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
                Delete Channel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
