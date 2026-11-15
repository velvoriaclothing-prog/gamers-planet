import { Bundle, ReviewScreenshot, SiteSettings, Channel } from '../types/index.js';
import {
  FALLBACK_BUNDLES,
  FALLBACK_REVIEWS,
  FALLBACK_SETTINGS,
} from '../data/storeFallback.js';

const AUTH_TOKEN_KEY = 'nexus_admin_token';
const CHANNELS_TOKEN_KEY = 'gamersplanet_channels_token';

export const getAuthToken = (): string | null => {
  return localStorage.getItem(AUTH_TOKEN_KEY);
};

export const setAuthToken = (token: string): void => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
};

export const clearAuthToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};

export const getChannelsToken = (): string | null => {
  return sessionStorage.getItem(CHANNELS_TOKEN_KEY) || localStorage.getItem(CHANNELS_TOKEN_KEY);
};

export const setChannelsToken = (token: string): void => {
  sessionStorage.setItem(CHANNELS_TOKEN_KEY, token);
  localStorage.setItem(CHANNELS_TOKEN_KEY, token);
};

export const clearChannelsToken = (): void => {
  sessionStorage.removeItem(CHANNELS_TOKEN_KEY);
  localStorage.removeItem(CHANNELS_TOKEN_KEY);
};

// Generic fetch wrapper
async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const adminToken = getAuthToken();
  const channelsToken = getChannelsToken();
  const headers: Record<string, string> = {
    ...(options.headers as Record<string, string> || {}),
  };

  // Prioritize admin token; if not available, send channels token
  const token = adminToken || channelsToken;
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // If body is not FormData, ensure json header
  if (options.body && !(options.body instanceof FormData) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  const res = await fetch(endpoint, {
    ...options,
    headers,
  });

  const contentType = res.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    const err = new Error(`Unexpected response from ${endpoint} (status ${res.status})`) as Error & { status?: number };
    err.status = res.status;
    throw err;
  }

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const errorMsg = data.error || data.message || `Request failed with status ${res.status}`;
    const err = new Error(errorMsg) as Error & { status?: number; data?: any };
    err.status = res.status;
    err.data = data;
    throw err;
  }

  return data as T;
}

async function publicFetchWithFallback<T>(endpoint: string, fallback: () => T): Promise<T> {
  try {
    return await apiFetch<T>(endpoint);
  } catch (err: any) {
    // Graceful fallback if deployed statically or /api serverless is cold/unavailable
    if (!err?.status || err.status === 404 || err.status >= 500) {
      return fallback();
    }
    throw err;
  }
}

// Public API
export const api = {
  // Public
  getSettings: () => publicFetchWithFallback<SiteSettings>('/api/settings', () => FALLBACK_SETTINGS),
  getBundles: () => publicFetchWithFallback<Bundle[]>('/api/bundles', () => FALLBACK_BUNDLES),
  getBundle: async (id: string) => {
    try {
      return await apiFetch<Bundle>(`/api/bundles/${id}`);
    } catch (err) {
      const localMatch = FALLBACK_BUNDLES.find((b) => b.id === id);
      if (localMatch) return localMatch;
      throw err;
    }
  },
  getReviews: () => publicFetchWithFallback<ReviewScreenshot[]>('/api/reviews', () => FALLBACK_REVIEWS),
  getSyncVersion: () =>
    publicFetchWithFallback<{ version: number; lastUpdated: string }>(
      '/api/sync/version',
      () => ({ version: 1, lastUpdated: '2026-11-15T00:00:00.000Z' })
    ),

  // Auth
  login: (code: string) =>
    apiFetch<{ success: boolean; token: string; message: string }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ code }),
    }),
  checkAuthStatus: () => apiFetch<{ authenticated: boolean }>('/api/auth/status'),
  logout: async () => {
    try {
      await apiFetch<{ success: boolean }>('/api/auth/logout', { method: 'POST' });
    } finally {
      clearAuthToken();
    }
  },

  // Admin Bundles
  getAdminBundles: () => apiFetch<Bundle[]>('/api/admin/bundles'),
  createBundle: (bundle: Partial<Bundle>) =>
    apiFetch<Bundle>('/api/admin/bundles', {
      method: 'POST',
      body: JSON.stringify(bundle),
    }),
  updateBundle: (id: string, bundle: Partial<Bundle>) =>
    apiFetch<Bundle>(`/api/admin/bundles/${id}`, {
      method: 'PUT',
      body: JSON.stringify(bundle),
    }),
  deleteBundle: (id: string) =>
    apiFetch<{ success: boolean }>(`/api/admin/bundles/${id}`, {
      method: 'DELETE',
    }),

  // Admin Reviews
  getAdminReviews: () => apiFetch<ReviewScreenshot[]>('/api/admin/reviews'),
  createReview: (review: Partial<ReviewScreenshot>) =>
    apiFetch<ReviewScreenshot>('/api/admin/reviews', {
      method: 'POST',
      body: JSON.stringify(review),
    }),
  updateReview: (id: string, review: Partial<ReviewScreenshot>) =>
    apiFetch<ReviewScreenshot>(`/api/admin/reviews/${id}`, {
      method: 'PUT',
      body: JSON.stringify(review),
    }),
  deleteReview: (id: string) =>
    apiFetch<{ success: boolean }>(`/api/admin/reviews/${id}`, {
      method: 'DELETE',
    }),
  reorderReviews: (orderedIds: string[]) =>
    apiFetch<ReviewScreenshot[]>('/api/admin/reviews/reorder', {
      method: 'POST',
      body: JSON.stringify({ orderedIds }),
    }),

  // Admin Settings & Live Batch Save
  updateSettings: (settings: Partial<SiteSettings>) =>
    apiFetch<SiteSettings>('/api/admin/settings', {
      method: 'PUT',
      body: JSON.stringify(settings),
    }),
  liveBatchSave: (payload: import('../types/index.js').LiveBatchSavePayload) =>
    apiFetch<{
      settings: SiteSettings;
      bundles: Bundle[];
      version: number;
      lastUpdated: string;
    }>('/api/admin/live-save', {
      method: 'PUT',
      body: JSON.stringify(payload),
    }),
  changeAdminCode: (currentCode: string, newCode: string) =>
    apiFetch<{ success: boolean; message: string }>('/api/admin/change-code', {
      method: 'POST',
      body: JSON.stringify({ currentCode, newCode }),
    }),

  // Channels (Public password-protected)
  unlockChannels: (password: string) =>
    apiFetch<{ success: boolean; token: string; message: string }>('/api/channels/unlock', {
      method: 'POST',
      body: JSON.stringify({ password }),
    }),
  lockChannels: async () => {
    try {
      await apiFetch<{ success: boolean }>('/api/channels/lock', { method: 'POST' });
    } finally {
      clearChannelsToken();
    }
  },
  getChannels: () => apiFetch<Channel[]>('/api/channels'),

  // Channels (Admin)
  getAdminChannels: () => apiFetch<Channel[]>('/api/admin/channels'),
  createChannel: (channel: Partial<Channel>) =>
    apiFetch<Channel>('/api/admin/channels', {
      method: 'POST',
      body: JSON.stringify(channel),
    }),
  updateChannel: (id: string, channel: Partial<Channel>) =>
    apiFetch<Channel>(`/api/admin/channels/${id}`, {
      method: 'PUT',
      body: JSON.stringify(channel),
    }),
  deleteChannel: (id: string) =>
    apiFetch<{ success: boolean }>(`/api/admin/channels/${id}`, {
      method: 'DELETE',
    }),
  reorderChannels: (orderedIds: string[]) =>
    apiFetch<Channel[]>('/api/admin/channels/reorder', {
      method: 'POST',
      body: JSON.stringify({ orderedIds }),
    }),
  changeChannelsPassword: (newPassword: string) =>
    apiFetch<{ success: boolean; message: string }>('/api/admin/change-channels-password', {
      method: 'POST',
      body: JSON.stringify({ newPassword }),
    }),

  // Database Status & Cloud Firestore Sync
  getDatabaseStatus: () =>
    apiFetch<import('../types/index.js').DatabaseStatus>('/api/admin/database-status'),
  syncDatabase: () =>
    apiFetch<{ success: boolean; message: string; status: import('../types/index.js').DatabaseStatus }>('/api/admin/database-sync', {
      method: 'POST',
    }),

  // Digital Keys & Codes
  getKeys: (bundleId?: string) => {
    const query = bundleId ? `?bundleId=${encodeURIComponent(bundleId)}` : '';
    return apiFetch<import('../types/index.js').GameKey[]>(`/api/admin/keys${query}`);
  },
  createKey: (key: Partial<import('../types/index.js').GameKey>) =>
    apiFetch<import('../types/index.js').GameKey>('/api/admin/keys', {
      method: 'POST',
      body: JSON.stringify(key),
    }),
  batchGenerateKeys: (bundleId: string, bundleTitle: string, count: number, prefix?: string) =>
    apiFetch<{ success: boolean; count: number; keys: import('../types/index.js').GameKey[] }>('/api/admin/keys/batch-generate', {
      method: 'POST',
      body: JSON.stringify({ bundleId, bundleTitle, count, prefix }),
    }),
  updateKey: (id: string, updates: Partial<import('../types/index.js').GameKey>) =>
    apiFetch<import('../types/index.js').GameKey>(`/api/admin/keys/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    }),
  deleteKey: (id: string) =>
    apiFetch<{ success: boolean; message: string }>(`/api/admin/keys/${id}`, {
      method: 'DELETE',
    }),

  // Upload single bundle asset (cover or video)
  uploadBundleFile: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return apiFetch<{ success: boolean; fileUrl: string; filename: string }>('/api/admin/upload/bundle-file', {
      method: 'POST',
      body: formData,
    });
  },

  // Batch upload review screenshots (up to 100)
  uploadReviewsBatch: async (
    files: File[],
    autoCreate = true,
    defaultNote?: string
  ) => {
    const formData = new FormData();
    for (const file of files) {
      formData.append('screenshots', file);
    }
    formData.append('createEntries', String(autoCreate));
    if (defaultNote) {
      formData.append('defaultNote', defaultNote);
    }

    return apiFetch<{
      success: boolean;
      count: number;
      reviews?: ReviewScreenshot[];
      files: Array<{ url: string; originalName: string; size: number }>;
    }>('/api/admin/upload/reviews-batch', {
      method: 'POST',
      body: formData,
    });
  },

  // Universal media upload (images, videos, banners) with GitHub permanent commit
  uploadMedia: async (file: File, category: string = 'media') => {
    const formData = new FormData();
    formData.append('file', file);
    return apiFetch<import('../types/index.js').UploadMediaResult>(
      `/api/admin/upload/media?category=${encodeURIComponent(category)}`,
      {
        method: 'POST',
        body: formData,
      }
    );
  },

  // GitHub Permanent Cloud Storage
  testGitHubConnection: (params: { token?: string; repo?: string; branch?: string }) =>
    apiFetch<import('../types/index.js').GitHubSyncStatus>('/api/admin/github/test-connection', {
      method: 'POST',
      body: JSON.stringify(params),
    }),
  syncAllToGitHub: () =>
    apiFetch<{
      success: boolean;
      totalFound: number;
      syncedCount: number;
      skippedCount: number;
      errors: string[];
      files: Array<{ filename: string; url: string; size: number }>;
    }>('/api/admin/github/sync-all', {
      method: 'POST',
    }),
  getGitHubStatus: () =>
    apiFetch<import('../types/index.js').GitHubSyncStatus>('/api/admin/github/status'),
  listMedia: () =>
    apiFetch<{
      success: boolean;
      totalCount: number;
      hasGitHub: boolean;
      githubRepo?: string;
      files: Array<{
        filename: string;
        category: string;
        relativePath: string;
        localUrl: string;
        permanentUrl: string;
        size: number;
        mtime: string;
        isVideo: boolean;
      }>;
    }>('/api/admin/media/list'),
};

// Helper to open direct support/order chat on WhatsApp Business
export function openInstagram(_instagramUrl: string, _bundleTitle?: string, _price?: number) {
  const targetUrl = 'https://wa.me/message/JM3YAJDN36QQC1';

  // Safe navigation without window.open
  const anchor = document.createElement('a');
  anchor.href = targetUrl;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
