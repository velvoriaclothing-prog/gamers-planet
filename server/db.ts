import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
  getDocFromServer,
  type Firestore
} from 'firebase/firestore';

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
  siteTitle: "Gamers Planet - Premium Game Vault",
  logoText: "GAMERS PLANET",
  heroHeading: "LEGENDARY PC GAMING BUNDLES",
  heroSubtitle: "Get instant digital access to top-tier AAA game vaults and curated indie collections. Verified delivery directly to your account in minutes.",
  heroCtaText: "Browse Vault Bundles",
  heroSecondaryText: "View Customer Proof",
  instagramUrl: "https://instagram.com/gamersplanet20.26",
  accentColor: "#f59e0b", // Gold / Amber gaming accent
  footerText: "© 2026 Gamers Planet. All game titles, logos, and trademarks belong to their respective owners. Direct verified delivery guaranteed.",
  supportNote: "DM us on Instagram @gamersplanet20.26 for instant setup support and custom game requests.",
  announcementText: "🔥 FLASH SALE: Extra ₹150 OFF any Mega Bundle this weekend! Message on Instagram to claim."
};

const DEFAULT_BUNDLES: Bundle[] = [
  {
    id: "bundle-cyber-master",
    title: "Cyberpunk & Sci-Fi AAA Titan Vault",
    price: 499,
    originalPrice: 2499,
    gameCount: 12,
    shortDescription: "12 ultimate high-octane cyberpunk and futuristic sci-fi titles including full expansions and DLCs.",
    fullDescription: "Immerse yourself into high-tech dystopias and distant galaxies. This vault features Cyberpunk 2077 with Phantom Liberty, Dead Space Remake, Starfield Premium Edition, Horizon Forbidden West, and 8 more handpicked sci-fi heavyweights. Includes lifetime installation guides and cloud save support.",
    coverImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    includedItems: [
      "Cyberpunk 2077 + Phantom Liberty DLC",
      "Dead Space Remake (Digital Deluxe)",
      "Starfield (Shattered Space Ready)",
      "Horizon Forbidden West Complete Edition",
      "Stray (Full Game)",
      "Control: Ultimate Edition",
      "Ghostrunner 2: Brutal Edition",
      "The Surge 2: Premium Collection",
      "Deus Ex: Mankind Divided - Augmented Edition",
      "System Shock Remake",
      "Chorus: Starfighter Edition",
      "Everspace 2: Galactic Deluxe"
    ],
    category: "Action RPG & Sci-Fi",
    badge: "MOST POPULAR",
    featured: true,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "bundle-souls-mythic",
    title: "Elden Mythic & Soulslike Masterpack",
    price: 699,
    originalPrice: 3299,
    gameCount: 10,
    shortDescription: "The definitive collection of unforgiving dark fantasy masterworks with full shadow expansions.",
    fullDescription: "Test your skill across the most celebrated action role-playing games ever made. Contains Elden Ring with the Shadow of the Erdtree DLC, Black Myth: Wukong, Lies of P Deluxe, Sekiro: Shadows Die Twice GOTY, and Dark Souls Trilogy Remastered. Fully tested for smooth 60+ FPS performance.",
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    includedItems: [
      "Elden Ring + Shadow of the Erdtree",
      "Black Myth: Wukong (Deluxe Edition)",
      "Lies of P (Deluxe Edition with soundtrack)",
      "Sekiro: Shadows Die Twice - GOTY",
      "Dark Souls: Remastered",
      "Dark Souls II: Scholar of the First Sin",
      "Dark Souls III: The Fire Fades Edition",
      "Mortal Shell: Enhanced Edition",
      "Lords of the Fallen (2023 Edition)",
      "Nioh 2: The Complete Edition"
    ],
    category: "Hardcore RPG",
    badge: "BEST VALUE",
    featured: true,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "bundle-open-world-legends",
    title: "Open World Legends & Story Pack",
    price: 399,
    originalPrice: 1999,
    gameCount: 15,
    shortDescription: "Over 500+ hours of legendary cinematic storytelling across massive open worlds.",
    fullDescription: "From the wild west to ancient Greece and zombie-ravaged landscapes. Includes Red Dead Redemption 2 Ultimate Edition, The Witcher 3: Wild Hunt Complete, Ghost of Tsushima Director's Cut, God of War, and Grand Theft Auto V Premium. Ideal for gamers wanting endless epic adventures.",
    coverImage: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop",
    videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    includedItems: [
      "Red Dead Redemption 2: Ultimate Edition",
      "The Witcher 3: Wild Hunt - Complete Edition",
      "Ghost of Tsushima: Director's Cut",
      "God of War (PC Enhanced Edition)",
      "Grand Theft Auto V: Premium Edition",
      "Assassin's Creed Valhalla: Ragnarök Pack",
      "Days Gone: Remastered PC",
      "Spider-Man Remastered PC",
      "Spider-Man: Miles Morales",
      "Far Cry 6: Game of the Year Edition",
      "Watch Dogs: Legion Ultimate",
      "Mad Max: Wasteland Edition",
      "Middle-earth: Shadow of War Definitive",
      "Kingdom Come: Deliverance Royal Edition",
      "Skyrim Special Edition (Anniversary DLC)"
    ],
    category: "Cinematic Open World",
    badge: "MEGA PACK",
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

      this.projectId = config.projectId;
      this.databaseId = config.firestoreDatabaseId || '(default)';

      this.firebaseApp = getApps().length === 0 ? initializeApp(config) : getApp();
      this.firestore = getFirestore(this.firebaseApp, this.databaseId);

      // Verify connection with server read
      try {
        await getDocFromServer(doc(this.firestore, 'test', 'connection'));
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
    if (!this.firestore) return;

    try {
      // 1. Fetch Bundles
      const bundlesSnap = await getDocs(collection(this.firestore, 'bundles'));
      const remoteBundles: Bundle[] = [];
      bundlesSnap.forEach(d => {
        const data = d.data() as Bundle;
        remoteBundles.push({ ...data, id: d.id });
      });

      // 2. Fetch Channels
      const channelsSnap = await getDocs(collection(this.firestore, 'channels'));
      const remoteChannels: Channel[] = [];
      channelsSnap.forEach(d => {
        const data = d.data() as Channel;
        remoteChannels.push({ ...data, id: d.id });
      });

      // 3. Fetch Reviews
      const reviewsSnap = await getDocs(collection(this.firestore, 'reviews'));
      const remoteReviews: ReviewScreenshot[] = [];
      reviewsSnap.forEach(d => {
        const data = d.data() as ReviewScreenshot;
        remoteReviews.push({ ...data, id: d.id });
      });

      // 4. Fetch Keys
      const keysSnap = await getDocs(collection(this.firestore, 'keys'));
      const remoteKeys: GameKey[] = [];
      keysSnap.forEach(d => {
        const data = d.data() as GameKey;
        remoteKeys.push({ ...data, id: d.id });
      });

      // 5. Fetch Settings & Security & Metadata
      const metaSnap = await getDoc(doc(this.firestore, 'settings', 'metadata'));
      const settingsSnap = await getDoc(doc(this.firestore, 'settings', 'site_settings'));
      const securitySnap = await getDoc(doc(this.firestore, 'settings', 'security'));

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
    if (!this.firestore) return;

    // Seed Bundles
    for (const b of this.db.bundles) {
      try {
        await setDoc(doc(this.firestore, 'bundles', b.id), cleanFirestoreData(b));
      } catch (e: any) {
        console.warn(`[Firebase] Failed to seed bundle ${b.id}:`, e.message);
      }
    }

    // Seed Channels
    for (const c of (this.db.channels || [])) {
      try {
        await setDoc(doc(this.firestore, 'channels', c.id), cleanFirestoreData(c));
      } catch (e: any) {
        console.warn(`[Firebase] Failed to seed channel ${c.id}:`, e.message);
      }
    }

    // Seed Reviews
    for (const r of (this.db.reviews || [])) {
      try {
        await setDoc(doc(this.firestore, 'reviews', r.id), cleanFirestoreData(r));
      } catch (e: any) {
        console.warn(`[Firebase] Failed to seed review ${r.id}:`, e.message);
      }
    }

    // Seed Keys
    for (const k of (this.db.keys || [])) {
      try {
        await setDoc(doc(this.firestore, 'keys', k.id), cleanFirestoreData(k));
      } catch (e: any) {
        console.warn(`[Firebase] Failed to seed key ${k.id}:`, e.message);
      }
    }

    // Seed Settings & Security & Metadata
    try {
      await setDoc(doc(this.firestore, 'settings', 'metadata'), {
        initialized: true,
        seededAt: new Date().toISOString(),
        version: '1.0.0'
      });
      await setDoc(doc(this.firestore, 'settings', 'site_settings'), cleanFirestoreData(this.db.settings));
      const secData: any = {};
      if (this.db.adminPasswordHash) secData.adminPasswordHash = this.db.adminPasswordHash;
      if (this.db.channelsPasswordHash) secData.channelsPasswordHash = this.db.channelsPasswordHash;
      if (Object.keys(secData).length > 0) {
        await setDoc(doc(this.firestore, 'settings', 'security'), secData);
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
    if (!this.firestore) return;
    try {
      await setDoc(doc(this.firestore, col, docId), cleanFirestoreData(data));
    } catch (err: any) {
      console.error(`[Firebase] Failed to persist ${col}/${docId}:`, err.message);
    }
  }

  private async deleteFromFirestore(col: string, docId: string): Promise<void> {
    if (!this.firestore) return;
    try {
      await deleteDoc(doc(this.firestore, col, docId));
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
  // SETTINGS
  // -------------------------------------------------------------
  public getSettings(): SiteSettings {
    return { ...this.db.settings };
  }

  public updateSettings(updates: Partial<SiteSettings>): SiteSettings {
    this.db.settings = { ...this.db.settings, ...updates };
    this.saveLocalDatabase();
    this.persistToFirestore('settings', 'site_settings', this.db.settings);
    return this.getSettings();
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
