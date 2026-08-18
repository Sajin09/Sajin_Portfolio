import React from 'react';
import { ArrowUpRight, Code2, Bot, Send } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import HeroAnimatedBackground from './HeroAnimatedBackground';
import sajinImg from '../assets/sajin.png';
import './Hero.css';

export default function Hero({ currentTheme = 'red' }) {
  return (
    <section id="home" className="hero-section">
      
      {/* Futuristic Animated Cyber Theme Gradients, Grid & Motion Engine */}
      <HeroAnimatedBackground currentTheme={currentTheme} />

      {/* Desktop Sajin Cutout Portrait - Only rendered on Desktop (100% FLUSH with bottom red line) */}
      <div className="hero-portrait-container desktop-only-portrait">
        <img
          src={sajinImg}
          alt="Sajin R - Full Stack MERN & AI Developer"
          className="hero-portrait-img"
        />
      </div>

      <div className="hero-container">

        {/* =========================================================================
           1. DESKTOP VIEW STRUCTURE (Strictly visible on screens > 900px)
           ========================================================================= */}
        <div className="hero-desktop-wrapper">

          {/* Top Script Greeting */}
          <div className="hero-greeting-wrapper scroll-reveal delay-1">
            <span className="hero-greeting">Hello I'm</span>
          </div>

          {/* 3D Typography Stack */}
          <div className="hero-typography-stack">

            {/* Layer 1: Solid Background Typography (Behind Sajin) */}
            <div className="hero-typography hero-typography-bg">
              <div className="hero-line hero-line-1">
                <span className="hero-text-white">SAJIN</span>
                <span className="hero-text-red">SOFTWARE</span>
              </div>
              <div className="hero-line hero-line-2">
                <span className="hero-text-red">DEVELOPER</span>
              </div>
            </div>

            {/* Layer 3: Foreground Stroke Outline (Strictly Over Sajin's Blazer & Chest) */}
            <div className="hero-typography hero-typography-fg" aria-hidden="true">
              <div className="hero-line hero-line-1">
                <span className="hero-text-empty">SAJIN</span>
                <span className="hero-text-empty">SOFTWARE</span>
              </div>
              <div className="hero-line hero-line-2">
                <span className="hero-text-stroke">DEVELOPER</span>
              </div>
            </div>

          </div>

          {/* Bottom Row: Social Icons (Left) & Stats (Right) */}
          <div className="hero-bottom-row">
            {/* Social Icons on Left (Matching Reference Squircle App Design) */}
            <div className="hero-social-icons scroll-reveal-left delay-3">

              {/* 1. LinkedIn */}
              <a
                href="https://linkedin.com/in/sajinr"
                target="_blank"
                rel="noreferrer"
                className="hero-social-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <svg className="social-svg" viewBox="0 0 24 24" fill="#000000">
                  <circle cx="4.98" cy="4.5" r="2.4" />
                  <rect x="2.5" y="9" width="5" height="13" rx="1.2" />
                  <path d="M10 9h4.5v1.8h.06c.63-1.2 2.18-2.3 4.2-2.3 4.5 0 5.3 3 5.3 6.8V22H19v-6.2c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V22h-4.5V9z" />
                </svg>
              </a>

              {/* 2. Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hero-social-btn"
                aria-label="Instagram Profile"
                title="Instagram"
              >
                <svg className="social-svg" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.5" cy="6.5" r="1" fill="#000000" stroke="none" />
                </svg>
              </a>

              {/* 3. WhatsApp */}
              <a
                href="https://wa.me/919585123409"
                target="_blank"
                rel="noreferrer"
                className="hero-social-btn"
                aria-label="WhatsApp Chat"
                title="WhatsApp"
              >
                <WhatsAppIcon size={20} className="social-svg" />
              </a>

              {/* 4. Gmail */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sajin0904@gmail.com&su=Inquiry%20from%20Portfolio"
                target="_blank"
                rel="noreferrer"
                className="hero-social-btn"
                aria-label="Email Sajin"
                title="Gmail"
              >
                <svg className="social-svg" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2.5" y="4" width="19" height="16" rx="3.5" ry="3.5" />
                  <path d="M21.5 5.5L12 13 2.5 5.5" />
                </svg>
              </a>

            </div>

            {/* Stats Column on Right */}
            <div className="hero-stats-column scroll-reveal-right delay-3">
              <div className="hero-stat-item">
                <div className="hero-stat-num">3+</div>
                <div className="hero-stat-text">
                  <span>YEARS OF</span>
                  <span>EXPERIENCE</span>
                </div>
              </div>

              <div className="hero-stat-divider"></div>

              <div className="hero-stat-item">
                <div className="hero-stat-num">50+</div>
                <div className="hero-stat-text">
                  <span>PROJECT</span>
                  <span>COMPLETED</span>
                </div>
              </div>

              <div className="hero-stat-divider"></div>

              <div className="hero-stat-item">
                <div className="hero-stat-num">5+</div>
                <div className="hero-stat-text">
                  <span>TEAM</span>
                  <span>MANAGEMENT</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* =========================================================================
           2. MOBILE ALTERNATIVE UI (Strictly visible on screens <= 900px)
           ========================================================================= */}
        <div className="hero-mobile-layout">

          {/* Script Greeting & High-Impact Headline */}
          <div className="hero-mob-intro">
            <span className="hero-mob-greeting">Hello I'm</span>
            <h1 className="hero-mob-title">
              <span className="hero-mob-title-name">SAJIN</span>
              <span className="hero-mob-title-role">SOFTWARE DEVELOPER</span>
            </h1>
          </div>

          {/* Futuristic Mobile Portrait Card Frame */}
          <div className="hero-mob-portrait-stage">
            <div className="hero-mob-ambient-glow"></div>

            {/* Cyber Arch Frame */}
            <div className="hero-mob-portrait-frame">
              <img
                src={sajinImg}
                alt="Sajin R - Software Developer"
                className="hero-mob-portrait-img"
              />
              <div className="hero-mob-portrait-overlay"></div>
            </div>

            {/* Floating Cyber Badges */}
            <div className="hero-mob-badge badge-top-right">
              <Code2 size={13} className="badge-icon" />
              <span>MERN Stack</span>
            </div>

            <div className="hero-mob-badge badge-bottom-left">
              <Bot size={13} className="badge-icon" />
              <span>AI Engineer</span>
            </div>
          </div>

          {/* Punchy Concise Bio */}
          <p className="hero-mob-bio">
            Engineering responsive web apps, high-performance backends, and AI workflows with 3+ years of production experience.
          </p>

          {/* Quick Action CTA Buttons */}
          <div className="hero-mob-cta-group">
            <a href="#projects" className="hero-mob-btn-primary">
              <span>View Projects</span>
              <ArrowUpRight size={17} />
            </a>
            <a href="#contact" className="hero-mob-btn-secondary">
              <Send size={14} />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Social Icons Row */}
          <div className="hero-mob-socials">
            <a
              href="https://linkedin.com/in/sajinr"
              target="_blank"
              rel="noreferrer"
              className="hero-mob-social-btn"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <circle cx="4.98" cy="4.5" r="2.4" />
                <rect x="2.5" y="9" width="5" height="13" rx="1.2" />
                <path d="M10 9h4.5v1.8h.06c.63-1.2 2.18-2.3 4.2-2.3 4.5 0 5.3 3 5.3 6.8V22H19v-6.2c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V22h-4.5V9z" />
              </svg>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hero-mob-social-btn"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <a
              href="https://wa.me/919585123409"
              target="_blank"
              rel="noreferrer"
              className="hero-mob-social-btn"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={20} />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sajin0904@gmail.com&su=Inquiry%20from%20Portfolio"
              target="_blank"
              rel="noreferrer"
              className="hero-mob-social-btn"
              aria-label="Gmail"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y="4" width="19" height="16" rx="3.5" ry="3.5" />
                <path d="M21.5 5.5L12 13 2.5 5.5" />
              </svg>
            </a>
          </div>

          {/* 3-Card Glassmorphism Stats Matrix */}
          <div className="hero-mob-stats-matrix">
            <div className="hero-mob-stat-card">
              <span className="mob-stat-number">3+</span>
              <span className="mob-stat-label">Years Exp</span>
            </div>
            <div className="hero-mob-stat-card">
              <span className="mob-stat-number">50+</span>
              <span className="mob-stat-label">Projects</span>
            </div>
            <div className="hero-mob-stat-card">
              <span className="mob-stat-number">5+</span>
              <span className="mob-stat-label">Team Lead</span>
            </div>
          </div>

        </div>

      </div>

      {/* Radiant Glowing Theme Divider Line */}
      <div className="hero-bottom-divider-line"></div>
    </section>
  );
}
