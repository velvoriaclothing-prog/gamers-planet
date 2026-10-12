import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { Router } from 'express';
import type { Request, Response } from 'express';
import multer from 'multer';
import { dbService } from './db.js';
import {
  checkAdminCredential,
  checkRateLimit,
  recordFailedAttempt,
  resetFailedAttempts,
  createSessionToken,
  invalidateSessionToken,
  validateSessionToken,
  requireAdminAuth,
  hashPassword,
  checkChannelsPassword,
  checkChannelsRateLimit,
  recordChannelsFailedAttempt,
  resetChannelsFailedAttempts,
  createChannelsSessionToken,
  invalidateChannelsSessionToken,
  requireChannelsOrAdminAuth
} from './auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

const UPLOADS_DIR = path.resolve(__dirname, '../uploads');
const BUNDLE_UPLOADS = path.resolve(UPLOADS_DIR, 'bundles');
const REVIEW_UPLOADS = path.resolve(UPLOADS_DIR, 'reviews');

// Multer storage for bundle assets (cover image or video)
const bundleStorage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    if (!fs.existsSync(BUNDLE_UPLOADS)) {
      fs.mkdirSync(BUNDLE_UPLOADS, { recursive: true });
    }
    cb(null, BUNDLE_UPLOADS);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const cleanBase = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e6)}`;
    cb(null, `bundle-${cleanBase}-${uniqueSuffix}${ext}`);
  }
});

const bundleUpload = multer({
  storage: bundleStorage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB for video/cover
  fileFilter: (_req, file, cb) => {
    const allowedExts = ['.jpg', '.jpeg', '.png', '.webp', '.mp4', '.webm', '.mov'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedExts.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error(`Invalid file type: ${ext}. Allowed: JPG, PNG, WebP, MP4, WebM.`));
    }
  }
});

// Multer storage for review screenshots (batch upload up to 100 images)
const reviewStorage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    if (!fs.existsSync(REVIEW_UPLOADS)) {
      fs.mkdirSync(REVIEW_UPLOADS, { recursive: true });
    }
    cb(null, REVIEW_UPLOADS);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const cleanBase = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e6)}`;
    cb(null, `review-${cleanBase}-${uniqueSuffix}${ext}`);
  }
});

const reviewUpload = multer({
  storage: reviewStorage,
  limits: {
    fileSize: 15 * 1024 * 1024, // 15MB per image
    files: 100 // up to 100 files
  },
  fileFilter: (_req, file, cb) => {
    const allowedExts = ['.jpg', '.jpeg', '.png', '.webp'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedExts.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error(`Invalid review image format: ${ext}. Only JPG, JPEG, PNG, and WebP are supported.`));
    }
  }
});

// -------------------------------------------------------------
// PUBLIC ROUTES
// -------------------------------------------------------------

// Site health
router.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    bundlesCount: dbService.getBundles().length,
    reviewsCount: dbService.getReviews().length
  });
});

// Get Site Settings
router.get('/settings', (_req: Request, res: Response) => {
  try {
    const settings = dbService.getSettings();
    res.json(settings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve site settings' });
  }
});

// Get Bundles (public, active only)
router.get('/bundles', (_req: Request, res: Response) => {
  try {
    const bundles = dbService.getBundles(false);
    res.json(bundles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve bundles' });
  }
});

// Get Single Bundle
router.get('/bundles/:id', (req: Request, res: Response) => {
  try {
    const bundle = dbService.getBundleById(req.params.id);
    if (!bundle || !bundle.active) {
      res.status(404).json({ error: 'Bundle not found' });
      return;
    }
    res.json(bundle);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve bundle' });
  }
});

// Get Reviews (public, non-hidden)
router.get('/reviews', (_req: Request, res: Response) => {
  try {
    const reviews = dbService.getReviews(false);
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve reviews' });
  }
});

// -------------------------------------------------------------
// AUTHENTICATION ROUTES
// -------------------------------------------------------------

router.post('/auth/login', (req: Request, res: Response) => {
  const { code } = req.body;

  // Check rate limit first
  const rateLimitStatus = checkRateLimit(req);
  if (rateLimitStatus.isLocked) {
    res.status(429).json({
      error: `Too many failed login attempts. Account temporarily locked for security. Please try again in ${rateLimitStatus.remainingSeconds} seconds.`,
      lockout: true,
      remainingSeconds: rateLimitStatus.remainingSeconds
    });
    return;
  }

  if (!code || typeof code !== 'string') {
    res.status(400).json({ error: 'Access code is required' });
    return;
  }

  const isValid = checkAdminCredential(code);

  if (!isValid) {
    const attempt = recordFailedAttempt(req);
    if (attempt.isLocked) {
      res.status(429).json({
        error: `Security lockout: 5 failed attempts reached. Please wait ${attempt.remainingSeconds} seconds before trying again.`,
        lockout: true,
        remainingSeconds: attempt.remainingSeconds
      });
      return;
    }

    res.status(401).json({
      error: `Invalid admin access code. ${attempt.remainingAttempts} attempt(s) remaining before temporary lockout.`,
      remainingAttempts: attempt.remainingAttempts
    });
    return;
  }

  // Success
  resetFailedAttempts(req);
  const token = createSessionToken();

  res.json({
    success: true,
    token,
    message: 'Admin authentication verified successfully.'
  });
});

router.get('/auth/status', (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.json({ authenticated: false });
    return;
  }
  const token = authHeader.substring(7).trim();
  const isValid = validateSessionToken(token);
  res.json({ authenticated: isValid });
});

router.post('/auth/logout', (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7).trim();
    invalidateSessionToken(token);
  }
  res.json({ success: true, message: 'Logged out successfully' });
});

// -------------------------------------------------------------
// EXCLUSIVE CHANNELS ROUTES (Password Protected)
// -------------------------------------------------------------

// Unlock channels with password (default: 2703)
router.post('/channels/unlock', (req: Request, res: Response) => {
  const { password } = req.body;

  // Check rate limiting
  const rateLimitStatus = checkChannelsRateLimit(req);
  if (rateLimitStatus.isLocked) {
    res.status(429).json({
      error: `Too many failed password attempts. Access temporarily locked. Please try again in ${rateLimitStatus.remainingSeconds} seconds.`,
      lockout: true,
      remainingSeconds: rateLimitStatus.remainingSeconds
    });
    return;
  }

  if (!password || typeof password !== 'string') {
    res.status(400).json({ error: 'Password is required to unlock channels' });
    return;
  }

  const isValid = checkChannelsPassword(password);

  if (!isValid) {
    const attempt = recordChannelsFailedAttempt(req);
    if (attempt.isLocked) {
      res.status(429).json({
        error: `Security lockout: 5 failed attempts reached. Please wait ${attempt.remainingSeconds} seconds before trying again.`,
        lockout: true,
        remainingSeconds: attempt.remainingSeconds
      });
      return;
    }

    res.status(401).json({
      error: 'Incorrect password. Please try again.',
      remainingAttempts: attempt.remainingAttempts
    });
    return;
  }

  // Success
  resetChannelsFailedAttempts(req);
  const token = createChannelsSessionToken();

  res.json({
    success: true,
    token,
    message: 'Access granted to Exclusive Channels.'
  });
});

// Lock channels (invalidate token)
router.post('/channels/lock', (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7).trim();
    invalidateChannelsSessionToken(token);
  }
  res.json({ success: true, message: 'Channels locked successfully' });
});

// Get published channels (requires valid channels token OR admin token)
router.get('/channels', requireChannelsOrAdminAuth, (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace('Bearer ', '').trim();
    const isAdmin = validateSessionToken(token);
    // If admin, can see all; if visitor, only published
    const channels = dbService.getChannels(isAdmin);
    res.json(channels);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve channels' });
  }
});

// -------------------------------------------------------------
// PROTECTED ADMIN ROUTES (Require requireAdminAuth)
// -------------------------------------------------------------

// Admin Bundles CRUD
router.get('/admin/bundles', requireAdminAuth, (_req: Request, res: Response) => {
  try {
    const bundles = dbService.getBundles(true);
    res.json(bundles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve admin bundles' });
  }
});

router.post('/admin/bundles', requireAdminAuth, (req: Request, res: Response) => {
  try {
    const {
      title,
      price,
      originalPrice,
      gameCount,
      shortDescription,
      fullDescription,
      coverImage,
      videoPreview,
      includedItems,
      category,
      badge,
      featured,
      active
    } = req.body;

    if (!title || price === undefined) {
      res.status(400).json({ error: 'Title and Price are required' });
      return;
    }

    const items = Array.isArray(includedItems)
      ? includedItems
      : typeof includedItems === 'string'
        ? includedItems.split('\n').map(s => s.trim()).filter(Boolean)
        : [];

    const newBundle = dbService.createBundle({
      title: String(title).trim(),
      price: Number(price),
      originalPrice: originalPrice ? Number(originalPrice) : undefined,
      gameCount: Number(gameCount) || (items.length > 0 ? items.length : 1),
      shortDescription: String(shortDescription || '').trim(),
      fullDescription: String(fullDescription || '').trim(),
      coverImage: String(coverImage || '').trim(),
      videoPreview: videoPreview ? String(videoPreview).trim() : undefined,
      includedItems: items,
      category: category ? String(category).trim() : undefined,
      badge: badge ? String(badge).trim() : undefined,
      featured: Boolean(featured),
      active: active !== undefined ? Boolean(active) : true
    });

    res.status(201).json(newBundle);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create bundle' });
  }
});

router.put('/admin/bundles/:id', requireAdminAuth, (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates = { ...req.body };

    if (updates.price !== undefined) updates.price = Number(updates.price);
    if (updates.originalPrice !== undefined) updates.originalPrice = Number(updates.originalPrice);
    if (updates.gameCount !== undefined) updates.gameCount = Number(updates.gameCount);
    if (updates.includedItems && typeof updates.includedItems === 'string') {
      updates.includedItems = updates.includedItems.split('\n').map((s: string) => s.trim()).filter(Boolean);
    }

    const updated = dbService.updateBundle(id, updates);
    if (!updated) {
      res.status(404).json({ error: 'Bundle not found' });
      return;
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update bundle' });
  }
});

router.delete('/admin/bundles/:id', requireAdminAuth, (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = dbService.deleteBundle(id);
    if (!deleted) {
      res.status(404).json({ error: 'Bundle not found' });
      return;
    }
    res.json({ success: true, message: 'Bundle deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete bundle' });
  }
});

// Admin Reviews CRUD & Batch Handling
router.get('/admin/reviews', requireAdminAuth, (_req: Request, res: Response) => {
  try {
    const reviews = dbService.getReviews(true);
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve reviews' });
  }
});

router.post('/admin/reviews', requireAdminAuth, (req: Request, res: Response) => {
  try {
    const { imageUrl, title, customerHandle, rating, note, hidden, order } = req.body;
    if (!imageUrl) {
      res.status(400).json({ error: 'Image URL is required' });
      return;
    }

    const created = dbService.createReview({
      imageUrl: String(imageUrl).trim(),
      title: title ? String(title).trim() : undefined,
      customerHandle: customerHandle ? String(customerHandle).trim() : undefined,
      rating: rating ? Number(rating) : 5,
      note: note ? String(note).trim() : undefined,
      hidden: Boolean(hidden),
      order: order !== undefined ? Number(order) : 0
    });

    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create review entry' });
  }
});

router.put('/admin/reviews/:id', requireAdminAuth, (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updated = dbService.updateReview(id, req.body);
    if (!updated) {
      res.status(404).json({ error: 'Review not found' });
      return;
    }
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update review' });
  }
});

router.delete('/admin/reviews/:id', requireAdminAuth, (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = dbService.deleteReview(id);
    if (!deleted) {
      res.status(404).json({ error: 'Review not found' });
      return;
    }
    res.json({ success: true, message: 'Review deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete review' });
  }
});

router.post('/admin/reviews/reorder', requireAdminAuth, (req: Request, res: Response) => {
  try {
    const { orderedIds } = req.body;
    if (!Array.isArray(orderedIds)) {
      res.status(400).json({ error: 'orderedIds array required' });
      return;
    }
    const updated = dbService.reorderReviews(orderedIds);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to reorder reviews' });
  }
});

// Admin Website Settings
router.put('/admin/settings', requireAdminAuth, (req: Request, res: Response) => {
  try {
    const updated = dbService.updateSettings(req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update settings' });
  }
});

// Change Admin Access Code
router.post('/admin/change-code', requireAdminAuth, (req: Request, res: Response) => {
  try {
    const { currentCode, newCode } = req.body;
    if (!currentCode || !newCode) {
      res.status(400).json({ error: 'Current code and new code are required' });
      return;
    }

    if (!checkAdminCredential(currentCode)) {
      res.status(401).json({ error: 'Current access code is incorrect' });
      return;
    }

    if (String(newCode).trim().length < 4) {
      res.status(400).json({ error: 'New access code must be at least 4 characters long' });
      return;
    }

    const hashed = hashPassword(String(newCode).trim());
    dbService.setCustomPasswordHash(hashed);

    res.json({ success: true, message: 'Admin access code successfully updated!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to change access code' });
  }
});

// Admin Channels CRUD
router.get('/admin/channels', requireAdminAuth, (_req: Request, res: Response) => {
  try {
    const channels = dbService.getChannels(true);
    res.json(channels);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve admin channels' });
  }
});

router.post('/admin/channels', requireAdminAuth, (req: Request, res: Response) => {
  try {
    const { name, platform, description, inviteUrl, thumbnailUrl, category, published, order } = req.body;
    if (!name || !inviteUrl || !platform) {
      res.status(400).json({ error: 'Channel name, platform, and invitation URL are required' });
      return;
    }

    const created = dbService.createChannel({
      name: String(name).trim(),
      platform: platform === 'discord' ? 'discord' : 'telegram',
      description: String(description || '').trim(),
      inviteUrl: String(inviteUrl).trim(),
      thumbnailUrl: thumbnailUrl ? String(thumbnailUrl).trim() : undefined,
      category: category ? String(category).trim() : undefined,
      published: published !== undefined ? Boolean(published) : true,
      order: order !== undefined ? Number(order) : 0
    });

    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create channel' });
  }
});

router.put('/admin/channels/:id', requireAdminAuth, (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates = { ...req.body };
    if (updates.order !== undefined) updates.order = Number(updates.order);
    if (updates.published !== undefined) updates.published = Boolean(updates.published);

    const updated = dbService.updateChannel(id, updates);
    if (!updated) {
      res.status(404).json({ error: 'Channel not found' });
      return;
    }
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update channel' });
  }
});

router.delete('/admin/channels/:id', requireAdminAuth, (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = dbService.deleteChannel(id);
    if (!deleted) {
      res.status(404).json({ error: 'Channel not found' });
      return;
    }
    res.json({ success: true, message: 'Channel deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete channel' });
  }
});

router.post('/admin/channels/reorder', requireAdminAuth, (req: Request, res: Response) => {
  try {
    const { orderedIds } = req.body;
    if (!Array.isArray(orderedIds)) {
      res.status(400).json({ error: 'orderedIds array required' });
      return;
    }
    const updated = dbService.reorderChannels(orderedIds);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to reorder channels' });
  }
});

// Change Channels Access Password
router.post('/admin/change-channels-password', requireAdminAuth, (req: Request, res: Response) => {
  try {
    const { newPassword } = req.body;
    if (!newPassword || typeof newPassword !== 'string' || newPassword.trim().length < 2) {
      res.status(400).json({ error: 'New channels password must be at least 2 characters long' });
      return;
    }

    const hashed = hashPassword(String(newPassword).trim());
    dbService.setChannelsPasswordHash(hashed);

    res.json({ success: true, message: 'Channels access password successfully updated!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to change channels password' });
  }
});

// -------------------------------------------------------------
// FILE UPLOAD ROUTES
// -------------------------------------------------------------

// Single bundle cover or video upload
router.post('/admin/upload/bundle-file', requireAdminAuth, (req: Request, res: Response) => {
  bundleUpload.single('file')(req, res, (err) => {
    if (err) {
      res.status(400).json({ error: err.message || 'File upload error' });
      return;
    }

    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }

    const fileUrl = `/uploads/bundles/${req.file.filename}`;
    res.json({
      success: true,
      fileUrl,
      filename: req.file.filename,
      size: req.file.size,
      mimetype: req.file.mimetype
    });
  });
});

// Batch upload up to 100 review screenshots
router.post('/admin/upload/reviews-batch', requireAdminAuth, (req: Request, res: Response) => {
  reviewUpload.array('screenshots', 100)(req, res, (err) => {
    if (err) {
      res.status(400).json({ error: err.message || 'Batch screenshot upload error' });
      return;
    }

    const files = req.files as Express.Multer.File[] | undefined;
    if (!files || files.length === 0) {
      res.status(400).json({ error: 'No screenshots uploaded' });
      return;
    }

    try {
      const { createEntries, defaultNote } = req.body;
      const uploadedFiles = files.map(file => ({
        url: `/uploads/reviews/${file.filename}`,
        originalName: file.originalname,
        size: file.size
      }));

      // If user requested automatic review records creation
      if (createEntries === 'true' || createEntries === true) {
        const currentCount = dbService.getReviews(true).length;
        const newReviews = uploadedFiles.map((f, idx) => ({
          imageUrl: f.url,
          title: `Verified Customer Review #${currentCount + idx + 1}`,
          customerHandle: `@buyer_${Math.floor(1000 + Math.random() * 9000)}`,
          rating: 5,
          note: defaultNote || 'Verified purchase screenshot and feedback.',
          hidden: false,
          order: currentCount + idx + 1
        }));

        const created = dbService.createBatchReviews(newReviews);
        res.json({
          success: true,
          count: created.length,
          reviews: created,
          files: uploadedFiles
        });
        return;
      }

      res.json({
        success: true,
        count: uploadedFiles.length,
        files: uploadedFiles
      });
    } catch (e: any) {
      res.status(500).json({ error: 'Failed to process batch review upload: ' + e.message });
    }
  });
});

// Explicit 404 for any unregistered /api routes
router.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'API route not found' });
});

export default router;
