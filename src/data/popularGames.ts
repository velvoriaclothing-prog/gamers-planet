export interface CatalogGame {
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

export const POPULAR_GAMES_CATALOG: CatalogGame[] = [
  {
    "id": "game-resident-evil-9-apocalypse-re9",
    "title": "Resident Evil 9: Apocalypse (RE9)",
    "genre": "Survival Horror / Action",
    "category": "horror-survival",
    "releaseYear": 2025,
    "popular": true,
    "description": "The anticipated next chapter in Capcom legendary survival horror saga with next-gen RE Engine graphics and horrifying biological threats.",
    "aliases": [
      "re9",
      "re 9",
      "reix",
      "re ix",
      "resident evil 9",
      "resident evil ix",
      "biohazard 9",
      "re",
      "biohazard"
    ],
    "franchise": "Resident Evil",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-pragmata-capcom-sci-fi-adventure",
    "title": "Pragmata (Capcom Sci-Fi Adventure)",
    "genre": "Sci-Fi / Action Adventure",
    "category": "action",
    "releaseYear": 2025,
    "popular": true,
    "description": "Capcom next-gen dystopian lunar adventure featuring an astronaut and a mysterious little android girl in a zero-gravity reality.",
    "aliases": [
      "pragmata",
      "capcom pragmata",
      "prag",
      "lunar pragmata"
    ],
    "franchise": "Pragmata",
    "coverImage": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-007-first-light-project-007",
    "title": "007 First Light (Project 007)",
    "genre": "Stealth / Action / Espionage",
    "category": "action",
    "releaseYear": 2025,
    "popular": true,
    "description": "IO Interactive origin story of the world most famous secret agent James Bond with signature stealth, espionage, gadgets, and cinema gunplay.",
    "aliases": [
      "007",
      "007 first light",
      "first light",
      "james bond",
      "bond",
      "project 007",
      "007 game",
      "hitman 007"
    ],
    "franchise": "James Bond 007",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-forza-6-forza-horizon-6-motorsport-6",
    "title": "Forza 6 (Forza Horizon 6 / Motorsport 6)",
    "genre": "Open World Racing / Simulation",
    "category": "racing-sports",
    "releaseYear": 2025,
    "popular": true,
    "description": "The pinnacle of open world driving with dynamic weather, ray tracing, 900+ exotic supercars, and ultra 4K physics simulation.",
    "aliases": [
      "forza 6",
      "forza6",
      "forza motorsport 6",
      "forza horizon 6",
      "fh6",
      "fm6",
      "fh 6",
      "fm 6",
      "forza"
    ],
    "franchise": "Forza",
    "coverImage": "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-grand-theft-auto-vi-gta-6",
    "title": "Grand Theft Auto VI (GTA 6)",
    "genre": "Open World / Crime Action",
    "category": "open-world",
    "releaseYear": 2025,
    "popular": true,
    "description": "Return to neon-soaked Vice City and Leonida with Lucia and Jason in Rockstar most ambitious open-world crime epic.",
    "aliases": [
      "gta 6",
      "gta6",
      "gta vi",
      "gtavi",
      "grand theft auto 6",
      "vice city 6",
      "gta"
    ],
    "franchise": "Grand Theft Auto",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-black-myth-wukong-digital-deluxe",
    "title": "Black Myth: Wukong (Digital Deluxe)",
    "genre": "Action RPG / Souls-like",
    "category": "rpg-adventure",
    "releaseYear": 2024,
    "popular": true,
    "description": "Embark on a Chinese myth Journey to the West as the Destined One with Unreal Engine 5 next-gen visuals, staff martial arts, and spells.",
    "aliases": [
      "bmw",
      "wukong",
      "black myth",
      "black myth wukong",
      "monkey king",
      "sun wukong"
    ],
    "franchise": "Black Myth",
    "coverImage": "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-monster-hunter-wilds",
    "title": "Monster Hunter Wilds",
    "genre": "Hunting Action RPG",
    "category": "rpg-adventure",
    "releaseYear": 2025,
    "popular": true,
    "description": "Dynamic living ecosystems, seamless transitions, ferocious apex beasts, and thrilling co-op hunts across the Forbidden Lands.",
    "aliases": [
      "mhw",
      "mh wilds",
      "wilds",
      "monster hunter wilds",
      "monster hunter"
    ],
    "franchise": "Monster Hunter",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-death-stranding-2-on-the-beach",
    "title": "Death Stranding 2: On The Beach",
    "genre": "Sci-Fi Action / Exploration",
    "category": "rpg-adventure",
    "releaseYear": 2025,
    "popular": true,
    "description": "Hideo Kojima cinematic tour de force continuing Sam Bridges journey across unfamiliar continents with striking technological depth.",
    "aliases": [
      "ds2",
      "ds 2",
      "death stranding 2",
      "kojima",
      "death stranding"
    ],
    "franchise": "Death Stranding",
    "coverImage": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-marvel-s-wolverine",
    "title": "Marvel's Wolverine",
    "genre": "Superhero Action / Combat",
    "category": "action",
    "releaseYear": 2025,
    "popular": true,
    "description": "Insomniac Games visceral, mature action title capturing Logan adamantium claws, healing factor, and feral berserker combat.",
    "aliases": [
      "wolverine",
      "marvel wolverine",
      "logan",
      "xmen wolverine"
    ],
    "franchise": "Marvel",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-ghost-of-y-tei-ghost-of-tsushima-sequel",
    "title": "Ghost of Yōtei (Ghost of Tsushima Sequel)",
    "genre": "Open World Samurai Action",
    "category": "action",
    "releaseYear": 2025,
    "popular": true,
    "description": "Sucker Punch sequel set in 1603 around Mount Yōtei in feudal Ezo, introducing new protagonist Atsu, shamisen, and dual swords.",
    "aliases": [
      "goy",
      "ghost of yotei",
      "ghost of tsushima 2",
      "yotei",
      "ghost 2"
    ],
    "franchise": "Ghost of Tsushima",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-doom-the-dark-ages",
    "title": "DOOM: The Dark Ages",
    "genre": "Fast-Paced FPS / Dark Fantasy",
    "category": "shooter",
    "releaseYear": 2025,
    "popular": true,
    "description": "Prequel origin of the DOOM Slayer cinematic fury with shield saw, flail, dragon mounts, and heavy metal medieval carnage.",
    "aliases": [
      "doom",
      "doom dark ages",
      "doom the dark ages",
      "doom 3",
      "slayer"
    ],
    "franchise": "DOOM",
    "coverImage": "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-kingdom-come-deliverance-ii",
    "title": "Kingdom Come: Deliverance II",
    "genre": "Historical Action RPG",
    "category": "rpg-adventure",
    "releaseYear": 2025,
    "popular": true,
    "description": "Henry of Skalitz returns in 15th-century Bohemia across Kuttenberg with unmatched authentic medieval immersion and swordplay.",
    "aliases": [
      "kcd2",
      "kcd 2",
      "kingdom come 2",
      "kingdom come deliverance 2",
      "kcd"
    ],
    "franchise": "Kingdom Come",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-mafia-the-old-country",
    "title": "Mafia: The Old Country",
    "genre": "Historical Crime / Action",
    "category": "open-world",
    "releaseYear": 2025,
    "popular": true,
    "description": "Uncover the brutal origins of organized crime in 1900s Sicily in this gritty, cinematic narrative action game.",
    "aliases": [
      "mafia",
      "mafia old country",
      "mafia 4",
      "mafia the old country"
    ],
    "franchise": "Mafia",
    "coverImage": "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dragon-ball-sparking-zero",
    "title": "Dragon Ball: Sparking! ZERO",
    "genre": "Anime Fighting / 3D Arena",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "The historic revival of the Budokai Tenkaichi franchise with 182+ fighters, earth-shattering ki attacks, and destructible environments.",
    "aliases": [
      "dbz",
      "sparking zero",
      "tenkaichi",
      "dragon ball sparking zero",
      "dragon ball",
      "budokai tenkaichi"
    ],
    "franchise": "Dragon Ball",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-ea-sports-fc-25-fifa-25-ultimate",
    "title": "EA SPORTS FC 25 (FIFA 25 Ultimate)",
    "genre": "Sports / Football Simulation",
    "category": "racing-sports",
    "releaseYear": 2024,
    "popular": true,
    "description": "FC IQ tactical revolution, 5v5 Rush mode, 19,000+ licensed players, and authentic matchday presentation.",
    "aliases": [
      "fc25",
      "fc 25",
      "fifa 25",
      "fifa",
      "ea sports fc 25",
      "ea fc 25",
      "ea fc"
    ],
    "franchise": "EA Sports FC / FIFA",
    "coverImage": "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-call-of-duty-black-ops-6",
    "title": "Call of Duty: Black Ops 6",
    "genre": "First-Person Shooter",
    "category": "shooter",
    "releaseYear": 2024,
    "popular": true,
    "description": "Omnimovement tactical freedom, mind-bending spy thriller campaign set in the Gulf War era, and round-based Zombies.",
    "aliases": [
      "bo6",
      "bo 6",
      "cod bo6",
      "cod",
      "black ops 6",
      "call of duty black ops 6"
    ],
    "franchise": "Call of Duty",
    "coverImage": "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-god-of-war-ragnar-k-pc-enhanced",
    "title": "God of War Ragnarök (PC Enhanced)",
    "genre": "Action / Mythological Adventure",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Kratos and Atreus brave the Nine Realms against Thor and Odin with unlocked framerates, widescreen 21:9 support, and Valhalla DLC.",
    "aliases": [
      "gow",
      "gowr",
      "gow ragnarok",
      "god of war ragnarok",
      "kratos",
      "ragnarok"
    ],
    "franchise": "God of War",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-marvel-s-spider-man-2-pc-edition",
    "title": "Marvel's Spider-Man 2 (PC Edition)",
    "genre": "Superhero / Action Adventure",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Play as both Peter Parker and Miles Morales fighting Venom and Kraven the Hunter across expanded Marvel NYC with web wings.",
    "aliases": [
      "sm2",
      "sm 2",
      "spiderman 2",
      "spider man 2",
      "marvel spiderman 2",
      "venom"
    ],
    "franchise": "Spider-Man",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-silent-hill-2-remake-deluxe",
    "title": "Silent Hill 2 (Remake Deluxe)",
    "genre": "Psychological Survival Horror",
    "category": "horror-survival",
    "releaseYear": 2024,
    "popular": true,
    "description": "Bloober Team and Konami chilling modern recreation of James Sunderland search for Mary in the foggy nightmare of Silent Hill.",
    "aliases": [
      "sh2",
      "sh 2",
      "silent hill 2",
      "silent hill 2 remake",
      "silent hill",
      "pyramid head"
    ],
    "franchise": "Silent Hill",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-elden-ring-shadow-of-the-erdtree",
    "title": "Elden Ring: Shadow of the Erdtree",
    "genre": "Action RPG / Dark Fantasy",
    "category": "rpg-adventure",
    "releaseYear": 2024,
    "popular": true,
    "description": "FromSoftware epic GOTY expansion across the Realm of Shadow following Miquella footprints with 100+ weapons and brutal bosses.",
    "aliases": [
      "er",
      "elden ring",
      "shadow of the erdtree",
      "er sote",
      "sote",
      "fromsoft"
    ],
    "franchise": "Elden Ring",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-cyberpunk-2077-phantom-liberty",
    "title": "Cyberpunk 2077: Phantom Liberty",
    "genre": "Sci-Fi Action RPG / Open World",
    "category": "rpg-adventure",
    "releaseYear": 2023,
    "popular": true,
    "description": "Spy-thriller adventure in Dogtown alongside Idris Elba as Solomon Reed, featuring full ray tracing Overdrive and cyberware overhaul.",
    "aliases": [
      "cp2077",
      "cp 2077",
      "cyberpunk",
      "cyberpunk 2077",
      "phantom liberty",
      "cdpr"
    ],
    "franchise": "Cyberpunk",
    "coverImage": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-red-dead-redemption-2-ultimate-edition",
    "title": "Red Dead Redemption 2: Ultimate Edition",
    "genre": "Open World Western RPG",
    "category": "open-world",
    "releaseYear": 2023,
    "popular": true,
    "description": "Arthur Morgan and the Van der Linde gang journey across the American frontier with breathtaking photorealism and hunting.",
    "aliases": [
      "rdr2",
      "rdr 2",
      "rdr",
      "red dead redemption 2",
      "arthur morgan",
      "red dead"
    ],
    "franchise": "Red Dead Redemption",
    "coverImage": "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-grand-theft-auto-v-premium-edition",
    "title": "Grand Theft Auto V: Premium Edition",
    "genre": "Open World / Crime Action",
    "category": "open-world",
    "releaseYear": 2023,
    "popular": true,
    "description": "Los Santos city adventure with complete story mode, Franklin, Michael, Trevor, DLC cars, weapons, and criminal enterprise booster.",
    "aliases": [
      "gta",
      "gtav",
      "gta 5",
      "gta5",
      "gta v",
      "grand theft auto 5",
      "grand theft auto v"
    ],
    "franchise": "Grand Theft Auto",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-forza-horizon-5-premium-edition",
    "title": "Forza Horizon 5: Premium Edition",
    "genre": "Open World Racing",
    "category": "racing-sports",
    "releaseYear": 2023,
    "popular": true,
    "description": "Race across dynamic Mexican landscapes with 800+ real licensed supercars, Hot Wheels DLC, and Rally Adventure.",
    "aliases": [
      "fh5",
      "fh 5",
      "forza 5",
      "forza horizon 5",
      "forza horizon",
      "forza"
    ],
    "franchise": "Forza",
    "coverImage": "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-resident-evil-4-remake-gold-edition",
    "title": "Resident Evil 4 Remake (Gold Edition)",
    "genre": "Survival Horror",
    "category": "horror-survival",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Resident Evil 4 Remake (Gold Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "re4",
      "re 4",
      "re4r",
      "resident evil 4",
      "leon kennedy"
    ],
    "franchise": "Resident Evil",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-resident-evil-village-re8-gold-edition",
    "title": "Resident Evil Village (RE8 Gold Edition)",
    "genre": "Survival Horror",
    "category": "horror-survival",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Resident Evil Village (RE8 Gold Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "re8",
      "re 8",
      "re village",
      "resident evil 8",
      "lady dimitrescu"
    ],
    "franchise": "Resident Evil",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-resident-evil-7-biohazard",
    "title": "Resident Evil 7: Biohazard",
    "genre": "Survival Horror",
    "category": "horror-survival",
    "releaseYear": 2021,
    "popular": false,
    "description": "Experience Resident Evil 7: Biohazard with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "re7",
      "re 7",
      "biohazard 7",
      "resident evil 7",
      "ethan winters"
    ],
    "franchise": "Resident Evil",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-resident-evil-2-remake",
    "title": "Resident Evil 2 Remake",
    "genre": "Survival Horror",
    "category": "horror-survival",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Resident Evil 2 Remake with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "re2",
      "re 2",
      "re2r",
      "resident evil 2",
      "claire redfield"
    ],
    "franchise": "Resident Evil",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-resident-evil-3-remake",
    "title": "Resident Evil 3 Remake",
    "genre": "Survival Horror",
    "category": "horror-survival",
    "releaseYear": 2022,
    "popular": false,
    "description": "Experience Resident Evil 3 Remake with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "re3",
      "re 3",
      "re3r",
      "resident evil 3",
      "nemesis",
      "jill valentine"
    ],
    "franchise": "Resident Evil",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-resident-evil-5-gold-edition",
    "title": "Resident Evil 5 Gold Edition",
    "genre": "Survival Horror",
    "category": "horror-survival",
    "releaseYear": 2020,
    "popular": false,
    "description": "Experience Resident Evil 5 Gold Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "re5",
      "re 5",
      "resident evil 5",
      "chris redfield",
      "wesker"
    ],
    "franchise": "Resident Evil",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-resident-evil-6-complete",
    "title": "Resident Evil 6 Complete",
    "genre": "Survival Horror",
    "category": "horror-survival",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Resident Evil 6 Complete with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "re6",
      "re 6",
      "resident evil 6"
    ],
    "franchise": "Resident Evil",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-resident-evil-hd-remaster",
    "title": "Resident Evil HD Remaster",
    "genre": "Survival Horror",
    "category": "horror-survival",
    "releaseYear": 2020,
    "popular": false,
    "description": "Experience Resident Evil HD Remaster with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "re1",
      "re 1",
      "re hd",
      "resident evil 1"
    ],
    "franchise": "Resident Evil",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-resident-evil-0-hd-remaster",
    "title": "Resident Evil 0 HD Remaster",
    "genre": "Survival Horror",
    "category": "horror-survival",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Resident Evil 0 HD Remaster with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "re0",
      "re 0",
      "resident evil zero"
    ],
    "franchise": "Resident Evil",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-resident-evil-revelations-1-2-bundle",
    "title": "Resident Evil Revelations 1 & 2 Bundle",
    "genre": "Survival Horror",
    "category": "horror-survival",
    "releaseYear": 2021,
    "popular": false,
    "description": "Experience Resident Evil Revelations 1 & 2 Bundle with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "re rev",
      "re revelations",
      "revelations"
    ],
    "franchise": "Resident Evil",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-forza-horizon-4-ultimate-edition",
    "title": "Forza Horizon 4: Ultimate Edition",
    "genre": "Racing / Automotive Simulation",
    "category": "racing-sports",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Forza Horizon 4: Ultimate Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fh4",
      "fh 4",
      "forza 4",
      "forza horizon 4",
      "forza britain"
    ],
    "franchise": "Forza",
    "coverImage": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-forza-horizon-3-platinum-edition",
    "title": "Forza Horizon 3: Platinum Edition",
    "genre": "Racing / Automotive Simulation",
    "category": "racing-sports",
    "releaseYear": 2020,
    "popular": false,
    "description": "Experience Forza Horizon 3: Platinum Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fh3",
      "fh 3",
      "forza 3",
      "forza horizon 3",
      "forza australia"
    ],
    "franchise": "Forza",
    "coverImage": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-forza-motorsport-2023-edition",
    "title": "Forza Motorsport (2023 Edition)",
    "genre": "Racing / Automotive Simulation",
    "category": "racing-sports",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Forza Motorsport (2023 Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fm8",
      "fm 8",
      "forza motorsport 8",
      "forza motorsport",
      "fm2023"
    ],
    "franchise": "Forza",
    "coverImage": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-forza-motorsport-7-deluxe-edition",
    "title": "Forza Motorsport 7: Deluxe Edition",
    "genre": "Racing / Automotive Simulation",
    "category": "racing-sports",
    "releaseYear": 2020,
    "popular": false,
    "description": "Experience Forza Motorsport 7: Deluxe Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fm7",
      "fm 7",
      "forza motorsport 7",
      "forza 7"
    ],
    "franchise": "Forza",
    "coverImage": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-grand-theft-auto-iv-the-complete-edition",
    "title": "Grand Theft Auto IV: The Complete Edition",
    "genre": "Open World Crime Action",
    "category": "open-world",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Grand Theft Auto IV: The Complete Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "gta4",
      "gta 4",
      "gta iv",
      "niko bellic",
      "liberty city"
    ],
    "franchise": "Grand Theft Auto",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-grand-theft-auto-san-andreas-the-definitive-edition",
    "title": "Grand Theft Auto: San Andreas (The Definitive Edition)",
    "genre": "Open World Crime Action",
    "category": "open-world",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Grand Theft Auto: San Andreas (The Definitive Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "gta sa",
      "san andreas",
      "cj",
      "gta san andreas"
    ],
    "franchise": "Grand Theft Auto",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-grand-theft-auto-vice-city-definitive-edition",
    "title": "Grand Theft Auto: Vice City (Definitive Edition)",
    "genre": "Open World Crime Action",
    "category": "open-world",
    "releaseYear": 2022,
    "popular": false,
    "description": "Experience Grand Theft Auto: Vice City (Definitive Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "gta vc",
      "vice city",
      "tommy vercetti"
    ],
    "franchise": "Grand Theft Auto",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-grand-theft-auto-iii-definitive-edition",
    "title": "Grand Theft Auto III (Definitive Edition)",
    "genre": "Open World Crime Action",
    "category": "open-world",
    "releaseYear": 2022,
    "popular": false,
    "description": "Experience Grand Theft Auto III (Definitive Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "gta 3",
      "gta3",
      "gta iii"
    ],
    "franchise": "Grand Theft Auto",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-need-for-speed-unbound-palace-edition",
    "title": "Need for Speed Unbound (Palace Edition)",
    "genre": "Street Racing / Custom Tuning",
    "category": "racing-sports",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Need for Speed Unbound (Palace Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "nfs unbound",
      "nfs",
      "unbound",
      "nfs 2023"
    ],
    "franchise": "Need for Speed",
    "coverImage": "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-need-for-speed-heat-deluxe-edition",
    "title": "Need for Speed Heat (Deluxe Edition)",
    "genre": "Street Racing / Custom Tuning",
    "category": "racing-sports",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Need for Speed Heat (Deluxe Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "nfs heat",
      "nfs",
      "heat",
      "palm city"
    ],
    "franchise": "Need for Speed",
    "coverImage": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-need-for-speed-payback",
    "title": "Need for Speed Payback",
    "genre": "Street Racing / Custom Tuning",
    "category": "racing-sports",
    "releaseYear": 2020,
    "popular": false,
    "description": "Experience Need for Speed Payback with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "nfs payback",
      "payback"
    ],
    "franchise": "Need for Speed",
    "coverImage": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-need-for-speed-2015-reboot",
    "title": "Need for Speed (2015 Reboot)",
    "genre": "Street Racing / Custom Tuning",
    "category": "racing-sports",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Need for Speed (2015 Reboot) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "nfs 2015",
      "nfs reboot"
    ],
    "franchise": "Need for Speed",
    "coverImage": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-need-for-speed-rivals-complete-edition",
    "title": "Need for Speed Rivals: Complete Edition",
    "genre": "Street Racing / Custom Tuning",
    "category": "racing-sports",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Need for Speed Rivals: Complete Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "nfs rivals",
      "rivals"
    ],
    "franchise": "Need for Speed",
    "coverImage": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-need-for-speed-most-wanted-criterion",
    "title": "Need for Speed: Most Wanted (Criterion)",
    "genre": "Street Racing / Custom Tuning",
    "category": "racing-sports",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Need for Speed: Most Wanted (Criterion) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "nfs most wanted",
      "nfs mw",
      "most wanted",
      "mw2012"
    ],
    "franchise": "Need for Speed",
    "coverImage": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-need-for-speed-hot-pursuit-remastered",
    "title": "Need for Speed: Hot Pursuit Remastered",
    "genre": "Street Racing / Custom Tuning",
    "category": "racing-sports",
    "releaseYear": 2021,
    "popular": false,
    "description": "Experience Need for Speed: Hot Pursuit Remastered with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "nfs hot pursuit",
      "hot pursuit remastered"
    ],
    "franchise": "Need for Speed",
    "coverImage": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-call-of-duty-modern-warfare-iii-2023",
    "title": "Call of Duty: Modern Warfare III (2023)",
    "genre": "Military First-Person Shooter",
    "category": "shooter",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Call of Duty: Modern Warfare III (2023) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "mw3",
      "cod mw3",
      "modern warfare 3",
      "cod"
    ],
    "franchise": "Call of Duty",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-call-of-duty-modern-warfare-ii-2022",
    "title": "Call of Duty: Modern Warfare II (2022)",
    "genre": "Military First-Person Shooter",
    "category": "shooter",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Call of Duty: Modern Warfare II (2022) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "mw2",
      "cod mw2",
      "modern warfare 2",
      "cod"
    ],
    "franchise": "Call of Duty",
    "coverImage": "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-call-of-duty-modern-warfare-2019",
    "title": "Call of Duty: Modern Warfare (2019)",
    "genre": "Military First-Person Shooter",
    "category": "shooter",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Call of Duty: Modern Warfare (2019) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "mw2019",
      "cod mw",
      "modern warfare 2019",
      "warzone 1"
    ],
    "franchise": "Call of Duty",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-call-of-duty-black-ops-cold-war",
    "title": "Call of Duty: Black Ops Cold War",
    "genre": "Military First-Person Shooter",
    "category": "shooter",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Call of Duty: Black Ops Cold War with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "cold war",
      "bocw",
      "cod cold war",
      "black ops cold war"
    ],
    "franchise": "Call of Duty",
    "coverImage": "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-call-of-duty-black-ops-4",
    "title": "Call of Duty: Black Ops 4",
    "genre": "Military First-Person Shooter",
    "category": "shooter",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Call of Duty: Black Ops 4 with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "bo4",
      "bo 4",
      "black ops 4"
    ],
    "franchise": "Call of Duty",
    "coverImage": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-call-of-duty-black-ops-iii-zombies-deluxe",
    "title": "Call of Duty: Black Ops III (Zombies Deluxe)",
    "genre": "Military First-Person Shooter",
    "category": "shooter",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Call of Duty: Black Ops III (Zombies Deluxe) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "bo3",
      "bo 3",
      "black ops 3",
      "bo3 zombies"
    ],
    "franchise": "Call of Duty",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-call-of-duty-black-ops-ii",
    "title": "Call of Duty: Black Ops II",
    "genre": "Military First-Person Shooter",
    "category": "shooter",
    "releaseYear": 2018,
    "popular": false,
    "description": "Experience Call of Duty: Black Ops II with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "bo2",
      "bo 2",
      "black ops 2"
    ],
    "franchise": "Call of Duty",
    "coverImage": "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-call-of-duty-vanguard",
    "title": "Call of Duty: Vanguard",
    "genre": "Military First-Person Shooter",
    "category": "shooter",
    "releaseYear": 2021,
    "popular": false,
    "description": "Experience Call of Duty: Vanguard with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "cod vanguard",
      "vanguard"
    ],
    "franchise": "Call of Duty",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-call-of-duty-wwii-digital-deluxe",
    "title": "Call of Duty: WWII (Digital Deluxe)",
    "genre": "Military First-Person Shooter",
    "category": "shooter",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Call of Duty: WWII (Digital Deluxe) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "cod ww2",
      "cod wwii",
      "wwii"
    ],
    "franchise": "Call of Duty",
    "coverImage": "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-call-of-duty-4-modern-warfare-remastered",
    "title": "Call of Duty 4: Modern Warfare Remastered",
    "genre": "Military First-Person Shooter",
    "category": "shooter",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Call of Duty 4: Modern Warfare Remastered with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "cod 4",
      "cod4",
      "mw remastered"
    ],
    "franchise": "Call of Duty",
    "coverImage": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-assassin-s-creed-shadows",
    "title": "Assassin's Creed Shadows",
    "genre": "Historical Stealth Action",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Assassin's Creed Shadows with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ac shadows",
      "ac japan",
      "shadows",
      "assassins creed shadows"
    ],
    "franchise": "Assassin's Creed",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-assassin-s-creed-mirage",
    "title": "Assassin's Creed Mirage",
    "genre": "Historical Stealth Action",
    "category": "action",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Assassin's Creed Mirage with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ac mirage",
      "mirage",
      "basim",
      "assassins creed mirage"
    ],
    "franchise": "Assassin's Creed",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-assassin-s-creed-valhalla-complete-edition",
    "title": "Assassin's Creed Valhalla (Complete Edition)",
    "genre": "Historical Stealth Action",
    "category": "action",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Assassin's Creed Valhalla (Complete Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ac valhalla",
      "valhalla",
      "eivor"
    ],
    "franchise": "Assassin's Creed",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-assassin-s-creed-odyssey-ultimate-edition",
    "title": "Assassin's Creed Odyssey (Ultimate Edition)",
    "genre": "Historical Stealth Action",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Assassin's Creed Odyssey (Ultimate Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ac odyssey",
      "odyssey",
      "kassandra",
      "alexios"
    ],
    "franchise": "Assassin's Creed",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-assassin-s-creed-origins-gold-edition",
    "title": "Assassin's Creed Origins (Gold Edition)",
    "genre": "Historical Stealth Action",
    "category": "action",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Assassin's Creed Origins (Gold Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ac origins",
      "origins",
      "bayek"
    ],
    "franchise": "Assassin's Creed",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-assassin-s-creed-syndicate",
    "title": "Assassin's Creed Syndicate",
    "genre": "Historical Stealth Action",
    "category": "action",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Assassin's Creed Syndicate with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ac syndicate",
      "syndicate",
      "london"
    ],
    "franchise": "Assassin's Creed",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-assassin-s-creed-unity",
    "title": "Assassin's Creed Unity",
    "genre": "Historical Stealth Action",
    "category": "action",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Assassin's Creed Unity with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ac unity",
      "unity",
      "paris arno"
    ],
    "franchise": "Assassin's Creed",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-assassin-s-creed-iv-black-flag-gold-edition",
    "title": "Assassin's Creed IV: Black Flag (Gold Edition)",
    "genre": "Historical Stealth Action",
    "category": "action",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Assassin's Creed IV: Black Flag (Gold Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ac black flag",
      "black flag",
      "ac4",
      "edward kenway"
    ],
    "franchise": "Assassin's Creed",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-assassin-s-creed-rogue-remastered",
    "title": "Assassin's Creed Rogue Remastered",
    "genre": "Historical Stealth Action",
    "category": "action",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Assassin's Creed Rogue Remastered with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ac rogue",
      "rogue"
    ],
    "franchise": "Assassin's Creed",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-assassin-s-creed-iii-remastered",
    "title": "Assassin's Creed III Remastered",
    "genre": "Historical Stealth Action",
    "category": "action",
    "releaseYear": 2020,
    "popular": false,
    "description": "Experience Assassin's Creed III Remastered with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ac 3",
      "ac3",
      "connor"
    ],
    "franchise": "Assassin's Creed",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-assassin-s-creed-the-ezio-collection",
    "title": "Assassin's Creed The Ezio Collection",
    "genre": "Historical Stealth Action",
    "category": "action",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Assassin's Creed The Ezio Collection with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ezio",
      "ac 2",
      "ac brotherhood",
      "ac revelations"
    ],
    "franchise": "Assassin's Creed",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dark-souls-iii-the-fire-fades-edition",
    "title": "Dark Souls III: The Fire Fades Edition",
    "genre": "Action RPG / Souls-like",
    "category": "rpg-adventure",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Dark Souls III: The Fire Fades Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ds3",
      "ds 3",
      "dark souls 3",
      "fire fades"
    ],
    "franchise": "FromSoftware / Souls",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dark-souls-remastered",
    "title": "Dark Souls Remastered",
    "genre": "Action RPG / Souls-like",
    "category": "rpg-adventure",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Dark Souls Remastered with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ds1",
      "ds 1",
      "dark souls 1",
      "lordran"
    ],
    "franchise": "FromSoftware / Souls",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dark-souls-ii-scholar-of-the-first-sin",
    "title": "Dark Souls II: Scholar of the First Sin",
    "genre": "Action RPG / Souls-like",
    "category": "rpg-adventure",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Dark Souls II: Scholar of the First Sin with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ds2",
      "ds 2",
      "dark souls 2",
      "scholar"
    ],
    "franchise": "FromSoftware / Souls",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-sekiro-shadows-die-twice-goty",
    "title": "Sekiro: Shadows Die Twice (GOTY)",
    "genre": "Action RPG / Souls-like",
    "category": "rpg-adventure",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Sekiro: Shadows Die Twice (GOTY) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "sekiro",
      "shadows die twice",
      "wolf",
      "shinobi"
    ],
    "franchise": "FromSoftware / Souls",
    "coverImage": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-armored-core-vi-fires-of-rubicon",
    "title": "Armored Core VI: Fires of Rubicon",
    "genre": "Action RPG / Souls-like",
    "category": "rpg-adventure",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Armored Core VI: Fires of Rubicon with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ac6",
      "ac 6",
      "armored core 6",
      "fires of rubicon"
    ],
    "franchise": "FromSoftware / Souls",
    "coverImage": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-lies-of-p-deluxe-edition",
    "title": "Lies of P (Deluxe Edition)",
    "genre": "Action RPG / Souls-like",
    "category": "rpg-adventure",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Lies of P (Deluxe Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "lies of p",
      "pinocchio souls",
      "lop"
    ],
    "franchise": "FromSoftware / Souls",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-lords-of-the-fallen-2023",
    "title": "Lords of the Fallen (2023)",
    "genre": "Action RPG / Souls-like",
    "category": "rpg-adventure",
    "releaseYear": 2023,
    "popular": false,
    "description": "Experience Lords of the Fallen (2023) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "lotf",
      "lords of the fallen"
    ],
    "franchise": "FromSoftware / Souls",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-god-of-war-pc-standard-enhanced",
    "title": "God of War (PC Standard & Enhanced)",
    "genre": "Cinematic Action Adventure",
    "category": "action",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience God of War (PC Standard & Enhanced) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "gow",
      "gow 2018",
      "god of war pc",
      "kratos"
    ],
    "franchise": "PlayStation Studios PC",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-marvel-s-spider-man-remastered-pc",
    "title": "Marvel's Spider-Man Remastered (PC)",
    "genre": "Cinematic Action Adventure",
    "category": "action",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Marvel's Spider-Man Remastered (PC) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "spiderman",
      "spider man pc",
      "peter parker",
      "sm remastered"
    ],
    "franchise": "PlayStation Studios PC",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-marvel-s-spider-man-miles-morales-pc",
    "title": "Marvel's Spider-Man: Miles Morales (PC)",
    "genre": "Cinematic Action Adventure",
    "category": "action",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Marvel's Spider-Man: Miles Morales (PC) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "miles morales",
      "miles",
      "spider man miles"
    ],
    "franchise": "PlayStation Studios PC",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-ghost-of-tsushima-director-s-cut-pc",
    "title": "Ghost of Tsushima DIRECTOR'S CUT (PC)",
    "genre": "Cinematic Action Adventure",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Ghost of Tsushima DIRECTOR'S CUT (PC) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "got",
      "ghost of tsushima",
      "tsushima",
      "jin sakai"
    ],
    "franchise": "PlayStation Studios PC",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-last-of-us-part-i-remake-pc",
    "title": "The Last of Us Part I (Remake PC)",
    "genre": "Cinematic Action Adventure",
    "category": "action",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience The Last of Us Part I (Remake PC) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "tlou",
      "tlou1",
      "last of us part 1",
      "joel and ellie"
    ],
    "franchise": "PlayStation Studios PC",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-last-of-us-part-ii-remastered",
    "title": "The Last of Us Part II Remastered",
    "genre": "Cinematic Action Adventure",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience The Last of Us Part II Remastered with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "tlou2",
      "tlou 2",
      "last of us part 2",
      "ellie and abby"
    ],
    "franchise": "PlayStation Studios PC",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-horizon-forbidden-west-complete-edition",
    "title": "Horizon Forbidden West: Complete Edition",
    "genre": "Cinematic Action Adventure",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Horizon Forbidden West: Complete Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "hfw",
      "horizon 2",
      "forbidden west",
      "aloy"
    ],
    "franchise": "PlayStation Studios PC",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-horizon-zero-dawn-remastered",
    "title": "Horizon Zero Dawn Remastered",
    "genre": "Cinematic Action Adventure",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Horizon Zero Dawn Remastered with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "hzd",
      "horizon 1",
      "zero dawn"
    ],
    "franchise": "PlayStation Studios PC",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-days-gone-pc-edition",
    "title": "Days Gone (PC Edition)",
    "genre": "Cinematic Action Adventure",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Days Gone (PC Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "days gone",
      "deacon st john",
      "freakers"
    ],
    "franchise": "PlayStation Studios PC",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-uncharted-legacy-of-thieves-collection",
    "title": "Uncharted: Legacy of Thieves Collection",
    "genre": "Cinematic Action Adventure",
    "category": "action",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Uncharted: Legacy of Thieves Collection with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "uncharted 4",
      "uncharted pc",
      "nathan drake",
      "lotc"
    ],
    "franchise": "PlayStation Studios PC",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-helldivers-2-super-citizen-edition",
    "title": "Helldivers 2 (Super Citizen Edition)",
    "genre": "Cinematic Action Adventure",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Helldivers 2 (Super Citizen Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "hd2",
      "helldivers 2",
      "super earth",
      "automaton"
    ],
    "franchise": "PlayStation Studios PC",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-returnal-pc-edition",
    "title": "Returnal (PC Edition)",
    "genre": "Cinematic Action Adventure",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Experience Returnal (PC Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "returnal",
      "selene",
      "housemarque"
    ],
    "franchise": "PlayStation Studios PC",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-ratchet-clank-rift-apart-pc",
    "title": "Ratchet & Clank: Rift Apart (PC)",
    "genre": "Cinematic Action Adventure",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Experience Ratchet & Clank: Rift Apart (PC) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "rift apart",
      "ratchet and clank"
    ],
    "franchise": "PlayStation Studios PC",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-ea-sports-fc-24",
    "title": "EA SPORTS FC 24",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience EA SPORTS FC 24 with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fc24",
      "fc 24",
      "fifa 24",
      "fifa"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-fifa-23-ultimate-edition",
    "title": "FIFA 23 (Ultimate Edition)",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience FIFA 23 (Ultimate Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fifa 23",
      "fifa23",
      "world cup fifa"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-fifa-22",
    "title": "FIFA 22",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2021,
    "popular": false,
    "description": "Experience FIFA 22 with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fifa 22",
      "fifa22"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-fifa-19-18-champions-vault",
    "title": "FIFA 19 & 18 Champions Vault",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience FIFA 19 & 18 Champions Vault with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fifa 19",
      "fifa 18"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-efootball-pes-2021-season-update",
    "title": "eFootball PES 2021 Season Update",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience eFootball PES 2021 Season Update with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "pes 2021",
      "pes21",
      "efootball"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-wwe-2k24-forty-years-of-wrestlemania",
    "title": "WWE 2K24: Forty Years of WrestleMania",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience WWE 2K24: Forty Years of WrestleMania with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "wwe 2k24",
      "wwe24",
      "wrestlemania",
      "wwe"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-wwe-2k23-icon-edition",
    "title": "WWE 2K23 (Icon Edition)",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience WWE 2K23 (Icon Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "wwe 2k23",
      "wwe23",
      "john cena"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-wwe-2k22-supercharger-pack",
    "title": "WWE 2K22 (SuperCharger Pack)",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2022,
    "popular": false,
    "description": "Experience WWE 2K22 (SuperCharger Pack) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "wwe 2k22",
      "rey mysterio"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-nba-2k25-all-star-edition",
    "title": "NBA 2K25 (All-Star Edition)",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience NBA 2K25 (All-Star Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "nba 2k25",
      "nba25",
      "basketball"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-nba-2k24-kobe-bryant-edition",
    "title": "NBA 2K24: Kobe Bryant Edition",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience NBA 2K24: Kobe Bryant Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "nba 2k24",
      "nba24",
      "kobe"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-f1-24-champions-edition",
    "title": "F1 24 (Champions Edition)",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience F1 24 (Champions Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "f1 24",
      "f1 2024",
      "formula 1 2024"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-f1-23-braking-point",
    "title": "F1 23 (Braking Point)",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2023,
    "popular": false,
    "description": "Experience F1 23 (Braking Point) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "f1 23",
      "f1 2023"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-motogp-24",
    "title": "MotoGP 24",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2024,
    "popular": false,
    "description": "Experience MotoGP 24 with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "motogp 24",
      "motogp"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-assetto-corsa-competizione-gt-world-challenge",
    "title": "Assetto Corsa Competizione (GT World Challenge)",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Assetto Corsa Competizione (GT World Challenge) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "acc",
      "assetto corsa",
      "assetto corsa competizione"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-assetto-corsa-ultimate-edition",
    "title": "Assetto Corsa (Ultimate Edition)",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Assetto Corsa (Ultimate Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "acorsa",
      "assetto corsa modded"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-crew-motorfest-gold-edition",
    "title": "The Crew Motorfest (Gold Edition)",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience The Crew Motorfest (Gold Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "the crew motorfest",
      "motorfest",
      "the crew 3"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-crew-2-special-edition",
    "title": "The Crew 2 (Special Edition)",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2021,
    "popular": false,
    "description": "Experience The Crew 2 (Special Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "the crew 2",
      "crew 2"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dirt-rally-2-0-game-of-the-year",
    "title": "Dirt Rally 2.0 (Game of the Year)",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Dirt Rally 2.0 (Game of the Year) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "dirt rally 2",
      "dr2",
      "rally"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-wrc-generations-ea-sports-wrc",
    "title": "WRC Generations / EA Sports WRC",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2023,
    "popular": false,
    "description": "Experience WRC Generations / EA Sports WRC with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ea wrc",
      "wrc generations"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-tekken-8-ultimate-edition",
    "title": "Tekken 8 (Ultimate Edition)",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Tekken 8 (Ultimate Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "tekken 8",
      "t8",
      "jin kazama",
      "kazuya"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-tekken-7-definitive-edition",
    "title": "Tekken 7 (Definitive Edition)",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Tekken 7 (Definitive Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "tekken 7",
      "t7"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-street-fighter-6-deluxe-edition",
    "title": "Street Fighter 6 (Deluxe Edition)",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Street Fighter 6 (Deluxe Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "sf6",
      "sf 6",
      "street fighter 6",
      "ryu"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-mortal-kombat-1-khaos-reigns",
    "title": "Mortal Kombat 1 (Khaos Reigns)",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Mortal Kombat 1 (Khaos Reigns) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "mk1",
      "mk 1",
      "mortal kombat 1",
      "scorpion"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-mortal-kombat-11-ultimate",
    "title": "Mortal Kombat 11 Ultimate",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Mortal Kombat 11 Ultimate with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "mk11",
      "mk 11",
      "mortal kombat 11"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-mortal-kombat-xl",
    "title": "Mortal Kombat XL",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Mortal Kombat XL with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "mkx",
      "mortal kombat x"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-naruto-x-boruto-ultimate-ninja-storm-connections",
    "title": "Naruto x Boruto Ultimate Ninja STORM CONNECTIONS",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Naruto x Boruto Ultimate Ninja STORM CONNECTIONS with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "storm connections",
      "naruto storm",
      "naruto connections"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-naruto-shippuden-ultimate-ninja-storm-4-road-to-boruto",
    "title": "Naruto Shippuden: Ultimate Ninja Storm 4 Road to Boruto",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Naruto Shippuden: Ultimate Ninja Storm 4 Road to Boruto with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "storm 4",
      "nsuns4",
      "naruto storm 4"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-guilty-gear-strive",
    "title": "Guilty Gear -Strive-",
    "genre": "Sports & Competitive Fighting",
    "category": "racing-sports",
    "releaseYear": 2022,
    "popular": false,
    "description": "Experience Guilty Gear -Strive- with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ggst",
      "guilty gear strive"
    ],
    "franchise": "Sports & Arena Fighting",
    "coverImage": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-witcher-4-polaris-saga-begins",
    "title": "The Witcher 4: Polaris (Saga Begins)",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2025,
    "popular": true,
    "description": "Experience The Witcher 4: Polaris (Saga Begins) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "tw4",
      "tw 4",
      "witcher 4",
      "polaris",
      "cdpr witcher"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-witcher-3-wild-hunt-complete-next-gen-edition",
    "title": "The Witcher 3: Wild Hunt (Complete Next-Gen Edition)",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience The Witcher 3: Wild Hunt (Complete Next-Gen Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "tw3",
      "tw 3",
      "witcher 3",
      "geralt",
      "hearts of stone"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-witcher-2-assassins-of-kings-enhanced",
    "title": "The Witcher 2: Assassins of Kings Enhanced",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience The Witcher 2: Assassins of Kings Enhanced with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "tw2",
      "witcher 2"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-witcher-enhanced-edition-director-cut",
    "title": "The Witcher: Enhanced Edition Director Cut",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2018,
    "popular": false,
    "description": "Experience The Witcher: Enhanced Edition Director Cut with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "tw1",
      "witcher 1"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-baldur-s-gate-3-digital-deluxe-edition",
    "title": "Baldur's Gate 3 (Digital Deluxe Edition)",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Baldur's Gate 3 (Digital Deluxe Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "bg3",
      "bg 3",
      "baldurs gate 3",
      "dnd",
      "larian"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-hogwarts-legacy-deluxe-edition",
    "title": "Hogwarts Legacy (Deluxe Edition)",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Hogwarts Legacy (Deluxe Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "hogwarts",
      "harry potter",
      "hogwarts legacy",
      "wizarding world"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dragon-s-dogma-2-deluxe-edition",
    "title": "Dragon's Dogma 2 (Deluxe Edition)",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Dragon's Dogma 2 (Deluxe Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "dd2",
      "dd 2",
      "dragons dogma 2",
      "capcom arison"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-elder-scrolls-v-skyrim-anniversary-edition",
    "title": "The Elder Scrolls V: Skyrim Anniversary Edition",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience The Elder Scrolls V: Skyrim Anniversary Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "skyrim",
      "tes5",
      "tesv",
      "dovahkiin",
      "elder scrolls"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-elder-scrolls-iv-oblivion-remastered",
    "title": "The Elder Scrolls IV: Oblivion Remastered",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2020,
    "popular": false,
    "description": "Experience The Elder Scrolls IV: Oblivion Remastered with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "oblivion",
      "tes4"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-fallout-4-game-of-the-year-edition-next-gen-update",
    "title": "Fallout 4: Game of the Year Edition (Next-Gen Update)",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Fallout 4: Game of the Year Edition (Next-Gen Update) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fo4",
      "fo 4",
      "fallout 4",
      "vault boy"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-fallout-new-vegas-ultimate-edition",
    "title": "Fallout: New Vegas (Ultimate Edition)",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Fallout: New Vegas (Ultimate Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fnv",
      "new vegas",
      "fallout nv"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-fallout-3-game-of-the-year-edition",
    "title": "Fallout 3: Game of the Year Edition",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Fallout 3: Game of the Year Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fo3",
      "fallout 3"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-fallout-76-skyline-valley-edition",
    "title": "Fallout 76: Skyline Valley Edition",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2024,
    "popular": false,
    "description": "Experience Fallout 76: Skyline Valley Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fo76",
      "fallout 76"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-starfield-shattered-space-expansion",
    "title": "Starfield (Shattered Space Expansion)",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Starfield (Shattered Space Expansion) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "starfield",
      "shattered space",
      "bethesda sci fi"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-avowed-obsidian-fantasy-rpg",
    "title": "Avowed (Obsidian Fantasy RPG)",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2025,
    "popular": true,
    "description": "Experience Avowed (Obsidian Fantasy RPG) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "avowed",
      "obsidian avowed",
      "pillars of eternity"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-fable-playground-games-reboot",
    "title": "Fable (Playground Games Reboot)",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2025,
    "popular": true,
    "description": "Experience Fable (Playground Games Reboot) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fable",
      "fable reboot",
      "albion"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-final-fantasy-vii-remake-intergrade",
    "title": "Final Fantasy VII Remake Intergrade",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Final Fantasy VII Remake Intergrade with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ff7r",
      "ff7 remake",
      "cloud strife",
      "sephiroth"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-final-fantasy-vii-rebirth-pc-edition",
    "title": "Final Fantasy VII Rebirth (PC Edition)",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2025,
    "popular": true,
    "description": "Experience Final Fantasy VII Rebirth (PC Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ff7 rebirth",
      "rebirth",
      "ff7r2"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-final-fantasy-xvi-pc-complete-edition",
    "title": "Final Fantasy XVI (PC Complete Edition)",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Final Fantasy XVI (PC Complete Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ff16",
      "ffxvi",
      "clive rosfield"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-final-fantasy-xv-windows-edition",
    "title": "Final Fantasy XV Windows Edition",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2020,
    "popular": false,
    "description": "Experience Final Fantasy XV Windows Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ff15",
      "ffxv",
      "noctis"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-monster-hunter-world-iceborne-master-edition",
    "title": "Monster Hunter: World (Iceborne Master Edition)",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Monster Hunter: World (Iceborne Master Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "mhw",
      "monster hunter world",
      "iceborne"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-monster-hunter-rise-sunbreak",
    "title": "Monster Hunter Rise + Sunbreak",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Monster Hunter Rise + Sunbreak with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "mhr",
      "monster hunter rise",
      "sunbreak"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-mass-effect-legendary-edition-trilogy-remastered",
    "title": "Mass Effect Legendary Edition (Trilogy Remastered)",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Mass Effect Legendary Edition (Trilogy Remastered) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "me trilogy",
      "mass effect",
      "shepard"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dragon-age-the-veilguard",
    "title": "Dragon Age: The Veilguard",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Dragon Age: The Veilguard with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "veilguard",
      "dragon age 4",
      "da4"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dragon-age-inquisition-goty",
    "title": "Dragon Age: Inquisition (GOTY)",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2020,
    "popular": false,
    "description": "Experience Dragon Age: Inquisition (GOTY) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "dai",
      "dragon age inquisition"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-nier-automata-game-of-the-yorha-edition",
    "title": "Nier: Automata (Game of the YoRHa Edition)",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Nier: Automata (Game of the YoRHa Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "nier automata",
      "2b",
      "yokotaro"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-nier-replicant-ver-1-22474487139",
    "title": "Nier Replicant ver.1.22474487139...",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2022,
    "popular": false,
    "description": "Experience Nier Replicant ver.1.22474487139... with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "nier replicant"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-persona-3-reload",
    "title": "Persona 3 Reload",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Persona 3 Reload with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "p3r",
      "persona 3",
      "persona 3 reload"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-persona-5-royal",
    "title": "Persona 5 Royal",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Persona 5 Royal with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "p5r",
      "persona 5",
      "joker"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-metaphor-refantazio",
    "title": "Metaphor: ReFantazio",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Metaphor: ReFantazio with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "metaphor",
      "atlus metaphor"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-palworld-complete-early-access",
    "title": "Palworld (Complete Early Access)",
    "genre": "Role-Playing Game / Adventure",
    "category": "rpg-adventure",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Palworld (Complete Early Access) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "palworld",
      "pokemon with guns",
      "pals"
    ],
    "franchise": "RPG & Open World Fantasy",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-subnautica-2-next-gen-deep-sea-co-op",
    "title": "Subnautica 2 (Next-Gen Deep Sea Co-op)",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2025,
    "popular": true,
    "description": "Experience Subnautica 2 (Next-Gen Deep Sea Co-op) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "subnautica 2",
      "sub 2",
      "subnautica co op"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-subnautica-below-zero",
    "title": "Subnautica: Below Zero",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Subnautica: Below Zero with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "subnautica below zero",
      "below zero"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-subnautica-original-pc",
    "title": "Subnautica (Original PC)",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Subnautica (Original PC) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "subnautica",
      "sub 1"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dead-space-remake-digital-deluxe",
    "title": "Dead Space Remake (Digital Deluxe)",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Dead Space Remake (Digital Deluxe) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "dead space",
      "dead space remake",
      "isaac clarke"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-alan-wake-2-deluxe-edition",
    "title": "Alan Wake 2 (Deluxe Edition)",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Alan Wake 2 (Deluxe Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "aw2",
      "alan wake 2",
      "saga anderson",
      "remedy"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-alan-wake-remastered",
    "title": "Alan Wake Remastered",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2021,
    "popular": false,
    "description": "Experience Alan Wake Remastered with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "alan wake 1",
      "alan wake"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-sons-of-the-forest-full-1-0-release",
    "title": "Sons of the Forest (Full 1.0 Release)",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Sons of the Forest (Full 1.0 Release) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "sotf",
      "sons of the forest",
      "the forest 2",
      "kelvin"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-forest",
    "title": "The Forest",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience The Forest with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "the forest 1",
      "the forest"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-rust-console-pc-edition",
    "title": "Rust (Console & PC Edition)",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Rust (Console & PC Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "rust",
      "facepunch"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-ark-survival-ascended-ue5-remake",
    "title": "ARK: Survival Ascended (UE5 Remake)",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience ARK: Survival Ascended (UE5 Remake) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "asa",
      "ark ascended",
      "ark remake"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-ark-survival-evolved-ultimate-survivor",
    "title": "ARK: Survival Evolved (Ultimate Survivor)",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2021,
    "popular": false,
    "description": "Experience ARK: Survival Evolved (Ultimate Survivor) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ase",
      "ark survival evolved"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dayz-frostline-expansion-included",
    "title": "DayZ (Frostline Expansion Included)",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience DayZ (Frostline Expansion Included) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "dayz",
      "day z",
      "bohemia dayz"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-outlast-trials",
    "title": "The Outlast Trials",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience The Outlast Trials with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "outlast trials",
      "outlast 3",
      "murkoff"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-outlast-2",
    "title": "Outlast 2",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Outlast 2 with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "outlast 2"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-outlast-whistleblower-dlc",
    "title": "Outlast + Whistleblower DLC",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2018,
    "popular": false,
    "description": "Experience Outlast + Whistleblower DLC with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "outlast 1",
      "whistleblower"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-phasmophobia-full-vr-pc",
    "title": "Phasmophobia (Full VR & PC)",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Phasmophobia (Full VR & PC) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "phasmo",
      "phasmophobia",
      "ghost hunting"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-lethal-company",
    "title": "Lethal Company",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Lethal Company with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "lethal company",
      "lethal",
      "scrap hunting"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-five-nights-at-freddy-s-security-breach-ruin",
    "title": "Five Nights at Freddy's: Security Breach + Ruin",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Five Nights at Freddy's: Security Breach + Ruin with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fnaf security breach",
      "fnaf sb",
      "fnaf ruin",
      "freddy fazbear"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dying-light-2-stay-human-reloaded-edition",
    "title": "Dying Light 2 Stay Human (Reloaded Edition)",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Dying Light 2 Stay Human (Reloaded Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "dl2",
      "dying light 2",
      "aidan caldwell"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dying-light-definitive-edition",
    "title": "Dying Light: Definitive Edition",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Dying Light: Definitive Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "dl1",
      "dying light",
      "kyle crane"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-alien-isolation-collection",
    "title": "Alien: Isolation (Collection)",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Alien: Isolation (Collection) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "alien isolation",
      "xenomorph",
      "amanda ripley"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-callisto-protocol-final-transmission",
    "title": "The Callisto Protocol (Final Transmission)",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2023,
    "popular": false,
    "description": "Experience The Callisto Protocol (Final Transmission) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "callisto protocol",
      "jacob lee"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-amnesia-the-bunker",
    "title": "Amnesia: The Bunker",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2023,
    "popular": false,
    "description": "Experience Amnesia: The Bunker with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "amnesia bunker",
      "frictional games"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-evil-within-2",
    "title": "The Evil Within 2",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2020,
    "popular": false,
    "description": "Experience The Evil Within 2 with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "tew2",
      "evil within 2",
      "sebastian castellanos"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-evil-within",
    "title": "The Evil Within",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience The Evil Within with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "tew1",
      "evil within"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-little-nightmares-iii",
    "title": "Little Nightmares III",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2025,
    "popular": true,
    "description": "Experience Little Nightmares III with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ln3",
      "little nightmares 3",
      "supermassive"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-little-nightmares-ii-enhanced-edition",
    "title": "Little Nightmares II (Enhanced Edition)",
    "genre": "Survival Horror / Post-Apocalyptic",
    "category": "horror-survival",
    "releaseYear": 2022,
    "popular": false,
    "description": "Experience Little Nightmares II (Enhanced Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ln2",
      "little nightmares 2"
    ],
    "franchise": "Horror & Survival Vault",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-batman-arkham-knight-premium-edition",
    "title": "Batman: Arkham Knight (Premium Edition)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Batman: Arkham Knight (Premium Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "arkham knight",
      "batman",
      "batmobile",
      "rocksteady"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-batman-arkham-city-goty-edition",
    "title": "Batman: Arkham City (GOTY Edition)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2019,
    "popular": true,
    "description": "Experience Batman: Arkham City (GOTY Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "arkham city",
      "batman arkham city"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-batman-arkham-asylum-goty",
    "title": "Batman: Arkham Asylum (GOTY)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2018,
    "popular": false,
    "description": "Experience Batman: Arkham Asylum (GOTY) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "arkham asylum",
      "batman asylum"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-batman-arkham-origins-complete",
    "title": "Batman: Arkham Origins (Complete)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Batman: Arkham Origins (Complete) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "arkham origins",
      "deathstroke"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-suicide-squad-kill-the-justice-league",
    "title": "Suicide Squad: Kill the Justice League",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Experience Suicide Squad: Kill the Justice League with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "suicide squad",
      "kill the justice league",
      "harley quinn"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-marvel-s-guardians-of-the-galaxy",
    "title": "Marvel's Guardians of the Galaxy",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Marvel's Guardians of the Galaxy with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "gotg",
      "guardians of the galaxy",
      "star lord"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-marvel-s-avengers-definitive-edition",
    "title": "Marvel's Avengers (Definitive Edition)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2021,
    "popular": false,
    "description": "Experience Marvel's Avengers (Definitive Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "avengers",
      "marvel avengers"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-star-wars-jedi-survivor-deluxe-edition",
    "title": "Star Wars Jedi: Survivor (Deluxe Edition)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Star Wars Jedi: Survivor (Deluxe Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "jedi survivor",
      "cal kestis",
      "star wars survivor"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-star-wars-jedi-fallen-order-deluxe",
    "title": "Star Wars Jedi: Fallen Order (Deluxe)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Star Wars Jedi: Fallen Order (Deluxe) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fallen order",
      "jedi fallen order",
      "star wars jedi"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-star-wars-outlaws",
    "title": "Star Wars Outlaws",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Star Wars Outlaws with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "outlaws",
      "star wars outlaws",
      "kay vess"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-control-ultimate-edition",
    "title": "Control Ultimate Edition",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Control Ultimate Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "control",
      "jesse faden",
      "remedy control"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-quantum-break",
    "title": "Quantum Break",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Quantum Break with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "quantum break",
      "jack joyce"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-deathloop-deluxe-edition",
    "title": "Deathloop (Deluxe Edition)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Deathloop (Deluxe Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "deathloop",
      "colt van",
      "arkane"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dishonored-2-complete-collection",
    "title": "Dishonored 2 (Complete Collection)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Dishonored 2 (Complete Collection) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "dishonored 2",
      "corvo attano",
      "emily kaldwin"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dishonored-definitive-edition",
    "title": "Dishonored: Definitive Edition",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2018,
    "popular": false,
    "description": "Experience Dishonored: Definitive Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "dishonored 1",
      "dishonored"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-prey-digital-deluxe-edition",
    "title": "Prey: Digital Deluxe Edition",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2020,
    "popular": false,
    "description": "Experience Prey: Digital Deluxe Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "prey",
      "morgan yu",
      "talos 1"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-doom-eternal-the-ancient-gods-parts-1-2",
    "title": "DOOM Eternal: The Ancient Gods Parts 1 & 2",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience DOOM Eternal: The Ancient Gods Parts 1 & 2 with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "doom eternal",
      "slayer",
      "ancient gods"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-doom-2016",
    "title": "DOOM (2016)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2018,
    "popular": true,
    "description": "Experience DOOM (2016) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "doom 2016",
      "doom"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-wolfenstein-ii-the-new-colossus",
    "title": "Wolfenstein II: The New Colossus",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Wolfenstein II: The New Colossus with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "wolfenstein 2",
      "bj blazkowicz"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-wolfenstein-the-new-order",
    "title": "Wolfenstein: The New Order",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Wolfenstein: The New Order with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "wolfenstein 1",
      "new order"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-halo-the-master-chief-collection-all-6-games",
    "title": "Halo: The Master Chief Collection (All 6 Games)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Halo: The Master Chief Collection (All 6 Games) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "mcc",
      "halo mcc",
      "master chief",
      "halo reach",
      "halo 3"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-halo-infinite-campaign-mp",
    "title": "Halo Infinite (Campaign & MP)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Halo Infinite (Campaign & MP) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "halo infinite",
      "master chief infinite"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-titanfall-2-ultimate-edition",
    "title": "Titanfall 2 (Ultimate Edition)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Titanfall 2 (Ultimate Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "titanfall 2",
      "bt 7274",
      "jack cooper"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-crysis-4-next-gen-nanosuit-saga",
    "title": "Crysis 4 (Next-Gen Nanosuit Saga)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2025,
    "popular": true,
    "description": "Experience Crysis 4 (Next-Gen Nanosuit Saga) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "crysis 4",
      "crysis next",
      "crytek nanosuit"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-crysis-remastered-trilogy",
    "title": "Crysis Remastered Trilogy",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Crysis Remastered Trilogy with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "crysis trilogy",
      "crysis remastered",
      "crysis 1 2 3"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-metal-gear-solid-delta-snake-eater",
    "title": "Metal Gear Solid Delta: Snake Eater",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2025,
    "popular": true,
    "description": "Experience Metal Gear Solid Delta: Snake Eater with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "mgs delta",
      "mgs3 remake",
      "snake eater",
      "naked snake"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-metal-gear-solid-v-the-definitive-experience",
    "title": "Metal Gear Solid V: The Definitive Experience",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Metal Gear Solid V: The Definitive Experience with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "mgsv",
      "mgs5",
      "phantom pain",
      "big boss"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-far-cry-6-game-of-the-year-edition",
    "title": "Far Cry 6 (Game of the Year Edition)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Far Cry 6 (Game of the Year Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fc6",
      "far cry 6",
      "anton castillo",
      "yara"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-far-cry-5-gold-edition",
    "title": "Far Cry 5 (Gold Edition)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Far Cry 5 (Gold Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fc5",
      "far cry 5",
      "joseph seed",
      "hope county"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-far-cry-4-gold-edition",
    "title": "Far Cry 4 (Gold Edition)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Far Cry 4 (Gold Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fc4",
      "far cry 4",
      "pagan min",
      "kyrat"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-far-cry-3-classic-blood-dragon",
    "title": "Far Cry 3 (Classic & Blood Dragon)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2019,
    "popular": true,
    "description": "Experience Far Cry 3 (Classic & Blood Dragon) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fc3",
      "far cry 3",
      "vaas",
      "blood dragon"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-far-cry-primal-apex-edition",
    "title": "Far Cry Primal (Apex Edition)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Far Cry Primal (Apex Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fc primal",
      "far cry primal",
      "takkar"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-tom-clancy-the-division-2-warlords-of-new-york",
    "title": "Tom Clancy The Division 2: Warlords of New York",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Tom Clancy The Division 2: Warlords of New York with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "division 2",
      "division",
      "warlords of new york"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-tom-clancy-ghost-recon-breakpoint",
    "title": "Tom Clancy Ghost Recon Breakpoint",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2021,
    "popular": false,
    "description": "Experience Tom Clancy Ghost Recon Breakpoint with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "breakpoint",
      "ghost recon"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-tom-clancy-ghost-recon-wildlands-ultimate",
    "title": "Tom Clancy Ghost Recon Wildlands (Ultimate)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Tom Clancy Ghost Recon Wildlands (Ultimate) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "wildlands",
      "bolivia ghost recon"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-tom-clancy-rainbow-six-siege-operator-edition",
    "title": "Tom Clancy Rainbow Six Siege (Operator Edition)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Tom Clancy Rainbow Six Siege (Operator Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "r6s",
      "r6 siege",
      "rainbow six siege",
      "siege"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-hitman-world-of-assassination-hitman-1-2-3",
    "title": "Hitman World of Assassination (Hitman 1, 2 & 3)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Hitman World of Assassination (Hitman 1, 2 & 3) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "hitman 3",
      "hitman woa",
      "agent 47",
      "hitman"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-sniper-elite-5-complete-edition",
    "title": "Sniper Elite 5 (Complete Edition)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Sniper Elite 5 (Complete Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "sniper elite 5",
      "karl fairburne",
      "xray killcam"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-sniper-ghost-warrior-contracts-2",
    "title": "Sniper Ghost Warrior Contracts 2",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Experience Sniper Ghost Warrior Contracts 2 with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "contracts 2",
      "sgw contracts"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-borderlands-4-vault-hunter-returns",
    "title": "Borderlands 4 (Vault Hunter Returns)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2025,
    "popular": true,
    "description": "Experience Borderlands 4 (Vault Hunter Returns) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "bl4",
      "borderlands 4",
      "borderlands"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-borderlands-3-super-deluxe-edition",
    "title": "Borderlands 3 (Super Deluxe Edition)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Borderlands 3 (Super Deluxe Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "bl3",
      "borderlands 3",
      "claptrap"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-tiny-tina-wonderlands-chaotic-great",
    "title": "Tiny Tina Wonderlands (Chaotic Great)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Experience Tiny Tina Wonderlands (Chaotic Great) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "tiny tina",
      "wonderlands"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-borderlands-the-handsome-collection",
    "title": "Borderlands: The Handsome Collection",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2019,
    "popular": true,
    "description": "Experience Borderlands: The Handsome Collection with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "borderlands 2",
      "handsome jack",
      "pre sequel"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-s-t-a-l-k-e-r-2-heart-of-chornobyl",
    "title": "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience S.T.A.L.K.E.R. 2: Heart of Chornobyl with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "stalker 2",
      "heart of chornobyl",
      "chernobyl",
      "stalker"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-metro-exodus-enhanced-pc-edition",
    "title": "Metro Exodus (Enhanced PC Edition)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Metro Exodus (Enhanced PC Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "metro exodus",
      "artyom",
      "metro"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-metro-2033-last-light-redux",
    "title": "Metro 2033 & Last Light Redux",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2020,
    "popular": false,
    "description": "Experience Metro 2033 & Last Light Redux with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "metro redux",
      "metro 2033",
      "last light"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-atomic-heart-trapped-in-limbo-bundle",
    "title": "Atomic Heart (Trapped in Limbo Bundle)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Atomic Heart (Trapped in Limbo Bundle) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "atomic heart",
      "major nechayev"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-remnant-ii-ultimate-edition",
    "title": "Remnant II (Ultimate Edition)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Remnant II (Ultimate Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "remnant 2",
      "gunfire games",
      "remnant"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-remnant-from-the-ashes-complete",
    "title": "Remnant: From the Ashes (Complete)",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2021,
    "popular": false,
    "description": "Experience Remnant: From the Ashes (Complete) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "remnant 1",
      "from the ashes"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-warhammer-40-000-space-marine-2",
    "title": "Warhammer 40,000: Space Marine 2",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Warhammer 40,000: Space Marine 2 with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "sm2 warhammer",
      "space marine 2",
      "titus",
      "warhammer"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-warhammer-40-000-darktide",
    "title": "Warhammer 40,000: Darktide",
    "genre": "Action Adventure / Combat",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Experience Warhammer 40,000: Darktide with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "darktide",
      "fatshark"
    ],
    "franchise": "Action, Superhero & Shooters",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-sid-meier-civilization-vii",
    "title": "Sid Meier Civilization VII",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2025,
    "popular": true,
    "description": "Experience Sid Meier Civilization VII with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "civ 7",
      "civ7",
      "civilization 7",
      "firaxis"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-sid-meier-civilization-vi-anthology-edition",
    "title": "Sid Meier Civilization VI (Anthology Edition)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Sid Meier Civilization VI (Anthology Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "civ 6",
      "civ6",
      "civilization 6"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-age-of-empires-iv-anniversary-edition",
    "title": "Age of Empires IV: Anniversary Edition",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Age of Empires IV: Anniversary Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "aoe4",
      "age of empires 4",
      "age of empires"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-age-of-empires-ii-definitive-edition",
    "title": "Age of Empires II: Definitive Edition",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Age of Empires II: Definitive Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "aoe2",
      "age of empires 2"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-age-of-mythology-retold",
    "title": "Age of Mythology: Retold",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Age of Mythology: Retold with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "aom retold",
      "age of mythology"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-cities-skylines-ii-ultimate-edition",
    "title": "Cities: Skylines II (Ultimate Edition)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Cities: Skylines II (Ultimate Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "cities skylines 2",
      "cs2",
      "city builder"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-cities-skylines-mayor-edition",
    "title": "Cities: Skylines (Mayor Edition)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Experience Cities: Skylines (Mayor Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "cities skylines 1",
      "cities skylines"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-total-war-warhammer-iii-immortal-empires",
    "title": "Total War: WARHAMMER III (Immortal Empires)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Total War: WARHAMMER III (Immortal Empires) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "total war warhammer 3",
      "wh3",
      "immortal empires"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-total-war-three-kingdoms",
    "title": "Total War: THREE KINGDOMS",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2020,
    "popular": true,
    "description": "Experience Total War: THREE KINGDOMS with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "three kingdoms",
      "total war 3k"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-total-war-medieval-ii-definitive",
    "title": "Total War: MEDIEVAL II Definitive",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Total War: MEDIEVAL II Definitive with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "medieval 2",
      "total war medieval"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-total-war-rome-ii-emperor-edition",
    "title": "Total War: ROME II Emperor Edition",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2019,
    "popular": false,
    "description": "Experience Total War: ROME II Emperor Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "rome 2",
      "total war rome"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-hearts-of-iron-iv-ultimate-bundle",
    "title": "Hearts of Iron IV (Ultimate Bundle)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Hearts of Iron IV (Ultimate Bundle) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "hoi4",
      "hearts of iron 4",
      "paradox ww2"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-crusader-kings-iii-royal-edition",
    "title": "Crusader Kings III (Royal Edition)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Crusader Kings III (Royal Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ck3",
      "crusader kings 3",
      "medieval dynastic"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-europa-universalis-iv-subscription-edition",
    "title": "Europa Universalis IV (Subscription Edition)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Experience Europa Universalis IV (Subscription Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "eu4",
      "europa universalis 4"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-stellaris-ultimate-galactic-bundle",
    "title": "Stellaris (Ultimate Galactic Bundle)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Stellaris (Ultimate Galactic Bundle) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "stellaris",
      "4x space",
      "grand strategy"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-euro-truck-simulator-2-iberia-west-balkans",
    "title": "Euro Truck Simulator 2 (Iberia & West Balkans)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Euro Truck Simulator 2 (Iberia & West Balkans) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ets2",
      "euro truck 2",
      "truck simulator"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-american-truck-simulator-texas-nebraska",
    "title": "American Truck Simulator (Texas & Nebraska)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience American Truck Simulator (Texas & Nebraska) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "ats",
      "american truck"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-microsoft-flight-simulator-2024",
    "title": "Microsoft Flight Simulator 2024",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Microsoft Flight Simulator 2024 with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "msfs 2024",
      "flight simulator 2024",
      "aviation"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-microsoft-flight-simulator-40th-anniversary",
    "title": "Microsoft Flight Simulator 40th Anniversary",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Microsoft Flight Simulator 40th Anniversary with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "msfs",
      "flight sim 2020"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-farming-simulator-25",
    "title": "Farming Simulator 25",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Farming Simulator 25 with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fs25",
      "farming simulator 25",
      "giants"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-farming-simulator-22-platinum-edition",
    "title": "Farming Simulator 22 (Platinum Edition)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2022,
    "popular": true,
    "description": "Experience Farming Simulator 22 (Platinum Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "fs22",
      "farming simulator 22"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-snowrunner-4-year-anniversary-bundle",
    "title": "SnowRunner (4-Year Anniversary Bundle)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience SnowRunner (4-Year Anniversary Bundle) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "snowrunner",
      "offroad mud truck"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-mudrunner-american-wilds",
    "title": "MudRunner (American Wilds)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2020,
    "popular": false,
    "description": "Experience MudRunner (American Wilds) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "mudrunner",
      "spintires"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-beamng-drive-ultimate-physics-sim",
    "title": "BeamNG.drive (Ultimate Physics Sim)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience BeamNG.drive (Ultimate Physics Sim) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "beamng",
      "beam ng drive",
      "car crash physics"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-sims-4-all-expansion-packs-kits",
    "title": "The Sims 4 (All Expansion Packs & Kits)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience The Sims 4 (All Expansion Packs & Kits) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "sims 4",
      "sims",
      "ea sims"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-planet-zoo-ultimate-collection",
    "title": "Planet Zoo (Ultimate Collection)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Experience Planet Zoo (Ultimate Collection) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "planet zoo",
      "zoo builder"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-planet-coaster-thrillseeker-edition",
    "title": "Planet Coaster (Thrillseeker Edition)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2021,
    "popular": false,
    "description": "Experience Planet Coaster (Thrillseeker Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "planet coaster",
      "theme park"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-jurassic-world-evolution-2-dominion-pack",
    "title": "Jurassic World Evolution 2 (Dominion Pack)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2023,
    "popular": true,
    "description": "Experience Jurassic World Evolution 2 (Dominion Pack) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "jwe2",
      "jurassic world evolution 2",
      "dinosaur park"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-manor-lords-medieval-strategy-sim",
    "title": "Manor Lords (Medieval Strategy Sim)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Manor Lords (Medieval Strategy Sim) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "manor lords",
      "medieval lord"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-frostpunk-2-deluxe-edition",
    "title": "Frostpunk 2 (Deluxe Edition)",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2024,
    "popular": true,
    "description": "Experience Frostpunk 2 (Deluxe Edition) with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "frostpunk 2",
      "11 bit studios",
      "city survival"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-frostpunk-game-of-the-year-edition",
    "title": "Frostpunk: Game of the Year Edition",
    "genre": "Simulation / Strategy / City Builder",
    "category": "action",
    "releaseYear": 2021,
    "popular": false,
    "description": "Experience Frostpunk: Game of the Year Edition with premium high-definition graphics, full story mode, DLC addons, and cloud sync verified access.",
    "aliases": [
      "frostpunk 1",
      "the city must survive"
    ],
    "franchise": "Strategy & Simulation Vault",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-just-cause-4-complete-edition",
    "title": "Just Cause 4: Complete Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Just Cause 4: Complete Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "jc4ce",
      "just",
      "just cause"
    ],
    "franchise": "Just Cause",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-just-cause-3-xxl-edition",
    "title": "Just Cause 3: XXL Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Just Cause 3: XXL Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "jc3xe",
      "just",
      "just cause"
    ],
    "franchise": "Just Cause",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-sleeping-dogs-definitive-edition",
    "title": "Sleeping Dogs: Definitive Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Sleeping Dogs: Definitive Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sdde",
      "sleeping",
      "sleeping dogs"
    ],
    "franchise": "Sleeping Dogs",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-mad-max-road-warrior-edition",
    "title": "Mad Max (Road Warrior Edition)",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Mad Max (Road Warrior Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "mmrwe",
      "mad",
      "mad max"
    ],
    "franchise": "Mad Max",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-darksiders-iii-blades-whip",
    "title": "Darksiders III (Blades & Whip)",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Darksiders III (Blades & Whip). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "dib&w",
      "darksiders",
      "darksiders iii"
    ],
    "franchise": "Darksiders III",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-darksiders-warmastered-deathinitive",
    "title": "Darksiders Warmastered & Deathinitive",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Darksiders Warmastered & Deathinitive. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "dw&d",
      "darksiders",
      "darksiders warmastered"
    ],
    "franchise": "Darksiders Warmastered",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-kingdoms-of-amalur-re-reckoning",
    "title": "Kingdoms of Amalur: Re-Reckoning",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Kingdoms of Amalur: Re-Reckoning. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "koarr",
      "kingdoms",
      "kingdoms of"
    ],
    "franchise": "Kingdoms of",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-greedfall-gold-edition",
    "title": "GreedFall: Gold Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of GreedFall: Gold Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "gge",
      "greedfall",
      "greedfall gold"
    ],
    "franchise": "GreedFall Gold",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-a-plague-tale-requiem",
    "title": "A Plague Tale: Requiem",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of A Plague Tale: Requiem. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "aptr",
      "a",
      "a plague"
    ],
    "franchise": "A Plague",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-a-plague-tale-innocence",
    "title": "A Plague Tale: Innocence",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of A Plague Tale: Innocence. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "apti",
      "a",
      "a plague"
    ],
    "franchise": "A Plague",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-hellblade-senua-sacrifice",
    "title": "Hellblade: Senua Sacrifice",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Hellblade: Senua Sacrifice. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "hss",
      "hellblade",
      "hellblade senua"
    ],
    "franchise": "Hellblade Senua",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-senua-s-saga-hellblade-ii",
    "title": "Senua's Saga: Hellblade II",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Senua's Saga: Hellblade II. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sshi",
      "senua's",
      "senua's saga"
    ],
    "franchise": "Senua's Saga",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-lords-of-the-fallen-goty",
    "title": "Lords of the Fallen: GOTY",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Lords of the Fallen: GOTY. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "lotfg",
      "lords",
      "lords of"
    ],
    "franchise": "Lords of",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-mortal-shell-enhanced-edition",
    "title": "Mortal Shell: Enhanced Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Mortal Shell: Enhanced Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "msee",
      "mortal",
      "mortal shell"
    ],
    "franchise": "Mortal Shell",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-wo-long-fallen-dynasty",
    "title": "Wo Long: Fallen Dynasty",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Wo Long: Fallen Dynasty. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "wlfd",
      "wo",
      "wo long"
    ],
    "franchise": "Wo Long",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-nioh-2-the-complete-edition",
    "title": "Nioh 2: The Complete Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Nioh 2: The Complete Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "n2tce",
      "nioh",
      "nioh 2"
    ],
    "franchise": "Nioh 2",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-nioh-complete-edition",
    "title": "Nioh: Complete Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Nioh: Complete Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "nce",
      "nioh",
      "nioh complete"
    ],
    "franchise": "Nioh Complete",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-strangers-of-paradise-final-fantasy-origin",
    "title": "Strangers of Paradise: Final Fantasy Origin",
    "genre": "RPG ADVENTURE / PC AAA",
    "category": "rpg-adventure",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Strangers of Paradise: Final Fantasy Origin. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "strangers",
      "strangers of"
    ],
    "franchise": "Strangers of",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-crisis-core-final-fantasy-vii-reunion",
    "title": "Crisis Core: Final Fantasy VII Reunion",
    "genre": "RPG ADVENTURE / PC AAA",
    "category": "rpg-adventure",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Crisis Core: Final Fantasy VII Reunion. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "crisis",
      "crisis core"
    ],
    "franchise": "Crisis Core",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-valkyrie-elysium",
    "title": "Valkyrie Elysium",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Valkyrie Elysium. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ve",
      "valkyrie",
      "valkyrie elysium"
    ],
    "franchise": "Valkyrie Elysium",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-star-ocean-the-divine-force",
    "title": "Star Ocean: The Divine Force",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Star Ocean: The Divine Force. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sotdf",
      "star",
      "star ocean"
    ],
    "franchise": "Star Ocean",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-tales-of-arise",
    "title": "Tales of Arise",
    "genre": "RPG ADVENTURE / PC AAA",
    "category": "rpg-adventure",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Tales of Arise. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "toa",
      "tales",
      "tales of"
    ],
    "franchise": "Tales of",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-scarlet-nexus",
    "title": "Scarlet Nexus",
    "genre": "RACING SPORTS / PC AAA",
    "category": "racing-sports",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Scarlet Nexus. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sn",
      "scarlet",
      "scarlet nexus"
    ],
    "franchise": "Scarlet Nexus",
    "coverImage": "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-code-vein-deluxe-edition",
    "title": "Code Vein (Deluxe Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Code Vein (Deluxe Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "cvde",
      "code",
      "code vein"
    ],
    "franchise": "Code Vein",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-god-eater-3",
    "title": "God Eater 3",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of God Eater 3. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ge3",
      "god",
      "god eater"
    ],
    "franchise": "God Eater",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-sword-art-online-last-recollection",
    "title": "Sword Art Online: Last Recollection",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Sword Art Online: Last Recollection. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "saolr",
      "sword",
      "sword art"
    ],
    "franchise": "Sword Art",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-one-piece-odyssey",
    "title": "One Piece Odyssey",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of One Piece Odyssey. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "opo",
      "one",
      "one piece"
    ],
    "franchise": "One Piece",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-one-piece-pirate-warriors-4",
    "title": "One Piece: Pirate Warriors 4",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of One Piece: Pirate Warriors 4. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "oppw4",
      "one",
      "one piece"
    ],
    "franchise": "One Piece",
    "coverImage": "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-jump-force-ultimate-edition",
    "title": "JUMP FORCE: Ultimate Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of JUMP FORCE: Ultimate Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "jfue",
      "jump",
      "jump force"
    ],
    "franchise": "JUMP FORCE",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles",
    "title": "Demon Slayer: Kimetsu no Yaiba - The Hinokami Chronicles",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Demon Slayer: Kimetsu no Yaiba - The Hinokami Chronicles. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "demon",
      "demon slayer"
    ],
    "franchise": "Demon Slayer",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-attack-on-titan-2-final-battle",
    "title": "Attack on Titan 2: Final Battle",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Attack on Titan 2: Final Battle. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "attack",
      "attack on"
    ],
    "franchise": "Attack on",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-my-hero-one-justice-2",
    "title": "My Hero One Justice 2",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of My Hero One Justice 2. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "mhoj2",
      "my",
      "my hero"
    ],
    "franchise": "My Hero",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-jojo-bizarre-adventure-all-star-battle-r",
    "title": "JoJo Bizarre Adventure: All-Star Battle R",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of JoJo Bizarre Adventure: All-Star Battle R. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "jojo",
      "jojo bizarre"
    ],
    "franchise": "JoJo Bizarre",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-bleach-brave-souls-rebirth-of-souls",
    "title": "Bleach: Brave Souls & Rebirth of Souls",
    "genre": "RPG ADVENTURE / PC AAA",
    "category": "rpg-adventure",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Bleach: Brave Souls & Rebirth of Souls. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "bleach",
      "bleach brave"
    ],
    "franchise": "Bleach Brave",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-yakuza-like-a-dragon-hero-edition",
    "title": "Yakuza: Like a Dragon (Hero Edition)",
    "genre": "RPG ADVENTURE / PC AAA",
    "category": "rpg-adventure",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Yakuza: Like a Dragon (Hero Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "yakuza",
      "yakuza like"
    ],
    "franchise": "Yakuza Like",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-like-a-dragon-infinite-wealth",
    "title": "Like a Dragon: Infinite Wealth",
    "genre": "RPG ADVENTURE / PC AAA",
    "category": "rpg-adventure",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Like a Dragon: Infinite Wealth. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ladiw",
      "like",
      "like a"
    ],
    "franchise": "Like a",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-like-a-dragon-the-man-who-erased-his-name",
    "title": "Like a Dragon: The Man Who Erased His Name",
    "genre": "RPG ADVENTURE / PC AAA",
    "category": "rpg-adventure",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Like a Dragon: The Man Who Erased His Name. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "like",
      "like a"
    ],
    "franchise": "Like a",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-yakuza-0",
    "title": "Yakuza 0",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Yakuza 0. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "y0",
      "yakuza",
      "yakuza 0"
    ],
    "franchise": "Yakuza 0",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-yakuza-kiwami",
    "title": "Yakuza Kiwami",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Yakuza Kiwami. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "yk",
      "yakuza",
      "yakuza kiwami"
    ],
    "franchise": "Yakuza Kiwami",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-yakuza-kiwami-2",
    "title": "Yakuza Kiwami 2",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Yakuza Kiwami 2. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "yk2",
      "yakuza",
      "yakuza kiwami"
    ],
    "franchise": "Yakuza Kiwami",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-yakuza-3-remastered",
    "title": "Yakuza 3 Remastered",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Yakuza 3 Remastered. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "y3r",
      "yakuza",
      "yakuza 3"
    ],
    "franchise": "Yakuza 3",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-yakuza-4-remastered",
    "title": "Yakuza 4 Remastered",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Yakuza 4 Remastered. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "y4r",
      "yakuza",
      "yakuza 4"
    ],
    "franchise": "Yakuza 4",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-yakuza-5-remastered",
    "title": "Yakuza 5 Remastered",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Yakuza 5 Remastered. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "y5r",
      "yakuza",
      "yakuza 5"
    ],
    "franchise": "Yakuza 5",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-yakuza-6-the-song-of-life",
    "title": "Yakuza 6: The Song of Life",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Yakuza 6: The Song of Life. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "yakuza",
      "yakuza 6"
    ],
    "franchise": "Yakuza 6",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-judgment-pc-remastered",
    "title": "Judgment (PC Remastered)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Judgment (PC Remastered). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "jpr",
      "judgment",
      "judgment pc"
    ],
    "franchise": "Judgment PC",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-lost-judgment-digital-deluxe",
    "title": "Lost Judgment: Digital Deluxe",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Lost Judgment: Digital Deluxe. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ljdd",
      "lost",
      "lost judgment"
    ],
    "franchise": "Lost Judgment",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-ghostwire-tokyo-spiders-thread-update",
    "title": "Ghostwire: Tokyo (Spiders Thread Update)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Ghostwire: Tokyo (Spiders Thread Update). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "gtstu",
      "ghostwire",
      "ghostwire tokyo"
    ],
    "franchise": "Ghostwire Tokyo",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-shadow-of-the-tomb-raider-definitive-edition",
    "title": "Shadow of the Tomb Raider: Definitive Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Shadow of the Tomb Raider: Definitive Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "shadow",
      "shadow of"
    ],
    "franchise": "Shadow of",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-rise-of-the-tomb-raider-20-year-celebration",
    "title": "Rise of the Tomb Raider: 20 Year Celebration",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Rise of the Tomb Raider: 20 Year Celebration. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "rise",
      "rise of"
    ],
    "franchise": "Rise of",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-tomb-raider-goty-2013",
    "title": "Tomb Raider: GOTY (2013)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Tomb Raider: GOTY (2013). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "trg2",
      "tomb",
      "tomb raider"
    ],
    "franchise": "Tomb Raider",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-deus-ex-mankind-divided-deluxe",
    "title": "Deus Ex: Mankind Divided (Deluxe)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Deus Ex: Mankind Divided (Deluxe). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "demdd",
      "deus",
      "deus ex"
    ],
    "franchise": "Deus Ex",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-deus-ex-human-revolution-director-cut",
    "title": "Deus Ex: Human Revolution Director Cut",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Deus Ex: Human Revolution Director Cut. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "deus",
      "deus ex"
    ],
    "franchise": "Deus Ex",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-thief-master-edition",
    "title": "Thief (Master Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Thief (Master Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "tme",
      "thief",
      "thief master"
    ],
    "franchise": "Thief Master",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-hitman-blood-money-hd-remaster",
    "title": "Hitman: Blood Money (HD Remaster)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Hitman: Blood Money (HD Remaster). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "hbmhr",
      "hitman",
      "hitman blood"
    ],
    "franchise": "Hitman Blood",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-hitman-absolution",
    "title": "Hitman: Absolution",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Hitman: Absolution. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ha",
      "hitman",
      "hitman absolution"
    ],
    "franchise": "Hitman Absolution",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-splinter-cell-blacklist",
    "title": "Splinter Cell: Blacklist",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Splinter Cell: Blacklist. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "scb",
      "splinter",
      "splinter cell"
    ],
    "franchise": "Splinter Cell",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-splinter-cell-conviction",
    "title": "Splinter Cell: Conviction",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Splinter Cell: Conviction. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "scc",
      "splinter",
      "splinter cell"
    ],
    "franchise": "Splinter Cell",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-metal-gear-rising-revengeance",
    "title": "Metal Gear Rising: Revengeance",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Metal Gear Rising: Revengeance. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "mgrr",
      "metal",
      "metal gear"
    ],
    "franchise": "Metal Gear",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-castlevania-lords-of-shadow-1-2",
    "title": "Castlevania: Lords of Shadow 1 & 2",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Castlevania: Lords of Shadow 1 & 2. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "castlevania",
      "castlevania lords"
    ],
    "franchise": "Castlevania Lords",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-bayonetta-4k-pc-edition",
    "title": "Bayonetta (4K PC Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Bayonetta (4K PC Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "b4pe",
      "bayonetta",
      "bayonetta 4k"
    ],
    "franchise": "Bayonetta 4K",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-vanquish",
    "title": "Vanquish",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Vanquish. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "vanquish"
    ],
    "franchise": "Vanquish",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-devil-may-cry-5-special-edition",
    "title": "Devil May Cry 5: Special Edition",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Devil May Cry 5: Special Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "devil",
      "devil may"
    ],
    "franchise": "Devil May",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-devil-may-cry-hd-collection-dmc-1-2-3",
    "title": "Devil May Cry HD Collection (DMC 1, 2, 3)",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Devil May Cry HD Collection (DMC 1, 2, 3). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "devil",
      "devil may"
    ],
    "franchise": "Devil May",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dmc-devil-may-cry",
    "title": "DmC: Devil May Cry",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of DmC: Devil May Cry. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ddmc",
      "dmc",
      "dmc devil"
    ],
    "franchise": "DmC Devil",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dragon-ball-xenoverse-2-all-dlc",
    "title": "Dragon Ball Xenoverse 2 (All DLC)",
    "genre": "RPG ADVENTURE / PC AAA",
    "category": "rpg-adventure",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Dragon Ball Xenoverse 2 (All DLC). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "dragon",
      "dragon ball"
    ],
    "franchise": "Dragon Ball",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dragon-ball-fighterz",
    "title": "Dragon Ball FighterZ",
    "genre": "RPG ADVENTURE / PC AAA",
    "category": "rpg-adventure",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Dragon Ball FighterZ. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "dbf",
      "dragon",
      "dragon ball"
    ],
    "franchise": "Dragon Ball",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dragon-ball-z-kakarot-legendary-edition",
    "title": "Dragon Ball Z: Kakarot (Legendary Edition)",
    "genre": "RPG ADVENTURE / PC AAA",
    "category": "rpg-adventure",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Dragon Ball Z: Kakarot (Legendary Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "dragon",
      "dragon ball"
    ],
    "franchise": "Dragon Ball",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dead-rising-deluxe-remaster-2024",
    "title": "Dead Rising Deluxe Remaster (2024)",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Dead Rising Deluxe Remaster (2024). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "drdr2",
      "dead",
      "dead rising"
    ],
    "franchise": "Dead Rising",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dead-rising-4-frank-big-package",
    "title": "Dead Rising 4 (Frank Big Package)",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Dead Rising 4 (Frank Big Package). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "dead",
      "dead rising"
    ],
    "franchise": "Dead Rising",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dead-rising-3-apocalypse-edition",
    "title": "Dead Rising 3: Apocalypse Edition",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Dead Rising 3: Apocalypse Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "dr3ae",
      "dead",
      "dead rising"
    ],
    "franchise": "Dead Rising",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-state-of-decay-2-juggernaut-edition",
    "title": "State of Decay 2: Juggernaut Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of State of Decay 2: Juggernaut Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "state",
      "state of"
    ],
    "franchise": "State of",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-state-of-decay-year-one-survival-edition",
    "title": "State of Decay: Year One Survival Edition",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of State of Decay: Year One Survival Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "state",
      "state of"
    ],
    "franchise": "State of",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-days-of-decay-dead-frontier",
    "title": "Days of Decay: Dead Frontier",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Days of Decay: Dead Frontier. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "doddf",
      "days",
      "days of"
    ],
    "franchise": "Days of",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-left-4-dead-2-uncut-collection",
    "title": "Left 4 Dead 2 (Uncut Collection)",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Left 4 Dead 2 (Uncut Collection). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "left",
      "left 4"
    ],
    "franchise": "Left 4",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-left-4-dead-original-goty",
    "title": "Left 4 Dead (Original GOTY)",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Left 4 Dead (Original GOTY). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "l4dog",
      "left",
      "left 4"
    ],
    "franchise": "Left 4",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-back-4-blood-ultimate-edition",
    "title": "Back 4 Blood: Ultimate Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Back 4 Blood: Ultimate Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "b4bue",
      "back",
      "back 4"
    ],
    "franchise": "Back 4",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-world-war-z-aftermath",
    "title": "World War Z: Aftermath",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of World War Z: Aftermath. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "wwza",
      "world",
      "world war"
    ],
    "franchise": "World War",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-killing-floor-2-ultimate-edition",
    "title": "Killing Floor 2 (Ultimate Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Killing Floor 2 (Ultimate Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "kf2ue",
      "killing",
      "killing floor"
    ],
    "franchise": "Killing Floor",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-killing-floor-3-next-gen-co-op",
    "title": "Killing Floor 3 (Next Gen Co-op)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Killing Floor 3 (Next Gen Co-op). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "killing",
      "killing floor"
    ],
    "franchise": "Killing Floor",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-payday-3-silver-edition",
    "title": "Payday 3 (Silver Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Payday 3 (Silver Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "p3se",
      "payday",
      "payday 3"
    ],
    "franchise": "Payday 3",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-payday-2-legacy-collection",
    "title": "Payday 2: Legacy Collection",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Payday 2: Legacy Collection. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "p2lc",
      "payday",
      "payday 2"
    ],
    "franchise": "Payday 2",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-gtfo-full-rundown-co-op",
    "title": "GTFO (Full Rundown Co-op)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of GTFO (Full Rundown Co-op). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "gfrco",
      "gtfo",
      "gtfo full"
    ],
    "franchise": "GTFO Full",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-deep-rock-galactic-survivor-co-op",
    "title": "Deep Rock Galactic: Survivor & Co-op",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Deep Rock Galactic: Survivor & Co-op. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "deep",
      "deep rock"
    ],
    "franchise": "Deep Rock",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-helldivers-dive-harder-edition",
    "title": "Helldivers: Dive Harder Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Helldivers: Dive Harder Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "hdhe",
      "helldivers",
      "helldivers dive"
    ],
    "franchise": "Helldivers Dive",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-alien-fireteam-elite-pathogen",
    "title": "Alien: Fireteam Elite (Pathogen)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Alien: Fireteam Elite (Pathogen). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "afep",
      "alien",
      "alien fireteam"
    ],
    "franchise": "Alien Fireteam",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-aliens-dark-descent",
    "title": "Aliens: Dark Descent",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Aliens: Dark Descent. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "add",
      "aliens",
      "aliens dark"
    ],
    "franchise": "Aliens Dark",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-predator-hunting-grounds",
    "title": "Predator: Hunting Grounds",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Predator: Hunting Grounds. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "phg",
      "predator",
      "predator hunting"
    ],
    "franchise": "Predator Hunting",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-friday-the-13th-the-game-ultimate",
    "title": "Friday the 13th: The Game (Ultimate)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Friday the 13th: The Game (Ultimate). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "friday",
      "friday the"
    ],
    "franchise": "Friday the",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dead-by-daylight-all-killers-pack",
    "title": "Dead by Daylight (All Killers Pack)",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Dead by Daylight (All Killers Pack). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "dead",
      "dead by"
    ],
    "franchise": "Dead by",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-texas-chain-saw-massacre-game",
    "title": "Texas Chain Saw Massacre (Game)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Texas Chain Saw Massacre (Game). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "tcsmg",
      "texas",
      "texas chain"
    ],
    "franchise": "Texas Chain",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dark-deception-complete-nightmare",
    "title": "Dark Deception: Complete Nightmare",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Dark Deception: Complete Nightmare. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ddcn",
      "dark",
      "dark deception"
    ],
    "franchise": "Dark Deception",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-poppy-playtime-chapters-1-2-3-4",
    "title": "Poppy Playtime: Chapters 1, 2, 3 & 4",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Poppy Playtime: Chapters 1, 2, 3 & 4. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "poppy",
      "poppy playtime"
    ],
    "franchise": "Poppy Playtime",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-bendy-and-the-dark-revival",
    "title": "Bendy and the Dark Revival",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Bendy and the Dark Revival. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "batdr",
      "bendy",
      "bendy and"
    ],
    "franchise": "Bendy and",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-bendy-and-the-ink-machine",
    "title": "Bendy and the Ink Machine",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Bendy and the Ink Machine. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "batim",
      "bendy",
      "bendy and"
    ],
    "franchise": "Bendy and",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-hello-neighbor-2-deluxe-edition",
    "title": "Hello Neighbor 2: Deluxe Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Hello Neighbor 2: Deluxe Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "hn2de",
      "hello",
      "hello neighbor"
    ],
    "franchise": "Hello Neighbor",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-hello-neighbor",
    "title": "Hello Neighbor",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Hello Neighbor. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "hn",
      "hello",
      "hello neighbor"
    ],
    "franchise": "Hello Neighbor",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-slender-the-arrival-10-year-anniversary",
    "title": "Slender: The Arrival (10 Year Anniversary)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Slender: The Arrival (10 Year Anniversary). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "slender",
      "slender the"
    ],
    "franchise": "Slender The",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-cry-of-fear-enhanced",
    "title": "Cry of Fear (Enhanced)",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Cry of Fear (Enhanced). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "cofe",
      "cry",
      "cry of"
    ],
    "franchise": "Cry of",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-tormented-souls",
    "title": "Tormented Souls",
    "genre": "RPG ADVENTURE / PC AAA",
    "category": "rpg-adventure",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Tormented Souls. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ts",
      "tormented",
      "tormented souls"
    ],
    "franchise": "Tormented Souls",
    "coverImage": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-signalis-retro-survival-horror",
    "title": "Signalis (Retro Survival Horror)",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Signalis (Retro Survival Horror). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "srsh",
      "signalis",
      "signalis retro"
    ],
    "franchise": "Signalis Retro",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-crow-country",
    "title": "Crow Country",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Crow Country. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "cc",
      "crow",
      "crow country"
    ],
    "franchise": "Crow Country",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-fatal-frame-maiden-of-black-water",
    "title": "Fatal Frame: Maiden of Black Water",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Fatal Frame: Maiden of Black Water. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "fatal",
      "fatal frame"
    ],
    "franchise": "Fatal Frame",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-fatal-frame-mask-of-the-lunar-eclipse",
    "title": "Fatal Frame: Mask of the Lunar Eclipse",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Fatal Frame: Mask of the Lunar Eclipse. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "fatal",
      "fatal frame"
    ],
    "franchise": "Fatal Frame",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-siren-blood-curse-pc-port",
    "title": "Siren: Blood Curse PC Port",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Siren: Blood Curse PC Port. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sbcpp",
      "siren",
      "siren blood"
    ],
    "franchise": "Siren Blood",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-condemned-criminal-origins",
    "title": "Condemned: Criminal Origins",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Condemned: Criminal Origins. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "cco",
      "condemned",
      "condemned criminal"
    ],
    "franchise": "Condemned Criminal",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-f-e-a-r-platinum-collection-1-2-3",
    "title": "F.E.A.R. Platinum Collection (1, 2 & 3)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of F.E.A.R. Platinum Collection (1, 2 & 3). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "f.e.a.r.",
      "f.e.a.r. platinum"
    ],
    "franchise": "F.E.A.R. Platinum",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-bioshock-infinite-the-complete-edition",
    "title": "BioShock Infinite: The Complete Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of BioShock Infinite: The Complete Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "bitce",
      "bioshock",
      "bioshock infinite"
    ],
    "franchise": "BioShock Infinite",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-bioshock-remastered",
    "title": "BioShock Remastered",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of BioShock Remastered. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "br",
      "bioshock",
      "bioshock remastered"
    ],
    "franchise": "BioShock Remastered",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-bioshock-2-remastered",
    "title": "BioShock 2 Remastered",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of BioShock 2 Remastered. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "b2r",
      "bioshock",
      "bioshock 2"
    ],
    "franchise": "BioShock 2",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-singularity",
    "title": "Singularity",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Singularity. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "singularity"
    ],
    "franchise": "Singularity",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-spec-ops-the-line",
    "title": "Spec Ops: The Line",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Spec Ops: The Line. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sotl",
      "spec",
      "spec ops"
    ],
    "franchise": "Spec Ops",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-max-payne-3-the-complete-edition",
    "title": "Max Payne 3: The Complete Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Max Payne 3: The Complete Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "max",
      "max payne"
    ],
    "franchise": "Max Payne",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-max-payne-1-2-remake-pre-vault",
    "title": "Max Payne 1 & 2 Remake Pre-Vault",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Max Payne 1 & 2 Remake Pre-Vault. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "max",
      "max payne"
    ],
    "franchise": "Max Payne",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-alan-wake-american-nightmare",
    "title": "Alan Wake: American Nightmare",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Alan Wake: American Nightmare. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "awan",
      "alan",
      "alan wake"
    ],
    "franchise": "Alan Wake",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-heavy-rain-pc-edition",
    "title": "Heavy Rain (PC Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Heavy Rain (PC Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "hrpe",
      "heavy",
      "heavy rain"
    ],
    "franchise": "Heavy Rain",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-beyond-two-souls-pc",
    "title": "Beyond: Two Souls (PC)",
    "genre": "RPG ADVENTURE / PC AAA",
    "category": "rpg-adventure",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Beyond: Two Souls (PC). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "btsp",
      "beyond",
      "beyond two"
    ],
    "franchise": "Beyond Two",
    "coverImage": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-detroit-become-human",
    "title": "Detroit: Become Human",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Detroit: Become Human. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "dbh",
      "detroit",
      "detroit become"
    ],
    "franchise": "Detroit Become",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-life-is-strange-true-colors",
    "title": "Life is Strange: True Colors",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Life is Strange: True Colors. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "listc",
      "life",
      "life is"
    ],
    "franchise": "Life is",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-life-is-strange-remastered-collection",
    "title": "Life is Strange: Remastered Collection",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Life is Strange: Remastered Collection. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "lisrc",
      "life",
      "life is"
    ],
    "franchise": "Life is",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-life-is-strange-2",
    "title": "Life is Strange 2",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Life is Strange 2. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "lis2",
      "life",
      "life is"
    ],
    "franchise": "Life is",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-life-is-strange-double-exposure",
    "title": "Life is Strange: Double Exposure",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Life is Strange: Double Exposure. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "lisde",
      "life",
      "life is"
    ],
    "franchise": "Life is",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-walking-dead-the-telltale-definitive-series",
    "title": "The Walking Dead: The Telltale Definitive Series",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of The Walking Dead: The Telltale Definitive Series. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "the",
      "the walking"
    ],
    "franchise": "The Walking",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-wolf-among-us-2-a-telltale-series",
    "title": "The Wolf Among Us 2 (A Telltale Series)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of The Wolf Among Us 2 (A Telltale Series). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "the",
      "the wolf"
    ],
    "franchise": "The Wolf",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-wolf-among-us",
    "title": "The Wolf Among Us",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of The Wolf Among Us. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "twau",
      "the",
      "the wolf"
    ],
    "franchise": "The Wolf",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-tales-from-the-borderlands",
    "title": "Tales from the Borderlands",
    "genre": "RPG ADVENTURE / PC AAA",
    "category": "rpg-adventure",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Tales from the Borderlands. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "tftb",
      "tales",
      "tales from"
    ],
    "franchise": "Tales from",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-batman-the-telltale-series-shadows-edition",
    "title": "Batman: The Telltale Series (Shadows Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Batman: The Telltale Series (Shadows Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "batman",
      "batman the"
    ],
    "franchise": "Batman The",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-game-of-thrones-a-telltale-games-series",
    "title": "Game of Thrones: A Telltale Games Series",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Game of Thrones: A Telltale Games Series. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "game",
      "game of"
    ],
    "franchise": "Game of",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-until-dawn-2024-pc-remake",
    "title": "Until Dawn (2024 PC Remake)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Until Dawn (2024 PC Remake). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ud2pr",
      "until",
      "until dawn"
    ],
    "franchise": "Until Dawn",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-quarry-deluxe-edition",
    "title": "The Quarry (Deluxe Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of The Quarry (Deluxe Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "tqde",
      "the",
      "the quarry"
    ],
    "franchise": "The Quarry",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-dark-pictures-the-devil-in-me",
    "title": "The Dark Pictures: The Devil in Me",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of The Dark Pictures: The Devil in Me. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "the",
      "the dark"
    ],
    "franchise": "The Dark",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-dark-pictures-house-of-ashes",
    "title": "The Dark Pictures: House of Ashes",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of The Dark Pictures: House of Ashes. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "the",
      "the dark"
    ],
    "franchise": "The Dark",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-dark-pictures-little-hope",
    "title": "The Dark Pictures: Little Hope",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of The Dark Pictures: Little Hope. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "tdplh",
      "the",
      "the dark"
    ],
    "franchise": "The Dark",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-dark-pictures-man-of-medan",
    "title": "The Dark Pictures: Man of Medan",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of The Dark Pictures: Man of Medan. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "the",
      "the dark"
    ],
    "franchise": "The Dark",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-soma-sci-fi-horror",
    "title": "SOMA (Sci-Fi Horror)",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of SOMA (Sci-Fi Horror). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ssfh",
      "soma",
      "soma sci"
    ],
    "franchise": "SOMA Sci",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-observer-system-redux",
    "title": "Observer: System Redux",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Observer: System Redux. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "osr",
      "observer",
      "observer system"
    ],
    "franchise": "Observer System",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-layers-of-fear-2023-ue5-remake",
    "title": "Layers of Fear (2023 UE5 Remake)",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Layers of Fear (2023 UE5 Remake). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "layers",
      "layers of"
    ],
    "franchise": "Layers of",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-layers-of-fear-2",
    "title": "Layers of Fear 2",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Layers of Fear 2. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "lof2",
      "layers",
      "layers of"
    ],
    "franchise": "Layers of",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-blair-witch-deluxe-horror",
    "title": "Blair Witch (Deluxe Horror)",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Blair Witch (Deluxe Horror). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "bwdh",
      "blair",
      "blair witch"
    ],
    "franchise": "Blair Witch",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-medium",
    "title": "The Medium",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of The Medium. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "tm",
      "the",
      "the medium"
    ],
    "franchise": "The Medium",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-ghostrunner-2-brutal-edition",
    "title": "Ghostrunner 2 (Brutal Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Ghostrunner 2 (Brutal Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "g2be",
      "ghostrunner",
      "ghostrunner 2"
    ],
    "franchise": "Ghostrunner 2",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-ghostrunner-complete",
    "title": "Ghostrunner (Complete)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Ghostrunner (Complete). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "gc",
      "ghostrunner",
      "ghostrunner complete"
    ],
    "franchise": "Ghostrunner Complete",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-severed-steel",
    "title": "Severed Steel",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Severed Steel. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ss",
      "severed",
      "severed steel"
    ],
    "franchise": "Severed Steel",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-bright-memory-infinite-gold",
    "title": "Bright Memory: Infinite (Gold)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Bright Memory: Infinite (Gold). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "bmig",
      "bright",
      "bright memory"
    ],
    "franchise": "Bright Memory",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-trek-to-yomi",
    "title": "Trek to Yomi",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Trek to Yomi. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "tty",
      "trek",
      "trek to"
    ],
    "franchise": "Trek to",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-sifu-deluxe-edition",
    "title": "Sifu (Deluxe Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Sifu (Deluxe Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sde",
      "sifu",
      "sifu deluxe"
    ],
    "franchise": "Sifu Deluxe",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-midnight-fight-express",
    "title": "Midnight Fight Express",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Midnight Fight Express. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "mfe",
      "midnight",
      "midnight fight"
    ],
    "franchise": "Midnight Fight",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-ruined-king-a-league-of-legends-story",
    "title": "Ruined King: A League of Legends Story",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Ruined King: A League of Legends Story. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ruined",
      "ruined king"
    ],
    "franchise": "Ruined King",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-mageseeker-a-league-of-legends-story",
    "title": "The Mageseeker: A League of Legends Story",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of The Mageseeker: A League of Legends Story. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "the",
      "the mageseeker"
    ],
    "franchise": "The Mageseeker",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-song-of-nunu-a-league-of-legends-story",
    "title": "Song of Nunu: A League of Legends Story",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Song of Nunu: A League of Legends Story. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "song",
      "song of"
    ],
    "franchise": "Song of",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-convergence-a-league-of-legends-story",
    "title": "Convergence: A League of Legends Story",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Convergence: A League of Legends Story. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "convergence",
      "convergence a"
    ],
    "franchise": "Convergence A",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-hades-ii-olympic-early-access",
    "title": "Hades II (Olympic Early Access)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Hades II (Olympic Early Access). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "hioea",
      "hades",
      "hades ii"
    ],
    "franchise": "Hades II",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-hades-goty-edition",
    "title": "Hades (GOTY Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Hades (GOTY Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "hge",
      "hades",
      "hades goty"
    ],
    "franchise": "Hades GOTY",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dead-cells-return-to-castlevania",
    "title": "Dead Cells: Return to Castlevania",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Dead Cells: Return to Castlevania. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "dcrtc",
      "dead",
      "dead cells"
    ],
    "franchise": "Dead Cells",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-hollow-knight-silksong-pre-vault",
    "title": "Hollow Knight: Silksong (Pre-Vault)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Hollow Knight: Silksong (Pre-Vault). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "hkspv",
      "hollow",
      "hollow knight"
    ],
    "franchise": "Hollow Knight",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-hollow-knight-voidheart-edition",
    "title": "Hollow Knight (Voidheart Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Hollow Knight (Voidheart Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "hkve",
      "hollow",
      "hollow knight"
    ],
    "franchise": "Hollow Knight",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-ori-and-the-will-of-the-wisps",
    "title": "Ori and the Will of the Wisps",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Ori and the Will of the Wisps. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ori",
      "ori and"
    ],
    "franchise": "Ori and",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-ori-and-the-blind-forest-definitive",
    "title": "Ori and the Blind Forest: Definitive",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Ori and the Blind Forest: Definitive. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ori",
      "ori and"
    ],
    "franchise": "Ori and",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-cuphead-the-delicious-last-course",
    "title": "Cuphead & The Delicious Last Course",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Cuphead & The Delicious Last Course. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "cuphead",
      "cuphead &"
    ],
    "franchise": "Cuphead &",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-blasphemous-2",
    "title": "Blasphemous 2",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Blasphemous 2. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "b2",
      "blasphemous",
      "blasphemous 2"
    ],
    "franchise": "Blasphemous 2",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-blasphemous",
    "title": "Blasphemous",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Blasphemous. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "blasphemous"
    ],
    "franchise": "Blasphemous",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-bloodstained-ritual-of-the-night",
    "title": "Bloodstained: Ritual of the Night",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Bloodstained: Ritual of the Night. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "brotn",
      "bloodstained",
      "bloodstained ritual"
    ],
    "franchise": "Bloodstained Ritual",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-nine-sols-taopunk-metroidvania",
    "title": "Nine Sols (Taopunk Metroidvania)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Nine Sols (Taopunk Metroidvania). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "nstm",
      "nine",
      "nine sols"
    ],
    "franchise": "Nine Sols",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-animal-well",
    "title": "Animal Well",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Animal Well. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "aw",
      "animal",
      "animal well"
    ],
    "franchise": "Animal Well",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dave-the-diver-deluxe-edition",
    "title": "Dave the Diver (Deluxe Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Dave the Diver (Deluxe Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "dtdde",
      "dave",
      "dave the"
    ],
    "franchise": "Dave the",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dredge-the-pale-reach-the-iron-rig",
    "title": "Dredge: The Pale Reach & The Iron Rig",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Dredge: The Pale Reach & The Iron Rig. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "dredge",
      "dredge the"
    ],
    "franchise": "Dredge The",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-balatro-poker-roguelike",
    "title": "Balatro (Poker Roguelike)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Balatro (Poker Roguelike). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "bpr",
      "balatro",
      "balatro poker"
    ],
    "franchise": "Balatro Poker",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-slay-the-spire",
    "title": "Slay the Spire",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Slay the Spire. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sts",
      "slay",
      "slay the"
    ],
    "franchise": "Slay the",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-monster-train",
    "title": "Monster Train",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Monster Train. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "mt",
      "monster",
      "monster train"
    ],
    "franchise": "Monster Train",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-inscryption",
    "title": "Inscryption",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Inscryption. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "inscryption"
    ],
    "franchise": "Inscryption",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-darkest-dungeon-ii",
    "title": "Darkest Dungeon II",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Darkest Dungeon II. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ddi",
      "darkest",
      "darkest dungeon"
    ],
    "franchise": "Darkest Dungeon",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-darkest-dungeon-ancestral-edition",
    "title": "Darkest Dungeon: Ancestral Edition",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Darkest Dungeon: Ancestral Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ddae",
      "darkest",
      "darkest dungeon"
    ],
    "franchise": "Darkest Dungeon",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-loop-hero",
    "title": "Loop Hero",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Loop Hero. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "lh",
      "loop",
      "loop hero"
    ],
    "franchise": "Loop Hero",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-vampire-survivors-emergency-meeting",
    "title": "Vampire Survivors: Emergency Meeting",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Vampire Survivors: Emergency Meeting. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "vsem",
      "vampire",
      "vampire survivors"
    ],
    "franchise": "Vampire Survivors",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-brotato",
    "title": "Brotato",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Brotato. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "brotato"
    ],
    "franchise": "Brotato",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-death-must-die",
    "title": "Death Must Die",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Death Must Die. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "dmd",
      "death",
      "death must"
    ],
    "franchise": "Death Must",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-risk-of-rain-2-survivors-of-the-void",
    "title": "Risk of Rain 2: Survivors of the Void",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Risk of Rain 2: Survivors of the Void. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "risk",
      "risk of"
    ],
    "franchise": "Risk of",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-risk-of-rain-returns",
    "title": "Risk of Rain Returns",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Risk of Rain Returns. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "rorr",
      "risk",
      "risk of"
    ],
    "franchise": "Risk of",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-gunfire-reborn",
    "title": "Gunfire Reborn",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Gunfire Reborn. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "gr",
      "gunfire",
      "gunfire reborn"
    ],
    "franchise": "Gunfire Reborn",
    "coverImage": "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-roboquest",
    "title": "Roboquest",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Roboquest. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "roboquest"
    ],
    "franchise": "Roboquest",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-ultrakill-full-early-access",
    "title": "Ultrakill (Full Early Access)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Ultrakill (Full Early Access). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ufea",
      "ultrakill",
      "ultrakill full"
    ],
    "franchise": "Ultrakill Full",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-turbo-overkill",
    "title": "Turbo Overkill",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Turbo Overkill. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "to",
      "turbo",
      "turbo overkill"
    ],
    "franchise": "Turbo Overkill",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dusk",
    "title": "Dusk",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Dusk. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "dusk"
    ],
    "franchise": "Dusk",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-amid-evil",
    "title": "Amid Evil",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Amid Evil. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ae",
      "amid",
      "amid evil"
    ],
    "franchise": "Amid Evil",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-ion-fury-aftershock",
    "title": "Ion Fury & Aftershock",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Ion Fury & Aftershock. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "if&a",
      "ion",
      "ion fury"
    ],
    "franchise": "Ion Fury",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-prodeus",
    "title": "Prodeus",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Prodeus. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "prodeus"
    ],
    "franchise": "Prodeus",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-warhammer-40-000-boltgun",
    "title": "Warhammer 40,000: Boltgun",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Warhammer 40,000: Boltgun. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "w40b",
      "warhammer",
      "warhammer 40"
    ],
    "franchise": "Warhammer 40",
    "coverImage": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-quake-ii-enhanced-remaster",
    "title": "Quake II Enhanced Remaster",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Quake II Enhanced Remaster. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "qier",
      "quake",
      "quake ii"
    ],
    "franchise": "Quake II",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-quake-champions-champion-pack",
    "title": "Quake Champions (Champion Pack)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Quake Champions (Champion Pack). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "qccp",
      "quake",
      "quake champions"
    ],
    "franchise": "Quake Champions",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-unreal-tournament-2004-hd-anthology",
    "title": "Unreal Tournament 2004 (HD Anthology)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Unreal Tournament 2004 (HD Anthology). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ut2ha",
      "unreal",
      "unreal tournament"
    ],
    "franchise": "Unreal Tournament",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-enlisted-reinforced-edition",
    "title": "Enlisted: Reinforced Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Enlisted: Reinforced Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ere",
      "enlisted",
      "enlisted reinforced"
    ],
    "franchise": "Enlisted Reinforced",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-hell-let-loose-deluxe-edition",
    "title": "Hell Let Loose (Deluxe Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Hell Let Loose (Deluxe Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "hllde",
      "hell",
      "hell let"
    ],
    "franchise": "Hell Let",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-squad-50v50-tactical-war",
    "title": "Squad: 50v50 Tactical War",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Squad: 50v50 Tactical War. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "s5tw",
      "squad",
      "squad 50v50"
    ],
    "franchise": "Squad 50v50",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-post-scriptum-squad-44",
    "title": "Post Scriptum / Squad 44",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Post Scriptum / Squad 44. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ps/s4",
      "post",
      "post scriptum"
    ],
    "franchise": "Post Scriptum",
    "coverImage": "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-arma-reforger",
    "title": "Arma Reforger",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Arma Reforger. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ar",
      "arma",
      "arma reforger"
    ],
    "franchise": "Arma Reforger",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-arma-3-apex-contact-edition",
    "title": "Arma 3 (Apex & Contact Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Arma 3 (Apex & Contact Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "arma",
      "arma 3"
    ],
    "franchise": "Arma 3",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-insurgency-sandstorm-gold",
    "title": "Insurgency: Sandstorm (Gold)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Insurgency: Sandstorm (Gold). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "isg",
      "insurgency",
      "insurgency sandstorm"
    ],
    "franchise": "Insurgency Sandstorm",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-ready-or-not-1-0-police-tactical-fps",
    "title": "Ready or Not (1.0 Police Tactical FPS)",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Ready or Not (1.0 Police Tactical FPS). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ready",
      "ready or"
    ],
    "franchise": "Ready or",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-six-days-in-fallujah",
    "title": "Six Days in Fallujah",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Six Days in Fallujah. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sdif",
      "six",
      "six days"
    ],
    "franchise": "Six Days",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-zero-hour",
    "title": "Zero Hour",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Zero Hour. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "zh",
      "zero",
      "zero hour"
    ],
    "franchise": "Zero Hour",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-bodycam-hyper-realistic-ue5-fps",
    "title": "Bodycam (Hyper-Realistic UE5 FPS)",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Bodycam (Hyper-Realistic UE5 FPS). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "bhruf",
      "bodycam",
      "bodycam hyper"
    ],
    "franchise": "Bodycam Hyper",
    "coverImage": "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-unrecord-pre-vault-edition",
    "title": "Unrecord Pre-Vault Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Unrecord Pre-Vault Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "upve",
      "unrecord",
      "unrecord pre"
    ],
    "franchise": "Unrecord Pre",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-gray-zone-warfare",
    "title": "Gray Zone Warfare",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Gray Zone Warfare. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "gzw",
      "gray",
      "gray zone"
    ],
    "franchise": "Gray Zone",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-escape-from-tarkov-vault-edition",
    "title": "Escape from Tarkov (Vault Edition)",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Escape from Tarkov (Vault Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "eftve",
      "escape",
      "escape from"
    ],
    "franchise": "Escape from",
    "coverImage": "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-marauders",
    "title": "Marauders",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Marauders. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "marauders"
    ],
    "franchise": "Marauders",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-hunt-showdown-1896",
    "title": "Hunt: Showdown 1896",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Hunt: Showdown 1896. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "hs1",
      "hunt",
      "hunt showdown"
    ],
    "franchise": "Hunt Showdown",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-star-wars-battlefront-ii-celebration-edition",
    "title": "Star Wars: Battlefront II (Celebration Edition)",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Star Wars: Battlefront II (Celebration Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "star",
      "star wars"
    ],
    "franchise": "Star Wars",
    "coverImage": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-star-wars-squadrons",
    "title": "Star Wars: Squadrons",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Star Wars: Squadrons. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sws",
      "star",
      "star wars"
    ],
    "franchise": "Star Wars",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-star-wars-republic-commando-hd",
    "title": "Star Wars: Republic Commando HD",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Star Wars: Republic Commando HD. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "swrch",
      "star",
      "star wars"
    ],
    "franchise": "Star Wars",
    "coverImage": "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-star-wars-knights-of-the-old-republic-remake-pre-vault",
    "title": "Star Wars: Knights of the Old Republic Remake Pre-Vault",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Star Wars: Knights of the Old Republic Remake Pre-Vault. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "star",
      "star wars"
    ],
    "franchise": "Star Wars",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-star-wars-kotor-1-2",
    "title": "Star Wars: KOTOR 1 & 2",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Star Wars: KOTOR 1 & 2. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "star",
      "star wars"
    ],
    "franchise": "Star Wars",
    "coverImage": "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-mass-effect-andromeda-deluxe-edition",
    "title": "Mass Effect: Andromeda (Deluxe Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Mass Effect: Andromeda (Deluxe Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "meade",
      "mass",
      "mass effect"
    ],
    "franchise": "Mass Effect",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-outer-wilds-archaeologist-edition",
    "title": "Outer Wilds: Archaeologist Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Outer Wilds: Archaeologist Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "owae",
      "outer",
      "outer wilds"
    ],
    "franchise": "Outer Wilds",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-outer-worlds-spacers-choice-edition",
    "title": "The Outer Worlds (Spacers Choice Edition)",
    "genre": "OPEN WORLD / PC AAA",
    "category": "open-world",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of The Outer Worlds (Spacers Choice Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "the",
      "the outer"
    ],
    "franchise": "The Outer",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-no-man-sky-worlds-part-1-update",
    "title": "No Man Sky (Worlds Part 1 Update)",
    "genre": "OPEN WORLD / PC AAA",
    "category": "open-world",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of No Man Sky (Worlds Part 1 Update). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "no",
      "no man"
    ],
    "franchise": "No Man",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-elite-dangerous-odyssey",
    "title": "Elite Dangerous: Odyssey",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Elite Dangerous: Odyssey. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "edo",
      "elite",
      "elite dangerous"
    ],
    "franchise": "Elite Dangerous",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-everspace-2",
    "title": "Everspace 2",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Everspace 2. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "e2",
      "everspace",
      "everspace 2"
    ],
    "franchise": "Everspace 2",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-chorus-deep-space-combat",
    "title": "Chorus (Deep Space Combat)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Chorus (Deep Space Combat). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "cdsc",
      "chorus",
      "chorus deep"
    ],
    "franchise": "Chorus Deep",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-rebel-galaxy-outlaw",
    "title": "Rebel Galaxy Outlaw",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Rebel Galaxy Outlaw. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "rgo",
      "rebel",
      "rebel galaxy"
    ],
    "franchise": "Rebel Galaxy",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-hardspace-shipbreaker",
    "title": "Hardspace: Shipbreaker",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Hardspace: Shipbreaker. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "hs",
      "hardspace",
      "hardspace shipbreaker"
    ],
    "franchise": "Hardspace Shipbreaker",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-satisfactory-1-0-full-release",
    "title": "Satisfactory (1.0 Full Release)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Satisfactory (1.0 Full Release). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "s1fr",
      "satisfactory",
      "satisfactory 1.0"
    ],
    "franchise": "Satisfactory 1.0",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-factorio-space-age",
    "title": "Factorio: Space Age",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Factorio: Space Age. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "fsa",
      "factorio",
      "factorio space"
    ],
    "franchise": "Factorio Space",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dyson-sphere-program",
    "title": "Dyson Sphere Program",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Dyson Sphere Program. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "dsp",
      "dyson",
      "dyson sphere"
    ],
    "franchise": "Dyson Sphere",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-kerbal-space-program-2",
    "title": "Kerbal Space Program 2",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Kerbal Space Program 2. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ksp2",
      "kerbal",
      "kerbal space"
    ],
    "franchise": "Kerbal Space",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-kerbal-space-program-complete",
    "title": "Kerbal Space Program (Complete)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Kerbal Space Program (Complete). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "kspc",
      "kerbal",
      "kerbal space"
    ],
    "franchise": "Kerbal Space",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-oxygen-not-included-spaced-out",
    "title": "Oxygen Not Included (Spaced Out)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Oxygen Not Included (Spaced Out). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "oniso",
      "oxygen",
      "oxygen not"
    ],
    "franchise": "Oxygen Not",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-rimworld-biotech-anomaly",
    "title": "RimWorld (Biotech & Anomaly)",
    "genre": "OPEN WORLD / PC AAA",
    "category": "open-world",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of RimWorld (Biotech & Anomaly). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "rb&a",
      "rimworld",
      "rimworld biotech"
    ],
    "franchise": "RimWorld Biotech",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-prison-architect-psych-ward",
    "title": "Prison Architect (Psych Ward)",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Prison Architect (Psych Ward). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "papw",
      "prison",
      "prison architect"
    ],
    "franchise": "Prison Architect",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-surviving-mars-first-colony",
    "title": "Surviving Mars (First Colony)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Surviving Mars (First Colony). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "smfc",
      "surviving",
      "surviving mars"
    ],
    "franchise": "Surviving Mars",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-frostpunk-on-the-edge",
    "title": "Frostpunk: On The Edge",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Frostpunk: On The Edge. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "fote",
      "frostpunk",
      "frostpunk on"
    ],
    "franchise": "Frostpunk On",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-they-are-billions",
    "title": "They Are Billions",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of They Are Billions. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "tab",
      "they",
      "they are"
    ],
    "franchise": "They Are",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-northgard-viking-strategy",
    "title": "Northgard (Viking Strategy)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Northgard (Viking Strategy). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "nvs",
      "northgard",
      "northgard viking"
    ],
    "franchise": "Northgard Viking",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dune-spice-wars",
    "title": "Dune: Spice Wars",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Dune: Spice Wars. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "dsw",
      "dune",
      "dune spice"
    ],
    "franchise": "Dune Spice",
    "coverImage": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dune-awakening-pre-vault-edition",
    "title": "Dune: Awakening Pre-Vault Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Dune: Awakening Pre-Vault Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "dapve",
      "dune",
      "dune awakening"
    ],
    "franchise": "Dune Awakening",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-warcraft-iii-reforged-classic",
    "title": "Warcraft III: Reforged & Classic",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Warcraft III: Reforged & Classic. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "wir&c",
      "warcraft",
      "warcraft iii"
    ],
    "franchise": "Warcraft III",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-starcraft-ii-campaign-collection",
    "title": "StarCraft II: Campaign Collection",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of StarCraft II: Campaign Collection. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sicc",
      "starcraft",
      "starcraft ii"
    ],
    "franchise": "StarCraft II",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-command-conquer-remastered-collection",
    "title": "Command & Conquer Remastered Collection",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Command & Conquer Remastered Collection. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "c&crc",
      "command",
      "command &"
    ],
    "franchise": "Command &",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-company-of-heroes-3",
    "title": "Company of Heroes 3",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Company of Heroes 3. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "coh3",
      "company",
      "company of"
    ],
    "franchise": "Company of",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-company-of-heroes-2-master-collection",
    "title": "Company of Heroes 2 (Master Collection)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Company of Heroes 2 (Master Collection). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "company",
      "company of"
    ],
    "franchise": "Company of",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-command-conquer-generals-zero-hour",
    "title": "Command & Conquer: Generals & Zero Hour",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Command & Conquer: Generals & Zero Hour. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "command",
      "command &"
    ],
    "franchise": "Command &",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-stronghold-definitive-edition",
    "title": "Stronghold: Definitive Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Stronghold: Definitive Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sde",
      "stronghold",
      "stronghold definitive"
    ],
    "franchise": "Stronghold Definitive",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-stronghold-crusader-hd",
    "title": "Stronghold Crusader HD",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Stronghold Crusader HD. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sch",
      "stronghold",
      "stronghold crusader"
    ],
    "franchise": "Stronghold Crusader",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-crusader-kings-ii-imperial-collection",
    "title": "Crusader Kings II: Imperial Collection",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Crusader Kings II: Imperial Collection. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ckiic",
      "crusader",
      "crusader kings"
    ],
    "franchise": "Crusader Kings",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-mount-blade-ii-bannerlord",
    "title": "Mount & Blade II: Bannerlord",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Mount & Blade II: Bannerlord. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "m&bib",
      "mount",
      "mount &"
    ],
    "franchise": "Mount &",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-mount-blade-warband",
    "title": "Mount & Blade: Warband",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Mount & Blade: Warband. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "m&bw",
      "mount",
      "mount &"
    ],
    "franchise": "Mount &",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-kingdom-come-deliverance-royal-edition",
    "title": "Kingdom Come: Deliverance (Royal Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Kingdom Come: Deliverance (Royal Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "kcdre",
      "kingdom",
      "kingdom come"
    ],
    "franchise": "Kingdom Come",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-chivalry-2-special-edition",
    "title": "Chivalry 2 (Special Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Chivalry 2 (Special Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "c2se",
      "chivalry",
      "chivalry 2"
    ],
    "franchise": "Chivalry 2",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-mordhau",
    "title": "Mordhau",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Mordhau. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "mordhau"
    ],
    "franchise": "Mordhau",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-for-honor-complete-edition",
    "title": "For Honor (Complete Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of For Honor (Complete Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "fhce",
      "for",
      "for honor"
    ],
    "franchise": "For Honor",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-absolver-downfall",
    "title": "Absolver: Downfall",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Absolver: Downfall. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ad",
      "absolver",
      "absolver downfall"
    ],
    "franchise": "Absolver Downfall",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-warband-viking-conquest",
    "title": "Warband: Viking Conquest",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Warband: Viking Conquest. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "wvc",
      "warband",
      "warband viking"
    ],
    "franchise": "Warband Viking",
    "coverImage": "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-ancestors-the-humankind-odyssey",
    "title": "Ancestors: The Humankind Odyssey",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Ancestors: The Humankind Odyssey. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "atho",
      "ancestors",
      "ancestors the"
    ],
    "franchise": "Ancestors The",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-medieval-dynasty-co-op-edition",
    "title": "Medieval Dynasty (Co-Op Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Medieval Dynasty (Co-Op Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "mdcoe",
      "medieval",
      "medieval dynasty"
    ],
    "franchise": "Medieval Dynasty",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-sengoku-dynasty",
    "title": "Sengoku Dynasty",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Sengoku Dynasty. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sd",
      "sengoku",
      "sengoku dynasty"
    ],
    "franchise": "Sengoku Dynasty",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-bellwright-medieval-strategy-rpg",
    "title": "Bellwright (Medieval Strategy RPG)",
    "genre": "RPG ADVENTURE / PC AAA",
    "category": "rpg-adventure",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Bellwright (Medieval Strategy RPG). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "bmsr",
      "bellwright",
      "bellwright medieval"
    ],
    "franchise": "Bellwright Medieval",
    "coverImage": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-enshrouded-full-early-access",
    "title": "Enshrouded (Full Early Access)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Enshrouded (Full Early Access). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "efea",
      "enshrouded",
      "enshrouded full"
    ],
    "franchise": "Enshrouded Full",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-valheim-ashlands-update",
    "title": "Valheim (Ashlands Update)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Valheim (Ashlands Update). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "vau",
      "valheim",
      "valheim ashlands"
    ],
    "franchise": "Valheim Ashlands",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-conan-exiles-complete-collection",
    "title": "Conan Exiles (Complete Collection)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Conan Exiles (Complete Collection). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "cecc",
      "conan",
      "conan exiles"
    ],
    "franchise": "Conan Exiles",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-v-rising-1-0-full-dracula-release",
    "title": "V Rising (1.0 Full Dracula Release)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of V Rising (1.0 Full Dracula Release). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "v",
      "v rising"
    ],
    "franchise": "V Rising",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-smalland-survive-the-wilds",
    "title": "Smalland: Survive the Wilds",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Smalland: Survive the Wilds. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sstw",
      "smalland",
      "smalland survive"
    ],
    "franchise": "Smalland Survive",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-grounded-fully-yoked-edition",
    "title": "Grounded (Fully Yoked Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Grounded (Fully Yoked Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "gfye",
      "grounded",
      "grounded fully"
    ],
    "franchise": "Grounded Fully",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-raft-final-chapter",
    "title": "Raft (Final Chapter)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Raft (Final Chapter). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "rfc",
      "raft",
      "raft final"
    ],
    "franchise": "Raft Final",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-stranded-deep",
    "title": "Stranded Deep",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Stranded Deep. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sd",
      "stranded",
      "stranded deep"
    ],
    "franchise": "Stranded Deep",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-green-hell-spirits-of-amazonia",
    "title": "Green Hell (Spirits of Amazonia)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Green Hell (Spirits of Amazonia). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ghsoa",
      "green",
      "green hell"
    ],
    "franchise": "Green Hell",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-long-dark-survival-edition",
    "title": "The Long Dark (Survival Edition)",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of The Long Dark (Survival Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "tldse",
      "the",
      "the long"
    ],
    "franchise": "The Long",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-project-zomboid-build-42-ready",
    "title": "Project Zomboid (Build 42 Ready)",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Project Zomboid (Build 42 Ready). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "pzb4r",
      "project",
      "project zomboid"
    ],
    "franchise": "Project Zomboid",
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-cataclysm-dark-days-ahead-enhanced",
    "title": "Cataclysm: Dark Days Ahead Enhanced",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Cataclysm: Dark Days Ahead Enhanced. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "cddae",
      "cataclysm",
      "cataclysm dark"
    ],
    "franchise": "Cataclysm Dark",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-7-days-to-die-1-0-official-launch",
    "title": "7 Days to Die (1.0 Official Launch)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of 7 Days to Die (1.0 Official Launch). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "7",
      "7 days"
    ],
    "franchise": "7 Days",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-mist-survival",
    "title": "Mist Survival",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Mist Survival. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ms",
      "mist",
      "mist survival"
    ],
    "franchise": "Mist Survival",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-scum-complete-early-access",
    "title": "Scum (Complete Early Access)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Scum (Complete Early Access). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "scea",
      "scum",
      "scum complete"
    ],
    "franchise": "Scum Complete",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-deadside",
    "title": "Deadside",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Deadside. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "deadside"
    ],
    "franchise": "Deadside",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-sunkenland-water-world-survival",
    "title": "Sunkenland: Water World Survival",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Sunkenland: Water World Survival. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "swws",
      "sunkenland",
      "sunkenland water"
    ],
    "franchise": "Sunkenland Water",
    "coverImage": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-forever-skies",
    "title": "Forever Skies",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Forever Skies. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "fs",
      "forever",
      "forever skies"
    ],
    "franchise": "Forever Skies",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-pacific-drive-deluxe-edition",
    "title": "Pacific Drive (Deluxe Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Pacific Drive (Deluxe Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "pdde",
      "pacific",
      "pacific drive"
    ],
    "franchise": "Pacific Drive",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-jalopy-road-trip-sim",
    "title": "Jalopy (Road Trip Sim)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Jalopy (Road Trip Sim). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "jrts",
      "jalopy",
      "jalopy road"
    ],
    "franchise": "Jalopy Road",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-my-summer-car",
    "title": "My Summer Car",
    "genre": "RACING SPORTS / PC AAA",
    "category": "racing-sports",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of My Summer Car. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "msc",
      "my",
      "my summer"
    ],
    "franchise": "My Summer",
    "coverImage": "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-car-mechanic-simulator-2021",
    "title": "Car Mechanic Simulator 2021",
    "genre": "RACING SPORTS / PC AAA",
    "category": "racing-sports",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Car Mechanic Simulator 2021. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "cms2",
      "car",
      "car mechanic"
    ],
    "franchise": "Car Mechanic",
    "coverImage": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-pc-building-simulator-2",
    "title": "PC Building Simulator 2",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of PC Building Simulator 2. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "pbs2",
      "pc",
      "pc building"
    ],
    "franchise": "PC Building",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-house-flipper-2",
    "title": "House Flipper 2",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of House Flipper 2. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "hf2",
      "house",
      "house flipper"
    ],
    "franchise": "House Flipper",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-powerwash-simulator-all-dlcs",
    "title": "PowerWash Simulator (All DLCs)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of PowerWash Simulator (All DLCs). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "psad",
      "powerwash",
      "powerwash simulator"
    ],
    "franchise": "PowerWash Simulator",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-gas-station-simulator",
    "title": "Gas Station Simulator",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Gas Station Simulator. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "gss",
      "gas",
      "gas station"
    ],
    "franchise": "Gas Station",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-supermarket-simulator",
    "title": "Supermarket Simulator",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Supermarket Simulator. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ss",
      "supermarket",
      "supermarket simulator"
    ],
    "franchise": "Supermarket Simulator",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-internet-cafe-simulator-2",
    "title": "Internet Cafe Simulator 2",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Internet Cafe Simulator 2. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ics2",
      "internet",
      "internet cafe"
    ],
    "franchise": "Internet Cafe",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-contraband-police",
    "title": "Contraband Police",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Contraband Police. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "cp",
      "contraband",
      "contraband police"
    ],
    "franchise": "Contraband Police",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-police-simulator-patrol-officers",
    "title": "Police Simulator: Patrol Officers",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Police Simulator: Patrol Officers. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "pspo",
      "police",
      "police simulator"
    ],
    "franchise": "Police Simulator",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-firefighting-simulator-the-squad",
    "title": "Firefighting Simulator: The Squad",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Firefighting Simulator: The Squad. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "fsts",
      "firefighting",
      "firefighting simulator"
    ],
    "franchise": "Firefighting Simulator",
    "coverImage": "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-bus-simulator-21-next-stop",
    "title": "Bus Simulator 21 Next Stop",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Bus Simulator 21 Next Stop. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "bs2ns",
      "bus",
      "bus simulator"
    ],
    "franchise": "Bus Simulator",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-train-sim-world-4-deluxe",
    "title": "Train Sim World 4 (Deluxe)",
    "genre": "OPEN WORLD / PC AAA",
    "category": "open-world",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Train Sim World 4 (Deluxe). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "tsw4d",
      "train",
      "train sim"
    ],
    "franchise": "Train Sim",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-subway-sim-hamburg",
    "title": "Subway Sim Hamburg",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Subway Sim Hamburg. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ssh",
      "subway",
      "subway sim"
    ],
    "franchise": "Subway Sim",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-construction-simulator-titan-edition",
    "title": "Construction Simulator (Titan Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Construction Simulator (Titan Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "cste",
      "construction",
      "construction simulator"
    ],
    "franchise": "Construction Simulator",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-expeditions-a-mudrunner-game",
    "title": "Expeditions: A MudRunner Game",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Expeditions: A MudRunner Game. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "eamg",
      "expeditions",
      "expeditions a"
    ],
    "franchise": "Expeditions A",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-wreckfest-complete-edition",
    "title": "Wreckfest (Complete Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Wreckfest (Complete Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "wce",
      "wreckfest",
      "wreckfest complete"
    ],
    "franchise": "Wreckfest Complete",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-burnout-paradise-remastered",
    "title": "Burnout Paradise Remastered",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Burnout Paradise Remastered. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "bpr",
      "burnout",
      "burnout paradise"
    ],
    "franchise": "Burnout Paradise",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-flatout-2-collector-edition",
    "title": "FlatOut 2 (Collector Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of FlatOut 2 (Collector Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "f2ce",
      "flatout",
      "flatout 2"
    ],
    "franchise": "FlatOut 2",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-carmageddon-max-damage",
    "title": "Carmageddon: Max Damage",
    "genre": "RACING SPORTS / PC AAA",
    "category": "racing-sports",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Carmageddon: Max Damage. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "cmd",
      "carmageddon",
      "carmageddon max"
    ],
    "franchise": "Carmageddon Max",
    "coverImage": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-crashday-redline-edition",
    "title": "Crashday Redline Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Crashday Redline Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "cre",
      "crashday",
      "crashday redline"
    ],
    "franchise": "Crashday Redline",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-hot-wheels-unleashed-2-turbocharged",
    "title": "Hot Wheels Unleashed 2: Turbocharged",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Hot Wheels Unleashed 2: Turbocharged. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "hwu2t",
      "hot",
      "hot wheels"
    ],
    "franchise": "Hot Wheels",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-sonic-all-stars-racing-transformed",
    "title": "Sonic & All-Stars Racing Transformed",
    "genre": "RACING SPORTS / PC AAA",
    "category": "racing-sports",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Sonic & All-Stars Racing Transformed. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sonic",
      "sonic &"
    ],
    "franchise": "Sonic &",
    "coverImage": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-team-sonic-racing",
    "title": "Team Sonic Racing",
    "genre": "RACING SPORTS / PC AAA",
    "category": "racing-sports",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Team Sonic Racing. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "tsr",
      "team",
      "team sonic"
    ],
    "franchise": "Team Sonic",
    "coverImage": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-sonic-frontiers",
    "title": "Sonic Frontiers",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Sonic Frontiers. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sf",
      "sonic",
      "sonic frontiers"
    ],
    "franchise": "Sonic Frontiers",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-sonic-x-shadow-generations",
    "title": "Sonic X Shadow Generations",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Sonic X Shadow Generations. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sxsg",
      "sonic",
      "sonic x"
    ],
    "franchise": "Sonic X",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-sonic-mania-plus",
    "title": "Sonic Mania Plus",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Sonic Mania Plus. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "smp",
      "sonic",
      "sonic mania"
    ],
    "franchise": "Sonic Mania",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-crash-bandicoot-n-sane-trilogy",
    "title": "Crash Bandicoot N. Sane Trilogy",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Crash Bandicoot N. Sane Trilogy. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "cbnst",
      "crash",
      "crash bandicoot"
    ],
    "franchise": "Crash Bandicoot",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-crash-bandicoot-4-it-about-time",
    "title": "Crash Bandicoot 4: It About Time",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Crash Bandicoot 4: It About Time. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "crash",
      "crash bandicoot"
    ],
    "franchise": "Crash Bandicoot",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-spyro-reignited-trilogy",
    "title": "Spyro Reignited Trilogy",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Spyro Reignited Trilogy. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "srt",
      "spyro",
      "spyro reignited"
    ],
    "franchise": "Spyro Reignited",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-kena-bridge-of-spirits",
    "title": "Kena: Bridge of Spirits",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Kena: Bridge of Spirits. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "kbos",
      "kena",
      "kena bridge"
    ],
    "franchise": "Kena Bridge",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-stray-cyberpunk-cat-adventure",
    "title": "Stray (Cyberpunk Cat Adventure)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Stray (Cyberpunk Cat Adventure). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "scca",
      "stray",
      "stray cyberpunk"
    ],
    "franchise": "Stray Cyberpunk",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-tunic",
    "title": "Tunic",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Tunic. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "tunic"
    ],
    "franchise": "Tunic",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-death-door",
    "title": "Death Door",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Death Door. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "dd",
      "death",
      "death door"
    ],
    "franchise": "Death Door",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-solar-ash",
    "title": "Solar Ash",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Solar Ash. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sa",
      "solar",
      "solar ash"
    ],
    "franchise": "Solar Ash",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-pathless",
    "title": "The Pathless",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of The Pathless. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "tp",
      "the",
      "the pathless"
    ],
    "franchise": "The Pathless",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-abz",
    "title": "Abzû",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Abzû. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "abzû"
    ],
    "franchise": "Abzû",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-journey-pc-collector-edition",
    "title": "Journey (PC Collector Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Journey (PC Collector Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "jpce",
      "journey",
      "journey pc"
    ],
    "franchise": "Journey PC",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-outer-wilds-echoes-of-the-eye",
    "title": "Outer Wilds: Echoes of the Eye",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Outer Wilds: Echoes of the Eye. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "outer",
      "outer wilds"
    ],
    "franchise": "Outer Wilds",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-firewatch",
    "title": "Firewatch",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Firewatch. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "firewatch"
    ],
    "franchise": "Firewatch",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-what-remains-of-edith-finch",
    "title": "What Remains of Edith Finch",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of What Remains of Edith Finch. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "wroef",
      "what",
      "what remains"
    ],
    "franchise": "What Remains",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-vanishing-of-ethan-carter-redux",
    "title": "The Vanishing of Ethan Carter Redux",
    "genre": "RACING SPORTS / PC AAA",
    "category": "racing-sports",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of The Vanishing of Ethan Carter Redux. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "the",
      "the vanishing"
    ],
    "franchise": "The Vanishing",
    "coverImage": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-dear-esther-landmark-edition",
    "title": "Dear Esther: Landmark Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Dear Esther: Landmark Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "dele",
      "dear",
      "dear esther"
    ],
    "franchise": "Dear Esther",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-everybody-gone-to-the-rapture",
    "title": "Everybody Gone to the Rapture",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Everybody Gone to the Rapture. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "egttr",
      "everybody",
      "everybody gone"
    ],
    "franchise": "Everybody Gone",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-gris",
    "title": "Gris",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Gris. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "gris"
    ],
    "franchise": "Gris",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-spiritfarer-farewell-edition",
    "title": "Spiritfarer: Farewell Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Spiritfarer: Farewell Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "sfe",
      "spiritfarer",
      "spiritfarer farewell"
    ],
    "franchise": "Spiritfarer Farewell",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-to-the-moon-finding-paradise",
    "title": "To the Moon & Finding Paradise",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of To the Moon & Finding Paradise. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "to",
      "to the"
    ],
    "franchise": "To the",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-omori",
    "title": "Omori",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Omori. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "omori"
    ],
    "franchise": "Omori",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-undertale",
    "title": "Undertale",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Undertale. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "undertale"
    ],
    "franchise": "Undertale",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-deltarune",
    "title": "Deltarune",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Deltarune. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "deltarune"
    ],
    "franchise": "Deltarune",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-disco-elysium-the-final-cut",
    "title": "Disco Elysium: The Final Cut",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Disco Elysium: The Final Cut. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "detfc",
      "disco",
      "disco elysium"
    ],
    "franchise": "Disco Elysium",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-pentiment-obsidian-mystery",
    "title": "Pentiment (Obsidian Mystery)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Pentiment (Obsidian Mystery). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "pom",
      "pentiment",
      "pentiment obsidian"
    ],
    "franchise": "Pentiment Obsidian",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-citizen-sleeper-1-2",
    "title": "Citizen Sleeper 1 & 2",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Citizen Sleeper 1 & 2. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "cs1&2",
      "citizen",
      "citizen sleeper"
    ],
    "franchise": "Citizen Sleeper",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-return-of-the-obra-dinn",
    "title": "Return of the Obra Dinn",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Return of the Obra Dinn. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "rotod",
      "return",
      "return of"
    ],
    "franchise": "Return of",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-case-of-the-golden-idol",
    "title": "Case of the Golden Idol",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Case of the Golden Idol. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "cotgi",
      "case",
      "case of"
    ],
    "franchise": "Case of",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-chants-of-sennaar",
    "title": "Chants of Sennaar",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Chants of Sennaar. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "cos",
      "chants",
      "chants of"
    ],
    "franchise": "Chants of",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-viewfinder",
    "title": "Viewfinder",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Viewfinder. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "viewfinder"
    ],
    "franchise": "Viewfinder",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-superliminal",
    "title": "Superliminal",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Superliminal. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "superliminal"
    ],
    "franchise": "Superliminal",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-talos-principle-ii",
    "title": "The Talos Principle II",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of The Talos Principle II. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "ttpi",
      "the",
      "the talos"
    ],
    "franchise": "The Talos",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-talos-principle-road-to-gehenna",
    "title": "The Talos Principle: Road to Gehenna",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of The Talos Principle: Road to Gehenna. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "the",
      "the talos"
    ],
    "franchise": "The Talos",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-the-witness",
    "title": "The Witness",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of The Witness. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "tw",
      "the",
      "the witness"
    ],
    "franchise": "The Witness",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-antichamber",
    "title": "Antichamber",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Antichamber. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "antichamber"
    ],
    "franchise": "Antichamber",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-portal-with-rtx",
    "title": "Portal with RTX",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Portal with RTX. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "pwr",
      "portal",
      "portal with"
    ],
    "franchise": "Portal with",
    "coverImage": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-portal-2-co-op-single-player",
    "title": "Portal 2 (Co-op & Single Player)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Portal 2 (Co-op & Single Player). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "portal",
      "portal 2"
    ],
    "franchise": "Portal 2",
    "coverImage": "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-half-life-alyx-non-vr-vr-mod-ready",
    "title": "Half-Life: Alyx (Non-VR & VR Mod Ready)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Half-Life: Alyx (Non-VR & VR Mod Ready). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "half",
      "half life"
    ],
    "franchise": "Half Life",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-half-life-2-20th-anniversary-edition",
    "title": "Half-Life 2: 20th Anniversary Edition",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Half-Life 2: 20th Anniversary Edition. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "half",
      "half life"
    ],
    "franchise": "Half Life",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-black-mesa-definitive-half-life-1",
    "title": "Black Mesa (Definitive Half-Life 1)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Black Mesa (Definitive Half-Life 1). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "black",
      "black mesa"
    ],
    "franchise": "Black Mesa",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-team-fortress-2-premium-collector",
    "title": "Team Fortress 2 (Premium Collector)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Team Fortress 2 (Premium Collector). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "tf2pc",
      "team",
      "team fortress"
    ],
    "franchise": "Team Fortress",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-counter-strike-source-1-6-hd",
    "title": "Counter-Strike: Source & 1.6 HD",
    "genre": "SHOOTER / PC AAA",
    "category": "shooter",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Counter-Strike: Source & 1.6 HD. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "counter",
      "counter strike"
    ],
    "franchise": "Counter Strike",
    "coverImage": "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-left-4-dead-2-modded-vault",
    "title": "Left 4 Dead 2 (Modded Vault)",
    "genre": "HORROR SURVIVAL / PC AAA",
    "category": "horror-survival",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Left 4 Dead 2 (Modded Vault). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "left",
      "left 4"
    ],
    "franchise": "Left 4",
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-garry-mod-complete-addon-vault",
    "title": "Garry Mod (Complete Addon Vault)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2021,
    "popular": true,
    "description": "Full digital PC edition of Garry Mod (Complete Addon Vault). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "gmcav",
      "garry",
      "garry mod"
    ],
    "franchise": "Garry Mod",
    "coverImage": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-rust-staging-main-vault",
    "title": "Rust: Staging & Main Vault",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2022,
    "popular": false,
    "description": "Full digital PC edition of Rust: Staging & Main Vault. High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "rs&mv",
      "rust",
      "rust staging"
    ],
    "franchise": "Rust Staging",
    "coverImage": "https://images.unsplash.com/photo-1612287233201-523e1e2472d2?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-ark-2-pre-vault-edition",
    "title": "Ark 2 (Pre-Vault Edition)",
    "genre": "ACTION / PC AAA",
    "category": "action",
    "releaseYear": 2023,
    "popular": false,
    "description": "Full digital PC edition of Ark 2 (Pre-Vault Edition). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "a2pve",
      "ark",
      "ark 2"
    ],
    "franchise": "Ark 2",
    "coverImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  },
  {
    "id": "game-grand-theft-auto-online-criminal-vault",
    "title": "Grand Theft Auto Online (Criminal Vault)",
    "genre": "OPEN WORLD / PC AAA",
    "category": "open-world",
    "releaseYear": 2024,
    "popular": false,
    "description": "Full digital PC edition of Grand Theft Auto Online (Criminal Vault). High-resolution assets, verified login files, Steam Cloud support, and fast direct installation.",
    "aliases": [
      "grand",
      "grand theft"
    ],
    "franchise": "Grand Theft",
    "coverImage": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    "steamAvailable": true,
    "includedIn399Bundle": true
  }
];
