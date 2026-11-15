import type { Request, Response } from 'express';
import { createBaseApp } from '../server/app.js';

const app = createBaseApp();

app.use((err: any, _req: Request, res: Response, _next: any) => {
  console.error('Unhandled API error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err?.message || 'An unexpected error occurred.'
  });
});

export default app;
