import { SiteSettings, PrimaryChannelType } from '../types/index.js';

export interface ChannelRedirectOptions {
  bundleTitle?: string;
  price?: number;
  message?: string;
  actionType?: 'purchase' | 'dm' | 'support' | 'deal' | 'single';
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
  const handle = (settings.channelHandle || '@gamersplanet20.26').trim();

  // 1. Build default pre-filled message
  let message = options?.message || '';
  if (!message) {
    if (options?.bundleTitle) {
      const priceStr = options.price ? ` (₹${options.price})` : '';
      message = `Hi GAMERS PLANET! I want to purchase the ${options.bundleTitle}${priceStr}. Please share instant payment & delivery details!`;
    } else if (options?.actionType === 'deal') {
      message = `Hi GAMERS PLANET! I want to claim the Weekend Flash Sale deal. Please share details!`;
    } else if (options?.actionType === 'support') {
      message = `Hi GAMERS PLANET! I have a question regarding PC game vaults. Could you help me?`;
    } else {
      message = `Hi GAMERS PLANET! I am interested in your PC game vaults. Please share available packages!`;
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

      const rawUrl = settings.channelUrl || settings.instagramUrl || 'https://instagram.com/gamersplanet20.26';
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
      const baseInsta = settings.instagramUrl?.trim() || `https://instagram.com/${cleanHandle || 'gamersplanet20.26'}`;
      const safeBase = baseInsta.startsWith('http') ? baseInsta : `https://${baseInsta}`;
      url = `${safeBase.replace(/\/$/, '')}/?text=${encodedMsg}`;
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
