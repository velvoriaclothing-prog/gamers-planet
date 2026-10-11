# Gamers Planet - Premium Game Vault Store

A complete, production-ready, full-stack gaming bundle store designed with a modern dark gaming aesthetic, elegant glassmorphism, persistent database, customer screenshot reviews gallery with batch upload, and a hidden server-secured admin control center.

---

## ⚡ Quick Start on Windows (Command Prompt)

Follow these exact steps on your Windows machine:

1. **Open Command Prompt** (`cmd.exe`).
2. Navigate to your project folder:
   ```cmd
   cd /d C:\Users\Asus\Downloads\glass_bundle_store_website
   ```
3. Install project dependencies:
   ```cmd
   npm install
   ```
4. Start the full-stack server:
   ```cmd
   npm start
   ```
5. Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```

*(Alternatively, for active code development with hot-reloading, run `npm run dev`)*

---

## 🎮 Features Overview

### 1. Dark Gaming Aesthetic & Glassmorphism
- Deep charcoal/black gaming theme (`#050608`) with subtle ambient neon radial glows.
- Frosted glass cards with translucent backgrounds, thin borders, and soft shadows.
- Dynamic typography using **Rajdhani** for bold headers and **Plus Jakarta Sans** for readable body text.
- Full responsive support across mobile phones, tablets, and 4K desktop displays.

### 2. Gaming Bundles Vault
- **Prices in Indian Rupees (₹)** with retail discount calculations (e.g., Save 80%).
- Full item checklist showing every included game and DLC expansion.
- Integrated video gameplay preview player and cover art switcher.
- Dual action buttons:
  - **"View More"**: Opens an immersive modal with complete game list, video preview, and instant ordering instructions.
  - **"Buy Now"**: Directly opens your configured Instagram profile/chat to claim the bundle.
- Pre-seeded with 3 top AAA bundles (Cyberpunk & Sci-Fi Titan Vault, Elden Mythic Masterpack, Open World Legends) and fully editable via Admin.

### 3. Customer Proof & Screenshot Gallery
- **100-Image Batch Uploader**: Admin can upload up to 100 review screenshots in a single operation.
- Supports **JPG, JPEG, PNG, and WebP** formats with file validation (up to 15MB each).
- Non-blocking batch upload with real-time file preview staging and progress feedback.
- Full-screen **Lightbox Modal** with keyboard navigation (Arrow Left, Arrow Right, Escape) and zoom capability.
- Admin controls to reorder, edit customer handles (`@buyer`), add review notes, toggle visibility, or delete.

### 4. Hidden Admin Control Vault
- **Secret 5-Click Trigger**: Tap or click the website logo in the top-left navigation bar **5 times** in succession to reveal the Admin Login screen.
- **Initial Dev Access Code**: `1710` (stored on the server; configurable via `.env`).
- **Server-Side Security**:
  - Rate limiting with maximum 5 failed attempts per 5 minutes per IP.
  - Automatic temporary lockout with countdown timer.
  - Session tokens generated via cryptographic randomness (`crypto.randomBytes`).
  - Protected API routes (`/api/admin/*`) requiring valid Bearer tokens.
  - Zero admin credentials exposed in client-side HTML or bundle files.

### 5. Website Settings (No Code Editing Needed)
Change the following directly inside the Admin Dashboard:
- Instagram contact URL (changes all "Buy Now" and "DM" button destinations).
- Website title and header logo text.
- Hero main heading, subtitle, and CTA button text.
- Theme accent color (Amber Gold, Cyberpunk Cyan, Emerald, Neon Red, Violet, or custom Hex).
- Footer legal text and support note.
- Custom Admin Access Code (with current password verification).

---

## 🗄️ Database & Storage Architecture

- **Persistent Database**: Automatically initialized at `./data/store.json`.
  - Atomic write protection (writes to temporary file first before replacement to avoid corruption).
  - Automatically seeds default bundles and reviews if no database file exists.
  - Preserves all updates, additions, and deletions across server restarts and rebuilds.
- **Persistent Asset Uploads**:
  - Bundles: Stored in `./uploads/bundles/`
  - Review Screenshots: Stored in `./uploads/reviews/`
  - Served statically via Express at `/uploads/*`.

---

## ⚙️ Environment Configuration

Create a `.env` file in the root directory (based on `.env.example`):

```env
# Server Port (default: 3000)
PORT=3000

# Secure Admin Access Code (change before public deployment)
ADMIN_ACCESS_CODE="1710"

# Node Environment
NODE_ENV="development"
```

---

## 🚀 Public Production Deployment Guide

When deploying to a public server (Ubuntu VPS, Railway, Render, DigitalOcean, or AWS):

1. **Set Environment Variables**:
   ```bash
   NODE_ENV=production
   PORT=3000
   ADMIN_ACCESS_CODE="YourStrongPassword123"
   ```
2. **Build the Frontend Assets**:
   ```bash
   npm run build
   ```
3. **Start the Production Server**:
   ```bash
   npm start
   ```
4. **Persistent Volumes**: Ensure the `/data` and `/uploads` folders are mounted on persistent storage or backup volumes so your uploaded screenshots and database are retained across container redeploys.

---

## 🛠️ Verification & Testing Log

- ✅ Homepage loads cleanly at `http://localhost:3000`.
- ✅ Bundles API (`/api/bundles`) loads and renders active bundles with prices in ₹ INR.
- ✅ Bundle details modal opens with full descriptions, item checklist, and video preview.
- ✅ Buy Now button redirects to configured Instagram URL.
- ✅ Clicking top-left logo 5 times opens the Admin Vault Login modal.
- ✅ Admin login authenticates with code `1710`.
- ✅ Brute-force protection correctly rejects invalid codes and limits attempts.
- ✅ Bundles can be created, updated, and deleted with instant persistence in `./data/store.json`.
- ✅ Batch upload supports up to 100 screenshots at once.
- ✅ Customer proof gallery displays screenshots and opens full-resolution Lightbox viewer.
- ✅ Website settings (Instagram URL, Hero text, Accent color) update in real-time.
- ✅ Fully tested with Node.js on port 3000 with zero syntax errors.
