/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Loader2, AlertTriangle, RefreshCw } from 'lucide-react';
import { Bundle, ReviewScreenshot, SiteSettings, Channel } from './types/index.js';
import { api, getAuthToken, clearAuthToken } from './utils/api.js';
import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { SaleTimerSection } from './components/SaleTimerSection.js';
import { SingleGamesSection } from './components/SingleGamesSection.js';
import { GameCatalogExplorer } from './components/GameCatalogExplorer.js';
import { BundleGrid } from './components/BundleGrid.js';
import { BundleModal } from './components/BundleModal.js';
import { ChannelsSection } from './components/ChannelsSection.js';
import { ReviewGallery } from './components/ReviewGallery.js';
import { FeaturesSection } from './components/FeaturesSection.js';
import { FaqSection } from './components/FaqSection.js';
import { Footer } from './components/Footer.js';
import { MobileQuickBar } from './components/MobileQuickBar.js';
import { RecentOrdersTicker } from './components/RecentOrdersTicker.js';
import { AdminLoginModal } from './components/AdminLoginModal.js';
import { AdminDashboard } from './components/admin/AdminDashboard.js';
import { SteamUnlockScrollPopup } from './components/SteamUnlockScrollPopup.js';

export default function App() {
  const [settings, setSettings] = useState<SiteSettings>({
    siteTitle: 'Gamers Planet - Premium Game Vault',
    logoText: 'GAMERS PLANET',
    heroHeading: 'LEGENDARY PC GAMING BUNDLES',
    heroSubtitle: 'Get instant digital access to top-tier AAA game vaults and curated indie collections. Verified delivery directly to your account in minutes.',
    heroCtaText: 'Browse Vault Bundles',
    heroSecondaryText: 'View Customer Proof',
    instagramUrl: 'https://instagram.com/gamersplanet20.26',
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
        // Load admin bundles, reviews, and channels (including inactive & unpublished)
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

  // Public Storefront
  return (
    <div className="min-h-screen bg-[#050608] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-black">
      {/* Navbar with 5-click easter egg */}
      <Navbar
        settings={settings}
        isAdmin={isAdmin}
        onOpenAdminModal={() => setShowAdminLogin(true)}
        onOpenDashboard={() => setShowAdminDashboard(true)}
        onLogout={handleLogout}
      />

      {/* Hero Section */}
      <Hero settings={settings} />

      {/* Flash Sale Timer & All Bundles With Live Price */}
      <SaleTimerSection
        bundles={bundles}
        settings={settings}
        onSelectBundle={(bundle) => setSelectedBundle(bundle)}
      />

      {/* Single Games Bundle Section */}
      <SingleGamesSection
        settings={settings}
        featuredBundle={bundles.find(b => b.price === 399) || bundles[0]}
        onSelectBundle={(bundle) => setSelectedBundle(bundle)}
      />

      {/* Game Search & Catalog Explorer */}
      <GameCatalogExplorer
        settings={settings}
        featuredBundle={bundles.find(b => b.price === 399) || bundles[0]}
        steamUnlockBundle={bundles.find(b => b.id === 'bundle-steam-unlock' || b.price === 449) || null}
        onSelectBundle={(bundle) => setSelectedBundle(bundle)}
      />

      {/* Bundles Vault Section */}
      <BundleGrid
        bundles={bundles}
        settings={settings}
        isAdmin={isAdmin}
        onSelectBundle={(bundle) => setSelectedBundle(bundle)}
        onOpenAdmin={() => {
          if (isAdmin) setShowAdminDashboard(true);
          else setShowAdminLogin(true);
        }}
      />

      {/* Password-Protected Exclusive Channels Section */}
      <ChannelsSection
        settings={settings}
        isAdmin={isAdmin}
        onOpenAdmin={() => {
          if (isAdmin) setShowAdminDashboard(true);
          else setShowAdminLogin(true);
        }}
      />

      {/* Customer Reviews & Screenshot Proof Gallery */}
      <ReviewGallery
        reviews={reviews}
        settings={settings}
        isAdmin={isAdmin}
        onOpenAdmin={() => {
          if (isAdmin) setShowAdminDashboard(true);
          else setShowAdminLogin(true);
        }}
      />

      {/* Why Choose Us */}
      <FeaturesSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Footer */}
      <Footer settings={settings} />

      {/* Mobile Floating Quick Bar */}
      <MobileQuickBar settings={settings} />

      {/* Live Recent Orders Ticker (Social Proof) */}
      <RecentOrdersTicker />

      {/* Floating Scroll Popup Offer for ₹449 Steam Unlock & ₹80 ID/Pass */}
      <SteamUnlockScrollPopup
        settings={settings}
        steamUnlockBundle={bundles.find(b => b.id === 'bundle-steam-unlock' || b.price === 449) || null}
        onSelectBundle={(bundle) => setSelectedBundle(bundle)}
      />

      {/* Bundle Details & Video Preview Modal */}
      {selectedBundle && (
        <BundleModal
          bundle={selectedBundle}
          settings={settings}
          onClose={() => setSelectedBundle(null)}
        />
      )}

      {/* Hidden Admin Login Modal */}
      <AdminLoginModal
        isOpen={showAdminLogin}
        onClose={() => setShowAdminLogin(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}
