import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.resolve(__dirname, '../data');
const DB_FILE = path.resolve(DATA_DIR, 'store.json');
const UPLOADS_DIR = path.resolve(__dirname, '../uploads');
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

const DEFAULT_REVIEWS: ReviewScreenshot[] = [
  {
    id: "rev-1",
    imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    title: "Instant delivery in 4 mins via Instagram DM!",
    customerHandle: "@gamer_rohit_99",
    rating: 5,
    note: "Paid ₹499 via UPI, sent screenshot on Instagram, got the full Cyberpunk bundle credentials in under 5 minutes. Working flawlessly!",
    hidden: false,
    order: 1,
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
  },
  {
    id: "rev-2",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    title: "Elden Ring + Wukong running on 144Hz buttery smooth",
    customerHandle: "@vikas_streams",
    rating: 5,
    note: "100% legit seller. I was skeptical initially because of the low price, but the setup guide is super clear and all DLCs are unlocked.",
    hidden: false,
    order: 2,
    createdAt: new Date(Date.now() - 86400000 * 4).toISOString()
  },
  {
    id: "rev-3",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    title: "Best game deal in India hands down",
    customerHandle: "@aarav_delhi_fps",
    rating: 5,
    note: "Saved almost ₹8,000 compared to buying games individually. Nexus team replied within seconds on Instagram.",
    hidden: false,
    order: 3,
    createdAt: new Date(Date.now() - 86400000 * 6).toISOString()
  },
  {
    id: "rev-4",
    imageUrl: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800&auto=format&fit=crop",
    title: "500GB game vault unlocked without issues",
    customerHandle: "@karan_sharma_pc",
    rating: 5,
    note: "Downloaded Ghost of Tsushima and RDR2 instantly. Speeds are maxed out on Jio Fiber.",
    hidden: false,
    order: 4,
    createdAt: new Date(Date.now() - 86400000 * 8).toISOString()
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
    id: "chan-telegram-patchnotes",
    name: "PC Fixes & Modding Guides",
    platform: "telegram",
    description: "Exclusive setup guides, 60+ FPS performance tweaks, mod packages, and DirectX/driver fixes for all vault titles.",
    inviteUrl: "https://t.me/gamersplanet_guides",
    thumbnailUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop",
    category: "Guides & Tech Support",
    published: true,
    order: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

class DatabaseService {
  private db: AppDatabase;

  constructor() {
    this.db = this.loadDatabase();
  }

  private loadDatabase(): AppDatabase {
    try {
      if (fs.existsSync(DB_FILE)) {
        const data = fs.readFileSync(DB_FILE, 'utf-8');
        const parsed = JSON.parse(data) as Partial<AppDatabase>;
        return {
          settings: { ...DEFAULT_SETTINGS, ...(parsed.settings || {}) },
          bundles: Array.isArray(parsed.bundles) ? parsed.bundles : DEFAULT_BUNDLES,
          reviews: Array.isArray(parsed.reviews) ? parsed.reviews : DEFAULT_REVIEWS,
          channels: Array.isArray(parsed.channels) ? parsed.channels : DEFAULT_CHANNELS,
          adminPasswordHash: parsed.adminPasswordHash,
          channelsPasswordHash: parsed.channelsPasswordHash
        };
      }
    } catch (err) {
      console.error('Error reading database file, resetting to defaults:', err);
    }

    const initial: AppDatabase = {
      settings: DEFAULT_SETTINGS,
      bundles: DEFAULT_BUNDLES,
      reviews: DEFAULT_REVIEWS,
      channels: DEFAULT_CHANNELS
    };
    this.saveDatabase(initial);
    return initial;
  }

  private saveDatabase(data?: AppDatabase): void {
    const toSave = data || this.db;
    const tempFile = `${DB_FILE}.tmp`;
    try {
      fs.writeFileSync(tempFile, JSON.stringify(toSave, null, 2), 'utf-8');
      fs.renameSync(tempFile, DB_FILE);
    } catch (err) {
      console.error('Error persisting database:', err);
      // Fallback direct write
      try {
        fs.writeFileSync(DB_FILE, JSON.stringify(toSave, null, 2), 'utf-8');
      } catch (e) {
        console.error('Fatal database write error:', e);
      }
    }
  }

  // Settings
  public getSettings(): SiteSettings {
    return { ...this.db.settings };
  }

  public updateSettings(updates: Partial<SiteSettings>): SiteSettings {
    this.db.settings = { ...this.db.settings, ...updates };
    this.saveDatabase();
    return this.getSettings();
  }

  // Bundles
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
    this.saveDatabase();
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
    this.saveDatabase();
    return this.db.bundles[index];
  }

  public deleteBundle(id: string): boolean {
    const initialLen = this.db.bundles.length;
    this.db.bundles = this.db.bundles.filter(b => b.id !== id);
    if (this.db.bundles.length !== initialLen) {
      this.saveDatabase();
      return true;
    }
    return false;
  }

  // Reviews
  public getReviews(includeHidden = false): ReviewScreenshot[] {
    const list = includeHidden
      ? [...this.db.reviews]
      : this.db.reviews.filter(r => !r.hidden);

    return list.sort((a, b) => a.order - b.order);
  }

  public createReview(reviewData: Omit<ReviewScreenshot, 'id' | 'createdAt'>): ReviewScreenshot {
    const newReview: ReviewScreenshot = {
      ...reviewData,
      id: `rev-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString()
    };
    this.db.reviews.unshift(newReview);
    this.saveDatabase();
    return newReview;
  }

  public createBatchReviews(reviewsData: Array<Omit<ReviewScreenshot, 'id' | 'createdAt'>>): ReviewScreenshot[] {
    const created: ReviewScreenshot[] = [];
    const timestamp = Date.now();
    for (let i = 0; i < reviewsData.length; i++) {
      const rev: ReviewScreenshot = {
        ...reviewsData[i],
        id: `rev-${timestamp}-${i}-${Math.random().toString(36).substring(2, 6)}`,
        createdAt: new Date().toISOString()
      };
      created.push(rev);
    }
    this.db.reviews = [...created, ...this.db.reviews];
    this.saveDatabase();
    return created;
  }

  public updateReview(id: string, updates: Partial<ReviewScreenshot>): ReviewScreenshot | null {
    const index = this.db.reviews.findIndex(r => r.id === id);
    if (index === -1) return null;

    this.db.reviews[index] = {
      ...this.db.reviews[index],
      ...updates,
      id // preserve ID
    };
    this.saveDatabase();
    return this.db.reviews[index];
  }

  public deleteReview(id: string): boolean {
    const initialLen = this.db.reviews.length;
    this.db.reviews = this.db.reviews.filter(r => r.id !== id);
    if (this.db.reviews.length !== initialLen) {
      this.saveDatabase();
      return true;
    }
    return false;
  }

  public reorderReviews(orderedIds: string[]): ReviewScreenshot[] {
    const map = new Map(this.db.reviews.map(r => [r.id, r]));
    const reordered: ReviewScreenshot[] = [];
    let order = 1;

    for (const id of orderedIds) {
      const item = map.get(id);
      if (item) {
        item.order = order++;
        reordered.push(item);
        map.delete(id);
      }
    }

    // append any unmentioned items
    for (const remaining of map.values()) {
      remaining.order = order++;
      reordered.push(remaining);
    }

    this.db.reviews = reordered;
    this.saveDatabase();
    return this.getReviews(true);
  }

  // Admin Access Code
  public getCustomPasswordHash(): string | undefined {
    return this.db.adminPasswordHash;
  }

  public setCustomPasswordHash(hash: string): void {
    this.db.adminPasswordHash = hash;
    this.saveDatabase();
  }

  // Channels Access Password
  public getChannelsPasswordHash(): string | undefined {
    return this.db.channelsPasswordHash;
  }

  public setChannelsPasswordHash(hash: string): void {
    this.db.channelsPasswordHash = hash;
    this.saveDatabase();
  }

  // Channels CRUD
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
    this.saveDatabase();
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
    this.saveDatabase();
    return this.db.channels[index];
  }

  public deleteChannel(id: string): boolean {
    if (!this.db.channels) return false;
    const initialLen = this.db.channels.length;
    this.db.channels = this.db.channels.filter(c => c.id !== id);
    if (this.db.channels.length !== initialLen) {
      this.saveDatabase();
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
        map.delete(id);
      }
    }

    for (const remaining of map.values()) {
      remaining.order = order++;
      reordered.push(remaining);
    }

    this.db.channels = reordered;
    this.saveDatabase();
    return this.getChannels(true);
  }
}

export const dbService = new DatabaseService();
