import { SiteSettings, PrimaryChannelType } from '../types/index.js';

export const WHATSAPP_BUSINESS_URL = 'https://wa.me/message/JM3YAJDN36QQC1';

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
 * Universal redirect resolver — routes all storefront actions to the configured WhatsApp Business link.
 */
export function getChannelRedirectInfo(
  _settings: SiteSettings,
  _options?: ChannelRedirectOptions
): ChannelRedirectInfo {
  return {
    url: WHATSAPP_BUSINESS_URL,
    channelType: 'whatsapp',
    platformName: 'WhatsApp Business',
    handleOrLabel: 'WhatsApp Business',
    actionLabel: 'Chat on WhatsApp',
    shortLabel: 'WhatsApp',
    badgeText: 'WHATSAPP BUSINESS',
    isWhatsApp: true,
    isTelegram: false,
    isInstagram: false,
    isCustom: false
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
