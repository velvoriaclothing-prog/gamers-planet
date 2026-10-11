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
  imageUrl: string;
  title?: string;
  customerHandle?: string;
  rating?: number;
  note?: string;
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

export type ChannelPlatform = 'telegram' | 'discord';

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
