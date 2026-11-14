import { Bundle } from '../types/index.js';

export interface ShareResult {
  success: boolean;
  copied: boolean;
  shared: boolean;
  url: string;
}

/**
 * Returns the canonical shareable URL for a given bundle
 */
export function getBundleShareUrl(bundle: Bundle): string {
  if (typeof window === 'undefined') return `/bundle/${bundle.id}`;
  const origin = window.location.origin;
  return `${origin}/bundle/${bundle.id}`;
}

/**
 * Shares a bundle link using Web Share API on mobile devices,
 * or copies the URL to the clipboard with fallback.
 */
export async function shareBundleLink(bundle: Bundle): Promise<ShareResult> {
  const url = getBundleShareUrl(bundle);
  const title = `${bundle.title} — Gamers Planet`;
  const text = `🪔 Diwali Dhamaka: FLAT 50% OFF on ${bundle.title}! Includes ${
    bundle.gameCount > 1 ? `${bundle.gameCount.toLocaleString('en-IN')} Games` : 'Steam Unlock'
  } with instant access. Watch the full preview video and claim 50% OFF:`;

  // 1. Try Web Share API (native on mobile Safari, Chrome Android)
  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url,
      });
      return { success: true, copied: false, shared: true, url };
    } catch (err: any) {
      // If user aborted / dismissed native share sheet, don't fail
      if (err?.name === 'AbortError') {
        return { success: false, copied: false, shared: false, url };
      }
      // If native share failed, fall back to clipboard
    }
  }

  // 2. Clipboard fallback
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(url);
      return { success: true, copied: true, shared: false, url };
    }
  } catch {
    // Continue to legacy fallback
  }

  // 3. Legacy textarea copy fallback
  try {
    const textarea = document.createElement('textarea');
    textarea.value = url;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textarea);
    if (successful) {
      return { success: true, copied: true, shared: false, url };
    }
  } catch {
    // Ignore
  }

  return { success: false, copied: false, shared: false, url };
}
