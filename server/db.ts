import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Dynamic type definitions & modules for Firebase
type FirebaseApp = any;
type Firestore = any;

let fbAppMod: any = null;
let fbFsMod: any = null;

async function loadFirebaseModules() {
  if (fbAppMod && fbFsMod) {
    return { fbApp: fbAppMod, fbFs: fbFsMod };
  }
  try {
    // Dynamically import Firebase without static resolution errors
    // @ts-ignore
    const appPromise = import('firebase/app');
    // @ts-ignore
    const fsPromise = import('firebase/firestore');
    const [appModule, fsModule] = await Promise.all([appPromise, fsPromise]);
    fbAppMod = appModule;
    fbFsMod = fsModule;
    return { fbApp: fbAppMod, fbFs: fbFsMod };
  } catch (err: any) {
    console.warn('[Firebase] Firebase SDK module not found or unavailable:', err?.message || err);
    return null;
  }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.resolve(ROOT_DIR, 'data');
const DB_FILE = path.resolve(DATA_DIR, 'store.json');
const CONFIG_FILE = path.resolve(ROOT_DIR, 'firebase-applet-config.json');
const UPLOADS_DIR = path.resolve(ROOT_DIR, 'uploads');
const BUNDLE_UPLOADS = path.resolve(UPLOADS_DIR, 'bundles');
const REVIEW_UPLOADS = path.resolve(UPLOADS_DIR, 'reviews');

// Ensure directories exist
for (const dir of [DATA_DIR, UPLOADS_DIR, BUNDLE_UPLOADS, REVIEW_UPLOADS]) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

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
  badge?: string; // e.g., "BEST VALUE", "POPULAR", "ULTIMATE"
  featured?: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

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

export interface ReviewScreenshot {
  id: string;
  reviewerName?: string; // Indian Name e.g. "Rohan Sharma"
  customerHandle?: string;
  location?: string; // Indian City / State e.g. "New Delhi"
  gameTitle?: string;
  rating?: number; // 1-5
  title?: string;
  note?: string; // Text review
  imageUrl?: string;
  hidden: boolean;
  order: number;
  createdAt: string;
}

export type ChannelPlatform = 'telegram' | 'discord' | 'website';

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

export type PrimaryChannelType = 'instagram' | 'telegram' | 'whatsapp' | 'custom';

export interface SiteSettings {
  siteTitle: string;
  logoText: string;
  heroHeading: string;
  heroSubtitle: string;
  heroCtaText: string;
  heroSecondaryText: string;
  instagramUrl: string;
  accentColor: string; // e.g., '#f59e0b'
  footerText: string;
  supportNote: string;
  announcementText?: string;

  // Smart Multi-Channel Switcher Settings
  primaryChannelType?: PrimaryChannelType;
  channelHandle?: string;
  channelUrl?: string;
  channelCustomLabel?: string;

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

export interface AppDatabase {
  settings: SiteSettings;
  bundles: Bundle[];
  reviews: ReviewScreenshot[];
  channels: Channel[];
  keys: GameKey[];
  adminPasswordHash?: string; // If admin changes password
  channelsPasswordHash?: string; // If admin changes channels access password
}

const DEFAULT_SETTINGS: SiteSettings = {
  siteTitle: "Gamers Planet - Premium Gaming • Lifetime Access • Personal Support",
  logoText: "GAMERS PLANET",
  heroHeading: "LEGENDARY PC GAMING BUNDLES",
  heroSubtitle: "Premium Gaming • Lifetime Access • Personal Support. Instant access to massive game vaults, Steam Unlock features, and verified credentials.",
  heroCtaText: "Browse Vault Bundles",
  heroSecondaryText: "View Customer Proof",
  instagramUrl: "https://instagram.com/gamersplanet20.26",
  accentColor: "#f59e0b", // Gold / Amber gaming accent
  footerText: "© 2026 Gamers Planet. Premium Gaming • Lifetime Access • Personal Support. All game titles, logos, and trademarks belong to their respective owners.",
  supportNote: "DM us on Instagram @gamersplanet20.26 for instant setup support and custom game requests.",
  announcementText: "🔥 FLASH SALE: Extra ₹150 OFF any Mega or Ultimate Bundle this weekend! Message on Instagram to claim.",
  primaryChannelType: 'instagram',
  channelHandle: '@gamersplanet20.26',
  channelUrl: 'https://instagram.com/gamersplanet20.26',
  customTexts: {},
  version: 1,
  lastUpdated: new Date().toISOString()
};

const DEFAULT_BUNDLES: Bundle[] = [
  {
    id: "bundle-basic-gaming",
    title: "BASIC GAMING BUNDLE",
    price: 399,
    originalPrice: 1499,
    gameCount: 1000,
    shortDescription: "1,000 games with Steam Unlock feature, lifetime access, and complete personal support.",
    fullDescription: "GAMERS PLANET BASIC GAMING BUNDLE\n• 1,000 games\n• Lifetime access\n• Steam Unlock Feature\n• Complete setup assistance\n• Personal customer support\n\nInstant digital access to 1,000 top PC games with lifetime validity. Includes Steam Unlock feature, complete step-by-step setup assistance, and personal customer support.",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    includedItems: [
      "1,000 games",
      "Lifetime access",
      "Steam Unlock Feature",
      "Complete setup assistance",
      "Personal customer support"
    ],
    category: "Starter Vault",
    badge: "FEATURED OFFER",
    featured: true,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "bundle-steam-unlock",
    title: "STEAM UNLOCK BUNDLE",
    price: 449,
    originalPrice: 1999,
    gameCount: 1,
    shortDescription: "Steam Unlock Feature with lifetime access, setup assistance, and personal customer support.",
    fullDescription: "GAMERS PLANET STEAM UNLOCK BUNDLE\n• Steam Unlock Feature\n• Lifetime access\n• Setup assistance\n• Personal customer support\n\nDedicated Steam Unlock package from GAMERS PLANET. Unlock premium Steam features and game libraries with lifetime validity, guided step-by-step setup assistance, and personal customer support.",
    coverImage: "https://images.unsplash.com/photo-1612287271452-f67f67be8eb0?q=80&w=1200&auto=format&fit=crop",
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    includedItems: [
      "Steam Unlock Feature",
      "Lifetime access",
      "Setup assistance",
      "Personal customer support"
    ],
    category: "Steam Unlock",
    badge: "STEAM UNLOCK",
    featured: false,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "bundle-full-unlock",
    title: "FULL UNLOCK BUNDLE",
    price: 699,
    originalPrice: 2999,
    gameCount: 1000,
    shortDescription: "1,000 games + Steam Unlock + VIP channels, Sites section & Game ID/Password listings access.",
    fullDescription: "GAMERS PLANET FULL UNLOCK BUNDLE\n• 1,000 games\n• Steam Unlock Feature\n• Lifetime access\n• Access to website channels and the Sites section\n• Access to the website’s game ID and password section\n• Lifetime access to the available ID and password listings\n• Complete setup assistance\n• Personal customer support\n\nThe comprehensive full unlock suite from GAMERS PLANET. Includes 1,000 games, full Steam Unlock feature, lifetime access, website channels and Sites section access, website game ID and password listings, complete setup assistance, and personal customer support.",
    coverImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    includedItems: [
      "1,000 games",
      "Steam Unlock Feature",
      "Lifetime access",
      "Access to website channels and the Sites section",
      "Access to the website’s game ID and password section",
      "Lifetime access to the available ID and password listings",
      "Complete setup assistance",
      "Personal customer support"
    ],
    category: "Full Unlock",
    badge: "MOST POPULAR",
    featured: true,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "bundle-mega-gaming",
    title: "MEGA GAMING BUNDLE",
    price: 799,
    originalPrice: 3999,
    gameCount: 27000,
    shortDescription: "27,000 games + Steam Unlock + VIP website channels & Game ID/Password section access.",
    fullDescription: "GAMERS PLANET MEGA GAMING BUNDLE\n• 27,000 games\n• Steam Unlock Feature\n• Lifetime access\n• Access to website channels and the Sites section\n• Access to the website’s game ID and password section\n• Lifetime access to the available ID and password listings\n• Setup assistance\n• Personal customer support\n\nMassive gaming vault featuring 27,000 games. Full Steam Unlock feature, lifetime access, website channels and Sites section access, game ID and password listings access, setup assistance, and personal customer support.",
    coverImage: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop",
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    includedItems: [
      "27,000 games",
      "Steam Unlock Feature",
      "Lifetime access",
      "Access to website channels and the Sites section",
      "Access to the website’s game ID and password section",
      "Lifetime access to the available ID and password listings",
      "Setup assistance",
      "Personal customer support"
    ],
    category: "Mega Vault",
    badge: "MEGA VALUE",
    featured: true,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "bundle-ultimate-gaming",
    title: "ULTIMATE GAMING BUNDLE",
    price: 999,
    originalPrice: 4999,
    gameCount: 60000,
    shortDescription: "Apex 60,000 games vault + Steam Unlock + VIP Channels + Game ID/Password Listings & White-Glove Support.",
    fullDescription: "GAMERS PLANET ULTIMATE GAMING BUNDLE\n• 60,000 games\n• Steam Unlock Feature\n• Lifetime access\n• Access to website channels and the Sites section\n• Access to the website’s game ID and password section\n• Lifetime access to the available ID and password listings\n• Complete setup assistance\n• Personal customer support\n\nThe apex collection from GAMERS PLANET. An immense library of 60,000 games, full Steam Unlock feature, lifetime access, website channels and Sites section access, game ID and password section with lifetime listing access, complete setup assistance, and dedicated personal customer support.",
    coverImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    includedItems: [
      "60,000 games",
      "Steam Unlock Feature",
      "Lifetime access",
      "Access to website channels and the Sites section",
      "Access to the website’s game ID and password section",
      "Lifetime access to the available ID and password listings",
      "Complete setup assistance",
      "Personal customer support"
    ],
    category: "Ultimate Vault",
    badge: "ULTIMATE BUNDLE",
    featured: true,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

const DEFAULT_CHANNELS: Channel[] = [
  {
    id: "chan-telegram-vip",
    name: "Gamers Planet VIP Drops & Vaults",
    platform: "telegram",
    description: "Instant alerts for daily Steam AAA deals, direct game keys, limited discount codes, and community giveaways.",
    inviteUrl: "https://t.me/gamersplanet2026",
    thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    category: "VIP Deals & Alerts",
    published: true,
    order: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "chan-discord-official",
    name: "Gamers Planet HQ Gaming Lounge",
    platform: "discord",
    description: "Chat with verified gamers, find co-op squad mates, request custom game bundles, and get 24/7 technical setup assistance.",
    inviteUrl: "https://discord.gg/gamersplanet",
    thumbnailUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    category: "Community & Squads",
    published: true,
    order: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "chan-website-portal",
    name: "Gamers Planet Official Web Portal",
    platform: "website",
    description: "Official web catalog with instantaneous digital vault delivery, live order status, and FAQ knowledgebase.",
    inviteUrl: "https://gamersplanet.in",
    thumbnailUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop",
    category: "Official Portals",
    published: true,
    order: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

/**
 * Remove undefined values so Firestore does not reject payloads
 */
function cleanFirestoreData<T extends Record<string, any>>(obj: T): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [key, val] of Object.entries(obj)) {
    if (val !== undefined) {
      if (Array.isArray(val)) {
        result[key] = val.map(item => (typeof item === 'object' && item !== null ? cleanFirestoreData(item) : item));
      } else if (typeof val === 'object' && val !== null) {
        result[key] = cleanFirestoreData(val);
      } else {
        result[key] = val;
      }
    }
  }
  return result;
}

class DatabaseService {
  private db: AppDatabase;
  private firebaseApp: FirebaseApp | null = null;
  private firestore: Firestore | null = null;
  private fbApp: any = null;
  private fbFs: any = null;
  private isFirebaseConnected = false;
  private projectId = '';
  private databaseId = '';
  private lastSyncTime = '';

  constructor() {
    this.db = this.loadLocalDatabase();
    this.initFirebase().catch(err => {
      console.warn('[Firebase] Background initialization warning:', err.message);
    });
  }

  /**
   * Initializes connection to Firebase Firestore using credentials
   * from firebase-applet-config.json or environment variables.
   */
  public async initFirebase(): Promise<boolean> {
    try {
      let config: any = null;

      if (fs.existsSync(CONFIG_FILE)) {
        const raw = fs.readFileSync(CONFIG_FILE, 'utf-8');
        config = JSON.parse(raw);
      } else if (process.env.FIREBASE_CONFIG) {
        config = JSON.parse(process.env.FIREBASE_CONFIG);
      } else if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_API_KEY) {
        config = {
          projectId: process.env.FIREBASE_PROJECT_ID,
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN || `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
          firestoreDatabaseId: process.env.FIREBASE_DATABASE_ID || '(default)'
        };
      }

      if (!config || !config.apiKey || !config.projectId) {
        console.log('[Firebase] No valid Firebase configuration found yet. Operating on mirrored local storage.');
        return false;
      }

      const modules = await loadFirebaseModules();
      if (!modules) {
        console.log('[Firebase] Firebase modules not available in current runtime. Operating on mirrored local storage.');
        return false;
      }
      this.fbApp = modules.fbApp;
      this.fbFs = modules.fbFs;

      this.projectId = config.projectId;
      this.databaseId = config.firestoreDatabaseId || '(default)';

      this.firebaseApp = this.fbApp.getApps().length === 0 ? this.fbApp.initializeApp(config) : this.fbApp.getApp();
      this.firestore = this.fbFs.getFirestore(this.firebaseApp, this.databaseId);

      // Verify connection with server read
      try {
        await this.fbFs.getDocFromServer(this.fbFs.doc(this.firestore, 'test', 'connection'));
      } catch (e: any) {
        // Connection test doc may not exist or is fine, as long as client is not offline
        if (e.message && e.message.includes('client is offline')) {
          console.warn('[Firebase] Client reported offline. Continuing with local cache.');
          return false;
        }
      }

      this.isFirebaseConnected = true;
      console.log(`[Firebase] Firestore connected successfully! (Project: ${this.projectId}, DB: ${this.databaseId})`);

      // Sync data from Firestore or seed if cloud database is empty
      await this.syncWithFirestore();
      return true;
    } catch (err: any) {
      console.error('[Firebase] Failed to connect to Firestore:', err.message);
      this.isFirebaseConnected = false;
      return false;
    }
  }

  /**
   * Syncs data between Firestore and in-memory cache.
   * If Firestore is empty, seeds all existing local data into Firestore.
   */
  public async syncWithFirestore(): Promise<void> {
    if (!this.firestore || !this.fbFs) return;

    try {
      // 1. Fetch Bundles
      const bundlesSnap = await this.fbFs.getDocs(this.fbFs.collection(this.firestore, 'bundles'));
      const remoteBundles: Bundle[] = [];
      bundlesSnap.forEach((d: any) => {
        const data = d.data() as Bundle;
        remoteBundles.push({ ...data, id: d.id });
      });
      // Maintain natural tier order (price ascending: 399, 449, 699, 799, 999)
      remoteBundles.sort((a, b) => a.price - b.price);

      // 2. Fetch Channels
      const channelsSnap = await this.fbFs.getDocs(this.fbFs.collection(this.firestore, 'channels'));
      const remoteChannels: Channel[] = [];
      channelsSnap.forEach((d: any) => {
        const data = d.data() as Channel;
        remoteChannels.push({ ...data, id: d.id });
      });

      // 3. Fetch Reviews
      const reviewsSnap = await this.fbFs.getDocs(this.fbFs.collection(this.firestore, 'reviews'));
      const remoteReviews: ReviewScreenshot[] = [];
      reviewsSnap.forEach((d: any) => {
        const data = d.data() as ReviewScreenshot;
        remoteReviews.push({ ...data, id: d.id });
      });

      // 4. Fetch Keys
      const keysSnap = await this.fbFs.getDocs(this.fbFs.collection(this.firestore, 'keys'));
      const remoteKeys: GameKey[] = [];
      keysSnap.forEach((d: any) => {
        const data = d.data() as GameKey;
        remoteKeys.push({ ...data, id: d.id });
      });

      // 5. Fetch Settings & Security & Metadata
      const metaSnap = await this.fbFs.getDoc(this.fbFs.doc(this.firestore, 'settings', 'metadata'));
      const settingsSnap = await this.fbFs.getDoc(this.fbFs.doc(this.firestore, 'settings', 'site_settings'));
      const securitySnap = await this.fbFs.getDoc(this.fbFs.doc(this.firestore, 'settings', 'security'));

      const isCloudInitialized = metaSnap.exists() || settingsSnap.exists() || remoteBundles.length > 0;

      // If Firestore is already populated with data or initialized, use Firestore data as source of truth!
      if (isCloudInitialized) {
        if (remoteBundles.length > 0) this.db.bundles = remoteBundles;
        if (remoteChannels.length > 0) this.db.channels = remoteChannels;
        if (remoteReviews.length > 0) this.db.reviews = remoteReviews;
        if (remoteKeys.length > 0) this.db.keys = remoteKeys;
        if (settingsSnap.exists()) {
          this.db.settings = { ...DEFAULT_SETTINGS, ...(settingsSnap.data() as SiteSettings) };
        }
        if (securitySnap.exists()) {
          const sec = securitySnap.data() as any;
          if (sec.adminPasswordHash) this.db.adminPasswordHash = sec.adminPasswordHash;
          if (sec.channelsPasswordHash) this.db.channelsPasswordHash = sec.channelsPasswordHash;
        }

        this.lastSyncTime = new Date().toISOString();
        this.saveLocalDatabase();
        console.log(`[Firebase] Loaded ${this.db.bundles.length} bundles, ${this.db.channels.length} channels, ${this.db.reviews.length} reviews from cloud Firestore.`);
      } else {
        // Firestore is empty! Seed local database into Firestore to ensure persistent cloud storage
        console.log('[Firebase] First-time cloud sync: Seeding database to persistent Firestore...');
        await this.seedAllToFirestore();
        this.lastSyncTime = new Date().toISOString();
        console.log('[Firebase] Cloud Firestore seeding complete! Data is now permanently stored in the cloud.');
      }
    } catch (err: any) {
      console.error('[Firebase] Error syncing with Firestore:', err.message);
    }
  }

  /**
   * Seeds all current bundles, channels, reviews, keys, and settings to Firestore.
   */
  private async seedAllToFirestore(): Promise<void> {
    if (!this.firestore || !this.fbFs) return;

    // Seed Bundles
    for (const b of this.db.bundles) {
      try {
        await this.fbFs.setDoc(this.fbFs.doc(this.firestore, 'bundles', b.id), cleanFirestoreData(b));
      } catch (e: any) {
        console.warn(`[Firebase] Failed to seed bundle ${b.id}:`, e.message);
      }
    }

    // Seed Channels
    for (const c of (this.db.channels || [])) {
      try {
        await this.fbFs.setDoc(this.fbFs.doc(this.firestore, 'channels', c.id), cleanFirestoreData(c));
      } catch (e: any) {
        console.warn(`[Firebase] Failed to seed channel ${c.id}:`, e.message);
      }
    }

    // Seed Reviews
    for (const r of (this.db.reviews || [])) {
      try {
        await this.fbFs.setDoc(this.fbFs.doc(this.firestore, 'reviews', r.id), cleanFirestoreData(r));
      } catch (e: any) {
        console.warn(`[Firebase] Failed to seed review ${r.id}:`, e.message);
      }
    }

    // Seed Keys
    for (const k of (this.db.keys || [])) {
      try {
        await this.fbFs.setDoc(this.fbFs.doc(this.firestore, 'keys', k.id), cleanFirestoreData(k));
      } catch (e: any) {
        console.warn(`[Firebase] Failed to seed key ${k.id}:`, e.message);
      }
    }

    // Seed Settings & Security & Metadata
    try {
      await this.fbFs.setDoc(this.fbFs.doc(this.firestore, 'settings', 'metadata'), {
        initialized: true,
        seededAt: new Date().toISOString(),
        version: '1.0.0'
      });
      await this.fbFs.setDoc(this.fbFs.doc(this.firestore, 'settings', 'site_settings'), cleanFirestoreData(this.db.settings));
      const secData: any = {};
      if (this.db.adminPasswordHash) secData.adminPasswordHash = this.db.adminPasswordHash;
      if (this.db.channelsPasswordHash) secData.channelsPasswordHash = this.db.channelsPasswordHash;
      if (Object.keys(secData).length > 0) {
        await this.fbFs.setDoc(this.fbFs.doc(this.firestore, 'settings', 'security'), secData);
      }
    } catch (e: any) {
      console.warn('[Firebase] Failed to seed settings:', e.message);
    }
  }

  private loadLocalDatabase(): AppDatabase {
    try {
      if (fs.existsSync(DB_FILE)) {
        const data = fs.readFileSync(DB_FILE, 'utf-8');
        const parsed = JSON.parse(data) as Partial<AppDatabase>;
        return {
          settings: { ...DEFAULT_SETTINGS, ...(parsed.settings || {}) },
          bundles: Array.isArray(parsed.bundles) && parsed.bundles.length > 0 ? parsed.bundles : DEFAULT_BUNDLES,
          reviews: Array.isArray(parsed.reviews) ? parsed.reviews : [],
          channels: Array.isArray(parsed.channels) && parsed.channels.length > 0 ? parsed.channels : DEFAULT_CHANNELS,
          keys: Array.isArray(parsed.keys) ? parsed.keys : [],
          adminPasswordHash: parsed.adminPasswordHash,
          channelsPasswordHash: parsed.channelsPasswordHash
        };
      }
    } catch (err) {
      console.error('Error reading local store.json, using defaults:', err);
    }

    const initial: AppDatabase = {
      settings: DEFAULT_SETTINGS,
      bundles: DEFAULT_BUNDLES,
      reviews: [],
      channels: DEFAULT_CHANNELS,
      keys: []
    };
    this.saveLocalDatabase(initial);
    return initial;
  }

  private saveLocalDatabase(data?: AppDatabase): void {
    const toSave = data || this.db;
    const tempFile = `${DB_FILE}.tmp`;
    try {
      fs.writeFileSync(tempFile, JSON.stringify(toSave, null, 2), 'utf-8');
      fs.renameSync(tempFile, DB_FILE);
    } catch (err) {
      try {
        fs.writeFileSync(DB_FILE, JSON.stringify(toSave, null, 2), 'utf-8');
      } catch (e) {
        console.error('Fatal database write error:', e);
      }
    }
  }

  // Persist a document directly to Firestore with error resilience
  private async persistToFirestore(col: string, docId: string, data: Record<string, any>): Promise<void> {
    if (!this.firestore || !this.fbFs) return;
    try {
      await this.fbFs.setDoc(this.fbFs.doc(this.firestore, col, docId), cleanFirestoreData(data));
    } catch (err: any) {
      console.error(`[Firebase] Failed to persist ${col}/${docId}:`, err.message);
    }
  }

  private async deleteFromFirestore(col: string, docId: string): Promise<void> {
    if (!this.firestore || !this.fbFs) return;
    try {
      await this.fbFs.deleteDoc(this.fbFs.doc(this.firestore, col, docId));
    } catch (err: any) {
      console.error(`[Firebase] Failed to delete ${col}/${docId}:`, err.message);
    }
  }

  // Status & Telemetry
  public getDatabaseStatus() {
    return {
      firebaseConnected: this.isFirebaseConnected,
      provider: this.isFirebaseConnected ? 'Firebase Firestore (Persistent)' : 'Local File Cache',
      projectId: this.projectId,
      databaseId: this.databaseId,
      bundlesCount: this.db.bundles.length,
      channelsCount: (this.db.channels || []).length,
      reviewsCount: (this.db.reviews || []).length,
      keysCount: (this.db.keys || []).length,
      lastSyncTime: this.lastSyncTime || new Date().toISOString(),
      localCacheValid: true
    };
  }

  // -------------------------------------------------------------
  // SETTINGS & REAL-TIME SYNC
  // -------------------------------------------------------------
  public getDataVersion(): { version: number; lastUpdated: string } {
    const version = this.db.settings.version || 1;
    const lastUpdated = this.db.settings.lastUpdated || new Date().toISOString();
    return { version, lastUpdated };
  }

  public getSettings(): SiteSettings {
    return { ...this.db.settings };
  }

  public updateSettings(updates: Partial<SiteSettings>): SiteSettings {
    const currentVersion = this.db.settings.version || 1;
    const newVersion = currentVersion + 1;
    const lastUpdated = new Date().toISOString();

    this.db.settings = {
      ...this.db.settings,
      ...updates,
      version: newVersion,
      lastUpdated
    };
    this.saveLocalDatabase();
    this.persistToFirestore('settings', 'site_settings', this.db.settings);
    return this.getSettings();
  }

  // Atomic batch save for live in-place edits (settings + bundles together)
  public batchLiveSave(payload: {
    settingsUpdates?: Partial<SiteSettings>;
    bundleUpdates?: Array<{ id: string; updates: Partial<Bundle> }>;
  }): { settings: SiteSettings; bundles: Bundle[]; version: number; lastUpdated: string } {
    const currentVersion = (this.db.settings.version || 1) + 1;
    const lastUpdated = new Date().toISOString();

    // 1. Update settings if provided
    if (payload.settingsUpdates && Object.keys(payload.settingsUpdates).length > 0) {
      this.db.settings = {
        ...this.db.settings,
        ...payload.settingsUpdates,
        version: currentVersion,
        lastUpdated
      };
      this.persistToFirestore('settings', 'site_settings', this.db.settings);
    } else {
      this.db.settings.version = currentVersion;
      this.db.settings.lastUpdated = lastUpdated;
    }

    // 2. Update bundles if provided
    if (Array.isArray(payload.bundleUpdates)) {
      for (const item of payload.bundleUpdates) {
        if (!item.id || !item.updates) continue;
        const idx = this.db.bundles.findIndex(b => b.id === item.id);
        if (idx !== -1) {
          this.db.bundles[idx] = {
            ...this.db.bundles[idx],
            ...item.updates,
            id: item.id,
            updatedAt: lastUpdated
          };
          this.persistToFirestore('bundles', item.id, this.db.bundles[idx]);
        }
      }
    }

    this.saveLocalDatabase();

    return {
      settings: this.getSettings(),
      bundles: this.getBundles(true),
      version: currentVersion,
      lastUpdated
    };
  }

  // -------------------------------------------------------------
  // BUNDLES CRUD
  // -------------------------------------------------------------
  public getBundles(includeInactive = false): Bundle[] {
    if (includeInactive) {
      return [...this.db.bundles];
    }
    return this.db.bundles.filter(b => b.active);
  }

  public getBundleById(id: string): Bundle | undefined {
    return this.db.bundles.find(b => b.id === id);
  }

  public createBundle(bundleData: Omit<Bundle, 'id' | 'createdAt' | 'updatedAt'>): Bundle {
    const newBundle: Bundle = {
      ...bundleData,
      id: `bundle-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    this.db.bundles.unshift(newBundle);
    this.saveLocalDatabase();
    this.persistToFirestore('bundles', newBundle.id, newBundle);
    return newBundle;
  }

  public updateBundle(id: string, updates: Partial<Bundle>): Bundle | null {
    const index = this.db.bundles.findIndex(b => b.id === id);
    if (index === -1) return null;

    this.db.bundles[index] = {
      ...this.db.bundles[index],
      ...updates,
      id, // Preserve ID
      updatedAt: new Date().toISOString()
    };
    const updated = this.db.bundles[index];
    this.saveLocalDatabase();
    this.persistToFirestore('bundles', id, updated);
    return updated;
  }

  public deleteBundle(id: string): boolean {
    const initialLen = this.db.bundles.length;
    this.db.bundles = this.db.bundles.filter(b => b.id !== id);
    if (this.db.bundles.length !== initialLen) {
      this.saveLocalDatabase();
      this.deleteFromFirestore('bundles', id);
      return true;
    }
    return false;
  }

  // -------------------------------------------------------------
  // DIGITAL KEYS & ACCESS CODES CRUD
  // -------------------------------------------------------------
  public getKeys(bundleId?: string): GameKey[] {
    if (!this.db.keys) this.db.keys = [];
    if (bundleId) {
      return this.db.keys.filter(k => k.bundleId === bundleId);
    }
    return [...this.db.keys];
  }

  public getKeyById(id: string): GameKey | undefined {
    if (!this.db.keys) this.db.keys = [];
    return this.db.keys.find(k => k.id === id);
  }

  public createKey(keyData: Omit<GameKey, 'id' | 'createdAt'>): GameKey {
    if (!this.db.keys) this.db.keys = [];
    const newKey: GameKey = {
      ...keyData,
      id: `key-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString()
    };
    this.db.keys.unshift(newKey);
    this.saveLocalDatabase();
    this.persistToFirestore('keys', newKey.id, newKey);
    return newKey;
  }

  public generateBatchKeys(bundleId: string, bundleTitle: string, count = 5, prefix = 'VAULT'): GameKey[] {
    if (!this.db.keys) this.db.keys = [];
    const created: GameKey[] = [];
    const now = new Date().toISOString();

    for (let i = 0; i < count; i++) {
      const seg1 = Math.random().toString(36).substring(2, 6).toUpperCase();
      const seg2 = Math.random().toString(36).substring(2, 6).toUpperCase();
      const seg3 = Math.random().toString(36).substring(2, 6).toUpperCase();
      const code = `${prefix}-${seg1}-${seg2}-${seg3}`;

      const key: GameKey = {
        id: `key-${Date.now()}-${i}-${Math.random().toString(36).substring(2, 6)}`,
        bundleId,
        bundleTitle,
        code,
        status: 'active',
        createdAt: now
      };
      created.push(key);
      this.persistToFirestore('keys', key.id, key);
    }

    this.db.keys = [...created, ...this.db.keys];
    this.saveLocalDatabase();
    return created;
  }

  public updateKey(id: string, updates: Partial<GameKey>): GameKey | null {
    if (!this.db.keys) this.db.keys = [];
    const index = this.db.keys.findIndex(k => k.id === id);
    if (index === -1) return null;

    this.db.keys[index] = {
      ...this.db.keys[index],
      ...updates,
      id
    };
    const updated = this.db.keys[index];
    this.saveLocalDatabase();
    this.persistToFirestore('keys', id, updated);
    return updated;
  }

  public deleteKey(id: string): boolean {
    if (!this.db.keys) return false;
    const initialLen = this.db.keys.length;
    this.db.keys = this.db.keys.filter(k => k.id !== id);
    if (this.db.keys.length !== initialLen) {
      this.saveLocalDatabase();
      this.deleteFromFirestore('keys', id);
      return true;
    }
    return false;
  }

  // -------------------------------------------------------------
  // REVIEWS CRUD
  // -------------------------------------------------------------
  public getReviews(includeHidden = false): ReviewScreenshot[] {
    const list = includeHidden
      ? [...(this.db.reviews || [])]
      : (this.db.reviews || []).filter(r => !r.hidden);

    return list.sort((a, b) => a.order - b.order);
  }

  public createReview(reviewData: Omit<ReviewScreenshot, 'id' | 'createdAt'>): ReviewScreenshot {
    if (!this.db.reviews) this.db.reviews = [];
    const newReview: ReviewScreenshot = {
      ...reviewData,
      id: `rev-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString()
    };
    this.db.reviews.unshift(newReview);
    this.saveLocalDatabase();
    this.persistToFirestore('reviews', newReview.id, newReview);
    return newReview;
  }

  public createBatchReviews(reviewsData: Array<Omit<ReviewScreenshot, 'id' | 'createdAt'>>): ReviewScreenshot[] {
    if (!this.db.reviews) this.db.reviews = [];
    const created: ReviewScreenshot[] = [];
    const timestamp = Date.now();
    for (let i = 0; i < reviewsData.length; i++) {
      const rev: ReviewScreenshot = {
        ...reviewsData[i],
        id: `rev-${timestamp}-${i}-${Math.random().toString(36).substring(2, 6)}`,
        createdAt: new Date().toISOString()
      };
      created.push(rev);
      this.persistToFirestore('reviews', rev.id, rev);
    }
    this.db.reviews = [...created, ...this.db.reviews];
    this.saveLocalDatabase();
    return created;
  }

  public updateReview(id: string, updates: Partial<ReviewScreenshot>): ReviewScreenshot | null {
    if (!this.db.reviews) this.db.reviews = [];
    const index = this.db.reviews.findIndex(r => r.id === id);
    if (index === -1) return null;

    this.db.reviews[index] = {
      ...this.db.reviews[index],
      ...updates,
      id // preserve ID
    };
    const updated = this.db.reviews[index];
    this.saveLocalDatabase();
    this.persistToFirestore('reviews', id, updated);
    return updated;
  }

  public deleteReview(id: string): boolean {
    if (!this.db.reviews) return false;
    const initialLen = this.db.reviews.length;
    this.db.reviews = this.db.reviews.filter(r => r.id !== id);
    if (this.db.reviews.length !== initialLen) {
      this.saveLocalDatabase();
      this.deleteFromFirestore('reviews', id);
      return true;
    }
    return false;
  }

  public reorderReviews(orderedIds: string[]): ReviewScreenshot[] {
    if (!this.db.reviews) return [];
    const map = new Map(this.db.reviews.map(r => [r.id, r]));
    const reordered: ReviewScreenshot[] = [];
    let order = 1;

    for (const id of orderedIds) {
      const item = map.get(id);
      if (item) {
        item.order = order++;
        reordered.push(item);
        this.persistToFirestore('reviews', item.id, item);
        map.delete(id);
      }
    }

    for (const remaining of map.values()) {
      remaining.order = order++;
      reordered.push(remaining);
      this.persistToFirestore('reviews', remaining.id, remaining);
    }

    this.db.reviews = reordered;
    this.saveLocalDatabase();
    return this.getReviews(true);
  }

  // -------------------------------------------------------------
  // ADMIN ACCESS PASSWORDS & SECURITY
  // -------------------------------------------------------------
  public getCustomPasswordHash(): string | undefined {
    return this.db.adminPasswordHash;
  }

  public setCustomPasswordHash(hash: string): void {
    this.db.adminPasswordHash = hash;
    this.saveLocalDatabase();
    this.persistToFirestore('settings', 'security', {
      adminPasswordHash: hash,
      channelsPasswordHash: this.db.channelsPasswordHash
    });
  }

  public getChannelsPasswordHash(): string | undefined {
    return this.db.channelsPasswordHash;
  }

  public setChannelsPasswordHash(hash: string): void {
    this.db.channelsPasswordHash = hash;
    this.saveLocalDatabase();
    this.persistToFirestore('settings', 'security', {
      adminPasswordHash: this.db.adminPasswordHash,
      channelsPasswordHash: hash
    });
  }

  // -------------------------------------------------------------
  // CHANNELS CRUD
  // -------------------------------------------------------------
  public getChannels(includeUnpublished = false): Channel[] {
    const list = includeUnpublished
      ? [...(this.db.channels || [])]
      : (this.db.channels || []).filter(c => c.published);

    return list.sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  public getChannelById(id: string): Channel | undefined {
    return (this.db.channels || []).find(c => c.id === id);
  }

  public createChannel(data: Omit<Channel, 'id' | 'createdAt' | 'updatedAt'>): Channel {
    const newChan: Channel = {
      ...data,
      id: `chan-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    if (!this.db.channels) this.db.channels = [];
    this.db.channels.push(newChan);
    this.saveLocalDatabase();
    this.persistToFirestore('channels', newChan.id, newChan);
    return newChan;
  }

  public updateChannel(id: string, updates: Partial<Channel>): Channel | null {
    if (!this.db.channels) this.db.channels = [];
    const index = this.db.channels.findIndex(c => c.id === id);
    if (index === -1) return null;

    this.db.channels[index] = {
      ...this.db.channels[index],
      ...updates,
      id,
      updatedAt: new Date().toISOString()
    };
    const updated = this.db.channels[index];
    this.saveLocalDatabase();
    this.persistToFirestore('channels', id, updated);
    return updated;
  }

  public deleteChannel(id: string): boolean {
    if (!this.db.channels) return false;
    const initialLen = this.db.channels.length;
    this.db.channels = this.db.channels.filter(c => c.id !== id);
    if (this.db.channels.length !== initialLen) {
      this.saveLocalDatabase();
      this.deleteFromFirestore('channels', id);
      return true;
    }
    return false;
  }

  public reorderChannels(orderedIds: string[]): Channel[] {
    if (!this.db.channels) return [];
    const map = new Map(this.db.channels.map(c => [c.id, c]));
    const reordered: Channel[] = [];
    let order = 1;

    for (const id of orderedIds) {
      const item = map.get(id);
      if (item) {
        item.order = order++;
        reordered.push(item);
        this.persistToFirestore('channels', item.id, item);
        map.delete(id);
      }
    }

    for (const remaining of map.values()) {
      remaining.order = order++;
      reordered.push(remaining);
      this.persistToFirestore('channels', remaining.id, remaining);
    }

    this.db.channels = reordered;
    this.saveLocalDatabase();
    return this.getChannels(true);
  }
}

export const dbService = new DatabaseService();
