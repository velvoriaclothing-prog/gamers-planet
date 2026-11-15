import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const ROOT_DIR = path.resolve(__dirname, '..');
export const BUNDLED_DATA_DIR = path.resolve(ROOT_DIR, 'data');
export const DB_SEED_FILE = path.resolve(BUNDLED_DATA_DIR, 'store.json');
export const CONFIG_FILE = path.resolve(ROOT_DIR, 'firebase-applet-config.json');

export const isServerless = Boolean(
  process.env.VERCEL ||
  process.env.AWS_LAMBDA_FUNCTION_NAME ||
  process.env.NETLIFY
);

function canWriteDirectory(dir: string): boolean {
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.accessSync(dir, fs.constants.W_OK);
    return true;
  } catch {
    return false;
  }
}

export function ensureDirSafe(dir: string): boolean {
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    return true;
  } catch {
    return false;
  }
}

const useTempStorage = isServerless || !canWriteDirectory(BUNDLED_DATA_DIR);
const TMP_BASE = path.resolve(os.tmpdir(), 'gamers-planet');

export const WRITABLE_DATA_DIR = useTempStorage
  ? path.resolve(TMP_BASE, 'data')
  : BUNDLED_DATA_DIR;

export const DB_WRITE_FILE = path.resolve(WRITABLE_DATA_DIR, 'store.json');

const LOCAL_UPLOADS = path.resolve(ROOT_DIR, 'uploads');
export const UPLOADS_DIR =
  !useTempStorage && canWriteDirectory(LOCAL_UPLOADS)
    ? LOCAL_UPLOADS
    : path.resolve(TMP_BASE, 'uploads');

export const BUNDLE_UPLOADS = path.resolve(UPLOADS_DIR, 'bundles');
export const REVIEW_UPLOADS = path.resolve(UPLOADS_DIR, 'reviews');
export const CHANNELS_UPLOADS = path.resolve(UPLOADS_DIR, 'channels');
export const GENERAL_UPLOADS = path.resolve(UPLOADS_DIR, 'media');

for (const dir of [
  WRITABLE_DATA_DIR,
  UPLOADS_DIR,
  BUNDLE_UPLOADS,
  REVIEW_UPLOADS,
  CHANNELS_UPLOADS,
  GENERAL_UPLOADS,
]) {
  ensureDirSafe(dir);
}
