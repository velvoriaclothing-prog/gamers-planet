import React from 'react';

export const LiveWallpaper: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#09090b]"
    >
      {/* Subtle top-left warm festive radial glow matching dark editorial aesthetic */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 75% 45% at 50% -5%, rgba(220, 38, 38, 0.08), rgba(245, 158, 11, 0.03) 40%, transparent 75%)',
        }}
      />
    </div>
  );
};
