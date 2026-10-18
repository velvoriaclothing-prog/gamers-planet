import React, { useState } from 'react';
import { useLiveEdit } from './LiveEditContext.js';
import { BundleQuickEditModal } from './BundleQuickEditModal.js';
import { ChannelSwitcherModal } from './ChannelSwitcherModal.js';
import { 
  Sparkles, 
  Save, 
  RotateCcw, 
  SlidersHorizontal, 
  Globe, 
  CheckCircle2, 
  Loader2, 
  LayoutDashboard,
  Eye,
  Edit3
} from 'lucide-react';

interface LiveEditToolbarProps {
  onOpenDashboard: () => void;
  onLogout: () => void;
}

export const LiveEditToolbar: React.FC<LiveEditToolbarProps> = ({
  onOpenDashboard,
  onLogout
}) => {
  const {
    isAdmin,
    isLiveEditMode,
    toggleLiveEditMode,
    hasUnsavedChanges,
    unsavedCount,
    isSaving,
    saveSuccessMessage,
    discardAllChanges,
    saveAllChanges,
    getEffectiveSettings
  } = useLiveEdit();

  const [isChannelModalOpen, setIsChannelModalOpen] = useState<boolean>(false);
  const settings = getEffectiveSettings();

  // If not logged in as admin, do not render any admin toolbars or indicators
  if (!isAdmin) return null;

  return (
    <>
      {/* 1. Top Admin Control Bar */}
      <aside aria-label="Admin live edit toolbar" className="sticky top-0 z-40 w-full bg-[#070b14]/95 backdrop-blur-md border-b border-amber-500/30 text-white shadow-xl transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-11 flex items-center justify-between text-xs gap-2">
          {/* Left: Admin Status & Live Edit Switch */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold uppercase tracking-wider text-[10px] font-gaming">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Admin Active</span>
            </span>

            {/* Live On-Page Edit Mode Toggle Button */}
            <button
              type="button"
              onClick={toggleLiveEditMode}
              className={`px-3 py-1 rounded-xl font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md text-[11px] ${
                isLiveEditMode
                  ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-amber-500/30 font-black animate-pulse'
                  : 'bg-white/10 hover:bg-white/15 text-slate-200 border border-white/15'
              }`}
              title="Toggle Live Visual In-Place Edit Mode"
            >
              {isLiveEditMode ? (
                <>
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Live Edit: ON (Click text to edit)</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5 text-slate-400" />
                  <span>Turn ON Live Edit Mode</span>
                </>
              )}
            </button>
          </div>

          {/* Right: Channel Switcher & Dashboard Access */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Quick Channel Switcher */}
            <button
              type="button"
              onClick={() => setIsChannelModalOpen(true)}
              className="px-2.5 py-1 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 font-bold flex items-center gap-1 transition-all cursor-pointer text-[11px]"
              title="Change active contact & DM channel"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden md:inline">Channel:</span>
              <span className="uppercase text-emerald-400 font-extrabold font-gaming">
                {settings.primaryChannelType || 'Instagram'}
              </span>
            </button>

            {/* Open Full Dashboard */}
            <button
              type="button"
              onClick={onOpenDashboard}
              className="px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold flex items-center gap-1 transition-colors cursor-pointer text-[11px]"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Dashboard</span>
            </button>

            {/* Logout */}
            <button
              type="button"
              onClick={onLogout}
              className="px-2 py-1 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors text-[11px]"
              title="Logout from Admin Mode"
            >
              Exit
            </button>
          </div>
        </div>
      </aside>

      {/* 2. Floating Live Edit Notification Banner / Save Bar */}
      {hasUnsavedChanges && (
        <aside aria-label="Unsaved live edits notification" className="fixed bottom-16 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-xl animate-bounce-short">
          <div className="bg-[#090e1c]/95 backdrop-blur-xl border-2 border-amber-500 rounded-2xl p-3 sm:p-4 shadow-2xl shadow-amber-500/25 flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center shrink-0">
                <Edit3 className="w-4 h-4 animate-spin-slow" />
              </div>
              <div>
                <div className="font-extrabold text-sm text-white flex items-center gap-1.5 font-gaming">
                  <span>{unsavedCount} Unsaved Live Change{unsavedCount > 1 ? 's' : ''}</span>
                  <span className="px-1.5 py-0.2 rounded bg-amber-500/30 text-amber-300 text-[10px] font-black uppercase">
                    Staged
                  </span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Ready to publish permanently to all devices.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={discardAllChanges}
                disabled={isSaving}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer disabled:opacity-50"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Discard</span>
              </button>

              <button
                type="button"
                onClick={saveAllChanges}
                disabled={isSaving}
                className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-black text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-lg shadow-emerald-500/30 disabled:opacity-50"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Publishing...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Publish to Live Site</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 3. Success Toast */}
      {saveSuccessMessage && (
        <aside aria-label="Save confirmation" className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 animate-fadeIn">
          <div className="px-5 py-2.5 rounded-2xl bg-emerald-500 text-black font-extrabold text-xs flex items-center gap-2 shadow-2xl shadow-emerald-500/40">
            <CheckCircle2 className="w-4 h-4" />
            <span>{saveSuccessMessage}</span>
          </div>
        </aside>
      )}

      {/* 4. Quick Modals */}
      <BundleQuickEditModal />
      <ChannelSwitcherModal
        isOpen={isChannelModalOpen}
        onClose={() => setIsChannelModalOpen(false)}
      />
    </>
  );
};
