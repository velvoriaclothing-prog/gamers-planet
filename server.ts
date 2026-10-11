import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import apiRouter from './server/routes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const isProduction = process.env.NODE_ENV === 'production';

// Ensure data & upload directories exist
const UPLOADS_DIR = path.resolve(__dirname, 'uploads');
const BUNDLE_UPLOADS = path.resolve(UPLOADS_DIR, 'bundles');
const REVIEW_UPLOADS = path.resolve(UPLOADS_DIR, 'reviews');
const DATA_DIR = path.resolve(__dirname, 'data');

for (const dir of [DATA_DIR, UPLOADS_DIR, BUNDLE_UPLOADS, REVIEW_UPLOADS]) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Basic middleware
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

// Serve uploaded assets statically
app.use('/uploads', express.static(UPLOADS_DIR, {
  maxAge: '1d',
  immutable: false
}));

// API Routes
app.use('/api', apiRouter);

async function startServer() {
  if (!isProduction) {
    // Development mode: attach Vite middleware
    try {
      const { createServer } = await import('vite');
      const vite = await createServer({
        server: {
          middlewareMode: true,
          hmr: process.env.DISABLE_HMR !== 'true',
          watch: process.env.DISABLE_HMR === 'true' ? null : {}
        },
        appType: 'spa'
      });
      app.use(vite.middlewares);
    } catch (err) {
      console.error('Failed to initialize Vite development middleware:', err);
    }
  } else {
    // Production mode: serve built assets from dist
    const distPath = path.resolve(__dirname, 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (_req, res) => {
        res.sendFile(path.resolve(distPath, 'index.html'));
      });
    } else {
      console.warn('Production mode requested but dist folder not found. Building or fallback advised.');
    }
  }

  // Global Error Handler
  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error('Unhandled server error:', err);
    res.status(500).json({
      error: 'Internal Server Error',
      message: err.message || 'An unexpected error occurred.'
    });
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n======================================================`);
    console.log(`🎮 Gamers Planet Server running successfully!`);
    console.log(`📍 Local URL:  http://localhost:${PORT}`);
    console.log(`🔒 Initial Admin Code: ${process.env.ADMIN_ACCESS_CODE || '1710'}`);
    console.log(`🔑 Admin Access: Click website logo 5 times`);
    console.log(`📁 Uploads Directory: ${UPLOADS_DIR}`);
    console.log(`======================================================\n`);
  });
}

startServer().catch((err) => {
  console.error('Fatal error starting server:', err);
  process.exit(1);
});
