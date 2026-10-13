import fs from 'fs';
import path from 'path';

const storePath = path.resolve('./data/store.json');
const store = JSON.parse(fs.readFileSync(storePath, 'utf-8'));

const POPULAR_TITLES_DATA = {
  'bundle-basic-gaming': [
    {
      title: 'Grand Theft Auto V',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg',
      genre: 'Open World'
    },
    {
      title: 'Cyberpunk 2077',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
      genre: 'Sci-Fi RPG'
    },
    {
      title: 'Red Dead Redemption 2',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
      genre: 'Open World Western'
    },
    {
      title: 'God of War',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg',
      genre: 'Action Adventure'
    },
    {
      title: 'Forza Horizon 5',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg',
      genre: 'Racing'
    },
    {
      title: 'The Witcher 3: Wild Hunt',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg',
      genre: 'RPG'
    }
  ],
  'bundle-steam-unlock': [
    {
      title: 'Black Myth: Wukong',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg',
      genre: 'Action RPG'
    },
    {
      title: 'Resident Evil 9 (RE9)',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg',
      genre: 'Survival Horror'
    },
    {
      title: 'Pragmata (Capcom)',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/3357650/header.jpg',
      genre: 'Sci-Fi Action'
    },
    {
      title: '007 First Light',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1659040/header.jpg',
      genre: 'Stealth / Espionage'
    },
    {
      title: 'Forza 6 (Horizon 6)',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2483190/header.jpg',
      genre: 'Open World Racing'
    },
    {
      title: 'Space Marine 2',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2183900/header.jpg',
      genre: 'Action Shooter'
    },
    {
      title: 'Dragon Ball: Sparking! ZERO',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1790600/header.jpg',
      genre: 'Anime Fighting'
    },
    {
      title: 'Silent Hill 2 Remake',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2124490/header.jpg',
      genre: 'Horror'
    }
  ],
  'bundle-full-unlock': [
    {
      title: 'Black Myth: Wukong',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg',
      genre: 'Action RPG'
    },
    {
      title: 'God of War Ragnarök',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/header.jpg',
      genre: 'Action Myth'
    },
    {
      title: "Marvel's Spider-Man Remastered",
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg',
      genre: 'Superhero Action'
    },
    {
      title: 'Ghost of Tsushima',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/header.jpg',
      genre: 'Samurai Action'
    },
    {
      title: 'EA SPORTS FC 25',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2669320/header.jpg',
      genre: 'Football / Sports'
    },
    {
      title: 'Tekken 8',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1778820/header.jpg',
      genre: 'Fighting'
    }
  ],
  'bundle-mega-gaming': [
    {
      title: 'Call of Duty: Black Ops 6',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg',
      genre: 'Shooter'
    },
    {
      title: "Assassin's Creed Mirage",
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2842420/header.jpg',
      genre: 'Action Stealth'
    },
    {
      title: 'Resident Evil 4 Gold Edition',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg',
      genre: 'Survival Horror'
    },
    {
      title: 'Hogwarts Legacy',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg',
      genre: 'Action RPG'
    },
    {
      title: "Baldur's Gate 3",
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg',
      genre: 'RPG'
    },
    {
      title: 'S.T.A.L.K.E.R. 2',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1643320/header.jpg',
      genre: 'Survival FPS'
    }
  ],
  'bundle-ultimate-gaming': [
    {
      title: 'Grand Theft Auto VI',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg',
      genre: 'Crime Epic'
    },
    {
      title: 'Black Myth: Wukong',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg',
      genre: 'Action RPG'
    },
    {
      title: 'Cyberpunk 2077: Phantom Liberty',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
      genre: 'Sci-Fi'
    },
    {
      title: 'Monster Hunter Wilds',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2246340/header.jpg',
      genre: 'Action RPG'
    },
    {
      title: 'Elden Ring: Shadow of the Erdtree',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg',
      genre: 'Action RPG'
    },
    {
      title: 'God of War Ragnarök',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/header.jpg',
      genre: 'Myth Action'
    }
  ]
};

const BUNDLE_MAIN_COVERS = {
  'bundle-basic-gaming': 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg', // Cyberpunk 2077
  'bundle-steam-unlock': 'https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg', // Black Myth Wukong
  'bundle-full-unlock': 'https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/header.jpg',  // God of War Ragnarok
  'bundle-mega-gaming': 'https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg',  // COD Black Ops 6
  'bundle-ultimate-gaming': 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg' // Red Dead Redemption 2
};

store.bundles.forEach((bundle) => {
  if (POPULAR_TITLES_DATA[bundle.id]) {
    bundle.popularTitlesPreview = POPULAR_TITLES_DATA[bundle.id];
  }
  if (BUNDLE_MAIN_COVERS[bundle.id]) {
    bundle.coverImage = BUNDLE_MAIN_COVERS[bundle.id];
  }
});

fs.writeFileSync(storePath, JSON.stringify(store, null, 2), 'utf-8');
console.log('Successfully updated store.json with popular title images and official cover artwork!');
