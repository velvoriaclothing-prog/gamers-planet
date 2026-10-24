/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Loader2, AlertTriangle, RefreshCw } from 'lucide-react';
import { Bundle, ReviewScreenshot, SiteSettings, Channel } from './types/index.js';
import { api, getAuthToken, clearAuthToken } from './utils/api.js';

import { ScrollToTop } from './components/ScrollToTop.js';
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { MobileQuickBar } from './components/MobileQuickBar.js';
import { AdminLoginModal } from './components/AdminLoginModal.js';
import { AdminDashboard } from './components/admin/AdminDashboard.js';
import { BundleModal } from './components/BundleModal.js';

// Live Edit & Real-Time Sync
import { LiveEditProvider, useLiveEdit } from './components/live-edit/LiveEditContext.js';
import { LiveEditToolbar } from './components/live-edit/LiveEditToolbar.js';
import { BundleQuickEditModal } from './components/live-edit/BundleQuickEditModal.js';
import { useRealtimeSync } from './hooks/useRealtimeSync.js';
import { LanguageProvider } from './context/LanguageContext.js';
import { LanguageSelectionModal } from './components/LanguageSelectionModal.js';
import { ThemeProvider } from './context/ThemeContext.js';
import { LiveWallpaper } from './components/LiveWallpaper.js';
import { ThemeSelectorModal } from './components/ThemeSelectorModal.js';

import { HomePage } from './pages/HomePage.js';
import { BundlesPage } from './pages/BundlesPage.js';
import { ChannelsPage } from './pages/ChannelsPage.js';
import { ReviewsPage } from './pages/ReviewsPage.js';
import { FaqPage } from './pages/FaqPage.js';

interface StorefrontProps {
  bundles: Bundle[];
  reviews: ReviewScreenshot[];
  isAdmin: boolean;
  onOpenAdminLogin: () => void;
  onOpenAdminDashboard: () => void;
  onLogout: () => void;
  selectedBundle: Bundle | null;
  onSelectBundle: (bundle: Bundle | null) => void;
  showAdminLogin: boolean;
  onCloseAdminLogin: () => void;
  onLoginSuccess: () => Promise<void>;
}

const Storefront: React.FC<StorefrontProps> = ({
  bundles,
  reviews,
  isAdmin,
  onOpenAdminLogin,
  onOpenAdminDashboard,
  onLogout,
  selectedBundle,
  onSelectBundle,
  showAdminLogin,
  onCloseAdminLogin,
  onLoginSuccess,
}) => {
  const { getEffectiveSettings, getEffectiveBundles } = useLiveEdit();
  const effectiveSettings = getEffectiveSettings();
  const effectiveBundles = getEffectiveBundles(bundles);



  return (
    <div className="min-h-screen bg-[#04060e] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-black pb-16 lg:pb-0 relative">
      {/* Dynamic Themed Live Wallpaper with Contrast Scrim (100% text & bundle visibility) */}
      <LiveWallpaper />

      {/* Auto scroll to top on page navigation */}
      <ScrollToTop />

      {/* Admin Live In-Place Edit Floating Bar */}
      <LiveEditToolbar
        onOpenDashboard={onOpenAdminDashboard}
        onLogout={onLogout}
      />

      {/* Quick modal for editing bundle prices & names live on page */}
      <BundleQuickEditModal />

      {/* Store Theme & Live Wallpaper Customization Modal */}
      <ThemeSelectorModal />

      {/* Language Selection Modal at Start of Website / on Request */}
      <LanguageSelectionModal />

      {/* Global Navbar with 5-click easter egg on logo */}
      <Navbar
        settings={effectiveSettings}
        isAdmin={isAdmin}
        onOpenAdminModal={onOpenAdminLogin}
        onOpenDashboard={onOpenAdminDashboard}
        onLogout={onLogout}
      />

      {/* Multi-Page Routes */}
      <main className="flex-1">
        <Routes>
          {/* 1. Website opens directly in Bundles section and shows bundles */}
          <Route
            path="/"
            element={<Navigate to="/bundles" replace />}
          />
          <Route
            path="/home"
            element={
              <HomePage
                bundles={effectiveBundles}
                reviews={reviews}
                settings={effectiveSettings}
                onSelectBundle={onSelectBundle}
              />
            }
          />

          {/* 2. Bundles Vault Page */}
          <Route
            path="/bundles"
            element={
              <BundlesPage
                bundles={effectiveBundles}
                settings={effectiveSettings}
                isAdmin={isAdmin}
                onSelectBundle={onSelectBundle}
                onOpenAdmin={() => {
                  if (isAdmin) onOpenAdminDashboard();
                  else onOpenAdminLogin();
                }}
              />
            }
          />

          {/* 3. Redirects for Single Games & Search Catalog to Bundles Vault */}
          <Route path="/single-games" element={<Navigate to="/bundles" replace />} />
          <Route path="/catalog" element={<Navigate to="/bundles" replace />} />

          {/* 5. VIP Channels & Sites Page */}
          <Route
            path="/channels"
            element={
              <ChannelsPage
                settings={effectiveSettings}
                isAdmin={isAdmin}
                onOpenAdmin={() => {
                  if (isAdmin) onOpenAdminDashboard();
                  else onOpenAdminLogin();
                }}
              />
            }
          />

          {/* 6. Customer Proof & Reviews Page */}
          <Route
            path="/reviews"
            element={
              <ReviewsPage
                reviews={reviews}
                settings={effectiveSettings}
                isAdmin={isAdmin}
                onOpenAdmin={() => {
                  if (isAdmin) onOpenAdminDashboard();
                  else onOpenAdminLogin();
                }}
              />
            }
          />

          {/* 7. FAQ & Setup Guide Page */}
          <Route
            path="/faq"
            element={<FaqPage settings={effectiveSettings} />}
          />

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer settings={effectiveSettings} />

      {/* Mobile Bottom Navigation Bar with Active Route Highlighting */}
      <MobileQuickBar settings={effectiveSettings} />



      {/* Bundle Details & Video Preview Modal */}
      {selectedBundle && (
        <BundleModal
          bundle={selectedBundle}
          settings={effectiveSettings}
          onClose={() => onSelectBundle(null)}
        />
      )}

      {/* Hidden Admin Login Modal */}
      <AdminLoginModal
        isOpen={showAdminLogin}
        onClose={onCloseAdminLogin}
        onLoginSuccess={onLoginSuccess}
      />
    </div>
  );
};

export default function App() {
  const [settings, setSettings] = useState<SiteSettings>({
    siteTitle: 'Gamers Planet - Premium Game Vault',
    logoText: 'GAMERS PLANET',
    heroHeading: 'LEGENDARY PC GAMING BUNDLES',
    heroSubtitle: 'Get instant digital access to top-tier AAA game vaults and curated indie collections. Verified delivery directly to your account in minutes.',
    heroCtaText: 'Browse Vault Bundles',
    heroSecondaryText: 'View Customer Proof',
    instagramUrl: 'https://instagram.com/gamersplanet20.26',
    primaryChannelType: 'instagram',
    channelHandle: '@gamersplanet20.26',
    accentColor: '#f59e0b',
    footerText: '© 2026 Gamers Planet. Direct verified delivery guaranteed.',
    supportNote: 'DM us on Instagram @gamersplanet20.26 for instant setup support.',
    announcementText: '🔥 FLASH SALE: Extra ₹150 OFF any Mega Bundle this weekend! Message on Instagram @gamersplanet20.26 to claim.'
  });

  const [bundles, setBundles] = useState<Bundle[]>([]);
  const [adminBundles, setAdminBundles] = useState<Bundle[]>([]);
  const [reviews, setReviews] = useState<ReviewScreenshot[]>([]);
  const [adminReviews, setAdminReviews] = useState<ReviewScreenshot[]>([]);
  const [adminChannels, setAdminChannels] = useState<Channel[]>([]);

  const [selectedBundle, setSelectedBundle] = useState<Bundle | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [showAdminLogin, setShowAdminLogin] = useState<boolean>(false);
  const [showAdminDashboard, setShowAdminDashboard] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load public data
  const loadData = useCallback(async () => {
    try {
      setError(null);
      const [fetchedSettings, fetchedBundles, fetchedReviews] = await Promise.all([
        api.getSettings(),
        api.getBundles(),
        api.getReviews(),
      ]);

      setSettings(fetchedSettings);
      setBundles(fetchedBundles);
      setReviews(fetchedReviews);

      // Sync document title
      if (fetchedSettings.siteTitle) {
        document.title = fetchedSettings.siteTitle;
      }
    } catch (err: any) {
      console.error('Error fetching public store data:', err);
      setError(err.message || 'Unable to connect to the store backend.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Check admin session and fetch admin-specific datasets
  const checkAdminAuth = useCallback(async () => {
    const token = getAuthToken();
    if (!token) {
      setIsAdmin(false);
      return;
    }

    try {
      const status = await api.checkAuthStatus();
      if (status.authenticated) {
        setIsAdmin(true);
        const [aBundles, aReviews, aChannels] = await Promise.all([
          api.getAdminBundles(),
          api.getAdminReviews(),
          api.getAdminChannels(),
        ]);
        setAdminBundles(aBundles);
        setAdminReviews(aReviews);
        setAdminChannels(aChannels);
      } else {
        clearAuthToken();
        setIsAdmin(false);
      }
    } catch {
      clearAuthToken();
      setIsAdmin(false);
    }
  }, []);

  useEffect(() => {
    loadData();
    checkAdminAuth();
  }, [loadData, checkAdminAuth]);

  // Real-time synchronization: poll server version and trigger auto-update
  useRealtimeSync({
    onSync: loadData,
    intervalMs: 4000
  });

  // Handle successful login
  const handleLoginSuccess = async () => {
    setShowAdminLogin(false);
    await checkAdminAuth();
    setShowAdminDashboard(true);
  };

  // Handle logout
  const handleLogout = async () => {
    await api.logout();
    setIsAdmin(false);
    setShowAdminDashboard(false);
    loadData();
  };

  // Refresh admin data and public data
  const handleRefreshAll = async () => {
    await Promise.all([loadData(), checkAdminAuth()]);
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#050608] flex flex-col items-center justify-center text-slate-200">
        <Loader2 className="w-10 h-10 animate-spin text-amber-500 mb-4" />
        <p className="text-sm font-semibold tracking-wider font-gaming uppercase text-amber-400">
          Loading Gamers Planet Vault...
        </p>
      </div>
    );
  }

  // Fatal Error state
  if (error && bundles.length === 0) {
    return (
      <div className="min-h-screen bg-[#050608] flex flex-col items-center justify-center p-4 text-center">
        <div className="glass-panel p-8 rounded-3xl max-w-md w-full border border-red-500/30">
          <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white font-gaming mb-2">Vault Connection Notice</h2>
          <p className="text-xs text-slate-300 mb-6">{error}</p>
          <button
            onClick={loadData}
            className="px-6 py-2.5 rounded-xl bg-amber-500 text-black font-bold text-xs flex items-center gap-2 mx-auto cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Retry Connection</span>
          </button>
        </div>
      </div>
    );
  }

  // Admin Dashboard Mode
  if (isAdmin && showAdminDashboard) {
    return (
      <AdminDashboard
        bundles={adminBundles.length > 0 ? adminBundles : bundles}
        reviews={adminReviews.length > 0 ? adminReviews : reviews}
        channels={adminChannels}
        settings={settings}
        onRefreshAll={handleRefreshAll}
        onClose={() => setShowAdminDashboard(false)}
        onLogout={handleLogout}
      />
    );
  }

  // Multi-Page Public Storefront with Theme, Language, and Live In-Place Edit Providers
  return (
    <ThemeProvider>
      <LanguageProvider>
        <LiveEditProvider
          settings={settings}
          bundles={bundles}
          isAdmin={isAdmin}
          onRefreshAll={handleRefreshAll}
          onSettingsUpdate={(newSettings) => setSettings(newSettings)}
          onBundlesUpdate={(newBundles) => setBundles(newBundles)}
        >
          <Storefront
            bundles={bundles}
            reviews={reviews}
            isAdmin={isAdmin}
            onOpenAdminLogin={() => setShowAdminLogin(true)}
            onOpenAdminDashboard={() => setShowAdminDashboard(true)}
            onLogout={handleLogout}
            selectedBundle={selectedBundle}
            onSelectBundle={(bundle) => setSelectedBundle(bundle)}
            showAdminLogin={showAdminLogin}
            onCloseAdminLogin={() => setShowAdminLogin(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        </LiveEditProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
