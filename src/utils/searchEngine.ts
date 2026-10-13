export interface SearchableGame {
  id: string;
  title: string;
  genre: string;
  category: string;
  description: string;
  releaseYear: number;
  popular?: boolean;
  coverImage: string;
  aliases?: string[];
  franchise?: string;
  steamAvailable: boolean;
  includedIn399Bundle: boolean;
}

// Convert Roman numerals commonly used in game titles to arabic digits
const ROMAN_MAP: Record<string, string> = {
  'viii': '8',
  'vii': '7',
  'iii': '3',
  'iv': '4',
  'vi': '6',
  'ix': '9',
  'ii': '2',
  'v': '5',
  'x': '10',
  'i': '1'
};

/**
 * Normalizes text for forgiving search:
 * - Lowercase
 * - Strips punctuation and symbols
 * - Converts Roman numerals to numbers (e.g., 're ix' -> 're 9', 'gta vi' -> 'gta 6')
 */
export function normalizeSearchText(text: string): string {
  if (!text) return '';
  let str = text.toLowerCase();

  // Replace punctuation with spaces
  str = str.replace(/[.:\-_,'"!#&/\\()\[\]]/g, ' ');

  // Replace multiple spaces
  str = str.replace(/\s+/g, ' ').trim();

  // Replace standalone roman numerals
  const words = str.split(' ');
  const normalizedWords = words.map(w => ROMAN_MAP[w] || w);
  return normalizedWords.join(' ');
}

/**
 * Generates common abbreviations and acronyms from a game title
 * e.g. "Grand Theft Auto V" -> ["gta", "gtav", "gta5", "gta v"]
 * "Red Dead Redemption 2" -> ["rdr", "rdr2", "rdr 2"]
 * "Resident Evil 9" -> ["re", "re9", "re 9"]
 */
export function generateAcronyms(title: string): string[] {
  const acronyms: Set<string> = new Set();
  const normalized = normalizeSearchText(title);
  const words = normalized.split(' ').filter(w => w.length > 0);

  // First letter of each main word
  if (words.length >= 2) {
    const letters = words.map(w => w[0]).join('');
    acronyms.add(letters);

    // If last word is a number, e.g. "gta5" or "re9"
    const lastWord = words[words.length - 1];
    if (/^\d+$/.test(lastWord)) {
      const lettersWithoutLast = words.slice(0, -1).map(w => w[0]).join('');
      acronyms.add(`${lettersWithoutLast}${lastWord}`);
      acronyms.add(`${lettersWithoutLast} ${lastWord}`);
    }
  }

  // Handle common game franchise patterns
  if (normalized.includes('resident evil')) {
    acronyms.add('re');
    const num = normalized.match(/resident evil\s*(\d+|village|biohazard)/);
    if (num) {
      acronyms.add(`re${num[1]}`);
      acronyms.add(`re ${num[1]}`);
    }
  }

  if (normalized.includes('grand theft auto')) {
    acronyms.add('gta');
    const num = normalized.match(/grand theft auto\s*(\d+|v|iv|vi|sa|vc)/);
    if (num) {
      acronyms.add(`gta${num[1]}`);
      acronyms.add(`gta ${num[1]}`);
    }
  }

  if (normalized.includes('forza')) {
    acronyms.add('forza');
    if (normalized.includes('horizon')) {
      acronyms.add('fh');
      const num = normalized.match(/horizon\s*(\d+)/);
      if (num) {
        acronyms.add(`fh${num[1]}`);
        acronyms.add(`fh ${num[1]}`);
        acronyms.add(`forza${num[1]}`);
        acronyms.add(`forza ${num[1]}`);
      }
    }
    if (normalized.includes('motorsport')) {
      acronyms.add('fm');
      const num = normalized.match(/motorsport\s*(\d+)/);
      if (num) {
        acronyms.add(`fm${num[1]}`);
        acronyms.add(`fm ${num[1]}`);
      }
    }
  }

  if (normalized.includes('call of duty')) {
    acronyms.add('cod');
    if (normalized.includes('black ops')) {
      acronyms.add('bo');
      const num = normalized.match(/black ops\s*(\d+)/);
      if (num) {
        acronyms.add(`bo${num[1]}`);
        acronyms.add(`bo ${num[1]}`);
        acronyms.add(`cod bo${num[1]}`);
        acronyms.add(`cod bo ${num[1]}`);
      }
    }
    if (normalized.includes('modern warfare')) {
      acronyms.add('mw');
      const num = normalized.match(/modern warfare\s*(\d+)/);
      if (num) {
        acronyms.add(`mw${num[1]}`);
        acronyms.add(`mw ${num[1]}`);
      }
    }
  }

  if (normalized.includes('god of war')) {
    acronyms.add('gow');
    if (normalized.includes('ragnarok')) {
      acronyms.add('gowr');
      acronyms.add('gow r');
    }
  }

  if (normalized.includes('spider man') || normalized.includes('spiderman')) {
    acronyms.add('spiderman');
    acronyms.add('sm');
    const num = normalized.match(/spider\s*man\s*(\d+)/);
    if (num) {
      acronyms.add(`sm${num[1]}`);
      acronyms.add(`sm ${num[1]}`);
    }
  }

  if (normalized.includes('need for speed')) {
    acronyms.add('nfs');
  }

  if (normalized.includes('assassin s creed') || normalized.includes('assassins creed')) {
    acronyms.add('ac');
  }

  if (normalized.includes('red dead redemption')) {
    acronyms.add('rdr');
    acronyms.add('rdr2');
    acronyms.add('rdr 2');
  }

  if (normalized.includes('cyberpunk')) {
    acronyms.add('cp2077');
    acronyms.add('cp 2077');
    acronyms.add('cp');
  }

  if (normalized.includes('black myth')) {
    acronyms.add('bmw');
    acronyms.add('wukong');
  }

  if (normalized.includes('elden ring')) {
    acronyms.add('er');
  }

  if (normalized.includes('the last of us')) {
    acronyms.add('tlou');
    acronyms.add('tlou1');
    acronyms.add('tlou2');
  }

  if (normalized.includes('007') || normalized.includes('first light')) {
    acronyms.add('007');
    acronyms.add('james bond');
    acronyms.add('bond');
    acronyms.add('first light');
  }

  return Array.from(acronyms);
}

/**
 * Advanced search matcher for game titles, short names, abbreviations, and categories
 */
export function matchGameSearch<T extends SearchableGame>(game: T, rawQuery: string): boolean {
  if (!rawQuery.trim()) return true;

  const q = normalizeSearchText(rawQuery);
  const qCompact = q.replace(/\s+/g, '');

  const normTitle = normalizeSearchText(game.title);
  const normTitleCompact = normTitle.replace(/\s+/g, '');
  const normDesc = normalizeSearchText(game.description);
  const normGenre = normalizeSearchText(game.genre);
  const normFranchise = normalizeSearchText(game.franchise || '');

  // 1. Direct substring match in title or description
  if (normTitle.includes(q) || normTitleCompact.includes(qCompact)) {
    return true;
  }

  if (normGenre.includes(q) || normFranchise.includes(q)) {
    return true;
  }

  // 2. Direct alias matching
  if (game.aliases && game.aliases.length > 0) {
    for (const alias of game.aliases) {
      const normAlias = normalizeSearchText(alias);
      const normAliasCompact = normAlias.replace(/\s+/g, '');
      if (
        normAlias.includes(q) || 
        q.includes(normAlias) ||
        normAliasCompact === qCompact ||
        normAliasCompact.includes(qCompact)
      ) {
        return true;
      }
    }
  }

  // 3. Dynamic acronym matching
  const acronyms = generateAcronyms(game.title);
  for (const acr of acronyms) {
    const normAcr = normalizeSearchText(acr);
    const normAcrCompact = normAcr.replace(/\s+/g, '');
    if (normAcr === q || normAcrCompact === qCompact || normAcr.startsWith(q)) {
      return true;
    }
  }

  // 4. Token-based matching: all words in query match some part of the game info
  const queryTokens = q.split(' ').filter(Boolean);
  if (queryTokens.length > 1) {
    const combinedSearchSpace = `${normTitle} ${normGenre} ${normFranchise} ${game.aliases ? game.aliases.join(' ') : ''}`;
    const allTokensFound = queryTokens.every(token => combinedSearchSpace.includes(token));
    if (allTokensFound) return true;
  }

  // 5. Short prefix / special handling for 2-3 char searches (e.g. 're', 'ac', 'gow', 'cod', '007')
  if (q.length <= 4) {
    if (normTitle.startsWith(q) || normTitleCompact.startsWith(qCompact)) {
      return true;
    }
  }

  // 6. Substring in description as fallback
  if (normDesc.includes(q)) {
    return true;
  }

  return false;
}
