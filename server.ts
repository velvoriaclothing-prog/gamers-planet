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

// Explicit 404 for unmatched /api requests (do not return index.html for unknown API endpoints)
app.use('/api', (_req: express.Request, res: express.Response) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

async function startServer() {
  const distPath = path.resolve(__dirname, 'dist');
  const indexHtmlPath = path.resolve(distPath, 'index.html');

  if (isProduction) {
    // Check if dist/index.html is missing and attempt to build automatically
    if (!fs.existsSync(indexHtmlPath)) {
      console.log('📦 Production bundle not found in ./dist. Executing "npm run build" automatically...');
      try {
        const { execSync } = await import('child_process');
        execSync('npm run build', {
          stdio: 'inherit',
          env: { ...process.env, NODE_ENV: 'production' }
        });
        console.log('✅ Automatic build finished successfully!');
      } catch (buildErr: any) {
        console.error('⚠️ Automatic build attempt failed:', buildErr?.message || buildErr);
      }
    }

    // Serve static assets from dist
    app.use(express.static(distPath, {
      index: false // we handle HTML sending via root and fallback
    }));

    // Loading / building screen with auto-refresh every 3 seconds
    const renderBuildingHtml = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="refresh" content="3">
  <title>Gamers Planet - Loading...</title>
  <style>
    * { box-sizing: border-box; }
    body {
      background: #090b10;
      color: #e5e7eb;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      padding: 1.5rem;
      text-align: center;
    }
    .card {
      background: #11141d;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 1.25rem;
      padding: 2.5rem 2rem;
      max-width: 440px;
      width: 100%;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
    }
    .spinner {
      width: 48px;
      height: 48px;
      border: 4px solid rgba(239, 68, 68, 0.2);
      border-top-color: #ef4444;
      border-radius: 50%;
      animation: spin 0.9s linear infinite;
      margin: 0 auto 1.5rem;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    .badge {
      display: inline-block;
      background: rgba(239, 68, 68, 0.15);
      color: #f87171;
      border: 1px solid rgba(239, 68, 68, 0.3);
      padding: 0.35rem 0.85rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
    h1 {
      font-size: 1.5rem;
      font-weight: 800;
      color: #ffffff;
      margin: 0 0 0.5rem;
      letter-spacing: -0.02em;
    }
    p {
      color: #9ca3af;
      font-size: 0.95rem;
      line-height: 1.6;
      margin: 0;
    }
    .dots {
      display: inline-block;
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="spinner"></div>
    <div class="badge">Initializing System</div>
    <h1>Gamers Planet is Loading<span class="dots">...</span></h1>
    <p>The production assets are finalizing on the server. This page will refresh automatically in a few seconds.</p>
  </div>
</body>
</html>`;

    // Root route serves index.html explicitly, or loading page if building
    app.get('/', (_req, res) => {
      if (fs.existsSync(indexHtmlPath)) {
        res.sendFile(indexHtmlPath);
      } else {
        res.status(200).send(renderBuildingHtml());
      }
    });

    // Client-side routing fallback for non-API routes (Express 4 compatible)
    app.use((req, res, next) => {
      // Only handle GET/HEAD requests and skip /api and /uploads
      if ((req.method === 'GET' || req.method === 'HEAD') && !req.path.startsWith('/api') && !req.path.startsWith('/uploads')) {
        if (fs.existsSync(indexHtmlPath)) {
          return res.sendFile(indexHtmlPath);
        } else {
          return res.status(200).send(renderBuildingHtml());
        }
      }
      next();
    });
  } else {
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
