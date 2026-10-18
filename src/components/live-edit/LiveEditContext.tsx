import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { SiteSettings, Bundle, LiveBatchSavePayload, PrimaryChannelType } from '../../types/index.js';
import { api } from '../../utils/api.js';

interface LiveEditContextType {
  isLiveEditMode: boolean;
  setIsLiveEditMode: (active: boolean) => void;
  toggleLiveEditMode: () => void;
  isAdmin: boolean;

  // Staged pending changes
  stagedSettings: Partial<SiteSettings>;
  stagedBundles: Record<string, Partial<Bundle>>;
  hasUnsavedChanges: boolean;
  unsavedCount: number;
  isSaving: boolean;
  saveSuccessMessage: string | null;

  // Stage mutations
  stageTextChange: (key: string, value: string) => void;
  stageSettingChange: <K extends keyof SiteSettings>(key: K, value: SiteSettings[K]) => void;
  stageBundleChange: (bundleId: string, updates: Partial<Bundle>) => void;
  stageChannelChange: (channelType: PrimaryChannelType, handle?: string, url?: string, label?: string) => void;

  // Save & Discard
  discardAllChanges: () => void;
  saveAllChanges: () => Promise<boolean>;

  // Getter helpers for reactive UI
  getText: (key: string, defaultText: string) => string;
  getEffectiveSettings: () => SiteSettings;
  getEffectiveBundles: (baseBundles: Bundle[]) => Bundle[];
  getEffectiveBundle: (baseBundle: Bundle) => Bundle;

  // Quick Bundle Modal
  activeEditBundle: Bundle | null;
  openBundleQuickEdit: (bundle: Bundle) => void;
  closeBundleQuickEdit: () => void;
}

const LiveEditContext = createContext<LiveEditContextType | null>(null);

interface LiveEditProviderProps {
  children: React.ReactNode;
  settings: SiteSettings;
  bundles: Bundle[];
  isAdmin: boolean;
  onRefreshAll: () => Promise<void>;
  onSettingsUpdate?: (newSettings: SiteSettings) => void;
  onBundlesUpdate?: (newBundles: Bundle[]) => void;
}

export const LiveEditProvider: React.FC<LiveEditProviderProps> = ({
  children,
  settings,
  bundles,
  isAdmin,
  onRefreshAll,
  onSettingsUpdate,
  onBundlesUpdate
}) => {
  const [isLiveEditMode, setIsLiveEditMode] = useState<boolean>(false);
  const [stagedSettings, setStagedSettings] = useState<Partial<SiteSettings>>({});
  const [stagedBundles, setStagedBundles] = useState<Record<string, Partial<Bundle>>>({});
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState<string | null>(null);
  const [activeEditBundle, setActiveEditBundle] = useState<Bundle | null>(null);

  // If admin logs out, turn off live edit mode
  React.useEffect(() => {
    if (!isAdmin) {
      setIsLiveEditMode(false);
      setStagedSettings({});
      setStagedBundles({});
    }
  }, [isAdmin]);

  const toggleLiveEditMode = useCallback(() => {
    if (!isAdmin) return;
    setIsLiveEditMode(prev => !prev);
  }, [isAdmin]);

  // Stage arbitrary page text (stored inside customTexts in SiteSettings)
  const stageTextChange = useCallback((key: string, value: string) => {
    setStagedSettings(prev => {
      const currentCustomTexts = prev.customTexts || settings.customTexts || {};
      return {
        ...prev,
        customTexts: {
          ...currentCustomTexts,
          [key]: value
        }
      };
    });
  }, [settings.customTexts]);

  // Stage direct setting field change
  const stageSettingChange = useCallback(<K extends keyof SiteSettings>(key: K, value: SiteSettings[K]) => {
    setStagedSettings(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  // Stage bundle changes (title, price, gameCount, badge, etc.)
  const stageBundleChange = useCallback((bundleId: string, updates: Partial<Bundle>) => {
    setStagedBundles(prev => ({
      ...prev,
      [bundleId]: {
        ...(prev[bundleId] || {}),
        ...updates
      }
    }));
  }, []);

  // Stage primary channel change
  const stageChannelChange = useCallback((
    channelType: PrimaryChannelType,
    handle?: string,
    url?: string,
    label?: string
  ) => {
    setStagedSettings(prev => ({
      ...prev,
      primaryChannelType: channelType,
      ...(handle !== undefined ? { channelHandle: handle } : {}),
      ...(url !== undefined ? { channelUrl: url } : {}),
      ...(label !== undefined ? { channelCustomLabel: label } : {})
    }));
  }, []);

  // Discard
  const discardAllChanges = useCallback(() => {
    setStagedSettings({});
    setStagedBundles({});
  }, []);

  // Save to live server backend
  const saveAllChanges = useCallback(async (): Promise<boolean> => {
    setIsSaving(true);
    setSaveSuccessMessage(null);
    try {
      const bundleUpdatesList = Object.entries(stagedBundles).map(([id, updates]) => ({
        id,
        updates
      }));

      const payload: LiveBatchSavePayload = {
        settingsUpdates: Object.keys(stagedSettings).length > 0 ? stagedSettings : undefined,
        bundleUpdates: bundleUpdatesList.length > 0 ? bundleUpdatesList : undefined
      };

      const result = await api.liveBatchSave(payload);
      
      // Update local parent state immediately
      if (onSettingsUpdate && result.settings) {
        onSettingsUpdate(result.settings);
      }
      if (onBundlesUpdate && result.bundles) {
        onBundlesUpdate(result.bundles);
      }

      setStagedSettings({});
      setStagedBundles({});
      setSaveSuccessMessage('All live changes saved permanently to website!');

      setTimeout(() => {
        setSaveSuccessMessage(null);
      }, 4000);

      // Trigger full data refresh
      await onRefreshAll();
      return true;
    } catch (err: any) {
      console.error('Failed to save live edits:', err);
      setSaveSuccessMessage('Error saving live changes: ' + (err.message || 'Server error'));
      return false;
    } finally {
      setIsSaving(false);
    }
  }, [stagedSettings, stagedBundles, onSettingsUpdate, onBundlesUpdate, onRefreshAll]);

  // Reactive helpers
  const getText = useCallback((key: string, defaultText: string): string => {
    if (stagedSettings.customTexts && stagedSettings.customTexts[key] !== undefined) {
      return stagedSettings.customTexts[key];
    }
    if (settings.customTexts && settings.customTexts[key] !== undefined) {
      return settings.customTexts[key];
    }
    return defaultText;
  }, [settings.customTexts, stagedSettings.customTexts]);

  const getEffectiveSettings = useCallback((): SiteSettings => {
    return {
      ...settings,
      ...stagedSettings,
      customTexts: {
        ...(settings.customTexts || {}),
        ...(stagedSettings.customTexts || {})
      }
    };
  }, [settings, stagedSettings]);

  const getEffectiveBundle = useCallback((baseBundle: Bundle): Bundle => {
    const staged = stagedBundles[baseBundle.id];
    if (!staged) return baseBundle;
    return {
      ...baseBundle,
      ...staged
    };
  }, [stagedBundles]);

  const getEffectiveBundles = useCallback((baseBundles: Bundle[]): Bundle[] => {
    return baseBundles.map(b => getEffectiveBundle(b));
  }, [getEffectiveBundle]);

  const unsavedCount = useMemo(() => {
    const settingsKeysCount = Object.keys(stagedSettings).filter(k => k !== 'customTexts').length;
    const customTextsCount = stagedSettings.customTexts ? Object.keys(stagedSettings.customTexts).length : 0;
    const bundlesCount = Object.keys(stagedBundles).length;
    return settingsKeysCount + customTextsCount + bundlesCount;
  }, [stagedSettings, stagedBundles]);

  const hasUnsavedChanges = unsavedCount > 0;

  return (
    <LiveEditContext.Provider
      value={{
        isLiveEditMode,
        setIsLiveEditMode,
        toggleLiveEditMode,
        isAdmin,
        stagedSettings,
        stagedBundles,
        hasUnsavedChanges,
        unsavedCount,
        isSaving,
        saveSuccessMessage,
        stageTextChange,
        stageSettingChange,
        stageBundleChange,
        stageChannelChange,
        discardAllChanges,
        saveAllChanges,
        getText,
        getEffectiveSettings,
        getEffectiveBundles,
        getEffectiveBundle,
        activeEditBundle,
        openBundleQuickEdit: setActiveEditBundle,
        closeBundleQuickEdit: () => setActiveEditBundle(null)
      }}
    >
      {children}
    </LiveEditContext.Provider>
  );
};

export const useLiveEdit = () => {
  const context = useContext(LiveEditContext);
  if (!context) {
    throw new Error('useLiveEdit must be used within a LiveEditProvider');
  }
  return context;
};
