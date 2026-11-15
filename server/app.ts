import express from 'express';
import path from 'path';
import fs from 'fs';
import apiRouter from './routes.js';
import { dbService } from './db.js';
import { ROOT_DIR, UPLOADS_DIR } from './paths.js';

export function createBaseApp() {
  const app = express();

  // Security: Disable x-powered-by header
  app.disable('x-powered-by');

  // Security headers middleware
  app.use((_req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });

  // Body parsers
  app.use(express.json({ limit: '20mb' }));
  app.use(express.urlencoded({ extended: true, limit: '20mb' }));

  // Serve uploaded assets statically
  app.use('/uploads', express.static(UPLOADS_DIR, {
    maxAge: '1d',
    immutable: false
  }));

  // Serve static public assets (robots.txt, sitemap.xml)
  const PUBLIC_DIR = path.resolve(ROOT_DIR, 'public');
  if (fs.existsSync(PUBLIC_DIR)) {
    app.use(express.static(PUBLIC_DIR));
  }

  app.get('/robots.txt', (_req, res) => {
    const robotsPath = path.resolve(ROOT_DIR, 'public/robots.txt');
    if (fs.existsSync(robotsPath)) {
      res.type('text/plain').sendFile(robotsPath);
    } else {
      res.type('text/plain').send('User-agent: *\nAllow: /\n');
    }
  });

  app.get('/sitemap.xml', (_req, res) => {
    const sitemapPath = path.resolve(ROOT_DIR, 'public/sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
      res.type('application/xml').sendFile(sitemapPath);
    } else {
      res.status(404).end();
    }
  });

  // Ensure DB/Firestore initialization completes before serving API requests (important for serverless cold starts)
  app.use('/api', async (_req, _res, next) => {
    try {
      await dbService.ensureInitialized();
    } catch {
      // Fall back to local/seed database if Firebase fails
    }
    next();
  });

  // API Routes
  app.use('/api', apiRouter);

  // Explicit 404 for unmatched /api requests (do not return index.html for unknown API endpoints)
  app.use('/api', (_req: express.Request, res: express.Response) => {
    res.status(404).json({ error: 'API endpoint not found' });
  });

  return app;
}
