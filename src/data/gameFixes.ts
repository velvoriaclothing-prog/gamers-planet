export type GameFixCategory =
  | "Online Fix"
  | "All"
  | "Capcom"
  | "EA"
  | "Ubisoft"
  | "Rockstar"
  | "Sony";

export interface GameFixEntry {
  id: number;
  title: string;
  category: GameFixCategory;
  /** Editable external link — update any individual slug if needed */
  url: string;
  /** Editable game cover image URL — real game artwork */
  image: string;
}

export const GAME_FIXES_BASE_URL = "https://crackworld.top/fixes/";

/**
 * Editable list of all 1251 Game Fixes.
 * Every game has its own editable URL and real game cover image URL.
 */
export const GAME_FIXES: GameFixEntry[] = [
  {
    "id": 1,
    "title": "Outbound",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/outbound",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2681030/header.jpg"
  },
  {
    "id": 2,
    "title": "Log Riders",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/log-riders",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4082750/15e7ebf51d35bd641b04b8299ab7aeeee9abc809/header.jpg?t=1788838038"
  },
  {
    "id": 3,
    "title": "Undercover Fools",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/undercover-fools",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3249560/header.jpg"
  },
  {
    "id": 4,
    "title": "Returnal",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/returnal",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1649240/header.jpg"
  },
  {
    "id": 5,
    "title": "Over The Top WWI",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/over-the-top-wwi",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2778610/header.jpg"
  },
  {
    "id": 6,
    "title": "Injustice™ 2",
    "category": "All",
    "url": "https://crackworld.top/fixes/injustice-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/627270/header.jpg"
  },
  {
    "id": 7,
    "title": "Neon Abyss 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/neon-abyss-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2235200/header.jpg"
  },
  {
    "id": 8,
    "title": "DEATH IN UNISON",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/death-in-unison",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2454890/header.jpg"
  },
  {
    "id": 9,
    "title": "Heroes of Might and Magic Olden Era",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/heroes-of-might-and-magic-olden-era",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3105440/header.jpg"
  },
  {
    "id": 10,
    "title": "HITMAN World of Assassination",
    "category": "All",
    "url": "https://crackworld.top/fixes/hitman-world-of-assassination",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1659040/header.jpg"
  },
  {
    "id": 11,
    "title": "Dungeons & Dragons: Daggerdale",
    "category": "All",
    "url": "https://crackworld.top/fixes/dungeons-dragons-daggerdale",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/99100/header.jpg"
  },
  {
    "id": 12,
    "title": "Japanese Ramen Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/japanese-ramen-simulator",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4968640/f271f45d7475a5270df309f6b7634d0a56a8055d/header.jpg?t=1792334006"
  },
  {
    "id": 13,
    "title": "Resident Evil 4",
    "category": "Capcom",
    "url": "https://crackworld.top/fixes/resident-evil-4",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg"
  },
  {
    "id": 14,
    "title": "DREADZONE",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dreadzone",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3484300/header.jpg"
  },
  {
    "id": 15,
    "title": "Windrose",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/windrose",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3041230/7e838d87d787735d5d29d72777c5ee55653dfb2b/header.jpg?t=1783932953"
  },
  {
    "id": 16,
    "title": "DeathWatchers",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/deathwatchers",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2599370/header.jpg"
  },
  {
    "id": 17,
    "title": "All Aspect Warfare",
    "category": "All",
    "url": "https://crackworld.top/fixes/all-aspect-warfare",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/36910/header.jpg"
  },
  {
    "id": 18,
    "title": "OPERATOR",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/operator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1913370/header.jpg"
  },
  {
    "id": 19,
    "title": "Scam Line",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/scam-line",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2794590/86d84c71aadc3000e8719d3df387a0f11007ebcc/header_alt_assets_0.jpg?t=1793728821"
  },
  {
    "id": 20,
    "title": "Dale and Dawson Stationery Supplies",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dale-and-dawson-stationery-supplies",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2920570/header.jpg"
  },
  {
    "id": 21,
    "title": "Scrap Mechanic",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/scrap-mechanic",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/387990/header.jpg"
  },
  {
    "id": 22,
    "title": "Empire Earth",
    "category": "All",
    "url": "https://crackworld.top/fixes/empire-earth",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/254800/header.jpg"
  },
  {
    "id": 23,
    "title": "EverSiege Untold Ages",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/eversiege-untold-ages",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3363680/8f72c430d124eda7638f9df0fff72aab24be5c7c/header.jpg?t=1789552652"
  },
  {
    "id": 24,
    "title": "The Long Drive",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-long-drive",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1017180/header.jpg"
  },
  {
    "id": 25,
    "title": "A Way Out",
    "category": "EA",
    "url": "https://crackworld.top/fixes/a-way-out",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1222700/header.jpg"
  },
  {
    "id": 26,
    "title": "ENDLESS Legend 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/endless-legend-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3407390/header.jpg"
  },
  {
    "id": 27,
    "title": "Mage Arena",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/mage-arena",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3716600/e09e178465c67642c1214736e29d64846d966e52/header.jpg?t=1754585254"
  },
  {
    "id": 28,
    "title": "Backrooms Escape Together",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/backrooms-escape-together",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2141730/header.jpg"
  },
  {
    "id": 29,
    "title": "ICARUS",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/icarus",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1149460/header.jpg"
  },
  {
    "id": 30,
    "title": "Call of Duty Modern Warfare 4",
    "category": "All",
    "url": "https://crackworld.top/fixes/call-of-duty-modern-warfare-4",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4435490/0c492be3204835d71e8b454b6eb1817f8ff68c0d/header.jpg?t=1794339680"
  },
  {
    "id": 31,
    "title": "KEEP GAMBLING",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/keep-gambling",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3720460/e626c2023fd9c52038acdf5191eb65119b1150b2/header.jpg?t=1778184257"
  },
  {
    "id": 32,
    "title": "The Jackbox Survey Scramble",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-jackbox-survey-scramble",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2948640/header.jpg"
  },
  {
    "id": 33,
    "title": "Pushing it! Together Sisyphus Co-op",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/pushing-it-together-sisyphus-co-op",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3298460/header.jpg"
  },
  {
    "id": 34,
    "title": "SAMURAI WARRIORS 4-II",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/samurai-warriors-4-ii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/348470/header.jpg"
  },
  {
    "id": 35,
    "title": "Together in Between",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/together-in-between",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2455340/header.jpg"
  },
  {
    "id": 36,
    "title": "Another Try 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/another-try-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2788040/header.jpg"
  },
  {
    "id": 37,
    "title": "Oh Deer",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/oh-deer",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2708450/header.jpg"
  },
  {
    "id": 38,
    "title": "Assassin's Creed Odyssey",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-odyssey",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/812140/header.jpg"
  },
  {
    "id": 39,
    "title": "Ultimate Admiral: Age of Sail",
    "category": "All",
    "url": "https://crackworld.top/fixes/ultimate-admiral-age-of-sail",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1069650/header.jpg"
  },
  {
    "id": 40,
    "title": "Papers, Please",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/papers-please",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/239030/header.jpg"
  },
  {
    "id": 41,
    "title": "Green Hell",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/green-hell",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/815370/header.jpg"
  },
  {
    "id": 42,
    "title": "Dangerous Mountain Together",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dangerous-mountain-together",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3955660/bcdbe736d1fe4849853c2bf9608f59c471fd6fcd/header.jpg?t=1778141488"
  },
  {
    "id": 43,
    "title": "PowerWash Simulator 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/powerwash-simulator-2",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2968420/91fea40a711c5a74cce1bb1a9e05c48a379f6aa0/header.jpg?t=1793977018"
  },
  {
    "id": 44,
    "title": "Stronghold Crusader Definitive Edition",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/stronghold-crusader-definitive-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3024040/header.jpg"
  },
  {
    "id": 45,
    "title": "PAYDAY 3",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/payday-3",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1272080/header.jpg"
  },
  {
    "id": 46,
    "title": "Burnout™ Paradise Remastered",
    "category": "All",
    "url": "https://crackworld.top/fixes/burnout-paradise-remastered",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1238080/header.jpg"
  },
  {
    "id": 47,
    "title": "Persona 4 Golden",
    "category": "All",
    "url": "https://crackworld.top/fixes/persona-4-golden",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1113000/header.jpg"
  },
  {
    "id": 48,
    "title": "Dirty Business",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dirty-business",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4324480/0bf41369aa9d8f70fd5b1dfcf9b71b0a5b1074f3/header.jpg?t=1790157234"
  },
  {
    "id": 49,
    "title": "eFootball™ PES 2020",
    "category": "All",
    "url": "https://crackworld.top/fixes/efootball-pes-2020",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/996470/header.jpg"
  },
  {
    "id": 50,
    "title": "Cursed Companions",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/cursed-companions",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3265230/header.jpg"
  },
  {
    "id": 51,
    "title": "Age of Empires II",
    "category": "All",
    "url": "https://crackworld.top/fixes/age-of-empires-ii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/221380/header.jpg"
  },
  {
    "id": 52,
    "title": "Anymaker",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/anymaker",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4435340/d9734b7b1afe0e4420f30f37ba6acbcab7a4cc5d/header.jpg?t=1789915338"
  },
  {
    "id": 53,
    "title": "Empire of the Ants",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/empire-of-the-ants",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2287330/header.jpg"
  },
  {
    "id": 54,
    "title": "Colony Survival",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/colony-survival",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/366090/header.jpg"
  },
  {
    "id": 55,
    "title": "Grand Theft Auto IV: The Complete Edition",
    "category": "Rockstar",
    "url": "https://crackworld.top/fixes/grand-theft-auto-iv-the-complete-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/12210/header.jpg"
  },
  {
    "id": 56,
    "title": "WheelMates",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/wheelmates",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3905450/77c8adc4c5c11a80f0ae22633789396a0f313433/header.jpg?t=1794565884"
  },
  {
    "id": 57,
    "title": "Data Center",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/data-center",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4170200/0608b0774dad1ac38875db0389f719c99f6ccf63/header.jpg?t=1793657148"
  },
  {
    "id": 58,
    "title": "Goblin Cleanup",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/goblin-cleanup",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2748340/header.jpg"
  },
  {
    "id": 59,
    "title": "7 Days To Die",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/7-days-to-die",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/251570/header.jpg"
  },
  {
    "id": 60,
    "title": "Halo: Campaign Evolved",
    "category": "All",
    "url": "https://crackworld.top/fixes/halo-campaign-evolved",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2806050/30d8542d35d7919b34e5f5dbe955d04c3f99e6da/header.jpg?t=1786379031"
  },
  {
    "id": 61,
    "title": "Long Drive North",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/long-drive-north",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3179350/header.jpg"
  },
  {
    "id": 62,
    "title": "Lords of the Fallen",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/lords-of-the-fallen",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1501750/header.jpg"
  },
  {
    "id": 63,
    "title": "Clank!",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/clank",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1722870/header.jpg"
  },
  {
    "id": 64,
    "title": "Total War: WARHAMMER II",
    "category": "All",
    "url": "https://crackworld.top/fixes/total-war-warhammer-ii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/594570/header.jpg"
  },
  {
    "id": 65,
    "title": "ICBM Escalation",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/icbm-escalation",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2647680/header.jpg"
  },
  {
    "id": 66,
    "title": "Trials Fusion™",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/trials-fusion",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/245490/header.jpg"
  },
  {
    "id": 67,
    "title": "Find or be Found",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/find-or-be-found",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3223330/header.jpg"
  },
  {
    "id": 68,
    "title": "Tony Hawks Pro Skater 3+4",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/tony-hawks-pro-skater-3-4",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2545710/header.jpg"
  },
  {
    "id": 69,
    "title": "GUNTOUCHABLES",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/guntouchables",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2543510/header.jpg"
  },
  {
    "id": 70,
    "title": "Sengoku Dynasty",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/sengoku-dynasty",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1702010/header.jpg"
  },
  {
    "id": 71,
    "title": "Rewind 99",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/rewind-99",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3977290/b3082198fe2620ae3ba0540cb25136cf49b448a5/header.jpg?t=1787862902"
  },
  {
    "id": 72,
    "title": "Forza Horizon 6",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/forza-horizon-6",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2483190/c53fe3362cc3267a5d34aca3e796b90963e0e23f/header_alt_assets_6.jpg?t=1793894652"
  },
  {
    "id": 73,
    "title": "Relic Dudes",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/relic-dudes",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2116260/header.jpg"
  },
  {
    "id": 74,
    "title": "METAL GEAR SOLID V: THE PHANTOM PAIN",
    "category": "All",
    "url": "https://crackworld.top/fixes/metal-gear-solid-v-the-phantom-pain",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/287700/header.jpg"
  },
  {
    "id": 75,
    "title": "Grounded 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/grounded-2",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2661300/91c758b9591805d15b26d9fa185a8b9ebab0a334/header.jpg?t=1792539149"
  },
  {
    "id": 76,
    "title": "Resident Evil 2",
    "category": "Capcom",
    "url": "https://crackworld.top/fixes/resident-evil-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/883710/header.jpg"
  },
  {
    "id": 77,
    "title": "The Last Citadel",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-last-citadel",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1892090/header.jpg"
  },
  {
    "id": 78,
    "title": "Bum Revenge",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bum-revenge",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3702930/4f8d101551f39a7b1fa274532e50ea0cd9f45b03/header.jpg?t=1772211416"
  },
  {
    "id": 79,
    "title": "Escape Memoirs Safe House",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/escape-memoirs-safe-house",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2722360/header.jpg"
  },
  {
    "id": 80,
    "title": "Whisper Mountain Outbreak",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/whisper-mountain-outbreak",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1953230/header.jpg"
  },
  {
    "id": 81,
    "title": "Forza Horizon 5",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/forza-horizon-5",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg"
  },
  {
    "id": 82,
    "title": "Subnautica",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/subnautica",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/264710/header.jpg"
  },
  {
    "id": 83,
    "title": "Sledding Game",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/sledding-game",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3438850/header.jpg"
  },
  {
    "id": 84,
    "title": "RIDE 5",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ride-5",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1650010/header.jpg"
  },
  {
    "id": 85,
    "title": "Delta Force: Land Warrior",
    "category": "All",
    "url": "https://crackworld.top/fixes/delta-force-land-warrior",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/32640/header.jpg"
  },
  {
    "id": 86,
    "title": "The Binding of Isaac Rebirth",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-binding-of-isaac-rebirth",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/250900/header.jpg"
  },
  {
    "id": 87,
    "title": "GERONIMO",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/geronimo",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2019620/header.jpg"
  },
  {
    "id": 88,
    "title": "Chained Beasts",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/chained-beasts",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3569420/be237edbd1bdbcf361d7b315d70e89fea3b5262a/header.jpg?t=1792711697"
  },
  {
    "id": 89,
    "title": "DEAD MAN'S HAND: Card Roulette Action",
    "category": "All",
    "url": "https://crackworld.top/fixes/dead-mans-hand-card-roulette-action",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2858790/header.jpg"
  },
  {
    "id": 90,
    "title": "EARTH DEFENSE FORCE 6",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/earth-defense-force-6",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2291060/header.jpg"
  },
  {
    "id": 91,
    "title": "Dig Island",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dig-island",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3919360/e6e1d31ece7ef227107103841a83c8ac42d9589a/header.jpg?t=1785864814"
  },
  {
    "id": 92,
    "title": "Unspottable",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/unspottable",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1243960/header.jpg"
  },
  {
    "id": 93,
    "title": "Deus Ex: Human Revolution",
    "category": "All",
    "url": "https://crackworld.top/fixes/deus-ex-human-revolution",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/238010/header.jpg"
  },
  {
    "id": 94,
    "title": "Trials of the Blood Dragon",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/trials-of-the-blood-dragon",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/435480/header.jpg"
  },
  {
    "id": 95,
    "title": "Wrench",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/wrench",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/936720/header.jpg"
  },
  {
    "id": 96,
    "title": "PAYDAY 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/payday-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/218620/header.jpg"
  },
  {
    "id": 97,
    "title": "BMX Streets",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bmx-streets",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/871540/header.jpg"
  },
  {
    "id": 98,
    "title": "Chained Together",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/chained-together",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2567870/header.jpg"
  },
  {
    "id": 99,
    "title": "Supermarket Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/supermarket-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2670630/header.jpg"
  },
  {
    "id": 100,
    "title": "Age of Wonders 4",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/age-of-wonders-4",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1669000/header.jpg"
  },
  {
    "id": 101,
    "title": "Raiders of Blackveil",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/raiders-of-blackveil",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3352240/header.jpg"
  },
  {
    "id": 102,
    "title": "Buckshot Roulette",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/buckshot-roulette",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2835570/header.jpg"
  },
  {
    "id": 103,
    "title": "Paddle Paddle Paddle",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/paddle-paddle-paddle",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3570070/35be35d69c576eeb612eaf49aa62f24689cdc798/header.jpg?t=1783433504"
  },
  {
    "id": 104,
    "title": "YAPYAP",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/yapyap",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3834090/399b7aa5bd9ea359e6d77cec3032758ea27c597b/header.jpg?t=1787811589"
  },
  {
    "id": 105,
    "title": "Planetaries",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/planetaries",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2800450/header.jpg"
  },
  {
    "id": 106,
    "title": "WISE GUYS",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/wise-guys",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3725630/fb44d7fd57648c2652b2c2cde16b133287b6b750/header.jpg?t=1783951663"
  },
  {
    "id": 107,
    "title": "ELDEN RING NIGHTREIGN",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/elden-ring-nightreign",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2622380/header.jpg"
  },
  {
    "id": 108,
    "title": "Driftland The Magic Revival",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/driftland-the-magic-revival",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/718650/header.jpg"
  },
  {
    "id": 109,
    "title": "Grand Theft Auto V Enhanced",
    "category": "Rockstar",
    "url": "https://crackworld.top/fixes/grand-theft-auto-v-enhanced",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3240220/header.jpg"
  },
  {
    "id": 110,
    "title": "Forsaken Frontiers",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/forsaken-frontiers",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2810780/header.jpg"
  },
  {
    "id": 111,
    "title": "Dungeons 4",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dungeons-4",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1643310/header.jpg"
  },
  {
    "id": 112,
    "title": "Drive Beyond Horizons",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/drive-beyond-horizons",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2625420/header.jpg"
  },
  {
    "id": 113,
    "title": "Rooms of Realities",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/rooms-of-realities",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1917810/header.jpg"
  },
  {
    "id": 114,
    "title": "Drug Dealer Simulator 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/drug-dealer-simulator-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1708850/header.jpg"
  },
  {
    "id": 115,
    "title": "Puppet Team",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/puppet-team",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3030360/header.jpg"
  },
  {
    "id": 116,
    "title": "Sonic Forces",
    "category": "All",
    "url": "https://crackworld.top/fixes/sonic-forces",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/637100/header.jpg"
  },
  {
    "id": 117,
    "title": "Total War MEDIEVAL II Definitive Edition",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/total-war-medieval-ii-definitive-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/4700/header.jpg"
  },
  {
    "id": 118,
    "title": "Northgard",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/northgard",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4487060/faa637652716f11477109c9c0be3b6cc12faf2cc/header.jpg?t=1794571274"
  },
  {
    "id": 119,
    "title": "Bus Bound",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bus-bound",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2095420/9803e0013dffba0e3e2577691ec09196046bce99/header.jpg?t=1790865564"
  },
  {
    "id": 120,
    "title": "MISERY",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/misery",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2119830/header.jpg"
  },
  {
    "id": 121,
    "title": "Chivalry 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/chivalry-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1824220/header.jpg"
  },
  {
    "id": 122,
    "title": "Terrorbytes",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/terrorbytes",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3172770/header.jpg"
  },
  {
    "id": 123,
    "title": "Call of Juarez: The Cartel",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/call-of-juarez-the-cartel",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3020/header.jpg"
  },
  {
    "id": 124,
    "title": "Cut That Wire",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/cut-that-wire",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3498650/dbe8d5106c71a10a6aad719805f3f0ef3f00ca80/header.jpg?t=1789539245"
  },
  {
    "id": 125,
    "title": "Cascadia",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/cascadia",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2438970/header.jpg"
  },
  {
    "id": 126,
    "title": "Far Cry 3",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/far-cry-3",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/220240/header.jpg"
  },
  {
    "id": 127,
    "title": "TerraTech Worlds",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/terratech-worlds",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2313330/header.jpg"
  },
  {
    "id": 128,
    "title": "Pathless Woods",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/pathless-woods",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1726130/header.jpg"
  },
  {
    "id": 129,
    "title": "Sineus Arena Survivors",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/sineus-arena-survivors",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4227400/e17bd1d48cecb91e0d4fa6ccd5e3a4eb6b883791/header.jpg?t=1793373082"
  },
  {
    "id": 130,
    "title": "Gamble With Your Friends",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/gamble-with-your-friends",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3892270/395e6d7972474333a698b26f8aa5597bf38109a1/header.jpg?t=1794583151"
  },
  {
    "id": 131,
    "title": "Carry The Glass",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/carry-the-glass",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3263320/header.jpg"
  },
  {
    "id": 132,
    "title": "Nomad Drive",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/nomad-drive",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2223980/header.jpg"
  },
  {
    "id": 133,
    "title": "Heave Ho 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/heave-ho-2",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2802740/829d9cf1b2dc94d98d2df66cf91ecec316e55802/header.jpg?t=1790264315"
  },
  {
    "id": 134,
    "title": "Sonic & All-Stars Racing Transformed Collection",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/sonic-all-stars-racing-transformed-collection",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/212480/header.jpg"
  },
  {
    "id": 135,
    "title": "Call of Duty 2",
    "category": "All",
    "url": "https://crackworld.top/fixes/call-of-duty-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2630/header.jpg"
  },
  {
    "id": 136,
    "title": "God of War Ragnarök",
    "category": "Sony",
    "url": "https://crackworld.top/fixes/god-of-war-ragnarok",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/header.jpg"
  },
  {
    "id": 137,
    "title": "Gladio Mori",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/gladio-mori",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2689120/header.jpg"
  },
  {
    "id": 138,
    "title": "Scott Pilgrim vs. The World™: The Game – Complete Edition",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/scott-pilgrim-vs-the-world-the-game-complete-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2215260/header.jpg"
  },
  {
    "id": 139,
    "title": "ASTRONER",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/astroner",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/361420/header.jpg"
  },
  {
    "id": 140,
    "title": "Endless Alice",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/endless-alice",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1425000/header.jpg"
  },
  {
    "id": 141,
    "title": "Survivor World",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/survivor-world",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2999090/header.jpg"
  },
  {
    "id": 142,
    "title": "The Jackbox Party Pack 11",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-jackbox-party-pack-11",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3364070/35c35317cc3f6ac5733896ab00c4cfbd5a1a025d/header.jpg?t=1774630140"
  },
  {
    "id": 143,
    "title": "Cat Mail Co",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/cat-mail-co",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4380490/9c206d8a7c8a6133230628b6326f4f08a683b40e/header.jpg?t=1794483806"
  },
  {
    "id": 144,
    "title": "Mycopunk",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/mycopunk",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3247750/header.jpg"
  },
  {
    "id": 145,
    "title": "Dagger Directive",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dagger-directive",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2437670/header.jpg"
  },
  {
    "id": 146,
    "title": "SnowRunner",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/snowrunner",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1465360/header.jpg"
  },
  {
    "id": 147,
    "title": "Taora Survival",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/taora-survival",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2165470/header.jpg"
  },
  {
    "id": 148,
    "title": "South Park: The Fractured But Whole™",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/south-park-the-fractured-but-whole",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/488790/header.jpg"
  },
  {
    "id": 149,
    "title": "The Anomaly Project",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-anomaly-project",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2960770/header.jpg"
  },
  {
    "id": 150,
    "title": "Stationeers",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/stationeers",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/544550/header.jpg"
  },
  {
    "id": 151,
    "title": "DuneCrawl",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dunecrawl",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1833200/header.jpg"
  },
  {
    "id": 152,
    "title": "the cabin game",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-cabin-game",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4406280/d3cad021841c8731a0da86e0a0b1321df341cfd0/header.jpg?t=1787842454"
  },
  {
    "id": 153,
    "title": "Hyper Light Breaker",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/hyper-light-breaker",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1534840/header.jpg"
  },
  {
    "id": 154,
    "title": "Ticket to Ride",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ticket-to-ride",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2477010/header.jpg"
  },
  {
    "id": 155,
    "title": "Squad",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/squad",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/393380/header.jpg"
  },
  {
    "id": 156,
    "title": "My Garage",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/my-garage",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1578390/header.jpg"
  },
  {
    "id": 157,
    "title": "DEADLINE DELIVERY",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/deadline-delivery",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3745310/2db6d51b65b237c212d2361a6b5ba107a1119a50/header_alt_assets_1.jpg?t=1794556175"
  },
  {
    "id": 158,
    "title": "Assassin's Creed Revelations",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-revelations",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/201870/header.jpg"
  },
  {
    "id": 159,
    "title": "Grand Theft Auto V Legacy",
    "category": "Rockstar",
    "url": "https://crackworld.top/fixes/grand-theft-auto-v-legacy",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3240220/header.jpg"
  },
  {
    "id": 160,
    "title": "The Forever Winter",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-forever-winter",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2828860/header.jpg"
  },
  {
    "id": 161,
    "title": "Total War: EMPIRE",
    "category": "All",
    "url": "https://crackworld.top/fixes/total-war-empire",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/10500/header.jpg"
  },
  {
    "id": 162,
    "title": "House Flipper 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/house-flipper-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1190970/header.jpg"
  },
  {
    "id": 163,
    "title": "Distant Worlds: Universe",
    "category": "All",
    "url": "https://crackworld.top/fixes/distant-worlds-universe",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/261470/header.jpg"
  },
  {
    "id": 164,
    "title": "METAL GEAR SOLID Peace Walker Master Collection Version",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/metal-gear-solid-peace-walker-master-collection-version",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2492660/10e02aa27ee50aadd8be3e0fbd45badf17ce5234/header.jpg?t=1788345530"
  },
  {
    "id": 165,
    "title": "BOKURA planet",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bokura-planet",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3126150/header.jpg"
  },
  {
    "id": 166,
    "title": "Assassin’s Creed Chronicles: China",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-chronicles-china",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/354380/header.jpg"
  },
  {
    "id": 167,
    "title": "A Game About Chopping Trees",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/a-game-about-chopping-trees",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4512570/3bb6001526b9f15a81b0c59d006012b8702d2059/header.jpg?t=1786200481"
  },
  {
    "id": 168,
    "title": "IRON NEST Heavy Turret Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/iron-nest-heavy-turret-simulator",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2950790/e6c9e990560078611472e5dab98e79a405ed33f4/header.jpg?t=1793491660"
  },
  {
    "id": 169,
    "title": "Water You Doing",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/water-you-doing",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4429930/b96746dd012d8dfa1df0ce52afd9dc1187b24a51/header.jpg?t=1788260021"
  },
  {
    "id": 170,
    "title": "Need For Speed: Hot Pursuit",
    "category": "EA",
    "url": "https://crackworld.top/fixes/need-for-speed-hot-pursuit",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1328660/header.jpg"
  },
  {
    "id": 171,
    "title": "Wizard of Legend 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/wizard-of-legend-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2193540/header.jpg"
  },
  {
    "id": 172,
    "title": "Prototype 2",
    "category": "All",
    "url": "https://crackworld.top/fixes/prototype-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1824390/header.jpg"
  },
  {
    "id": 173,
    "title": "In Sink A Co-op Escape Adventure",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/in-sink-a-co-op-escape-adventure",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1858650/header.jpg"
  },
  {
    "id": 174,
    "title": "Unravel Two",
    "category": "EA",
    "url": "https://crackworld.top/fixes/unravel-two",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1225570/header.jpg"
  },
  {
    "id": 175,
    "title": "Darkwater",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/darkwater",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/619540/header.jpg"
  },
  {
    "id": 176,
    "title": "Travelers Rest",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/travelers-rest",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1139980/header.jpg"
  },
  {
    "id": 177,
    "title": "WEBFISHING",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/webfishing",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3146520/header.jpg"
  },
  {
    "id": 178,
    "title": "DOOM + DOOM II",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/doom-doom-ii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2280/header.jpg"
  },
  {
    "id": 179,
    "title": "MycoRelic",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/mycorelic",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2624080/header.jpg"
  },
  {
    "id": 180,
    "title": "Necesse",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/necesse",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1169040/header.jpg"
  },
  {
    "id": 181,
    "title": "Golf It!",
    "category": "All",
    "url": "https://crackworld.top/fixes/golf-it",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/571740/header.jpg"
  },
  {
    "id": 182,
    "title": "Lost Castle 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/lost-castle-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2445690/header.jpg"
  },
  {
    "id": 183,
    "title": "Lucky Goal",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/lucky-goal",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2174420/header.jpg"
  },
  {
    "id": 184,
    "title": "South Park: The Stick of Truth™",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/south-park-the-stick-of-truth",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/213670/header.jpg"
  },
  {
    "id": 185,
    "title": "CAPTAIN TSUBASA 2: WORLD FIGHTERS",
    "category": "All",
    "url": "https://crackworld.top/fixes/captain-tsubasa-2-world-fighters",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2172910/714df3514b1166414caef8c31b092f5786e8245d/header.jpg?t=1788135682"
  },
  {
    "id": 186,
    "title": "Oxygen Not Included",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/oxygen-not-included",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/457140/header.jpg"
  },
  {
    "id": 187,
    "title": "Blade and Sorcery",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/blade-and-sorcery",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/629730/header.jpg"
  },
  {
    "id": 188,
    "title": "Orcs Must Die! Deathtrap",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/orcs-must-die-deathtrap",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2273980/header.jpg"
  },
  {
    "id": 189,
    "title": "Combat Mission 2: Barbarossa to Berlin",
    "category": "All",
    "url": "https://crackworld.top/fixes/combat-mission-2-barbarossa-to-berlin",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3843560/1c69d2cae6b52f160a6047e0e5cd5b83998f7323/header.jpg?t=1758181055"
  },
  {
    "id": 190,
    "title": "Europa Universalis V",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/europa-universalis-v",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3450310/5fd80bf02f5d7ad3cb3f260708bc765ec8a11b92/header_alt_assets_3.jpg?t=1793206771"
  },
  {
    "id": 191,
    "title": "Euro Truck Simulator 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/euro-truck-simulator-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/227300/header.jpg"
  },
  {
    "id": 192,
    "title": "Baby Steps",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/baby-steps",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1281040/header.jpg"
  },
  {
    "id": 193,
    "title": "Everdream Valley",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/everdream-valley",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1403650/header.jpg"
  },
  {
    "id": 194,
    "title": "Darkstone",
    "category": "All",
    "url": "https://crackworld.top/fixes/darkstone",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/320320/header.jpg"
  },
  {
    "id": 195,
    "title": "Shieldwall",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/shieldwall",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1216320/header.jpg"
  },
  {
    "id": 196,
    "title": "Starground",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/starground",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2793380/header.jpg"
  },
  {
    "id": 197,
    "title": "Renaissance Kingdom Wars",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/renaissance-kingdom-wars",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2533020/header.jpg"
  },
  {
    "id": 198,
    "title": "MotoGP 26",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/motogp-26",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3875050/b53a48a0eb23496725d62cd610096ce95a8491f1/header.jpg?t=1782460179"
  },
  {
    "id": 199,
    "title": "Need for Speed™ Heat",
    "category": "EA",
    "url": "https://crackworld.top/fixes/need-for-speed-heat",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1222680/header.jpg"
  },
  {
    "id": 200,
    "title": "Atomfall",
    "category": "All",
    "url": "https://crackworld.top/fixes/atomfall",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/801800/header.jpg"
  },
  {
    "id": 201,
    "title": "Prisoners",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/prisoners",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4902250/11cf7da4df738eefd7814b6f9c8bb25f2ad5a222/header.jpg?t=1794301304"
  },
  {
    "id": 202,
    "title": "Moto Racer 4",
    "category": "All",
    "url": "https://crackworld.top/fixes/moto-racer-4",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/417430/header.jpg"
  },
  {
    "id": 203,
    "title": "Call To Arms Panzer Elite",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/call-to-arms-panzer-elite",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1343070/header.jpg"
  },
  {
    "id": 204,
    "title": "Garfield Kart 2 - All You Can Drift",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/garfield-kart-2-all-you-can-drift",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3239650/header.jpg"
  },
  {
    "id": 205,
    "title": "CUFFBUST",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/cuffbust",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2592220/header.jpg"
  },
  {
    "id": 206,
    "title": "Titan Quest II",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/titan-quest-ii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1154030/header.jpg"
  },
  {
    "id": 207,
    "title": "Smack Talk",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/smack-talk",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4020490/7e299459274f16970782bd88fdd7590b1a969aa1/header.jpg?t=1787837988"
  },
  {
    "id": 208,
    "title": "Folklore Hunter",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/folklore-hunter",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/696220/header.jpg"
  },
  {
    "id": 209,
    "title": "Terrinoth Heroes of Descent",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/terrinoth-heroes-of-descent",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3929630/3791ee560bb2b4702ece93f8ee2dec1b76c69ee5/header.jpg?t=1788793541"
  },
  {
    "id": 210,
    "title": "Cricket 26 - The Official Game of the Ashes",
    "category": "All",
    "url": "https://crackworld.top/fixes/cricket-26-the-official-game-of-the-ashes",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2358260/header.jpg"
  },
  {
    "id": 211,
    "title": "Bookshop Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bookshop-simulator",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3467040/2d2a4d580acb178c1478cdd23d3630a1a4245ebc/header_alt_assets_1.jpg?t=1784578538"
  },
  {
    "id": 212,
    "title": "Spirit Island",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/spirit-island",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1236720/header.jpg"
  },
  {
    "id": 213,
    "title": "Project Mist",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/project-mist",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2383130/header.jpg"
  },
  {
    "id": 214,
    "title": "Granny Escape Together",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/granny-escape-together",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3070520/header.jpg"
  },
  {
    "id": 215,
    "title": "Dig, Dig, Die",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dig-dig-die",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4074010/f948644c9f688a116922b2caea200a03bc1c804a/header.jpg?t=1786016977"
  },
  {
    "id": 216,
    "title": "Aliens Vs. Ghosts",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/aliens-vs-ghosts",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1609730/header.jpg"
  },
  {
    "id": 217,
    "title": "Songs of Silence",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/songs-of-silence",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2195410/header.jpg"
  },
  {
    "id": 218,
    "title": "Moo Who",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/moo-who",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4948000/362297ea18447bdf634052b56e7c1bc3d9ed2e72/header.jpg?t=1794593392"
  },
  {
    "id": 219,
    "title": "POSTAL Brain Damaged",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/postal-brain-damaged",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1359980/header.jpg"
  },
  {
    "id": 220,
    "title": "Eden Crafters",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/eden-crafters",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2570210/header.jpg"
  },
  {
    "id": 221,
    "title": "DRAGON BALL FighterZ",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dragon-ball-fighterz",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/678950/header.jpg"
  },
  {
    "id": 222,
    "title": "GROUND BRANCH",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ground-branch",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/16900/header.jpg"
  },
  {
    "id": 223,
    "title": "Demon Slayer Kimetsu no Yaiba The Hinokami Chronicles 2",
    "category": "All",
    "url": "https://crackworld.top/fixes/demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2928600/header.jpg"
  },
  {
    "id": 224,
    "title": "Capsized",
    "category": "All",
    "url": "https://crackworld.top/fixes/capsized",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/95300/header.jpg"
  },
  {
    "id": 225,
    "title": "Total War: THREE KINGDOMS",
    "category": "All",
    "url": "https://crackworld.top/fixes/total-war-three-kingdoms",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/779340/header.jpg"
  },
  {
    "id": 226,
    "title": "A Gentlemen's Dispute",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/a-gentlemens-dispute",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2820700/header.jpg"
  },
  {
    "id": 227,
    "title": "Ys vs. Trails in the Sky Alternative Saga",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ys-vs-trails-in-the-sky-alternative-saga",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1794880/header.jpg"
  },
  {
    "id": 228,
    "title": "Bloodstained Ritual of the Night",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bloodstained-ritual-of-the-night",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/692850/header.jpg"
  },
  {
    "id": 229,
    "title": "All In One Sports VR",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/all-in-one-sports-vr",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1514840/header.jpg"
  },
  {
    "id": 230,
    "title": "Call of Duty: Black Ops 7",
    "category": "All",
    "url": "https://crackworld.top/fixes/call-of-duty-black-ops-7",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3606480/d7041a15f572f7702d5f4bc97e498cd3e1cc62e2/header.jpg?t=1789747703"
  },
  {
    "id": 231,
    "title": "Orebound",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/orebound",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2467810/header.jpg"
  },
  {
    "id": 232,
    "title": "Inferno Protocol",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/inferno-protocol",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3908940/45fdacf873c8ca3ba7cca576fcf03ac24a413462/header.jpg?t=1793541752"
  },
  {
    "id": 233,
    "title": "SCUM",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/scum",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/513710/header.jpg"
  },
  {
    "id": 234,
    "title": "Wolfpack",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/wolfpack",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/490920/header.jpg"
  },
  {
    "id": 235,
    "title": "Tabletop Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/tabletop-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/286160/header.jpg"
  },
  {
    "id": 236,
    "title": "Roboquest",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/roboquest",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/692890/header.jpg"
  },
  {
    "id": 237,
    "title": "PULSAR Lost Colony",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/pulsar-lost-colony",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/252870/header.jpg"
  },
  {
    "id": 238,
    "title": "Coral Island",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/coral-island",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1158160/header.jpg"
  },
  {
    "id": 239,
    "title": "PRO EVOLUTION SOCCER 2019",
    "category": "All",
    "url": "https://crackworld.top/fixes/pro-evolution-soccer-2019",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/770240/header.jpg"
  },
  {
    "id": 240,
    "title": "Dark Hours",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dark-hours",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2208570/header.jpg"
  },
  {
    "id": 241,
    "title": "Project CARS 2",
    "category": "All",
    "url": "https://crackworld.top/fixes/project-cars-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/860233/header.jpg"
  },
  {
    "id": 242,
    "title": "Echo Point Nova",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/echo-point-nova",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1836730/header.jpg"
  },
  {
    "id": 243,
    "title": "Frog Jump",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/frog-jump",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3448750/header.jpg"
  },
  {
    "id": 244,
    "title": "Windblown",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/windblown",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1911610/header.jpg"
  },
  {
    "id": 245,
    "title": "Big Hops Together",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/big-hops-together",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1221480/header.jpg"
  },
  {
    "id": 246,
    "title": "Need for Speed™ Most Wanted",
    "category": "EA",
    "url": "https://crackworld.top/fixes/need-for-speed-most-wanted",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1262560/header.jpg"
  },
  {
    "id": 247,
    "title": "Third Person Basketball Court",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/third-person-basketball-court",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3396100/35dee5610ca5d7132903044d474675fa26fea65d/header.jpg?t=1774963149"
  },
  {
    "id": 248,
    "title": "Dead Space",
    "category": "EA",
    "url": "https://crackworld.top/fixes/dead-space",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1693980/header.jpg"
  },
  {
    "id": 249,
    "title": "Assassin’s Creed Chronicles: Russia",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-chronicles-russia",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/359600/header.jpg"
  },
  {
    "id": 250,
    "title": "PARANOIA PLACE",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/paranoia-place",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3642670/9c20f129c000b23f02526e69bd9a1daad18a1735/header.jpg?t=1744301940"
  },
  {
    "id": 251,
    "title": "Atomic Heart",
    "category": "All",
    "url": "https://crackworld.top/fixes/atomic-heart",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/668580/header.jpg"
  },
  {
    "id": 252,
    "title": "Plants vs Zombies Garden Warfare 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/plants-vs-zombies-garden-warfare-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1922560/header.jpg"
  },
  {
    "id": 253,
    "title": "Sins of a Solar Empire II",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/sins-of-a-solar-empire-ii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1575940/header.jpg"
  },
  {
    "id": 254,
    "title": "LA Noire",
    "category": "Rockstar",
    "url": "https://crackworld.top/fixes/la-noire",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/110800/header.jpg"
  },
  {
    "id": 255,
    "title": "Trackline Express",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/trackline-express",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2343920/header.jpg"
  },
  {
    "id": 256,
    "title": "Try To Drive",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/try-to-drive",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3621700/defa537fea0d08c31eab9d1828875b8a42fc1430/header.jpg?t=1783519527"
  },
  {
    "id": 257,
    "title": "Granvir",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/granvir",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2743460/header.jpg"
  },
  {
    "id": 258,
    "title": "STAR OCEAN THE LAST HOPE 4K & Full HD Remaster",
    "category": "All",
    "url": "https://crackworld.top/fixes/star-ocean-the-last-hope-4k-full-hd-remaster",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/609150/header.jpg"
  },
  {
    "id": 259,
    "title": "Haste",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/haste",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1796470/header.jpg"
  },
  {
    "id": 260,
    "title": "NBA 2K27",
    "category": "All",
    "url": "https://crackworld.top/fixes/nba-2k27",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4356430/9152438fde7de9f4c20b4fd9072ba69f844dacab/header.jpg?t=1792163139"
  },
  {
    "id": 261,
    "title": "Sleeping Dogs: Definitive Edition",
    "category": "All",
    "url": "https://crackworld.top/fixes/sleeping-dogs-definitive-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/307690/header.jpg"
  },
  {
    "id": 262,
    "title": "Batman™: Arkham Knight",
    "category": "All",
    "url": "https://crackworld.top/fixes/batman-arkham-knight",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/208650/header.jpg"
  },
  {
    "id": 263,
    "title": "Gundam Breaker 4",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/gundam-breaker-4",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1672500/header.jpg"
  },
  {
    "id": 264,
    "title": "Slime Rancher 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/slime-rancher-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1657630/header.jpg"
  },
  {
    "id": 265,
    "title": "Maneater",
    "category": "All",
    "url": "https://crackworld.top/fixes/maneater",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/629820/header.jpg"
  },
  {
    "id": 266,
    "title": "Spanky",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/spanky",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1732420/header.jpg"
  },
  {
    "id": 267,
    "title": "LA Noire: The VR Case Files",
    "category": "Rockstar",
    "url": "https://crackworld.top/fixes/la-noire-the-vr-case-files",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/722230/header.jpg"
  },
  {
    "id": 268,
    "title": "Crimson Moon",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/crimson-moon",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4317690/43f965890a8f4e64917f20befc50a077036cc015/header.jpg?t=1790179831"
  },
  {
    "id": 269,
    "title": "Go Fight Fantastic",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/go-fight-fantastic",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1183530/header.jpg"
  },
  {
    "id": 270,
    "title": "Wreckfest 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/wreckfest-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1203190/header.jpg"
  },
  {
    "id": 271,
    "title": "Call to Arms Gates of Hell Ostfront",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/call-to-arms-gates-of-hell-ostfront",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/400750/header.jpg"
  },
  {
    "id": 272,
    "title": "Crazy Hotel Together",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/crazy-hotel-together",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4244880/0324c2b067af83ff55ef0156644aba23e5b6be00/header.jpg?t=1777880049"
  },
  {
    "id": 273,
    "title": "Warhammer Vermintide 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/warhammer-vermintide-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/552500/header.jpg"
  },
  {
    "id": 274,
    "title": "Dawn of Magic 2",
    "category": "All",
    "url": "https://crackworld.top/fixes/dawn-of-magic-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/33540/header.jpg"
  },
  {
    "id": 275,
    "title": "Meowgic",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/meowgic",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4252290/b883c77dec337d5cb31e55e5de18e1d1c1183f9a/header.jpg?t=1784559240"
  },
  {
    "id": 276,
    "title": "FlyKnight",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/flyknight",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3108510/header.jpg"
  },
  {
    "id": 277,
    "title": "UNDER NIGHT IN-BIRTH II Sys Celes",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/under-night-in-birth-ii-sys-celes",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2076010/header.jpg"
  },
  {
    "id": 278,
    "title": "CRYO",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/cryo",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2564910/header.jpg"
  },
  {
    "id": 279,
    "title": "Lawgivers II",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/lawgivers-ii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1407180/header.jpg"
  },
  {
    "id": 280,
    "title": "Aliens Fireteam Elite 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/aliens-fireteam-elite-2",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3448650/9b3d808b5a39c572dc13ced8024e8085bd306805/header.jpg?t=1789664423"
  },
  {
    "id": 281,
    "title": "We Were Here Forever",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/we-were-here-forever",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1341290/header.jpg"
  },
  {
    "id": 282,
    "title": "Bandit Trap",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bandit-trap",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2982360/header.jpg"
  },
  {
    "id": 283,
    "title": "Duel Corp",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/duel-corp",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1804470/header.jpg"
  },
  {
    "id": 284,
    "title": "Crysis Warhead",
    "category": "EA",
    "url": "https://crackworld.top/fixes/crysis-warhead",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/17330/header.jpg"
  },
  {
    "id": 285,
    "title": "Songs of Conquest",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/songs-of-conquest",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/867210/header.jpg"
  },
  {
    "id": 286,
    "title": "LEGO Horizon Adventures™",
    "category": "Sony",
    "url": "https://crackworld.top/fixes/lego-horizon-adventures",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2428810/header.jpg"
  },
  {
    "id": 287,
    "title": "Hitman: Absolution",
    "category": "All",
    "url": "https://crackworld.top/fixes/hitman-absolution",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/203140/header.jpg"
  },
  {
    "id": 288,
    "title": "Tribes of Midgard",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/tribes-of-midgard",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/858820/header.jpg"
  },
  {
    "id": 289,
    "title": "IfSunSets",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ifsunsets",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2271930/header.jpg"
  },
  {
    "id": 290,
    "title": "SWAT Commander",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/swat-commander",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1619310/header.jpg"
  },
  {
    "id": 291,
    "title": "GRID 2",
    "category": "All",
    "url": "https://crackworld.top/fixes/grid-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/248140/header.jpg"
  },
  {
    "id": 292,
    "title": "SILENT BREATH",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/silent-breath",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2796180/header.jpg"
  },
  {
    "id": 293,
    "title": "INSIDE",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/inside",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/304430/header.jpg"
  },
  {
    "id": 294,
    "title": "Chained Wheels",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/chained-wheels",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4243690/e7646480507c8b4333097faef96c5dd300f8f67e/header.jpg?t=1794211059"
  },
  {
    "id": 295,
    "title": "Delta Force: Task Force Dagger",
    "category": "All",
    "url": "https://crackworld.top/fixes/delta-force-task-force-dagger",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/32650/header.jpg"
  },
  {
    "id": 296,
    "title": "Farming Simulator 22",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/farming-simulator-22",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1248130/header.jpg"
  },
  {
    "id": 297,
    "title": "DiRT 4",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dirt-4",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1118263/header.jpg"
  },
  {
    "id": 298,
    "title": "Mall Rivals",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/mall-rivals",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4090330/e10565b5b4fcd9b55b2cedbd12145bc14b6af43e/header.jpg?t=1791378339"
  },
  {
    "id": 299,
    "title": "Hogwarts Legacy",
    "category": "All",
    "url": "https://crackworld.top/fixes/hogwarts-legacy",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg"
  },
  {
    "id": 300,
    "title": "OUTBRK",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/outbrk",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1107320/header.jpg"
  },
  {
    "id": 301,
    "title": "Macabre",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/macabre",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1794830/header.jpg"
  },
  {
    "id": 302,
    "title": "No Man's Sky",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/no-mans-sky",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/275850/header.jpg"
  },
  {
    "id": 303,
    "title": "Persona® 5 Strikers",
    "category": "All",
    "url": "https://crackworld.top/fixes/persona-5-strikers",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1382330/header.jpg"
  },
  {
    "id": 304,
    "title": "HumanitZ",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/humanitz",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1766060/header.jpg"
  },
  {
    "id": 305,
    "title": "Heroes of Valor",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/heroes-of-valor",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2504090/header.jpg"
  },
  {
    "id": 306,
    "title": "Screamer",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/screamer",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2814990/header.jpg"
  },
  {
    "id": 307,
    "title": "Robbing Time",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/robbing-time",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3626560/9e0a33bf5d10eff264eeda40629cdbca8be37ebc/header.jpg?t=1763042471"
  },
  {
    "id": 308,
    "title": "Crazy Taxi",
    "category": "All",
    "url": "https://crackworld.top/fixes/crazy-taxi",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2924540/7ccfd3f4ac88238c6719e5e161d57b0524e18bce/header.jpg?t=1794366940"
  },
  {
    "id": 309,
    "title": "Flight Simulator 10",
    "category": "All",
    "url": "https://crackworld.top/fixes/flight-simulator-10",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2394350/header.jpg"
  },
  {
    "id": 310,
    "title": "Assassin's Creed Black Flag Resynced",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-black-flag-resynced",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3751950/8a128a3d00e5c23fd36443876a60e1b6d497fc7b/header_alt_assets_0.jpg?t=1793391152"
  },
  {
    "id": 311,
    "title": "Age of Darkness Final Stand",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/age-of-darkness-final-stand",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1426450/header.jpg"
  },
  {
    "id": 312,
    "title": "Jurassic World Evolution",
    "category": "All",
    "url": "https://crackworld.top/fixes/jurassic-world-evolution",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/648350/header.jpg"
  },
  {
    "id": 313,
    "title": "Planet Coaster",
    "category": "All",
    "url": "https://crackworld.top/fixes/planet-coaster",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/493340/header.jpg"
  },
  {
    "id": 314,
    "title": "SWORN",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/sworn",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1763250/header.jpg"
  },
  {
    "id": 315,
    "title": "Hold Your King",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/hold-your-king",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3564340/e40e0031c225c41a408b003cd131c7391683d73e/header.jpg?t=1792017356"
  },
  {
    "id": 316,
    "title": "63 days",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/63-days",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2202120/header.jpg"
  },
  {
    "id": 317,
    "title": "Valheim",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/valheim",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header.jpg"
  },
  {
    "id": 318,
    "title": "Galactic Civilizations II",
    "category": "All",
    "url": "https://crackworld.top/fixes/galactic-civilizations-ii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/202200/header.jpg"
  },
  {
    "id": 319,
    "title": "Pass The Fear",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/pass-the-fear",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3561220/75f77fc88eaf0226ebae317a94f05000164c5cc0/header.jpg?t=1792462945"
  },
  {
    "id": 320,
    "title": "Damned 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/damned-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2221390/header.jpg"
  },
  {
    "id": 321,
    "title": "Co-op Kaiju Horror Cooking",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/co-op-kaiju-horror-cooking",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3139570/e39a5192345e018d461b937e628a3ef39cf6d81a/header.jpg?t=1766070019"
  },
  {
    "id": 322,
    "title": "Expeditions A MudRunner Game",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/expeditions-a-mudrunner-game",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2477340/header.jpg"
  },
  {
    "id": 323,
    "title": "NARUTO SHIPPUDEN: Ultimate Ninja STORM 3 Full Burst",
    "category": "All",
    "url": "https://crackworld.top/fixes/naruto-shippuden-ultimate-ninja-storm-3-full-burst",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/234670/header.jpg"
  },
  {
    "id": 324,
    "title": "Jumping Jazz Cats",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/jumping-jazz-cats",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1951780/header.jpg"
  },
  {
    "id": 325,
    "title": "Ghost Janitors",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ghost-janitors",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2772990/header.jpg"
  },
  {
    "id": 326,
    "title": "Fortix 2",
    "category": "All",
    "url": "https://crackworld.top/fixes/fortix-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/45450/header.jpg"
  },
  {
    "id": 327,
    "title": "Crawl",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/crawl",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/293780/header.jpg"
  },
  {
    "id": 328,
    "title": "Slay the Spire 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/slay-the-spire-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2868840/header.jpg"
  },
  {
    "id": 329,
    "title": "Prince of Persia: The Forgotten Sands™",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/prince-of-persia-the-forgotten-sands",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/33320/header.jpg"
  },
  {
    "id": 330,
    "title": "Funnel Runners",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/funnel-runners",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3712080/5e03554f7fd68edf54813a8d5a576a8791672227/header.jpg?t=1794517061"
  },
  {
    "id": 331,
    "title": "Chaos Express Delivery Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/chaos-express-delivery-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2818480/header.jpg"
  },
  {
    "id": 332,
    "title": "Six Days in Fallujah",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/six-days-in-fallujah",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1548850/header.jpg"
  },
  {
    "id": 333,
    "title": "Hearts of Iron IV",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/hearts-of-iron-iv",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/394360/header.jpg"
  },
  {
    "id": 334,
    "title": "Rail Route",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/rail-route",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1124180/header.jpg"
  },
  {
    "id": 335,
    "title": "Crusader Kings III",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/crusader-kings-iii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1158310/header.jpg"
  },
  {
    "id": 336,
    "title": "NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/naruto-x-boruto-ultimate-ninja-storm-connections",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1020790/header.jpg"
  },
  {
    "id": 337,
    "title": "The Crew",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/the-crew",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2698940/header.jpg"
  },
  {
    "id": 338,
    "title": "Don't Panic! It is Just a Turbulence",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dont-panic-it-is-just-a-turbulence",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4187140/c4a129e4e5c32ab8933eec6045b92d550754da40/header.jpg?t=1780587338"
  },
  {
    "id": 339,
    "title": "Europa Universalis IV",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/europa-universalis-iv",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/236850/header.jpg"
  },
  {
    "id": 340,
    "title": "Aloft",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/aloft",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1660080/header.jpg"
  },
  {
    "id": 341,
    "title": "Keep Keepers",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/keep-keepers",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2354330/header.jpg"
  },
  {
    "id": 342,
    "title": "Labyrinthine",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/labyrinthine",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1302240/header.jpg"
  },
  {
    "id": 343,
    "title": "Alpha Response",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/alpha-response",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2089250/header.jpg"
  },
  {
    "id": 344,
    "title": "Hidden Deep",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/hidden-deep",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/976890/header.jpg"
  },
  {
    "id": 345,
    "title": "Golf With Your Friends",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/golf-with-your-friends",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/431240/header.jpg"
  },
  {
    "id": 346,
    "title": "Diesel Legacy The Brazen Age",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/diesel-legacy-the-brazen-age",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1959140/header.jpg"
  },
  {
    "id": 347,
    "title": "Approximately Up",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/approximately-up",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3904850/d91f2e97c92cb98f97b3c773ff1e2d84bf6bc127/header.jpg?t=1793038641"
  },
  {
    "id": 348,
    "title": "SEVERANCE",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/severance",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3815750/06e6f359bcde19d12a965368a12597c2d5572be4/header.jpg?t=1793134297"
  },
  {
    "id": 349,
    "title": "Dungeon Keeper 2",
    "category": "EA",
    "url": "https://crackworld.top/fixes/dungeon-keeper-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2616460/header.jpg"
  },
  {
    "id": 350,
    "title": "Cryptid Farm",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/cryptid-farm",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1892140/header.jpg"
  },
  {
    "id": 351,
    "title": "Fuel Harvest Together",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/fuel-harvest-together",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3441460/header.jpg"
  },
  {
    "id": 352,
    "title": "Sir Whoopass Immortal Death",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/sir-whoopass-immortal-death",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1240590/header.jpg"
  },
  {
    "id": 353,
    "title": "Keep Digging",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/keep-digging",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3585800/fa3971aab9b22af494e4ab0b3790d9bcb89dae71/header.jpg?t=1789527047"
  },
  {
    "id": 354,
    "title": "Borderlands 3",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/borderlands-3",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/397540/header.jpg"
  },
  {
    "id": 355,
    "title": "Rooftops & Alleys The Parkour Game",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/rooftops-alleys-the-parkour-game",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2703850/header.jpg"
  },
  {
    "id": 356,
    "title": "Call of Duty: Black Ops II",
    "category": "All",
    "url": "https://crackworld.top/fixes/call-of-duty-black-ops-ii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/202970/header.jpg"
  },
  {
    "id": 357,
    "title": "Nuclear Option",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/nuclear-option",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2168680/header.jpg"
  },
  {
    "id": 358,
    "title": "LEGO Voyagers",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/lego-voyagers",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1538550/db718ae2be60558df2ef9fcd65302ad87a6045d4/header.jpg?t=1765323947"
  },
  {
    "id": 359,
    "title": "Bus Simulator 27",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bus-simulator-27",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2397320/da4a57428bac72569d83afcd0b7f5878c97a17f5/header.jpg?t=1794473238"
  },
  {
    "id": 360,
    "title": "Only Up SKIBIDI TOGETHER",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/only-up-skibidi-together",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2997450/header.jpg"
  },
  {
    "id": 361,
    "title": "Rest Area Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/rest-area-simulator",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3732960/cd47f627122d6110739e99ca93b3713e426d3b3c/header.jpg?t=1794579936"
  },
  {
    "id": 362,
    "title": "ZONE OF THE ENDERS THE 2nd RUNNER : MARS / ANUBIS ZONE OF THE ENDERS : MARS",
    "category": "All",
    "url": "https://crackworld.top/fixes/zone-of-the-enders-the-2nd-runner-mars-anubis-zone-of-the-enders-mars",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/881340/header.jpg"
  },
  {
    "id": 363,
    "title": "Anime Shop Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/anime-shop-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3393280/header.jpg"
  },
  {
    "id": 364,
    "title": "Dragonkin The Banished",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dragonkin-the-banished",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1863430/header.jpg"
  },
  {
    "id": 365,
    "title": "Assassin's Creed III",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-iii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/911400/header.jpg"
  },
  {
    "id": 366,
    "title": "Call of Duty: Black Ops 6",
    "category": "All",
    "url": "https://crackworld.top/fixes/call-of-duty-black-ops-6",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4384550/836828b783fc1208664d6c3f9fe88e9abf060813/header.jpg?t=1783699904"
  },
  {
    "id": 367,
    "title": "Stellar Blade™",
    "category": "Sony",
    "url": "https://crackworld.top/fixes/stellar-blade",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3489700/header.jpg"
  },
  {
    "id": 368,
    "title": "Act of War: Direct Action",
    "category": "All",
    "url": "https://crackworld.top/fixes/act-of-war-direct-action",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2710/header.jpg"
  },
  {
    "id": 369,
    "title": "Forest Escape Last Train",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/forest-escape-last-train",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4090360/a8fa0b2644a0e2d43e9efe8956b7534d599e42d7/header_alt_assets_3.jpg?t=1794611517"
  },
  {
    "id": 370,
    "title": "Vacation Cafe Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/vacation-cafe-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3196440/header.jpg"
  },
  {
    "id": 371,
    "title": "DeathSpank",
    "category": "EA",
    "url": "https://crackworld.top/fixes/deathspank",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/18040/header.jpg"
  },
  {
    "id": 372,
    "title": "Solium Infernum",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/solium-infernum",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1893810/header.jpg"
  },
  {
    "id": 373,
    "title": "Clawed",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/clawed",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3394840/header.jpg"
  },
  {
    "id": 374,
    "title": "Be There, Won That",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/be-there-won-that",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3130340/header.jpg"
  },
  {
    "id": 375,
    "title": "Rivals of Aether II",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/rivals-of-aether-ii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2217000/header.jpg"
  },
  {
    "id": 376,
    "title": "Sclash",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/sclash",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1284130/header.jpg"
  },
  {
    "id": 377,
    "title": "Age of Empires",
    "category": "All",
    "url": "https://crackworld.top/fixes/age-of-empires",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1466860/header.jpg"
  },
  {
    "id": 378,
    "title": "Night Club Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/night-club-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2943670/header.jpg"
  },
  {
    "id": 379,
    "title": "My Summer Car",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/my-summer-car",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/516750/header.jpg"
  },
  {
    "id": 380,
    "title": "Sonic Colors: Ultimate",
    "category": "All",
    "url": "https://crackworld.top/fixes/sonic-colors-ultimate",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2055290/header.jpg"
  },
  {
    "id": 381,
    "title": "Ultimate Monkey Race",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ultimate-monkey-race",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2847850/header.jpg"
  },
  {
    "id": 382,
    "title": "Minecraft Dungeons",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/minecraft-dungeons",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1672970/header.jpg"
  },
  {
    "id": 383,
    "title": "WolfQuest Anniversary Edition",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/wolfquest-anniversary-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/926990/header.jpg"
  },
  {
    "id": 384,
    "title": "HAM The Game",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ham-the-game",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4019090/5652bd0ebda6bba801525434b7b86567b9c41c40/header.jpg?t=1782730022"
  },
  {
    "id": 385,
    "title": "Daimon Blades",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/daimon-blades",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1869500/f04b5c6d490f24c8cb1403fc2a737028cd3a279a/header.jpg?t=1773335471"
  },
  {
    "id": 386,
    "title": "Outpost Infinity Siege",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/outpost-infinity-siege",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1566690/header.jpg"
  },
  {
    "id": 387,
    "title": "Sudden Strike 5",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/sudden-strike-5",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2808550/b605fb58a451cd8ff5928e5576c216e201106211/header.jpg?t=1790060517"
  },
  {
    "id": 388,
    "title": "Call of Duty: WWII",
    "category": "All",
    "url": "https://crackworld.top/fixes/call-of-duty-wwii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/476600/header.jpg"
  },
  {
    "id": 389,
    "title": "Revenge of the Savage Planet",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/revenge-of-the-savage-planet",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2787320/header.jpg"
  },
  {
    "id": 390,
    "title": "Bazaar Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bazaar-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2379810/header.jpg"
  },
  {
    "id": 391,
    "title": "Monster Care Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/monster-care-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3288270/header.jpg"
  },
  {
    "id": 392,
    "title": "Wrap House Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/wrap-house-simulator",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/5003360/6094189961a9adfab7cb1c248f484fcf2d0237ac/header.jpg?t=1791832825"
  },
  {
    "id": 393,
    "title": "V Rising",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/v-rising",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1604030/header.jpg"
  },
  {
    "id": 394,
    "title": "Gang Beasts",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/gang-beasts",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/285900/header.jpg"
  },
  {
    "id": 395,
    "title": "Call of Duty: Black Ops",
    "category": "All",
    "url": "https://crackworld.top/fixes/call-of-duty-black-ops",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/42700/header.jpg"
  },
  {
    "id": 396,
    "title": "EVERYBODY'S GOLF HOT SHOTS",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/everybodys-golf-hot-shots",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2730810/fc0dcea45adde5a32dcb1111192a68034c1e37c4/header.jpg?t=1783534122"
  },
  {
    "id": 397,
    "title": "Tetris Effect Connected",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/tetris-effect-connected",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1003590/header.jpg"
  },
  {
    "id": 398,
    "title": "Project Motor Racing",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/project-motor-racing",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/299970/header.jpg"
  },
  {
    "id": 399,
    "title": "Max Payne 3",
    "category": "Rockstar",
    "url": "https://crackworld.top/fixes/max-payne-3",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/204100/header.jpg"
  },
  {
    "id": 400,
    "title": "PRAGMATA",
    "category": "Capcom",
    "url": "https://crackworld.top/fixes/pragmata",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/e32e168b25ed68a0cf6264c220c07e96c2abfb56/header.jpg?t=1791454600"
  },
  {
    "id": 401,
    "title": "Omega Crafter",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/omega-crafter",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2262080/header.jpg"
  },
  {
    "id": 402,
    "title": "Atomic Picnic",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/atomic-picnic",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1903560/header.jpg"
  },
  {
    "id": 403,
    "title": "HELLCARD",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/hellcard",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1201540/header.jpg"
  },
  {
    "id": 404,
    "title": "The Gold River Project",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-gold-river-project",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1253220/header.jpg"
  },
  {
    "id": 405,
    "title": "Invokyr",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/invokyr",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3883570/a1d37fb2bf0de54d1746d1aa4b83fb7ca81700d8/header.jpg?t=1792307731"
  },
  {
    "id": 406,
    "title": "Junk Survivor",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/junk-survivor",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1861630/header.jpg"
  },
  {
    "id": 407,
    "title": "Goofy Gorillas",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/goofy-gorillas",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2627570/header.jpg"
  },
  {
    "id": 408,
    "title": "Alchemy Factory",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/alchemy-factory",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3669570/da84f32f1e93388acac5b683e52e9ea143f10f38/header.jpg?t=1789021559"
  },
  {
    "id": 409,
    "title": "D&D Lords of Waterdeep",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dd-lords-of-waterdeep",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/644390/header.jpg"
  },
  {
    "id": 410,
    "title": "Spectral Scream",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/spectral-scream",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2620240/header.jpg"
  },
  {
    "id": 411,
    "title": "Mass Effect™ Legendary Edition",
    "category": "EA",
    "url": "https://crackworld.top/fixes/mass-effect-legendary-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1328670/header.jpg"
  },
  {
    "id": 412,
    "title": "Descending The Woods",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/descending-the-woods",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2868070/header.jpg"
  },
  {
    "id": 413,
    "title": "Aliens vs. Predator Classic 2000",
    "category": "All",
    "url": "https://crackworld.top/fixes/aliens-vs-predator-classic-2000",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3730/header.jpg"
  },
  {
    "id": 414,
    "title": "Victoria 3",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/victoria-3",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/529340/header.jpg"
  },
  {
    "id": 415,
    "title": "WRC 6 FIA World Rally Championship",
    "category": "All",
    "url": "https://crackworld.top/fixes/wrc-6-fia-world-rally-championship",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/458770/header.jpg"
  },
  {
    "id": 416,
    "title": "Agent 64 Spies Never Die",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/agent-64-spies-never-die",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1574480/header.jpg"
  },
  {
    "id": 417,
    "title": "Ember Knights",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ember-knights",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1135230/header.jpg"
  },
  {
    "id": 418,
    "title": "Daemon X Machina Titanic Scion",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/daemon-x-machina-titanic-scion",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1342490/2d181de76d76db99bb377ebaf69e3f4915f54fce/header.jpg?t=1779123309"
  },
  {
    "id": 419,
    "title": "Midnight Ghost Hunt",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/midnight-ghost-hunt",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/915810/header.jpg"
  },
  {
    "id": 420,
    "title": "Bodycam",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bodycam",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2406770/header.jpg"
  },
  {
    "id": 421,
    "title": "Abiotic Factor",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/abiotic-factor",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/427410/header.jpg"
  },
  {
    "id": 422,
    "title": "Vampires Bloodlord Rising",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/vampires-bloodlord-rising",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2191500/header.jpg"
  },
  {
    "id": 423,
    "title": "Need for Speed™ Rivals",
    "category": "EA",
    "url": "https://crackworld.top/fixes/need-for-speed-rivals",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1262600/header.jpg"
  },
  {
    "id": 424,
    "title": "Duck Game",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/duck-game",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/312530/header.jpg"
  },
  {
    "id": 425,
    "title": "No Time",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/no-time",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1043340/header.jpg"
  },
  {
    "id": 426,
    "title": "The Scouring",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-scouring",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3338950/header.jpg"
  },
  {
    "id": 427,
    "title": "Call of Duty: Modern Warfare",
    "category": "All",
    "url": "https://crackworld.top/fixes/call-of-duty-modern-warfare",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2000950/header.jpg"
  },
  {
    "id": 428,
    "title": "State of Decay 2 Juggernaut Edition",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/state-of-decay-2-juggernaut-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/495420/header.jpg"
  },
  {
    "id": 429,
    "title": "Mother Machine",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/mother-machine",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1555980/header.jpg"
  },
  {
    "id": 430,
    "title": "Never Grave The Witch and The Curse",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/never-grave-the-witch-and-the-curse",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2395770/header.jpg"
  },
  {
    "id": 431,
    "title": "Football Manager 2009",
    "category": "All",
    "url": "https://crackworld.top/fixes/football-manager-2009",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/10540/header.jpg"
  },
  {
    "id": 432,
    "title": "StarRupture",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/starrupture",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1631270/header.jpg"
  },
  {
    "id": 433,
    "title": "Saints Row: Gat out of Hell",
    "category": "All",
    "url": "https://crackworld.top/fixes/saints-row-gat-out-of-hell",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/301910/header.jpg"
  },
  {
    "id": 434,
    "title": "Assassin's Creed III Remastered",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-iii-remastered",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/911400/header.jpg"
  },
  {
    "id": 435,
    "title": "Nine Ball Roulette",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/nine-ball-roulette",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3376250/header.jpg"
  },
  {
    "id": 436,
    "title": "Moon Sweepers",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/moon-sweepers",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/5335510/41e1e802dfc069cc245b91043e451a2f9ffa80e3/header.jpg?t=1794614292"
  },
  {
    "id": 437,
    "title": "The Crew™ 2",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/the-crew-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/646910/header.jpg"
  },
  {
    "id": 438,
    "title": "Bunker Invaders",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bunker-invaders",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2780470/header.jpg"
  },
  {
    "id": 439,
    "title": "The Ranchers",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-ranchers",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1501310/header.jpg"
  },
  {
    "id": 440,
    "title": "Project Castaway",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/project-castaway",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1713350/header.jpg"
  },
  {
    "id": 441,
    "title": "Starlink: Battle for Atlas",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/starlink-battle-for-atlas",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/950050/header.jpg"
  },
  {
    "id": 442,
    "title": "Dreamkiller",
    "category": "All",
    "url": "https://crackworld.top/fixes/dreamkiller",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/39200/header.jpg"
  },
  {
    "id": 443,
    "title": "Clair Obscur Expedition 33",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/clair-obscur-expedition-33",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1903340/header.jpg"
  },
  {
    "id": 444,
    "title": "Finals Week",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/finals-week",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4715160/48822603a66cebb6299d01b0b4ee551f7cc8763f/header_alt_assets_0.jpg?t=1794601230"
  },
  {
    "id": 445,
    "title": "FREEDOM WARS Remastered",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/freedom-wars-remastered",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3004100/header.jpg"
  },
  {
    "id": 446,
    "title": "Mosa Lina",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/mosa-lina",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2477090/header.jpg"
  },
  {
    "id": 447,
    "title": "Skopje 83",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/skopje-83",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1211980/header.jpg"
  },
  {
    "id": 448,
    "title": "DOOM Eternal",
    "category": "All",
    "url": "https://crackworld.top/fixes/doom-eternal",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/header.jpg"
  },
  {
    "id": 449,
    "title": "BeamNG Drive",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/beamng-drive",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/284160/header.jpg"
  },
  {
    "id": 450,
    "title": "Out of Ore",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/out-of-ore",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2009350/header.jpg"
  },
  {
    "id": 451,
    "title": "The Jump Guys",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-jump-guys",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2757810/header.jpg"
  },
  {
    "id": 452,
    "title": "Kingdom Two Crowns",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/kingdom-two-crowns",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/701160/header.jpg"
  },
  {
    "id": 453,
    "title": "NEBULOUS Fleet Command",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/nebulous-fleet-command",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/887570/header.jpg"
  },
  {
    "id": 454,
    "title": "Persona 3 Reload",
    "category": "All",
    "url": "https://crackworld.top/fixes/persona-3-reload",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2161700/header.jpg"
  },
  {
    "id": 455,
    "title": "Go-Go Town!",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/go-go-town",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2195120/header.jpg"
  },
  {
    "id": 456,
    "title": "Species Unknown",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/species-unknown",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2747330/header.jpg"
  },
  {
    "id": 457,
    "title": "Resident Evil 6",
    "category": "Capcom",
    "url": "https://crackworld.top/fixes/resident-evil-6",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/221040/header.jpg"
  },
  {
    "id": 458,
    "title": "Killing Floor 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/killing-floor-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/232090/header.jpg"
  },
  {
    "id": 459,
    "title": "The Last Plague Blight",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-last-plague-blight",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1564600/header.jpg"
  },
  {
    "id": 460,
    "title": "FIFA Manager 09",
    "category": "EA",
    "url": "https://crackworld.top/fixes/fifa-manager-09",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/50/FIFA_Manager_series_logo.png"
  },
  {
    "id": 461,
    "title": "Last Pirates Die Together",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/last-pirates-die-together",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4317790/84a2c8b2b448d3157c6c44198a38021c36e2f387/header_alt_assets_4.jpg?t=1794330576"
  },
  {
    "id": 462,
    "title": "Heroes of Hammerwatch II",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/heroes-of-hammerwatch-ii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/619820/header.jpg"
  },
  {
    "id": 463,
    "title": "Happy's Humble Burger Cult",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/happys-humble-burger-cult",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3453910/5ec110db282f6e701d38ee476ceed1c7ffbf26b3/header.jpg?t=1793358449"
  },
  {
    "id": 464,
    "title": "F1 2011",
    "category": "All",
    "url": "https://crackworld.top/fixes/f1-2011",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/44360/header.jpg"
  },
  {
    "id": 465,
    "title": "Bloons TD 6",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bloons-td-6",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/960090/header.jpg"
  },
  {
    "id": 466,
    "title": "Satisfactory",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/satisfactory",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/526870/header.jpg"
  },
  {
    "id": 467,
    "title": "iDigging",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/idigging",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3447690/header.jpg"
  },
  {
    "id": 468,
    "title": "GTFO",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/gtfo",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/493520/header.jpg"
  },
  {
    "id": 469,
    "title": "The Adventures of Elliot: The Millennium Tales",
    "category": "All",
    "url": "https://crackworld.top/fixes/the-adventures-of-elliot-the-millennium-tales",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3483510/3c96b19255b69aa9b2e131dda3e19d622b0d6562/header.jpg?t=1789463096"
  },
  {
    "id": 470,
    "title": "Vampire Survivors",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/vampire-survivors",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1794680/header.jpg"
  },
  {
    "id": 471,
    "title": "Perennial Order",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/perennial-order",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1411020/header.jpg"
  },
  {
    "id": 472,
    "title": "Len's Island",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/lens-island",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1335830/header.jpg"
  },
  {
    "id": 473,
    "title": "Dungeon Siege III",
    "category": "EA",
    "url": "https://crackworld.top/fixes/dungeon-siege-iii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/39230/header.jpg"
  },
  {
    "id": 474,
    "title": "Solasta II",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/solasta-ii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2975950/header.jpg"
  },
  {
    "id": 475,
    "title": "KLETKA",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/kletka",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1699480/header.jpg"
  },
  {
    "id": 476,
    "title": "Hell Let Loose Vietnam",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/hell-let-loose-vietnam",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3079210/2e52f99e70e827b57a2205469dc5d529e8e0490a/header.jpg?t=1794399493"
  },
  {
    "id": 477,
    "title": "CURE - A Hospital Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/cure-a-hospital-simulator",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2786550/640bec2b64914df0b68d250c5bcbf3d7414c318e/header.jpg?t=1794422201"
  },
  {
    "id": 478,
    "title": "Dragon Age™ Inquisition",
    "category": "EA",
    "url": "https://crackworld.top/fixes/dragon-age-inquisition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1222690/header.jpg"
  },
  {
    "id": 479,
    "title": "Assassin's Creed Brotherhood",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-brotherhood",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/48190/header.jpg"
  },
  {
    "id": 480,
    "title": "STAR WARS: Squadrons",
    "category": "EA",
    "url": "https://crackworld.top/fixes/star-wars-squadrons",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1222730/header.jpg"
  },
  {
    "id": 481,
    "title": "CAST",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/cast",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3118450/header.jpg"
  },
  {
    "id": 482,
    "title": "Fae Farm",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/fae-farm",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2230110/header.jpg"
  },
  {
    "id": 483,
    "title": "Remnant II",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/remnant-ii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1282100/header.jpg"
  },
  {
    "id": 484,
    "title": "PEAK",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/peak",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3527290/31bac6b2eccf09b368f5e95ce510bae2baf3cfcd/header.jpg?t=1792684718"
  },
  {
    "id": 485,
    "title": "Murky Divers",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/murky-divers",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2963880/header.jpg"
  },
  {
    "id": 486,
    "title": "ONE PUNCH MAN: A HERO NOBODY KNOWS",
    "category": "All",
    "url": "https://crackworld.top/fixes/one-punch-man-a-hero-nobody-knows",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/991560/header.jpg"
  },
  {
    "id": 487,
    "title": "Monster Hunter Stories 2: Wings of Ruin",
    "category": "Capcom",
    "url": "https://crackworld.top/fixes/monster-hunter-stories-2-wings-of-ruin",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1277400/header.jpg"
  },
  {
    "id": 488,
    "title": "Zero Caliber 2 Remastered",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/zero-caliber-2-remastered",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2719740/header.jpg"
  },
  {
    "id": 489,
    "title": "Railroader",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/railroader",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1683150/header.jpg"
  },
  {
    "id": 490,
    "title": "BlazBlue Centralfiction",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/blazblue-centralfiction",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/586140/header.jpg"
  },
  {
    "id": 491,
    "title": "MY HERO ACADEMIA: All’s Justice",
    "category": "All",
    "url": "https://crackworld.top/fixes/my-hero-academia-alls-justice",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2362050/e63898c933214573be0648eb652d327f893a0bdb/header.jpg?t=1788386451"
  },
  {
    "id": 492,
    "title": "MY HERO ONES JUSTICE 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/my-hero-ones-justice-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1058450/header.jpg"
  },
  {
    "id": 493,
    "title": "Warhammer 40,000 Rogue Trader",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/warhammer-40-000-rogue-trader",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2186680/header.jpg"
  },
  {
    "id": 494,
    "title": "Warden's Will",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/wardens-will",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1689640/header.jpg"
  },
  {
    "id": 495,
    "title": "Prince of Persia The Lost Crown",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/prince-of-persia-the-lost-crown",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2751000/header.jpg"
  },
  {
    "id": 496,
    "title": "Biped 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/biped-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2560240/header.jpg"
  },
  {
    "id": 497,
    "title": "TerraScape",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/terrascape",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2290000/header.jpg"
  },
  {
    "id": 498,
    "title": "Dying Light 2 Stay Human: Reloaded Edition",
    "category": "All",
    "url": "https://crackworld.top/fixes/dying-light-2-stay-human-reloaded-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/534380/header.jpg"
  },
  {
    "id": 499,
    "title": "Backroom Company",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/backroom-company",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3010460/header.jpg"
  },
  {
    "id": 500,
    "title": "Virtua Fighter 5 R.E.V.O",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/virtua-fighter-5-revo",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3112260/header.jpg"
  },
  {
    "id": 501,
    "title": "Cozy Island",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/cozy-island",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2918500/header.jpg"
  },
  {
    "id": 502,
    "title": "Clone Drone in the Danger Zone",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/clone-drone-in-the-danger-zone",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/597170/header.jpg"
  },
  {
    "id": 503,
    "title": "Oddsparks An Automation Adventure",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/oddsparks-an-automation-adventure",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1817800/header.jpg"
  },
  {
    "id": 504,
    "title": "VHOLUME",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/vholume",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4131730/1b262360aa9cfa7ce376b2677b3c641556a7254f/header.jpg?t=1787478152"
  },
  {
    "id": 505,
    "title": "Nioh 3",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/nioh-3",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3681010/a21264e9fd476dcb2901c2432b598107d024c5a8/header.jpg?t=1772090941"
  },
  {
    "id": 506,
    "title": "Aliens vs. Predator",
    "category": "All",
    "url": "https://crackworld.top/fixes/aliens-vs-predator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/10680/header.jpg"
  },
  {
    "id": 507,
    "title": "ROUNDS",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/rounds",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1557740/header.jpg"
  },
  {
    "id": 508,
    "title": "Storage Hunter Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/storage-hunter-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1442430/header.jpg"
  },
  {
    "id": 509,
    "title": "Trinity Survivors",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/trinity-survivors",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2686580/header.jpg"
  },
  {
    "id": 510,
    "title": "F.E.A.R. 3",
    "category": "All",
    "url": "https://crackworld.top/fixes/fear-3",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/21100/header.jpg"
  },
  {
    "id": 511,
    "title": "A Few Quick Matches",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/a-few-quick-matches",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3805420/e9539da940a8ded032a35d95950d2f82c547a806/header.jpg?t=1758311175"
  },
  {
    "id": 512,
    "title": "Star Trek",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/star-trek",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/9900/header.jpg"
  },
  {
    "id": 513,
    "title": "Secret Neighbor",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/secret-neighbor",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/859570/header.jpg"
  },
  {
    "id": 514,
    "title": "Desecrators",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/desecrators",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1311570/header.jpg"
  },
  {
    "id": 515,
    "title": "Borderlands 4",
    "category": "All",
    "url": "https://crackworld.top/fixes/borderlands-4",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1285190/header.jpg"
  },
  {
    "id": 516,
    "title": "Wartales",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/wartales",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1527950/header.jpg"
  },
  {
    "id": 517,
    "title": "Ultimate Sheep Raccoon",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ultimate-sheep-raccoon",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2923350/header.jpg"
  },
  {
    "id": 518,
    "title": "Phantom Squad",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/phantom-squad",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2841770/header.jpg"
  },
  {
    "id": 519,
    "title": "ContractVille",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/contractville",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2698780/header.jpg"
  },
  {
    "id": 520,
    "title": "Blood Typers",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/blood-typers",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2790330/header.jpg"
  },
  {
    "id": 521,
    "title": "DRAGON BALL Sparking! ZERO",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dragon-ball-sparking-zero",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1790600/header.jpg"
  },
  {
    "id": 522,
    "title": "Cooking Simulator 2 Better Together",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/cooking-simulator-2-better-together",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2455360/header.jpg"
  },
  {
    "id": 523,
    "title": "Grain Rot",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/grain-rot",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4450620/697974067797577ee1803c37a44b4217d886502a/header.jpg?t=1793646224"
  },
  {
    "id": 524,
    "title": "Boat Together",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/boat-together",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3543890/58ee57a7dfd6514fc548ecfb9511640f966e2069/header.jpg?t=1792069008"
  },
  {
    "id": 525,
    "title": "Deathground",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/deathground",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1200770/header.jpg"
  },
  {
    "id": 526,
    "title": "Generation Zero",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/generation-zero",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/704270/header.jpg"
  },
  {
    "id": 527,
    "title": "Le Mans Ultimate",
    "category": "All",
    "url": "https://crackworld.top/fixes/le-mans-ultimate",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2399420/header.jpg"
  },
  {
    "id": 528,
    "title": "Factorio",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/factorio",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/427520/header.jpg"
  },
  {
    "id": 529,
    "title": "Cafemart Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/cafemart-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3408110/header.jpg"
  },
  {
    "id": 530,
    "title": "Voodoo fishin",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/voodoo-fishin",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3071240/a09810eafb3218a829424143332e4e9e867c60ea/header.jpg?t=1791917639"
  },
  {
    "id": 531,
    "title": "The Karters 2 Turbo Charged",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-karters-2-turbo-charged",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2269950/header.jpg"
  },
  {
    "id": 532,
    "title": "DOKAPON! Sword of Fury",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dokapon-sword-of-fury",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3077020/header.jpg"
  },
  {
    "id": 533,
    "title": "Viractal Will You Trust Your Party",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/viractal-will-you-trust-your-party",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2909580/0d289fd014c29ca7f80aeeca4fbed9f5dd0a0350/header.jpg?t=1791452151"
  },
  {
    "id": 534,
    "title": "For The King II",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/for-the-king-ii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1676840/header.jpg"
  },
  {
    "id": 535,
    "title": "Dub Together",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dub-together",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/5020310/5120fdb5c1622bf7317187323aac962b3034fb93/header.jpg?t=1794172244"
  },
  {
    "id": 536,
    "title": "Ara History Untold",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ara-history-untold",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3495280/1432cd5a1692bdcd660a00d4dd20aca4e5c75357/header.jpg?t=1776349337"
  },
  {
    "id": 537,
    "title": "Shining Resonance Refrain",
    "category": "All",
    "url": "https://crackworld.top/fixes/shining-resonance-refrain",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/809890/header.jpg"
  },
  {
    "id": 538,
    "title": "Ultimate Zombie Defense 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ultimate-zombie-defense-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1765300/header.jpg"
  },
  {
    "id": 539,
    "title": "Car For Sale Simulator 2023",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/car-for-sale-simulator-2023",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2285360/header.jpg"
  },
  {
    "id": 540,
    "title": "Ore Factory Squad",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ore-factory-squad",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4210580/b305646840dc9db685bc40596da7bdaea388c694/header.jpg?t=1794496199"
  },
  {
    "id": 541,
    "title": "Inkwellers",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/inkwellers",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3061390/header.jpg"
  },
  {
    "id": 542,
    "title": "Dead Space™ 2",
    "category": "All",
    "url": "https://crackworld.top/fixes/dead-space-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/47780/header.jpg"
  },
  {
    "id": 543,
    "title": "Tropico 6",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/tropico-6",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/492720/header.jpg"
  },
  {
    "id": 544,
    "title": "Pizza Slice",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/pizza-slice",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1385290/header.jpg"
  },
  {
    "id": 545,
    "title": "Drakensang - Phileasson's Secret",
    "category": "All",
    "url": "https://crackworld.top/fixes/drakensang-phileassons-secret",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/33780/header.jpg"
  },
  {
    "id": 546,
    "title": "Plains Of Pain",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/plains-of-pain",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2218970/header.jpg"
  },
  {
    "id": 547,
    "title": "Mass Effect™ 3 N7 Digital Deluxe Edition (2012)",
    "category": "EA",
    "url": "https://crackworld.top/fixes/mass-effect-3-n7-digital-deluxe-edition-2012",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1238020/header.jpg"
  },
  {
    "id": 548,
    "title": "Escape the Backrooms",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/escape-the-backrooms",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1943950/header.jpg"
  },
  {
    "id": 549,
    "title": "NO BACKUP",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/no-backup",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3894440/6de96d936887a99c647dc5fbfc5a66852dc9c86f/header.jpg?t=1789687605"
  },
  {
    "id": 550,
    "title": "Ghost Exorcism INC",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ghost-exorcism-inc",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1618540/header.jpg"
  },
  {
    "id": 551,
    "title": "Assassin's Creed Valhalla",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-valhalla",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg"
  },
  {
    "id": 552,
    "title": "Shoulders of Giants Ultimate",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/shoulders-of-giants-ultimate",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2283880/header.jpg"
  },
  {
    "id": 553,
    "title": "East India Company",
    "category": "All",
    "url": "https://crackworld.top/fixes/east-india-company",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/25930/header.jpg"
  },
  {
    "id": 554,
    "title": "Tom Clancy’s Splinter Cell Blacklist",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/tom-clancys-splinter-cell-blacklist",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/235600/header.jpg"
  },
  {
    "id": 555,
    "title": "Machine Party",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/machine-party",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4108000/00ae7d0e0fd0ad72635bddb1dd80ee68cc94eed5/header.jpg?t=1793352925"
  },
  {
    "id": 556,
    "title": "Cargo! - The quest for gravity",
    "category": "All",
    "url": "https://crackworld.top/fixes/cargo-the-quest-for-gravity",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/41740/header.jpg"
  },
  {
    "id": 557,
    "title": "Commandos Origins",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/commandos-origins",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1479730/header.jpg"
  },
  {
    "id": 558,
    "title": "Slip & Skid",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/slip-skid",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2651350/header.jpg"
  },
  {
    "id": 559,
    "title": "UNDERWARD",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/underward",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3025290/header.jpg"
  },
  {
    "id": 560,
    "title": "Echoes of Elysium",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/echoes-of-elysium",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2644050/header.jpg"
  },
  {
    "id": 561,
    "title": "The Other Side",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-other-side",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2764750/header.jpg"
  },
  {
    "id": 562,
    "title": "It Takes Two",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/it-takes-two",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/header.jpg"
  },
  {
    "id": 563,
    "title": "Friday the 13th The Game",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/friday-the-13th-the-game",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/438740/header.jpg"
  },
  {
    "id": 564,
    "title": "Starsand Island",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/starsand-island",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2966320/header.jpg"
  },
  {
    "id": 565,
    "title": "Guilty as Sock!",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/guilty-as-sock",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3400930/header.jpg"
  },
  {
    "id": 566,
    "title": "Noita",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/noita",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/881100/header.jpg"
  },
  {
    "id": 567,
    "title": "Mamas Sleeping Angels",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/mamas-sleeping-angels",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2918310/header.jpg"
  },
  {
    "id": 568,
    "title": "Dawson Oaks Trailer Park",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dawson-oaks-trailer-park",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3640200/cfc3aa438d35284aea9e5081add3d968061e9653/header.jpg?t=1789830536"
  },
  {
    "id": 569,
    "title": "Nuclear Nightmare",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/nuclear-nightmare",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2909110/header.jpg"
  },
  {
    "id": 570,
    "title": "Mall Together",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/mall-together",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4668890/348b9eb36ec3023a50088501f495ac1b4477da67/header.jpg?t=1792986115"
  },
  {
    "id": 571,
    "title": "Resident Evil Requiem",
    "category": "Capcom",
    "url": "https://crackworld.top/fixes/resident-evil-requiem",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3764200/ce5437442768e38eb575f205ab9397d0264017b0/header.jpg?t=1779840172"
  },
  {
    "id": 572,
    "title": "Ship Graveyard Simulator 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ship-graveyard-simulator-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2201940/header.jpg"
  },
  {
    "id": 573,
    "title": "Dwarfs!?",
    "category": "All",
    "url": "https://crackworld.top/fixes/dwarfs",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/35480/header.jpg"
  },
  {
    "id": 574,
    "title": "theHunter Call of the Wild",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/thehunter-call-of-the-wild",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/518790/header.jpg"
  },
  {
    "id": 575,
    "title": "LEFT ALIVE™",
    "category": "All",
    "url": "https://crackworld.top/fixes/left-alive",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/714370/header.jpg"
  },
  {
    "id": 576,
    "title": "Rayman Legends",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/rayman-legends",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/242550/header.jpg"
  },
  {
    "id": 577,
    "title": "Human Fall Flat",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/human-fall-flat",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/477160/header.jpg"
  },
  {
    "id": 578,
    "title": "RV There Yet",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/rv-there-yet",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3949040/cae24b4ed7f4531be51f0d63f785b7d253f92dc3/header.jpg?t=1789134289"
  },
  {
    "id": 579,
    "title": "Into the Radius 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/into-the-radius-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2307350/header.jpg"
  },
  {
    "id": 580,
    "title": "Red Dead Redemption",
    "category": "Rockstar",
    "url": "https://crackworld.top/fixes/red-dead-redemption",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2668510/header.jpg"
  },
  {
    "id": 581,
    "title": "NBA 2K14",
    "category": "All",
    "url": "https://crackworld.top/fixes/nba-2k14",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/255480/header.jpg"
  },
  {
    "id": 582,
    "title": "EA SPORTS Madden NFL 27",
    "category": "EA",
    "url": "https://crackworld.top/fixes/ea-sports-madden-nfl-27",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3940610/7ed2213f0170c1b55410b82ed89a8bab3911c6ea/header.jpg?t=1792087154"
  },
  {
    "id": 583,
    "title": "Stuck Together",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/stuck-together",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3295360/8cfb2382805e292efa2b52a0e69eb4f5fdb2bec1/header.jpg?t=1776164947"
  },
  {
    "id": 584,
    "title": "LOCKDOWN Protocol",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/lockdown-protocol",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2780980/header.jpg"
  },
  {
    "id": 585,
    "title": "Project Zomboid",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/project-zomboid",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/108600/header.jpg"
  },
  {
    "id": 586,
    "title": "Medieval Dynasty",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/medieval-dynasty",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1129580/header.jpg"
  },
  {
    "id": 587,
    "title": "Temtem Swarm",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/temtem-swarm",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2510960/header.jpg"
  },
  {
    "id": 588,
    "title": "Serpent's Gaze",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/serpents-gaze",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3069050/57fe4581ccce5233e2f8cef495bbf2d686287bc0/header.jpg?t=1782383891"
  },
  {
    "id": 589,
    "title": "Capcom Fighting Collection 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/capcom-fighting-collection-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2400430/header.jpg"
  },
  {
    "id": 590,
    "title": "Deep Rock Galactic",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/deep-rock-galactic",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/548430/header.jpg"
  },
  {
    "id": 591,
    "title": "Grand Theft Auto: Vice City – The Definitive Edition",
    "category": "Rockstar",
    "url": "https://crackworld.top/fixes/grand-theft-auto-vice-city-the-definitive-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1546990/header.jpg"
  },
  {
    "id": 592,
    "title": "Microsoft Flight Simulator (2020) 40th Anniversary Edition",
    "category": "All",
    "url": "https://crackworld.top/fixes/microsoft-flight-simulator-2020-40th-anniversary-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/header.jpg"
  },
  {
    "id": 593,
    "title": "Wanba Warriors",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/wanba-warriors",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1021770/header.jpg"
  },
  {
    "id": 594,
    "title": "Bang Bang Barrage",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bang-bang-barrage",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3003460/header.jpg"
  },
  {
    "id": 595,
    "title": "Storebound",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/storebound",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3417410/header.jpg"
  },
  {
    "id": 596,
    "title": "Ale & Tale Tavern",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ale-tale-tavern",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2683150/header.jpg"
  },
  {
    "id": 597,
    "title": "Exit Together",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/exit-together",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3333740/header.jpg"
  },
  {
    "id": 598,
    "title": "Zombieville USA 3D",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/zombieville-usa-3d",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1801520/header.jpg"
  },
  {
    "id": 599,
    "title": "Brave Escape",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/brave-escape",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1354260/header.jpg"
  },
  {
    "id": 600,
    "title": "American Truck Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/american-truck-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/270880/header.jpg"
  },
  {
    "id": 601,
    "title": "Towers of Aghasba",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/towers-of-aghasba",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2178070/header.jpg"
  },
  {
    "id": 602,
    "title": "Just Another Night Shift",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/just-another-night-shift",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2331130/header.jpg"
  },
  {
    "id": 603,
    "title": "Eleven Table Tennis VR",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/eleven-table-tennis-vr",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/488310/header.jpg"
  },
  {
    "id": 604,
    "title": "The Riftbreaker",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-riftbreaker",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/780310/header.jpg"
  },
  {
    "id": 605,
    "title": "Raft",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/raft",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/648800/header.jpg"
  },
  {
    "id": 606,
    "title": "Black Myth: Wukong",
    "category": "All",
    "url": "https://crackworld.top/fixes/black-myth-wukong",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg"
  },
  {
    "id": 607,
    "title": "Lonely Mountains Snow Riders",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/lonely-mountains-snow-riders",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2545360/header.jpg"
  },
  {
    "id": 608,
    "title": "Go Ape Ship!",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/go-ape-ship",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4037180/d34c1e1c68b4cb5674ffde42c962960fdedf452e/header.jpg?t=1782508562"
  },
  {
    "id": 609,
    "title": "Five Nights No Escape",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/five-nights-no-escape",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2374030/header.jpg"
  },
  {
    "id": 610,
    "title": "Ships At Sea",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ships-at-sea",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1266540/header.jpg"
  },
  {
    "id": 611,
    "title": "Rogue Masters",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/rogue-masters",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1063590/header.jpg"
  },
  {
    "id": 612,
    "title": "CashGrab Refunded",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/cashgrab-refunded",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3602720/a8f24409032db54e302f6d24ab88d22335f4bfed/header.jpg?t=1762294159"
  },
  {
    "id": 613,
    "title": "Escape from Kyoto House",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/escape-from-kyoto-house",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1316700/header.jpg"
  },
  {
    "id": 614,
    "title": "Monster Hunter World",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/monster-hunter-world",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/582010/header.jpg"
  },
  {
    "id": 615,
    "title": "RuneScape Dragonwilds",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/runescape-dragonwilds",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1374490/3e27915a647dbf05e17f2ff98d33c9a0765da539/header.jpg?t=1794565381"
  },
  {
    "id": 616,
    "title": "Back 4 Blood",
    "category": "All",
    "url": "https://crackworld.top/fixes/back-4-blood",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/924970/header.jpg"
  },
  {
    "id": 617,
    "title": "Time to Morp",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/time-to-morp",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/977510/header.jpg"
  },
  {
    "id": 618,
    "title": "Magic The Gathering - Duels of the Planeswalkers",
    "category": "All",
    "url": "https://crackworld.top/fixes/magic-the-gathering-duels-of-the-planeswalkers",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2141910/header.jpg"
  },
  {
    "id": 619,
    "title": "Incursion Red River",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/incursion-red-river",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2116120/header.jpg"
  },
  {
    "id": 620,
    "title": "Sketchys Contract",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/sketchys-contract",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2823080/header.jpg"
  },
  {
    "id": 621,
    "title": "Observe and Report",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/observe-and-report",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2818510/header.jpg"
  },
  {
    "id": 622,
    "title": "DOOM: The Dark Ages",
    "category": "All",
    "url": "https://crackworld.top/fixes/doom-the-dark-ages",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3017860/header.jpg"
  },
  {
    "id": 623,
    "title": "Real VR Fishing",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/real-vr-fishing",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1266470/header.jpg"
  },
  {
    "id": 624,
    "title": "Command & Conquer 4 Tiberian Twilight",
    "category": "EA",
    "url": "https://crackworld.top/fixes/command-conquer-4-tiberian-twilight",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/47700/header.jpg"
  },
  {
    "id": 625,
    "title": "FBC Firebreak",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/fbc-firebreak",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2272540/header.jpg"
  },
  {
    "id": 626,
    "title": "Millennia",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/millennia",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1268590/header.jpg"
  },
  {
    "id": 627,
    "title": "My Village Life",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/my-village-life",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1385780/header.jpg"
  },
  {
    "id": 628,
    "title": "Duke Nukem Forever",
    "category": "All",
    "url": "https://crackworld.top/fixes/duke-nukem-forever",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/57900/header.jpg"
  },
  {
    "id": 629,
    "title": "LIZARDS MUST DIE 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/lizards-must-die-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3107800/header.jpg"
  },
  {
    "id": 630,
    "title": "Teamfight Manager 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/teamfight-manager-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3009300/header.jpg"
  },
  {
    "id": 631,
    "title": "Fish Hunters Most Lethal Fishing Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/fish-hunters-most-lethal-fishing-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3468330/header.jpg"
  },
  {
    "id": 632,
    "title": "Prehistoric Hunt",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/prehistoric-hunt",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/752900/header.jpg"
  },
  {
    "id": 633,
    "title": "Rosalie",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/rosalie",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4268470/05816436f069511cf57ad5e156923a298ca0226d/header.jpg?t=1791043014"
  },
  {
    "id": 634,
    "title": "Survival Machine",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/survival-machine",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1601330/header.jpg"
  },
  {
    "id": 635,
    "title": "Command & Conquer Tiberian Sun",
    "category": "EA",
    "url": "https://crackworld.top/fixes/command-conquer-tiberian-sun",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2229880/header.jpg"
  },
  {
    "id": 636,
    "title": "Headquarters World War II",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/headquarters-world-war-ii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1840800/header.jpg"
  },
  {
    "id": 637,
    "title": "Core Keeper",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/core-keeper",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1621690/header.jpg"
  },
  {
    "id": 638,
    "title": "FOUNDRY",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/foundry",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/983870/header.jpg"
  },
  {
    "id": 639,
    "title": "Solarpunk",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/solarpunk",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1805110/header.jpg"
  },
  {
    "id": 640,
    "title": "UNO",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/uno",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/470220/header.jpg"
  },
  {
    "id": 641,
    "title": "WILD HEARTS™",
    "category": "EA",
    "url": "https://crackworld.top/fixes/wild-hearts",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1938010/header.jpg"
  },
  {
    "id": 642,
    "title": "LORT",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/lort",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2956680/eb1b4ebc18b6207aebc0c2bba9196e96b7680915/header_alt_assets_5.jpg?t=1794515615"
  },
  {
    "id": 643,
    "title": "ENDLESS Dungeon",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/endless-dungeon",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1485590/header.jpg"
  },
  {
    "id": 644,
    "title": "Medal of Honor™",
    "category": "All",
    "url": "https://crackworld.top/fixes/medal-of-honor",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/47790/header.jpg"
  },
  {
    "id": 645,
    "title": "Broventure The Wild Co-op",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/broventure-the-wild-co-op",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2939640/header.jpg"
  },
  {
    "id": 646,
    "title": "Grand Theft Auto: San Andreas – The Definitive Edition",
    "category": "Rockstar",
    "url": "https://crackworld.top/fixes/grand-theft-auto-san-andreas-the-definitive-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1547000/header.jpg"
  },
  {
    "id": 647,
    "title": "Ragnarock",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ragnarock",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1345820/header.jpg"
  },
  {
    "id": 648,
    "title": "Megabonk",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/megabonk",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3405340/header.jpg"
  },
  {
    "id": 649,
    "title": "Suicide Squad: Kill the Justice League",
    "category": "All",
    "url": "https://crackworld.top/fixes/suicide-squad-kill-the-justice-league",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/315210/header.jpg"
  },
  {
    "id": 650,
    "title": "Assassin's Creed Rogue",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-rogue",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/311560/header.jpg"
  },
  {
    "id": 651,
    "title": "The Horde Wants You Dead",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-horde-wants-you-dead",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3552820/f679ba0e8040cef057725458b27bbc40ca0212b6/header.jpg?t=1765737164"
  },
  {
    "id": 652,
    "title": "Tom Clancy's Ghost Recon Wildlands",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/tom-clancys-ghost-recon-wildlands",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/460930/header.jpg"
  },
  {
    "id": 653,
    "title": "FINAL FANTASY VIII",
    "category": "All",
    "url": "https://crackworld.top/fixes/final-fantasy-viii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/39150/header.jpg"
  },
  {
    "id": 654,
    "title": "Entropy Survivors",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/entropy-survivors",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2602030/header.jpg"
  },
  {
    "id": 655,
    "title": "STAR WARS™ Battlefront",
    "category": "EA",
    "url": "https://crackworld.top/fixes/star-wars-battlefront",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1237980/header.jpg"
  },
  {
    "id": 656,
    "title": "Soul Chained",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/soul-chained",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3544130/c3b1f93dbe24f30c7ffc596cea30b922f02edeab/header.jpg?t=1789489864"
  },
  {
    "id": 657,
    "title": "FANTASY LIFE i The Girl Who Steals Time",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/fantasy-life-i-the-girl-who-steals-time",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2993780/header.jpg"
  },
  {
    "id": 658,
    "title": "Worlds of Aria",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/worlds-of-aria",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1866980/header.jpg"
  },
  {
    "id": 659,
    "title": "Streets of Rogue",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/streets-of-rogue",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/512900/header.jpg"
  },
  {
    "id": 660,
    "title": "Front Mission Evolved",
    "category": "All",
    "url": "https://crackworld.top/fixes/front-mission-evolved",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/43000/header.jpg"
  },
  {
    "id": 661,
    "title": "Football Manager 2008",
    "category": "All",
    "url": "https://crackworld.top/fixes/football-manager-2008",
    "image": "https://upload.wikimedia.org/wikipedia/en/7/76/Football_Manager_2008.jpg"
  },
  {
    "id": 662,
    "title": "R.E.P.O.",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/repo",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3241660/header.jpg"
  },
  {
    "id": 663,
    "title": "Witchspire",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/witchspire",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2679100/fb7f504258d3ace8267a937de3fb9be130c246d8/header.jpg?t=1792753701"
  },
  {
    "id": 664,
    "title": "DreadHaunt",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dreadhaunt",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1855580/header.jpg"
  },
  {
    "id": 665,
    "title": "Dumb Ways to Build",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dumb-ways-to-build",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4412320/7182e312b98a494c3e498667b132693e9e4f6a0f/header.jpg?t=1793146466"
  },
  {
    "id": 666,
    "title": "CONTROL Resonant",
    "category": "All",
    "url": "https://crackworld.top/fixes/control-resonant",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3669870/1e0c76e4253d347bb1304c3f213570251d924edf/header.jpg?t=1794586294"
  },
  {
    "id": 667,
    "title": "STAR WARS Jedi: Survivor™",
    "category": "EA",
    "url": "https://crackworld.top/fixes/star-wars-jedi-survivor",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/header.jpg"
  },
  {
    "id": 668,
    "title": "Needle In A Haystack",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/needle-in-a-haystack",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/5085740/c4f0eebd5422df95a4dc9984eaa4304c0f1990c0/header.jpg?t=1794610008"
  },
  {
    "id": 669,
    "title": "Call of Duty: Modern Warfare 2 (2009)",
    "category": "All",
    "url": "https://crackworld.top/fixes/call-of-duty-modern-warfare-2-2009",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/10180/header.jpg"
  },
  {
    "id": 670,
    "title": "Onimusha: Way of the Sword",
    "category": "Capcom",
    "url": "https://crackworld.top/fixes/onimusha-way-of-the-sword",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2638890/header.jpg"
  },
  {
    "id": 671,
    "title": "Hobo Tough Life",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/hobo-tough-life",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/632300/header.jpg"
  },
  {
    "id": 672,
    "title": "STAR WARS Jedi: Fallen Order™",
    "category": "EA",
    "url": "https://crackworld.top/fixes/star-wars-jedi-fallen-order",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1172380/header.jpg"
  },
  {
    "id": 673,
    "title": "An Eggstremely Hard Game",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/an-eggstremely-hard-game",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4112070/af1b508f0fea8862f209b5636d34902b049e6252/header.jpg?t=1793818836"
  },
  {
    "id": 674,
    "title": "Demonologist",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/demonologist",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1929610/header.jpg"
  },
  {
    "id": 675,
    "title": "Guardians of the Sanctree",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/guardians-of-the-sanctree",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2512930/header.jpg"
  },
  {
    "id": 676,
    "title": "Mimic Party",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/mimic-party",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/5053820/cb42d784567e89c1c409e49856ece32c9cf8ab36/header.jpg?t=1789831835"
  },
  {
    "id": 677,
    "title": "The Lord of the Rings Return to Moria",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-lord-of-the-rings-return-to-moria",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2933130/header.jpg"
  },
  {
    "id": 678,
    "title": "PAYDAY The Heist",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/payday-the-heist",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/24240/header.jpg"
  },
  {
    "id": 679,
    "title": "Sword Art Online: Fatal Bullet",
    "category": "All",
    "url": "https://crackworld.top/fixes/sword-art-online-fatal-bullet",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/626690/header.jpg"
  },
  {
    "id": 680,
    "title": "Project Breakout",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/project-breakout",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2665100/header.jpg"
  },
  {
    "id": 681,
    "title": "Automobilista 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/automobilista-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1066890/header.jpg"
  },
  {
    "id": 682,
    "title": "Voidtrain",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/voidtrain",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1159690/header.jpg"
  },
  {
    "id": 683,
    "title": "Anomaly Company",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/anomaly-company",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3099190/header.jpg"
  },
  {
    "id": 684,
    "title": "Prison Boss Prohibition",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/prison-boss-prohibition",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3751870/1f836d173ff63560c5baa56ab1dba1eff029f89b/header.jpg?t=1752157139"
  },
  {
    "id": 685,
    "title": "Eggstraction",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/eggstraction",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2355860/header.jpg"
  },
  {
    "id": 686,
    "title": "DEADBOLT",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/deadbolt",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/394970/header.jpg"
  },
  {
    "id": 687,
    "title": "AFTERBLAST",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/afterblast",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1338490/header.jpg"
  },
  {
    "id": 688,
    "title": "Far Cry 6",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/far-cry-6",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2369390/header.jpg"
  },
  {
    "id": 689,
    "title": "Just Cause 4 Reloaded",
    "category": "All",
    "url": "https://crackworld.top/fixes/just-cause-4-reloaded",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/517630/header.jpg"
  },
  {
    "id": 690,
    "title": "Grand Theft Auto III – The Definitive Edition",
    "category": "Rockstar",
    "url": "https://crackworld.top/fixes/grand-theft-auto-iii-the-definitive-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1546970/header.jpg"
  },
  {
    "id": 691,
    "title": "Ghost of Tsushima DIRECTORS CUT",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ghost-of-tsushima-directors-cut",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/header.jpg"
  },
  {
    "id": 692,
    "title": "INAZUMA ELEVEN Victory Road",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/inazuma-eleven-victory-road",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2799860/header.jpg"
  },
  {
    "id": 693,
    "title": "Voyagers of Nera",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/voyagers-of-nera",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2686630/header.jpg"
  },
  {
    "id": 694,
    "title": "Assassin's Creed Syndicate",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-syndicate",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/368500/header.jpg"
  },
  {
    "id": 695,
    "title": "Call of Duty: Modern Warfare III",
    "category": "All",
    "url": "https://crackworld.top/fixes/call-of-duty-modern-warfare-iii",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3595270/7d0f21912a075c33bbb5ea558100e187ceb234ac/header.jpg?t=1778886604"
  },
  {
    "id": 696,
    "title": "33 Immortals",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/33-immortals",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/958520/e39894b763c81766e78374545e78dcff03bcdd4e/header.jpg?t=1784724654"
  },
  {
    "id": 697,
    "title": "First Dwarf",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/first-dwarf",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1714900/header.jpg"
  },
  {
    "id": 698,
    "title": "Resident Evil 0",
    "category": "Capcom",
    "url": "https://crackworld.top/fixes/resident-evil-0",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/339340/header.jpg"
  },
  {
    "id": 699,
    "title": "Chernobyl: Terrorist Attack",
    "category": "All",
    "url": "https://crackworld.top/fixes/chernobyl-terrorist-attack",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2702630/371c0491dfe69b0900bc7a72d05be2ea1f4ef078/header.jpg?t=1784829997"
  },
  {
    "id": 700,
    "title": "Vellum",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/vellum",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/917950/header.jpg"
  },
  {
    "id": 701,
    "title": "Cricket 19",
    "category": "All",
    "url": "https://crackworld.top/fixes/cricket-19",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1028630/header.jpg"
  },
  {
    "id": 702,
    "title": "Trail & Error",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/trail-error",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4322960/81a851808036064147ef2db9b2c58a7e1f50b0e6/header.jpg?t=1783275716"
  },
  {
    "id": 703,
    "title": "Pratfall",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/pratfall",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4244510/aa5134d11626034935daa974478c834d03d73f54/header.jpg?t=1793009009"
  },
  {
    "id": 704,
    "title": "Anno 1800",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/anno-1800",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/916440/header.jpg"
  },
  {
    "id": 705,
    "title": "4 Rush Together",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/4-rush-together",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1697170/header.jpg"
  },
  {
    "id": 706,
    "title": "SimplePlanes 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/simpleplanes-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2840470/header.jpg"
  },
  {
    "id": 707,
    "title": "Task Time",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/task-time",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2182680/af3b7c37570e77e62520ab8fa37f5cb9425d17cd/header.jpg?t=1782809558"
  },
  {
    "id": 708,
    "title": "Tom Clancy's Splinter Cell: Pandora Tomorrow",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/tom-clancys-splinter-cell-pandora-tomorrow",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3929740/fd782a203ee11a3a61f1b2398fc439aa6d1f8640/header.jpg?t=1764699227"
  },
  {
    "id": 709,
    "title": "Space for Sale",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/space-for-sale",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1624060/header.jpg"
  },
  {
    "id": 710,
    "title": "The Colonists",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-colonists",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/677340/header.jpg"
  },
  {
    "id": 711,
    "title": "Yu-Gi-Oh! EARLY DAYS COLLECTION",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/yu-gi-oh-early-days-collection",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3013550/header.jpg"
  },
  {
    "id": 712,
    "title": "Eco",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/eco",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/382310/header.jpg"
  },
  {
    "id": 713,
    "title": "Titanfall® 2",
    "category": "All",
    "url": "https://crackworld.top/fixes/titanfall-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1237970/header.jpg"
  },
  {
    "id": 714,
    "title": "POPUCOM",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/popucom",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2543180/header.jpg"
  },
  {
    "id": 715,
    "title": "007 First Light",
    "category": "All",
    "url": "https://crackworld.top/fixes/007-first-light",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3768760/be65391533f072e79699be70ef2d47b7b2ac57ee/header_alt_assets_5.jpg?t=1793979129"
  },
  {
    "id": 716,
    "title": "Earth 2160",
    "category": "All",
    "url": "https://crackworld.top/fixes/earth-2160",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1900/header.jpg"
  },
  {
    "id": 717,
    "title": "Outworld Station",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/outworld-station",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3242950/header.jpg"
  },
  {
    "id": 718,
    "title": "PIT OF GOBLIN",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/pit-of-goblin",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3253530/header.jpg"
  },
  {
    "id": 719,
    "title": "ARMORED CORE VI FIRES OF RUBICON",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/armored-core-vi-fires-of-rubicon",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1888160/header.jpg"
  },
  {
    "id": 720,
    "title": "Soulmask",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/soulmask",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2646460/header.jpg"
  },
  {
    "id": 721,
    "title": "Conan Exiles",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/conan-exiles",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/440900/header.jpg"
  },
  {
    "id": 722,
    "title": "I Know a Guy Shady Life Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/i-know-a-guy-shady-life-simulator",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4173620/ebebf52f4ae57acd8593d92b48d0adec0f3c3992/header.jpg?t=1791495708"
  },
  {
    "id": 723,
    "title": "Shape of Dreams",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/shape-of-dreams",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2444750/header.jpg"
  },
  {
    "id": 724,
    "title": "Cursed Blood",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/cursed-blood",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3382290/header.jpg"
  },
  {
    "id": 725,
    "title": "STAR WARS Battlefront II",
    "category": "EA",
    "url": "https://crackworld.top/fixes/star-wars-battlefront-ii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1237950/header.jpg"
  },
  {
    "id": 726,
    "title": "DogFighter",
    "category": "All",
    "url": "https://crackworld.top/fixes/dogfighter",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/42500/header.jpg"
  },
  {
    "id": 727,
    "title": "Panic In The Woods",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/panic-in-the-woods",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3036880/header.jpg"
  },
  {
    "id": 728,
    "title": "Cloudheim",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/cloudheim",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2070270/header.jpg"
  },
  {
    "id": 729,
    "title": "Offworld Trading Company",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/offworld-trading-company",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/271240/header.jpg"
  },
  {
    "id": 730,
    "title": "Pizza House Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/pizza-house-simulator",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4132330/5516214f333f4903371d4e6f0f725ef2f6132b2d/header.jpg?t=1793830140"
  },
  {
    "id": 731,
    "title": "GOD EATER 2 Rage Burst",
    "category": "All",
    "url": "https://crackworld.top/fixes/god-eater-2-rage-burst",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/438490/header.jpg"
  },
  {
    "id": 732,
    "title": "Parallel Experiment",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/parallel-experiment",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2012320/header.jpg"
  },
  {
    "id": 733,
    "title": "Dead Rising Deluxe Remaster",
    "category": "Capcom",
    "url": "https://crackworld.top/fixes/dead-rising-deluxe-remaster",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2527390/header.jpg"
  },
  {
    "id": 734,
    "title": "Just Cause 2",
    "category": "All",
    "url": "https://crackworld.top/fixes/just-cause-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/8190/header.jpg"
  },
  {
    "id": 735,
    "title": "Liar's Bar",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/liars-bar",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3097560/header.jpg"
  },
  {
    "id": 736,
    "title": "Little Nightmares III",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/little-nightmares-iii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1392860/header.jpg"
  },
  {
    "id": 737,
    "title": "Dungeon Defenders",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dungeon-defenders",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/65800/header.jpg"
  },
  {
    "id": 738,
    "title": "Wizard with a Gun",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/wizard-with-a-gun",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1150530/header.jpg"
  },
  {
    "id": 739,
    "title": "F1 2016",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/f1-2016",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/860230/header.jpg"
  },
  {
    "id": 740,
    "title": "Sitting Ducks",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/sitting-ducks",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4397060/185667c786d9aaab90e1f35522df4950c531344f/header.jpg?t=1788513413"
  },
  {
    "id": 741,
    "title": "Dimraeth",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dimraeth",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2402680/header.jpg"
  },
  {
    "id": 742,
    "title": "Caravanners",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/caravanners",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1609370/header.jpg"
  },
  {
    "id": 743,
    "title": "Tears of Metal",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/tears-of-metal",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1913120/header.jpg"
  },
  {
    "id": 744,
    "title": "SpeedRunners 2 King of Speed",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/speedrunners-2-king-of-speed",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3183760/0f105efa924a2fc0c60b584d49a55ddf473456e5/header.jpg?t=1789420290"
  },
  {
    "id": 745,
    "title": "Gears of War Reloaded",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/gears-of-war-reloaded",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2523720/2ba5d8203b18c38fb2d10b14e92a285a850f08ab/header.jpg?t=1757024702"
  },
  {
    "id": 746,
    "title": "Secret Agent Wizard Boy and the International Crime Syndicate",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/secret-agent-wizard-boy-and-the-international-crime-syndicate",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3281870/header.jpg"
  },
  {
    "id": 747,
    "title": "Lethal Company",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/lethal-company",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1966720/header.jpg"
  },
  {
    "id": 748,
    "title": "Ranch Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ranch-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1573650/header.jpg"
  },
  {
    "id": 749,
    "title": "The One Fish",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-one-fish",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4883580/90d8f0372f5f7a4dcfe262659e1fc113cf5a4f0a/header.jpg?t=1786553963"
  },
  {
    "id": 750,
    "title": "Stonewards",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/stonewards",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4502710/c57ab526296dfdab54cbc5aa2b93bc1fb46f5acd/header.jpg?t=1791908001"
  },
  {
    "id": 751,
    "title": "Dragon Age II: Ultimate Edition",
    "category": "EA",
    "url": "https://crackworld.top/fixes/dragon-age-ii-ultimate-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1238040/header.jpg"
  },
  {
    "id": 752,
    "title": "Among Us",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/among-us",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg"
  },
  {
    "id": 753,
    "title": "HYPERCHARGE Unboxed",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/hypercharge-unboxed",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/523660/header.jpg"
  },
  {
    "id": 754,
    "title": "Burglin Gnomes",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/burglin-gnomes",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3844970/d6127e4eabda23e1d1c727a1875e6b6cb0e634ae/header.jpg?t=1787427131"
  },
  {
    "id": 755,
    "title": "War of Wizards",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/war-of-wizards",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2009460/header.jpg"
  },
  {
    "id": 756,
    "title": "Teenage Mutant Ninja Turtles Splintered Fate",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/teenage-mutant-ninja-turtles-splintered-fate",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2996040/header.jpg"
  },
  {
    "id": 757,
    "title": "Maiden and Spell",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/maiden-and-spell",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1004770/header.jpg"
  },
  {
    "id": 758,
    "title": "Supermarket Chaos",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/supermarket-chaos",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4800590/12972366c9e8812cbd1ba7a3e367d7dfc100314a/header.jpg?t=1787575741"
  },
  {
    "id": 759,
    "title": "Trackmania Turbo",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/trackmania-turbo",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/375900/header.jpg"
  },
  {
    "id": 760,
    "title": "Baladins",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/baladins",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1866320/header.jpg"
  },
  {
    "id": 761,
    "title": "Capote",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/capote",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3345950/399ec03abea9ae3e4e1ea4793389b1d6288cdf93/header.jpg?t=1794602661"
  },
  {
    "id": 762,
    "title": "Elden Ring",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/elden-ring",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg"
  },
  {
    "id": 763,
    "title": "Darkest of Days",
    "category": "All",
    "url": "https://crackworld.top/fixes/darkest-of-days",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/37700/header.jpg"
  },
  {
    "id": 764,
    "title": "Farming Simulator 25",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/farming-simulator-25",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2300320/header.jpg"
  },
  {
    "id": 765,
    "title": "Assassin's Creed Freedom Cry",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-freedom-cry",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/277590/header.jpg"
  },
  {
    "id": 766,
    "title": "Lightyear Frontier",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/lightyear-frontier",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1677110/header.jpg"
  },
  {
    "id": 767,
    "title": "Explosive Odds",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/explosive-odds",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3674980/269e953c770b781803997e4da74ca53f190fa031/header.jpg?t=1781740324"
  },
  {
    "id": 768,
    "title": "Road Food Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/road-food-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3207670/header.jpg"
  },
  {
    "id": 769,
    "title": "Funko Fusion",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/funko-fusion",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1843310/header.jpg"
  },
  {
    "id": 770,
    "title": "Hood Warfare 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/hood-warfare-2",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/5155360/73c77dc5efdbffef90c2d32324d518e68a18fc4b/header.jpg?t=1792873404"
  },
  {
    "id": 771,
    "title": "Arcane Blast",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/arcane-blast",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2628230/header.jpg"
  },
  {
    "id": 772,
    "title": "Assassin's Creed Shadows",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-shadows",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3159330/header.jpg"
  },
  {
    "id": 773,
    "title": "Far Cry New Dawn",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/far-cry-new-dawn",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/939960/header.jpg"
  },
  {
    "id": 774,
    "title": "Meta Ghost Breaking Show",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/meta-ghost-breaking-show",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2507980/header.jpg"
  },
  {
    "id": 775,
    "title": "Sniper: Ghost Warrior",
    "category": "All",
    "url": "https://crackworld.top/fixes/sniper-ghost-warrior",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/34830/header.jpg"
  },
  {
    "id": 776,
    "title": "Old Market Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/old-market-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2878420/header.jpg"
  },
  {
    "id": 777,
    "title": "BLEACH Rebirth of Souls",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bleach-rebirth-of-souls",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1689620/header.jpg"
  },
  {
    "id": 778,
    "title": "DOOM 3",
    "category": "All",
    "url": "https://crackworld.top/fixes/doom-3",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/208200/header.jpg"
  },
  {
    "id": 779,
    "title": "Assassin's Creed: Director's Cut Edition",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-directors-cut-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/15100/header.jpg"
  },
  {
    "id": 780,
    "title": "Forever Skies",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/forever-skies",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1641960/header.jpg"
  },
  {
    "id": 781,
    "title": "Subterror",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/subterror",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2846060/header.jpg"
  },
  {
    "id": 782,
    "title": "Project Unknown",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/project-unknown",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2115390/header.jpg"
  },
  {
    "id": 783,
    "title": "Football Manager 2023",
    "category": "All",
    "url": "https://crackworld.top/fixes/football-manager-2023",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2017220/header.jpg"
  },
  {
    "id": 784,
    "title": "The Backrooms Rescue Expedition",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-backrooms-rescue-expedition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3267550/header.jpg"
  },
  {
    "id": 785,
    "title": "A Plague Tale: Innocence",
    "category": "All",
    "url": "https://crackworld.top/fixes/a-plague-tale-innocence",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/752590/header.jpg"
  },
  {
    "id": 786,
    "title": "Surgeon Simulator 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/surgeon-simulator-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/774791/header.jpg"
  },
  {
    "id": 787,
    "title": "Scamper",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/scamper",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2481930/header.jpg"
  },
  {
    "id": 788,
    "title": "Shin Megami Tensei III Nocturne HD Remaster",
    "category": "All",
    "url": "https://crackworld.top/fixes/shin-megami-tensei-iii-nocturne-hd-remaster",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1413480/header.jpg"
  },
  {
    "id": 789,
    "title": "iRacing Studios NASCAR 26",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/iracing-studios-nascar-26",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4883590/36e029011e47a7fbf54d788eb18a0e0683e923ef/header.jpg?t=1789943763"
  },
  {
    "id": 790,
    "title": "The Escape Together",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-escape-together",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2242760/header.jpg"
  },
  {
    "id": 791,
    "title": "Party Animals",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/party-animals",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1260320/header.jpg"
  },
  {
    "id": 792,
    "title": "ZOMBIE RAID No One Survives",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/zombie-raid-no-one-survives",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/688540/header.jpg"
  },
  {
    "id": 793,
    "title": "First Class Trouble",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/first-class-trouble",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/953880/header.jpg"
  },
  {
    "id": 794,
    "title": "Better Mart",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/better-mart",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3498270/header.jpg"
  },
  {
    "id": 795,
    "title": "Sea of Solitude",
    "category": "All",
    "url": "https://crackworld.top/fixes/sea-of-solitude",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1225590/header.jpg"
  },
  {
    "id": 796,
    "title": "Romestead",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/romestead",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1805320/header.jpg"
  },
  {
    "id": 797,
    "title": "Dune Imperium",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dune-imperium",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1689500/header.jpg"
  },
  {
    "id": 798,
    "title": "Kebab Chefs! Restaurant Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/kebab-chefs-restaurant-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1001270/header.jpg"
  },
  {
    "id": 799,
    "title": "Backrooms Lost Runners",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/backrooms-lost-runners",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3072120/header.jpg"
  },
  {
    "id": 800,
    "title": "RED FLAG",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/red-flag",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4601770/4869210825909c6206d1e1f630300d06c5ec1709/header.jpg?t=1791410223"
  },
  {
    "id": 801,
    "title": "Mechanic Heroes",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/mechanic-heroes",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2061620/header.jpg"
  },
  {
    "id": 802,
    "title": "Split Brain",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/split-brain",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3156640/header.jpg"
  },
  {
    "id": 803,
    "title": "Battlefield: Bad Company 2",
    "category": "EA",
    "url": "https://crackworld.top/fixes/battlefield-bad-company-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2807960/header.jpg"
  },
  {
    "id": 804,
    "title": "Frosthaven",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/frosthaven",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2347080/c6c09a8eb1a0fac5ac8e0d2ea0a228c8303d8967/header.jpg?t=1792089974"
  },
  {
    "id": 805,
    "title": "Combat Mission: Beyond Overlord",
    "category": "All",
    "url": "https://crackworld.top/fixes/combat-mission-beyond-overlord",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3843550/bb27ee9b19561e65e21bb687d05252b828572932/header.jpg?t=1758180947"
  },
  {
    "id": 806,
    "title": "Super Battle Golf",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/super-battle-golf",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4069520/60b052f108998c01fed147d07578a2aed9bcd4ee/header.jpg?t=1793094846"
  },
  {
    "id": 807,
    "title": "How to Fish",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/how-to-fish",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4001890/45c4ddff4901e32c4b8b643e1b97d0d01898d299/header.jpg?t=1792508550"
  },
  {
    "id": 808,
    "title": "MELTY BLOOD TYPE LUMINA",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/melty-blood-type-lumina",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1372280/header.jpg"
  },
  {
    "id": 809,
    "title": "The Greatest Penguin Heist of All Time",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-greatest-penguin-heist-of-all-time",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1451480/header.jpg"
  },
  {
    "id": 810,
    "title": "Happy Wheels",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/happy-wheels",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4705510/acd7fedba57cc1d506f18886ae6c937f754da6c1/header.jpg?t=1791030748"
  },
  {
    "id": 811,
    "title": "Aliens versus Predator 2: Primal Hunt",
    "category": "All",
    "url": "https://crackworld.top/fixes/aliens-versus-predator-2-primal-hunt",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3730/header.jpg"
  },
  {
    "id": 812,
    "title": "It Has My Face",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/it-has-my-face",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2506530/header.jpg"
  },
  {
    "id": 813,
    "title": "Talisman Digital 5th Edition",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/talisman-digital-5th-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/908060/header.jpg"
  },
  {
    "id": 814,
    "title": "S.O.N.A.R. - Submarine Operators Not Actually Ready",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/sonar-submarine-operators-not-actually-ready",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4096830/79e55d368aefa2c2d829264b348c7f0e8eb3d06a/header.jpg?t=1794499660"
  },
  {
    "id": 815,
    "title": "Eyes of Hellfire",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/eyes-of-hellfire",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1724030/header.jpg"
  },
  {
    "id": 816,
    "title": "Palworld",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/palworld",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg"
  },
  {
    "id": 817,
    "title": "Mortal Kombat 1",
    "category": "All",
    "url": "https://crackworld.top/fixes/mortal-kombat-1",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1971870/header.jpg"
  },
  {
    "id": 818,
    "title": "Day of Defeat: Source",
    "category": "All",
    "url": "https://crackworld.top/fixes/day-of-defeat-source",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/300/header.jpg"
  },
  {
    "id": 819,
    "title": "We Were Here Tomorrow",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/we-were-here-tomorrow",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2315050/header.jpg"
  },
  {
    "id": 820,
    "title": "Lies of P",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/lies-of-p",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1627720/header.jpg"
  },
  {
    "id": 821,
    "title": "The Lord of the Rings War in the North Legacy Edition",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-lord-of-the-rings-war-in-the-north-legacy-edition",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2523770/ce49411b23ef7bfe8dd88c1c58f29a4584cf961e/header.jpg?t=1794005624"
  },
  {
    "id": 822,
    "title": "FUMES",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/fumes",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1920430/header.jpg"
  },
  {
    "id": 823,
    "title": "Cheater's Table",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/cheaters-table",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3951810/fda304635bc93b47fbfe6ee645cba6cf49602d4c/header.jpg?t=1794245058"
  },
  {
    "id": 824,
    "title": "DAVIGO VR vs PC",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/davigo-vr-vs-pc",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1116540/header.jpg"
  },
  {
    "id": 825,
    "title": "Odd Remedy",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/odd-remedy",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1745680/header.jpg"
  },
  {
    "id": 826,
    "title": "Speed Crew",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/speed-crew",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2367480/header.jpg"
  },
  {
    "id": 827,
    "title": "Barotrauma",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/barotrauma",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/602960/header.jpg"
  },
  {
    "id": 828,
    "title": "Polterguys Possession Party",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/polterguys-possession-party",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1043520/header.jpg"
  },
  {
    "id": 829,
    "title": "Battlefield 3",
    "category": "EA",
    "url": "https://crackworld.top/fixes/battlefield-3",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1238820/header.jpg"
  },
  {
    "id": 830,
    "title": "Wild Woods",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/wild-woods",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1975580/header.jpg"
  },
  {
    "id": 831,
    "title": "FIFA 22",
    "category": "EA",
    "url": "https://crackworld.top/fixes/fifa-22",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1506830/header.jpg"
  },
  {
    "id": 832,
    "title": "Meccha Chameleon",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/meccha-chameleon",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/163e2a742e5fb8e1f5d1e3a890da98f04ab809d4/header.jpg?t=1789464996"
  },
  {
    "id": 833,
    "title": "Bopl Battle",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bopl-battle",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1686940/header.jpg"
  },
  {
    "id": 834,
    "title": "FATAL FURY City of the Wolves",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/fatal-fury-city-of-the-wolves",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2492040/header.jpg"
  },
  {
    "id": 835,
    "title": "Chained in the Backrooms",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/chained-in-the-backrooms",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3060170/header.jpg"
  },
  {
    "id": 836,
    "title": "Sapiens",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/sapiens",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1060230/header.jpg"
  },
  {
    "id": 837,
    "title": "Resident Evil 5",
    "category": "Capcom",
    "url": "https://crackworld.top/fixes/resident-evil-5",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/21690/header.jpg"
  },
  {
    "id": 838,
    "title": "Outer Wilds",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/outer-wilds",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/753640/header.jpg"
  },
  {
    "id": 839,
    "title": "GOD EATER RESURRECTION",
    "category": "All",
    "url": "https://crackworld.top/fixes/god-eater-resurrection",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/438490/header.jpg"
  },
  {
    "id": 840,
    "title": "Motion Soccer PRO",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/motion-soccer-pro",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3137350/header.jpg"
  },
  {
    "id": 841,
    "title": "Forza Motorsport",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/forza-motorsport",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2440510/header.jpg"
  },
  {
    "id": 842,
    "title": "Riders Republic",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/riders-republic",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2290180/header.jpg"
  },
  {
    "id": 843,
    "title": "Freedom Force",
    "category": "EA",
    "url": "https://crackworld.top/fixes/freedom-force",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/8880/header.jpg"
  },
  {
    "id": 844,
    "title": "EA SPORTS™ FIFA 23",
    "category": "EA",
    "url": "https://crackworld.top/fixes/ea-sports-fifa-23",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1811260/header.jpg"
  },
  {
    "id": 845,
    "title": "Police Simulator Patrol Officers",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/police-simulator-patrol-officers",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/997010/header.jpg"
  },
  {
    "id": 846,
    "title": "Fast Food Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/fast-food-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2916430/header.jpg"
  },
  {
    "id": 847,
    "title": "MechWarrior 5 Clans",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/mechwarrior-5-clans",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2000890/header.jpg"
  },
  {
    "id": 848,
    "title": "Star Wars Outlaws",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/star-wars-outlaws",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2842040/header.jpg"
  },
  {
    "id": 849,
    "title": "Dune: Awakening",
    "category": "All",
    "url": "https://crackworld.top/fixes/dune-awakening",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1172710/header.jpg"
  },
  {
    "id": 850,
    "title": "Watch Dogs",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/watch-dogs",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/243470/header.jpg"
  },
  {
    "id": 851,
    "title": "Mirror's Edge™ Catalyst",
    "category": "All",
    "url": "https://crackworld.top/fixes/mirrors-edge-catalyst",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1233570/header.jpg"
  },
  {
    "id": 852,
    "title": "THE QUIET MAN™",
    "category": "All",
    "url": "https://crackworld.top/fixes/the-quiet-man",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/790540/header.jpg"
  },
  {
    "id": 853,
    "title": "FPV Kamikaze Drone",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/fpv-kamikaze-drone",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2707940/header.jpg"
  },
  {
    "id": 854,
    "title": "Strange Brigade",
    "category": "All",
    "url": "https://crackworld.top/fixes/strange-brigade",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/312670/header.jpg"
  },
  {
    "id": 855,
    "title": "Night Shippers",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/night-shippers",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3761880/a7747d30784d6a8b7e86198d5bd336715ae805c3/header.jpg?t=1792167172"
  },
  {
    "id": 856,
    "title": "Abyssus",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/abyssus",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1721110/header.jpg"
  },
  {
    "id": 857,
    "title": "Card Shop Simulator Multiplayer",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/card-shop-simulator-multiplayer",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3569500/c8cf36a77e591a2bd4db2e0852da2209410a18c4/header.jpg?t=1784000862"
  },
  {
    "id": 858,
    "title": "Hytale",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/hytale",
    "image": "https://upload.wikimedia.org/wikipedia/en/b/ba/Hytale_logo.png"
  },
  {
    "id": 859,
    "title": "Road to Vostok",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/road-to-vostok",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1963610/header.jpg"
  },
  {
    "id": 860,
    "title": "Subterranauts",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/subterranauts",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3075800/header.jpg"
  },
  {
    "id": 861,
    "title": "Call of Duty: Black Ops III",
    "category": "All",
    "url": "https://crackworld.top/fixes/call-of-duty-black-ops-iii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/311210/header.jpg"
  },
  {
    "id": 862,
    "title": "Bully: Scholarship Edition",
    "category": "Rockstar",
    "url": "https://crackworld.top/fixes/bully-scholarship-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/12200/header.jpg"
  },
  {
    "id": 863,
    "title": "Pizza Deathlivery",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/pizza-deathlivery",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3697560/09596d1d2c3a6967e1ef9599739b76ff489ffedb/header.jpg?t=1779973789"
  },
  {
    "id": 864,
    "title": "Avatar: Frontiers of Pandora",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/avatar-frontiers-of-pandora",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2840770/header.jpg"
  },
  {
    "id": 865,
    "title": "Towa and the Guardians of the Sacred Tree",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/towa-and-the-guardians-of-the-sacred-tree",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1910090/db4a2acab2f2ffc25a58f6da938f6c199d120209/header.jpg?t=1784620528"
  },
  {
    "id": 866,
    "title": "The First Berserker: Khazan",
    "category": "All",
    "url": "https://crackworld.top/fixes/the-first-berserker-khazan",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2680010/header.jpg"
  },
  {
    "id": 867,
    "title": "Lucid Cats",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/lucid-cats",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4778540/a7eca735be2b883b76eb788d1e84dd5ff8de96df/header.jpg?t=1793210943"
  },
  {
    "id": 868,
    "title": "Sandwich Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/sandwich-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3445340/header.jpg"
  },
  {
    "id": 869,
    "title": "The Crew Motorfest",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-crew-motorfest",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2698940/header.jpg"
  },
  {
    "id": 870,
    "title": "Assassin's Creed Liberation",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-liberation",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/260210/header.jpg"
  },
  {
    "id": 871,
    "title": "The Mound Omen of Cthulhu",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-mound-omen-of-cthulhu",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2569760/header.jpg"
  },
  {
    "id": 872,
    "title": "NASCAR 25",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/nascar-25",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3873970/5993fe7123701b2a7baa25b60d728dd7787de3bf/header.jpg?t=1766082114"
  },
  {
    "id": 873,
    "title": "Enshrouded",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/enshrouded",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1203620/header.jpg"
  },
  {
    "id": 874,
    "title": "Microsoft Flight Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/microsoft-flight-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2537590/header.jpg"
  },
  {
    "id": 875,
    "title": "Cardfight!! Vanguard Dear Days 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/cardfight-vanguard-dear-days-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2457540/header.jpg"
  },
  {
    "id": 876,
    "title": "Marvel's Guardians of the Galaxy",
    "category": "All",
    "url": "https://crackworld.top/fixes/marvels-guardians-of-the-galaxy",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1088850/header.jpg"
  },
  {
    "id": 877,
    "title": "Kitchen Wars",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/kitchen-wars",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2955840/header.jpg"
  },
  {
    "id": 878,
    "title": "Together Moon Escape",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/together-moon-escape",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3744430/2b1989c2b09a474a13a9dc3db410248ad9fc04e4/header.jpg?t=1778172724"
  },
  {
    "id": 879,
    "title": "Moros Protocol",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/moros-protocol",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1605250/header.jpg"
  },
  {
    "id": 880,
    "title": "PICO PARK 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/pico-park-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2644470/header.jpg"
  },
  {
    "id": 881,
    "title": "Tales of Berseria™",
    "category": "All",
    "url": "https://crackworld.top/fixes/tales-of-berseria",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/429660/header.jpg"
  },
  {
    "id": 882,
    "title": "Project Winter",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/project-winter",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/774861/header.jpg"
  },
  {
    "id": 883,
    "title": "Goat Simulator 3",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/goat-simulator-3",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/850190/header.jpg"
  },
  {
    "id": 884,
    "title": "Fera The Sundered Tribes",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/fera-the-sundered-tribes",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2469200/header.jpg"
  },
  {
    "id": 885,
    "title": "Cars 2",
    "category": "All",
    "url": "https://crackworld.top/fixes/cars-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/915190/header.jpg"
  },
  {
    "id": 886,
    "title": "Eagle Flight",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/eagle-flight",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/408250/header.jpg"
  },
  {
    "id": 887,
    "title": "Behind The Backrooms",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/behind-the-backrooms",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3088440/header.jpg"
  },
  {
    "id": 888,
    "title": "MAZEBOUND Hunt, Gather, Run!",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/mazebound-hunt-gather-run",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3616260/e70ba4bd9949a9f3a666098e36f8e77319b3ad1d/header.jpg?t=1791410445"
  },
  {
    "id": 889,
    "title": "Dead Space™ 3",
    "category": "EA",
    "url": "https://crackworld.top/fixes/dead-space-3",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1238060/header.jpg"
  },
  {
    "id": 890,
    "title": "Subnautica Below Zero",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/subnautica-below-zero",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/848450/header.jpg"
  },
  {
    "id": 891,
    "title": "over the hill",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/over-the-hill",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2929250/header.jpg"
  },
  {
    "id": 892,
    "title": "WRC 7 FIA World Rally Championship",
    "category": "All",
    "url": "https://crackworld.top/fixes/wrc-7-fia-world-rally-championship",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/621830/header.jpg"
  },
  {
    "id": 893,
    "title": "The Backrooms Last Expedition",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-backrooms-last-expedition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2518430/header.jpg"
  },
  {
    "id": 894,
    "title": "Fallout: New Vegas",
    "category": "All",
    "url": "https://crackworld.top/fixes/fallout-new-vegas",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/22380/header.jpg"
  },
  {
    "id": 895,
    "title": "Just Dance 2017",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/just-dance-2017",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/446560/header.jpg"
  },
  {
    "id": 896,
    "title": "Stardew Valley",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/stardew-valley",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg"
  },
  {
    "id": 897,
    "title": "Schedule I",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/schedule-i",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3164500/header.jpg"
  },
  {
    "id": 898,
    "title": "Derail Valley",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/derail-valley",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/588030/header.jpg"
  },
  {
    "id": 899,
    "title": "SWAPMEAT",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/swapmeat",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2790700/header.jpg"
  },
  {
    "id": 900,
    "title": "Silent Rain",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/silent-rain",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1791910/header.jpg"
  },
  {
    "id": 901,
    "title": "Deus Ex: Mankind Divided",
    "category": "All",
    "url": "https://crackworld.top/fixes/deus-ex-mankind-divided",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/337000/header.jpg"
  },
  {
    "id": 902,
    "title": "SENTRY",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/sentry",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1252680/header.jpg"
  },
  {
    "id": 903,
    "title": "Dawn of Defiance",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dawn-of-defiance",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2059530/header.jpg"
  },
  {
    "id": 904,
    "title": "Tinkerlands",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/tinkerlands",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2617700/header.jpg"
  },
  {
    "id": 905,
    "title": "Animal Shelter 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/animal-shelter-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2658510/header.jpg"
  },
  {
    "id": 906,
    "title": "Deep Rock Galactic Rogue Core",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/deep-rock-galactic-rogue-core",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2605790/header.jpg"
  },
  {
    "id": 907,
    "title": "Climb The Backrooms",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/climb-the-backrooms",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3575300/125a1516b16ce033aa6ed0bf1116c64c7883df9d/header.jpg?t=1779846262"
  },
  {
    "id": 908,
    "title": "Granblue Fantasy Relink",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/granblue-fantasy-relink",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/881020/header.jpg"
  },
  {
    "id": 909,
    "title": "THE KING OF FIGHTERS XIII GLOBAL MATCH",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-king-of-fighters-xiii-global-match",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3050220/header.jpg"
  },
  {
    "id": 910,
    "title": "Counter-Strike: Source",
    "category": "All",
    "url": "https://crackworld.top/fixes/counter-strike-source",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/240/header.jpg"
  },
  {
    "id": 911,
    "title": "Team Sonic Racing™",
    "category": "All",
    "url": "https://crackworld.top/fixes/team-sonic-racing",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/785260/header.jpg"
  },
  {
    "id": 912,
    "title": "MARVEL Tokon Fighting Souls",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/marvel-tokon-fighting-souls",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3787240/943fda32c11b3e3f451458ffa95a4adca1f316a4/header.jpg?t=1793610312"
  },
  {
    "id": 913,
    "title": "SCP 5K",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/scp-5k",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/872670/header.jpg"
  },
  {
    "id": 914,
    "title": "Mount & Blade II Bannerlord",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/mount-blade-ii-bannerlord",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/261550/header.jpg"
  },
  {
    "id": 915,
    "title": "9th Dawn Remake",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/9th-dawn-remake",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1550180/header.jpg"
  },
  {
    "id": 916,
    "title": "Pyramidion",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/pyramidion",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4024600/eabee53407b333903f098d1590c21ed4b5ada92e/header.jpg?t=1792660136"
  },
  {
    "id": 917,
    "title": "PlateUp",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/plateup",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1599600/header.jpg"
  },
  {
    "id": 918,
    "title": "Submerge",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/submerge",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4180620/0498f6528ff2817539c9498d35d596c219bafed9/header.jpg?t=1786989615"
  },
  {
    "id": 919,
    "title": "Bar After Bar",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bar-after-bar",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4596010/44ba5def815460c9e8dc67dc3ec7f799a7e52018/header.jpg?t=1787735298"
  },
  {
    "id": 920,
    "title": "Squirreled Away",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/squirreled-away",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2977620/header.jpg"
  },
  {
    "id": 921,
    "title": "Sid Meiers Civilization III: Complete",
    "category": "All",
    "url": "https://crackworld.top/fixes/sid-meiers-civilization-iii-complete",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3910/header.jpg"
  },
  {
    "id": 922,
    "title": "BOMBANANA!",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bombanana",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4656000/99c086faba625a8d3bc459bab444087d257ccbe1/header.jpg?t=1794217137"
  },
  {
    "id": 923,
    "title": "Forgotten Seas",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/forgotten-seas",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2168260/header.jpg"
  },
  {
    "id": 924,
    "title": "Alpha Protocol",
    "category": "All",
    "url": "https://crackworld.top/fixes/alpha-protocol",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/34010/header.jpg"
  },
  {
    "id": 925,
    "title": "MARVEL vs. CAPCOM Fighting Collection Arcade Classics",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/marvel-vs-capcom-fighting-collection-arcade-classics",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2634890/header.jpg"
  },
  {
    "id": 926,
    "title": "Dollhouse Of Dead",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dollhouse-of-dead",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2977810/header.jpg"
  },
  {
    "id": 927,
    "title": "Assassin's Creed Origins",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-origins",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/582160/header.jpg"
  },
  {
    "id": 928,
    "title": "Resident Evil Village",
    "category": "Capcom",
    "url": "https://crackworld.top/fixes/resident-evil-village",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/header.jpg"
  },
  {
    "id": 929,
    "title": "Alice: Madness Returns",
    "category": "EA",
    "url": "https://crackworld.top/fixes/alice-madness-returns",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/19680/header.jpg"
  },
  {
    "id": 930,
    "title": "Unravel",
    "category": "EA",
    "url": "https://crackworld.top/fixes/unravel",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1225560/header.jpg"
  },
  {
    "id": 931,
    "title": "Boba Cafe Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/boba-cafe-simulator",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3683770/b21fdafae2937a996d164151925e426571340447/header.jpg?t=1791453548"
  },
  {
    "id": 932,
    "title": "Section 13",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/section-13",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2111870/header.jpg"
  },
  {
    "id": 933,
    "title": "Double Dragon Revive",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/double-dragon-revive",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3012220/header.jpg"
  },
  {
    "id": 934,
    "title": "Assassin's Creed 2",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/33230/header.jpg"
  },
  {
    "id": 935,
    "title": "Bakery Cafe Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bakery-cafe-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3444080/header.jpg"
  },
  {
    "id": 936,
    "title": "The You Quiz",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-you-quiz",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3669740/bd812c1522d0c3e5dbbec5de41f6398ae1ea2c50/header.jpg?t=1788343963"
  },
  {
    "id": 937,
    "title": "Hunters Inc",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/hunters-inc",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2937090/header.jpg"
  },
  {
    "id": 938,
    "title": "Dark Void",
    "category": "Capcom",
    "url": "https://crackworld.top/fixes/dark-void",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4770970/6cea4dff2a0d414b3be0090e8f1fe6f7b9b4307d/header.jpg?t=1791090885"
  },
  {
    "id": 939,
    "title": "Half-Life",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/half-life",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/70/header.jpg"
  },
  {
    "id": 940,
    "title": "Aquapark Tycoon",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/aquapark-tycoon",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2819470/header.jpg"
  },
  {
    "id": 941,
    "title": "Finnish Cottage Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/finnish-cottage-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1723780/header.jpg"
  },
  {
    "id": 942,
    "title": "Solo Leveling: ARISE OVERDRIVE",
    "category": "All",
    "url": "https://crackworld.top/fixes/solo-leveling-arise-overdrive",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2373990/header.jpg"
  },
  {
    "id": 943,
    "title": "Emissary Zero",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/emissary-zero",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3176060/header.jpg"
  },
  {
    "id": 944,
    "title": "ZEPHON",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/zephon",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1481170/header.jpg"
  },
  {
    "id": 945,
    "title": "Operation Tango",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/operation-tango",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1335790/header.jpg"
  },
  {
    "id": 946,
    "title": "Dying Light",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dying-light",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/239140/header.jpg"
  },
  {
    "id": 947,
    "title": "All Hands on Deck",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/all-hands-on-deck",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2122880/header.jpg"
  },
  {
    "id": 948,
    "title": "Hardware Store Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/hardware-store-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3358560/header.jpg"
  },
  {
    "id": 949,
    "title": "Pixel Dungeon VR",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/pixel-dungeon-vr",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3063750/header.jpg"
  },
  {
    "id": 950,
    "title": "Assassin's Creed IV Black Flag",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-iv-black-flag",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/242050/header.jpg"
  },
  {
    "id": 951,
    "title": "Dark Quest 4",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dark-quest-4",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2453840/header.jpg"
  },
  {
    "id": 952,
    "title": "F1® 2021",
    "category": "All",
    "url": "https://crackworld.top/fixes/f1-2021",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1660061/header.jpg"
  },
  {
    "id": 953,
    "title": "REANIMAL",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/reanimal",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2129530/header.jpg"
  },
  {
    "id": 954,
    "title": "Multiplayer Platform Golf",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/multiplayer-platform-golf",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2263920/header.jpg"
  },
  {
    "id": 955,
    "title": "Cheaters Cheetah",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/cheaters-cheetah",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3438990/header.jpg"
  },
  {
    "id": 956,
    "title": "The Headliners",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-headliners",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3059070/header.jpg"
  },
  {
    "id": 957,
    "title": "Persona 5 Royal",
    "category": "All",
    "url": "https://crackworld.top/fixes/persona-5-royal",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1687950/header.jpg"
  },
  {
    "id": 958,
    "title": "Zort",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/zort",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3121110/header.jpg"
  },
  {
    "id": 959,
    "title": "Inside the Backrooms",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/inside-the-backrooms",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1987080/header.jpg"
  },
  {
    "id": 960,
    "title": "ATLYSS",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/atlyss",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2768430/header.jpg"
  },
  {
    "id": 961,
    "title": "Crashout Crew",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/crashout-crew",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3583210/9eb7862ff717a04dcc02123ce1e773a3e1c226af/header.jpg?t=1785949243"
  },
  {
    "id": 962,
    "title": "Dead Rising 4",
    "category": "Capcom",
    "url": "https://crackworld.top/fixes/dead-rising-4",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/543460/header.jpg"
  },
  {
    "id": 963,
    "title": "Void Crew",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/void-crew",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1063420/header.jpg"
  },
  {
    "id": 964,
    "title": "Mad Max",
    "category": "All",
    "url": "https://crackworld.top/fixes/mad-max",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/234140/header.jpg"
  },
  {
    "id": 965,
    "title": "Inkbound",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/inkbound",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1062810/header.jpg"
  },
  {
    "id": 966,
    "title": "Backrooms Extractions",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/backrooms-extractions",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2835530/header.jpg"
  },
  {
    "id": 967,
    "title": "World of Football",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/world-of-football",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/946880/header.jpg"
  },
  {
    "id": 968,
    "title": "Wayfinder",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/wayfinder",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1171690/header.jpg"
  },
  {
    "id": 969,
    "title": "Scam With Your Friends",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/scam-with-your-friends",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4954910/128effac3212fc1b92b4f6cd8891995df0d4b199/header.jpg?t=1794259275"
  },
  {
    "id": 970,
    "title": "Goons Legends Mayhem",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/goons-legends-mayhem",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1484180/header.jpg"
  },
  {
    "id": 971,
    "title": "Deadly Quiet",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/deadly-quiet",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3419130/header.jpg"
  },
  {
    "id": 972,
    "title": "Deep Dish Dungeon",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/deep-dish-dungeon",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2871520/header.jpg"
  },
  {
    "id": 973,
    "title": "Monaco 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/monaco-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1063030/header.jpg"
  },
  {
    "id": 974,
    "title": "Comanche 4",
    "category": "All",
    "url": "https://crackworld.top/fixes/comanche-4",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/32750/header.jpg"
  },
  {
    "id": 975,
    "title": "STORROR Parkour Pro",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/storror-parkour-pro",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3125250/header.jpg"
  },
  {
    "id": 976,
    "title": "Drive Together",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/drive-together",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4117320/76b477b044006902aafa14e31fb07c7468b13b6b/header.jpg?t=1778864394"
  },
  {
    "id": 977,
    "title": "GUILTY GEAR STRIVE",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/guilty-gear-strive",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1384160/header.jpg"
  },
  {
    "id": 978,
    "title": "Everdell",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/everdell",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1722840/header.jpg"
  },
  {
    "id": 979,
    "title": "Zombie Army 4: Dead War",
    "category": "All",
    "url": "https://crackworld.top/fixes/zombie-army-4-dead-war",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/694280/header.jpg"
  },
  {
    "id": 980,
    "title": "Gedonia 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/gedonia-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2566340/header.jpg"
  },
  {
    "id": 981,
    "title": "Scott Pilgrim EX",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/scott-pilgrim-ex",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2640950/8c040ff56403fb179ef2d4310300d154aa443944/header.jpg?t=1787843563"
  },
  {
    "id": 982,
    "title": "Need for Speed™ Hot Pursuit Remastered",
    "category": "EA",
    "url": "https://crackworld.top/fixes/need-for-speed-hot-pursuit-remastered",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1328660/header.jpg"
  },
  {
    "id": 983,
    "title": "Football Manager 2020",
    "category": "All",
    "url": "https://crackworld.top/fixes/football-manager-2020",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1100750/header.jpg"
  },
  {
    "id": 984,
    "title": "Dice Kingdoms",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dice-kingdoms",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1501690/header.jpg"
  },
  {
    "id": 985,
    "title": "JoJo's Bizarre Adventure All-Star Battle R",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/jojos-bizarre-adventure-all-star-battle-r",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1372110/header.jpg"
  },
  {
    "id": 986,
    "title": "The Lantern of the Laughless Saint",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-lantern-of-the-laughless-saint",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3849000/b98fe0c76e1cf48d830922efe33852a83915b5cc/header.jpg?t=1787331024"
  },
  {
    "id": 987,
    "title": "Trailmakers",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/trailmakers",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/585420/header.jpg"
  },
  {
    "id": 988,
    "title": "The Blackout Club",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-blackout-club",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/599080/header.jpg"
  },
  {
    "id": 989,
    "title": "Trials Rising",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/trials-rising",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/641080/header.jpg"
  },
  {
    "id": 990,
    "title": "Backrooms Cleanup Crew",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/backrooms-cleanup-crew",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3140990/header.jpg"
  },
  {
    "id": 991,
    "title": "Crime Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/crime-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2737070/header.jpg"
  },
  {
    "id": 992,
    "title": "VEIN",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/vein",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1857950/header.jpg"
  },
  {
    "id": 993,
    "title": "Ready or Not",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ready-or-not",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1144200/header.jpg"
  },
  {
    "id": 994,
    "title": "TrackDayR",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/trackdayr",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1511630/header.jpg"
  },
  {
    "id": 995,
    "title": "SIDE EFFECTS",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/side-effects",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3799100/ab45f12575f1e05377a5982eebd5bad800712ca2/header.jpg?t=1763737405"
  },
  {
    "id": 996,
    "title": "Call of Duty: Black Ops Cold War",
    "category": "All",
    "url": "https://crackworld.top/fixes/call-of-duty-black-ops-cold-war",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1985810/header.jpg"
  },
  {
    "id": 997,
    "title": "Rabbit and Steel",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/rabbit-and-steel",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2132850/header.jpg"
  },
  {
    "id": 998,
    "title": "Knights Within",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/knights-within",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2406180/header.jpg"
  },
  {
    "id": 999,
    "title": "Hollow Knight Silksong",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/hollow-knight-silksong",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1030300/header.jpg"
  },
  {
    "id": 1000,
    "title": "Combat Air Patrol 2",
    "category": "All",
    "url": "https://crackworld.top/fixes/combat-air-patrol-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/347170/header.jpg"
  },
  {
    "id": 1001,
    "title": "Spider Roulette",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/spider-roulette",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3900650/748cdb5a3fb8523ff5338df936572aa6758a25c9/header.jpg?t=1788549291"
  },
  {
    "id": 1002,
    "title": "Amnesia: The Dark Descent",
    "category": "All",
    "url": "https://crackworld.top/fixes/amnesia-the-dark-descent",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/57300/header.jpg"
  },
  {
    "id": 1003,
    "title": "Occupy Mars The Game",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/occupy-mars-the-game",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/758690/header.jpg"
  },
  {
    "id": 1004,
    "title": "Forts",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/forts",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/410900/header.jpg"
  },
  {
    "id": 1005,
    "title": "Night of the Dead",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/night-of-the-dead",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1377380/header.jpg"
  },
  {
    "id": 1006,
    "title": "Serious Sam Shatterverse",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/serious-sam-shatterverse",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2067210/3171c0ddcebcb0888ed8ff80469792ded64a7aa4/header.jpg?t=1788357622"
  },
  {
    "id": 1007,
    "title": "Battlefield 4",
    "category": "EA",
    "url": "https://crackworld.top/fixes/battlefield-4",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1238860/header.jpg"
  },
  {
    "id": 1008,
    "title": "Ratatan",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ratatan",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2949320/header.jpg"
  },
  {
    "id": 1009,
    "title": "F1 2020",
    "category": "All",
    "url": "https://crackworld.top/fixes/f1-2020",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1386820/header.jpg"
  },
  {
    "id": 1010,
    "title": "Big Walk",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/big-walk",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1478500/header.jpg"
  },
  {
    "id": 1011,
    "title": "Galaxy Burger",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/galaxy-burger",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2749770/header.jpg"
  },
  {
    "id": 1012,
    "title": "Lost Lullabies The Orphanage Chronicles",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/lost-lullabies-the-orphanage-chronicles",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2903710/header.jpg"
  },
  {
    "id": 1013,
    "title": "CODE VEIN",
    "category": "All",
    "url": "https://crackworld.top/fixes/code-vein",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/678960/header.jpg"
  },
  {
    "id": 1014,
    "title": "He is Coming",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/he-is-coming",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2824490/header.jpg"
  },
  {
    "id": 1015,
    "title": "RailGods of Hysterra",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/railgods-of-hysterra",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3201910/header.jpg"
  },
  {
    "id": 1016,
    "title": "Sons Of The Forest",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/sons-of-the-forest",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1326470/header.jpg"
  },
  {
    "id": 1017,
    "title": "Exploding Kittens 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/exploding-kittens-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2999030/header.jpg"
  },
  {
    "id": 1018,
    "title": "LockYourDoor",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/lockyourdoor",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3004140/header.jpg"
  },
  {
    "id": 1019,
    "title": "Terraria",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/terraria",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg"
  },
  {
    "id": 1020,
    "title": "EARTH DEFENSE FORCE WORLD BROTHERS 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/earth-defense-force-world-brothers-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2370170/header.jpg"
  },
  {
    "id": 1021,
    "title": "Friendly Steps",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/friendly-steps",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4279630/d649d4743f436dd3a82c1de496bff1d29c5bf26e/header.jpg?t=1789748528"
  },
  {
    "id": 1022,
    "title": "The Spell Brigade",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-spell-brigade",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2904000/header.jpg"
  },
  {
    "id": 1023,
    "title": "STARSEEKER Astroneer Expeditions",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/starseeker-astroneer-expeditions",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1454370/ec6e7614e478cfd46b694f694e502a9832d76e62/header.jpg?t=1791568184"
  },
  {
    "id": 1024,
    "title": "Crimson Desert",
    "category": "All",
    "url": "https://crackworld.top/fixes/crimson-desert",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3321460/header.jpg"
  },
  {
    "id": 1025,
    "title": "Sleeping Dogs",
    "category": "All",
    "url": "https://crackworld.top/fixes/sleeping-dogs",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/202170/header.jpg"
  },
  {
    "id": 1026,
    "title": "DARK SOULS III",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dark-souls-iii",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg"
  },
  {
    "id": 1027,
    "title": "Golf Gambit",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/golf-gambit",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2761350/header.jpg"
  },
  {
    "id": 1028,
    "title": "Luma Island",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/luma-island",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2408820/header.jpg"
  },
  {
    "id": 1029,
    "title": "Arizona Sunshine Remake",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/arizona-sunshine-remake",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2897700/header.jpg"
  },
  {
    "id": 1030,
    "title": "Dungeon Done",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dungeon-done",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2939830/header.jpg"
  },
  {
    "id": 1031,
    "title": "Just Cause™ 3",
    "category": "All",
    "url": "https://crackworld.top/fixes/just-cause-3",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/225540/header.jpg"
  },
  {
    "id": 1032,
    "title": "Evil Genius 2: World Domination",
    "category": "All",
    "url": "https://crackworld.top/fixes/evil-genius-2-world-domination",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/700600/header.jpg"
  },
  {
    "id": 1033,
    "title": "Avatar Legends The Fighting Game",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/avatar-legends-the-fighting-game",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2424420/30d44f94173fde20d7338f01611c6b5c7618e07e/header.jpg?t=1793830026"
  },
  {
    "id": 1034,
    "title": "PRO EVOLUTION SOCCER 2018",
    "category": "All",
    "url": "https://crackworld.top/fixes/pro-evolution-soccer-2018",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/592580/header.jpg"
  },
  {
    "id": 1035,
    "title": "Stellaris",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/stellaris",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/281990/header.jpg"
  },
  {
    "id": 1036,
    "title": "Football Pitch Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/football-pitch-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3154800/header.jpg"
  },
  {
    "id": 1037,
    "title": "The Mosquito Gang",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-mosquito-gang",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2811100/header.jpg"
  },
  {
    "id": 1038,
    "title": "School 666",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/school-666",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2802820/header.jpg"
  },
  {
    "id": 1039,
    "title": "Gears of War: E-Day",
    "category": "All",
    "url": "https://crackworld.top/fixes/gears-of-war-e-day",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3010850/header.jpg"
  },
  {
    "id": 1040,
    "title": "Restaurants",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/restaurants",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/5481990/a18b934ef3b5357f5144db40f5eb81bded1c597a/header.jpg?t=1792777017"
  },
  {
    "id": 1041,
    "title": "Command & Conquer: Red Alert 2 and Yuri’s Revenge",
    "category": "EA",
    "url": "https://crackworld.top/fixes/command-conquer-red-alert-2-and-yuris-revenge",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2229850/header.jpg"
  },
  {
    "id": 1042,
    "title": "Roadside Research",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/roadside-research",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3643170/638bcc340b56358c8fa6351d3cf584cfa9e12717/header_alt_assets_1.jpg?t=1792818668"
  },
  {
    "id": 1043,
    "title": "Assassin’s Creed Chronicles: India",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-chronicles-india",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/359610/header.jpg"
  },
  {
    "id": 1044,
    "title": "Phasmophobia",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/phasmophobia",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg"
  },
  {
    "id": 1045,
    "title": "Dinkum",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dinkum",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1062520/header.jpg"
  },
  {
    "id": 1046,
    "title": "ARK Survival Ascended",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ark-survival-ascended",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2399830/header.jpg"
  },
  {
    "id": 1047,
    "title": "CRACK",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/crack",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4312190/9dfa7d4efdcc88aa5663a31f02633391eb5ef843/header.jpg?t=1794527659"
  },
  {
    "id": 1048,
    "title": "DRAGON BALL XENOVERSE",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dragon-ball-xenoverse",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/323470/header.jpg"
  },
  {
    "id": 1049,
    "title": "Pic-Me!",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/pic-me",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3265280/header.jpg"
  },
  {
    "id": 1050,
    "title": "Thrive Heavy Lies The Crown",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/thrive-heavy-lies-the-crown",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1245250/header.jpg"
  },
  {
    "id": 1051,
    "title": "Smalland Survive the Wilds",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/smalland-survive-the-wilds",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/768200/header.jpg"
  },
  {
    "id": 1052,
    "title": "Mirror's Edge™",
    "category": "All",
    "url": "https://crackworld.top/fixes/mirrors-edge",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/17410/header.jpg"
  },
  {
    "id": 1053,
    "title": "Hacktag",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/hacktag",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/622770/header.jpg"
  },
  {
    "id": 1054,
    "title": "Steep™",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/steep",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/460920/header.jpg"
  },
  {
    "id": 1055,
    "title": "SOUTH PARK SNOW DAY",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/south-park-snow-day",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1214650/header.jpg"
  },
  {
    "id": 1056,
    "title": "Sonic Frontiers",
    "category": "All",
    "url": "https://crackworld.top/fixes/sonic-frontiers",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1237320/header.jpg"
  },
  {
    "id": 1057,
    "title": "GODBREAKERS",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/godbreakers",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2687400/22c96009885b8a3598662b2531b553f51ed44442/header.jpg?t=1770803947"
  },
  {
    "id": 1058,
    "title": "Need for Speed™ Payback",
    "category": "EA",
    "url": "https://crackworld.top/fixes/need-for-speed-payback",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1262580/header.jpg"
  },
  {
    "id": 1059,
    "title": "Command & Conquer Red Alert 3",
    "category": "EA",
    "url": "https://crackworld.top/fixes/command-conquer-red-alert-3",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/17480/header.jpg"
  },
  {
    "id": 1060,
    "title": "Megaloot",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/megaloot",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2440380/header.jpg"
  },
  {
    "id": 1061,
    "title": "Walk of Life",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/walk-of-life",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1910150/header.jpg"
  },
  {
    "id": 1062,
    "title": "DragonSword Awakening",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dragonsword-awakening",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4570720/96a897e98f4472e656fbe6681191b3066cab6056/header.jpg?t=1792049718"
  },
  {
    "id": 1063,
    "title": "Castle Crashers",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/castle-crashers",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/204360/header.jpg"
  },
  {
    "id": 1064,
    "title": "Lost Skies",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/lost-skies",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1931180/header.jpg"
  },
  {
    "id": 1065,
    "title": "System Shock 2 25th Anniversary Remaster",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/system-shock-2-25th-anniversary-remaster",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/866570/header.jpg"
  },
  {
    "id": 1066,
    "title": "Deadly Delivery",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/deadly-delivery",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3743090/e3ddc7d565adf54a34f7e5696e6f5dd7ce6dbd73/header.jpg?t=1794567309"
  },
  {
    "id": 1067,
    "title": "Sid Meiers Civilization V",
    "category": "All",
    "url": "https://crackworld.top/fixes/sid-meiers-civilization-v",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/8930/header.jpg"
  },
  {
    "id": 1068,
    "title": "Middle-earth™: Shadow of War™",
    "category": "All",
    "url": "https://crackworld.top/fixes/middle-earth-shadow-of-war",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/356190/header.jpg"
  },
  {
    "id": 1069,
    "title": "Pizza Bandit",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/pizza-bandit",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2475010/header.jpg"
  },
  {
    "id": 1070,
    "title": "Fizz Quiz",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/fizz-quiz",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1470740/header.jpg"
  },
  {
    "id": 1071,
    "title": "Crime Boss Rockay City",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/crime-boss-rockay-city",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2933080/header.jpg"
  },
  {
    "id": 1072,
    "title": "Unrailed 2 Back on Track",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/unrailed-2-back-on-track",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2211170/header.jpg"
  },
  {
    "id": 1073,
    "title": "Flock Around",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/flock-around",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3618030/1410006e42c90a7929161a991ff087ecc85f6aa7/header.jpg?t=1793290283"
  },
  {
    "id": 1074,
    "title": "Crysis 2 Remastered",
    "category": "EA",
    "url": "https://crackworld.top/fixes/crysis-2-remastered",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2096600/header.jpg"
  },
  {
    "id": 1075,
    "title": "Shift At Midnight",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/shift-at-midnight",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3722330/759ecea2ffe1ad3819aefdda79e265b8b332bf8f/header.jpg?t=1793103951"
  },
  {
    "id": 1076,
    "title": "Demon Slayer Kimetsu no Yaiba The Hinokami Chronicles",
    "category": "All",
    "url": "https://crackworld.top/fixes/demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1490890/header.jpg"
  },
  {
    "id": 1077,
    "title": "Far Cry 2",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/far-cry-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/19900/header.jpg"
  },
  {
    "id": 1078,
    "title": "Call of Duty: Modern Warfare II",
    "category": "All",
    "url": "https://crackworld.top/fixes/call-of-duty-modern-warfare-ii",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3595230/ce4d5e53b36cb9d3c4309d1df72bf8663bbbc7ef/header.jpg?t=1778886532"
  },
  {
    "id": 1079,
    "title": "CarX Street",
    "category": "All",
    "url": "https://crackworld.top/fixes/carx-street",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1114150/header.jpg"
  },
  {
    "id": 1080,
    "title": "Firefighting Simulator Ignite",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/firefighting-simulator-ignite",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1669480/header.jpg"
  },
  {
    "id": 1081,
    "title": "The Planet Crafter",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-planet-crafter",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1284190/header.jpg"
  },
  {
    "id": 1082,
    "title": "Car Service Together",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/car-service-together",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3501070/header.jpg"
  },
  {
    "id": 1083,
    "title": "Rogue Point",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/rogue-point",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1843840/header.jpg"
  },
  {
    "id": 1084,
    "title": "delivery pals",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/delivery-pals",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3237570/header.jpg"
  },
  {
    "id": 1085,
    "title": "Pioneers of Pagonia",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/pioneers-of-pagonia",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2155180/header.jpg"
  },
  {
    "id": 1086,
    "title": "Unicycle Together",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/unicycle-together",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4286040/7ba93ad19f40a39830d696385ce3f21a44d87e3a/header.jpg?t=1788098907"
  },
  {
    "id": 1087,
    "title": "Wargame Red Dragon",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/wargame-red-dragon",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/251060/header.jpg"
  },
  {
    "id": 1088,
    "title": "Waterpark Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/waterpark-simulator",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3293260/d777414ab68027db0399200587fd78d409cc9602/header_alt_assets_5.jpg?t=1794602657"
  },
  {
    "id": 1089,
    "title": "Battlefield™ 1",
    "category": "EA",
    "url": "https://crackworld.top/fixes/battlefield-1",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1238840/header.jpg"
  },
  {
    "id": 1090,
    "title": "WE ARE SO DEAD",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/we-are-so-dead",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4796830/d0f51a2e0497ac208b2604562779b648015eb7f3/header.jpg?t=1787326438"
  },
  {
    "id": 1091,
    "title": "Split Fiction",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/split-fiction",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2001120/header.jpg"
  },
  {
    "id": 1092,
    "title": "Red Dead Redemption 2",
    "category": "Rockstar",
    "url": "https://crackworld.top/fixes/red-dead-redemption-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg"
  },
  {
    "id": 1093,
    "title": "Driver San Francisco",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/driver-san-francisco",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/33440/header.jpg"
  },
  {
    "id": 1094,
    "title": "Battle Talent",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/battle-talent",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1331510/header.jpg"
  },
  {
    "id": 1095,
    "title": "Door Kickers 2 Task Force North",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/door-kickers-2-task-force-north",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1239080/header.jpg"
  },
  {
    "id": 1096,
    "title": "MotoGP 25",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/motogp-25",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3077390/header.jpg"
  },
  {
    "id": 1097,
    "title": "Jujutsu Kaisen Cursed Clash",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/jujutsu-kaisen-cursed-clash",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1877020/header.jpg"
  },
  {
    "id": 1098,
    "title": "USAC Code Breach",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/usac-code-breach",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1886070/header.jpg"
  },
  {
    "id": 1099,
    "title": "Call of Duty: Modern Warfare 3 (2011)",
    "category": "All",
    "url": "https://crackworld.top/fixes/call-of-duty-modern-warfare-3-2011",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/42680/header.jpg"
  },
  {
    "id": 1100,
    "title": "Railroad Corporation 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/railroad-corporation-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1677970/header.jpg"
  },
  {
    "id": 1101,
    "title": "EA SPORTS™ FIFA 21",
    "category": "EA",
    "url": "https://crackworld.top/fixes/ea-sports-fifa-21",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1313860/header.jpg"
  },
  {
    "id": 1102,
    "title": "How to Train Your Cock",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/how-to-train-your-cock",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3673060/3c70157695f083806dcc7ba0d54a5b7ba3a9a40b/header.jpg?t=1789497863"
  },
  {
    "id": 1103,
    "title": "Bureau of Contacts",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bureau-of-contacts",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2840210/header.jpg"
  },
  {
    "id": 1104,
    "title": "Battle Realms Zen Edition",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/battle-realms-zen-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1025600/header.jpg"
  },
  {
    "id": 1105,
    "title": "Dead or Alive 6 Last Round",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dead-or-alive-6-last-round",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4144680/e94fe79e24de4c1488f1967f13144c6df66b5b51/header.jpg?t=1793840728"
  },
  {
    "id": 1106,
    "title": "Barony",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/barony",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/371970/header.jpg"
  },
  {
    "id": 1107,
    "title": "Watch Dogs 2",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/watch-dogs-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/447040/header.jpg"
  },
  {
    "id": 1108,
    "title": "Pacify",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/pacify",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/967050/header.jpg"
  },
  {
    "id": 1109,
    "title": "Godsworn",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/godsworn",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1328990/header.jpg"
  },
  {
    "id": 1110,
    "title": "KitHack Model Club",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/kithack-model-club",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2107090/header.jpg"
  },
  {
    "id": 1111,
    "title": "Goblin Company",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/goblin-company",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3864450/070bb3c075bf777d70607023befa9ff1fc375e96/header.jpg?t=1787238326"
  },
  {
    "id": 1112,
    "title": "Mars First Logistics",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/mars-first-logistics",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1532200/header.jpg"
  },
  {
    "id": 1113,
    "title": "Frost Survival VR",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/frost-survival-vr",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3054950/header.jpg"
  },
  {
    "id": 1114,
    "title": "Fraymakers",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/fraymakers",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1420350/header.jpg"
  },
  {
    "id": 1115,
    "title": "Deadpool",
    "category": "All",
    "url": "https://crackworld.top/fixes/deadpool",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/224060/header.jpg"
  },
  {
    "id": 1116,
    "title": "Watch Dogs: Legion",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/watch-dogs-legion",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2239550/header.jpg"
  },
  {
    "id": 1117,
    "title": "Ultimate Chicken Horse",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ultimate-chicken-horse",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/386940/header.jpg"
  },
  {
    "id": 1118,
    "title": "Ship of Fools",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ship-of-fools",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1286580/header.jpg"
  },
  {
    "id": 1119,
    "title": "Paranormal Cleanup",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/paranormal-cleanup",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2197890/header.jpg"
  },
  {
    "id": 1120,
    "title": "F.E.A.R. 2",
    "category": "All",
    "url": "https://crackworld.top/fixes/fear-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/16450/header.jpg"
  },
  {
    "id": 1121,
    "title": "Mafia II (Classic)",
    "category": "All",
    "url": "https://crackworld.top/fixes/mafia-ii-classic",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/50130/header.jpg"
  },
  {
    "id": 1122,
    "title": "2 Fights in 2 Tight Spaces",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/2-fights-in-2-tight-spaces",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3734890/68eb814dd8f35fa8b4a687a936e4777d3f491077/header.jpg?t=1781021618"
  },
  {
    "id": 1123,
    "title": "Mafia: The Old Country",
    "category": "All",
    "url": "https://crackworld.top/fixes/mafia-the-old-country",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1941540/header.jpg"
  },
  {
    "id": 1124,
    "title": "Marvel Ultimate Alliance 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/marvel-ultimate-alliance-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/433320/header.jpg"
  },
  {
    "id": 1125,
    "title": "Tram Simulator Urban Transit",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/tram-simulator-urban-transit",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2546690/header.jpg"
  },
  {
    "id": 1126,
    "title": "Trine 2 Complete Story",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/trine-2-complete-story",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/35720/header.jpg"
  },
  {
    "id": 1127,
    "title": "Teardown",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/teardown",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1167630/header.jpg"
  },
  {
    "id": 1128,
    "title": "DEATHLOOP",
    "category": "All",
    "url": "https://crackworld.top/fixes/deathloop",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1252330/header.jpg"
  },
  {
    "id": 1129,
    "title": "SAMURAI WARRIORS 4 DX",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/samurai-warriors-4-dx",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2719200/header.jpg"
  },
  {
    "id": 1130,
    "title": "What The Fog",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/what-the-fog",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2139020/header.jpg"
  },
  {
    "id": 1131,
    "title": "Faery Legends of Avalon",
    "category": "All",
    "url": "https://crackworld.top/fixes/faery-legends-of-avalon",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/303790/header.jpg"
  },
  {
    "id": 1132,
    "title": "Dark Souls II Scholar of the First Sin",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dark-souls-ii-scholar-of-the-first-sin",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/335300/header.jpg"
  },
  {
    "id": 1133,
    "title": "Anomaly Warzone Earth",
    "category": "All",
    "url": "https://crackworld.top/fixes/anomaly-warzone-earth",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/91200/header.jpg"
  },
  {
    "id": 1134,
    "title": "Grocery Store Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/grocery-store-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2961880/header.jpg"
  },
  {
    "id": 1135,
    "title": "Gunfire Reborn",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/gunfire-reborn",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1217060/header.jpg"
  },
  {
    "id": 1136,
    "title": "Invincible VS",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/invincible-vs",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2353060/8cd8eff0576c0503650c611cd0ef76faf905d13d/header.jpg?t=1791844002"
  },
  {
    "id": 1137,
    "title": "DARK SOULS REMASTERED",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dark-souls-remastered",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/570940/header.jpg"
  },
  {
    "id": 1138,
    "title": "Dome Keeper",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dome-keeper",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1637320/header.jpg"
  },
  {
    "id": 1139,
    "title": "MEGATON MUSASHI W WIRED",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/megaton-musashi-w-wired",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2450450/header.jpg"
  },
  {
    "id": 1140,
    "title": "Rise of the Ronin",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/rise-of-the-ronin",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1340990/header.jpg"
  },
  {
    "id": 1141,
    "title": "Airport Security Sucks!",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/airport-security-sucks",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4285690/83c3f74745f699f49074f3e37b3795ded1ecc841/header.jpg?t=1790047051"
  },
  {
    "id": 1142,
    "title": "Football Manager 2011",
    "category": "All",
    "url": "https://crackworld.top/fixes/football-manager-2011",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/34220/header.jpg"
  },
  {
    "id": 1143,
    "title": "Fireworks Mania",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/fireworks-mania",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1079260/header.jpg"
  },
  {
    "id": 1144,
    "title": "Assassin's Creed Mirage",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-mirage",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3035570/header.jpg"
  },
  {
    "id": 1145,
    "title": "MARVEL Cosmic Invasion",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/marvel-cosmic-invasion",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2753970/84079d361d6ca4d1298066a5f5d2355de4be5d68/header_alt_assets_2.jpg?t=1794326152"
  },
  {
    "id": 1146,
    "title": "Backpack Battles",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/backpack-battles",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2427700/header.jpg"
  },
  {
    "id": 1147,
    "title": "Warhammer 40000 Darktide",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/warhammer-40000-darktide",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1361210/header.jpg"
  },
  {
    "id": 1148,
    "title": "Fears to Fathom Scratch Creek",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/fears-to-fathom-scratch-creek",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4121170/803663dce78da494e9d061cf6652ade566b96331/header.jpg?t=1794511469"
  },
  {
    "id": 1149,
    "title": "Assassin's Creed Unity",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/assassins-creed-unity",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/289650/header.jpg"
  },
  {
    "id": 1150,
    "title": "S.E.M.I. - Side Effects May Include",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/semi-side-effects-may-include",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3957560/f21928e252cb7cf797dda931b49e48a6c51b7b9c/header.jpg?t=1769777569"
  },
  {
    "id": 1151,
    "title": "Absolum",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/absolum",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1904480/header.jpg"
  },
  {
    "id": 1152,
    "title": "Content Warning",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/content-warning",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2881650/header.jpg"
  },
  {
    "id": 1153,
    "title": "Salt 2 Shores of Gold",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/salt-2-shores-of-gold",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1574900/header.jpg"
  },
  {
    "id": 1154,
    "title": "Gas Station Manager",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/gas-station-manager",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3044440/header.jpg"
  },
  {
    "id": 1155,
    "title": "Company of Heroes 3",
    "category": "All",
    "url": "https://crackworld.top/fixes/company-of-heroes-3",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1677280/header.jpg"
  },
  {
    "id": 1156,
    "title": "Far Cry 4",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/far-cry-4",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/298110/header.jpg"
  },
  {
    "id": 1157,
    "title": "Far Cry 3 Blood Dragon",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/far-cry-3-blood-dragon",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/233270/header.jpg"
  },
  {
    "id": 1158,
    "title": "Valkyria Chronicles 4 Complete Edition",
    "category": "All",
    "url": "https://crackworld.top/fixes/valkyria-chronicles-4-complete-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/790820/header.jpg"
  },
  {
    "id": 1159,
    "title": "Ark Nova",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ark-nova",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2438990/header.jpg"
  },
  {
    "id": 1160,
    "title": "Nobody Sleeps Tonight",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/nobody-sleeps-tonight",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2732610/header.jpg"
  },
  {
    "id": 1161,
    "title": "Tobacco Shop Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/tobacco-shop-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3211680/header.jpg"
  },
  {
    "id": 1162,
    "title": "Twisted Party",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/twisted-party",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4332910/c0209230255b18cbd332109edf3b13bb16b4ebb8/header.jpg?t=1787670033"
  },
  {
    "id": 1163,
    "title": "Far Cry Primal",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/far-cry-primal",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/371660/header.jpg"
  },
  {
    "id": 1164,
    "title": "Gotham Knights",
    "category": "All",
    "url": "https://crackworld.top/fixes/gotham-knights",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1496790/header.jpg"
  },
  {
    "id": 1165,
    "title": "Sephiria",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/sephiria",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2436940/header.jpg"
  },
  {
    "id": 1166,
    "title": "R.U.S.E.",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ruse",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/21970/header.jpg"
  },
  {
    "id": 1167,
    "title": "Oblin Party",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/oblin-party",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2643290/header.jpg"
  },
  {
    "id": 1168,
    "title": "Tank Squad",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/tank-squad",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1498130/header.jpg"
  },
  {
    "id": 1169,
    "title": "Slackers Carts of Glory",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/slackers-carts-of-glory",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2354000/header.jpg"
  },
  {
    "id": 1170,
    "title": "LANESPLIT",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/lanesplit",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3278310/header.jpg"
  },
  {
    "id": 1171,
    "title": "MOGGED Looksmaxx or Die",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/mogged-looksmaxx-or-die",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4917440/fa8c5b270baa4d82503897806748376f91e0a340/header.jpg?t=1791114490"
  },
  {
    "id": 1172,
    "title": "Bellwright",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bellwright",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1812450/header.jpg"
  },
  {
    "id": 1173,
    "title": "Werewolf Party",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/werewolf-party",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2920510/header.jpg"
  },
  {
    "id": 1174,
    "title": "Dreadway",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dreadway",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3215820/header.jpg"
  },
  {
    "id": 1175,
    "title": "Football Manager 2019",
    "category": "All",
    "url": "https://crackworld.top/fixes/football-manager-2019",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/872790/header.jpg"
  },
  {
    "id": 1176,
    "title": "Sports Bar VR",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/sports-bar-vr",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/269170/header.jpg"
  },
  {
    "id": 1177,
    "title": "Beyond Sandbox",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/beyond-sandbox",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3385970/header.jpg"
  },
  {
    "id": 1178,
    "title": "Handball 17",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/handball-17",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/526980/header.jpg"
  },
  {
    "id": 1179,
    "title": "FORCED Slightly Better Edition",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/forced-slightly-better-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/249990/header.jpg"
  },
  {
    "id": 1180,
    "title": "Overthrown",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/overthrown",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1133500/header.jpg"
  },
  {
    "id": 1181,
    "title": "GONE Fishing",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/gone-fishing",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3645890/ccf41cdf893f47a5a692f05e2344df5e2fdeb3d9/header_alt_assets_0.jpg?t=1792492815"
  },
  {
    "id": 1182,
    "title": "Immortals Fenyx Rising",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/immortals-fenyx-rising",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2221920/header.jpg"
  },
  {
    "id": 1183,
    "title": "Escape Simulator 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/escape-simulator-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2879840/header.jpg"
  },
  {
    "id": 1184,
    "title": "EverRail",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/everrail",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4134600/92e87e444fb654a6f0428cd4c8d634f08b39629f/header.jpg?t=1792776336"
  },
  {
    "id": 1185,
    "title": "CyberCorp",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/cybercorp",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1116170/header.jpg"
  },
  {
    "id": 1186,
    "title": "Altarium",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/altarium",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2524700/header.jpg"
  },
  {
    "id": 1187,
    "title": "Until Dawn™",
    "category": "Sony",
    "url": "https://crackworld.top/fixes/until-dawn",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2172010/header.jpg"
  },
  {
    "id": 1188,
    "title": "LEGO Batman: Legacy of the Dark Knight",
    "category": "All",
    "url": "https://crackworld.top/fixes/lego-batman-legacy-of-the-dark-knight",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215200/a07a9a6c0c9c1225f5b260b4f29fe40e6f099f6b/header.jpg?t=1789746326"
  },
  {
    "id": 1189,
    "title": "Backseat Drivers",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/backseat-drivers",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3558400/2dc867af11f5ed2794aa5566ff9f5a0cb8efd978/header.jpg?t=1773298919"
  },
  {
    "id": 1190,
    "title": "F1 2018",
    "category": "All",
    "url": "https://crackworld.top/fixes/f1-2018",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/927330/header.jpg"
  },
  {
    "id": 1191,
    "title": "Alchemist Journey of the Soul",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/alchemist-journey-of-the-soul",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3115240/header.jpg"
  },
  {
    "id": 1192,
    "title": "Monster Mop Up",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/monster-mop-up",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2451310/header.jpg"
  },
  {
    "id": 1193,
    "title": "Dungeon Looter",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dungeon-looter",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1228320/header.jpg"
  },
  {
    "id": 1194,
    "title": "Disney Dreamlight Valley",
    "category": "All",
    "url": "https://crackworld.top/fixes/disney-dreamlight-valley",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1401590/header.jpg"
  },
  {
    "id": 1195,
    "title": "Tainted Grail The Fall of Avalon",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/tainted-grail-the-fall-of-avalon",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1466060/header.jpg"
  },
  {
    "id": 1196,
    "title": "MIMESIS",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/mimesis",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2827200/header.jpg"
  },
  {
    "id": 1197,
    "title": "Permafrost",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/permafrost",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2254990/header.jpg"
  },
  {
    "id": 1198,
    "title": "Emergency Call 112 The Fire Fighting Simulation 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/emergency-call-112-the-fire-fighting-simulation-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/785770/header.jpg"
  },
  {
    "id": 1199,
    "title": "BodyRecords",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/bodyrecords",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3232040/header.jpg"
  },
  {
    "id": 1200,
    "title": "Far Far West",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/far-far-west",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3124540/2d55092d45b1784dcc7cb0ba6ad3f919e62eb5d0/header.jpg?t=1792748527"
  },
  {
    "id": 1201,
    "title": "Cricket 22",
    "category": "All",
    "url": "https://crackworld.top/fixes/cricket-22",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1701380/header.jpg"
  },
  {
    "id": 1202,
    "title": "Judgment",
    "category": "All",
    "url": "https://crackworld.top/fixes/judgment",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2058180/header.jpg"
  },
  {
    "id": 1203,
    "title": "MindsEye",
    "category": "All",
    "url": "https://crackworld.top/fixes/mindseye",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3265250/header.jpg"
  },
  {
    "id": 1204,
    "title": "Warhammer 40,000 Space Marine Master Crafted Edition",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/warhammer-40-000-space-marine-master-crafted-edition",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3169520/02f0f25e1fb2d909a2a6d394057b3b2a5518cf45/header.jpg?t=1783505814"
  },
  {
    "id": 1205,
    "title": "Jump Space",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/jump-space",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1757300/header.jpg"
  },
  {
    "id": 1206,
    "title": "Sunderfolk",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/sunderfolk",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2414270/header.jpg"
  },
  {
    "id": 1207,
    "title": "Immortals of Aveum™",
    "category": "EA",
    "url": "https://crackworld.top/fixes/immortals-of-aveum",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2009100/header.jpg"
  },
  {
    "id": 1208,
    "title": "Plants vs Zombies Battle for Neighborville",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/plants-vs-zombies-battle-for-neighborville",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1262240/header.jpg"
  },
  {
    "id": 1209,
    "title": "Fruit Ninja VR 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/fruit-ninja-vr-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1575520/header.jpg"
  },
  {
    "id": 1210,
    "title": "Across the Obelisk",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/across-the-obelisk",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1385380/header.jpg"
  },
  {
    "id": 1211,
    "title": "Alone in the Dark (2008)",
    "category": "All",
    "url": "https://crackworld.top/fixes/alone-in-the-dark-2008",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1310410/header.jpg"
  },
  {
    "id": 1212,
    "title": "A Smithing Game",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/a-smithing-game",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4541460/836221e9de93481656f9a37eba5e8a57d1716ceb/header.jpg?t=1777626703"
  },
  {
    "id": 1213,
    "title": "Coridden",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/coridden",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1656930/header.jpg"
  },
  {
    "id": 1214,
    "title": "EXFIL",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/exfil",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/860020/header.jpg"
  },
  {
    "id": 1215,
    "title": "Far Cry 5",
    "category": "Ubisoft",
    "url": "https://crackworld.top/fixes/far-cry-5",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/552520/header.jpg"
  },
  {
    "id": 1216,
    "title": "Command & Conquer: Renegade",
    "category": "EA",
    "url": "https://crackworld.top/fixes/command-conquer-renegade",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2229890/header.jpg"
  },
  {
    "id": 1217,
    "title": "Call of the Wild The Angler",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/call-of-the-wild-the-angler",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1408610/header.jpg"
  },
  {
    "id": 1218,
    "title": "Rotwood",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/rotwood",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2015270/header.jpg"
  },
  {
    "id": 1219,
    "title": "Ars Notoria",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/ars-notoria",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2074620/header.jpg"
  },
  {
    "id": 1220,
    "title": "Dead Island 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dead-island-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/934700/header.jpg"
  },
  {
    "id": 1221,
    "title": "Human Fall Flat VR",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/human-fall-flat-vr",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2777220/header.jpg"
  },
  {
    "id": 1222,
    "title": "Motor Town Behind The Wheel",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/motor-town-behind-the-wheel",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1369670/header.jpg"
  },
  {
    "id": 1223,
    "title": "PANICORE",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/panicore",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2695940/header.jpg"
  },
  {
    "id": 1224,
    "title": "The Black Pool",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/the-black-pool",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2189670/header.jpg"
  },
  {
    "id": 1225,
    "title": "Groundwork Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/groundwork-simulator",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/5306540/64674a7e52a9ea471b11731fb65425370550c032/header.jpg?t=1793005696"
  },
  {
    "id": 1226,
    "title": "Risk of Rain 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/risk-of-rain-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/632360/header.jpg"
  },
  {
    "id": 1227,
    "title": "Store Wars Multiplayer Shop Simulator",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/store-wars-multiplayer-shop-simulator",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3213600/header.jpg"
  },
  {
    "id": 1228,
    "title": "Pummel Party",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/pummel-party",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/880940/header.jpg"
  },
  {
    "id": 1229,
    "title": "Shady Job",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/shady-job",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4190710/c467f0b9feacd07f139cbfe7a9ea71979353c006/header.jpg?t=1789049810"
  },
  {
    "id": 1230,
    "title": "MechWarrior 5 Mercenaries",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/mechwarrior-5-mercenaries",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/784080/header.jpg"
  },
  {
    "id": 1231,
    "title": "Dragon's Dogma 2",
    "category": "Capcom",
    "url": "https://crackworld.top/fixes/dragons-dogma-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2054970/header.jpg"
  },
  {
    "id": 1232,
    "title": "Knights End",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/knights-end",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4204530/68a811992e8885deec838866938b5731ea21f4b4/header.jpg?t=1793328957"
  },
  {
    "id": 1233,
    "title": "Neighbors Suburban Warfare",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/neighbors-suburban-warfare",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1732430/header.jpg"
  },
  {
    "id": 1234,
    "title": "Battlefield 6",
    "category": "EA",
    "url": "https://crackworld.top/fixes/battlefield-6",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2807960/header.jpg"
  },
  {
    "id": 1235,
    "title": "Last Man Sitting",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/last-man-sitting",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/774291/header.jpg"
  },
  {
    "id": 1236,
    "title": "Hired 2 Die",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/hired-2-die",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1729140/header.jpg"
  },
  {
    "id": 1237,
    "title": "We Escaped a Twisted Game",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/we-escaped-a-twisted-game",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2524930/header.jpg"
  },
  {
    "id": 1238,
    "title": "GRID",
    "category": "All",
    "url": "https://crackworld.top/fixes/grid",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1307710/header.jpg"
  },
  {
    "id": 1239,
    "title": "Deus Ex: Game of the Year Edition",
    "category": "All",
    "url": "https://crackworld.top/fixes/deus-ex-game-of-the-year-edition",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/6910/header.jpg"
  },
  {
    "id": 1240,
    "title": "Knock Em Out",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/knock-em-out",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2192900/header.jpg"
  },
  {
    "id": 1241,
    "title": "Dino Party",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/dino-party",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1939390/header.jpg"
  },
  {
    "id": 1242,
    "title": "Forsworn",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/forsworn",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3560360/b5bbfe4a7ee3075f4c8dcfb7a4f7ff8f5453c1cc/header_alt_assets_1.jpg?t=1794503295"
  },
  {
    "id": 1243,
    "title": "We Gotta Go",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/we-gotta-go",
    "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3967470/3387eeb71a61ecb79ad07cfd5710ae28a2bdd1f8/header.jpg?t=1778866613"
  },
  {
    "id": 1244,
    "title": "Gatekeeper",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/gatekeeper",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2106670/header.jpg"
  },
  {
    "id": 1245,
    "title": "Nested Lands",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/nested-lands",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2553040/header.jpg"
  },
  {
    "id": 1246,
    "title": "Sniper Elite 4",
    "category": "All",
    "url": "https://crackworld.top/fixes/sniper-elite-4",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/312660/header.jpg"
  },
  {
    "id": 1247,
    "title": "Tower Networking Inc",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/tower-networking-inc",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2939600/header.jpg"
  },
  {
    "id": 1248,
    "title": "Wigged Out",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/wigged-out",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1176060/header.jpg"
  },
  {
    "id": 1249,
    "title": "DiRT 3",
    "category": "All",
    "url": "https://crackworld.top/fixes/dirt-3",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/678736/header.jpg"
  },
  {
    "id": 1250,
    "title": "Kill It With Fire 2",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/kill-it-with-fire-2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2357000/header.jpg"
  },
  {
    "id": 1251,
    "title": "Feather Party",
    "category": "Online Fix",
    "url": "https://crackworld.top/fixes/feather-party",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2300230/header.jpg"
  }
];
