import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext.js';

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  maxAlpha: number;
  pulseSpeed: number;
}

export const LiveWallpaper: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { themeConfig, wallpaperMode } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Color parsing for dynamic canvas styling
    const colorHex = themeConfig.primaryColor;
    // Helper to get RGB
    const hexToRgb = (hex: string) => {
      const parsed = parseInt(hex.replace('#', ''), 16);
      return {
        r: (parsed >> 16) & 255,
        g: (parsed >> 8) & 255,
        b: parsed & 255,
      };
    };
    const rgb = hexToRgb(colorHex);

    // Particle pool: kept lightweight (30-45 particles) for max performance and subtle look
    const particleCount = wallpaperMode === 'subtle' ? 24 : 45;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        vx: (Math.random() - 0.5) * (wallpaperMode === 'subtle' ? 0.15 : 0.35),
        vy: (Math.random() - 0.5) * (wallpaperMode === 'subtle' ? 0.15 : 0.35) - 0.1, // gentle upward drift
        alpha: Math.random() * 0.4 + 0.1,
        maxAlpha: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.015 + 0.005,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Subtle Deep Horizon Cyber Grid
      const horizonY = height * 0.72;
      ctx.save();
      ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.04)`;
      ctx.lineWidth = 1;

      // Horizontal perspective lines
      const gridLines = 8;
      for (let i = 1; i <= gridLines; i++) {
        const lineY = horizonY + Math.pow(i / gridLines, 1.8) * (height - horizonY);
        ctx.beginPath();
        ctx.moveTo(0, lineY);
        ctx.lineTo(width, lineY);
        ctx.stroke();
      }

      // Vanishing perspective rays
      const centerX = width * 0.5;
      const rayCount = 14;
      for (let i = -rayCount; i <= rayCount; i++) {
        const bottomX = centerX + (i * width) / (rayCount * 1.2);
        ctx.beginPath();
        ctx.moveTo(centerX, horizonY - 10);
        ctx.lineTo(bottomX, height);
        ctx.stroke();
      }
      ctx.restore();

      // 2. Draw Subtle Ambient Nebula Glow Orbs
      const orb1X = width * 0.25 + Math.sin(time * 0.5) * 60;
      const orb1Y = height * 0.2 + Math.cos(time * 0.4) * 40;
      const grad1 = ctx.createRadialGradient(orb1X, orb1Y, 10, orb1X, orb1Y, Math.min(width, height) * 0.45);
      grad1.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.09)`);
      grad1.addColorStop(0.6, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.02)`);
      grad1.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const orb2X = width * 0.78 + Math.cos(time * 0.35) * 50;
      const orb2Y = height * 0.65 + Math.sin(time * 0.45) * 45;
      const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 10, orb2X, orb2Y, Math.min(width, height) * 0.4);
      grad2.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.06)`);
      grad2.addColorStop(0.7, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.01)`);
      grad2.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 3. Render Floating Ambient Particles (Subtle Star Dust)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (wallpaperMode !== 'static') {
          p.x += p.vx;
          p.y += p.vy;
          p.alpha += p.pulseSpeed;

          // Wrap edges
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          if (p.alpha > p.maxAlpha || p.alpha < 0.05) {
            p.pulseSpeed = -p.pulseSpeed;
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${Math.max(0.04, Math.min(0.5, p.alpha))})`;
        ctx.fill();

        // Connect nearby particles with subtle faint hairline constellations
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const lineAlpha = (1 - dist / 100) * 0.05;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${lineAlpha})`;
            ctx.stroke();
          }
        }
      }

      if (wallpaperMode !== 'static') {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [themeConfig, wallpaperMode]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 1. Underlying dynamic themed canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 2. CRITICAL LEGIBILITY SCRIM: Guarantees all bundles & text have 100% crystal-clear contrast */}
      <div className="absolute inset-0 bg-[#04060d]/82 backdrop-blur-[0.5px]" />

      {/* 3. Deep Radial Vignette Overlay: Darkens center content flow & frames edges */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 50% 30%, rgba(4, 6, 13, 0.4) 0%, rgba(4, 6, 13, 0.94) 85%)',
        }}
      />
    </div>
  );
};
