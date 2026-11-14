import React from 'react';

const COLLAGE_COVERS = [
  'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg',  // GTA V
  'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg', // RDR2
  'https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg', // Black Myth Wukong
  'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg', // Cyberpunk 2077
  'https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg', // God of War
  'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg', // Elden Ring
  'https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg', // RE4 Remake
  'https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg', // Forza Horizon 5
  'https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/header.jpg', // God of War Ragnarok
  'https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg', // Spider-Man
  'https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg',  // Hogwarts Legacy
  'https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/header.jpg', // Ghost of Tsushima
];

interface MosaicBackdropProps {
  extraCovers?: string[];
}

export const MosaicBackdrop: React.FC<MosaicBackdropProps> = ({ extraCovers = [] }) => {
  const tiles = React.useMemo(() => {
    const merged = [...extraCovers.filter(Boolean), ...COLLAGE_COVERS];
    const unique = Array.from(new Set(merged));
    // Fill 18 tiles cleanly for multi-row diagonal collage
    const out: string[] = [];
    for (let i = 0; i < 18; i++) {
      out.push(unique[i % unique.length]);
    }
    return out;
  }, [extraCovers]);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-[360px] sm:h-[430px] overflow-hidden pointer-events-none select-none z-0"
    >
      {/* Angled game artwork mosaic strips */}
      <div className="w-[115%] -ml-[7.5%] h-full grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-2.5 opacity-35 scale-105 transform -skew-x-12">
        {tiles.map((src, idx) => (
          <div
            key={`${src}-${idx}`}
            className="relative overflow-hidden bg-zinc-900/80 border border-white/[0.04]"
          >
            <img
              src={src}
              alt=""
              referrerPolicy="no-referrer"
              loading="eager"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
              className="w-full h-full object-cover object-center grayscale-[15%] contrast-110"
            />
          </div>
        ))}
      </div>

      {/* Top navbar soft scrim + bottom fade directly into #09090b */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(9,9,11,0.58) 0%, rgba(9,9,11,0.48) 32%, rgba(9,9,11,0.88) 76%, #09090b 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 25% 40%, rgba(9,9,11,0.45) 0%, transparent 75%)',
        }}
      />
    </div>
  );
};
