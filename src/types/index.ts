export interface Bundle {
  id: string;
  title: string;
  price: number; // in INR ₹
  originalPrice?: number;
  gameCount: number;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  videoPreview?: string;
  videoPlaylist?: string[]; // Multiple video parts played in sequence (Part 1 -> Part 2 -> Part 3...)
  includedItems: string[];
  category?: string;
  badge?: string;
  featured?: boolean;
  active: boolean;
  popularTitlesPreview?: {
    title: string;
    coverImage: string;
    genre?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}

export interface ReviewScreenshot {
  id: string;
  reviewerName?: string; // Indian Name e.g. "Rohan Sharma"
  customerHandle?: string; // e.g. "@rohan_gamer_delhi"
  location?: string; // Indian City / State e.g. "New Delhi"
  gameTitle?: string; // e.g. "Cyberpunk & Sci-Fi AAA Titan Vault"
  rating?: number; // 1-5
  title?: string;
  note?: string; // Text review content
  imageUrl?: string; // Optional (text-only reviews)
  hidden: boolean;
  order: number;
  createdAt: string;
}

export type Review = ReviewScreenshot;

export type PrimaryChannelType = 'instagram' | 'telegram' | 'whatsapp' | 'custom';

export interface SiteSettings {
  siteTitle: string;
  logoText: string;
  logoImageUrl?: string;
  heroBackgroundMedia?: string;
  heroHeading: string;
  heroSubtitle: string;
  heroCtaText: string;
  heroSecondaryText: string;
  instagramUrl: string;
  accentColor: string;
  footerText: string;
  supportNote: string;
  announcementText?: string;

  // Smart Multi-Channel Switcher Settings
  primaryChannelType?: PrimaryChannelType; // 'instagram' | 'telegram' | 'whatsapp' | 'custom'
  channelHandle?: string; // e.g. "@gamersplanet20.26" or "+919876543210"
  channelUrl?: string; // direct channel or DM link
  channelCustomLabel?: string; // e.g. "Chat with Us", "Direct DM", etc.

  // Dynamic In-Place Page Texts
  customTexts?: Record<string, string>;

  // GitHub Permanent Cloud Storage
  githubToken?: string;
  githubRepo?: string; // "owner/repo"
  githubBranch?: string; // "main"
  githubFolder?: string; // "uploads"
  githubAutoSync?: boolean;

  // Real-time synchronization
  version?: number;
  lastUpdated?: string;
}

export interface UploadMediaResult {
  success: boolean;
  fileUrl: string;
  filename: string;
  size: number;
  mimetype: string;
  githubSaved?: boolean;
  githubUrl?: string;
  message?: string;
}

export interface GitHubSyncStatus {
  configured: boolean;
  repo?: string;
  branch?: string;
  connected?: boolean;
  success?: boolean;
  isPrivate?: boolean;
  message?: string;
}

export interface LiveBatchSavePayload {
  settingsUpdates?: Partial<SiteSettings>;
  bundleUpdates?: Array<{ id: string; updates: Partial<Bundle> }>;
}

export type ChannelPlatform = 'telegram' | 'discord' | 'website';

export type KeyStatus = 'active' | 'used' | 'inactive';

export interface GameKey {
  id: string;
  bundleId: string;
  bundleTitle?: string;
  code: string;
  status: KeyStatus;
  usedBy?: string;
  usedAt?: string;
  createdAt: string;
  notes?: string;
}

export interface DatabaseStatus {
  firebaseConnected: boolean;
  provider: string;
  databaseId?: string;
  projectId?: string;
  bundlesCount: number;
  channelsCount: number;
  reviewsCount: number;
  keysCount?: number;
  lastSyncTime: string;
  localCacheValid: boolean;
}

export interface Channel {
  id: string;
  name: string;
  platform: ChannelPlatform;
  description: string;
  inviteUrl: string;
  thumbnailUrl?: string;
  category?: string;
  published: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}
