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
  includedItems: string[];
  category?: string;
  badge?: string;
  featured?: boolean;
  active: boolean;
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

export interface SiteSettings {
  siteTitle: string;
  logoText: string;
  heroHeading: string;
  heroSubtitle: string;
  heroCtaText: string;
  heroSecondaryText: string;
  instagramUrl: string;
  accentColor: string;
  footerText: string;
  supportNote: string;
  announcementText?: string;
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
