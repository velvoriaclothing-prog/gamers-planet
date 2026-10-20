import crypto from 'crypto';
import type { Request, Response, NextFunction } from 'express';
import { dbService } from './db.js';

interface FailedAttempt {
  count: number;
  lastAttempt: number;
  lockoutUntil: number;
}

// In-memory rate limiting map: ip -> FailedAttempt
const failedAttempts = new Map<string, FailedAttempt>();

// Active authenticated session tokens: token -> { createdAt: number, expiresAt: number }
const activeSessions = new Map<string, { createdAt: number; expiresAt: number }>();

const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 5 * 60 * 1000; // 5 minutes
const SESSION_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

// Hash password with salt
export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, storedHash: string): boolean {
  try {
    const [salt, key] = storedHash.split(':');
    if (!salt || !key) return false;
    const keyBuffer = Buffer.from(key, 'hex');
    const derivedKey = crypto.scryptSync(password, salt, 64);
    return crypto.timingSafeEqual(keyBuffer, derivedKey);
  } catch {
    return false;
  }
}

// Helper to check if provided password matches (either custom hash or env/default 1710)
export function checkAdminCredential(inputCode: string): boolean {
  const customHash = dbService.getCustomPasswordHash();
  if (customHash) {
    return verifyPassword(inputCode, customHash);
  }
  // Check against env or default 1710
  const expected = process.env.ADMIN_PASSWORD || process.env.ADMIN_ACCESS_CODE || '1710';
  return inputCode.trim() === expected.trim();
}

// Client IP resolver
function getClientIp(req: Request): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  return req.ip || req.socket.remoteAddress || 'unknown';
}

// Check rate limit status
export function checkRateLimit(req: Request): { isLocked: boolean; remainingSeconds: number } {
  const ip = getClientIp(req);
  const now = Date.now();
  const attempt = failedAttempts.get(ip);

  if (!attempt) {
    return { isLocked: false, remainingSeconds: 0 };
  }

  if (attempt.lockoutUntil > now) {
    const remainingSeconds = Math.ceil((attempt.lockoutUntil - now) / 1000);
    return { isLocked: true, remainingSeconds };
  }

  // If lockout expired, reset
  if (attempt.lockoutUntil > 0 && attempt.lockoutUntil <= now) {
    failedAttempts.delete(ip);
  }

  return { isLocked: false, remainingSeconds: 0 };
}

export function recordFailedAttempt(req: Request): { isLocked: boolean; remainingAttempts: number; remainingSeconds: number } {
  const ip = getClientIp(req);
  const now = Date.now();
  let attempt = failedAttempts.get(ip);

  if (!attempt || (now - attempt.lastAttempt > LOCKOUT_DURATION_MS && attempt.lockoutUntil <= now)) {
    attempt = { count: 1, lastAttempt: now, lockoutUntil: 0 };
  } else {
    attempt.count += 1;
    attempt.lastAttempt = now;
  }

  if (attempt.count >= MAX_FAILED_ATTEMPTS) {
    attempt.lockoutUntil = now + LOCKOUT_DURATION_MS;
    failedAttempts.set(ip, attempt);
    return {
      isLocked: true,
      remainingAttempts: 0,
      remainingSeconds: Math.ceil(LOCKOUT_DURATION_MS / 1000)
    };
  }

  failedAttempts.set(ip, attempt);
  return {
    isLocked: false,
    remainingAttempts: MAX_FAILED_ATTEMPTS - attempt.count,
    remainingSeconds: 0
  };
}

export function resetFailedAttempts(req: Request): void {
  const ip = getClientIp(req);
  failedAttempts.delete(ip);
}

// Session generation & validation
export function createSessionToken(): string {
  const token = crypto.randomBytes(32).toString('hex');
  const now = Date.now();
  activeSessions.set(token, {
    createdAt: now,
    expiresAt: now + SESSION_DURATION_MS
  });
  return token;
}

export function validateSessionToken(token: string): boolean {
  if (!token) return false;
  const session = activeSessions.get(token);
  if (!session) return false;

  if (session.expiresAt < Date.now()) {
    activeSessions.delete(token);
    return false;
  }

  return true;
}

export function invalidateSessionToken(token: string): void {
  activeSessions.delete(token);
}

// ---------------------------------------------------------------------------
// CHANNELS AUTHENTICATION & SESSIONS
// ---------------------------------------------------------------------------

// In-memory rate limiting map for Channels unlock: ip -> FailedAttempt
const channelsFailedAttempts = new Map<string, FailedAttempt>();

// Active channels session tokens: token -> { createdAt: number, expiresAt: number }
const activeChannelsSessions = new Map<string, { createdAt: number; expiresAt: number }>();
const CHANNELS_SESSION_DURATION_MS = 12 * 60 * 60 * 1000; // 12 hours

export function checkChannelsPassword(inputPassword: string): boolean {
  const customHash = dbService.getChannelsPasswordHash();
  if (customHash) {
    return verifyPassword(inputPassword, customHash);
  }
  // Default to env or 2703
  const expected = process.env.CHANNELS_ACCESS_PASSWORD || '2703';
  return inputPassword.trim() === expected.trim();
}

export function checkChannelsRateLimit(req: Request): { isLocked: boolean; remainingSeconds: number } {
  const ip = getClientIp(req);
  const now = Date.now();
  const attempt = channelsFailedAttempts.get(ip);

  if (!attempt) {
    return { isLocked: false, remainingSeconds: 0 };
  }

  if (attempt.lockoutUntil > now) {
    const remainingSeconds = Math.ceil((attempt.lockoutUntil - now) / 1000);
    return { isLocked: true, remainingSeconds };
  }

  if (attempt.lockoutUntil > 0 && attempt.lockoutUntil <= now) {
    channelsFailedAttempts.delete(ip);
  }

  return { isLocked: false, remainingSeconds: 0 };
}

export function recordChannelsFailedAttempt(req: Request): { isLocked: boolean; remainingAttempts: number; remainingSeconds: number } {
  const ip = getClientIp(req);
  const now = Date.now();
  let attempt = channelsFailedAttempts.get(ip);

  if (!attempt || (now - attempt.lastAttempt > LOCKOUT_DURATION_MS && attempt.lockoutUntil <= now)) {
    attempt = { count: 1, lastAttempt: now, lockoutUntil: 0 };
  } else {
    attempt.count += 1;
    attempt.lastAttempt = now;
  }

  if (attempt.count >= MAX_FAILED_ATTEMPTS) {
    attempt.lockoutUntil = now + LOCKOUT_DURATION_MS;
    channelsFailedAttempts.set(ip, attempt);
    return {
      isLocked: true,
      remainingAttempts: 0,
      remainingSeconds: Math.ceil(LOCKOUT_DURATION_MS / 1000)
    };
  }

  channelsFailedAttempts.set(ip, attempt);
  return {
    isLocked: false,
    remainingAttempts: MAX_FAILED_ATTEMPTS - attempt.count,
    remainingSeconds: 0
  };
}

export function resetChannelsFailedAttempts(req: Request): void {
  const ip = getClientIp(req);
  channelsFailedAttempts.delete(ip);
}

export function createChannelsSessionToken(): string {
  const token = `chan_${crypto.randomBytes(32).toString('hex')}`;
  const now = Date.now();
  activeChannelsSessions.set(token, {
    createdAt: now,
    expiresAt: now + CHANNELS_SESSION_DURATION_MS
  });
  return token;
}

export function validateChannelsSessionToken(token: string): boolean {
  if (!token) return false;
  const session = activeChannelsSessions.get(token);
  if (!session) return false;

  if (session.expiresAt < Date.now()) {
    activeChannelsSessions.delete(token);
    return false;
  }

  return true;
}

export function invalidateChannelsSessionToken(token: string): void {
  activeChannelsSessions.delete(token);
}

// Express Middleware to protect admin routes
export function requireAdminAuth(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized: Admin session required' });
    return;
  }

  const token = authHeader.substring(7).trim();
  if (!validateSessionToken(token)) {
    res.status(401).json({ error: 'Unauthorized: Session invalid or expired' });
    return;
  }

  next();
}

// Express Middleware to protect channels access: requires either channels session token OR admin token
export function requireChannelsOrAdminAuth(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized: Exclusive Channels password access required' });
    return;
  }

  const token = authHeader.substring(7).trim();
  // Valid if admin session OR channels session
  if (validateSessionToken(token) || validateChannelsSessionToken(token)) {
    next();
    return;
  }

  res.status(401).json({ error: 'Unauthorized: Invalid or expired channels access token' });
}
