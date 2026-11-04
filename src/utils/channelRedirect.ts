import { SiteSettings, PrimaryChannelType } from '../types/index.js';

export interface ChannelRedirectOptions {
  bundleTitle?: string;
  price?: number;
  message?: string;
  actionType?: 'purchase' | 'dm' | 'support' | 'deal' | 'single' | 'vip_channel';
}

export interface ChannelRedirectInfo {
  url: string;
  channelType: PrimaryChannelType;
  platformName: string;
  handleOrLabel: string;
  actionLabel: string;
  shortLabel: string;
  badgeText: string;
  isWhatsApp: boolean;
  isTelegram: boolean;
  isInstagram: boolean;
  isCustom: boolean;
}

/**
 * Universal redirect resolver that transforms any bundle, single game, or general inquiry
 * into the appropriate external URL based on the admin-configured primary channel.
 */
export function getChannelRedirectInfo(
  settings: SiteSettings,
  options?: ChannelRedirectOptions
): ChannelRedirectInfo {
  const channelType: PrimaryChannelType = settings.primaryChannelType || 'instagram';
  const handle = (settings.channelHandle || '@gamerspoint2026').trim();

  // 1. Build default pre-filled message (No prices on bundles, clear intent)
  let message = options?.message || '';
  if (!message) {
    if (options?.actionType === 'vip_channel') {
      message = `Hi! I want to join your VIP Channel for Unlimited Steam ID & Pass accounts at ₹199. Please share access details!`;
    } else if (options?.actionType === 'single') {
      message = `Hi! I want to buy a single game on Steam (ID & Pass account or personal account). Please share details!`;
    } else if (options?.bundleTitle) {
      message = `Hi! I want to buy the ${options.bundleTitle}. Please share instant delivery details!`;
    } else if (options?.actionType === 'support') {
      message = `Hi! I have a question regarding PC games. Could you help me?`;
    } else {
      message = `Hi! I am interested in your PC game bundles and single games. Please share details!`;
    }
  }

  const encodedMsg = encodeURIComponent(message);
  let url = '';
  let platformName = 'Instagram';
  let actionLabel = 'DM on Instagram';
  let shortLabel = 'DM';
  let badgeText = 'INSTAGRAM DM';

  switch (channelType) {
    case 'whatsapp': {
      platformName = 'WhatsApp';
      actionLabel = 'Chat on WhatsApp';
      shortLabel = 'WhatsApp';
      badgeText = 'WHATSAPP DIRECT';

      // Clean phone number: keep only digits
      const rawNumber = handle.replace(/\D/g, '');
      const cleanPhone = rawNumber.length >= 10 ? rawNumber : '919876543210';
      url = `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
      break;
    }

    case 'telegram': {
      platformName = 'Telegram';
      actionLabel = 'Message on Telegram';
      shortLabel = 'Telegram';
      badgeText = 'TELEGRAM VIP';

      const cleanHandle = handle.replace(/^@/, '').replace(/^https?:\/\/t\.me\//, '').replace(/\/$/, '');
      url = `https://t.me/${cleanHandle || 'gamersplanet2026'}`;
      break;
    }

    case 'custom': {
      platformName = settings.channelCustomLabel || 'Direct Link';
      actionLabel = settings.channelCustomLabel ? `Open ${settings.channelCustomLabel}` : 'Connect Direct';
      shortLabel = 'Connect';
      badgeText = 'DIRECT LINK';

      const rawUrl = settings.channelUrl || settings.instagramUrl || 'https://instagram.com/gamerspoint2026';
      url = rawUrl.startsWith('http') ? rawUrl : `https://${rawUrl}`;
      break;
    }

    case 'instagram':
    default: {
      platformName = 'Instagram';
      actionLabel = 'DM on Instagram';
      shortLabel = 'Instagram DM';
      badgeText = 'INSTAGRAM DM';

      const cleanHandle = handle.replace(/^@/, '').replace(/^https?:\/\/(www\.)?instagram\.com\//, '').replace(/\/$/, '');
      const baseInsta = settings.instagramUrl?.trim() || `https://instagram.com/${cleanHandle || 'gamerspoint2026'}`;
      const safeBase = baseInsta.startsWith('http') ? baseInsta : `https://${baseInsta}`;
      url = safeBase.replace(/\/$/, '');
      break;
    }
  }

  return {
    url,
    channelType,
    platformName,
    handleOrLabel: handle,
    actionLabel,
    shortLabel,
    badgeText,
    isWhatsApp: channelType === 'whatsapp',
    isTelegram: channelType === 'telegram',
    isInstagram: channelType === 'instagram',
    isCustom: channelType === 'custom'
  };
}

/**
 * Universal safe external navigation helper without popup-blocker issues
 */
export function navigateToChannel(
  settings: SiteSettings,
  options?: ChannelRedirectOptions
): void {
  const info = getChannelRedirectInfo(settings, options);
  const anchor = document.createElement('a');
  anchor.href = info.url;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
