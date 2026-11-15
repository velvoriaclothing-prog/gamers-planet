import React from 'react';

const SNOWFLAKES = [
  { left: '4%', size: 2.5, duration: '18s', delay: '-2s', drift: '18px', opacity: 0.22 },
  { left: '11%', size: 2, duration: '23s', delay: '-9s', drift: '-14px', opacity: 0.16 },
  { left: '19%', size: 3, duration: '16s', delay: '-5s', drift: '22px', opacity: 0.28 },
  { left: '27%', size: 2, duration: '21s', delay: '-14s', drift: '-18px', opacity: 0.18 },
  { left: '35%', size: 2.5, duration: '19s', delay: '-7s', drift: '16px', opacity: 0.24 },
  { left: '44%', size: 3, duration: '17s', delay: '-11s', drift: '-20px', opacity: 0.26 },
  { left: '53%', size: 2, duration: '24s', delay: '-3s', drift: '14px', opacity: 0.17 },
  { left: '61%', size: 2.5, duration: '18s', delay: '-15s', drift: '-16px', opacity: 0.25 },
  { left: '69%', size: 3, duration: '15s', delay: '-6s', drift: '20px', opacity: 0.28 },
  { left: '78%', size: 2, duration: '22s', delay: '-12s', drift: '-15px', opacity: 0.18 },
  { left: '86%', size: 2.5, duration: '19s', delay: '-4s', drift: '18px', opacity: 0.23 },
  { left: '94%', size: 2, duration: '20s', delay: '-10s', drift: '-18px', opacity: 0.2 },
];

export const LiveWallpaper: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#09090b]"
    >
      {/* Subtle Christmas winter radial glow: crisp holiday crimson, evergreen pine & frost */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 45% at 50% -6%, rgba(220, 38, 38, 0.10), rgba(16, 185, 129, 0.04) 42%, rgba(186, 230, 253, 0.02) 62%, transparent 80%)',
        }}
      />

      {/* Delicate falling winter snow motes */}
      <div className="absolute inset-0 overflow-hidden">
        {SNOWFLAKES.map((flake, idx) => (
          <span
            key={idx}
            className="gp-snowflake absolute top-0 rounded-full bg-white/90 shadow-[0_0_6px_rgba(255,255,255,0.45)]"
            style={
              {
                left: flake.left,
                width: `${flake.size}px`,
                height: `${flake.size}px`,
                '--snow-duration': flake.duration,
                '--snow-delay': flake.delay,
                '--snow-drift': flake.drift,
                '--snow-opacity': flake.opacity,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
};
