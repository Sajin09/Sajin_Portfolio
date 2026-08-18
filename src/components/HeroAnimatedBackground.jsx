import React, { useEffect, useRef } from 'react';
import './HeroAnimatedBackground.css';

const THEME_COLORS = {
  red: {
    primary: '255, 0, 0',
    light: '255, 50, 50',
    tint: '255, 100, 100',
    glow: '255, 0, 45',
    hex: '#ff0033'
  },
  blue: {
    primary: '0, 114, 245',
    light: '0, 170, 255',
    tint: '56, 189, 248',
    glow: '0, 216, 255',
    hex: '#0072f5'
  },
  green: {
    primary: '16, 185, 129',
    light: '0, 255, 140',
    tint: '52, 211, 153',
    glow: '0, 255, 157',
    hex: '#10b981'
  },
  yellow: {
    primary: '245, 158, 11',
    light: '255, 190, 0',
    tint: '251, 191, 36',
    glow: '255, 230, 0',
    hex: '#f59e0b'
  }
};

export default function HeroAnimatedBackground({ currentTheme = 'red' }) {
  const canvasRef = useRef(null);
  const animFrameId = useRef(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const isMobile = width <= 900;
    const colors = THEME_COLORS[currentTheme] || THEME_COLORS.red;

    // --- Elegant Lower Count Shooting Stars ---
    const starCount = isMobile ? 2 : 4;

    class ShootingStar {
      constructor(initialDelay = 0) {
        this.active = false;
        this.timer = initialDelay;
      }

      spawn() {
        this.active = true;
        // Full screen coverage: spans across the entire viewport
        this.x = Math.random() * (width + 200) - 100;
        this.y = Math.random() * (height * 0.7) - 40;
        this.length = Math.random() * (isMobile ? 130 : 180) + 100;
        this.speed = Math.random() * (isMobile ? 8 : 11) + 10;
        this.angle = (Math.PI / 180) * (Math.random() * 16 + 32); // 32° to 48° diagonal sweep
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.alpha = 0;
        this.maxAlpha = Math.random() * 0.4 + 0.5;
        this.fadePhase = 'in';
        this.life = 0;
        this.maxLife = Math.random() * 38 + 28;
      }

      update() {
        if (!this.active) {
          this.timer--;
          if (this.timer <= 0) {
            this.spawn();
          }
          return;
        }

        this.x += this.vx;
        this.y += this.vy;
        this.life++;

        if (this.fadePhase === 'in') {
          this.alpha += 0.08;
          if (this.alpha >= this.maxAlpha) {
            this.alpha = this.maxAlpha;
            this.fadePhase = 'alive';
          }
        } else if (this.life > this.maxLife - 10) {
          this.alpha -= 0.05;
          if (this.alpha <= 0) {
            this.alpha = 0;
            this.active = false;
            this.timer = Math.random() * (isMobile ? 160 : 140) + 80; // Elegant, calm intervals
          }
        }

        // Screen boundary check
        if (this.x > width + 150 || this.y > height + 150) {
          this.active = false;
          this.timer = Math.random() * (isMobile ? 160 : 140) + 80;
        }
      }

      draw() {
        if (!this.active || this.alpha <= 0) return;

        const tailX = this.x - Math.cos(this.angle) * this.length;
        const tailY = this.y - Math.sin(this.angle) * this.length;

        ctx.save();
        ctx.beginPath();
        
        // 100% Theme-Saturated Color Gradient Tail
        const streakGrad = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
        streakGrad.addColorStop(0, `rgba(${colors.primary}, 0)`);
        streakGrad.addColorStop(0.35, `rgba(${colors.primary}, ${this.alpha * 0.45})`);
        streakGrad.addColorStop(0.7, `rgba(${colors.light}, ${this.alpha * 0.85})`);
        streakGrad.addColorStop(1, `rgba(${colors.glow}, ${this.alpha})`);

        ctx.strokeStyle = streakGrad;
        ctx.lineWidth = isMobile ? 1.8 : 2.4;
        ctx.lineCap = 'round';
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(this.x, this.y);
        ctx.shadowColor = `rgba(${colors.glow}, 1)`;
        ctx.shadowBlur = isMobile ? 14 : 20;
        ctx.stroke();

        // 100% Saturated Glowing Nucleus Head in Theme Color
        ctx.beginPath();
        ctx.arc(this.x, this.y, isMobile ? 2.2 : 2.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colors.light}, ${this.alpha})`;
        ctx.shadowColor = `rgba(${colors.glow}, 1)`;
        ctx.shadowBlur = 16;
        ctx.fill();

        ctx.restore();
      }
    }

    // Stagger initial delays across shooting stars for a calm, organic flow
    const shootingStars = Array.from(
      { length: starCount },
      (_, idx) => new ShootingStar(Math.floor((idx * 65) + Math.random() * 30))
    );

    // --- Main Render Loop ---
    const render = () => {
      if (!isVisibleRef.current) {
        animFrameId.current = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw active shooting stars
      for (let k = 0; k < shootingStars.length; k++) {
        shootingStars[k].update();
        shootingStars[k].draw();
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas.parentElement);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [currentTheme]);

  return (
    <div className="hero-animated-bg-root" aria-hidden="true">
      {/* 1. Deep Atmospheric Theme Gradient Overlays */}
      <div className="hero-ambient-orb hero-orb-spotlight-top"></div>
      <div className="hero-ambient-orb hero-orb-left"></div>
      <div className="hero-ambient-orb hero-orb-right"></div>
      <div className="hero-ambient-orb hero-orb-center"></div>

      {/* 2. High-Tech Theme-Colored Cyber Grid */}
      <div className="hero-cyber-grid-overlay"></div>

      {/* 3. Full-Screen 60FPS Theme-Colored Shooting Stars Canvas */}
      <canvas ref={canvasRef} className="hero-animated-canvas" />

      {/* 4. Soft Vignette Boundary Gradient Masks */}
      <div className="hero-vignette-mask-top"></div>
      <div className="hero-vignette-mask-bottom"></div>
    </div>
  );
}
