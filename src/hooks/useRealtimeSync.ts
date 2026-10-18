import { useEffect, useRef } from 'react';
import { api } from '../utils/api.js';

interface UseRealtimeSyncOptions {
  currentVersion?: number;
  hasUnsavedChanges?: boolean;
  onSync: () => Promise<void>;
  intervalMs?: number;
}

/**
 * Ultra-lightweight background polling hook that checks the server database version.
 * When an edit occurs on any device, all connected browsers pick up the change within seconds.
 */
export function useRealtimeSync({
  currentVersion = 1,
  hasUnsavedChanges = false,
  onSync,
  intervalMs = 4000
}: UseRealtimeSyncOptions) {
  const lastKnownVersion = useRef<number>(currentVersion);
  const isSyncing = useRef<boolean>(false);

  useEffect(() => {
    lastKnownVersion.current = currentVersion;
  }, [currentVersion]);

  useEffect(() => {
    let isMounted = true;

    const checkVersion = async () => {
      // Skip sync while user is actively editing unsaved changes to prevent overwriting drafts
      if (hasUnsavedChanges || isSyncing.current) {
        return;
      }

      try {
        const serverInfo = await api.getSyncVersion();
        if (!isMounted) return;

        if (serverInfo.version && serverInfo.version > lastKnownVersion.current) {
          lastKnownVersion.current = serverInfo.version;
          isSyncing.current = true;
          try {
            await onSync();
          } finally {
            isSyncing.current = false;
          }
        }
      } catch {
        // Silently tolerate transient offline or network jitter
      }
    };

    const timer = setInterval(checkVersion, intervalMs);

    return () => {
      isMounted = false;
      clearInterval(timer);
    };
  }, [hasUnsavedChanges, intervalMs, onSync]);
}
