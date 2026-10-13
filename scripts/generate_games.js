import fs from 'fs';
import path from 'path';

// High-quality verified game cover imagery pools from Unsplash curated for gaming aesthetics
const IMAGES = {
  scifi: [
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
  ],
  action: [
    'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop',
  ],
  racing: [
    'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop',
  ],
  shooter: [
    'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
  ],
  horror: [
    'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
  ],
  sports: [
    'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1553778263-73a86b6909d9?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop',
  ]
};

function pickImg(category, idx) {
  if (category === 'racing-sports') {
    const list = idx % 2 === 0 ? IMAGES.racing : IMAGES.sports;
    return list[idx % list.length];
  }
  if (category === 'horror-survival') {
    return IMAGES.horror[idx % IMAGES.horror.length];
  }
  if (category === 'shooter') {
    return IMAGES.shooter[idx % IMAGES.shooter.length];
  }
  if (category === 'rpg-adventure') {
    return IMAGES.scifi[idx % IMAGES.scifi.length];
  }
  return IMAGES.action[idx % IMAGES.action.length];
}

// Master list of games with realistic data
const games = [];

// 1. Highlighted & specifically requested AAA games
const TOP_HEADLINERS = [
  {
    title: 'Resident Evil 9: Apocalypse (RE9)',
    genre: 'Survival Horror / Action',
    category: 'horror-survival',
    releaseYear: 2025,
    popular: true,
    description: 'The anticipated next chapter in Capcom legendary survival horror saga with next-gen RE Engine graphics and horrifying biological threats.',
    aliases: ['re9', 're 9', 'reix', 're ix', 'resident evil 9', 'resident evil ix', 'biohazard 9', 're', 'biohazard'],
    franchise: 'Resident Evil',
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Pragmata (Capcom Sci-Fi Adventure)',
    genre: 'Sci-Fi / Action Adventure',
    category: 'action',
    releaseYear: 2025,
    popular: true,
    description: 'Capcom next-gen dystopian lunar adventure featuring an astronaut and a mysterious little android girl in a zero-gravity reality.',
    aliases: ['pragmata', 'capcom pragmata', 'prag', 'lunar pragmata'],
    franchise: 'Pragmata',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: '007 First Light (Project 007)',
    genre: 'Stealth / Action / Espionage',
    category: 'action',
    releaseYear: 2025,
    popular: true,
    description: 'IO Interactive origin story of the world most famous secret agent James Bond with signature stealth, espionage, gadgets, and cinema gunplay.',
    aliases: ['007', '007 first light', 'first light', 'james bond', 'bond', 'project 007', '007 game', 'hitman 007'],
    franchise: 'James Bond 007',
    coverImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Forza 6 (Forza Horizon 6 / Motorsport 6)',
    genre: 'Open World Racing / Simulation',
    category: 'racing-sports',
    releaseYear: 2025,
    popular: true,
    description: 'The pinnacle of open world driving with dynamic weather, ray tracing, 900+ exotic supercars, and ultra 4K physics simulation.',
    aliases: ['forza 6', 'forza6', 'forza motorsport 6', 'forza horizon 6', 'fh6', 'fm6', 'fh 6', 'fm 6', 'forza'],
    franchise: 'Forza',
    coverImage: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Grand Theft Auto VI (GTA 6)',
    genre: 'Open World / Crime Action',
    category: 'open-world',
    releaseYear: 2025,
    popular: true,
    description: 'Return to neon-soaked Vice City and Leonida with Lucia and Jason in Rockstar most ambitious open-world crime epic.',
    aliases: ['gta 6', 'gta6', 'gta vi', 'gtavi', 'grand theft auto 6', 'vice city 6', 'gta'],
    franchise: 'Grand Theft Auto',
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Black Myth: Wukong (Digital Deluxe)',
    genre: 'Action RPG / Souls-like',
    category: 'rpg-adventure',
    releaseYear: 2024,
    popular: true,
    description: 'Embark on a Chinese myth Journey to the West as the Destined One with Unreal Engine 5 next-gen visuals, staff martial arts, and spells.',
    aliases: ['bmw', 'wukong', 'black myth', 'black myth wukong', 'monkey king', 'sun wukong'],
    franchise: 'Black Myth',
    coverImage: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Monster Hunter Wilds',
    genre: 'Hunting Action RPG',
    category: 'rpg-adventure',
    releaseYear: 2025,
    popular: true,
    description: 'Dynamic living ecosystems, seamless transitions, ferocious apex beasts, and thrilling co-op hunts across the Forbidden Lands.',
    aliases: ['mhw', 'mh wilds', 'wilds', 'monster hunter wilds', 'monster hunter'],
    franchise: 'Monster Hunter',
    coverImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Death Stranding 2: On The Beach',
    genre: 'Sci-Fi Action / Exploration',
    category: 'rpg-adventure',
    releaseYear: 2025,
    popular: true,
    description: 'Hideo Kojima cinematic tour de force continuing Sam Bridges journey across unfamiliar continents with striking technological depth.',
    aliases: ['ds2', 'ds 2', 'death stranding 2', 'kojima', 'death stranding'],
    franchise: 'Death Stranding',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: "Marvel's Wolverine",
    genre: 'Superhero Action / Combat',
    category: 'action',
    releaseYear: 2025,
    popular: true,
    description: 'Insomniac Games visceral, mature action title capturing Logan adamantium claws, healing factor, and feral berserker combat.',
    aliases: ['wolverine', 'marvel wolverine', 'logan', 'xmen wolverine'],
    franchise: 'Marvel',
    coverImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Ghost of Yōtei (Ghost of Tsushima Sequel)',
    genre: 'Open World Samurai Action',
    category: 'action',
    releaseYear: 2025,
    popular: true,
    description: 'Sucker Punch sequel set in 1603 around Mount Yōtei in feudal Ezo, introducing new protagonist Atsu, shamisen, and dual swords.',
    aliases: ['goy', 'ghost of yotei', 'ghost of tsushima 2', 'yotei', 'ghost 2'],
    franchise: 'Ghost of Tsushima',
    coverImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'DOOM: The Dark Ages',
    genre: 'Fast-Paced FPS / Dark Fantasy',
    category: 'shooter',
    releaseYear: 2025,
    popular: true,
    description: 'Prequel origin of the DOOM Slayer cinematic fury with shield saw, flail, dragon mounts, and heavy metal medieval carnage.',
    aliases: ['doom', 'doom dark ages', 'doom the dark ages', 'doom 3', 'slayer'],
    franchise: 'DOOM',
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Kingdom Come: Deliverance II',
    genre: 'Historical Action RPG',
    category: 'rpg-adventure',
    releaseYear: 2025,
    popular: true,
    description: 'Henry of Skalitz returns in 15th-century Bohemia across Kuttenberg with unmatched authentic medieval immersion and swordplay.',
    aliases: ['kcd2', 'kcd 2', 'kingdom come 2', 'kingdom come deliverance 2', 'kcd'],
    franchise: 'Kingdom Come',
    coverImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Mafia: The Old Country',
    genre: 'Historical Crime / Action',
    category: 'open-world',
    releaseYear: 2025,
    popular: true,
    description: 'Uncover the brutal origins of organized crime in 1900s Sicily in this gritty, cinematic narrative action game.',
    aliases: ['mafia', 'mafia old country', 'mafia 4', 'mafia the old country'],
    franchise: 'Mafia',
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Dragon Ball: Sparking! ZERO',
    genre: 'Anime Fighting / 3D Arena',
    category: 'action',
    releaseYear: 2024,
    popular: true,
    description: 'The historic revival of the Budokai Tenkaichi franchise with 182+ fighters, earth-shattering ki attacks, and destructible environments.',
    aliases: ['dbz', 'sparking zero', 'tenkaichi', 'dragon ball sparking zero', 'dragon ball', 'budokai tenkaichi'],
    franchise: 'Dragon Ball',
    coverImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'EA SPORTS FC 25 (FIFA 25 Ultimate)',
    genre: 'Sports / Football Simulation',
    category: 'racing-sports',
    releaseYear: 2024,
    popular: true,
    description: 'FC IQ tactical revolution, 5v5 Rush mode, 19,000+ licensed players, and authentic matchday presentation.',
    aliases: ['fc25', 'fc 25', 'fifa 25', 'fifa', 'ea sports fc 25', 'ea fc 25', 'ea fc'],
    franchise: 'EA Sports FC / FIFA',
    coverImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Call of Duty: Black Ops 6',
    genre: 'First-Person Shooter',
    category: 'shooter',
    releaseYear: 2024,
    popular: true,
    description: 'Omnimovement tactical freedom, mind-bending spy thriller campaign set in the Gulf War era, and round-based Zombies.',
    aliases: ['bo6', 'bo 6', 'cod bo6', 'cod', 'black ops 6', 'call of duty black ops 6'],
    franchise: 'Call of Duty',
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'God of War Ragnarök (PC Enhanced)',
    genre: 'Action / Mythological Adventure',
    category: 'action',
    releaseYear: 2024,
    popular: true,
    description: 'Kratos and Atreus brave the Nine Realms against Thor and Odin with unlocked framerates, widescreen 21:9 support, and Valhalla DLC.',
    aliases: ['gow', 'gowr', 'gow ragnarok', 'god of war ragnarok', 'kratos', 'ragnarok'],
    franchise: 'God of War',
    coverImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: "Marvel's Spider-Man 2 (PC Edition)",
    genre: 'Superhero / Action Adventure',
    category: 'action',
    releaseYear: 2024,
    popular: true,
    description: 'Play as both Peter Parker and Miles Morales fighting Venom and Kraven the Hunter across expanded Marvel NYC with web wings.',
    aliases: ['sm2', 'sm 2', 'spiderman 2', 'spider man 2', 'marvel spiderman 2', 'venom'],
    franchise: 'Spider-Man',
    coverImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Silent Hill 2 (Remake Deluxe)',
    genre: 'Psychological Survival Horror',
    category: 'horror-survival',
    releaseYear: 2024,
    popular: true,
    description: 'Bloober Team and Konami chilling modern recreation of James Sunderland search for Mary in the foggy nightmare of Silent Hill.',
    aliases: ['sh2', 'sh 2', 'silent hill 2', 'silent hill 2 remake', 'silent hill', 'pyramid head'],
    franchise: 'Silent Hill',
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Elden Ring: Shadow of the Erdtree',
    genre: 'Action RPG / Dark Fantasy',
    category: 'rpg-adventure',
    releaseYear: 2024,
    popular: true,
    description: 'FromSoftware epic GOTY expansion across the Realm of Shadow following Miquella footprints with 100+ weapons and brutal bosses.',
    aliases: ['er', 'elden ring', 'shadow of the erdtree', 'er sote', 'sote', 'fromsoft'],
    franchise: 'Elden Ring',
    coverImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Cyberpunk 2077: Phantom Liberty',
    genre: 'Sci-Fi Action RPG / Open World',
    category: 'rpg-adventure',
    releaseYear: 2023,
    popular: true,
    description: 'Spy-thriller adventure in Dogtown alongside Idris Elba as Solomon Reed, featuring full ray tracing Overdrive and cyberware overhaul.',
    aliases: ['cp2077', 'cp 2077', 'cyberpunk', 'cyberpunk 2077', 'phantom liberty', 'cdpr'],
    franchise: 'Cyberpunk',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Red Dead Redemption 2: Ultimate Edition',
    genre: 'Open World Western RPG',
    category: 'open-world',
    releaseYear: 2023,
    popular: true,
    description: 'Arthur Morgan and the Van der Linde gang journey across the American frontier with breathtaking photorealism and hunting.',
    aliases: ['rdr2', 'rdr 2', 'rdr', 'red dead redemption 2', 'arthur morgan', 'red dead'],
    franchise: 'Red Dead Redemption',
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Grand Theft Auto V: Premium Edition',
    genre: 'Open World / Crime Action',
    category: 'open-world',
    releaseYear: 2023,
    popular: true,
    description: 'Los Santos city adventure with complete story mode, Franklin, Michael, Trevor, DLC cars, weapons, and criminal enterprise booster.',
    aliases: ['gta', 'gtav', 'gta 5', 'gta5', 'gta v', 'grand theft auto 5', 'grand theft auto v'],
    franchise: 'Grand Theft Auto',
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Forza Horizon 5: Premium Edition',
    genre: 'Open World Racing',
    category: 'racing-sports',
    releaseYear: 2023,
    popular: true,
    description: 'Race across dynamic Mexican landscapes with 800+ real licensed supercars, Hot Wheels DLC, and Rally Adventure.',
    aliases: ['fh5', 'fh 5', 'forza 5', 'forza horizon 5', 'forza horizon', 'forza'],
    franchise: 'Forza',
    coverImage: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop'
  }
];

TOP_HEADLINERS.forEach((item, i) => {
  games.push({
    id: `game-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`,
    ...item,
    steamAvailable: true,
    includedIn399Bundle: true
  });
});

// 2. Add complete franchises and catalogs
const FRANCHISES_DATA = [
  // Resident Evil Series
  {
    franchise: 'Resident Evil',
    category: 'horror-survival',
    genre: 'Survival Horror',
    entries: [
      { name: 'Resident Evil 4 Remake (Gold Edition)', year: 2023, popular: true, aliases: ['re4', 're 4', 're4r', 'resident evil 4', 'leon kennedy'] },
      { name: 'Resident Evil Village (RE8 Gold Edition)', year: 2022, popular: true, aliases: ['re8', 're 8', 're village', 'resident evil 8', 'lady dimitrescu'] },
      { name: 'Resident Evil 7: Biohazard', year: 2021, aliases: ['re7', 're 7', 'biohazard 7', 'resident evil 7', 'ethan winters'] },
      { name: 'Resident Evil 2 Remake', year: 2022, popular: true, aliases: ['re2', 're 2', 're2r', 'resident evil 2', 'claire redfield'] },
      { name: 'Resident Evil 3 Remake', year: 2022, aliases: ['re3', 're 3', 're3r', 'resident evil 3', 'nemesis', 'jill valentine'] },
      { name: 'Resident Evil 5 Gold Edition', year: 2020, aliases: ['re5', 're 5', 'resident evil 5', 'chris redfield', 'wesker'] },
      { name: 'Resident Evil 6 Complete', year: 2019, aliases: ['re6', 're 6', 'resident evil 6'] },
      { name: 'Resident Evil HD Remaster', year: 2020, aliases: ['re1', 're 1', 're hd', 'resident evil 1'] },
      { name: 'Resident Evil 0 HD Remaster', year: 2019, aliases: ['re0', 're 0', 'resident evil zero'] },
      { name: 'Resident Evil Revelations 1 & 2 Bundle', year: 2021, aliases: ['re rev', 're revelations', 'revelations'] }
    ]
  },

  // Forza Series
  {
    franchise: 'Forza',
    category: 'racing-sports',
    genre: 'Racing / Automotive Simulation',
    entries: [
      { name: 'Forza Horizon 4: Ultimate Edition', year: 2021, popular: true, aliases: ['fh4', 'fh 4', 'forza 4', 'forza horizon 4', 'forza britain'] },
      { name: 'Forza Horizon 3: Platinum Edition', year: 2020, aliases: ['fh3', 'fh 3', 'forza 3', 'forza horizon 3', 'forza australia'] },
      { name: 'Forza Motorsport (2023 Edition)', year: 2023, popular: true, aliases: ['fm8', 'fm 8', 'forza motorsport 8', 'forza motorsport', 'fm2023'] },
      { name: 'Forza Motorsport 7: Deluxe Edition', year: 2020, aliases: ['fm7', 'fm 7', 'forza motorsport 7', 'forza 7'] }
    ]
  },

  // Grand Theft Auto Series
  {
    franchise: 'Grand Theft Auto',
    category: 'open-world',
    genre: 'Open World Crime Action',
    entries: [
      { name: 'Grand Theft Auto IV: The Complete Edition', year: 2020, popular: true, aliases: ['gta4', 'gta 4', 'gta iv', 'niko bellic', 'liberty city'] },
      { name: 'Grand Theft Auto: San Andreas (The Definitive Edition)', year: 2022, popular: true, aliases: ['gta sa', 'san andreas', 'cj', 'gta san andreas'] },
      { name: 'Grand Theft Auto: Vice City (Definitive Edition)', year: 2022, aliases: ['gta vc', 'vice city', 'tommy vercetti'] },
      { name: 'Grand Theft Auto III (Definitive Edition)', year: 2022, aliases: ['gta 3', 'gta3', 'gta iii'] }
    ]
  },

  // Need for Speed Series
  {
    franchise: 'Need for Speed',
    category: 'racing-sports',
    genre: 'Street Racing / Custom Tuning',
    entries: [
      { name: 'Need for Speed Unbound (Palace Edition)', year: 2023, popular: true, aliases: ['nfs unbound', 'nfs', 'unbound', 'nfs 2023'] },
      { name: 'Need for Speed Heat (Deluxe Edition)', year: 2021, popular: true, aliases: ['nfs heat', 'nfs', 'heat', 'palm city'] },
      { name: 'Need for Speed Payback', year: 2020, aliases: ['nfs payback', 'payback'] },
      { name: 'Need for Speed (2015 Reboot)', year: 2019, aliases: ['nfs 2015', 'nfs reboot'] },
      { name: 'Need for Speed Rivals: Complete Edition', year: 2019, aliases: ['nfs rivals', 'rivals'] },
      { name: 'Need for Speed: Most Wanted (Criterion)', year: 2020, popular: true, aliases: ['nfs most wanted', 'nfs mw', 'most wanted', 'mw2012'] },
      { name: 'Need for Speed: Hot Pursuit Remastered', year: 2021, aliases: ['nfs hot pursuit', 'hot pursuit remastered'] }
    ]
  },

  // Call of Duty Series
  {
    franchise: 'Call of Duty',
    category: 'shooter',
    genre: 'Military First-Person Shooter',
    entries: [
      { name: 'Call of Duty: Modern Warfare III (2023)', year: 2023, popular: true, aliases: ['mw3', 'cod mw3', 'modern warfare 3', 'cod'] },
      { name: 'Call of Duty: Modern Warfare II (2022)', year: 2022, popular: true, aliases: ['mw2', 'cod mw2', 'modern warfare 2', 'cod'] },
      { name: 'Call of Duty: Modern Warfare (2019)', year: 2020, popular: true, aliases: ['mw2019', 'cod mw', 'modern warfare 2019', 'warzone 1'] },
      { name: 'Call of Duty: Black Ops Cold War', year: 2021, popular: true, aliases: ['cold war', 'bocw', 'cod cold war', 'black ops cold war'] },
      { name: 'Call of Duty: Black Ops 4', year: 2019, aliases: ['bo4', 'bo 4', 'black ops 4'] },
      { name: 'Call of Duty: Black Ops III (Zombies Deluxe)', year: 2020, popular: true, aliases: ['bo3', 'bo 3', 'black ops 3', 'bo3 zombies'] },
      { name: 'Call of Duty: Black Ops II', year: 2018, aliases: ['bo2', 'bo 2', 'black ops 2'] },
      { name: 'Call of Duty: Vanguard', year: 2021, aliases: ['cod vanguard', 'vanguard'] },
      { name: 'Call of Duty: WWII (Digital Deluxe)', year: 2019, aliases: ['cod ww2', 'cod wwii', 'wwii'] },
      { name: 'Call of Duty 4: Modern Warfare Remastered', year: 2019, aliases: ['cod 4', 'cod4', 'mw remastered'] }
    ]
  },

  // Assassin's Creed Series
  {
    franchise: "Assassin's Creed",
    category: 'action',
    genre: 'Historical Stealth Action',
    entries: [
      { name: "Assassin's Creed Shadows", year: 2024, popular: true, aliases: ['ac shadows', 'ac japan', 'shadows', 'assassins creed shadows'] },
      { name: "Assassin's Creed Mirage", year: 2023, popular: true, aliases: ['ac mirage', 'mirage', 'basim', 'assassins creed mirage'] },
      { name: "Assassin's Creed Valhalla (Complete Edition)", year: 2022, popular: true, aliases: ['ac valhalla', 'valhalla', 'eivor'] },
      { name: "Assassin's Creed Odyssey (Ultimate Edition)", year: 2021, popular: true, aliases: ['ac odyssey', 'odyssey', 'kassandra', 'alexios'] },
      { name: "Assassin's Creed Origins (Gold Edition)", year: 2020, popular: true, aliases: ['ac origins', 'origins', 'bayek'] },
      { name: "Assassin's Creed Syndicate", year: 2019, aliases: ['ac syndicate', 'syndicate', 'london'] },
      { name: "Assassin's Creed Unity", year: 2019, aliases: ['ac unity', 'unity', 'paris arno'] },
      { name: "Assassin's Creed IV: Black Flag (Gold Edition)", year: 2020, popular: true, aliases: ['ac black flag', 'black flag', 'ac4', 'edward kenway'] },
      { name: "Assassin's Creed Rogue Remastered", year: 2019, aliases: ['ac rogue', 'rogue'] },
      { name: "Assassin's Creed III Remastered", year: 2020, aliases: ['ac 3', 'ac3', 'connor'] },
      { name: "Assassin's Creed The Ezio Collection", year: 2020, popular: true, aliases: ['ezio', 'ac 2', 'ac brotherhood', 'ac revelations'] }
    ]
  },

  // Souls / FromSoftware Series
  {
    franchise: 'FromSoftware / Souls',
    category: 'rpg-adventure',
    genre: 'Action RPG / Souls-like',
    entries: [
      { name: 'Dark Souls III: The Fire Fades Edition', year: 2021, popular: true, aliases: ['ds3', 'ds 3', 'dark souls 3', 'fire fades'] },
      { name: 'Dark Souls Remastered', year: 2020, popular: true, aliases: ['ds1', 'ds 1', 'dark souls 1', 'lordran'] },
      { name: 'Dark Souls II: Scholar of the First Sin', year: 2019, aliases: ['ds2', 'ds 2', 'dark souls 2', 'scholar'] },
      { name: 'Sekiro: Shadows Die Twice (GOTY)', year: 2021, popular: true, aliases: ['sekiro', 'shadows die twice', 'wolf', 'shinobi'] },
      { name: 'Armored Core VI: Fires of Rubicon', year: 2023, popular: true, aliases: ['ac6', 'ac 6', 'armored core 6', 'fires of rubicon'] },
      { name: 'Lies of P (Deluxe Edition)', year: 2023, popular: true, aliases: ['lies of p', 'pinocchio souls', 'lop'] },
      { name: 'Lords of the Fallen (2023)', year: 2023, aliases: ['lotf', 'lords of the fallen'] }
    ]
  },

  // PlayStation Studios on PC
  {
    franchise: 'PlayStation Studios PC',
    category: 'action',
    genre: 'Cinematic Action Adventure',
    entries: [
      { name: 'God of War (PC Standard & Enhanced)', year: 2022, popular: true, aliases: ['gow', 'gow 2018', 'god of war pc', 'kratos'] },
      { name: "Marvel's Spider-Man Remastered (PC)", year: 2022, popular: true, aliases: ['spiderman', 'spider man pc', 'peter parker', 'sm remastered'] },
      { name: "Marvel's Spider-Man: Miles Morales (PC)", year: 2022, popular: true, aliases: ['miles morales', 'miles', 'spider man miles'] },
      { name: "Ghost of Tsushima DIRECTOR'S CUT (PC)", year: 2024, popular: true, aliases: ['got', 'ghost of tsushima', 'tsushima', 'jin sakai'] },
      { name: 'The Last of Us Part I (Remake PC)', year: 2023, popular: true, aliases: ['tlou', 'tlou1', 'last of us part 1', 'joel and ellie'] },
      { name: 'The Last of Us Part II Remastered', year: 2024, popular: true, aliases: ['tlou2', 'tlou 2', 'last of us part 2', 'ellie and abby'] },
      { name: 'Horizon Forbidden West: Complete Edition', year: 2024, popular: true, aliases: ['hfw', 'horizon 2', 'forbidden west', 'aloy'] },
      { name: 'Horizon Zero Dawn Remastered', year: 2024, popular: true, aliases: ['hzd', 'horizon 1', 'zero dawn'] },
      { name: 'Days Gone (PC Edition)', year: 2021, popular: true, aliases: ['days gone', 'deacon st john', 'freakers'] },
      { name: 'Uncharted: Legacy of Thieves Collection', year: 2022, popular: true, aliases: ['uncharted 4', 'uncharted pc', 'nathan drake', 'lotc'] },
      { name: 'Helldivers 2 (Super Citizen Edition)', year: 2024, popular: true, aliases: ['hd2', 'helldivers 2', 'super earth', 'automaton'] },
      { name: 'Returnal (PC Edition)', year: 2023, aliases: ['returnal', 'selene', 'housemarque'] },
      { name: 'Ratchet & Clank: Rift Apart (PC)', year: 2023, aliases: ['rift apart', 'ratchet and clank'] }
    ]
  },

  // Sports & Fighting Franchises
  {
    franchise: 'Sports & Arena Fighting',
    category: 'racing-sports',
    genre: 'Sports & Competitive Fighting',
    entries: [
      { name: 'EA SPORTS FC 24', year: 2023, popular: true, aliases: ['fc24', 'fc 24', 'fifa 24', 'fifa'] },
      { name: 'FIFA 23 (Ultimate Edition)', year: 2022, popular: true, aliases: ['fifa 23', 'fifa23', 'world cup fifa'] },
      { name: 'FIFA 22', year: 2021, aliases: ['fifa 22', 'fifa22'] },
      { name: 'FIFA 19 & 18 Champions Vault', year: 2019, aliases: ['fifa 19', 'fifa 18'] },
      { name: 'eFootball PES 2021 Season Update', year: 2021, popular: true, aliases: ['pes 2021', 'pes21', 'efootball'] },
      { name: 'WWE 2K24: Forty Years of WrestleMania', year: 2024, popular: true, aliases: ['wwe 2k24', 'wwe24', 'wrestlemania', 'wwe'] },
      { name: 'WWE 2K23 (Icon Edition)', year: 2023, popular: true, aliases: ['wwe 2k23', 'wwe23', 'john cena'] },
      { name: 'WWE 2K22 (SuperCharger Pack)', year: 2022, aliases: ['wwe 2k22', 'rey mysterio'] },
      { name: 'NBA 2K25 (All-Star Edition)', year: 2024, popular: true, aliases: ['nba 2k25', 'nba25', 'basketball'] },
      { name: 'NBA 2K24: Kobe Bryant Edition', year: 2023, popular: true, aliases: ['nba 2k24', 'nba24', 'kobe'] },
      { name: 'F1 24 (Champions Edition)', year: 2024, popular: true, aliases: ['f1 24', 'f1 2024', 'formula 1 2024'] },
      { name: 'F1 23 (Braking Point)', year: 2023, aliases: ['f1 23', 'f1 2023'] },
      { name: 'MotoGP 24', year: 2024, aliases: ['motogp 24', 'motogp'] },
      { name: 'Assetto Corsa Competizione (GT World Challenge)', year: 2023, popular: true, aliases: ['acc', 'assetto corsa', 'assetto corsa competizione'] },
      { name: 'Assetto Corsa (Ultimate Edition)', year: 2021, popular: true, aliases: ['acorsa', 'assetto corsa modded'] },
      { name: 'The Crew Motorfest (Gold Edition)', year: 2023, popular: true, aliases: ['the crew motorfest', 'motorfest', 'the crew 3'] },
      { name: 'The Crew 2 (Special Edition)', year: 2021, aliases: ['the crew 2', 'crew 2'] },
      { name: 'Dirt Rally 2.0 (Game of the Year)', year: 2021, popular: true, aliases: ['dirt rally 2', 'dr2', 'rally'] },
      { name: 'WRC Generations / EA Sports WRC', year: 2023, aliases: ['ea wrc', 'wrc generations'] },
      { name: 'Tekken 8 (Ultimate Edition)', year: 2024, popular: true, aliases: ['tekken 8', 't8', 'jin kazama', 'kazuya'] },
      { name: 'Tekken 7 (Definitive Edition)', year: 2021, popular: true, aliases: ['tekken 7', 't7'] },
      { name: 'Street Fighter 6 (Deluxe Edition)', year: 2023, popular: true, aliases: ['sf6', 'sf 6', 'street fighter 6', 'ryu'] },
      { name: 'Mortal Kombat 1 (Khaos Reigns)', year: 2024, popular: true, aliases: ['mk1', 'mk 1', 'mortal kombat 1', 'scorpion'] },
      { name: 'Mortal Kombat 11 Ultimate', year: 2021, popular: true, aliases: ['mk11', 'mk 11', 'mortal kombat 11'] },
      { name: 'Mortal Kombat XL', year: 2019, aliases: ['mkx', 'mortal kombat x'] },
      { name: 'Naruto x Boruto Ultimate Ninja STORM CONNECTIONS', year: 2023, popular: true, aliases: ['storm connections', 'naruto storm', 'naruto connections'] },
      { name: 'Naruto Shippuden: Ultimate Ninja Storm 4 Road to Boruto', year: 2021, popular: true, aliases: ['storm 4', 'nsuns4', 'naruto storm 4'] },
      { name: 'Guilty Gear -Strive-', year: 2022, aliases: ['ggst', 'guilty gear strive'] }
    ]
  },

  // RPG, Fantasy & Sci-Fi Epics
  {
    franchise: 'RPG & Open World Fantasy',
    category: 'rpg-adventure',
    genre: 'Role-Playing Game / Adventure',
    entries: [
      { name: 'The Witcher 4: Polaris (Saga Begins)', year: 2025, popular: true, aliases: ['tw4', 'tw 4', 'witcher 4', 'polaris', 'cdpr witcher'] },
      { name: 'The Witcher 3: Wild Hunt (Complete Next-Gen Edition)', year: 2022, popular: true, aliases: ['tw3', 'tw 3', 'witcher 3', 'geralt', 'hearts of stone'] },
      { name: 'The Witcher 2: Assassins of Kings Enhanced', year: 2019, aliases: ['tw2', 'witcher 2'] },
      { name: 'The Witcher: Enhanced Edition Director Cut', year: 2018, aliases: ['tw1', 'witcher 1'] },
      { name: "Baldur's Gate 3 (Digital Deluxe Edition)", year: 2023, popular: true, aliases: ['bg3', 'bg 3', 'baldurs gate 3', 'dnd', 'larian'] },
      { name: 'Hogwarts Legacy (Deluxe Edition)', year: 2023, popular: true, aliases: ['hogwarts', 'harry potter', 'hogwarts legacy', 'wizarding world'] },
      { name: "Dragon's Dogma 2 (Deluxe Edition)", year: 2024, popular: true, aliases: ['dd2', 'dd 2', 'dragons dogma 2', 'capcom arison'] },
      { name: 'The Elder Scrolls V: Skyrim Anniversary Edition', year: 2022, popular: true, aliases: ['skyrim', 'tes5', 'tesv', 'dovahkiin', 'elder scrolls'] },
      { name: 'The Elder Scrolls IV: Oblivion Remastered', year: 2020, aliases: ['oblivion', 'tes4'] },
      { name: 'Fallout 4: Game of the Year Edition (Next-Gen Update)', year: 2024, popular: true, aliases: ['fo4', 'fo 4', 'fallout 4', 'vault boy'] },
      { name: 'Fallout: New Vegas (Ultimate Edition)', year: 2020, popular: true, aliases: ['fnv', 'new vegas', 'fallout nv'] },
      { name: 'Fallout 3: Game of the Year Edition', year: 2019, aliases: ['fo3', 'fallout 3'] },
      { name: 'Fallout 76: Skyline Valley Edition', year: 2024, aliases: ['fo76', 'fallout 76'] },
      { name: 'Starfield (Shattered Space Expansion)', year: 2024, popular: true, aliases: ['starfield', 'shattered space', 'bethesda sci fi'] },
      { name: 'Avowed (Obsidian Fantasy RPG)', year: 2025, popular: true, aliases: ['avowed', 'obsidian avowed', 'pillars of eternity'] },
      { name: 'Fable (Playground Games Reboot)', year: 2025, popular: true, aliases: ['fable', 'fable reboot', 'albion'] },
      { name: 'Final Fantasy VII Remake Intergrade', year: 2022, popular: true, aliases: ['ff7r', 'ff7 remake', 'cloud strife', 'sephiroth'] },
      { name: 'Final Fantasy VII Rebirth (PC Edition)', year: 2025, popular: true, aliases: ['ff7 rebirth', 'rebirth', 'ff7r2'] },
      { name: 'Final Fantasy XVI (PC Complete Edition)', year: 2024, popular: true, aliases: ['ff16', 'ffxvi', 'clive rosfield'] },
      { name: 'Final Fantasy XV Windows Edition', year: 2020, aliases: ['ff15', 'ffxv', 'noctis'] },
      { name: 'Monster Hunter: World (Iceborne Master Edition)', year: 2021, popular: true, aliases: ['mhw', 'monster hunter world', 'iceborne'] },
      { name: 'Monster Hunter Rise + Sunbreak', year: 2022, popular: true, aliases: ['mhr', 'monster hunter rise', 'sunbreak'] },
      { name: 'Mass Effect Legendary Edition (Trilogy Remastered)', year: 2021, popular: true, aliases: ['me trilogy', 'mass effect', 'shepard'] },
      { name: 'Dragon Age: The Veilguard', year: 2024, popular: true, aliases: ['veilguard', 'dragon age 4', 'da4'] },
      { name: 'Dragon Age: Inquisition (GOTY)', year: 2020, aliases: ['dai', 'dragon age inquisition'] },
      { name: 'Nier: Automata (Game of the YoRHa Edition)', year: 2021, popular: true, aliases: ['nier automata', '2b', 'yokotaro'] },
      { name: 'Nier Replicant ver.1.22474487139...', year: 2022, aliases: ['nier replicant'] },
      { name: 'Persona 3 Reload', year: 2024, popular: true, aliases: ['p3r', 'persona 3', 'persona 3 reload'] },
      { name: 'Persona 5 Royal', year: 2022, popular: true, aliases: ['p5r', 'persona 5', 'joker'] },
      { name: 'Metaphor: ReFantazio', year: 2024, popular: true, aliases: ['metaphor', 'atlus metaphor'] },
      { name: 'Palworld (Complete Early Access)', year: 2024, popular: true, aliases: ['palworld', 'pokemon with guns', 'pals'] }
    ]
  },

  // Survival, Horror, & Tension
  {
    franchise: 'Horror & Survival Vault',
    category: 'horror-survival',
    genre: 'Survival Horror / Post-Apocalyptic',
    entries: [
      { name: 'Subnautica 2 (Next-Gen Deep Sea Co-op)', year: 2025, popular: true, aliases: ['subnautica 2', 'sub 2', 'subnautica co op'] },
      { name: 'Subnautica: Below Zero', year: 2022, popular: true, aliases: ['subnautica below zero', 'below zero'] },
      { name: 'Subnautica (Original PC)', year: 2020, popular: true, aliases: ['subnautica', 'sub 1'] },
      { name: 'Dead Space Remake (Digital Deluxe)', year: 2023, popular: true, aliases: ['dead space', 'dead space remake', 'isaac clarke'] },
      { name: 'Alan Wake 2 (Deluxe Edition)', year: 2023, popular: true, aliases: ['aw2', 'alan wake 2', 'saga anderson', 'remedy'] },
      { name: 'Alan Wake Remastered', year: 2021, aliases: ['alan wake 1', 'alan wake'] },
      { name: 'Sons of the Forest (Full 1.0 Release)', year: 2024, popular: true, aliases: ['sotf', 'sons of the forest', 'the forest 2', 'kelvin'] },
      { name: 'The Forest', year: 2020, popular: true, aliases: ['the forest 1', 'the forest'] },
      { name: 'Rust (Console & PC Edition)', year: 2023, popular: true, aliases: ['rust', 'facepunch'] },
      { name: 'ARK: Survival Ascended (UE5 Remake)', year: 2023, popular: true, aliases: ['asa', 'ark ascended', 'ark remake'] },
      { name: 'ARK: Survival Evolved (Ultimate Survivor)', year: 2021, aliases: ['ase', 'ark survival evolved'] },
      { name: 'DayZ (Frostline Expansion Included)', year: 2024, popular: true, aliases: ['dayz', 'day z', 'bohemia dayz'] },
      { name: 'The Outlast Trials', year: 2024, popular: true, aliases: ['outlast trials', 'outlast 3', 'murkoff'] },
      { name: 'Outlast 2', year: 2019, aliases: ['outlast 2'] },
      { name: 'Outlast + Whistleblower DLC', year: 2018, aliases: ['outlast 1', 'whistleblower'] },
      { name: 'Phasmophobia (Full VR & PC)', year: 2024, popular: true, aliases: ['phasmo', 'phasmophobia', 'ghost hunting'] },
      { name: 'Lethal Company', year: 2024, popular: true, aliases: ['lethal company', 'lethal', 'scrap hunting'] },
      { name: "Five Nights at Freddy's: Security Breach + Ruin", year: 2023, popular: true, aliases: ['fnaf security breach', 'fnaf sb', 'fnaf ruin', 'freddy fazbear'] },
      { name: 'Dying Light 2 Stay Human (Reloaded Edition)', year: 2024, popular: true, aliases: ['dl2', 'dying light 2', 'aidan caldwell'] },
      { name: 'Dying Light: Definitive Edition', year: 2021, popular: true, aliases: ['dl1', 'dying light', 'kyle crane'] },
      { name: 'Alien: Isolation (Collection)', year: 2020, popular: true, aliases: ['alien isolation', 'xenomorph', 'amanda ripley'] },
      { name: 'The Callisto Protocol (Final Transmission)', year: 2023, aliases: ['callisto protocol', 'jacob lee'] },
      { name: 'Amnesia: The Bunker', year: 2023, aliases: ['amnesia bunker', 'frictional games'] },
      { name: 'The Evil Within 2', year: 2020, aliases: ['tew2', 'evil within 2', 'sebastian castellanos'] },
      { name: 'The Evil Within', year: 2019, aliases: ['tew1', 'evil within'] },
      { name: 'Little Nightmares III', year: 2025, popular: true, aliases: ['ln3', 'little nightmares 3', 'supermassive'] },
      { name: 'Little Nightmares II (Enhanced Edition)', year: 2022, aliases: ['ln2', 'little nightmares 2'] }
    ]
  },

  // Action, Superhero, Sci-Fi & Tactical Shooters
  {
    franchise: 'Action, Superhero & Shooters',
    category: 'action',
    genre: 'Action Adventure / Combat',
    entries: [
      { name: 'Batman: Arkham Knight (Premium Edition)', year: 2020, popular: true, aliases: ['arkham knight', 'batman', 'batmobile', 'rocksteady'] },
      { name: 'Batman: Arkham City (GOTY Edition)', year: 2019, popular: true, aliases: ['arkham city', 'batman arkham city'] },
      { name: 'Batman: Arkham Asylum (GOTY)', year: 2018, aliases: ['arkham asylum', 'batman asylum'] },
      { name: 'Batman: Arkham Origins (Complete)', year: 2019, aliases: ['arkham origins', 'deathstroke'] },
      { name: 'Suicide Squad: Kill the Justice League', year: 2024, aliases: ['suicide squad', 'kill the justice league', 'harley quinn'] },
      { name: "Marvel's Guardians of the Galaxy", year: 2022, popular: true, aliases: ['gotg', 'guardians of the galaxy', 'star lord'] },
      { name: "Marvel's Avengers (Definitive Edition)", year: 2021, aliases: ['avengers', 'marvel avengers'] },
      { name: 'Star Wars Jedi: Survivor (Deluxe Edition)', year: 2023, popular: true, aliases: ['jedi survivor', 'cal kestis', 'star wars survivor'] },
      { name: 'Star Wars Jedi: Fallen Order (Deluxe)', year: 2020, popular: true, aliases: ['fallen order', 'jedi fallen order', 'star wars jedi'] },
      { name: 'Star Wars Outlaws', year: 2024, popular: true, aliases: ['outlaws', 'star wars outlaws', 'kay vess'] },
      { name: 'Control Ultimate Edition', year: 2021, popular: true, aliases: ['control', 'jesse faden', 'remedy control'] },
      { name: 'Quantum Break', year: 2019, aliases: ['quantum break', 'jack joyce'] },
      { name: 'Deathloop (Deluxe Edition)', year: 2022, popular: true, aliases: ['deathloop', 'colt van', 'arkane'] },
      { name: 'Dishonored 2 (Complete Collection)', year: 2020, popular: true, aliases: ['dishonored 2', 'corvo attano', 'emily kaldwin'] },
      { name: 'Dishonored: Definitive Edition', year: 2018, aliases: ['dishonored 1', 'dishonored'] },
      { name: 'Prey: Digital Deluxe Edition', year: 2020, aliases: ['prey', 'morgan yu', 'talos 1'] },
      { name: 'DOOM Eternal: The Ancient Gods Parts 1 & 2', year: 2021, popular: true, aliases: ['doom eternal', 'slayer', 'ancient gods'] },
      { name: 'DOOM (2016)', year: 2018, popular: true, aliases: ['doom 2016', 'doom'] },
      { name: 'Wolfenstein II: The New Colossus', year: 2020, popular: true, aliases: ['wolfenstein 2', 'bj blazkowicz'] },
      { name: 'Wolfenstein: The New Order', year: 2019, aliases: ['wolfenstein 1', 'new order'] },
      { name: 'Halo: The Master Chief Collection (All 6 Games)', year: 2021, popular: true, aliases: ['mcc', 'halo mcc', 'master chief', 'halo reach', 'halo 3'] },
      { name: 'Halo Infinite (Campaign & MP)', year: 2022, popular: true, aliases: ['halo infinite', 'master chief infinite'] },
      { name: 'Titanfall 2 (Ultimate Edition)', year: 2020, popular: true, aliases: ['titanfall 2', 'bt 7274', 'jack cooper'] },
      { name: 'Crysis 4 (Next-Gen Nanosuit Saga)', year: 2025, popular: true, aliases: ['crysis 4', 'crysis next', 'crytek nanosuit'] },
      { name: 'Crysis Remastered Trilogy', year: 2022, popular: true, aliases: ['crysis trilogy', 'crysis remastered', 'crysis 1 2 3'] },
      { name: 'Metal Gear Solid Delta: Snake Eater', year: 2025, popular: true, aliases: ['mgs delta', 'mgs3 remake', 'snake eater', 'naked snake'] },
      { name: 'Metal Gear Solid V: The Definitive Experience', year: 2020, popular: true, aliases: ['mgsv', 'mgs5', 'phantom pain', 'big boss'] },
      { name: 'Far Cry 6 (Game of the Year Edition)', year: 2022, popular: true, aliases: ['fc6', 'far cry 6', 'anton castillo', 'yara'] },
      { name: 'Far Cry 5 (Gold Edition)', year: 2020, popular: true, aliases: ['fc5', 'far cry 5', 'joseph seed', 'hope county'] },
      { name: 'Far Cry 4 (Gold Edition)', year: 2019, aliases: ['fc4', 'far cry 4', 'pagan min', 'kyrat'] },
      { name: 'Far Cry 3 (Classic & Blood Dragon)', year: 2019, popular: true, aliases: ['fc3', 'far cry 3', 'vaas', 'blood dragon'] },
      { name: 'Far Cry Primal (Apex Edition)', year: 2019, aliases: ['fc primal', 'far cry primal', 'takkar'] },
      { name: 'Tom Clancy The Division 2: Warlords of New York', year: 2021, popular: true, aliases: ['division 2', 'division', 'warlords of new york'] },
      { name: 'Tom Clancy Ghost Recon Breakpoint', year: 2021, aliases: ['breakpoint', 'ghost recon'] },
      { name: 'Tom Clancy Ghost Recon Wildlands (Ultimate)', year: 2020, popular: true, aliases: ['wildlands', 'bolivia ghost recon'] },
      { name: 'Tom Clancy Rainbow Six Siege (Operator Edition)', year: 2024, popular: true, aliases: ['r6s', 'r6 siege', 'rainbow six siege', 'siege'] },
      { name: 'Hitman World of Assassination (Hitman 1, 2 & 3)', year: 2023, popular: true, aliases: ['hitman 3', 'hitman woa', 'agent 47', 'hitman'] },
      { name: 'Sniper Elite 5 (Complete Edition)', year: 2023, popular: true, aliases: ['sniper elite 5', 'karl fairburne', 'xray killcam'] },
      { name: 'Sniper Ghost Warrior Contracts 2', year: 2022, aliases: ['contracts 2', 'sgw contracts'] },
      { name: 'Borderlands 4 (Vault Hunter Returns)', year: 2025, popular: true, aliases: ['bl4', 'borderlands 4', 'borderlands'] },
      { name: 'Borderlands 3 (Super Deluxe Edition)', year: 2021, popular: true, aliases: ['bl3', 'borderlands 3', 'claptrap'] },
      { name: 'Tiny Tina Wonderlands (Chaotic Great)', year: 2022, aliases: ['tiny tina', 'wonderlands'] },
      { name: 'Borderlands: The Handsome Collection', year: 2019, popular: true, aliases: ['borderlands 2', 'handsome jack', 'pre sequel'] },
      { name: 'S.T.A.L.K.E.R. 2: Heart of Chornobyl', year: 2024, popular: true, aliases: ['stalker 2', 'heart of chornobyl', 'chernobyl', 'stalker'] },
      { name: 'Metro Exodus (Enhanced PC Edition)', year: 2022, popular: true, aliases: ['metro exodus', 'artyom', 'metro'] },
      { name: 'Metro 2033 & Last Light Redux', year: 2020, aliases: ['metro redux', 'metro 2033', 'last light'] },
      { name: 'Atomic Heart (Trapped in Limbo Bundle)', year: 2023, popular: true, aliases: ['atomic heart', 'major nechayev'] },
      { name: 'Remnant II (Ultimate Edition)', year: 2023, popular: true, aliases: ['remnant 2', 'gunfire games', 'remnant'] },
      { name: 'Remnant: From the Ashes (Complete)', year: 2021, aliases: ['remnant 1', 'from the ashes'] },
      { name: 'Warhammer 40,000: Space Marine 2', year: 2024, popular: true, aliases: ['sm2 warhammer', 'space marine 2', 'titus', 'warhammer'] },
      { name: 'Warhammer 40,000: Darktide', year: 2023, aliases: ['darktide', 'fatshark'] }
    ]
  },

  // Strategy, Simulation & Builder
  {
    franchise: 'Strategy & Simulation Vault',
    category: 'action',
    genre: 'Simulation / Strategy / City Builder',
    entries: [
      { name: 'Sid Meier Civilization VII', year: 2025, popular: true, aliases: ['civ 7', 'civ7', 'civilization 7', 'firaxis'] },
      { name: 'Sid Meier Civilization VI (Anthology Edition)', year: 2022, popular: true, aliases: ['civ 6', 'civ6', 'civilization 6'] },
      { name: 'Age of Empires IV: Anniversary Edition', year: 2022, popular: true, aliases: ['aoe4', 'age of empires 4', 'age of empires'] },
      { name: 'Age of Empires II: Definitive Edition', year: 2021, popular: true, aliases: ['aoe2', 'age of empires 2'] },
      { name: 'Age of Mythology: Retold', year: 2024, popular: true, aliases: ['aom retold', 'age of mythology'] },
      { name: 'Cities: Skylines II (Ultimate Edition)', year: 2023, popular: true, aliases: ['cities skylines 2', 'cs2', 'city builder'] },
      { name: 'Cities: Skylines (Mayor Edition)', year: 2021, popular: true, aliases: ['cities skylines 1', 'cities skylines'] },
      { name: 'Total War: WARHAMMER III (Immortal Empires)', year: 2023, popular: true, aliases: ['total war warhammer 3', 'wh3', 'immortal empires'] },
      { name: 'Total War: THREE KINGDOMS', year: 2020, popular: true, aliases: ['three kingdoms', 'total war 3k'] },
      { name: 'Total War: MEDIEVAL II Definitive', year: 2019, aliases: ['medieval 2', 'total war medieval'] },
      { name: 'Total War: ROME II Emperor Edition', year: 2019, aliases: ['rome 2', 'total war rome'] },
      { name: 'Hearts of Iron IV (Ultimate Bundle)', year: 2023, popular: true, aliases: ['hoi4', 'hearts of iron 4', 'paradox ww2'] },
      { name: 'Crusader Kings III (Royal Edition)', year: 2023, popular: true, aliases: ['ck3', 'crusader kings 3', 'medieval dynastic'] },
      { name: 'Europa Universalis IV (Subscription Edition)', year: 2022, aliases: ['eu4', 'europa universalis 4'] },
      { name: 'Stellaris (Ultimate Galactic Bundle)', year: 2023, popular: true, aliases: ['stellaris', '4x space', 'grand strategy'] },
      { name: 'Euro Truck Simulator 2 (Iberia & West Balkans)', year: 2024, popular: true, aliases: ['ets2', 'euro truck 2', 'truck simulator'] },
      { name: 'American Truck Simulator (Texas & Nebraska)', year: 2024, popular: true, aliases: ['ats', 'american truck'] },
      { name: 'Microsoft Flight Simulator 2024', year: 2024, popular: true, aliases: ['msfs 2024', 'flight simulator 2024', 'aviation'] },
      { name: 'Microsoft Flight Simulator 40th Anniversary', year: 2022, popular: true, aliases: ['msfs', 'flight sim 2020'] },
      { name: 'Farming Simulator 25', year: 2024, popular: true, aliases: ['fs25', 'farming simulator 25', 'giants'] },
      { name: 'Farming Simulator 22 (Platinum Edition)', year: 2022, popular: true, aliases: ['fs22', 'farming simulator 22'] },
      { name: 'SnowRunner (4-Year Anniversary Bundle)', year: 2024, popular: true, aliases: ['snowrunner', 'offroad mud truck'] },
      { name: 'MudRunner (American Wilds)', year: 2020, aliases: ['mudrunner', 'spintires'] },
      { name: 'BeamNG.drive (Ultimate Physics Sim)', year: 2024, popular: true, aliases: ['beamng', 'beam ng drive', 'car crash physics'] },
      { name: 'The Sims 4 (All Expansion Packs & Kits)', year: 2024, popular: true, aliases: ['sims 4', 'sims', 'ea sims'] },
      { name: 'Planet Zoo (Ultimate Collection)', year: 2023, aliases: ['planet zoo', 'zoo builder'] },
      { name: 'Planet Coaster (Thrillseeker Edition)', year: 2021, aliases: ['planet coaster', 'theme park'] },
      { name: 'Jurassic World Evolution 2 (Dominion Pack)', year: 2023, popular: true, aliases: ['jwe2', 'jurassic world evolution 2', 'dinosaur park'] },
      { name: 'Manor Lords (Medieval Strategy Sim)', year: 2024, popular: true, aliases: ['manor lords', 'medieval lord'] },
      { name: 'Frostpunk 2 (Deluxe Edition)', year: 2024, popular: true, aliases: ['frostpunk 2', '11 bit studios', 'city survival'] },
      { name: 'Frostpunk: Game of the Year Edition', year: 2021, aliases: ['frostpunk 1', 'the city must survive'] }
    ]
  }
];

// Add entries from franchises
FRANCHISES_DATA.forEach(group => {
  group.entries.forEach((item, idx) => {
    const id = `game-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
    if (!games.find(g => g.id === id)) {
      games.push({
        id,
        title: item.name,
        genre: group.genre,
        category: group.category,
        releaseYear: item.year,
        popular: Boolean(item.popular),
        description: `Experience ${item.name} with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.`,
        aliases: item.aliases || [],
        franchise: group.franchise,
        coverImage: pickImg(group.category, games.length),
        steamAvailable: true,
        includedIn399Bundle: true
      });
    }
  });
});

// 3. Add further popular catalog PC titles to exceed 500+ rich titles
const ADDITIONAL_TITLES = [
  'Just Cause 4: Complete Edition',
  'Just Cause 3: XXL Edition',
  'Sleeping Dogs: Definitive Edition',
  'Mad Max (Road Warrior Edition)',
  'Darksiders III (Blades & Whip)',
  'Darksiders Warmastered & Deathinitive',
  'Kingdoms of Amalur: Re-Reckoning',
  'GreedFall: Gold Edition',
  'A Plague Tale: Requiem',
  'A Plague Tale: Innocence',
  'Hellblade: Senua Sacrifice',
  "Senua's Saga: Hellblade II",
  'Lords of the Fallen: GOTY',
  'Mortal Shell: Enhanced Edition',
  'Wo Long: Fallen Dynasty',
  'Nioh 2: The Complete Edition',
  'Nioh: Complete Edition',
  'Strangers of Paradise: Final Fantasy Origin',
  'Crisis Core: Final Fantasy VII Reunion',
  'Valkyrie Elysium',
  'Star Ocean: The Divine Force',
  'Tales of Arise',
  'Scarlet Nexus',
  'Code Vein (Deluxe Edition)',
  'God Eater 3',
  'Sword Art Online: Last Recollection',
  'One Piece Odyssey',
  'One Piece: Pirate Warriors 4',
  'JUMP FORCE: Ultimate Edition',
  'Demon Slayer: Kimetsu no Yaiba - The Hinokami Chronicles',
  'Attack on Titan 2: Final Battle',
  'My Hero One Justice 2',
  'JoJo Bizarre Adventure: All-Star Battle R',
  'Bleach: Brave Souls & Rebirth of Souls',
  'Yakuza: Like a Dragon (Hero Edition)',
  'Like a Dragon: Infinite Wealth',
  'Like a Dragon: The Man Who Erased His Name',
  'Yakuza 0',
  'Yakuza Kiwami',
  'Yakuza Kiwami 2',
  'Yakuza 3 Remastered',
  'Yakuza 4 Remastered',
  'Yakuza 5 Remastered',
  'Yakuza 6: The Song of Life',
  'Judgment (PC Remastered)',
  'Lost Judgment: Digital Deluxe',
  'Ghostwire: Tokyo (Spiders Thread Update)',
  'Shadow of the Tomb Raider: Definitive Edition',
  'Rise of the Tomb Raider: 20 Year Celebration',
  'Tomb Raider: GOTY (2013)',
  'Deus Ex: Mankind Divided (Deluxe)',
  'Deus Ex: Human Revolution Director Cut',
  'Thief (Master Edition)',
  'Hitman: Blood Money (HD Remaster)',
  'Hitman: Absolution',
  'Splinter Cell: Blacklist',
  'Splinter Cell: Conviction',
  'Metal Gear Rising: Revengeance',
  'Castlevania: Lords of Shadow 1 & 2',
  'Bayonetta (4K PC Edition)',
  'Vanquish',
  'Devil May Cry 5: Special Edition',
  'Devil May Cry HD Collection (DMC 1, 2, 3)',
  'DmC: Devil May Cry',
  'Dragon Ball Xenoverse 2 (All DLC)',
  'Dragon Ball FighterZ',
  'Dragon Ball Z: Kakarot (Legendary Edition)',
  'Dead Rising Deluxe Remaster (2024)',
  'Dead Rising 4 (Frank Big Package)',
  'Dead Rising 3: Apocalypse Edition',
  'State of Decay 2: Juggernaut Edition',
  'State of Decay: Year One Survival Edition',
  'Days of Decay: Dead Frontier',
  'Left 4 Dead 2 (Uncut Collection)',
  'Left 4 Dead (Original GOTY)',
  'Back 4 Blood: Ultimate Edition',
  'World War Z: Aftermath',
  'Killing Floor 2 (Ultimate Edition)',
  'Killing Floor 3 (Next Gen Co-op)',
  'Payday 3 (Silver Edition)',
  'Payday 2: Legacy Collection',
  'GTFO (Full Rundown Co-op)',
  'Deep Rock Galactic: Survivor & Co-op',
  'Helldivers: Dive Harder Edition',
  'Alien: Fireteam Elite (Pathogen)',
  'Aliens: Dark Descent',
  'Predator: Hunting Grounds',
  'Friday the 13th: The Game (Ultimate)',
  'Dead by Daylight (All Killers Pack)',
  'Texas Chain Saw Massacre (Game)',
  'Dark Deception: Complete Nightmare',
  'Poppy Playtime: Chapters 1, 2, 3 & 4',
  'Bendy and the Dark Revival',
  'Bendy and the Ink Machine',
  'Hello Neighbor 2: Deluxe Edition',
  'Hello Neighbor',
  'Slender: The Arrival (10 Year Anniversary)',
  'Cry of Fear (Enhanced)',
  'Tormented Souls',
  'Signalis (Retro Survival Horror)',
  'Crow Country',
  'Fatal Frame: Maiden of Black Water',
  'Fatal Frame: Mask of the Lunar Eclipse',
  'Siren: Blood Curse PC Port',
  'Condemned: Criminal Origins',
  'F.E.A.R. Platinum Collection (1, 2 & 3)',
  'BioShock Infinite: The Complete Edition',
  'BioShock Remastered',
  'BioShock 2 Remastered',
  'Singularity',
  'Spec Ops: The Line',
  'Max Payne 3: The Complete Edition',
  'Max Payne 1 & 2 Remake Pre-Vault',
  'Alan Wake: American Nightmare',
  'Heavy Rain (PC Edition)',
  'Beyond: Two Souls (PC)',
  'Detroit: Become Human',
  'Life is Strange: True Colors',
  'Life is Strange: Remastered Collection',
  'Life is Strange 2',
  'Life is Strange: Double Exposure',
  'The Walking Dead: The Telltale Definitive Series',
  'The Wolf Among Us 2 (A Telltale Series)',
  'The Wolf Among Us',
  'Tales from the Borderlands',
  'Batman: The Telltale Series (Shadows Edition)',
  'Game of Thrones: A Telltale Games Series',
  'Until Dawn (2024 PC Remake)',
  'The Quarry (Deluxe Edition)',
  'The Dark Pictures: The Devil in Me',
  'The Dark Pictures: House of Ashes',
  'The Dark Pictures: Little Hope',
  'The Dark Pictures: Man of Medan',
  'SOMA (Sci-Fi Horror)',
  'Observer: System Redux',
  'Layers of Fear (2023 UE5 Remake)',
  'Layers of Fear 2',
  'Blair Witch (Deluxe Horror)',
  'The Medium',
  'Ghostrunner 2 (Brutal Edition)',
  'Ghostrunner (Complete)',
  'Severed Steel',
  'Bright Memory: Infinite (Gold)',
  'Trek to Yomi',
  'Sifu (Deluxe Edition)',
  'Midnight Fight Express',
  'Ruined King: A League of Legends Story',
  'The Mageseeker: A League of Legends Story',
  'Song of Nunu: A League of Legends Story',
  'Convergence: A League of Legends Story',
  'Hades II (Olympic Early Access)',
  'Hades (GOTY Edition)',
  'Dead Cells: Return to Castlevania',
  'Hollow Knight: Silksong (Pre-Vault)',
  'Hollow Knight (Voidheart Edition)',
  'Ori and the Will of the Wisps',
  'Ori and the Blind Forest: Definitive',
  'Cuphead & The Delicious Last Course',
  'Blasphemous 2',
  'Blasphemous',
  'Bloodstained: Ritual of the Night',
  'Nine Sols (Taopunk Metroidvania)',
  'Animal Well',
  'Dave the Diver (Deluxe Edition)',
  'Dredge: The Pale Reach & The Iron Rig',
  'Balatro (Poker Roguelike)',
  'Slay the Spire',
  'Monster Train',
  'Inscryption',
  'Darkest Dungeon II',
  'Darkest Dungeon: Ancestral Edition',
  'Loop Hero',
  'Vampire Survivors: Emergency Meeting',
  'Brotato',
  'Death Must Die',
  'Risk of Rain 2: Survivors of the Void',
  'Risk of Rain Returns',
  'Gunfire Reborn',
  'Roboquest',
  'Ultrakill (Full Early Access)',
  'Turbo Overkill',
  'Dusk',
  'Amid Evil',
  'Ion Fury & Aftershock',
  'Prodeus',
  'Warhammer 40,000: Boltgun',
  'Quake II Enhanced Remaster',
  'Quake Champions (Champion Pack)',
  'Unreal Tournament 2004 (HD Anthology)',
  'Enlisted: Reinforced Edition',
  'Hell Let Loose (Deluxe Edition)',
  'Squad: 50v50 Tactical War',
  'Post Scriptum / Squad 44',
  'Arma Reforger',
  'Arma 3 (Apex & Contact Edition)',
  'Insurgency: Sandstorm (Gold)',
  'Ready or Not (1.0 Police Tactical FPS)',
  'Six Days in Fallujah',
  'Zero Hour',
  'Bodycam (Hyper-Realistic UE5 FPS)',
  'Unrecord Pre-Vault Edition',
  'Gray Zone Warfare',
  'Escape from Tarkov (Vault Edition)',
  'Marauders',
  'Hunt: Showdown 1896',
  'Star Wars: Battlefront II (Celebration Edition)',
  'Star Wars: Squadrons',
  'Star Wars: Republic Commando HD',
  'Star Wars: Knights of the Old Republic Remake Pre-Vault',
  'Star Wars: KOTOR 1 & 2',
  'Mass Effect: Andromeda (Deluxe Edition)',
  'Outer Wilds: Archaeologist Edition',
  'The Outer Worlds (Spacers Choice Edition)',
  'No Man Sky (Worlds Part 1 Update)',
  'Elite Dangerous: Odyssey',
  'Everspace 2',
  'Chorus (Deep Space Combat)',
  'Rebel Galaxy Outlaw',
  'Hardspace: Shipbreaker',
  'Satisfactory (1.0 Full Release)',
  'Factorio: Space Age',
  'Dyson Sphere Program',
  'Kerbal Space Program 2',
  'Kerbal Space Program (Complete)',
  'Oxygen Not Included (Spaced Out)',
  'RimWorld (Biotech & Anomaly)',
  'Prison Architect (Psych Ward)',
  'Surviving Mars (First Colony)',
  'Frostpunk: On The Edge',
  'They Are Billions',
  'Northgard (Viking Strategy)',
  'Dune: Spice Wars',
  'Dune: Awakening Pre-Vault Edition',
  'Warcraft III: Reforged & Classic',
  'StarCraft II: Campaign Collection',
  'Command & Conquer Remastered Collection',
  'Company of Heroes 3',
  'Company of Heroes 2 (Master Collection)',
  'Command & Conquer: Generals & Zero Hour',
  'Stronghold: Definitive Edition',
  'Stronghold Crusader HD',
  'Crusader Kings II: Imperial Collection',
  'Mount & Blade II: Bannerlord',
  'Mount & Blade: Warband',
  'Kingdom Come: Deliverance (Royal Edition)',
  'Chivalry 2 (Special Edition)',
  'Mordhau',
  'For Honor (Complete Edition)',
  'Absolver: Downfall',
  'Warband: Viking Conquest',
  'Ancestors: The Humankind Odyssey',
  'Medieval Dynasty (Co-Op Edition)',
  'Sengoku Dynasty',
  'Bellwright (Medieval Strategy RPG)',
  'Enshrouded (Full Early Access)',
  'Valheim (Ashlands Update)',
  'Conan Exiles (Complete Collection)',
  'V Rising (1.0 Full Dracula Release)',
  'Smalland: Survive the Wilds',
  'Grounded (Fully Yoked Edition)',
  'Raft (Final Chapter)',
  'Stranded Deep',
  'Green Hell (Spirits of Amazonia)',
  'The Long Dark (Survival Edition)',
  'Project Zomboid (Build 42 Ready)',
  'Cataclysm: Dark Days Ahead Enhanced',
  '7 Days to Die (1.0 Official Launch)',
  'Mist Survival',
  'Scum (Complete Early Access)',
  'Deadside',
  'Sunkenland: Water World Survival',
  'Forever Skies',
  'Pacific Drive (Deluxe Edition)',
  'Jalopy (Road Trip Sim)',
  'My Summer Car',
  'Car Mechanic Simulator 2021',
  'PC Building Simulator 2',
  'House Flipper 2',
  'PowerWash Simulator (All DLCs)',
  'Gas Station Simulator',
  'Supermarket Simulator',
  'Internet Cafe Simulator 2',
  'Contraband Police',
  'Police Simulator: Patrol Officers',
  'Firefighting Simulator: The Squad',
  'Bus Simulator 21 Next Stop',
  'Train Sim World 4 (Deluxe)',
  'Subway Sim Hamburg',
  'Construction Simulator (Titan Edition)',
  'Expeditions: A MudRunner Game',
  'Wreckfest (Complete Edition)',
  'Burnout Paradise Remastered',
  'FlatOut 2 (Collector Edition)',
  'Carmageddon: Max Damage',
  'Crashday Redline Edition',
  'Hot Wheels Unleashed 2: Turbocharged',
  'Sonic & All-Stars Racing Transformed',
  'Team Sonic Racing',
  'Sonic Frontiers',
  'Sonic X Shadow Generations',
  'Sonic Mania Plus',
  'Crash Bandicoot N. Sane Trilogy',
  'Crash Bandicoot 4: It About Time',
  'Spyro Reignited Trilogy',
  'Kena: Bridge of Spirits',
  'Stray (Cyberpunk Cat Adventure)',
  'Tunic',
  'Death Door',
  'Solar Ash',
  'The Pathless',
  'Abzû',
  'Journey (PC Collector Edition)',
  'Outer Wilds: Echoes of the Eye',
  'Firewatch',
  'What Remains of Edith Finch',
  'The Vanishing of Ethan Carter Redux',
  'Dear Esther: Landmark Edition',
  'Everybody Gone to the Rapture',
  'Gris',
  'Spiritfarer: Farewell Edition',
  'To the Moon & Finding Paradise',
  'Omori',
  'Undertale',
  'Deltarune',
  'Disco Elysium: The Final Cut',
  'Pentiment (Obsidian Mystery)',
  'Citizen Sleeper 1 & 2',
  'Return of the Obra Dinn',
  'Case of the Golden Idol',
  'Chants of Sennaar',
  'Viewfinder',
  'Superliminal',
  'The Talos Principle II',
  'The Talos Principle: Road to Gehenna',
  'The Witness',
  'Antichamber',
  'Portal with RTX',
  'Portal 2 (Co-op & Single Player)',
  'Half-Life: Alyx (Non-VR & VR Mod Ready)',
  'Half-Life 2: 20th Anniversary Edition',
  'Black Mesa (Definitive Half-Life 1)',
  'Team Fortress 2 (Premium Collector)',
  'Counter-Strike: Source & 1.6 HD',
  'Left 4 Dead 2 (Modded Vault)',
  'Garry Mod (Complete Addon Vault)',
  'Rust: Staging & Main Vault',
  'Ark 2 (Pre-Vault Edition)',
  'Grand Theft Auto Online (Criminal Vault)'
];

const CATEGORY_MAP = {
  racing: 'racing-sports',
  sports: 'racing-sports',
  horror: 'horror-survival',
  survival: 'horror-survival',
  shooter: 'shooter',
  sniper: 'shooter',
  rpg: 'rpg-adventure',
  fantasy: 'rpg-adventure',
  sim: 'action',
  strategy: 'action',
  open: 'open-world',
  crime: 'open-world'
};

ADDITIONAL_TITLES.forEach((title, i) => {
  const id = `game-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
  if (games.find(g => g.id === id)) return;

  const lower = title.toLowerCase();
  let cat = 'action';
  if (lower.includes('racing') || lower.includes('rally') || lower.includes('car') || lower.includes('speed') || lower.includes('sports') || lower.includes('fifa') || lower.includes('fc') || lower.includes('nba') || lower.includes('wwe') || lower.includes('f1') || lower.includes('truck') || lower.includes('driver')) {
    cat = 'racing-sports';
  } else if (lower.includes('horror') || lower.includes('survival') || lower.includes('dead') || lower.includes('fear') || lower.includes('evil') || lower.includes('nightmare') || lower.includes('zomb') || lower.includes('outlast') || lower.includes('dark') || lower.includes('forest') || lower.includes('fnaf')) {
    cat = 'horror-survival';
  } else if (lower.includes('shooter') || lower.includes('war') || lower.includes('duty') || lower.includes('strike') || lower.includes('sniper') || lower.includes('fps') || lower.includes('siege') || lower.includes('gun') || lower.includes('squad') || lower.includes('tarkov')) {
    cat = 'shooter';
  } else if (lower.includes('rpg') || lower.includes('fantasy') || lower.includes('dragon') || lower.includes('witcher') || lower.includes('scrolls') || lower.includes('tales') || lower.includes('final fantasy') || lower.includes('persona') || lower.includes('souls') || lower.includes('ring')) {
    cat = 'rpg-adventure';
  } else if (lower.includes('world') || lower.includes('gta') || lower.includes('theft') || lower.includes('city') || lower.includes('mafia') || lower.includes('island') || lower.includes('creed') || lower.includes('red dead')) {
    cat = 'open-world';
  }

  // Generate sensible search aliases for short query matching
  const words = title.split(/[\s:,\-_()]+/).filter(w => w.length > 0);
  const acronym = words.length > 1 ? words.map(w => w[0]).join('').toLowerCase() : '';
  const aliases = [];
  if (acronym.length >= 2 && acronym.length <= 5) aliases.push(acronym);
  aliases.push(words[0].toLowerCase());
  if (words.length > 1) aliases.push(`${words[0]} ${words[1]}`.toLowerCase());

  games.push({
    id,
    title,
    genre: `${cat.replace('-', ' ').toUpperCase()} / PC AAA`,
    category: cat,
    releaseYear: 2021 + (i % 4),
    popular: i % 4 === 0,
    description: `Full digital PC edition of ${title}. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.`,
    aliases: Array.from(new Set(aliases)),
    franchise: words.slice(0, 2).join(' '),
    coverImage: pickImg(cat, games.length),
    steamAvailable: true,
    includedIn399Bundle: true
  });
});

// Pad with further franchise classics and expansion packs if needed to guarantee 500+ count
let padIndex = 1;
const EXPANSION_FRANCHISES = [
  'Tom Clancy Ghost Recon', 'Need for Speed Classics', 'Battlefield 2042 & V', 'Battlefield 1 & 4',
  'Civilization V', 'SimCity 4 Deluxe', 'Warcraft III Frozen Throne', 'Diablo II Resurrected',
  'Diablo IV Vessel of Hatred', 'Path of Exile 2 Pre-Vault', 'Torchlight II', 'Grim Dawn Definitive',
  'Titan Quest Anniversary', 'Victor Vran Overkill', 'The Incredible Adventures of Van Helsing',
  'Warhammer Vermintide 2', 'Left 4 Dead Survivors', 'Killing Floor Inc', 'Dead Island 2 Gold Edition',
  'Dead Island Riptide Definitive', 'Dying Light The Following', 'Sunset Overdrive PC', 'Quantum Conundrum',
  'The Stanley Parable Ultra Deluxe', 'Superhot Mind Control Delete', 'My Friend Pedro', 'Hotline Miami 1 & 2',
  'Katana Zero', 'Ape Out', 'Gorn PC', 'Blade & Sorcery PC', 'Boneworks & Bonelab', 'Phasmophobia Beta',
  'Demonologist', 'Forewarned', 'Labyrinthine', 'Ghost Exile', 'Devour Horror Co-op', 'Pacify',
  'Lunch Lady Horror', 'Bigfoot Survival Hunter', 'Skinwalker Hunt', 'Folklore Hunter', 'Witch Hunt PC',
  'Hunt the Night', 'Morbid The Seven Acolytes', 'The Last Faith', 'Moonscars', 'Death Gambit Afterlife',
  'Ender Lilies Quietus of the Knights', 'Ender Magnolia', 'Salt and Sanctuary', 'Salt and Sacrifice',
  'Tails of Iron', 'FIST Forged In Shadow Torch', 'Steelrising', 'Thymesia', 'En Garde PC',
  'Clash Artifacts of Chaos', 'Asterigos Curse of the Stars', 'Atlas Fallen Reign of Sand',
  'Forspoken In Tanta We Trust', 'Immortal Fenyx Rising', 'Godfall Ultimate Edition', 'Darksiders Genesis',
  'Minecraft Java & Bedrock Launcher', 'Terraria Journey End', 'Starbound', 'Core Keeper', 'Necesse',
  'Don Starve Together', 'Oxygen Not Included', 'Subnautica Deep Void', 'Astroneer', 'Space Engineers',
  'Empyrion Galactic Survival', 'Stationeers', 'Breathedge', 'Osiris New Dawn', 'Planet Crafter',
  'Icarus First Contact', 'Medieval Dynasty Oxbow', 'Sengoku Dynasty Villages', 'Wild West Dynasty',
  'Ranch Simulator Build Farm', 'Lumberjack Dynasty', 'Farmer Dynasty', 'Trader Life Simulator',
  'Internet Cafe Simulator 1', 'Streamer Life Simulator', 'Gym Simulator 24', 'Tavern Master',
  'Innkeeper Sim', 'Ale & Tale Tavern', 'PlateUp Co-op Kitchen', 'Overcooked All You Can Eat',
  'Moving Out 2', 'Unrailed 1 & 2', 'Boomerang Fu', 'Party Animals', 'Gang Beasts', 'Human Fall Flat',
  'Totally Accurate Battle Simulator', 'Golf With Your Friends', 'Wobbly Life', 'Stick Fight The Game',
  'Duck Game', 'SpeedRunners', 'Ultimate Chicken Horse', 'Pummel Party', 'Castle Crashers Remastered',
  'BattleBlock Theater', 'Broforce Forever', 'Huntdown', 'Streets of Rage 4', 'Teenage Mutant Ninja Turtles Shredder Revenge',
  'TMNT The Cowabunga Collection', 'River City Girls 1 & 2', 'Scott Pilgrim The Game Complete',
  'Guacamelee 1 & 2 Complete', 'Shovel Knight Treasure Trove', 'The Messenger & Sea of Stars',
  'Chained Echoes', 'Octopath Traveler I & II', 'Bravely Default II', 'Live A Live Remake',
  'Triangle Strategy', 'Tactics Ogre Reborn', 'Final Fantasy Pixel Remaster I to VI',
  'Chrono Trigger Steam Edition', 'Dragon Quest XI S Echoes of an Elusive Age', 'Dragon Quest Monsters',
  'Trials of Mana', 'Legend of Mana', 'Secret of Mana 3D', 'Ys VIII Lacrimosa of DANA', 'Ys IX Monstrum Nox',
  'The Legend of Heroes Trails through Daybreak', 'Trails into Reverie', 'Trails of Cold Steel I to IV',
  'Persona 4 Golden', 'Persona 5 Strikers', 'Persona 4 Arena Ultimax', 'Catherine Classic',
  'Shin Megami Tensei V Vengeance', 'Soul Hackers 2', 'Disgaea 1 to 7 Complete Series',
  'Atelier Ryza 1 2 3 Trilogy', 'Atelier Sophie 2', 'Blue Reflection Second Light', 'Fairy Tail PC',
  'Fate Samurai Remnant', 'Fate Extella Link', 'Melty Blood Type Lumina', 'Under Night In-Birth II',
  'BlazBlue Centralfiction', 'Guilty Gear Xrd Rev 2', 'Skullgirls 2nd Encore', 'The King of Fighters XV',
  'Samurai Shodown 2019', 'Garou Mark of the Wolves HD', 'Granblue Fantasy Versus Rising',
  'Granblue Fantasy Relink', 'Dungeon Fighter Duel', 'Windjammers 2', 'Footsies Rollback Edition',
  'Nidhogg 1 & 2', 'Lethal League Blaze', 'Divekick Addition Edition', 'Injustice 2 Legendary Edition',
  'Injustice Gods Among Us Ultimate', 'Mortal Kombat Komplete Edition', 'Ultra Street Fighter IV',
  'Street Fighter 30th Anniversary Collection', 'Capcom Fighting Collection', 'Marvel vs Capcom Fighting Collection',
  'Dead or Alive 6 Deluxe', 'Soulcalibur VI Deluxe', 'Virtua Fighter 5 R.E.V.O.', 'Fight Night Champion Port'
];

while (games.length < 520 && padIndex < EXPANSION_FRANCHISES.length) {
  const t = EXPANSION_FRANCHISES[padIndex];
  padIndex++;
  const id = `game-${t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
  if (!games.find(g => g.id === id)) {
    const words = t.split(' ');
    const acronym = words.length > 1 ? words.map(w => w[0]).join('').toLowerCase() : '';
    games.push({
      id,
      title: `${t} (Steam Ready)`,
      genre: 'Action / Adventure / Multi-Genre',
      category: 'action',
      releaseYear: 2022 + (padIndex % 3),
      popular: padIndex % 5 === 0,
      description: `Complete digital PC edition of ${t}. Full verification, instant Steam unlock ready, lifetime single or bundle access.`,
      aliases: [acronym, words[0].toLowerCase(), words.slice(0, 2).join(' ').toLowerCase()].filter(Boolean),
      franchise: words[0],
      coverImage: pickImg('action', games.length),
      steamAvailable: true,
      includedIn399Bundle: true
    });
  }
}

console.log(`Generated ${games.length} total curated games!`);

const fileContent = `export interface CatalogGame {
  id: string;
  title: string;
  genre: string;
  category: 'action' | 'open-world' | 'shooter' | 'racing-sports' | 'rpg-adventure' | 'horror-survival';
  releaseYear: number;
  popular?: boolean;
  coverImage: string;
  description: string;
  steamAvailable: boolean;
  includedIn399Bundle: boolean;
  aliases?: string[];
  franchise?: string;
}

export const POPULAR_GAMES_CATALOG: CatalogGame[] = ${JSON.stringify(games, null, 2)};
`;

fs.writeFileSync(path.resolve('src/data/popularGames.ts'), fileContent, 'utf-8');
console.log('Saved src/data/popularGames.ts successfully.');
